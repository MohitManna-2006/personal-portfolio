import { SocialCluster } from "@/components/ui/SideNav";

export function ScrollVideoHero() {
  return (
    <section
      aria-label="Intro"
      className="relative w-full min-h-[100svh] flex flex-col overflow-hidden"
    >
      {/* Top meta strip */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:pr-24 pt-5 md:pt-7">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
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

        <dl className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-y-4 gap-x-12">
          <div className="flex flex-col items-center">
            <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
              Studying
            </dt>
            <dd className="mt-1 text-[var(--text-secondary)] text-sm md:text-[15px]">
              Computer Engineering @ Purdue
            </dd>
          </div>
          <span
            aria-hidden
            className="hidden sm:block h-6 w-px bg-[var(--line)]"
          />
          <div className="flex flex-col items-center">
            <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
              Focus
            </dt>
            <dd className="mt-1 text-[var(--text-secondary)] text-sm md:text-[15px]">
              Software systems · machine learning · architecture
            </dd>
          </div>
        </dl>
      </div>

      {/* Bottom rail */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:pr-24 pb-6 md:pb-8">
        <div className="flex items-center justify-between gap-6 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
          <span className="flex items-center gap-3">
            <span className="h-px w-8 bg-[var(--line)]" aria-hidden />
            Scroll
          </span>
          <SocialCluster />
        </div>
      </div>
    </section>
  );
}
