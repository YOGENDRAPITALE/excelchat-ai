import { Layout } from "@/components/layout/Layout";
import { ChatWidget } from "@/components/chat/ChatWidget";
import { FileUpload } from "@/components/upload/FileUpload";
import { FileSpreadsheet, MessageCircle, Lightbulb } from "lucide-react";

const tips = [
  "Ask about specific data points: \"What was the revenue in March?\"",
  "Request summaries: \"Summarize the sales performance by region\"",
  "Compare data: \"Compare Q1 vs Q2 expenses\"",
  "Find trends: \"Show me the growth trend over the last 6 months\"",
];

export default function Demo() {
  return (
    <Layout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Try the <span className="gradient-text">ExcelChat</span> Demo
            </h1>
            <p className="text-lg text-muted-foreground">
              Upload your Excel file and start asking questions about your data. Experience the power of AI-driven data conversations.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {/* Chat Widget - Left Side */}
            <div className="lg:col-span-3 h-[600px]">
              <ChatWidget />
            </div>

            {/* Instructions & Upload - Right Side */}
            <div className="lg:col-span-2 space-y-6">
              {/* Upload Section */}
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                    <FileSpreadsheet className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Upload Your Data</h3>
                    <p className="text-xs text-muted-foreground">Excel or CSV files supported</p>
                  </div>
                </div>
                <FileUpload />
              </div>

              {/* Tips Section */}
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Pro Tips</h3>
                    <p className="text-xs text-muted-foreground">Get better answers</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm">
                      <MessageCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Info Card */}
              <div className="bg-accent/50 rounded-2xl p-6 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Demo Mode</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This is a demo with simulated responses. In production, responses are generated based on your actual uploaded data using advanced AI models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
