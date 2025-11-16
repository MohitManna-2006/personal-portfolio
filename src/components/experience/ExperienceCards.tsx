import type { RefObject } from "react";
import styles from "./Experience.module.css";

type Category = "AI/ML" | "Backend" | "iOS" | "Research";

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  timelineLabel: string;
  location?: string;
  bullets: string[];
  tech: string[];
  category: Category;
};

interface ExperienceCardsProps {
  experiences: Experience[];
  activeId: string;
  cardRefs: RefObject<(HTMLElement | null)[]>;
}

export default function ExperienceCards({
  experiences,
  activeId,
  cardRefs,
}: ExperienceCardsProps) {
  return (
    <section className={styles.cardsColumn}>
      {experiences.map((exp, index) => {
        const isActive = exp.id === activeId;
        return (
          <article
            key={exp.id}
            ref={(el) => {
              if (cardRefs.current) {
                cardRefs.current[index] = el;
              }
            }}
            className={`${styles.card} ${
              isActive ? styles.cardActive : ""
            }`}
          >
            <header className={styles.cardHeader}>
              <div>
                <h3 className={styles.company}>{exp.company}</h3>
                <p className={styles.role}>{exp.role}</p>
              </div>
              <p className={styles.period}>{exp.period}</p>
            </header>

            <ul className={styles.bullets}>
              {exp.bullets.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            <div className={styles.footerRow}>
              <span className={styles.categoryPill}>{exp.category}</span>
              <div className={styles.tags}>
                {exp.tech.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}

