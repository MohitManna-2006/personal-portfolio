import { type Experience } from "./ExperienceCards";
import styles from "./Experience.module.css";

interface ExperienceTimelineProps {
  experiences: Experience[];
  activeId: string;
  onTimelineClick: (id: string, index: number) => void;
}

export default function ExperienceTimeline({
  experiences,
  activeId,
  onTimelineClick,
}: ExperienceTimelineProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarCard}>
        <h2 className={styles.sidebarTitle}>Timeline</h2>
        <p className={styles.sidebarBody}>
          Blending <span>AI/ML</span>, <span>backend systems</span>, and{" "}
          <span>research</span> across student teams and internships.
        </p>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => {
            const isActive = exp.id === activeId;
            return (
              <button
                key={exp.id}
                type="button"
                className={`${styles.timelineItem} ${
                  isActive ? styles.timelineItemActive : ""
                }`}
                onClick={() => onTimelineClick(exp.id, index)}
              >
                <span className={styles.timelineDot} />
                <div className={styles.timelineText}>
                  <span className={styles.timelineCompany}>
                    {exp.company}
                  </span>
                  <span className={styles.timelineMeta}>
                    {exp.timelineLabel}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

