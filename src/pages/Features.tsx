import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FileSpreadsheet,
  Brain,
  Zap,
  Shield,
  Code,
  MessageSquare,
  Database,
  Globe,
  BarChart3,
  Lock,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";

const mainFeatures = [
  {
    icon: FileSpreadsheet,
    title: "Excel & Google Sheets Support",
    description: "Upload Excel files (.xlsx, .xls) or CSV files directly. Connect to Google Sheets for real-time data sync.",
    benefits: ["Drag & drop upload", "Auto-detect columns", "Large file support", "Multiple sheets"],
  },
  {
    icon: Brain,
    title: "Natural Language Processing",
    description: "Ask questions in plain English. Our AI understands context, intent, and can handle complex queries.",
    benefits: ["Context-aware responses", "Multi-turn conversations", "Clarifying questions", "Smart suggestions"],
  },
  {
    icon: Database,
    title: "Database Connectivity",
    description: "Connect directly to your databases for real-time data access. Supports PostgreSQL, MySQL, and more.",
    benefits: ["Real-time data", "Secure connections", "Query optimization", "Schema detection"],
  },
  {
    icon: MessageSquare,
    title: "Agentic AI Reasoning",
    description: "Advanced AI that can perform multi-step analysis, combine data sources, and execute complex tasks.",
    benefits: ["Multi-step reasoning", "Data aggregation", "Pattern recognition", "Automated insights"],
  },
  {
    icon: Code,
    title: "Embeddable Widget",
    description: "Add the chatbot to any website with a simple code snippet. Fully customizable to match your brand.",
    benefits: ["One-line embed", "Custom styling", "White-label option", "Responsive design"],
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Automatically generate charts, graphs, and visualizations from your data queries.",
    benefits: ["Auto-charts", "Export options", "Interactive graphs", "Dashboard views"],
  },
];

const additionalFeatures = [
  { icon: Shield, label: "Enterprise Security" },
  { icon: Lock, label: "SOC 2 Compliant" },
  { icon: Globe, label: "Multi-language" },
  { icon: Clock, label: "24/7 Availability" },
  { icon: Users, label: "Team Collaboration" },
  { icon: Zap, label: "Fast Responses" },
];

export default function Features() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Powerful Features for{" "}
              <span className="gradient-text">Data Conversations</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to transform your spreadsheets into intelligent, conversational data experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {feature.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {benefit}
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

      {/* Additional Features */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">And Much More</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-card border border-border text-center hover:border-primary/50 transition-colors"
              >
                <feature.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium text-foreground">{feature.label}</span>
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
              Ready to Experience These Features?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start your free trial today and see how ExcelChat can transform your data workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Try Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
