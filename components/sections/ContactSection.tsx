import { SectionHeading } from "@/components/ui/SectionHeading";
import { resumeHref, socialLinks } from "@/data/links";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 lg:pr-24 py-24 md:py-40 max-w-[1440px] mx-auto"
    >
      <SectionHeading
        index="06"
        eyebrow="Contact"
        title="Want the concise version?"
      />

      <div className="grid grid-cols-12 gap-6 border-t border-[var(--line)] pt-12">
        <div className="col-span-12 md:col-span-6">
          <p className="text-[var(--foreground)]/85 leading-relaxed max-w-md">
            Open to software engineering, systems, infrastructure, and applied
            AI roles.
          </p>
        </div>

        <ul className="col-span-12 md:col-span-6 flex flex-col gap-3 md:items-end">
          <li>
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-serif text-2xl md:text-3xl text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
            >
              <span>Resume</span>
              <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)]">
                ↗ pdf
              </span>
            </a>
          </li>
          {socialLinks.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-3 font-serif text-2xl md:text-3xl text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
              >
                <span>{s.label}</span>
                <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)]">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="mt-24 md:mt-40 pt-8 border-t border-[var(--line)] flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
        <span>© 2026 · Mohit Manna</span>
        <span>Built quietly · Next · Tailwind</span>
      </footer>
    </section>
  );
}
