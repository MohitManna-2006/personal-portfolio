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
    <section className="flex flex-col gap-5 -ml-[225px] max-md:ml-0 max-md:gap-[18px]">
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
            className={`relative rounded-3xl p-[18px_24px_16px] max-sm:px-[18px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] text-[rgba(0,0,0,0.9)] transition-[transform,box-shadow,border-color] duration-[0.22s] ease-in-out overflow-hidden ${
              index > 0 ? "-mt-1 max-md:mt-0" : ""
            } hover:-translate-y-[5px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:border-white/30 ${
              isActive 
                ? "-translate-y-[7px] scale-[1.01] shadow-[0_16px_48px_rgba(0,0,0,0.2)] border-white/40" 
                : ""
            }`}
            style={{
              position: 'relative',
            }}
          >

            <header className="flex justify-between items-start gap-4 mb-3 relative z-[1] max-md:flex-col max-md:items-start">
              <div>
                <h3 className="text-[1.08rem] font-extrabold m-0 tracking-[0.01em] text-black">
                  {exp.company}
                </h3>
                <p className="font-semibold text-[0.94rem] text-[rgba(0,0,0,0.8)] mt-[3px] mb-0">
                  {exp.role}
                </p>
              </div>
              <p className="text-[0.8rem] font-semibold text-[rgba(0,0,0,0.5)] whitespace-nowrap uppercase tracking-[0.08em] max-md:mt-1">
                {exp.period}
              </p>
            </header>

            <ul className="list-none my-[6px_0_10px] p-0 relative z-[1]">
              {exp.bullets.map((line, i) => (
                <li key={i} className="relative pl-5 mb-[0.4rem] text-[0.9rem] leading-[1.6] text-[rgba(0,0,0,0.85)] before:content-[''] before:absolute before:left-0 before:top-[0.7rem] before:w-1.5 before:h-1.5 before:bg-[rgba(0,0,0,0.3)] before:rounded-full">
                  {line}
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center gap-4 mt-2 pt-3 border-t border-white/20 relative z-[1]">
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.09em] text-[rgba(0,0,0,0.8)] bg-white/20 rounded-full py-[5px] px-[11px] border border-white/30">
                {exp.category}
              </span>
              <div className="flex flex-wrap gap-2 justify-end max-md:justify-start">
                {exp.tech.map((t) => (
                  <span key={t} className="text-[0.78rem] font-semibold text-[rgba(0,0,0,0.7)] bg-white/15 rounded-full py-[5px] px-[10px] border border-white/25 shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
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

