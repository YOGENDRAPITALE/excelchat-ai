import localforage from "localforage";
import { embedText } from "../utils/embeddings";
import { cosineSimilarity } from "../utils/similarity";
import { generateAnswer } from "../utils/gpt";

export async function queryChat(question) {
  try {
    const store = localforage.createInstance({ name: "excelchat-vector-db" });
    const vectors = (await store.getItem("vectors")) || [];

    if (vectors.length === 0) {
      return "⚠️ No data available. Please upload a CSV/Excel first.";
    }

    const qEmbedding = await embedText(question);

    const ranked = vectors
      .map((row) => ({
        ...row,
        score: cosineSimilarity(qEmbedding, row.embedding),
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    const context = ranked.map((x) => x.text).join("\n");

    const answer = await generateAnswer(question, context);
    return answer;
  } catch (error) {
    console.error("❌ queryChat error:", error);
    return "⚠️ Error fetching answer.";
  }
}
