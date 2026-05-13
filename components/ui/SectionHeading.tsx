type Props = {
  index: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({ index, eyebrow, title }: Props) {
  return (
    <div className="flex flex-col gap-6 mb-14 md:mb-20">
      <div className="flex items-center gap-4 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
        <span className="text-[var(--accent)]">{index}</span>
        <span className="h-px w-10 bg-[var(--line)]" aria-hidden />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-serif text-4xl md:text-6xl tracking-[-0.02em] leading-[1.02] text-[var(--foreground)]">
        {title}
      </h2>
    </div>
  );
}
