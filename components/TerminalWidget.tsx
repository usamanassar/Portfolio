"use client";

import { useState } from "react";
import { Copy, Check, Terminal, Play, RotateCcw } from "lucide-react";

export function TerminalWidget() {
  const [copied, setCopied] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<string[]>([
    "System initialized. Welcome to Usama's Interactive Diagnostic Console.",
    "Type 'help' or click quick commands below to explore architecture details.",
  ]);

  const commandText = "npx usamanassar@latest";

  const handleCopy = () => {
    navigator.clipboard.writeText(commandText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runCommand = (cmd: string) => {
    const clean = cmd.trim().toLowerCase();
    const newLogs = [...logs, `❯ ${cmd}`];

    switch (clean) {
      case "help":
        newLogs.push("Available commands: about, skills, metrics, contact, clear");
        break;
      case "about":
        newLogs.push("Muhammad Usama Nasar — Full-Stack & Mobile Engineer based in Pakistan (PKT).");
        newLogs.push("Focus: Flutter native-speed apps, Next.js 15, and headless WordPress/PHP.");
        break;
      case "skills":
        newLogs.push("• Mobile: Flutter, Dart, Bloc, Riverpod, Platform Channels, Isar DB");
        newLogs.push("• Frontend: Next.js App Router, React 19, TypeScript, Tailwind CSS, Framer Motion");
        newLogs.push("• Backend: WordPress Core, OOP PHP 8, WPGraphQL, REST APIs, Redis, MySQL");
        break;
      case "metrics":
        newLogs.push("• 60 FPS Locked Flutter frame rendering (120Hz CAN-bus isolates)");
        newLogs.push("• Sub-45ms TTFB on edge-cached Next.js storefronts");
        newLogs.push("• -78% Database query latency reduction via decoupled headless WP");
        break;
      case "contact":
        newLogs.push("• Direct Email: musamanasar765@gmail.com");
        newLogs.push("• GitHub: https://github.com/usamanassar");
        newLogs.push("• Status: Open for high-impact contracts and full-time roles.");
        break;
      case "clear":
        setLogs(["Console cleared."]);
        setInputVal("");
        return;
      default:
        newLogs.push(`Command not recognized: '${cmd}'. Type 'help' for available commands.`);
    }

    setLogs(newLogs);
    setInputVal("");
  };

  return (
    <section className="py-16 md:py-24 border-t border-white/[0.08]" id="terminal">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Terminal size={12} />
              <span>Interactive Diagnostic CLI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Developer Terminal
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-xs font-mono text-zinc-300 transition-colors"
            >
              {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              <span>{copied ? "Copied" : commandText}</span>
            </button>
            <button
              onClick={() => runCommand("clear")}
              className="p-1.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors"
              title="Clear terminal"
            >
              <RotateCcw size={14} />
            </button>
          </div>
        </div>

        {/* Terminal Chrome Window */}
        <div className="overflow-hidden rounded-3xl border border-white/15 bg-zinc-950 shadow-2xl shadow-blue-950/40 backdrop-blur-2xl">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5 bg-zinc-900/60">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 ring-1 ring-red-400/40" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 ring-1 ring-amber-400/40" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 ring-1 ring-emerald-400/40" />
              <span className="ml-3 font-mono text-xs text-zinc-400">
                usama@precision-box:~ (zsh)
              </span>
            </div>

            {/* Quick Command Pills */}
            <div className="hidden sm:flex items-center gap-1.5">
              {["about", "skills", "metrics", "contact"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => runCommand(cmd)}
                  className="px-2.5 py-0.5 rounded-md border border-white/10 bg-white/[0.03] hover:bg-white/10 text-[11px] font-mono text-zinc-300 transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

          {/* Terminal Console Stream */}
          <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-2 min-h-[220px] max-h-[360px] overflow-y-auto">
            {logs.map((log, index) => (
              <div
                key={index}
                className={
                  log.startsWith("❯")
                    ? "text-blue-400 font-semibold"
                    : log.includes("•")
                    ? "text-zinc-200 pl-2"
                    : "text-zinc-400"
                }
              >
                {log}
              </div>
            ))}

            {/* Interactive Prompt Line */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (inputVal) runCommand(inputVal);
              }}
              className="flex items-center gap-2 pt-2 text-white"
            >
              <span className="text-emerald-400">❯</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type command (e.g. skills, metrics)..."
                className="w-full bg-transparent text-white placeholder-zinc-600 focus:outline-none"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
