import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://usamanassar.com"),
  title: "Usama Nassar — Full-Stack & Systems Engineer",
  description:
    "Cross-platform mobile and web engineering with Flutter, Next.js, and distributed architectures.",
  openGraph: {
    title: "Usama Nassar — Full-Stack & Systems Engineer",
    description:
      "Cross-platform mobile and web engineering with Flutter, Next.js, and distributed architectures.",
    url: "https://usamanassar.com",
    siteName: "Usama Nassar Engineering",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usama Nassar — Full-Stack & Systems Engineer",
    description:
      "Cross-platform mobile and web engineering with Flutter, Next.js, and distributed architectures.",
  },
  alternates: {
    canonical: "https://usamanassar.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Usama Nassar",
  url: "https://usamanassar.com",
  jobTitle: "Software Engineer",
  sameAs: ["https://github.com/usamanassar"],
  knowsAbout: [
    "Flutter",
    "Dart",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "WordPress Core",
    "PHP",
    "Headless CMS Architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-canvas text-muted antialiased font-sans selection:bg-accent-blue/20 selection:text-white min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
