import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Coins, Trophy, Briefcase } from "lucide-react";

const earningTypes = [
  {
    icon: Trophy,
    title: "Learn-to-Earn",
    description: "Complete roadmap modules and earn GraduCoins redeemable for real rewards and premium features.",
    amount: "₹500–₹2,000",
    tag: "Per Module",
  },
  {
    icon: Briefcase,
    title: "Micro-Internships",
    description: "Pick up short gigs from verified companies — build experience and earn simultaneously.",
    amount: "₹3,000–₹15,000",
    tag: "Per Gig",
  },
  {
    icon: Coins,
    title: "Bounty Challenges",
    description: "Solve real-world problems posted by startups. Top solutions win cash prizes and job referrals.",
    amount: "₹5,000–₹50,000",
    tag: "Per Challenge",
  },
];

const EarningSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="earning" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p
            className={`text-sm font-semibold tracking-widest uppercase text-accent mb-3 transition-all duration-600 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Earn While You Learn
          </p>
          <h2
            className={`text-3xl md:text-4xl font-bold tracking-tight text-foreground transition-all duration-600 delay-75 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Turn Your Progress Into Income
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {earningTypes.map((item, i) => (
            <div
              key={item.title}
              className={`group rounded-2xl border border-border bg-card p-6 card-elevated text-center transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + i * 100}ms` : "0ms" }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent mx-auto mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{item.description}</p>
              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5">
                <span className="text-sm font-bold tabular-nums text-foreground">{item.amount}</span>
                <span className="text-xs text-muted-foreground">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EarningSection;
