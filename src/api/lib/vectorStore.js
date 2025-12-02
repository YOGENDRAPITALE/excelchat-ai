// simple file-based vector store for prototype purposes only
const fs = require('fs');
const path = require('path');


const storePath = process.env.VECTOR_STORE_FILE || path.resolve(__dirname, '../../data/embeddings.json');


function ensureStore() {
const dir = path.dirname(storePath);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
if (!fs.existsSync(storePath)) fs.writeFileSync(storePath, JSON.stringify([]));
}


function load() {
ensureStore();
const raw = fs.readFileSync(storePath, 'utf8');
return JSON.parse(raw);
}


function save(items) {
ensureStore();
fs.writeFileSync(storePath, JSON.stringify(items, null, 2));
}


function upsert(id, embedding, metadata) {
const items = load();
const idx = items.findIndex(i => i.id === id);
const record = { id, embedding, metadata };
if (idx >= 0) items[idx] = record;
else items.push(record);
save(items);
}


function cosine(a, b) {
let dot = 0.0, na = 0.0, nb = 0.0;
for (let i = 0; i < a.length; i++) {
dot += a[i] * b[i];
na += a[i] * a[i];
nb += b[i] * b[i];
}
return dot / (Math.sqrt(na) * Math.sqrt(nb));
}


function similaritySearch(queryEmbedding, topK = 5) {
const items = load();
const scored = items.map(it => ({ item: it, score: cosine(queryEmbedding, it.embedding) }));
scored.sort((a, b) => b.score - a.score);
return scored.slice(0, topK).map(s => s.item);
}


module.exports = { upsert, similaritySearch, load };
