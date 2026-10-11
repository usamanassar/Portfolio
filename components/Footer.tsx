"use client";

import { ArrowUp, Github, Mail, Sparkles, Heart } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-white/[0.08] py-12 bg-zinc-950/80 backdrop-blur-xl text-xs font-mono text-zinc-400">
      <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left Colophon */}
        <div className="space-y-1.5 text-center sm:text-left">
          <p className="text-sm font-semibold text-white">
            Muhammad Usama Nasar
          </p>
          <p className="text-zinc-500 text-xs">
            Architecting native-speed mobile & modern web software.
          </p>
        </div>

        {/* Center / Socials */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/usamanassar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Github size={15} />
          </a>
          <a
            href="mailto:musamanasar765@gmail.com"
            aria-label="Email Usama"
            className="rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <Mail size={15} />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/10 text-zinc-300 hover:text-white transition-all hover:scale-105 active:scale-95"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>

        {/* Right Status */}
        <div className="flex items-center gap-2 text-zinc-500 text-center sm:text-right">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Vercel Edge Global CDN · © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
