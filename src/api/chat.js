// Vercel-compatible serverless handler: receives { question }
const { embedText } = require('./lib/embeddings');
const { similaritySearch } = require('./lib/vectorStore');
const OpenAI = require('openai');


const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


module.exports = async function (req, res) {
try {
if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');
const { question } = req.body || (await jsonBody(req));
if (!question) return res.status(400).json({ error: 'question is required' });


const qEmb = await embedText(question);
const topK = Number(process.env.MAX_RETRIEVALS || 5);
const nearest = similaritySearch(qEmb, topK);


// Build context from nearest rows
const context = nearest.map(n => {
const meta = n.metadata && n.metadata.row ? n.metadata.row : n.metadata;
return JSON.stringify(meta);
}).join('\n---\n');


const prompt = `You are a helpful assistant. Use the following data to answer the user's question. Be concise and cite the row ids when possible.\n\nDATA:\n${context}\n\nQUESTION:\n${question}`;


const completion = await openai.chat.completions.create({
model: 'gpt-4o-mini',
messages: [{ role: 'user', content: prompt }],
max_tokens: 400
});


const answer = completion.choices?.[0]?.message?.content || '';
res.json({ answer, sources: nearest.map(n => n.id) });
} catch (e) {
console.error(e);
res.status(500).json({ error: e.message });
}
};


// small helper to parse JSON body for serverless
function jsonBody(req) {
return new Promise((resolve, reject) => {
let data = '';
req.on('data', chunk => data += chunk);
req.on('end', () => {
try { resolve(JSON.parse(data)); } catch (e) { resolve({}); }
});
req.on('error', reject);
});
}
