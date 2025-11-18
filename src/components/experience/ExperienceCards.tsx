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

export default function ExperienceCards({
  experiences,
  activeId,
  cardRefs,
}: ExperienceCardsProps) {
  return (
    <section className="flex flex-col gap-6 max-md:gap-5 max-sm:gap-4 w-full max-w-[900px]">
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
            className={`group relative rounded-3xl max-md:rounded-2xl max-sm:rounded-xl p-6 max-md:p-5 max-sm:p-4 bg-white/[0.12] backdrop-blur-xl border border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.15)] text-[rgba(0,0,0,0.9)] transition-all duration-300 ease-out overflow-hidden w-full ${
              index > 0 ? "-mt-1 max-md:mt-0" : ""
            } hover:scale-[1.01] hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] hover:border-white/35 max-md:hover:scale-100 max-md:hover:shadow-[0_8px_32px_rgba(0,0,0,0.15)] ${
              isActive 
                ? "scale-[1.01] shadow-[0_20px_56px_rgba(0,0,0,0.25)] border-white/40 max-md:scale-100 max-md:shadow-[0_8px_32px_rgba(0,0,0,0.15)]" 
                : ""
            }`}
            style={{
              position: 'relative',
            }}
          >

            <header className="flex justify-between items-start gap-4 max-sm:gap-3 mb-4 max-md:mb-3 max-sm:mb-2.5 relative z-[1] max-md:flex-col max-md:items-start">
              <div className="flex-1">
                <h3 className="text-[1.15rem] max-md:text-[1.05rem] max-sm:text-[0.95rem] font-extrabold m-0 tracking-tight text-black leading-tight">
                  {exp.company}
                </h3>
                <p className="font-semibold text-[0.95rem] max-md:text-[0.88rem] max-sm:text-[0.82rem] text-[rgba(0,0,0,0.75)] mt-1.5 max-sm:mt-1 mb-0 leading-snug">
                  {exp.role}
                </p>
              </div>
              <p className="text-[0.7rem] max-md:text-[0.68rem] max-sm:text-[0.65rem] font-bold text-[rgba(0,0,0,0.45)] whitespace-nowrap uppercase tracking-[0.12em] max-md:mt-1 max-sm:mt-0.5">
                {exp.period}
              </p>
            </header>

            <ul className="list-none my-0 mb-5 max-md:mb-4 max-sm:mb-3 p-0 relative z-[1]">
              {exp.bullets.map((line, i) => (
                <li key={i} className="relative pl-5 max-sm:pl-4 mb-3 max-sm:mb-2.5 text-[0.9rem] max-md:text-[0.86rem] max-sm:text-[0.82rem] leading-[1.65] max-sm:leading-[1.55] text-[rgba(0,0,0,0.75)] before:content-[''] before:absolute before:left-0 before:top-[0.55rem] max-sm:before:top-[0.5rem] before:w-1.5 max-sm:before:w-1.5 max-sm:before:h-1.5 before:h-1.5 before:bg-[rgba(0,0,0,0.3)] before:rounded-full">
                  {line}
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center gap-4 max-sm:gap-3 mt-auto pt-4 max-sm:pt-3 border-t border-white/25 relative z-[1] max-md:flex-col max-md:items-start max-md:gap-3">
              <span className="text-[0.72rem] max-md:text-[0.7rem] max-sm:text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[rgba(0,0,0,0.85)] bg-white/20 rounded-full py-1.5 px-3 max-sm:py-1 max-sm:px-2.5 border border-white/30 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                {exp.category}
              </span>
              <div className="flex flex-wrap gap-2 max-sm:gap-1.5 justify-end max-md:justify-start">
                {exp.tech.map((t) => (
                  <span key={t} className="text-[0.75rem] max-md:text-[0.7rem] max-sm:text-[0.65rem] font-semibold text-[rgba(0,0,0,0.7)] bg-white/20 rounded-full py-1.5 px-3 max-sm:py-1 max-sm:px-2 border border-white/30 shadow-[0_2px_6px_rgba(0,0,0,0.08)] transition-all duration-200 hover:bg-white/25 hover:border-white/40">
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

