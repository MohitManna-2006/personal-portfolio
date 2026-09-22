export type WorkItem = {
  company: string;
  role: string;
  dates: string;
  surfaceLine: string;
  details: string[];
  technologies: string[];
};

export const workItems: WorkItem[] = [
  {
    company: "IBM",
    role: "Software Engineer Intern",
    dates: "May – Aug 2026",
    surfaceLine: "Go tooling that cut environment setup time by 90%",
    details: [
      "Built Go tooling used by 42 engineers across 6 OpenShift namespaces, cutting manual setup time by 90%.",
      "Designed a Linux subprocess scheduler for 30 dependency-ordered setup stages with bounded 4-way concurrency.",
      "Hardened 15 Bash workflows with retries and timeouts, eliminating ~5 manual retry steps per setup.",
    ],
    technologies: ["Go", "OpenShift", "Linux", "Bash", "concurrency", "developer tooling"],
  },
  {
    company: "Caterpillar",
    role: "Machine Learning Intern",
    dates: "Aug 2025 – Apr 2026",
    surfaceLine: "multi-horizon forecasting across 1M+ supply-chain records",
    details: [
      "Developed a PyTorch multi-horizon forecasting model on 1M+ supply-chain records, improving accuracy by 12%.",
      "Scaled batched inference across 520 SKUs on Docker and Kubernetes, cutting runtime to 2.85 min.",
      "Automated retraining with 4-week shadow validation and metric gates before rollout to 20 Angular dashboards.",
    ],
    technologies: ["PyTorch", "forecasting", "Docker", "Kubernetes", "Angular", "batched inference"],
  },
  {
    company: "Creative Capital",
    role: "Software Engineer Intern",
    dates: "Jun – Aug 2025",
    surfaceLine: "live market dashboards and an AI property Q&A layer",
    details: [
      "Shipped a React market dashboard with GraphQL, supporting ~500 live connections and 10K+ records.",
      "Built AI property Q&A across 23 tools with Pydantic-validated outputs, serving 10K+ users.",
      "Secured 40+ Express endpoints with JWT auth and Postgres RLS, validated by integration tests.",
    ],
    technologies: ["React", "GraphQL", "Pydantic", "Express", "JWT", "PostgreSQL"],
  },
];
