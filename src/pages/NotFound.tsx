import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-32 lg:py-48">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-md mx-auto">
            <div className="text-8xl font-bold gradient-text mb-6">404</div>
            <h1 className="text-2xl font-bold text-foreground mb-4">Page Not Found</h1>
            <p className="text-muted-foreground mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="hero">
                <Link to="/">
                  <Home className="w-4 h-4" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/demo">
                  <ArrowLeft className="w-4 h-4" />
                  Try Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
