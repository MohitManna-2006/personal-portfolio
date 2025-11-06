import React, { useEffect, useMemo, useState } from "react";
import styles from "./Experience.module.css";
import ScrollStack, { ScrollStackItem } from "../ReactBits/ScrollStack";

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
  period: string;
  bullets: string[];
  tech: string[];
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
    categories: ["Research"]
  }
];

const CATEGORIES: Category[] = ["All", "AI/ML", "Backend", "iOS", "Research"];

/* ------------------------------- Page ----------------------------------- */

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? EXPERIENCES
        : EXPERIENCES.filter((e) => e.categories.includes(activeCategory)),
    [activeCategory]
  );

  useEffect(() => {
    const navbar = document.querySelector("nav") as HTMLElement | null;
    const height = navbar?.offsetHeight ?? 72;
    document.documentElement.style.setProperty("--nav-height", `${height}px`);
  }, []);

  return (
    <main className={styles.section}>
      {/* ---------- Header ---------- */}
      <header className={styles.heading}>
        <h1 className={styles.title}>Experience</h1>
        <p className={styles.subtitle}>A quick reel of what I've built & shipped.</p>
      </header>

      {/* ---------- Filter Buttons ---------- */}
      <div className={styles.controlsBar}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterChip} ${
              activeCategory === cat ? styles.filterChipActive : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ---------- Scroll Stack Cards ---------- */}
      <ScrollStack
        className={styles.scrollStackWrapper}
        useWindowScroll={true}
        itemDistance={120}
        itemScale={0.05}
        baseScale={0.9}
        blurAmount={1.5}
        stackPosition="30%"
        scaleEndPosition="20%"
        itemStackDistance={45}
      >
        {filtered.map((item, index) => (
          <ScrollStackItem key={index}>
            <article className={styles.scrollCard}>
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
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </main>
  );
}
