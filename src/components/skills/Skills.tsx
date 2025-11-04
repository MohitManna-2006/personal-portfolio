import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './Skills.module.css';

type SkillCategory = 'All' | 'Languages' | 'Frameworks' | 'Tools' | 'Databases' | 'Cloud';

type Skill = {
  name: string;
  category: Exclude<SkillCategory, 'All'>;
  proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
};

const SKILLS: Skill[] = [
  // Languages
  { name: 'TypeScript', category: 'Languages', proficiency: 'Advanced' },
  { name: 'JavaScript', category: 'Languages', proficiency: 'Advanced' },
  { name: 'Python', category: 'Languages', proficiency: 'Advanced' },
  { name: 'Java', category: 'Languages', proficiency: 'Intermediate' },
  { name: 'C++', category: 'Languages', proficiency: 'Intermediate' },
  { name: 'Swift', category: 'Languages', proficiency: 'Intermediate' },
  { name: 'SQL', category: 'Languages', proficiency: 'Advanced' },
  
  // Frameworks
  { name: 'React', category: 'Frameworks', proficiency: 'Advanced' },
  { name: 'Next.js', category: 'Frameworks', proficiency: 'Advanced' },
  { name: 'React Native', category: 'Frameworks', proficiency: 'Intermediate' },
  { name: 'Node.js', category: 'Frameworks', proficiency: 'Advanced' },
  { name: 'Express', category: 'Frameworks', proficiency: 'Advanced' },
  { name: 'PyTorch', category: 'Frameworks', proficiency: 'Intermediate' },
  { name: 'TensorFlow', category: 'Frameworks', proficiency: 'Intermediate' },
  
  // Tools
  { name: 'Git', category: 'Tools', proficiency: 'Advanced' },
  { name: 'Docker', category: 'Tools', proficiency: 'Intermediate' },
  { name: 'Prisma', category: 'Tools', proficiency: 'Advanced' },
  { name: 'PostgreSQL', category: 'Databases', proficiency: 'Advanced' },
  { name: 'MongoDB', category: 'Databases', proficiency: 'Intermediate' },
  { name: 'Supabase', category: 'Databases', proficiency: 'Advanced' },
  { name: 'AWS', category: 'Cloud', proficiency: 'Intermediate' },
  { name: 'Vercel', category: 'Cloud', proficiency: 'Advanced' },
];

const CATEGORIES: SkillCategory[] = ['All', 'Languages', 'Frameworks', 'Tools', 'Databases', 'Cloud'];

const Skills: React.FC = () => {
  const reduce = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All');

  const filteredSkills = activeCategory === 'All'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeCategory);

  // Group skills by category for display
  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: reduce ? {} : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

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
          <h1 className={styles.title}>Skills & Technologies</h1>
          <p className={styles.subtitle}>Tools and technologies I work with</p>
        </motion.div>

        {/* Filter Chips */}
        <motion.div
          className={styles.controlsBar}
          initial={reduce ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`${styles.filterChip} ${activeCategory === category ? styles.filterChipActive : ''}`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <motion.div
              key={category}
              className={styles.categoryGroup}
              variants={itemVariants as Parameters<typeof motion.div>[0]['variants']}
            >
              <h2 className={styles.categoryTitle}>{category}</h2>
              <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    className={styles.skillCard}
                    variants={itemVariants}
                    whileHover={reduce ? {} : { y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={styles.skillName}>{skill.name}</span>
                    {skill.proficiency && (
                      <span className={styles.proficiency}>
                        {skill.proficiency}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
