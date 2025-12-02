// Vercel-compatible serverless handler
const formidable = require('formidable');
const fs = require('fs');
const parse = require('csv-parse/sync').parse;
const { embedText } = require('./lib/embeddings');
const { upsert } = require('./lib/vectorStore');


module.exports = async function (req, res) {
if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');


const form = new formidable.IncomingForm();
form.parse(req, async (err, fields, files) => {
try {
if (err) throw err;
const f = files.file;
if (!f) return res.status(400).json({ error: 'No file uploaded (field name: file)' });
const raw = fs.readFileSync(f.filepath || f.path, 'utf8');
const records = parse(raw, { columns: true, skip_empty_lines: true });


// For each row, create a text chunk and embed
let count = 0;
for (const row of records) {
const id = row.record_id || `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
const text = Object.entries(row).map(([k, v]) => `${k}: ${v}`).join('\n');
const embedding = await embedText(text);
upsert(String(id), embedding, { row });
count++;
}


return res.json({ status: 'ok', ingested: count });
} catch (e) {
console.error(e);
return res.status(500).json({ error: e.message });
}
});
};
