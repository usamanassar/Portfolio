"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Command, Sparkles, Send } from "lucide-react";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [pktTime, setPktTime] = useState("");
  const [activeSection, setActiveSection] = useState("about");

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

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 rounded-full border border-white/10 bg-zinc-950/80 px-4 py-2 backdrop-blur-xl shadow-2xl shadow-black/60 transition-all hover:border-white/20">
        {/* Brand & Avatar */}
        <Link
          href="#about"
          className="flex items-center gap-2.5 group"
          onClick={() => setActiveSection("about")}
        >
          <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-white/20 transition-transform group-hover:scale-105">
            <Image
              src="/avatar.png"
              alt="Muhammad Usama Nasar"
              width={32}
              height={32}
              className="object-cover"
              priority
            />
            <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-zinc-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Usama Nasar
            </span>
            <span className="text-[10px] font-mono text-zinc-400 hidden sm:inline">
              Systems & Web
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/[0.05]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveSection(link.label.toLowerCase())}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                activeSection === link.label.toLowerCase()
                  ? "bg-white/15 text-white shadow-sm"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Live PKT Clock & Quick Action */}
        <div className="flex items-center gap-3">
          {/* Live PKT timezone clock */}
          <div className="hidden lg:flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.05]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-zinc-500">PKT</span>
            <span className="text-zinc-200 font-semibold tabular-nums">
              {mounted ? pktTime : "--:--:--"}
            </span>
          </div>

          {/* Quick Contact CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-medium shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <Send size={11} />
            <span>Connect</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
