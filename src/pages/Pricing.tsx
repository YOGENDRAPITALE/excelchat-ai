import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Zap, Building2, Crown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    icon: Zap,
    price: "$0",
    period: "forever",
    description: "Perfect for trying out ExcelChat",
    features: [
      "100 chats per day",
      "1 Excel file upload",
      "Basic AI responses",
      "Email support",
      "Community access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    icon: Crown,
    price: "$29",
    period: "per month",
    description: "For professionals and small teams",
    features: [
      "Unlimited chats",
      "10 Excel file uploads",
      "Advanced AI reasoning",
      "Priority support",
      "API access",
      "Custom branding",
      "Data export",
      "Embeddable widget",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "contact us",
    description: "For large organizations",
    features: [
      "Everything in Pro",
      "Unlimited file uploads",
      "Database connections",
      "SSO & advanced security",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I switch plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    question: "Is there a free trial for Pro?",
    answer: "Yes, Pro comes with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What happens when I reach my chat limit?",
    answer: "On the Free plan, you'll need to wait until the next day or upgrade to Pro for unlimited chats.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for all paid plans. No questions asked.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Simple, Transparent{" "}
              <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that's right for you. Start free, upgrade when you're ready.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={cn(
                  "relative rounded-2xl border p-8 transition-all duration-300 hover:shadow-card",
                  plan.popular
                    ? "border-primary bg-card shadow-soft scale-105"
                    : "border-border bg-card"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-primary-foreground text-sm font-medium">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={cn(
                      "w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4",
                      plan.popular ? "gradient-bg" : "bg-secondary"
                    )}
                  >
                    <plan.icon
                      className={cn(
                        "w-7 h-7",
                        plan.popular ? "text-primary-foreground" : "text-foreground"
                      )}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  <Link to={plan.name === "Enterprise" ? "/contact" : "/demo"}>
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-xl bg-card border border-border">
                <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
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
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is here to help you find the perfect plan for your needs.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
