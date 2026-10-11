"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Globe,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  Cpu,
} from "lucide-react";

interface TechItem {
  name: string;
  category: "mobile" | "web" | "backend";
  level: string;
  detail: string;
  highlightColor: string;
}

const techItems: TechItem[] = [
  // Mobile
  {
    name: "Flutter",
    category: "mobile",
    level: "Core Expert",
    detail: "Cross-platform iOS/Android, native method channels, isolates",
    highlightColor: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400",
  },
  {
    name: "Dart",
    category: "mobile",
    level: "Expert",
    detail: "Object-oriented, sound null-safety, asynchronous streams",
    highlightColor: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-400",
  },
  {
    name: "Bloc & Riverpod",
    category: "mobile",
    level: "Architecture",
    detail: "Predictable state machines, separation of concerns",
    highlightColor: "from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400",
  },
  {
    name: "Native Method Channels",
    category: "mobile",
    level: "Hardware Layer",
    detail: "Java/Kotlin & Obj-C/Swift bridge, Bluetooth LE, sensors",
    highlightColor: "from-sky-500/20 to-cyan-500/20 border-sky-500/30 text-sky-400",
  },
  {
    name: "Isar & Hive Offline DB",
    category: "mobile",
    level: "Persistence",
    detail: "Ultra-fast NoSQL local database with reactive streams",
    highlightColor: "from-teal-500/20 to-emerald-500/20 border-teal-500/30 text-teal-400",
  },

  // Full-Stack Web
  {
    name: "Next.js (App Router)",
    category: "web",
    level: "Production",
    detail: "React Server Components, ISR caching, Edge routes",
    highlightColor: "from-white/10 to-zinc-400/10 border-white/30 text-white",
  },
  {
    name: "React 19",
    category: "web",
    level: "Expert",
    detail: "Modern hooks, concurrent rendering, optimistic UI",
    highlightColor: "from-cyan-500/20 to-sky-500/20 border-cyan-500/30 text-cyan-400",
  },
  {
    name: "TypeScript",
    category: "web",
    level: "Advanced",
    detail: "Strict type safety, generic utility types, zero runtime bugs",
    highlightColor: "from-blue-600/20 to-blue-400/20 border-blue-500/30 text-blue-400",
  },
  {
    name: "Tailwind CSS",
    category: "web",
    level: "Design Systems",
    detail: "Custom design tokens, fluid responsive layouts, micro-animations",
    highlightColor: "from-teal-500/20 to-cyan-500/20 border-teal-500/30 text-teal-400",
  },
  {
    name: "Framer Motion",
    category: "web",
    level: "UI Animation",
    detail: "Spring physics, layoutId transitions, gesture controls",
    highlightColor: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400",
  },

  // Backend & CMS
  {
    name: "Headless WordPress",
    category: "backend",
    level: "Decoupled",
    detail: "WPGraphQL + Next.js frontend, instant webhook cache purges",
    highlightColor: "from-sky-600/20 to-blue-700/20 border-sky-500/30 text-sky-400",
  },
  {
    name: "Modern PHP 8.x",
    category: "backend",
    level: "OOP / Custom Core",
    detail: "Custom theme/plugin architecture without third-party bloat",
    highlightColor: "from-indigo-600/20 to-purple-600/20 border-indigo-500/30 text-indigo-400",
  },
  {
    name: "REST & GraphQL APIs",
    category: "backend",
    level: "Integration",
    detail: "High-throughput endpoint schemas, rate-limiting & caching",
    highlightColor: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400",
  },
  {
    name: "Redis & Edge Caching",
    category: "backend",
    level: "Performance",
    detail: "In-memory cache layers, sub-10ms session handling",
    highlightColor: "from-red-500/20 to-orange-500/20 border-red-500/30 text-red-400",
  },
  {
    name: "MySQL & Database Profiling",
    category: "backend",
    level: "Database",
    detail: "Optimized indexing, -78% query reduction under load",
    highlightColor: "from-amber-500/20 to-yellow-500/20 border-amber-500/30 text-amber-400",
  },
];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<"all" | "mobile" | "web" | "backend">("all");

  const filteredItems =
    activeCategory === "all"
      ? techItems
      : techItems.filter((item) => item.category === activeCategory);

  const categories = [
    { id: "all", label: "Full Ecosystem", count: techItems.length },
    { id: "mobile", label: "Flutter & Mobile", count: 5 },
    { id: "web", label: "Next.js & Frontend", count: 5 },
    { id: "backend", label: "WordPress & Backend", count: 5 },
  ];

  return (
    <section id="stack" className="py-16 md:py-24 border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu size={12} />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineered Stack & Tools
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
            Strictly high-performance frameworks and runtime platforms engineered for zero-bloat execution.
          </p>
        </div>

        {/* Animated Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`relative px-3.5 py-1.5 text-xs font-medium rounded-xl transition-colors duration-200 ${
                activeCategory === cat.id
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {activeCategory === cat.id && (
                <motion.div
                  layoutId="activeTechTab"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                {cat.label}
                <span className="text-[10px] opacity-75 font-mono">({cat.count})</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tech Cards with Spring Stagger */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-5 rounded-2xl border border-white/10 bg-zinc-900/40 hover:bg-zinc-900/80 hover:border-white/20 backdrop-blur-md transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                    {item.name}
                  </h3>
                  <span className={`inline-block text-[11px] font-mono px-2 py-0.5 rounded border bg-gradient-to-r ${item.highlightColor}`}>
                    {item.level}
                  </span>
                </div>
                <div className="h-2 w-2 rounded-full bg-blue-500/50 group-hover:bg-blue-400 group-hover:scale-125 transition-all" />
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
