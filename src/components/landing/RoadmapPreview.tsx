import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { CheckCircle2, Circle, Lock } from "lucide-react";

const semesters = [
  {
    sem: 1,
    title: "Foundations",
    modules: [
      { name: "Programming Basics (C/Python)", status: "completed" },
      { name: "College Orientation & Networking", status: "completed" },
      { name: "Build Your First GitHub Repo", status: "in-progress" },
    ],
  },
  {
    sem: 2,
    title: "Core Skills",
    modules: [
      { name: "Data Structures & Algorithms", status: "locked" },
      { name: "Web Development Fundamentals", status: "locked" },
      { name: "First Hackathon Participation", status: "locked" },
    ],
  },
  {
    sem: 3,
    title: "Specialization",
    modules: [
      { name: "MNC: System Design Intro", status: "locked" },
      { name: "Service: Domain Knowledge", status: "locked" },
      { name: "First Internship Applications", status: "locked" },
    ],
  },
  {
    sem: 4,
    title: "Mid-College Sprint",
    modules: [
      { name: "Advanced DSA & Competitive Coding", status: "locked" },
      { name: "Resume Building Workshop", status: "locked" },
      { name: "Mock Interview Round 1", status: "locked" },
    ],
  },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "completed") return <CheckCircle2 className="h-4 w-4 text-primary" />;
  if (status === "in-progress") return <Circle className="h-4 w-4 text-accent" />;
  return <Lock className="h-4 w-4 text-muted-foreground/40" />;
};

const RoadmapPreview = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="roadmap" ref={ref} className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p
            className={`text-sm font-semibold tracking-widest uppercase text-accent mb-3 transition-all duration-600 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Semester by Semester
          </p>
          <h2
            className={`text-3xl md:text-4xl font-bold tracking-tight text-foreground transition-all duration-600 delay-75 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Your Roadmap at a Glance
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {semesters.map((sem, i) => (
            <div
              key={sem.sem}
              className={`rounded-2xl border border-border bg-card p-5 card-elevated transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: isVisible ? `${150 + i * 100}ms` : "0ms" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                  {sem.sem}
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">Semester {sem.sem}</p>
                  <p className="text-sm font-semibold text-foreground">{sem.title}</p>
                </div>
              </div>
              <div className="space-y-2.5">
                {sem.modules.map((mod) => (
                  <div key={mod.name} className="flex items-start gap-2.5">
                    <StatusIcon status={mod.status} />
                    <span
                      className={`text-xs leading-snug ${
                        mod.status === "locked" ? "text-muted-foreground/50" : "text-foreground"
                      }`}
                    >
                      {mod.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapPreview;
