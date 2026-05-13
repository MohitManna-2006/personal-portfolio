"use client";

import { useEffect, useState } from "react";
import { navLinks, socialLinks } from "@/data/links";

// Sections that exist on the page → which top-level nav item they activate.
// Research / Skills / Notes fold into Projects until Contact takes over.
const SECTION_TO_NAV: Record<string, string> = {
  work: "work",
  projects: "projects",
  research: "projects",
  skills: "projects",
  notes: "projects",
  contact: "contact",
};

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = Object.keys(SECTION_TO_NAV);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (elements.length === 0) return;

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          ratios.set(
            e.target.id,
            e.isIntersecting ? e.intersectionRatio : 0,
          );
        }
        let topId: string | null = null;
        let topRatio = 0;
        ratios.forEach((r, id) => {
          if (r > topRatio) {
            topRatio = r;
            topId = id;
          }
        });
        const navId = topId ? SECTION_TO_NAV[topId] : null;
        setActive((prev) => (prev === navId ? prev : navId));
      },
      {
        // Trigger near the upper-middle of the viewport so the active state
        // changes feel naturally tied to what the eye is reading.
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}

function navIdForHref(href: string): string | null {
  return href.startsWith("#") ? href.slice(1) : null;
}

export function SideNav() {
  const active = useActiveSection();

  return (
    <nav
      aria-label="Primary"
      className="hidden lg:flex fixed top-0 right-0 h-screen w-14 z-30 flex-col items-center justify-center pointer-events-none"
    >
      <ul className="flex flex-col gap-8 items-center pointer-events-auto">
        {navLinks.map((link) => {
          const id = navIdForHref(link.href);
          const isActive = id !== null && id === active;
          const isPdf = link.href.endsWith(".pdf");
          return (
            <li
              key={link.label}
              className="flex flex-col items-center gap-2"
            >
              <span
                aria-hidden
                className={`h-[6px] w-[6px] rounded-full bg-[var(--accent)] transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
              <a
                href={link.href}
                target={isPdf ? "_blank" : undefined}
                rel={isPdf ? "noopener noreferrer" : undefined}
                aria-current={isActive ? "true" : undefined}
                className={`font-mono text-[10px] tracking-[0.28em] uppercase transition-colors hover:text-[var(--accent)] [writing-mode:vertical-rl] rotate-180 ${
                  isActive
                    ? "text-[var(--foreground)]"
                    : "text-[var(--text-secondary)]"
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function TopNav() {
  const active = useActiveSection();

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
            {navLinks.map((link) => {
              const id = navIdForHref(link.href);
              const isActive = id !== null && id === active;
              const isPdf = link.href.endsWith(".pdf");
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={isPdf ? "_blank" : undefined}
                    rel={isPdf ? "noopener noreferrer" : undefined}
                    aria-current={isActive ? "true" : undefined}
                    className={`font-mono text-[10px] tracking-[0.18em] uppercase whitespace-nowrap transition-colors hover:text-[var(--accent)] ${
                      isActive
                        ? "text-[var(--foreground)]"
                        : "text-[var(--text-secondary)]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
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
