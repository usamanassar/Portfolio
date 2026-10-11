"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FolderGit2, Terminal, ExternalLink, Copy, Check } from "lucide-react";

interface ActionItem {
  id: string;
  label: string;
  category: "Navigation" | "Actions" | "External";
  icon: typeof Search;
  shortcut?: string;
  perform: () => void;
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@usamanassar.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 1200);
  };

  const actions: ActionItem[] = [
    {
      id: "projects",
      label: "Jump to Projects & Case Studies",
      category: "Navigation",
      icon: FolderGit2,
      shortcut: "P",
      perform: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      id: "stack",
      label: "View Architecture & Tech Stack",
      category: "Navigation",
      icon: Terminal,
      shortcut: "S",
      perform: () => {
        document.getElementById("stack")?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      id: "copy-email",
      label: copied ? "Copied Email to Clipboard!" : "Copy Primary Contact Email",
      category: "Actions",
      icon: copied ? Check : Copy,
      shortcut: "C",
      perform: handleCopyEmail,
    },
    {
      id: "github",
      label: "Open GitHub Profile (usamanassar)",
      category: "External",
      icon: ExternalLink,
      perform: () => {
        window.open("https://github.com/usamanassar", "_blank");
        setOpen(false);
      },
    },
  ];

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Floating Shortcut Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-2 rounded border border-borderline bg-surface/90 px-3 py-1.5 font-mono text-xs text-muted backdrop-blur transition-colors hover:border-zinc-600 hover:text-heading"
      >
        <span>Command Menu</span>
        <kbd className="rounded border border-borderline bg-canvas px-1.5 py-0.5 text-[10px] text-zinc-300">
          ⌘K
        </kbd>
      </button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-canvas/80 backdrop-blur-sm">
            <div
              className="fixed inset-0"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-lg border border-borderline bg-surface shadow-2xl"
            >
              <div className="flex items-center border-b border-borderline px-4">
                <Search size={16} className="text-muted shrink-0" />
                <input
                  type="text"
                  placeholder="Type a command or jump to section..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent px-3 py-3.5 font-mono text-xs text-heading placeholder:text-zinc-600 focus:outline-none"
                  autoFocus
                />
                <kbd className="font-mono text-[10px] text-muted border border-borderline px-1.5 py-0.5 rounded">
                  ESC
                </kbd>
              </div>

              <div className="max-h-72 overflow-y-auto p-2">
                {filtered.length === 0 ? (
                  <div className="p-4 text-center font-mono text-xs text-zinc-600">
                    No commands matching &quot;{query}&quot;
                  </div>
                ) : (
                  filtered.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={item.perform}
                        className="flex w-full items-center justify-between rounded px-3 py-2 text-left font-mono text-xs text-muted transition-colors hover:bg-canvas hover:text-heading"
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon size={14} className="text-zinc-400" />
                          <span>{item.label}</span>
                        </div>
                        {item.shortcut && (
                          <kbd className="rounded border border-borderline bg-canvas px-1.5 py-0.5 text-[10px] text-zinc-500">
                            {item.shortcut}
                          </kbd>
                        )}
                      </button>
                    );
                  })
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
