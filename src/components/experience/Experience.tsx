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
    role: "iOS Frontend (React Native)",
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
    role: "Software Intern",
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
    role: "Undergrad Researcher",
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

const ACCENTS: Record<Company, [string, string]> = {
  "Caterpillar (Data-Mine)": ["#f59e0b", "#eab308"],
  "Purdue Stack": ["#a78bfa", "#8b5cf6"],
  "MySphere": ["#38bdf8", "#06b6d4"],
  "Creative Capital": ["#fb7185", "#f43f5e"],
  "Integrated Photonics Lab": ["#34d399", "#14b8a6"],
};

const CATEGORIES: Category[] = ["All", "AI/ML", "Backend", "iOS", "Research"];

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/* -------------------------- Active section hook ------------------------- */

function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;

    const ratios = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = (e.target as HTMLElement).id;
          ratios.set(id, e.isIntersecting ? e.intersectionRatio : 0);
        }
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
      { rootMargin: "-40% 0px -40% 0px", threshold: [0.2, 0.4, 0.6, 0.8] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join("|")]);

  return { activeId, setActiveId };
}

/* ------------------------------- UI bits -------------------------------- */

function TimelineNode({
  item,
  index,
  isActive,
}: {
  item: Experience;
  index: number;
  isActive: boolean;
}) {
  const reduce = useReducedMotion();
  const [from, to] = ACCENTS[item.company];

  return (
    <motion.div
      className={styles.timelineNode}
      initial={reduce ? undefined : { scale: 0.6, opacity: 0 }}
      whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.35, delay: reduce ? 0 : index * 0.06, ease: "easeOut" }}
      style={
        isActive
          ? ({
              ["--node-from" as any]: from,
              ["--node-to" as any]: to,
            } as React.CSSProperties)
          : undefined
      }
    >
      <div className={`${styles.nodeDot} ${isActive ? styles.nodeDotActive : ""}`} />
    </motion.div>
  );
}

function DatePill({ text }: { text: string }) {
  return (
    <div className={styles.datePill}>
      <span className={styles.datePillText}>{text}</span>
      <span className={styles.dateConnector} />
    </div>
  );
}

function ExperienceCard({
  item,
  index,
  isActive,
}: {
  item: Experience;
  index: number;
  isActive: boolean;
}) {
  const reduce = useReducedMotion();
  const [from, to] = ACCENTS[item.company];
  const id = slug(item.company);

  return (
    <motion.div
      id={id}
      className={`${styles.timelineItem} ${isActive ? styles.cardActive : ""}`}
      initial={reduce ? undefined : { opacity: 0, y: 28 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.5, delay: reduce ? 0 : index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.article
        className={styles.cardOuter}
        whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.25 } }}
        style={
          {
            ["--accent-from" as any]: from,
            ["--accent-to" as any]: to,
          } as React.CSSProperties
        }
      >
        <div className={styles.card}>
          <header className={styles.cardHeader}>
            <div className={styles.cardHeaderText}>
              <h3 className={styles.company}>{item.company}</h3>
              <p className={styles.role}>{item.role}</p>
              <p className={styles.period}>{item.period}</p>
            </div>
            {item.link && (
              <motion.a
                className={styles.viewLink}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Read case study →
              </motion.a>
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
    </motion.div>
  );
}

/* ------------------------------ Timeline -------------------------------- */

function ExperienceTimeline() {
  const reduce = useReducedMotion();
  const ids = useMemo(() => EXPERIENCES.map((e) => slug(e.company)), []);
  const { activeId } = useActiveSection(ids);

  // filters
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return EXPERIENCES;
    return EXPERIENCES.filter((e) => e.categories.includes(activeCategory));
  }, [activeCategory]);

  // progress on the scroll area
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.85", "end 0.15"],
  });
  const rawProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.5 });
  const progress = useTransform(rawProgress, (v) => Math.max(0, Math.min(1, v)));

  return (
    <div
      className={styles.timelineContainer}
      ref={timelineRef}
      data-expanded={expanded ? "true" : "false"}
    >
      {/* Controls */}
      <div className={styles.controlsBar}>
        <div className={styles.filters} role="tablist" aria-label="Experience filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`${styles.filterChip} ${
                activeCategory === cat ? styles.filterChipActive : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <label className={styles.toggleWrap}>
          <input
            type="checkbox"
            checked={expanded}
            onChange={(e) => setExpanded(e.target.checked)}
            aria-label="Expanded cards"
          />
          <span className={styles.switch} />
          <span className={styles.toggleLabel}>Expanded</span>
        </label>
      </div>

      {/* Left progress rail */}
      <div className={styles.progressIndicator}>
        <motion.div
          className={styles.progressFill}
          style={{ scaleY: reduce ? 0 : progress, transformOrigin: "top" }}
        />
      </div>

      {/* Vertical timeline line */}
      <div className={styles.timelineLine}>
        <motion.div
          className={styles.timelineProgress}
          style={{ scaleY: reduce ? 0 : progress, transformOrigin: "top" }}
        />
      </div>

      {/* Cards */}
      <div className={styles.timelineItems}>
        {filtered.map((item, index) => {
          const id = slug(item.company);
          const isActive = id === activeId;
          return (
            <div key={item.company} className={styles.timelineEntry}>
              {/* Node on the rail */}
              <div className={styles.timelineNodeWrapper}>
                <TimelineNode item={item} index={index} isActive={isActive} />
              </div>

              {/* Date pill aligned to rail */}
              <DatePill text={item.period} />

              {/* Card */}
              <ExperienceCard item={item} index={index} isActive={isActive} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* --------------------------------- Page --------------------------------- */

export default function Experience() {
  // set --nav-height once + on resize
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
