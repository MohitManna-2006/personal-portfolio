import styles from "./Experience.module.css";

interface ExperienceHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function ExperienceHeader({
  title = "Experience",
  subtitle = "A quick reel of some of my past work.",
}: ExperienceHeaderProps) {
  return (
    <header className={styles.heading}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </header>
  );
}

