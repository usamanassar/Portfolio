import { Project } from "@/types/portfolio";
import { ArrowUpRight, Github, Cpu } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between rounded-lg border border-borderline bg-surface/40 p-6 backdrop-blur-sm transition-all hover:border-zinc-700 hover:bg-surface/70 ${
        featured ? "md:col-span-2" : "md:col-span-1"
      }`}
    >
      <div className="space-y-4">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              {project.category ?? "ENGINEERING SPEC"}
            </span>
            <h3 className="text-xl font-bold tracking-tight text-heading group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Repository"
                className="rounded border border-borderline bg-surface p-2 text-muted transition-colors hover:border-zinc-600 hover:text-heading"
              >
                <Github size={16} />
              </a>
            )}
            {project.links?.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noreferrer"
                aria-label="Live Deployment"
                className="rounded border border-borderline bg-surface p-2 text-muted transition-colors hover:border-zinc-600 hover:text-heading"
              >
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Narrative / Problem Statement */}
        <p className="text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Architectural Blueprint Note */}
        {project.architecture && (
          <div className="flex items-center gap-2 rounded border border-borderline/60 bg-canvas/40 px-3 py-2 font-mono text-xs text-zinc-300">
            <Cpu size={14} className="text-accent-amber shrink-0" />
            <span className="truncate">{project.architecture}</span>
          </div>
        )}

        {/* Challenge & Solution details (Featured card only) */}
        {featured && (project.challenge || project.solution) && (
          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
            {project.challenge && (
              <div className="rounded border border-borderline/40 bg-canvas/20 p-3">
                <span className="font-mono text-[10px] uppercase text-zinc-500">Constraint</span>
                <p className="mt-1 text-xs text-muted leading-relaxed">{project.challenge}</p>
              </div>
            )}
            {project.solution && (
              <div className="rounded border border-borderline/40 bg-canvas/20 p-3">
                <span className="font-mono text-[10px] uppercase text-zinc-500">Implementation</span>
                <p className="mt-1 text-xs text-muted leading-relaxed">{project.solution}</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer: Metrics & Tech Stack */}
      <div className="mt-6 space-y-4 pt-4 border-t border-borderline/60">
        {project.metrics && (
          <div className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              {typeof project.metrics === "string"
                ? project.metrics
                : project.metrics.map((m) => `${m.label}: ${m.value}`).join(" · ")}
            </span>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-borderline bg-surface px-2 py-0.5 font-mono text-[11px] text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
