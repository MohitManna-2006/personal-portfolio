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
    surfaceLine: "FastAPI LLM triage service cutting diagnosis time by 80%",
    details: [
      "Launched a FastAPI LLM triage service for 42 engineers, running 10K+ analyses and cutting diagnosis time by 80%.",
      "Rate-limited Azure OpenAI calls with Redis across 4 Kubernetes pods, sustaining 35 concurrent analyses within quota.",
      "Ingested webhooks across 32 CI workflows on asyncio, writing Pydantic-validated results to PostgreSQL at p95 under 5s.",
      "Indexed 4,500 past CI failures in pgvector with an HNSW cosine index, pulling the 5 nearest matches in under 5 ms.",
    ],
    technologies: ["FastAPI", "Redis", "PostgreSQL", "Azure OpenAI", "Kubernetes", "Pydantic", "pgvector", "asyncio"],
  },
  {
    company: "Handshake",
    role: "AI Engineer",
    dates: "Jan – Apr 2026",
    surfaceLine: "RLHF pipeline and LLM serving optimization on 8× A100",
    details: [
      "Built an RLHF pipeline for code LLMs, training on 50K+ preferences and improving pass@1 by 18%.",
      "Engineered a sandboxed code-eval harness, scoring 250K+ generations at 7.4x higher throughput.",
      "Optimized LLM serving via vLLM and AWQ, cutting p95 latency by 42% on 8x A100 GPUs.",
    ],
    technologies: ["PyTorch", "RLHF", "vLLM", "AWQ", "LLM serving", "sandboxed eval"],
  },
  {
    company: "Caterpillar",
    role: "Machine Learning Intern",
    dates: "Aug – Dec 2025",
    surfaceLine: "Temporal Fusion Transformer forecasting across 520 SKUs",
    details: [
      "Boosted supply-chain forecast accuracy by 12% with a PyTorch Temporal Fusion Transformer tuned over 60 Optuna trials.",
      "Scaled TorchScript batch inference with Docker and Kubernetes, cutting runtime to 2.85 min across 520 SKUs.",
      "Automated a retraining pipeline on drift alerts, cutting over from a 4-week shadow deploy to 20 Angular dashboards.",
    ],
    technologies: ["PyTorch", "Temporal Fusion Transformer", "Optuna", "TorchScript", "Docker", "Kubernetes", "Angular"],
  },
  {
    company: "Creative Capital — Stealth AI Startup",
    role: "Software Engineer Intern",
    dates: "Jun – Aug 2025",
    surfaceLine: "Stealth AI startup — React/GraphQL dashboard with WebSockets at scale",
    details: [
      "Shipped React dashboard with GraphQL and WebSockets, handling 500+ concurrent connections across 10K data points.",
      "Trained a scikit-learn AI model on 50K+ market records using pandas, reaching 89% backtesting accuracy.",
      "Secured 40+ Express endpoints with JWT authentication and PostgreSQL RLS, validated by 50+ Jest integration tests.",
    ],
    technologies: ["React", "GraphQL", "WebSockets", "scikit-learn", "pandas", "Express", "JWT", "PostgreSQL", "Jest"],
  },
];
