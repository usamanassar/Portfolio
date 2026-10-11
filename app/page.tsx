import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TerminalWidget } from "@/components/TerminalWidget";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CommandMenu } from "@/components/CommandMenu";

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <TechStack />
        <ProjectsSection />
        <TerminalWidget />
        <ContactSection />
      </main>
      <Footer />
      <CommandMenu />
    </div>
  );
}
