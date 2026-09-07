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
      "Trained an RLHF pipeline for code LLMs with Hugging Face on 50K samples, improving pass@1 by 18%.",
      "Built a code-eval harness for 250K generated programs using async multiprocessing, increasing throughput by 7.4×.",
      "Optimized AWQ-quantized vLLM inference across 8× A100 GPUs, cutting p95 latency by 42%.",
    ],
    technologies: ["PyTorch", "Hugging Face", "RLHF", "vLLM", "AWQ", "multiprocessing"],
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
    company: "Stealth Startup",
    role: "Founding Engineer",
    dates: "Jun – Aug 2025",
    surfaceLine: "real estate data streaming to 500+ clients",
    details: [
      "Shipped a React dashboard streaming 10K real estate data points over WebSockets to 500+ concurrent connections.",
      "Built API infrastructure over 50K market records, securing 47 Express endpoints with JWT and PostgreSQL RLS.",
    ],
    technologies: ["React", "WebSockets", "Express", "JWT", "PostgreSQL", "real-time"],
  },
];
