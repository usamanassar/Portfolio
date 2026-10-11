"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Copy,
  Github,
  Mail,
  Sparkles,
  ExternalLink,
  Code2,
  Smartphone,
  Globe,
  Database,
} from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "musamanasar765@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const metrics = [
    { label: "Engineering Experience", value: "4+ Years", icon: Code2 },
    { label: "Production Clients", value: "15+ Ships", icon: Smartphone },
    { label: "Real-Time Latency", value: "Sub-50ms", icon: Globe },
    { label: "Query Optimization", value: "-78% Load", icon: Database },
  ];

  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Top Profile & Eyebrow Row */}
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-2xl"
        >
          {/* Eyebrow status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Available for Full-Time & Freelance Roles</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400 font-mono text-[11px]">UTC+5</span>
          </div>

          {/* Shimmering Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
            Architecting{" "}
            <span className="text-shimmer">
              High-Speed Clients
            </span>{" "}
            & Scalable Web Systems.
          </h1>

          {/* Bio paragraph */}
          <p className="text-base sm:text-lg text-zinc-300/90 leading-relaxed max-w-2xl font-normal">
            Hello, I’m <span className="text-white font-semibold">Muhammad Usama Nasar</span>. 
            I build polished, production-grade applications across the entire stack. 
            Specializing in silky-smooth cross-platform apps with{" "}
            <span className="text-blue-400 font-medium">Flutter & Dart</span>, 
            high-concurrency web interfaces with{" "}
            <span className="text-purple-400 font-medium">Next.js & TypeScript</span>, and 
            custom decoupled{" "}
            <span className="text-amber-400 font-medium">Headless WordPress & PHP</span> engines.
          </p>
        </motion.div>

        {/* Profile Avatar Card with Glowing Halo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative mx-auto md:mx-0 shrink-0"
        >
          {/* Ambient gradient aura */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-purple-600/30 to-emerald-500/30 blur-xl opacity-70 animate-pulse-slow" />
          
          <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-3xl overflow-hidden border border-white/20 bg-zinc-900/90 shadow-2xl shadow-blue-950/40 p-1.5 backdrop-blur-xl group">
            <div className="relative h-full w-full rounded-2xl overflow-hidden">
              <Image
                src="/avatar.png"
                alt="Muhammad Usama Nasar"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority
              />
            </div>
            {/* Corner indicator */}
            <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-full bg-zinc-900/90 border border-white/10 backdrop-blur-md flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-mono text-zinc-300">ONLINE</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Action Buttons Row */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12"
      >
        <a
          href="#projects"
          className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] text-white text-sm font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-blue-500/40"
        >
          <span>Explore Featured Work</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>

        <button
          onClick={handleCopyEmail}
          type="button"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 text-zinc-200 text-sm font-medium backdrop-blur-md transition-all duration-200 active:scale-95"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-emerald-400 animate-in zoom-in" />
              <span className="text-emerald-400 font-medium">Copied ({email})</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4 text-zinc-400" />
              <span>Copy Email</span>
            </>
          )}
        </button>

        <a
          href="https://github.com/usamanassar"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-zinc-300 text-sm font-medium transition-all duration-200"
          aria-label="GitHub Profile"
        >
          <Github className="h-4 w-4" />
          <span className="hidden sm:inline">GitHub</span>
        </a>

        <a
          href="mailto:musamanasar765@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-zinc-300 text-sm font-medium transition-all duration-200"
          aria-label="Send Direct Email"
        >
          <Mail className="h-4 w-4" />
          <span className="hidden sm:inline">Mail</span>
        </a>
      </motion.div>

      {/* Metrics Bento Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
      >
        {metrics.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="relative p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:border-white/20 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-zinc-400">
                  {item.label}
                </span>
                <Icon className="h-4 w-4 text-blue-400/80 group-hover:text-blue-300 transition-colors" />
              </div>
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors">
                {item.value}
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
