"use client";

import type { WorkItem as WorkItemData } from "@/data/work";

type Props = {
  item: WorkItemData;
  isOpen: boolean;
  onToggle: () => void;
  panelId: string;
};

export function WorkItem({ item, isOpen, onToggle, panelId }: Props) {
  return (
    <li className="border-b border-[var(--line)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="block w-full text-left py-8 md:py-10 group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
      >
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--text-muted)] flex items-start gap-2">
            {isOpen ? (
              <span
                aria-hidden
                className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--accent)] mt-[7px]"
              />
            ) : null}
            <span>{item.dates}</span>
          </div>

          <div className="col-span-12 md:col-span-5">
            <div className="font-serif text-2xl md:text-3xl tracking-tight text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
              {item.company}
            </div>
            <div className="mt-1 text-sm text-[var(--text-secondary)]">
              {item.role}
            </div>
            <p className="mt-4 text-[var(--foreground)]/85 leading-relaxed max-w-md">
              {item.surfaceLine}
            </p>
          </div>

          <div className="col-span-12 md:col-span-4 flex flex-col gap-3 md:items-end">
            <div className="flex flex-wrap gap-2 md:justify-end">
              {item.technologies.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--text-secondary)] px-2 py-1 border border-[var(--line)]"
                >
                  {t}
                </span>
              ))}
            </div>
            <span
              aria-hidden
              className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors"
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
            <div className="hidden md:block md:col-span-3" aria-hidden />
            <div className="col-span-12 md:col-span-9 pb-10 md:pb-12">
              <div className="border-t border-[var(--line)] pt-6 md:pt-7">
                <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--accent)] mb-5">
                  Proof
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
    </li>
  );
}
