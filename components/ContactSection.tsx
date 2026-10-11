"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  ArrowUpRight,
  Mail,
  Send,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
} from "lucide-react";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const directEmail = "musamanasar765@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Trigger local feedback and open prefilled mailto
    const subject = encodeURIComponent(`Project Inquiry from ${name || "Client"}`);
    const body = encodeURIComponent(
      `Hello Usama,\n\n${message}\n\nFrom: ${name} (${senderEmail})`
    );
    window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;

    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName("");
      setSenderEmail("");
      setMessage("");
    }, 4000);
  };

  return (
    <section className="py-16 md:py-24 border-t border-white/[0.08]" id="contact">
      <div className="space-y-10">
        {/* Section Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Mail size={12} />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let’s Build Something Exceptional
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
            Have a project in mind, looking to scale a mobile client, or need high-concurrency web engineering? Let’s talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Details & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-6 sm:p-7 backdrop-blur-xl space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for New Projects</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Direct Channel
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  I typically respond within 24 hours. Feel free to copy my direct email or initiate a message.
                </p>
              </div>

              {/* Direct email card with 1-click copy */}
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 backdrop-blur-md">
                <div className="flex items-center gap-2.5 text-zinc-200 text-xs sm:text-sm font-mono truncate">
                  <Mail size={16} className="text-blue-400 shrink-0" />
                  <span className="truncate">{directEmail}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-white/10 bg-white/[0.06] hover:bg-white/[0.12] text-xs font-medium text-white transition-all active:scale-95 shrink-0"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} className="text-zinc-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Parameters list */}
              <div className="space-y-3 pt-2 text-xs font-mono">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-zinc-500" /> Response Time
                  </span>
                  <span className="text-white">&lt; 24 Hours</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-zinc-500" /> Location
                  </span>
                  <span className="text-white">Arifwala, PK (UTC+5)</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-zinc-500" /> Engagement
                  </span>
                  <span className="text-white">Contract / Full-Time Async</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-xl">
              {sent ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Message Dispatched!
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                    Your email client has been prepared. I will review your requirements and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Send a Direct Note
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="e.g. john@company.com"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Project Details / Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your app, timeline, technical architecture, or goals..."
                      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all hover:scale-105 active:scale-95"
                  >
                    <Send size={14} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
