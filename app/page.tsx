import { SpotlightBackground } from "@/components/SpotlightBackground";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TerminalWidget } from "@/components/TerminalWidget";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CommandMenu } from "@/components/CommandMenu";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-canvas text-muted selection:bg-blue-600/30 selection:text-white overflow-hidden">
      {/* Ambient background lighting and cursor spotlight */}
      <SpotlightBackground />

      {/* Floating dynamic island navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <Hero />
        <TechStack />
        <ProjectsSection />
        <TestimonialsSection />
        <TerminalWidget />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Cmd+K Command Palette */}
      <CommandMenu />
    </div>
  );
}
