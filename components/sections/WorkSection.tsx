import { SectionHeading } from "@/components/ui/SectionHeading";
import { workItems } from "@/data/work";

export function WorkSection() {
  return (
    <section
      id="work"
      className="relative px-6 md:px-12 lg:pr-24 py-24 md:py-36 max-w-[1440px] mx-auto"
    >
      <SectionHeading index="01" eyebrow="Work" title="Selected experience." />

      <ul className="border-t border-[var(--line)]">
        {workItems.map((item) => (
          <li
            key={item.company + item.role}
            className="grid grid-cols-12 gap-6 py-8 md:py-10 border-b border-[var(--line)] group"
          >
            <div className="col-span-12 md:col-span-3 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
              {item.dates}
            </div>

            <div className="col-span-12 md:col-span-5">
              <div className="font-serif text-2xl md:text-3xl tracking-tight text-[var(--foreground)]">
                {item.company}
              </div>
              <div className="mt-1 text-sm text-[var(--text-secondary)]">
                {item.role}
              </div>
              <p className="mt-4 text-[var(--foreground)]/85 leading-relaxed max-w-md">
                {item.surfaceLine}
              </p>
            </div>

            <div className="col-span-12 md:col-span-4 flex flex-wrap gap-2 md:justify-end items-start content-start">
              {item.technologies.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--text-secondary)] px-2 py-1 border border-[var(--line)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
