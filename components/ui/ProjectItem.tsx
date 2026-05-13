"use client";

import type { ProjectItem as ProjectItemData } from "@/data/projects";

type Props = {
  item: ProjectItemData;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  panelId: string;
};

export function ProjectItem({ item, index, isOpen, onToggle, panelId }: Props) {
  return (
    <article className="border-t border-[var(--line)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="block w-full text-left pt-10 pb-10 group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
      >
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--accent)] flex items-start gap-2">
            {isOpen ? (
              <span
                aria-hidden
                className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--accent)] mt-[7px]"
              />
            ) : null}
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
              {item.category}
            </div>
            <h3 className="mt-2 font-serif text-3xl md:text-5xl tracking-[-0.02em] leading-[1.02] text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
              {item.title}
            </h3>
            <p className="mt-5 text-[var(--foreground)]/85 leading-relaxed max-w-xl">
              {item.surfaceLine}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.technologies.slice(0, 6).map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--text-secondary)] px-2 py-1 border border-[var(--line)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 md:text-right flex flex-col gap-3 md:items-end">
            {item.metric ? (
              <>
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
                  Signal
                </div>
                <div
                  className={`font-serif text-xl md:text-2xl leading-snug transition-colors ${
                    isOpen
                      ? "text-[var(--accent)]"
                      : "text-[var(--foreground)] group-hover:text-[var(--accent)]"
                  }`}
                >
                  {item.metric}
                </div>
              </>
            ) : null}
            <span
              aria-hidden
              className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors mt-2"
            >
              {isOpen ? "— Close" : "+ Open"}
            </span>
          </div>
        </div>
      </button>

      <div
        id={panelId}
        role="region"
        aria-hidden={!isOpen}
        className="grid transition-[grid-template-rows] duration-[320ms] ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div
            className={`grid grid-cols-12 gap-6 transition-opacity duration-300 ease-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="hidden md:block md:col-span-2" aria-hidden />
            <div className="col-span-12 md:col-span-10 pb-10 md:pb-12">
              <div className="border-t border-[var(--line)] pt-6 md:pt-7">
                <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--accent)] mb-5">
                  Case File
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl">
                  {item.details.map((d) => (
                    <li
                      key={d}
                      className="flex gap-3 text-[var(--foreground)]/85 leading-relaxed text-[15px]"
                    >
                      <span
                        aria-hidden
                        className="mt-[10px] inline-block h-px w-3 bg-[var(--text-muted)] shrink-0"
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
