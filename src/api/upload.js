import Papa from "papaparse";
import localforage from "localforage";
import { embedText } from "./utils/embeddings.js";

export async function uploadCSV(file) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async function (results) {
        const rows = results.data;

        // VECTOR DATABASE STORAGE
        const store = localforage.createInstance({ name: "excelchat-vector-db" });
        const vectorized = [];

        for (const row of rows) {
          const text = JSON.stringify(row);
          const embedding = await embedText(text);

          vectorized.push({
            id: crypto.randomUUID(),
            text,
            embedding,
          });
        }

        await store.setItem("vectors", vectorized);
        resolve({ success: true, total: vectorized.length });
      },
      error: reject,
    });
  });
}
