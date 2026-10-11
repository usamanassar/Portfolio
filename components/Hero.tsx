"use client";

import { useState } from "react";
import { ArrowRight, Check, Copy } from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "usamanassar.dev@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 border-b border-borderline">
      {/* Monospace Eyebrow & Status */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="font-mono text-xs text-muted uppercase tracking-wider">
          [ ENGINEERING / 01 ]
        </span>
        <span className="text-zinc-700">/</span>
        <span className="font-mono text-xs text-muted uppercase tracking-wider">
          LOCATION: ARIFWALA, PK (UTC+5)
        </span>
        <span className="text-zinc-700">/</span>
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-amber">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
          SYSTEMS ACTIVE
        </span>
      </div>

      {/* Main Editorial Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-heading leading-[1.08] mb-8 max-w-3xl">
        Mobile & Full-Stack Systems Engineer.
      </h1>

      {/* Narrative Engineering Bio (2 Paragraphs) */}
      <div className="space-y-4 max-w-2xl text-muted text-base md:text-lg leading-relaxed mb-10">
        <p>
          I architect production-grade software across the client and distributed web
          spectrum. My core focus lies in native-speed cross-platform clients using{" "}
          <span className="text-heading font-medium">Flutter and Dart</span>, high-concurrency web
          interfaces on <span className="text-heading font-medium">Next.js & TypeScript</span>, and
          custom decoupled <span className="text-heading font-medium">headless WordPress & PHP</span> architectures
          engineered for performance over bloat.
        </p>
        <p>
          My engineering philosophy centers on mechanical sympathy and deterministic
          systems: prioritizing local-first persistence, resilient offline synchronization,
          and sub-100ms interface latencies over arbitrary framework fads and disposable abstractions.
        </p>
      </div>

      {/* Action Triggers */}
      <div className="flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium bg-surface text-heading border border-borderline hover:border-zinc-400 hover:text-white transition-colors"
        >
          <span>View Engineering Work</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>

        <button
          onClick={handleCopyEmail}
          type="button"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono text-muted border border-borderline hover:border-zinc-600 hover:text-heading transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied to Clipboard</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 opacity-70" />
              <span>Copy Email ({email})</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
}
