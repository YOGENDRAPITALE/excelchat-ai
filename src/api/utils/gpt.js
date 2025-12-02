import { generateText } from "@vercel/ai";

export async function generateAnswer(question, context) {
  const prompt = `
You are a data analysis assistant. You answer only based on the provided CSV data.

CONTEXT:
${context}

QUESTION:
${question}

Provide a clear, factual answer referencing the numbers from the context only.
`;

  const response = await generateText({
    model: "gpt-4.1-mini",
    prompt,
  });

  return response.text;
}
