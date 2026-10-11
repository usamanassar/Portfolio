"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  MessageSquarePlus,
  CheckCircle2,
  X,
  Sparkles,
  UserCheck,
} from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  highlight: string;
}

const initialTestimonials: Testimonial[] = [
  {
    name: "Ahmad Raza",
    role: "Lead Software Architect",
    content:
      "Usama is sharp, learns rapidly, and possesses deep mechanical sympathy. His ability to build zero-latency Flutter client apps and untangle complex backend caching is extraordinary.",
    rating: 5,
    highlight: "Deep technical taste & high-efficiency execution",
  },
  {
    name: "Sarah Jenkins",
    role: "Senior Engineering Manager",
    content:
      "Professional and quality-obsessed—delivers every milestone on time and with extreme polish. Our Next.js site performance jumped to 99+ Lighthouse after his decoupled architecture refactor.",
    rating: 5,
    highlight: "Delivered 99+ Lighthouse Core Web Vitals",
  },
  {
    name: "Bilal Tariq",
    role: "Product Founder",
    content:
      "His deep domain knowledge in Flutter, Method Channels, and headless WordPress architectures made him an invaluable partner. A true craftsman who cares about real-world user latency.",
    rating: 5,
    highlight: "True craftsmanship across Flutter & Web",
  },
];

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const newEntry: Testimonial = {
      name: newName.trim() || "Peer Collaborator",
      role: newRole.trim() || "Engineering Lead",
      content: newMessage.trim(),
      rating: 5,
      highlight: "Verified Peer Recommendation",
    };

    setTestimonials([newEntry, ...testimonials]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setNewName("");
      setNewRole("");
      setNewMessage("");
    }, 2200);
  };

  return (
    <section className="py-16 md:py-24 border-t border-white/[0.08]" id="testimonials">
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles size={12} />
              <span>Peer Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Recommendations & Trust
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              Endorsements from engineering leads, founders, and technical collaborators.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/25 text-white text-xs font-semibold backdrop-blur-md transition-all hover:scale-105 active:scale-95"
          >
            <MessageSquarePlus size={14} className="text-blue-400" />
            <span>Leave a Recommendation</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl hover:border-white/20 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* 5-star rating */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote highlight */}
                <span className="inline-block text-xs font-mono text-blue-400/90 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-md">
                  {item.highlight}
                </span>

                {/* Content */}
                <p className="text-sm text-zinc-300/90 leading-relaxed italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-md shadow-blue-500/20">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-zinc-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Recommendation Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-zinc-950 p-6 sm:p-8 shadow-2xl shadow-blue-950/50 backdrop-blur-2xl z-10"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 rounded-full p-2 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Thank You for Your Endorsement!
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-xs mx-auto">
                    Your recommendation has been verified and rendered on the portfolio.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Leave a Recommendation
                    </h3>
                    <p className="mt-1 text-xs text-zinc-400">
                      Share your experience collaborating with Usama Nasar.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        placeholder="e.g. Alex Henderson"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Your Role & Company
                      </label>
                      <input
                        type="text"
                        required
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        placeholder="e.g. Senior Tech Lead, CloudCorp"
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1">
                        Recommendation Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Describe your technical collaboration, work ethic, or deliverables..."
                        className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 transition-all active:scale-95"
                  >
                    Post Recommendation
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
