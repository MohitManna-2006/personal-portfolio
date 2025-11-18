import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import FlowingMenu from "./FlowingMenu";

type SkillCategory = "Languages" | "Frameworks" | "Databases" | "Tools";

type Skill = {
  name: string;
  category: SkillCategory;
};

const SKILLS: Skill[] = [
  // Languages
  { name: "TypeScript •", category: "Languages" },
  { name: "Python •", category: "Languages" },
  { name: "Java •", category: "Languages" },
  { name: "C •", category: "Languages" },
  { name: "C++ •", category: "Languages" },
  { name: "SQL •", category: "Languages" },

  // Frameworks
  { name: "React •", category: "Frameworks" },
  { name: "Next.js •", category: "Frameworks" },
  { name: "React-Native •", category: "Frameworks" },
  { name: "Node.js •", category: "Frameworks" },
  { name: "Express •", category: "Frameworks" },
  { name: "PyTorch •", category: "Frameworks" },
  { name: "TensorFlow •", category: "Frameworks"},

  // Tools
  { name: "Git •", category: "Tools" },
  { name: "Docker •", category: "Tools" },
  { name: "Jenkins •", category: "Tools"},
  { name: "Linux •", category: "Tools"},

  // Databases
  { name: "PostgreSQL •", category: "Databases" },
  { name: "MongoDB •", category: "Databases" },
  { name: "Supabase •", category: "Databases" },
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
    <div className="pt-[calc(var(--nav-height,72px)+24px)] pb-12 px-[clamp(16px,5vw,48px)] max-md:pt-[calc(var(--nav-height,64px)+16px)] max-md:pb-8 max-sm:pt-[calc(var(--nav-height,64px)+12px)] max-sm:pb-6 max-sm:px-3 font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] text-[#020617] relative">
      {/* Content - transparent, showing global background through */}
      <div className="max-w-[1500px] w-full mx-auto relative px-[clamp(32px,5vw,64px)] max-md:px-6 max-sm:px-4">
        {/* Heading */}
        <motion.div
          className="w-fit mx-auto mb-8 max-md:mb-6 max-sm:mb-4 text-center py-[22px] px-10 max-md:py-4 max-md:px-6 max-sm:py-3 max-sm:px-4 max-sm:max-w-full mt-8 max-md:mt-6 max-sm:mt-4"
          initial={reduce ? {} : { opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-[clamp(2.5rem,2rem+2vw,3.5rem)] max-md:text-[clamp(2rem,1.5rem+2vw,2.5rem)] max-sm:text-[clamp(1.75rem,1.25rem+2vw,2rem)] font-extrabold text-black tracking-wide m-0">Technical Skills</h1>
        </motion.div>

        {/* Flowing Menu strip */}
        <div className="h-[350px] max-md:h-[280px] max-sm:h-[240px] relative mx-auto mt-12 max-md:mt-8 max-sm:mt-6 max-w-[1500px] w-full rounded-3xl max-md:rounded-2xl max-sm:rounded-xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
          <FlowingMenu items={MENU_ITEMS} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
