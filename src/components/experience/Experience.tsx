
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import styles from "./Experience.module.css";

type Company =
  | "Caterpillar"
  | "Purdue Stack"
  | "MySphere"
  | "Creative Capital"
  | "Integrated Photonics Lab";

type Experience = {
  company: Company;
  role: string;
  period: string;
  bullets: string[];
  tech: string[];
  link?: string;
};

const EXPERIENCES: Experience[] = [
  {
    company: "Caterpillar",
    role: "Data Science Researcher - GEN AI Team",
    period: "AUG 2025 – Present",
    bullets: [
      "Build decoder-only time-series models for supply chain metrics.",
      "Production-grade data prep + validation splits; tracked runs + artifacts.",
      "Improved MAPE vs baseline; shipped stakeholder-ready visualizations."
    ],
    tech: ["PyTorch", "Pandas", "Scikit-learn", "W&B"],
    link: "https://www.linkedin.com/in/mohit-manna-5b62b5241/"
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
    link: "https://www.linkedin.com/in/mohit-manna-5b62b5241/"
  },
  {
    company: "MySphere",
    role: "iOS Frontend (React Native)",
    period: "JUL 2025 – SEP 2025",
    bullets: [
      "Senior-friendly UI with large tap targets and high-contrast theming.",
      "Simplified flows + reminders to reduce task time for key actions."
    ],
    tech: ["React Native", "Expo", "TypeScript"],
    link: "https://www.linkedin.com/in/mohit-manna-5b62b5241/"
  },
  {
    company: "Creative Capital",
    role: "Software Intern",
    period: "MAR 2025 – AUG 2025",
    bullets: [
      "Automated content ops and analytics reporting with scheduled jobs.",
      "Cut manual work hours/week via pipeline tooling and dashboards."
    ],
    tech: ["Next.js", "Supabase", "Cron"],
    link: "https://www.linkedin.com/in/mohit-manna-5b62b5241/"
  },
  {
    company: "Integrated Photonics Lab",
    role: "Undergrad Researcher",
    period: "2023",
    bullets: [
      "Waveguide parameter sweeps + FDTD/MATLAB simulations.",
      "Prepared figures and a short talk on mode confinement results."
    ],
    tech: ["MATLAB", "Lumerical/FDTD", "Python"],
    link: "https://www.linkedin.com/in/mohit-manna-5b62b5241/"
  }
];

const ACCENTS: Record<Company, [string, string]> = {
  "Caterpillar": ["#f59e0b", "#eab308"],
  "Purdue Stack": ["#a78bfa", "#8b5cf6"],
  "MySphere": ["#38bdf8", "#06b6d4"],
  "Creative Capital": ["#fb7185", "#f43f5e"],
  "Integrated Photonics Lab": ["#34d399", "#14b8a6"],
};

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* ---------- single observer that picks the section with the highest intersection ---------- */
function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const ratios = new Map<string, number>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = (e.target as HTMLElement).id;
          ratios.set(id, e.isIntersecting ? e.intersectionRatio : 0);
        }
        // choose the id with the highest ratio among currently intersecting
        let best = activeId;
        let bestVal = -1;
        for (const [id, r] of ratios) {
          if (r > bestVal) {
            bestVal = r;
            best = id;
          }
        }
        if (best !== activeId && bestVal > 0) setActiveId(best);
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px", // focus around center of viewport
        threshold: [0.15, 0.35, 0.55, 0.75]
      }
    );

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|")]); // join so deps stay stable while ids remain same

  return { activeId, setActiveId };
}

/* ---------- presentational card ---------- */
function ExperienceCard({ item, index }: { item: Experience; index: number }) {
  const reduce = useReducedMotion();
  const [from, to] = ACCENTS[item.company];
  const id = slug(item.company);

  return (
    <motion.article
      id={id}
      initial={reduce ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.45, delay: reduce ? 0 : index * 0.06, ease: "easeOut" }}
      className={styles.cardOuter}
      style={
        { ["--accent-from" as any]: from, ["--accent-to" as any]: to } as React.CSSProperties
      }
    >
      <div className={styles.card}>
        <header className={styles.cardHeader}>
          <div>
            <h3 className={styles.company}>{item.company}</h3>
            <p className={styles.meta}>
              {item.role} · {item.period}
            </p>
          </div>
          {item.link && (
            <a className={styles.viewLink} href={item.link} target="_blank" rel="noreferrer">
              View
            </a>
          )}
        </header>

        <ul className={styles.bullets}>
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className={styles.tags}>
          {item.tech.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ---------- timeline ---------- */
function ExperienceTimeline() {
  const reduce = useReducedMotion();
  const ids = useMemo(() => EXPERIENCES.map((e) => slug(e.company)), []);
  const { activeId, setActiveId } = useActiveSection(ids);

  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 0.9", "end 0.2"] });
  const rawProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });
  const progress = useTransform(rawProgress, (v) => Math.max(0, Math.min(1, v)));

  const handleChipClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    // respect sticky navbar
    const navHeight =
      parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-height")) || 72;
    const y = window.scrollY + el.getBoundingClientRect().top - (navHeight + 24);
    window.scrollTo({ top: y, behavior: "smooth" });
    setActiveId(id); // optimistic highlight for tap
  };

  return (
    <div className={styles.layout}>
      {/* Sticky rail (desktop) */}
      <div className={styles.rail}>
        <div className={styles.railLine} />
        <motion.div
          style={{ scaleY: reduce ? 0 : progress, transformOrigin: "top", willChange: "transform" }}
          className={styles.progressBar}
        />
        <div className={styles.chips}>
          {EXPERIENCES.map((e) => {
            const id = slug(e.company);
            const [from, to] = ACCENTS[e.company];
            const isActive = id === activeId;
            return (
              <button
                key={e.company}
                onClick={() => handleChipClick(id)}
                className={`${styles.chip} ${isActive ? styles.chipActive : ""}`}
                aria-current={isActive ? "true" : "false"}
                style={
                  isActive
                    ? ({
                        ["--chip-from" as any]: from,
                        ["--chip-to" as any]: to,
                      } as React.CSSProperties)
                    : undefined
                }
              >
                {e.company}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile chip row */}
      <div className={styles.mobileChips}>
        {EXPERIENCES.map((e) => {
          const id = slug(e.company);
          const isActive = id === activeId;
          return (
            <button
              key={e.company}
              onClick={() => handleChipClick(id)}
              className={`${styles.mChip} ${isActive ? styles.mChipActive : ""}`}
              aria-current={isActive ? "true" : "false"}
            >
              {e.company}
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div ref={listRef} className={styles.cards}>
        {EXPERIENCES.map((item, i) => (
          <ExperienceCard key={item.company} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

/* ---------- page ---------- */
export default function Experience() {
  // set --nav-height once and on resize
  useEffect(() => {
    const updateNavHeight = () => {
      const navbar = document.querySelector("nav") as HTMLElement | null;
      const height = navbar?.offsetHeight;
      const width = window.innerWidth;
      let fallback = 72;
      if (width <= 768) fallback = 64;
      else if (width <= 1024) fallback = 68;
      else if (width >= 1280) fallback = 80;
      document.documentElement.style.setProperty("--nav-height", `${height ?? fallback}px`);
    };
    updateNavHeight();
    const t = setTimeout(updateNavHeight, 120);
    window.addEventListener("resize", updateNavHeight);
    return () => {
      window.removeEventListener("resize", updateNavHeight);
      clearTimeout(t);
    };
  }, []);

  return (
    <main className={styles.section}>
      <header className={styles.heading}>
        <h1 className={styles.title}>Experience</h1>
        <p className={styles.subtitle}>A quick reel of what I've built & shipped.</p>
      </header>
      <div className={styles.container}>
        <ExperienceTimeline />
      </div>
    </main>
  );
}
