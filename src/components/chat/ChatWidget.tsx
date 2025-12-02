import { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { MessageSquare } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "👋 Hello! I'm your Excel-powered AI assistant. Upload your Excel file or ask a question about your data. I can help you analyze spreadsheets, answer questions, and find insights!",
  },
];

const mockResponses = [
  "Based on your data, I can see that Q3 sales increased by 23% compared to Q2. The top-performing product category was Electronics.",
  "I've analyzed your spreadsheet. There are 1,247 total records. The average order value is $156.32, with a median of $98.50.",
  "Looking at the trends in your data, I notice a strong correlation between marketing spend and customer acquisition. Would you like me to break this down further?",
  "Your Excel file shows 5 sheets with data spanning from January 2023 to December 2024. The most active month was November with 342 transactions.",
  "I found some interesting patterns! Customer retention rate improved by 15% after implementing the loyalty program in March.",
];

export function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 1000));

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: mockResponses[Math.floor(Math.random() * mockResponses.length)],
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full bg-card rounded-2xl border border-border shadow-card overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-border bg-secondary/30">
        <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-soft">
          <MessageSquare className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">ExcelChat Assistant</h3>
          <p className="text-xs text-muted-foreground">Powered by AI</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-muted-foreground">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto">
        {messages.map((message) => (
          <ChatMessage key={message.id} role={message.role} content={message.content} />
        ))}
        {isLoading && (
          <div className="flex gap-3 p-4">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <MessageSquare className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} disabled={isLoading} placeholder="Ask about your Excel data..." />
    </div>
  );
}
