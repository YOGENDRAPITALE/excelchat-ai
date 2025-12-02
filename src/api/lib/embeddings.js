// lightweight wrapper around OpenAI embeddings
const OpenAI = require('openai');
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


async function embedText(text) {
if (!process.env.OPENAI_API_KEY) throw new Error('OPENAI_API_KEY not set');
// use the embeddings API
const res = await client.embeddings.create({ model: 'text-embedding-3-small', input: text });
return res.data[0].embedding;
}


module.exports = { embedText };
