import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Clock,
  BookOpen,
  Play,
  Code2,
  GraduationCap,
  Map,
  Monitor,
} from "lucide-react";
import type { ModuleData, Resource } from "@/data/syllabus";

const sourceColors: Record<string, string> = {
  GFG: "bg-[hsl(120,40%,92%)] text-[hsl(120,50%,25%)]",
  W3Schools: "bg-[hsl(200,50%,92%)] text-[hsl(200,60%,28%)]",
  "roadmap.sh": "bg-[hsl(270,40%,92%)] text-[hsl(270,50%,30%)]",
  LeetCode: "bg-[hsl(38,70%,90%)] text-[hsl(38,80%,25%)]",
  YouTube: "bg-[hsl(0,60%,93%)] text-[hsl(0,70%,35%)]",
  MDN: "bg-[hsl(220,50%,92%)] text-[hsl(220,60%,28%)]",
  FreeCodeCamp: "bg-[hsl(160,40%,90%)] text-[hsl(160,50%,22%)]",
  HackerRank: "bg-[hsl(140,40%,90%)] text-[hsl(140,50%,22%)]",
  Coursera: "bg-[hsl(220,50%,92%)] text-[hsl(220,60%,30%)]",
  CS50: "bg-[hsl(0,50%,92%)] text-[hsl(0,60%,30%)]",
  Neetcode: "bg-[hsl(38,60%,90%)] text-[hsl(38,70%,28%)]",
  InterviewBit: "bg-[hsl(200,50%,90%)] text-[hsl(200,60%,25%)]",
  Javatpoint: "bg-[hsl(280,40%,92%)] text-[hsl(280,50%,28%)]",
  TutorialsPoint: "bg-[hsl(150,35%,90%)] text-[hsl(150,45%,25%)]",
  GitHub: "bg-[hsl(210,10%,90%)] text-[hsl(210,15%,25%)]",
};

const typeIcons: Record<string, typeof BookOpen> = {
  article: BookOpen,
  video: Play,
  practice: Code2,
  course: GraduationCap,
  interactive: Monitor,
  roadmap: Map,
};

const ResourceBadge = ({ resource }: { resource: Resource }) => {
  const Icon = typeIcons[resource.type] || BookOpen;
  const colorClass = sourceColors[resource.source] || "bg-secondary text-secondary-foreground";

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-border bg-card p-3.5 transition-all duration-200 hover:border-primary/30 hover:shadow-sm active:scale-[0.98]"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground leading-snug truncate">
          {resource.title}
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold ${colorClass}`}>
            {resource.source}
          </span>
          <span className="text-[10px] text-muted-foreground capitalize">{resource.type}</span>
        </div>
      </div>
      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-primary shrink-0 transition-colors" />
    </a>
  );
};

interface ModuleDetailProps {
  module: ModuleData;
  onBack: () => void;
}

const ModuleDetail = ({ module, onBack }: ModuleDetailProps) => {
  const [expandedTopics, setExpandedTopics] = useState<Set<number>>(new Set([0]));

  const toggleTopic = (index: number) => {
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const { syllabus } = module;

  return (
    <div className="animate-fade-up">
      {/* Header */}
      <div className="flex items-start gap-3 mb-6">
        <Button variant="ghost" size="icon" onClick={onBack} className="shrink-0 mt-0.5">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold text-foreground leading-tight">{module.name}</h2>
          <p className="text-sm text-muted-foreground mt-1">{module.detail}</p>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span className="tabular-nums font-medium">{syllabus.totalHours} hours</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5" />
              <span className="font-medium">{syllabus.topics.length} topics</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <ExternalLink className="h-3.5 w-3.5" />
              <span className="font-medium">
                {syllabus.topics.reduce((acc, t) => acc + t.subtopics.reduce((a, s) => a + s.resources.length, 0), 0)} resources
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Topics */}
      <div className="space-y-3">
        {syllabus.topics.map((topic, topicIdx) => {
          const isExpanded = expandedTopics.has(topicIdx);

          return (
            <div
              key={topic.name}
              className="rounded-2xl border border-border bg-card overflow-hidden card-elevated animate-fade-up"
              style={{ animationDelay: `${topicIdx * 60}ms` }}
            >
              {/* Topic header */}
              <button
                onClick={() => toggleTopic(topicIdx)}
                className="w-full flex items-center gap-3 p-4 text-left transition-colors hover:bg-secondary/30 active:scale-[0.995]"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-xs font-bold text-primary tabular-nums">{topicIdx + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{topic.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{topic.description}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] tabular-nums text-muted-foreground hidden sm:inline">
                    {topic.estimatedHours}h
                  </span>
                  {isExpanded ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </button>

              {/* Subtopics & Resources */}
              {isExpanded && (
                <div className="border-t border-border px-4 pb-4 pt-3 space-y-5">
                  {topic.subtopics.map((subtopic) => (
                    <div key={subtopic.name}>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">
                        {subtopic.name}
                      </p>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {subtopic.resources.map((resource) => (
                          <ResourceBadge key={resource.url} resource={resource} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ModuleDetail;
