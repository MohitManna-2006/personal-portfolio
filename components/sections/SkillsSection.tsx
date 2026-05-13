import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative px-6 md:px-12 lg:pr-24 py-24 md:py-36 max-w-[1440px] mx-auto"
    >
      <SectionHeading index="04" eyebrow="Skills" title="Technical range." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 border-t border-[var(--line)] pt-12">
        {skillGroups.map((g) => (
          <div key={g.group}>
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)] mb-4">
              {g.group}
            </div>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[var(--foreground)]/90">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="text-sm md:text-[15px] leading-relaxed"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
