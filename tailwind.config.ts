import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#090A0F",
        surface: "#12141C",
        "surface-hover": "#1A1D27",
        borderline: "rgba(255, 255, 255, 0.08)",
        "borderline-hover": "rgba(255, 255, 255, 0.18)",
        "accent-blue": "#3B82F6",
        "accent-cyan": "#06B6D4",
        "accent-purple": "#8B5CF6",
        "accent-amber": "#F59E0B",
        "accent-emerald": "#10B981",
        muted: "#8A92A6",
        heading: "#F8FAFC",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      animation: {
        "shimmer": "shimmer 2.5s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 6s ease-in-out infinite alternate",
      },
      keyframes: {
        shimmer: {
          "from": { backgroundPosition: "0 0" },
          "to": { backgroundPosition: "-200% 0" },
        },
        glow: {
          "0%": { opacity: "0.4", transform: "scale(0.98)" },
          "100%": { opacity: "0.8", transform: "scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
