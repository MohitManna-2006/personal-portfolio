export type ProjectItem = {
  title: string;
  category: string;
  surfaceLine: string;
  details: string[];
  technologies: string[];
  metric?: string;
  links?: {
    github?: string;
    live?: string;
  };
};

export const projects: ProjectItem[] = [
  {
    title: "AegisFeed",
    category: "High-Performance Market Data Engine in C++20",
    surfaceLine: "Nasdaq ITCH parsing and book reconstruction under packet loss",
    metric: "~5M msgs/sec · 0 mismatches",
    details: [
      "Benchmarked C++20 Nasdaq ITCH parsing and book reconstruction at ~5M msgs/sec.",
      "Stress-tested a bounded 65K-message reorder buffer under injected UDP loss and reordering.",
      "Recovered 1.2M messages under simulated UDP loss with 0 state mismatches against clean replay.",
    ],
    technologies: ["C++20", "Nasdaq ITCH", "UDP", "order books", "reorder buffer", "benchmarking"],
  },
  {
    title: "PulseKV",
    category: "Low-Latency Key-Value Engine in C",
    surfaceLine: "epoll key-value server with durable write-ahead logging",
    metric: "192K reads/sec · 500 clients",
    details: [
      "Benchmarked an epoll-based C key-value server at ~192K reads/sec across 500 TCP clients.",
      "Implemented async WAL group commits and batched crash recovery, cutting 20K-record replay time by ~80%.",
    ],
    technologies: ["C", "epoll", "write-ahead log", "crash recovery", "TCP", "Linux"],
  },
  {
    title: "Sum100",
    category: "Prediction Market Coherence Engine in Rust",
    surfaceLine: "real-time coherence checks across Kalshi order books",
    metric: "80+ contracts · 14K+ events",
    details: [
      "Built a real-time Rust order-book engine across 80+ Kalshi contracts with 4 fee-aware arbitrage checks.",
      "Verified deterministic replay over 14K+ events with zero book-state mismatches and fill-or-kill execution gates.",
    ],
    technologies: ["Rust", "Kalshi", "order books", "arbitrage", "deterministic replay", "market data"],
  },
  {
    title: "Fintrak",
    category: "LLM Powered Personal Finance Copilot",
    surfaceLine: "financial copilot for budget intelligence",
    metric: "$180K+ budget · 200+ users",
    details: [
      "Streamed LLM completions over 90-day histories, powering a financial copilot tracking $180K+ in budgets for 200+ users.",
      "Architected AI cron pipelines detecting spending spikes above 2× 30-day baselines, delivering 600+ daily budget nudges.",
    ],
    technologies: ["TypeScript", "LLM", "PostgreSQL", "cron pipelines", "budget intelligence", "streaming"],
  },
];
