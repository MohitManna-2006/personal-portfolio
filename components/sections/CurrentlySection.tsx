type Item = {
  index: string;
  label: string;
  value: string;
};

const items: Item[] = [
  {
    index: "01",
    label: "Studying",
    value: "Computer Engineering @ Purdue",
  },
  {
    index: "02",
    label: "Building",
    value:
      "Software systems across architecture, data, and machine learning",
  },
  {
    index: "03",
    label: "Next",
    value: "Software Engineer Intern @ IBM (Summer 2026)",
  },
];

export function CurrentlySection() {
  return (
    <section
      aria-label="Currently"
      className="relative px-6 md:px-12 lg:pr-24 pt-4 pb-12 md:pt-6 md:pb-16 max-w-[1440px] mx-auto"
    >
      <div className="grid grid-cols-12 gap-6 border-t border-b border-[var(--line)] py-8 md:py-10">
        <div className="col-span-12 md:col-span-3">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--text-muted)]">
            <span
              aria-hidden
              className="h-[6px] w-[6px] rounded-full bg-[var(--accent)] opacity-80"
            />
            <span>Currently</span>
          </div>
        </div>

        <ul className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
          {items.map((it, i) => (
            <li
              key={it.index}
              className={`flex flex-col gap-2 ${
                i === 0
                  ? ""
                  : "md:border-l md:border-[var(--line)] md:pl-6"
              }`}
            >
              <div className="flex items-baseline gap-3 font-mono text-[10px] tracking-[0.22em] uppercase">
                <span className="text-[var(--accent)]">{it.index}</span>
                <span className="text-[var(--text-muted)]">{it.label}</span>
              </div>
              <p className="text-[var(--foreground)]/85 text-sm md:text-[15px] leading-snug max-w-xs">
                {it.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
