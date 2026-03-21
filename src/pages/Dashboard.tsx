import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  ChevronLeft,
  CheckCircle2,
  Circle,
  Lock,
  TrendingUp,
  Coins,
  FileText,
  Brain,
  ArrowRight,
} from "lucide-react";

type Track = "MNC" | "Service";

const roadmapData: Record<
  Track,
  {
    sem: number;
    title: string;
    modules: { name: string; status: "completed" | "in-progress" | "locked"; detail: string }[];
  }[]
> = {
  MNC: [
    {
      sem: 1,
      title: "Foundations",
      modules: [
        { name: "C/C++ Programming Mastery", status: "completed", detail: "Master pointers, memory management, OOP concepts." },
        { name: "Git & GitHub Workflow", status: "completed", detail: "Version control, branching, pull requests, open source." },
        { name: "First Project: CLI Tool", status: "in-progress", detail: "Build a command-line tool and publish on GitHub." },
      ],
    },
    {
      sem: 2,
      title: "DSA Deep Dive",
      modules: [
        { name: "Arrays, Strings & Hashing", status: "locked", detail: "200+ problems across platforms." },
        { name: "Trees & Graphs Basics", status: "locked", detail: "BFS, DFS, traversals, shortest paths." },
        { name: "First Hackathon", status: "locked", detail: "Participate in a 24-48hr hackathon." },
      ],
    },
    {
      sem: 3,
      title: "System Design Intro",
      modules: [
        { name: "Database Design & SQL", status: "locked", detail: "Normalization, indexing, query optimization." },
        { name: "API Design Patterns", status: "locked", detail: "REST, GraphQL, authentication flows." },
        { name: "Internship Applications", status: "locked", detail: "Apply to tier-1 companies with polished resume." },
      ],
    },
    {
      sem: 4,
      title: "Interview Prep Sprint",
      modules: [
        { name: "Advanced DSA: DP & Graphs", status: "locked", detail: "Dynamic programming, advanced graph algorithms." },
        { name: "System Design Mock Rounds", status: "locked", detail: "Practice designing scalable systems." },
        { name: "Mock Interviews x5", status: "locked", detail: "Simulate real MNC interview rounds." },
      ],
    },
  ],
  Service: [
    {
      sem: 1,
      title: "Foundations",
      modules: [
        { name: "Python & Scripting", status: "completed", detail: "Automate tasks, data processing basics." },
        { name: "Soft Skills & Communication", status: "completed", detail: "Presentation skills, email etiquette, teamwork." },
        { name: "Domain Exploration", status: "in-progress", detail: "Explore IT service verticals: consulting, support, QA." },
      ],
    },
    {
      sem: 2,
      title: "Domain Knowledge",
      modules: [
        { name: "SDLC & Agile Methodology", status: "locked", detail: "Understand project lifecycles and sprints." },
        { name: "SQL & Database Management", status: "locked", detail: "Practical SQL for business data." },
        { name: "Aptitude & Reasoning Prep", status: "locked", detail: "Crack service company aptitude rounds." },
      ],
    },
    {
      sem: 3,
      title: "Specialization Track",
      modules: [
        { name: "Cloud Fundamentals (AWS/Azure)", status: "locked", detail: "Core cloud services and certifications." },
        { name: "Testing & QA Practices", status: "locked", detail: "Manual and automation testing fundamentals." },
        { name: "Certification Prep", status: "locked", detail: "Prepare for industry-recognized certifications." },
      ],
    },
    {
      sem: 4,
      title: "Placement Readiness",
      modules: [
        { name: "Group Discussion Training", status: "locked", detail: "Practice GD rounds with peers." },
        { name: "HR Interview Mastery", status: "locked", detail: "Common questions, STAR method, body language." },
        { name: "Resume & Portfolio Polish", status: "locked", detail: "Final resume review and portfolio website." },
      ],
    },
  ],
};

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "completed") return <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />;
  if (status === "in-progress") return <Circle className="h-4 w-4 text-accent shrink-0" />;
  return <Lock className="h-4 w-4 text-muted-foreground/40 shrink-0" />;
};

const Dashboard = () => {
  const [track, setTrack] = useState<Track>("MNC");
  const [activeSem, setActiveSem] = useState(1);

  const semesters = roadmapData[track];
  const activeSemData = semesters.find((s) => s.sem === activeSem)!;

  const completedModules = 2;
  const totalModules = 12;
  const progressPercent = Math.round((completedModules / totalModules) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/">
                <ChevronLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="font-bold text-foreground">GraduPath</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground hidden sm:inline">Arjun M. · 2nd Year ·</span>
            <span className="font-semibold text-foreground">Score: 47.2</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Track Switcher + Progress */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Your Roadmap</h1>
            <div className="inline-flex rounded-xl border border-border bg-card p-1">
              {(["MNC", "Service"] as Track[]).map((t) => (
                <button
                  key={t}
                  onClick={() => { setTrack(t); setActiveSem(1); }}
                  className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    track === t
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t} Track
                </button>
              ))}
            </div>
          </div>

          {/* Progress card */}
          <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 card-elevated w-full md:w-auto">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1 min-w-[160px]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-muted-foreground">{track} Track Progress</span>
                <span className="text-xs font-bold tabular-nums text-foreground">{progressPercent}%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{completedModules}/{totalModules} modules</p>
            </div>
          </div>
        </div>

        {/* Semester tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {semesters.map((sem) => (
            <button
              key={sem.sem}
              onClick={() => setActiveSem(sem.sem)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeSem === sem.sem
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              <span className="font-bold">S{sem.sem}</span>
              <span className="hidden sm:inline">{sem.title}</span>
            </button>
          ))}
        </div>

        {/* Module cards */}
        <div className="grid gap-4 md:grid-cols-3 mb-12">
          {activeSemData.modules.map((mod, i) => (
            <div
              key={mod.name}
              className="rounded-2xl border border-border bg-card p-5 card-elevated animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-3 mb-3">
                <StatusIcon status={mod.status} />
                <div className="flex-1 min-w-0">
                  <h3 className={`text-sm font-semibold leading-tight ${mod.status === "locked" ? "text-muted-foreground/50" : "text-foreground"}`}>
                    {mod.name}
                  </h3>
                </div>
              </div>
              <p className={`text-xs leading-relaxed ${mod.status === "locked" ? "text-muted-foreground/30" : "text-muted-foreground"}`}>
                {mod.detail}
              </p>
              {mod.status === "in-progress" && (
                <Button size="sm" className="mt-4 w-full" variant="default">
                  Continue
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              )}
              {mod.status === "completed" && (
                <div className="mt-4 text-xs font-medium text-primary flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Completed
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick action cards */}
        <h2 className="text-lg font-bold text-foreground mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Brain, title: "AI Career Coach", desc: "Get personalized advice", color: "bg-primary/10 text-primary" },
            { icon: FileText, title: "Resume Builder", desc: "Auto-generate from progress", color: "bg-accent/15 text-accent" },
            { icon: Coins, title: "Earning Hub", desc: "Browse gigs & bounties", color: "bg-primary/10 text-primary" },
          ].map((action) => (
            <button
              key={action.title}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 card-elevated text-left transition-all active:scale-[0.97]"
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${action.color} group-hover:scale-105 transition-transform`}>
                <action.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{action.title}</p>
                <p className="text-xs text-muted-foreground">{action.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
