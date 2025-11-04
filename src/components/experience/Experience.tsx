import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./Experience.module.css";

/* ----------------------------- Types & Data ----------------------------- */

type Company =
  | "Caterpillar (Data-Mine)"
  | "Purdue Stack"
  | "MySphere"
  | "Creative Capital"
  | "Integrated Photonics Lab";

type Category = "All" | "AI/ML" | "Backend" | "iOS" | "Research";

type Experience = {
  company: Company;
  role: string;
  period: string;         // e.g. "AUG 2025 – Present"
  bullets: string[];
  tech: string[];
  link?: string;
  categories: Exclude<Category, "All">[];
};

const EXPERIENCES: Experience[] = [
  {
    company: "Caterpillar (Data-Mine)",
    role: "Data Science Researcher - GEN AI Team",
    period: "AUG 2025 – Present",
    bullets: [
      "Build decoder-only time-series models for supply chain metrics.",
      "Production-grade data prep + validation splits; tracked runs + artifacts."
    ],
    tech: ["PyTorch", "Pandas", "Scikit-learn", "W&B"],
    link: "https://www.linkedin.com/in/mohit-manna-5b62b5241/",
    categories: ["AI/ML"]
  },
  {
    company: "Purdue Stack",
    role: "Software Developer",
    period: "JUL 2025 – Present",
    bullets: [
      "REST APIs for TA assignment optimization with robust auth and rate limits.",
      "Postgres + Prisma schema design; CI/CD with GitHub Actions."
    ],
    tech: ["Node.js", "Express", "Postgres", "Prisma", "Docker"],
    link: "https://www.linkedin.com/in/mohit-manna-5b62b5241/",
    categories: ["Backend"]
  },
  {
    company: "MySphere",
    role: "Software Developer Intern",
    period: "JUL 2025 – SEP 2025",
    bullets: [
      "Senior-friendly UI with large tap targets and high-contrast theming.",
      "Simplified flows + reminders to reduce task time for key actions."
    ],
    tech: ["React Native", "Expo", "TypeScript"],
    link: "https://www.linkedin.com/in/mohit-manna-5b62b5241/",
    categories: ["iOS"]
  },
  {
    company: "Creative Capital",
    role: "Software Engineer Intern",
    period: "MAR 2025 – AUG 2025",
    bullets: [
      "Automated content ops and analytics reporting with scheduled jobs.",
      "Cut manual work hours/week via pipeline tooling and dashboards."
    ],
    tech: ["Next.js", "Supabase", "Cron"],
    link: "https://www.linkedin.com/in/mohit-manna-5b62b5241/",
    categories: ["Backend"]
  },
  {
    company: "Integrated Photonics Lab",
    role: "Undergrad Python Researcher",
    period: "JAN 2025 - MAY 2025",
    bullets: [
      "Waveguide parameter sweeps + FDTD/MATLAB simulations.",
      "Prepared figures and a short talk on mode confinement results."
    ],
    tech: ["MATLAB", "Lumerical/FDTD", "Python"],
    link: "https://www.linkedin.com/in/mohit-manna-5b62b5241/",
    categories: ["Research"]
  }
];

const CATEGORIES: Category[] = ["All", "AI/ML", "Backend", "iOS", "Research"];

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* -------------------------- Active section hook ------------------------- */
/* robust + flicker-free: picks the intersecting card with the largest ratio */
function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        let best: string | null = null;
        let bestRatio = 0;
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio > bestRatio) {
            best = (e.target as HTMLElement).id;
            bestRatio = e.intersectionRatio;
          }
        }
        if (best && best !== activeId) setActiveId(best);
      },
      {
        root: null,
        /* center bias prevents rapid flips when edges touch */
        rootMargin: "-35% 0px -35% 0px",
        threshold: [0.2, 0.4, 0.6, 0.8]
      }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|")]);

  return activeId;
}

/* ------------------------------- Page ----------------------------------- */
export default function Experience() {
  /* keep --nav-height in sync with the actual nav size */
  useEffect(() => {
    const updateNavVar = () => {
      const navbar = document.querySelector("nav") as HTMLElement | null;
      const height = navbar?.offsetHeight ?? 72;
      document.documentElement.style.setProperty("--nav-height", `${height}px`);
    };
    updateNavVar();
    const t = setTimeout(updateNavVar, 120);
    window.addEventListener("resize", updateNavVar);
    return () => {
      window.removeEventListener("resize", updateNavVar);
      clearTimeout(t);
    };
  }, []);

  const ids = useMemo(() => EXPERIENCES.map((e) => slug(e.company)), []);
  const activeId = useActiveSection(ids);

  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? EXPERIENCES
        : EXPERIENCES.filter((e) => e.categories.includes(activeCategory)),
    [activeCategory]
  );

  /* timeline progress (spring to avoid jitter) */
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.9", "end 0.1"]
  });
  const spring = useSpring(scrollYProgress, { stiffness: 100, damping: 26, mass: 0.6 });
  const scaleY = useTransform(spring, (v) => Math.max(0, Math.min(1, v)));

  return (
    <main className={styles.section}>
      <header className={styles.heading}>
        <h1 className={styles.title}>Experience</h1>
        <p className={styles.subtitle}>A quick reel of what I've built & shipped.</p>
      </header>

      <div className={styles.controlsBar} role="tablist" aria-label="Experience filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`${styles.filterChip} ${activeCategory === cat ? styles.filterChipActive : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div ref={timelineRef} className={styles.timelineContainer}>
        {/* Static rail + animated progress */}
        <div className={styles.timelineLine} aria-hidden="true">
          <motion.div className={styles.timelineProgress} style={{ scaleY }} />
        </div>

        {/* Entries */}
        <div className={styles.timelineItems}>
          {filtered.map((item, index) => {
            const id = slug(item.company);
            const isActive = id === activeId;

            return (
              <div key={item.company} className={styles.timelineEntry}>
                {/* Node on the rail */}
                <div className={styles.timelineNodeWrapper}>
                  <div className={`${styles.nodeDot} ${isActive ? styles.nodeDotActive : ""}`} />
                </div>

                {/* Date pill */}
                <div className={styles.datePill}>
                  <span className={styles.datePillText}>{item.period}</span>
                </div>

                {/* Card */}
                <motion.section
                  id={id}
                  className={styles.timelineItem}
                  initial={reduce ? undefined : { opacity: 0, y: 26 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-18% 0px" }}
                  transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1], delay: reduce ? 0 : index * 0.05 }}
                >
                  <article className={styles.cardOuter}>
                    <div className={styles.card}>
                      <h3 className={styles.company}>{item.company}</h3>
                      <p className={styles.role}>{item.role}</p>
                      <p className={styles.period}>{item.period}</p>

                      <ul className={styles.bullets}>
                        {item.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>

                      <div className={styles.tags}>
                        {item.tech.map((t) => (
                          <span key={t} className={styles.tag}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                </motion.section>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
