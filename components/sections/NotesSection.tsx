import { SectionHeading } from "@/components/ui/SectionHeading";
import { notes } from "@/data/notes";

export function NotesSection() {
  return (
    <section
      id="notes"
      className="relative px-6 md:px-12 lg:pr-24 py-24 md:py-36 max-w-[1440px] mx-auto"
    >
      <SectionHeading
        index="05"
        eyebrow="Notes"
        title="Small principles."
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
        {notes.map((n, i) => (
          <li
            key={n.text}
            className="bg-[var(--background)] p-8 md:p-10 flex gap-6 items-start"
          >
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--accent)] pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-serif text-xl md:text-2xl leading-snug tracking-tight text-[var(--foreground)]">
              {n.text}.
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
