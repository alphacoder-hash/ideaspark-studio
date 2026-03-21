import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div
          className={`relative rounded-3xl bg-primary p-12 md:p-16 text-center overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-[0.97]"
          }`}
        >
          <div className="absolute inset-0 -z-0">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary-foreground mb-4">
              Ready to Map Your Future?
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Join thousands of students already building their career roadmap.
              Start free — no credit card required.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/dashboard">
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
