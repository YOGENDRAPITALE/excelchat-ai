import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Upload,
  Database,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Upload Your Data",
    description: "Simply drag and drop your Excel file, CSV, or connect to Google Sheets. Our system automatically detects your data structure and columns.",
    details: [
      "Support for .xlsx, .xls, and .csv formats",
      "Automatic column and data type detection",
      "Handle files up to 100MB",
      "Multiple sheets supported",
    ],
  },
  {
    number: "02",
    icon: Database,
    title: "AI Embeds Your Data",
    description: "Our advanced AI processes and understands your data, creating semantic embeddings that enable natural language understanding.",
    details: [
      "Vector embeddings for semantic search",
      "Intelligent data indexing",
      "Relationship detection between columns",
      "Context preservation for accuracy",
    ],
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Ask Your Questions",
    description: "Type your questions in plain English. No SQL, no formulas, no technical knowledge required. Just ask like you would ask a colleague.",
    details: [
      "Natural language processing",
      "Context-aware conversations",
      "Multi-turn dialogue support",
      "Smart query suggestions",
    ],
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Get Intelligent Answers",
    description: "Receive accurate, contextual answers with supporting data. The AI can explain its reasoning and provide additional insights.",
    details: [
      "Accurate data retrieval",
      "Visual charts when relevant",
      "Source citation from your data",
      "Confidence scoring",
    ],
  },
];

export default function HowItWorks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How <span className="gradient-text">ExcelChat</span> Works
            </h1>
            <p className="text-lg text-muted-foreground">
              From spreadsheet to intelligent conversation in four simple steps. No coding required.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-px bg-gradient-to-b from-primary to-primary/20 hidden md:block" />
                )}

                <div className="flex gap-6 md:gap-10 mb-16 last:mb-0">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-soft">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-lg bg-foreground text-background flex items-center justify-center text-xs font-bold">
                        {step.number}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex justify-center mt-4 md:hidden">
                        <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{step.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {step.details.map((detail, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <div className="w-2 h-2 rounded-full gradient-bg shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow Diagram */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">Simple Visual Flow</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 md:gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl gradient-bg flex items-center justify-center shadow-soft mb-3">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <p className="text-sm font-medium text-foreground max-w-[100px]">{step.title}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-primary hidden md:block" />
                )}
                {index < steps.length - 1 && (
                  <ArrowDown className="w-6 h-6 text-primary md:hidden" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the simplicity yourself. Upload your first file and start chatting in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Try Demo Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/features">Explore Features</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
