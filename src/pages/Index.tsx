import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  FileSpreadsheet, 
  MessageSquare, 
  Brain, 
  Zap, 
  Shield, 
  Code,
  CheckCircle
} from "lucide-react";

const features = [
  {
    icon: FileSpreadsheet,
    title: "Excel & CSV Support",
    description: "Upload any spreadsheet format and start chatting with your data instantly.",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Natural language processing understands your questions and finds answers.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant responses to your data queries, no waiting around.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Your data stays secure with end-to-end encryption and compliance.",
  },
  {
    icon: Code,
    title: "Embeddable Widget",
    description: "Add the chatbot to any website with a simple code snippet.",
  },
  {
    icon: MessageSquare,
    title: "Agentic Reasoning",
    description: "Advanced AI that can perform complex multi-step data analysis.",
  },
];

const stats = [
  { value: "10M+", label: "Questions Answered" },
  { value: "50K+", label: "Happy Users" },
  { value: "99.9%", label: "Uptime" },
  { value: "<1s", label: "Avg Response Time" },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(160_84%_39%/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(172_66%_50%/0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8 animate-fade-in">
              <Zap className="w-4 h-4" />
              <span>Powered by Advanced AI</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
              Excel-Powered{" "}
              <span className="gradient-text">AI Chatbot</span>
              {" "}for Your Business
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Transform your spreadsheets into intelligent conversations. Upload your Excel files and get instant answers to any question about your data.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Try Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="hero-outline" size="xl">
                <Link to="/pricing">
                  Get Started
                </Link>
              </Button>
            </div>

            <div className="mt-16 animate-slide-up" style={{ animationDelay: "300ms" }}>
              <div className="relative max-w-3xl mx-auto">
                <div className="absolute inset-0 gradient-bg rounded-2xl blur-2xl opacity-20" />
                <div className="relative bg-card border border-border rounded-2xl shadow-card overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/30">
                    <div className="w-3 h-3 rounded-full bg-destructive/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-primary/50" />
                    <span className="ml-2 text-xs text-muted-foreground">ExcelChat Demo</span>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                        <MessageSquare className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-secondary-foreground">
                        What were our top 3 selling products last quarter?
                      </div>
                    </div>
                    <div className="flex gap-3 flex-row-reverse">
                      <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0">
                        <Brain className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 text-sm">
                        Based on your Q3 sales data: 1) Product A - $245K, 2) Product B - $198K, 3) Product C - $167K
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to{" "}
              <span className="gradient-text">Chat with Data</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features designed to make your data accessible and actionable through natural conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Data Experience?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of businesses using ExcelChat to unlock insights from their spreadsheets with natural conversation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/demo">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>14-day free trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
