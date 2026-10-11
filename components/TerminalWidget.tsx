"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function TerminalWidget() {
  const [copied, setCopied] = useState(false);

  const commandText = "npx usamanassar@latest";

  const handleCopy = () => {
    navigator.clipboard.writeText(commandText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 border-b border-borderline">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
            [ 04 / ENVIRONMENT CONTEXT ]
          </h2>
          <span className="font-mono text-xs text-zinc-500">CLI Diagnostic</span>
        </div>

        {/* Terminal Window */}
        <div className="overflow-hidden rounded-lg border border-borderline bg-[#0B0D11] shadow-xl">
          {/* Top chrome */}
          <div className="flex items-center justify-between border-b border-borderline px-4 py-2.5 bg-surface/60">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 font-mono text-[11px] text-zinc-400">
                usama@arch-node:~ (zsh)
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 transition-colors hover:text-heading"
            >
              {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copied ? "Copied" : "Copy Command"}</span>
            </button>
          </div>

          {/* Terminal body */}
          <div className="p-5 font-mono text-xs leading-relaxed space-y-3">
            <div className="flex items-center gap-2 text-zinc-300">
              <span className="text-accent-amber">❯</span>
              <span>{commandText}</span>
            </div>

            <div className="space-y-1 text-muted pl-4 border-l border-zinc-800">
              <p>
                <span className="text-zinc-500">engineer:</span> Usama Nassar
              </p>
              <p>
                <span className="text-zinc-500">core_competencies:</span> [
                &quot;Flutter&quot;, &quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;WordPress Core/Headless&quot;
                ]
              </p>
              <p>
                <span className="text-zinc-500">timezone:</span> Asia/Karachi (PKT / UTC+5)
              </p>
              <p>
                <span className="text-zinc-500">status:</span>{" "}
                <span className="text-emerald-400">AVAILABLE_FOR_CONTRACT_AND_ROLES</span>
              </p>
              <p>
                <span className="text-zinc-500">github_endpoint:</span>{" "}
                <a
                  href="https://github.com/usamanassar"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-zinc-200"
                >
                  github.com/usamanassar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
