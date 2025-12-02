import type { VercelRequest, VercelResponse } from "@vercel/node";
import { embedText } from "../utils/embeddings.js";
import { cosineSimilarity } from "../utils/similarity.js";
import { generateAnswer } from "../utils/gpt.js";
import { kv } from "@vercel/kv";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: "No question provided" });

    // Retrieve vectors from KV
    const raw = await kv.get("excelchat-vectors");
    const vectors = raw ? JSON.parse(raw as string) : [];

    if (!vectors.length) return res.json({ answer: "No data found. Please upload a CSV first." });

    const qEmbedding = await embedText(question);

    const scored = vectors
      .map((record: any) => ({ ...record, score: cosineSimilarity(qEmbedding, record.embedding) }))
      .sort((a: any, b: any) => b.score - a.score)
      .slice(0, 8);

    const context = scored.map((s: any) => s.text).join("\n");

    const answer = await generateAnswer(question, context);

    res.json({ answer });
  } catch (err) {
    res.status(500).json({ answer: "⚠️ Error fetching answer." });
  }
}
