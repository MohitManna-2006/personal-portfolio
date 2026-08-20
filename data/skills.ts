export type SkillGroup = {
  group: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "C", "C++", "Java", "SQL", "Go"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Angular"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Pydantic", "FastAPI", "Flask", "GraphQL", "WebSockets", "REST APIs"],
  },
  {
    group: "Data / AI",
    items: ["PyTorch", "scikit-learn", "LLM workflows", "pgvector", "HNSW", "pandas", "Optuna", "TorchScript", "HDF5"],
  },
  {
    group: "Architecture",
    items: ["Git", "Docker", "Kubernetes", "AWS", "Azure", "PostgreSQL", "Redis", "GitHub Actions", "OpenTelemetry", "Linux"],
  },
];
