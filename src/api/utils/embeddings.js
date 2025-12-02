import { pipeline } from "@xenova/transformers";

let embedModel;

export async function loadEmbeddingModel() {
  if (!embedModel) {
    embedModel = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  }
  return embedModel;
}

export async function embedText(text) {
  const model = await loadEmbeddingModel();
  const output = await model(text);
  return Array.from(output.data);
}
