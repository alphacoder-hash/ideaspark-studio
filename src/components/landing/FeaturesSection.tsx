import {
  Map,
  Coins,
  Brain,
  FileCheck,
  Users,
  TrendingUp,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: Map,
    title: "Dual-Track Roadmap",
    description: "Choose MNC or Service-based paths with semester-by-semester guidance tailored to your career goals.",
  },
  {
    icon: Coins,
    title: "Earning Module",
    description: "Earn GraduCoins through micro-internships, bounties, and learn-to-earn challenges while you study.",
  },
  {
    icon: Brain,
    title: "AI Career Coach",
    description: "Get personalized career advice and real-time resume scoring powered by AI analysis of your progress.",
  },
  {
    icon: FileCheck,
    title: "Smart Resume Builder",
    description: "Auto-generate a resume from your completed roadmap modules, projects, and certifications.",
  },
  {
    icon: Users,
    title: "Alumni Bridge",
    description: "Connect with alumni from your college who followed similar tracks and landed their dream roles.",
  },
  {
    icon: TrendingUp,
    title: "Success Score",
    description: "Track your career readiness with a dynamic score that updates as you hit real milestones.",
  },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="features" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p
            className={`text-sm font-semibold tracking-widest uppercase text-accent mb-3 transition-all duration-600 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Everything You Need
          </p>
          <h2
            className={`text-3xl md:text-4xl font-bold tracking-tight text-foreground transition-all duration-600 delay-75 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Built for Students Who Mean Business
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative rounded-2xl border border-border bg-card p-6 card-elevated transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${100 + i * 80}ms` : "0ms" }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
