"use client";

import { useState } from "react";
import { Copy, Check, ArrowUpRight, Mail } from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "contact@usamanassar.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 border-b border-borderline" id="contact">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
            [ 05 / DIRECT INQUIRY & ENGAGEMENT ]
          </h2>
          <span className="font-mono text-xs text-accent-amber">Open for Contracts</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Channel Details */}
          <div className="rounded-lg border border-borderline bg-surface/40 p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-heading">Initiate Contact</h3>
              <p className="mt-1 text-sm text-muted leading-relaxed">
                Currently evaluating cross-platform Flutter mobile applications, modern Next.js 
                frontend architecture, and custom headless WordPress projects.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-borderline/60 pb-2">
                <span className="text-zinc-500">RESPONSE_TIME</span>
                <span className="text-zinc-300">&lt; 24 Hours</span>
              </div>
              <div className="flex items-center justify-between border-b border-borderline/60 pb-2">
                <span className="text-zinc-500">BASE_LOCATION</span>
                <span className="text-zinc-300">Pakistan (UTC+5)</span>
              </div>
              <div className="flex items-center justify-between border-b border-borderline/60 pb-2">
                <span className="text-zinc-500">PREFERRED_MODES</span>
                <span className="text-zinc-300">Contract / Full-Time Async</span>
              </div>
            </div>
          </div>

          {/* Action Box */}
          <div className="flex flex-col justify-between rounded-lg border border-borderline bg-surface/40 p-6">
            <div className="space-y-4">
              <span className="font-mono text-[11px] text-zinc-500 uppercase">
                Direct Communication Vector
              </span>

              <div className="flex items-center justify-between rounded border border-borderline bg-canvas p-3 font-mono text-xs">
                <div className="flex items-center gap-2 truncate text-heading">
                  <Mail size={14} className="text-muted shrink-0" />
                  <span className="truncate">{email}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-zinc-400 hover:text-heading transition-colors pl-2 shrink-0"
                >
                  {copied ? (
                    <span className="flex items-center gap-1 text-emerald-400">
                      <Check size={14} /> Copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Copy size={14} /> Copy
                    </span>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-borderline/60 flex flex-wrap gap-4 font-mono text-xs">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-1 text-heading transition-colors hover:text-accent-blue"
              >
                <span>Launch Mail Client</span>
                <ArrowUpRight size={14} />
              </a>
              <a
                href="https://github.com/usamanassar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-muted transition-colors hover:text-heading"
              >
                <span>GitHub Repositories</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
