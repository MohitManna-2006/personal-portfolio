type Props = {
  index: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({ index, eyebrow, title }: Props) {
  return (
    <div className="relative flex flex-col gap-5 mb-14 md:mb-20">
      {/* Faint horizontal measurement ticks — subtle technical annotation. */}
      <div
        aria-hidden
        className="hidden md:block h-[7px] w-56 opacity-[0.32]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, var(--text-muted) 0 1px, transparent 1px 14px)",
          WebkitMaskImage:
            "linear-gradient(to right, #000 0%, #000 65%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, #000 0%, #000 65%, transparent 100%)",
        }}
      />

      <div className="flex items-center gap-4 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
        {/* Muted gold dot marking the start of the section. */}
        <span
          aria-hidden
          className="inline-block h-[7px] w-[7px] rounded-full bg-[var(--accent)] opacity-[0.85]"
        />
        <span className="text-[var(--accent)]">{index}</span>

        {/* Short vertical tick adjacent to the section number. */}
        <span
          aria-hidden
          className="hidden md:inline-block h-3 w-px bg-[var(--line)] opacity-90"
        />

        {/* Soft thin line extending from the section number toward the label. */}
        <span
          aria-hidden
          className="h-px w-16 md:w-24 bg-[var(--line)] opacity-100"
        />

        {/* Endpoint dot at the end of the line. */}
        <span
          aria-hidden
          className="hidden md:inline-block h-[3px] w-[3px] rounded-full bg-[var(--text-muted)] opacity-80"
        />

        <span>{eyebrow}</span>
      </div>

      <h2 className="font-serif text-4xl md:text-6xl tracking-[-0.02em] leading-[1.02] text-[var(--foreground)]">
        {title}
      </h2>
    </div>
  );
}
