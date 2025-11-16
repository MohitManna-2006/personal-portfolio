import { useEffect, useRef, useState } from "react";
import styles from "./Experience.module.css";
import ExperienceCards, { type Experience } from "./ExperienceCards";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

/* ----------------------------- Types & Data ----------------------------- */

const EXPERIENCES: Experience[] = [
  {
    id: "caterpillar",
    company: "Caterpillar (Data-Mine)",
    role: "Data Science Researcher – GEN AI Team",
    period: "AUG 2025 – Present",
    timelineLabel: "2025 • AI/ML · Data Science",
    bullets: [
      "Build decoder-only time-series models for supply chain metrics.",
      "Production-grade data prep + validation splits; tracked runs + artifacts."
    ],
    tech: ["PyTorch", "Pandas", "Scikit-learn", "W&B"],
    category: "AI/ML"
  },
  {
    id: "purdue-stack",
    company: "Purdue Stack",
    role: "Software Developer",
    period: "JUL 2025 – Present",
    timelineLabel: "2025 • Backend · Matching Engine",
    bullets: [
      "REST APIs for TA assignment optimization with robust auth and rate limits.",
      "Postgres + Prisma schema design; CI/CD with GitHub Actions."
    ],
    tech: ["Node.js", "Express", "Postgres", "Prisma", "Docker"],
    category: "Backend"
  },
  {
    id: "mysphere",
    company: "MySphere",
    role: "Software Developer Intern",
    period: "JUL 2025 – SEP 2025",
    timelineLabel: "2025 • iOS · React Native",
    bullets: [
      "Senior-friendly UI with large tap targets and high-contrast theming.",
      "Simplified flows + reminders to reduce task time for key actions."
    ],
    tech: ["React Native", "Expo", "TypeScript"],
    category: "iOS"
  },
  {
    id: "creative-capital",
    company: "Creative Capital",
    role: "Software Engineer Intern",
    period: "MAR 2025 – AUG 2025",
    timelineLabel: "2025 • Backend · Automation",
    bullets: [
      "Automated content ops and analytics reporting with scheduled jobs.",
      "Cut manual work hours/week via pipeline tooling and dashboards."
    ],
    tech: ["Next.js", "Supabase", "Cron"],
    category: "Backend"
  },
  {
    id: "photonics-lab",
    company: "Integrated Photonics Lab",
    role: "Undergrad Python Researcher",
    period: "JAN 2025 – MAY 2025",
    timelineLabel: "2025 • Research · Photonics",
    bullets: [
      "Waveguide parameter sweeps + FDTD/MATLAB simulations.",
      "Prepared figures and a short talk on mode confinement results."
    ],
    tech: ["MATLAB", "Lumerical/FDTD", "Python"],
    category: "Research"
  }
];

/* ------------------------------- Component ------------------------------ */

export default function Experience() {
  const [activeId, setActiveId] = useState<string>(EXPERIENCES[0].id);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastActiveIndexRef = useRef<number>(0);

  // Set CSS var for nav height so sticky offset is correct
  useEffect(() => {
    const navbar = document.querySelector("nav") as HTMLElement | null;
    const height = navbar?.offsetHeight ?? 72;
    document.documentElement.style.setProperty("--nav-height", `${height}px`);
  }, []);

  /**
   * Scroll handler: find the card whose center is closest
   * to the center of the viewport and mark it active.
   * Wrapped in requestAnimationFrame so it stays smooth.
   */
  useEffect(() => {
    const handleScrollOrResize = () => {
      if (rafRef.current !== null) return;

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;

        const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
        if (!cards.length) return;

        const viewportCenter = window.innerHeight / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, index) => {
          const rect = card.getBoundingClientRect();
          const cardCenter = rect.top + rect.height / 2;
          const distance = Math.abs(cardCenter - viewportCenter);

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        });

        if (closestIndex !== lastActiveIndexRef.current) {
          lastActiveIndexRef.current = closestIndex;
          const exp = EXPERIENCES[closestIndex];
          if (exp) {
            setActiveId(exp.id);
          }
        }
      });
    };

    // Initial call so the dot is correct on load
    handleScrollOrResize();

    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  const handleTimelineClick = (id: string, index: number) => {
    const el = cardRefs.current[index];
    if (!el) return;

    lastActiveIndexRef.current = index;
    setActiveId(id);

    el.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  return (
    <main className={styles.section}>
      <div className={styles.inner}>
        <ExperienceHeader />

        <div className={styles.layout}>
          <ExperienceTimeline
            experiences={EXPERIENCES}
            activeId={activeId}
            onTimelineClick={handleTimelineClick}
          />

          <ExperienceCards
            experiences={EXPERIENCES}
            activeId={activeId}
            cardRefs={cardRefs}
          />
        </div>
      </div>
    </main>
  );
}
