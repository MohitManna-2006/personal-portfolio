import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./Skills.module.css";
import FlowingMenu from "./FlowingMenu";

type SkillCategory = "Languages" | "Frameworks" | "Databases" | "Tools";

type Skill = {
  name: string;
  category: SkillCategory;
};

const SKILLS: Skill[] = [
  // Languages
  { name: "TypeScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Java", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "SQL", category: "Languages" },

  // Frameworks
  { name: "React", category: "Frameworks" },
  { name: "Next.js", category: "Frameworks" },
  { name: "React-Native", category: "Frameworks" },
  { name: "Node.js", category: "Frameworks" },
  { name: "Express", category: "Frameworks" },
  { name: "PyTorch", category: "Frameworks" },
  { name: "TensorFlow", category: "Frameworks"},

  // Tools
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "Jenkins", category: "Tools"},
  { name: "Linux", category: "Tools"},

  // Databases
  { name: "PostgreSQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },
  { name: "Supabase", category: "Databases" },
];

// items for the Flowing Menu – 4 sections
const MENU_ITEMS = [
  {
    link: "#languages",
    text: "Languages",
    skills: SKILLS.filter(s => s.category === "Languages").map(s => s.name),
  },
  {
    link: "#frameworks",
    text: "Frameworks",
    skills: SKILLS.filter(s => s.category === "Frameworks").map(s => s.name),
  },
  {
    link: "#tools",
    text: "Tools",
    skills: SKILLS.filter(s => s.category === "Tools").map(s => s.name),
  },
  {
    link: "#databases",
    text: "Databases",
    skills: SKILLS.filter(s => s.category === "Databases").map(s => s.name),
  },
];

const Skills: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}
        <motion.div
          className={styles.heading}
          initial={reduce ? {} : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className={styles.title}>Technical Skills</h1>
        </motion.div>

        {/* Flowing Menu strip */}
        <div className={styles.flowingMenuContainer}>
          <FlowingMenu items={MENU_ITEMS} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
