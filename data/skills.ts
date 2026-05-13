export type SkillGroup = {
  group: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    group: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Python",
      "Java",
      "C",
      "C++",
      "C#",
      "SQL",
      "Go",
      "R",
    ],
  },
  {
    group: "Frontend",
    items: [
      "React",
      "Angular",
      "Next.js",
      "Tailwind CSS",
      "component systems",
      "responsive UI",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Flask",
      "Django",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "JWT auth",
    ],
  },
  {
    group: "Data / AI",
    items: [
      "PyTorch",
      "scikit-learn",
      "LLM workflows",
      "forecasting",
      "SQL pipelines",
      "Power BI",
      "OpenAI Whisper",
    ],
  },
  {
    group: "Infrastructure",
    items: [
      "Git",
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Firebase",
      "Jenkins",
      "PostgreSQL",
      "Redis",
      "PyTest",
    ],
  },
];
