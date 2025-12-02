import type { VercelRequest, VercelResponse } from "@vercel/node";
import Papa from "papaparse";
import { embedText } from "../utils/embeddings.js";
import { setVectors } from "./chat.js"; // Import chat API setter

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    try {
      const file = req.body.file; // file should be sent as base64 or FormData
      if (!file) return res.status(400).json({ error: "No file uploaded" });

      // Parse CSV
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: async function (results) {
          const rows = results.data;
          const vectorized: { id: string; text: string; embedding: number[] }[] = [];

          for (const row of rows) {
            const text = JSON.stringify(row);
            const embedding = await embedText(text);

            vectorized.push({
              id: crypto.randomUUID(),
              text,
              embedding,
            });
          }

          // Populate chat API in-memory store
          setVectors(vectorized);

          res.json({ success: true, total: vectorized.length });
        },
        error: function (err) {
          res.status(500).json({ error: err.message });
        },
      });
    } catch (err) {
      res.status(500).json({ error: "Error processing file" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
