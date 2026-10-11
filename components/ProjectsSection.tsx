"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";
import { Layers, Sparkles } from "lucide-react";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "flutter" | "nextjs" | "headless">("all");

  const filterProjects = () => {
    switch (activeTab) {
      case "flutter":
        return projects.filter(
          (p) =>
            (p.category ?? "").includes("FLUTTER") || p.techStack.includes("Flutter")
        );
      case "nextjs":
        return projects.filter(
          (p) =>
            (p.category ?? "").includes("NEXT.JS") || p.techStack.includes("Next.js")
        );
      case "headless":
        return projects.filter(
          (p) =>
            (p.category ?? "").includes("WORDPRESS") || p.techStack.includes("PHP 8.x")
        );
      case "all":
      default:
        return projects;
    }
  };

  const displayedProjects = filterProjects();

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "flutter", label: "Flutter & Mobile" },
    { id: "nextjs", label: "Next.js Systems" },
    { id: "headless", label: "Headless WordPress" },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-white/[0.08]" id="projects">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Layers size={12} />
              <span>Verified Deployments</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Case Studies
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              Concrete architectural implementations built for native performance, zero latency, and production stability.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative px-4 py-2 text-xs font-medium rounded-xl transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md shadow-blue-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={activeTab === "all" ? index === 0 : false}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
