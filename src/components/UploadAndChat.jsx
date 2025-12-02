import React, { useState } from "react";
import { uploadCSV } from "../api/upload.js";
import { queryChat } from "../api/chat.js";

export default function UploadAndChat() {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    if (!file) return alert("Please select a CSV file first.");
    setLoading(true);
    const result = await uploadCSV(file);
    setLoading(false);
    alert(`Uploaded & embedded ${result.total} rows.`);
  }

  async function ask() {
    if (!question) return alert("Please enter a question.");
    setLoading(true);
    const res = await queryChat(question);
    setAnswer(res);
    setLoading(false);
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Upload CSV & Chat</h2>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        className="px-4 py-2 bg-blue-700 text-white rounded"
        onClick={handleUpload}
      >
        Upload & Process
      </button>

      <div className="pt-4">
        <textarea
          className="border p-2 w-full"
          rows={4}
          placeholder="Ask a question using your CSV data..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          className="px-4 py-2 bg-green-600 text-white rounded mt-2"
          onClick={ask}
        >
          Ask
        </button>
      </div>

      {answer && (
        <div className="border p-4 bg-gray-50 mt-4 rounded">
          <b>Answer:</b>
          <p>{answer}</p>
        </div>
      )}

      {loading && <p className="text-gray-500 mt-2">Processing...</p>}
    </div>
  );
}
