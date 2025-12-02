import React, { useState } from 'react';


export default function UploadAndChat() {
const [file, setFile] = useState<File | null>(null);
const [question, setQuestion] = useState('');
const [answer, setAnswer] = useState('');
const [loading, setLoading] = useState(false);


async function uploadFile() {
if (!file) return alert('Choose a file');
setLoading(true);
const fd = new FormData();
fd.append('file', file);
const res = await fetch('/api/upload', { method: 'POST', body: fd });
const j = await res.json();
setLoading(false);
if (res.ok) alert(`Ingested ${j.ingested} rows`);
else alert(j.error || 'Upload failed');
}


async function ask() {
if (!question) return;
setLoading(true);
const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question }) });
const j = await res.json();
setAnswer(j.answer || j.error || 'No answer');
setLoading(false);
}


return (
<div className="p-4">
<h2 className="text-xl font-semibold">Upload CSV/Excel and ask questions</h2>
<div className="mt-3">
<input type="file" accept=".csv,.xlsx" onChange={e => setFile(e.target.files?.[0] || null)} />
<button onClick={uploadFile} disabled={loading} className="ml-2 px-3 py-1 bg-blue-600 text-white rounded">Upload</button>
</div>


<div className="mt-6">
<input value={question} onChange={e => setQuestion(e.target.value)} placeholder="Ask something about the uploaded data" className="border p-2 w-full" />
<button onClick={ask} disabled={loading} className="mt-2 px-3 py-1 bg-green-600 text-white rounded">Ask</button>
</div>


<div className="mt-6">
<h3 className="font-medium">Answer</h3>
<div className="border rounded p-3 min-h-[80px]">{loading ? 'Thinking...' : answer}</div>
</div>
</div>
);
}
