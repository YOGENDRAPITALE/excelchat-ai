import localforage from "localforage";
import { embedText } from "./utils/embeddings.js";
import { cosineSimilarity } from "./utils/similarity.js";
import { generateAnswer } from "./utils/gpt.js";

export async function queryChat(question) {
  const store = localforage.createInstance({ name: "excelchat-vector-db" });
  const vectors = (await store.getItem("vectors")) || [];

  if (!vectors || vectors.length === 0) {
    return "No data found. Please upload a CSV file first.";
  }

  const qEmbedding = await embedText(question);

  const scored = vectors
    .map((record) => ({
      ...record,
      score: cosineSimilarity(qEmbedding, record.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);

  const context = scored.map((s) => s.text).join("\n");

  const answer = await generateAnswer(question, context);

  return answer;
}
