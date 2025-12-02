import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from "fs";
import path from "path";
import { embedText } from "../utils/embeddings.js";
import { cosineSimilarity } from "../utils/similarity.js";
import { generateAnswer } from "../utils/gpt.js";

// Simple in-memory vector store (replace with DB for prod)
let vectors: { id: string; text: string; embedding: number[] }[] = [];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "POST") {
    const { question } = req.body;
    if (!question) return res.status(400).json({ error: "No question provided" });

    if (vectors.length === 0) return res.json({ answer: "No data found. Please upload a CSV first." });

    const qEmbedding = await embedText(question);

    const scored = vectors
      .map((record) => ({ ...record, score: cosineSimilarity(qEmbedding, record.embedding) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    const context = scored.map((s) => s.text).join("\n");

    const answer = await generateAnswer(question, context);

    return res.json({ answer });
  }

  res.status(405).json({ error: "Method not allowed" });
}

// Optional: expose a function to populate vectors from upload.js
export function setVectors(newVectors: { id: string; text: string; embedding: number[] }[]) {
  vectors = newVectors;
}
