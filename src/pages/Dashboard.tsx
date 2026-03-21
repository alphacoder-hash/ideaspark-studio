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
import { syllabusData, type Track, type ModuleData } from "@/data/syllabus";
import ModuleDetail from "@/components/dashboard/ModuleDetail";

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "completed") return <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />;
  if (status === "in-progress") return <Circle className="h-4 w-4 text-accent shrink-0" />;
  return <Lock className="h-4 w-4 text-muted-foreground/40 shrink-0" />;
};

const Dashboard = () => {
  const [track, setTrack] = useState<Track>("MNC");
  const [activeSem, setActiveSem] = useState(1);
  const [activeModule, setActiveModule] = useState<ModuleData | null>(null);

  const semesters = syllabusData[track];
  const activeSemData = semesters.find((s) => s.sem === activeSem)!;

  const allModules = semesters.flatMap((s) => s.modules);
  const completedModules = allModules.filter((m) => m.status === "completed").length;
  const totalModules = allModules.length;
  const progressPercent = Math.round((completedModules / totalModules) * 100);

  const handleModuleClick = (mod: ModuleData) => {
    if (mod.status !== "locked") {
      setActiveModule(mod);
    }
  };

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
        {activeModule ? (
          <ModuleDetail module={activeModule} onBack={() => setActiveModule(null)} />
        ) : (
          <>
            {/* Track Switcher + Progress */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
              <div>
                <h1 className="text-2xl font-bold text-foreground mb-2">Your Roadmap</h1>
                <div className="inline-flex rounded-xl border border-border bg-card p-1">
                  {(["MNC", "Service"] as Track[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => { setTrack(t); setActiveSem(1); setActiveModule(null); }}
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
                <button
                  key={mod.name}
                  onClick={() => handleModuleClick(mod)}
                  disabled={mod.status === "locked"}
                  className={`rounded-2xl border border-border bg-card p-5 card-elevated animate-fade-up text-left transition-all duration-200 ${
                    mod.status === "locked"
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:border-primary/30 hover:shadow-md active:scale-[0.97] cursor-pointer"
                  }`}
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
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[10px] tabular-nums text-muted-foreground">
                      {mod.syllabus.totalHours}h · {mod.syllabus.topics.length} topics
                    </span>
                    {mod.status === "in-progress" && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent">
                        Start Learning <ArrowRight className="h-3 w-3" />
                      </span>
                    )}
                    {mod.status === "completed" && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                        <CheckCircle2 className="h-3 w-3" /> Review
                      </span>
                    )}
                  </div>
                </button>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
