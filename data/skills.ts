export type SkillGroup = {
  group: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    group: "Languages",
    items: ["C++", "C", "Python", "Rust", "Go", "Java", "SQL", "TypeScript"],
  },
  {
    group: "Frameworks",
    items: ["PyTorch", "FastAPI", "Pydantic", "Node.js", "Express", "React", "GraphQL"],
  },
  {
    group: "Tools",
    items: ["Linux", "Git", "Docker", "Kubernetes", "PostgreSQL", "Redis", "AWS", "Azure", "OpenTelemetry"],
  },
];
