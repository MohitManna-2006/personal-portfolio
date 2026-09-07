import { SocialCluster } from "@/components/ui/SideNav";

export function ScrollVideoHero() {
  return (
    <section
      aria-label="Intro"
      className="relative w-full min-h-[100svh] flex flex-col overflow-hidden"
    >
      {/* Top meta strip */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:pr-24 pt-5 md:pt-7">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase font-medium text-[var(--text-secondary)]">
          <span>
            <span className="text-[var(--accent)]">◆</span> Portfolio · v1
          </span>
          <span className="hidden md:inline">West Lafayette, IN</span>
          <span>2026</span>
        </div>
      </div>

      {/* Identity block — centered vertically and horizontally */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:pr-24 flex-1 flex flex-col justify-center items-center text-center pb-12">
        <h1 className="font-serif text-[22vw] sm:text-[16vw] lg:text-[clamp(8rem,13vw,14rem)] leading-[0.86] tracking-[-0.05em] text-[var(--foreground)]">
          Mohit
        </h1>

        <p className="mt-6 md:mt-8 max-w-2xl text-lg md:text-2xl leading-[1.35] tracking-[-0.01em] text-[var(--foreground)]">
          I build software where systems, data, and people meet.
        </p>

        <dl className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-y-6 gap-x-12">
          <div className="flex flex-col items-center">
            <dt className="font-mono text-[10px] tracking-[0.26em] uppercase font-medium text-[var(--accent)]">
              Studying
            </dt>
            <dd className="mt-2 text-[var(--foreground)] font-medium text-[15px] md:text-[17px] tracking-[-0.01em]">
              Computer Engineering &amp; Math @ Purdue
            </dd>
          </div>
          <span
            aria-hidden
            className="hidden sm:block h-9 w-px bg-[var(--line)]"
          />
          <div className="flex flex-col items-center">
            <dt className="font-mono text-[10px] tracking-[0.26em] uppercase font-medium text-[var(--accent)]">
              Focus
            </dt>
            <dd className="mt-2 text-[var(--foreground)] font-medium text-[15px] md:text-[17px] tracking-[-0.01em]">
              Software Systems · Machine Learning · Architecture
            </dd>
          </div>
          <span
            aria-hidden
            className="hidden sm:block h-9 w-px bg-[var(--line)]"
          />
          <div className="flex flex-col items-center">
            <dt className="font-mono text-[10px] tracking-[0.26em] uppercase font-medium text-[var(--accent)]">
              Summer 26
            </dt>
            <dd className="mt-2 text-[var(--foreground)] font-medium text-[15px] md:text-[17px] tracking-[-0.01em]">
              Software Engineer Intern @ IBM
            </dd>
          </div>
        </dl>

        {/* Accolades rail — same mono label system as the metadata above. */}
        <ul className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-[10px] tracking-[0.22em] uppercase font-medium text-[var(--text-secondary)]">
          <li>USACO Gold</li>
          <li aria-hidden className="text-[var(--accent)]">
            ·
          </li>
          <li>1st / 200 Purdue Engineering Symposium</li>
          <li aria-hidden className="text-[var(--accent)]">
            ·
          </li>
          <li>5× Hackathon Winner</li>
        </ul>
      </div>

      {/* Bottom rail */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:pr-24 pb-6 md:pb-8">
        <div className="flex items-center justify-between gap-6 font-mono text-[10px] tracking-[0.22em] uppercase font-medium text-[var(--text-secondary)]">
          <span className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--text-secondary)]" aria-hidden />
            Scroll
          </span>
          <SocialCluster />
        </div>
      </div>
    </section>
  );
}
