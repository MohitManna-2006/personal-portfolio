import type { RefObject } from "react";

type Category = "AI/ML" | "Backend" | "Full-Stack" | "Research" | "Frontend";

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  timelineLabel: string;
  location?: string;
  bullets: string[];
  tech: string[];
  category: Category;
};

interface ExperienceCardsProps {
  experiences: Experience[];
  activeId: string;
  cardRefs: RefObject<(HTMLElement | null)[]>;
}

export default function ExperienceCards({ experiences, activeId, cardRefs }: ExperienceCardsProps) {
  return (
    <section className="flex w-full max-w-[920px] flex-col gap-5">
      {experiences.map((exp, index) => {
        const isActive = exp.id === activeId;

        return (
          <article
            key={exp.id}
            ref={(el) => {
              if (cardRefs.current) {
                cardRefs.current[index] = el;
              }
            }}
            className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 max-md:rounded-2xl max-md:p-5 ${
              isActive
                ? "border-cyan-300/45 bg-slate-900/80 shadow-[0_20px_55px_rgba(14,116,144,0.35)]"
                : "border-slate-100/10 bg-slate-900/60 shadow-[0_10px_35px_rgba(2,6,23,0.45)] hover:border-violet-300/30 hover:bg-slate-900/70"
            }`}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-cyan-400/15 via-transparent to-violet-400/15" />

            <header className="relative z-[1] mb-4 flex items-start justify-between gap-4 max-md:flex-col max-md:items-start">
              <div className="flex-1">
                <h3 className="m-0 text-xl font-semibold tracking-tight text-slate-50 max-sm:text-lg">{exp.company}</h3>
                <p className="mb-0 mt-1 text-sm font-medium text-cyan-100/90">{exp.role}</p>
              </div>
              <p className="whitespace-nowrap rounded-full border border-slate-100/20 bg-slate-950/70 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-slate-300">
                {exp.period}
              </p>
            </header>

            <ul className="relative z-[1] mb-4 mt-0 list-none p-0">
              {exp.bullets.map((line, i) => (
                <li
                  key={i}
                  className="relative mb-2.5 pl-5 text-sm leading-relaxed text-slate-200/90 before:absolute before:left-0 before:top-[0.48rem] before:h-1.5 before:w-1.5 before:rounded-full before:bg-cyan-300/80"
                >
                  {line}
                </li>
              ))}
            </ul>

            <div className="relative z-[1] mt-auto flex items-center justify-between gap-3 border-t border-slate-100/10 pt-4 max-md:flex-col max-md:items-start">
              <span className="rounded-full border border-violet-200/30 bg-violet-400/15 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-violet-100">
                {exp.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-2.5 py-1 text-[0.72rem] font-medium text-cyan-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
