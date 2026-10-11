"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function SpotlightBackground() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Ambient background mesh glow */}
      <div className="absolute -top-[20%] -left-[10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[130px] animate-pulse-slow" />
      <div className="absolute top-[35%] -right-[15%] h-[650px] w-[650px] rounded-full bg-purple-600/10 blur-[150px] animate-pulse-slow delay-1000" />
      <div className="absolute -bottom-[10%] left-[20%] h-[550px] w-[550px] rounded-full bg-emerald-600/8 blur-[140px] animate-pulse-slow delay-700" />

      {/* Subtle Dot Grid with radial mask */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      {/* Interactive Cursor Spotlight Glow */}
      {mounted && (
        <motion.div
          className="absolute -inset-px opacity-70 transition-opacity duration-300"
          style={{
            background: `radial-gradient(650px circle at ${smoothX.get()}px ${smoothY.get()}px, rgba(59, 130, 246, 0.08), transparent 70%)`,
          }}
        />
      )}
    </div>
  );
}
