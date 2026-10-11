"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "@/types/portfolio";
import {
  ArrowUpRight,
  Github,
  Cpu,
  Activity,
  Layers,
  Sparkles,
  ExternalLink,
  Zap,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Custom visual banner configuration per project
  const getBannerDetails = (id: string) => {
    switch (id) {
      case "auto-arcane":
        return {
          gradient: "from-blue-600/30 via-cyan-500/20 to-emerald-500/10",
          tag: "OBD-II CAN-BUS TELEMETRY",
          badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
          accentColor: "border-cyan-500/40",
          previewText: "REAL-TIME DIAGNOSTIC STREAM • 120HZ ISOLATE BUFFER",
        };
      case "nexus-core":
        return {
          gradient: "from-purple-600/30 via-indigo-500/20 to-blue-500/10",
          tag: "NEXT.JS APP ROUTER & EDGE",
          badgeColor: "text-purple-400 border-purple-500/30 bg-purple-500/10",
          accentColor: "border-purple-500/40",
          previewText: "SUB-45MS TTFB • ZERO CLS • EDGE REVALIDATION",
        };
      case "apex-wp-headless":
        return {
          gradient: "from-amber-600/30 via-orange-500/20 to-yellow-500/10",
          tag: "HEADLESS WP & WPGRAPHQL",
          badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
          accentColor: "border-amber-500/40",
          previewText: "-78% DB QUERY LATENCY • CUSTOM OOP PHP CORE",
        };
      case "omniflow-realtime":
      default:
        return {
          gradient: "from-emerald-600/30 via-teal-500/20 to-blue-500/10",
          tag: "DISTRIBUTED WEBSOCKETS",
          badgeColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
          accentColor: "border-emerald-500/40",
          previewText: "SUB-80MS SYNC • DETERMINISTIC OFFLINE ISAR DB",
        };
    }
  };

  const banner = getBannerDetails(project.id);

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5, transition: { duration: 0.25 } }}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:shadow-2xl hover:shadow-blue-950/30 ${
        featured ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-100 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.12), transparent 80%)`,
          }}
        />
      )}

      {/* Visual Mockup Header Banner */}
      <div className={`relative w-full h-36 sm:h-44 bg-gradient-to-br ${banner.gradient} border-b border-white/10 p-5 flex flex-col justify-between overflow-hidden`}>
        {/* Ambient geometric background lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        
        {/* Top banner chips */}
        <div className="relative z-10 flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono uppercase tracking-wider backdrop-blur-md ${banner.badgeColor}`}>
            <Zap size={11} />
            <span>{banner.tag}</span>
          </span>

          <div className="flex items-center gap-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                className="rounded-xl border border-white/15 bg-zinc-950/60 p-2 text-zinc-300 backdrop-blur-md transition-all hover:bg-white hover:text-zinc-950 hover:scale-105"
              >
                <Github size={15} />
              </a>
            )}
            {project.links?.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noreferrer"
                aria-label="Live Project"
                className="rounded-xl border border-white/15 bg-zinc-950/60 p-2 text-zinc-300 backdrop-blur-md transition-all hover:bg-blue-600 hover:text-white hover:scale-105"
              >
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Bottom banner telemetry strip */}
        <div className="relative z-10 flex items-center justify-between font-mono text-[11px] text-zinc-300/90 bg-zinc-950/70 px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold tracking-wide">{banner.previewText}</span>
          </div>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div>
            <span className="font-mono text-xs text-blue-400 font-medium">
              {project.category}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-zinc-300/90 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Architecture Blueprint Strip */}
          {project.architecture && (
            <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2 font-mono text-xs text-zinc-200">
              <Cpu size={14} className="text-blue-400 shrink-0" />
              <span className="truncate">{project.architecture}</span>
            </div>
          )}

          {/* Challenge & Solution for featured cards */}
          {featured && (project.challenge || project.solution) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {project.challenge && (
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider font-semibold">
                    Engineering Challenge
                  </span>
                  <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-wider font-semibold">
                    Technical Solution
                  </span>
                  <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Metrics & Tech Pills */}
        <div className="pt-4 border-t border-white/10 space-y-3">
          {project.metrics && (
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-semibold">
                {typeof project.metrics === "string"
                  ? project.metrics
                  : project.metrics.map((m) => `${m.label}: ${m.value}`).join(" · ")}
              </span>
            </div>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
