import { skillCategories } from "@/data/portfolio";

export function TechStack() {
  return (
    <section id="stack" className="py-16 md:py-24 border-b border-borderline">
      {/* Section Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs text-muted uppercase tracking-wider">
            [ DOMAIN INDEX / 02 ]
          </span>
          <span className="text-zinc-700">/</span>
          <span className="font-mono text-xs text-muted uppercase tracking-wider">
            CAPABILITIES
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-heading">
          Technical Index & Core Stack
        </h2>
        <p className="mt-2 text-sm md:text-base text-muted max-w-xl">
          Engineered competencies organized by functional domain. Rigorous implementation
          standards with zero cosmetic abstractions or vanity metrics.
        </p>
      </div>

      {/* Grid of Domain Groups */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={category.title}
            className="flex flex-col justify-between p-6 border border-borderline bg-surface/40 hover:bg-surface/70 transition-colors"
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] text-zinc-500 uppercase tracking-widest">
                  SYS.0{idx + 1}
                </span>
                <span className="h-1.5 w-1.5 bg-zinc-600" />
              </div>

              <h3 className="text-base font-medium text-heading mb-2">
                {category.title}
              </h3>

              <p className="text-xs text-muted leading-relaxed mb-6">
                {category.description}
              </p>
            </div>

            {/* Monospace Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-borderline">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-2.5 py-1 text-xs font-mono text-muted bg-canvas border border-borderline hover:border-zinc-500 hover:text-heading transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
