import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs font-medium text-muted-foreground">
            AI-Powered Career Roadmap for College Students
          </span>
        </div>

        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Your 4-Year Path{" "}
          <span className="text-gradient">from Campus to Career</span>
        </h1>

        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Choose your track — MNC or Service-based — and follow a semester-by-semester
          roadmap with real milestones, earning opportunities, and AI career tools.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <Button variant="hero" size="xl" asChild>
            <Link to="/dashboard">
              Start Your Roadmap
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <Link to="/dashboard">Explore Dashboard</Link>
          </Button>
        </div>

        {/* Stats bar */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto transition-all duration-700 delay-[400ms] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {[
            { value: "12,847", label: "Active Students" },
            { value: "8", label: "Semesters Covered" },
            { value: "₹2.4L+", label: "Earned by Students" },
            { value: "94%", label: "Placement Rate" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold tabular-nums text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
