import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Heart, Lightbulb, Users, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "We believe everyone should be able to extract insights from their data without technical barriers.",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description: "Every feature we build starts with understanding what our users truly need.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push the boundaries of what's possible with AI and natural language processing.",
  },
  {
    icon: Users,
    title: "Transparency",
    description: "We're committed to honest communication and building trust with our community.",
  },
];

const stats = [
  { value: "2023", label: "Founded" },
  { value: "50K+", label: "Active Users" },
  { value: "15+", label: "Team Members" },
  { value: "10M+", label: "Questions Answered" },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="gradient-text">ExcelChat</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Making data accessible to everyone through the power of AI and natural conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We started ExcelChat with a simple observation: millions of people work with spreadsheets daily, but extracting meaningful insights often requires technical skills that not everyone has.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our mission is to democratize data analysis. We believe that anyone should be able to ask questions about their data in plain English and get accurate, actionable answers instantly.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By combining cutting-edge AI with an intuitive chat interface, we're making data conversations accessible to everyone—from small business owners to enterprise teams.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-2xl blur-2xl opacity-20" />
                <div className="relative bg-card border border-border rounded-2xl p-8 shadow-card">
                  <blockquote className="text-lg text-foreground italic mb-4">
                    "Data should work for you, not the other way around. ExcelChat puts the power of your spreadsheets at your fingertips."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-bold">
                      JD
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Jane Doe</p>
                      <p className="text-sm text-muted-foreground">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-card transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AI + Excel */}
      <section className="py-20 lg:py-28 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Why AI + Excel?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Excel is the world's most popular data tool, used by over 750 million people. But extracting insights often means writing complex formulas, creating pivot tables, or learning SQL. AI changes everything.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With ExcelChat, you simply ask questions in plain English. Our AI understands your intent, analyzes your data, and returns accurate answers in seconds. No formulas. No technical skills. Just conversation.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/demo">
                Experience It Yourself
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Journey
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented people who share our passion for making data accessible.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href="#">View Careers</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
