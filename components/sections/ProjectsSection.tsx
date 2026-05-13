import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative px-6 md:px-12 lg:pr-24 py-24 md:py-36 max-w-[1440px] mx-auto"
    >
      <SectionHeading
        index="02"
        eyebrow="Projects"
        title="Things I've shipped."
      />

      <div className="flex flex-col gap-12 md:gap-20">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="grid grid-cols-12 gap-6 pt-10 border-t border-[var(--line)]"
          >
            <div className="col-span-12 md:col-span-2 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--accent)]">
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
                {p.category}
              </div>
              <h3 className="mt-2 font-serif text-3xl md:text-5xl tracking-[-0.02em] leading-[1.02] text-[var(--foreground)]">
                {p.title}
              </h3>
              <p className="mt-5 text-[var(--foreground)]/85 leading-relaxed max-w-xl">
                {p.surfaceLine}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.technologies.slice(0, 6).map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--text-secondary)] px-2 py-1 border border-[var(--line)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 md:text-right">
              {p.metric ? (
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)] mb-2">
                  Signal
                </div>
              ) : null}
              {p.metric ? (
                <div className="font-serif text-xl md:text-2xl text-[var(--foreground)] leading-snug">
                  {p.metric}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
