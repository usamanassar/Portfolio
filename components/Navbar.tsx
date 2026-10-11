"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [pktTime, setPktTime] = useState("");

  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setPktTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-borderline bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        {/* Brand & Availability Indicator */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-mono text-sm font-semibold tracking-tight text-heading hover:text-white transition-colors"
          >
            usama.dev
          </Link>

          <div className="hidden sm:flex items-center gap-2 border-l border-borderline pl-4">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-xs text-muted tracking-tight">
              Available for work
            </span>
          </div>
        </div>

        {/* Live PKT Clock & External / Section Links */}
        <div className="flex items-center gap-5 sm:gap-6">
          {/* Dynamic PKT Timezone Clock (Hydration Safe) */}
          <div className="font-mono text-xs text-muted/90 tabular-nums flex items-center gap-1.5">
            <span className="text-zinc-500">PKT:</span>
            {mounted ? (
              <span className="text-zinc-300 font-medium">{pktTime}</span>
            ) : (
              <span className="text-zinc-600">--:--:--</span>
            )}
            <span className="hidden md:inline text-zinc-500 text-[10px]">(UTC+5)</span>
          </div>

          <nav className="flex items-center gap-4 text-xs font-mono">
            <a
              href="#projects"
              className="text-muted hover:text-heading transition-colors"
            >
              Work
            </a>
            <a
              href="#stack"
              className="text-muted hover:text-heading transition-colors"
            >
              Index
            </a>
            <a
              href="https://github.com/usamanassar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-muted hover:text-heading transition-colors"
            >
              GitHub
              <ArrowUpRight className="h-3 w-3 opacity-70" />
            </a>
            <a
              href="#contact"
              className="rounded-none border border-borderline bg-surface px-2.5 py-1 text-heading hover:border-zinc-500 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
