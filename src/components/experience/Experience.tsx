import { useEffect, useRef, useState } from "react";
import ExperienceCards, { type Experience } from "./ExperienceCards";
import ExperienceHeader from "./ExperienceHeader";
import ExperienceTimeline from "./ExperienceTimeline";

/* ----------------------------- Types & Data ----------------------------- */

const EXPERIENCES: Experience[] = [
  {
    id: "caterpillar",
    company: "Caterpillar (Data-Mine)",
    role: "Data Science Researcher – GEN AI Team",
    period: "AUG 2024 – Present",
    timelineLabel: "2025 • AI/ML · Data Science",
    bullets: [
      "Built decoder transformer models to forecast equipment demand, improving accuracy by 15%.",
      "Engineered automated data pipelines in Python & SQL, lowering ML model latency by 10%.",
      "Built Power BI dashboards for CAT KPIs, cutting analyst workload by ~6 hours per week."
    ],
    tech: ["PyTorch", "Pandas", "SQL"],
    category: "AI/ML"
  },
  {
    id: "purdue-stack",
    company: "Purdue Stack",
    role: "Software Developer",
    period: "Jun 2025 – Present",
    timelineLabel: "2025 • Backend · Matching Engine",
    bullets: [
      "Optimized a TA–course matching engine, improving placements across 30 math sections.",
      "Designed REST APIs and a normalized PostgreSQL schema to support ~200 TAs each semester.",
      "Integrated CSV exports and batch notifications for one-click reviews, reducing processing latency by 10%."
    ],
    tech: ["Flask", "React", "Python"],
    category: "Backend"
  },
  {
    id: "mysphere",
    company: "MySphere",
    role: "Software Developer Intern",
    period: "Jun 2025 – Aug 2025",
    timelineLabel: "2025 • iOS · React Native",
    bullets: [
      "Implemented AI speech-to-text prompts with intent routing, boosting task completion for 310 users.",
      "Streamlined Express APIs for profile auth and JWT signing, increasing sign-in success by 1,200+ sessions.",
      "Shipped optimized React Native layouts that reduced taps per task for seniors by 20%."
    ],
    tech: ["React-Native", "Expo", "TypeScript"],
    category: "Full-Stack"
  },
  {
    id: "creative-capital",
    company: "Creative Capital",
    role: "Software Engineer Intern",
    period: "MAR 2025 – AUG 2025",
    timelineLabel: "2025 • Backend · Automation",
    bullets: [
      "Automated investor onboarding with Node + SendGrid workflows, cutting verification time by 25%.",
      "Deployed Supabase APIs with auth and Row-Level Security, reducing query latency by 240 ms.",
      "Delivered an investor dashboard for self-serve updates, reducing preprocessing time by 35%."
    ],
    tech: ["Next.js", "Supabase", "React"],
    category: "Frontend"
  },
  {
    id: "photonics-lab",
    company: "Integrated Photonics Lab",
    role: "Undergrad Python Researcher",
    period: "JAN 2025 – MAY 2025",
    timelineLabel: "2025 • Research · Photonics",
    bullets: [
      "Engineered an automated ETL pipeline for 10,000+ waveguide simulations, reducing analysis time by 18%.",
      "Prepared figures and a short talk on mode-confinement and efficiency results for lab presentations.",
      "Awarded 1st place out of 200 at the Purdue Research Symposium for the waveguide processing framework."
    ],
    tech: ["Python", "Matlab", "PyTorch"],
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

        // If at the top of the page, always use the first card
        if (window.scrollY === 0 || window.scrollY < 100) {
          if (lastActiveIndexRef.current !== 0) {
            lastActiveIndexRef.current = 0;
            setActiveId(EXPERIENCES[0].id);
          }
          return;
        }

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
    <main className="pt-[calc(var(--nav-height,72px)+24px)] pb-12 px-[clamp(16px,5vw,48px)] max-md:pt-[calc(var(--nav-height,72px)+16px)] max-md:pb-8 font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] text-[#020617] relative">
      {/* Content - transparent, showing global background through */}
      <div className="max-w-[1400px] mx-auto relative px-[clamp(32px,6vw,80px)] max-md:px-4">
        <ExperienceHeader />
        <div className="mt-8 grid grid-cols-[320px_minmax(0,1fr)] items-start w-full justify-center gap-12 max-md:grid-cols-1 max-md:gap-8">
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
