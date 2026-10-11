import {
  Project,
  SkillCategory,
  ExperienceItem,
  EngineerProfile,
} from "@/types/portfolio";

export const engineerProfile: EngineerProfile = {
  name: "Usama Nassar",
  role: "Full-Stack, Flutter & Web Engineer",
  location: "Arifwala, PK (UTC+5)",
  status: "Available for contract & engineering roles",
  bio: "Engineering high-throughput web applications, production Flutter clients, and decoupled headless architectures. Focused on mechanical sympathy, strict type safety, and minimal, high-efficiency systems.",
  links: {
    github: "https://github.com/usamanassar",
  },
};

export const projects: Project[] = [
  {
    id: "auto-arcane",
    title: "AutoArcane Fleet & Diagnostics Client",
    category: "01 // FLUTTER & NATIVE CHANNELS",
    slug: "auto-arcane",
    tagline: "Cross-platform mobile diagnostics and real-time vehicle telemetry engine.",
    description:
      "Production-grade Flutter mobile client interfacing directly with OBD-II vehicle telemetry buses via custom C++/Java Native Method Channels, providing low-latency real-time diagnostic stream visualization.",
    architecture:
      "Bloc + MethodChannels + Hive + Clean Architecture",
    challenge:
      "Handling erratic high-frequency CAN-bus sensor telemetry packets (120Hz) over Bluetooth without dropping frames or triggering GC stutter on the Flutter rendering thread.",
    solution:
      "Implemented an off-thread Dart isolate buffer for packet ingestion and checksum decoding, dispatching batched state emissions to the UI thread via BLoC streams.",
    metrics: "60 FPS Locked · Sub-15ms Latency · 99.94% Crash-Free",
    techStack: [
      "Flutter",
      "Dart",
      "Bloc",
      "Native Channels",
      "SQLite",
      "Bluetooth LE",
    ],
    links: {
      github: "https://github.com/usamanassar/Portfolio",
      liveDemo: "https://github.com/usamanassar",
    },
    featured: true,
  },
  {
    id: "nexus-core",
    title: "NexusCore High-Concurrency Platform",
    category: "02 // NEXT.JS SYSTEMS",
    slug: "nexus-core",
    tagline: "High-concurrency e-commerce storefront and analytics pipeline on Next.js App Router.",
    description:
      "Mission-critical web application leveraging Next.js React Server Components, ISR cache tags, and optimistic UI transitions to deliver instantaneous checkout workflows under heavy traffic spikes.",
    architecture:
      "Next.js App Router + RSC + Redis + Edge Middleware",
    challenge:
      "Eliminating Cumulative Layout Shift (CLS) and optimizing Time-to-First-Byte (TTFB) across multi-region edge nodes during high-volume flash releases.",
    solution:
      "Architected edge caching with granular On-Demand Revalidation (revalidateTag), streaming SSR boundaries, and parallel data fetching patterns.",
    metrics: "99/100 Lighthouse · Sub-45ms TTFB · Zero CLS",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redis",
      "Edge Middleware",
    ],
    links: {
      github: "https://github.com/usamanassar",
      liveDemo: "https://github.com/usamanassar",
    },
    featured: false,
  },
  {
    id: "apex-wp-headless",
    title: "ApexWP Headless Platform & Engine",
    category: "03 // HEADLESS WORDPRESS & PHP",
    slug: "apex-wp-headless",
    tagline: "Custom WordPress core engine with decoupled GraphQL/REST endpoints and automated cache purging.",
    description:
      "Engineered high-performance WordPress platform featuring bespoke zero-bloat PHP themes, custom object-relational plugins, and a decoupled Next.js consumer interface replacing monolithic legacy templates.",
    architecture:
      "Headless WP + WPGraphQL + Custom OOP PHP + Redis Cache",
    challenge:
      "Standard WordPress setups suffer from heavy multi-table SQL joins, database bloat, and degraded TTFB under concurrent uncached queries.",
    solution:
      "Authored custom PHP database indexing scripts, stripped unused WP core overhead, built custom REST/GraphQL mutations with query batching, and integrated webhook-driven edge cache purges.",
    metrics: "-78% Query Latency · Sub-110ms Response · 3.2x Throughput",
    techStack: [
      "Custom WordPress",
      "PHP 8.x",
      "WP REST API",
      "WPGraphQL",
      "MySQL",
      "Next.js",
    ],
    links: {
      github: "https://github.com/usamanassar",
      liveDemo: "https://github.com/usamanassar",
    },
    featured: false,
  },
  {
    id: "omniflow-realtime",
    title: "OmniFlow Secure Real-Time Messaging",
    category: "04 // REAL-TIME DISTRIBUTED",
    slug: "omniflow-realtime",
    tagline: "Deterministic multi-user messaging engine with offline persistence and sub-second sync.",
    description:
      "Cross-platform client application providing deterministic multi-user message distribution, offline queue persistence, and optimistic state reconciliations.",
    architecture:
      "Riverpod + WebSockets + Isar Offline DB",
    challenge:
      "Maintaining deterministic message ordering and preventing split-brain conflicts during intermittent low-bandwidth network interruptions.",
    solution:
      "Engineered a local append-only log with deterministic monotonic sequence counters and automated exponential-backoff retry queues.",
    metrics: "Sub-80ms Sync Latency · 100% Deterministic Offline Recovery",
    techStack: [
      "Flutter",
      "Dart",
      "Riverpod",
      "Firebase",
      "WebSockets",
      "Isar DB",
    ],
    links: {
      github: "https://github.com/usamanassar",
    },
    featured: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile & Cross-Platform",
    description:
      "Production-grade native client engineering with deterministic state cycles and low-level hardware abstraction.",
    skills: [
      "Flutter",
      "Dart",
      "Bloc / Riverpod",
      "Platform Channels",
      "Offline-First Sync",
    ],
  },
  {
    title: "Full-Stack Web",
    description:
      "High-performance reactive user interfaces and server-rendered architectures with type-safe contracts.",
    skills: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST/GraphQL APIs",
      "Node.js",
    ],
  },
  {
    title: "CMS & Web Architecture",
    description:
      "Enterprise WordPress treated as a custom software platform—clean OOP PHP, headless data layers, and database optimization.",
    skills: [
      "WordPress Core & PHP",
      "Custom Theme Development",
      "Custom Plugin Engineering",
      "Headless WP (REST/WPGraphQL)",
      "WooCommerce Architecture",
      "Server-Side Caching",
    ],
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    role: "Senior Full-Stack & Mobile Engineer",
    company: "Freelance & Independent Engineering",
    period: "2022 — Present",
    highlights: [
      "Designed and deployed production Flutter mobile clients across iOS and Android with custom native channel integrations.",
      "Engineered decoupled headless WordPress systems powering Next.js applications, achieving 70%+ latency reductions.",
      "Delivered responsive web applications utilizing Next.js App Router, TypeScript, and modern state architectures.",
    ],
  },
  {
    role: "Web & Systems Developer",
    company: "Digital Solutions & Client Engineering",
    period: "2020 — 2022",
    highlights: [
      "Authored custom WordPress plugins and bespoke themes eliminating bloated third-party page builders.",
      "Implemented real-time client communication channels and RESTful backend integrations with MySQL database profiling.",
      "Engineered cross-browser, accessible, and high-performance frontend interfaces with zero layout shift.",
    ],
  },
];
