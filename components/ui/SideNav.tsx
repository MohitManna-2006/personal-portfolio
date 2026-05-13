import { navLinks, socialLinks } from "@/data/links";

export function SideNav() {
  return (
    <nav
      aria-label="Primary"
      className="hidden lg:flex fixed top-0 right-0 h-screen w-14 z-30 flex-col items-center justify-center pointer-events-none"
    >
      <ul className="flex flex-col gap-8 items-center pointer-events-auto">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.endsWith(".pdf") ? "_blank" : undefined}
              rel={link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
              className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors [writing-mode:vertical-rl] rotate-180"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function TopNav() {
  return (
    <header className="lg:hidden sticky top-0 z-30 backdrop-blur-md bg-[color:var(--background)]/85 border-b border-[var(--line)]">
      <div className="flex items-center justify-between px-5 py-4">
        <a
          href="#"
          className="font-serif text-lg tracking-tight text-[var(--foreground)]"
        >
          Mohit
        </a>
        <nav aria-label="Primary mobile">
          <ul className="flex items-center gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel={
                    link.href.endsWith(".pdf")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-secondary)] hover:text-[var(--accent)] whitespace-nowrap"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function SocialCluster({
  className = "",
}: {
  className?: string;
}) {
  return (
    <ul
      className={`flex items-center gap-5 font-mono text-[10px] tracking-[0.22em] uppercase ${className}`}
    >
      {socialLinks.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target={s.external ? "_blank" : undefined}
            rel={s.external ? "noopener noreferrer" : undefined}
            className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
          >
            {s.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
