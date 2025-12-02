export async function uploadCSV(file: File) {
const fd = new FormData();
fd.append('file', file);
const res = await fetch('/api/upload', { method: 'POST', body: fd });
return res.json();
}


export async function askQuestion(q: string) {
const res = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question: q }) });
return res.json();
}
