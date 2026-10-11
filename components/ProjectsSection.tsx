import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
  return (
    <section className="py-16 border-b border-borderline" id="projects">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
            [ 03 / PRODUCTION WORK & SYSTEMS ]
          </h2>
          <span className="font-mono text-xs text-zinc-500">
            {projects.length} Repositories / Deployments
          </span>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={index === 0 || project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
