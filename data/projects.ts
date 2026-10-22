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
    metric: "8.7M msgs/sec · 42 µs p99",
    details: [
      "Benchmarked 23 Nasdaq message types at 8.7M msgs/sec with zero allocations and bounds-checked parsing.",
      "Stress-tested a bounded 65K-message reorder buffer under injected packet loss without unbounded memory growth.",
      "Recovered 1.2M messages under simulated UDP loss at 42 µs p99, matching clean replay with 0 state mismatches.",
    ],
    technologies: ["C++20", "Nasdaq ITCH", "UDP", "order books", "reorder buffer", "benchmarking"],
  },
  {
    title: "PulseKV",
    category: "Distributed Key-Value Engine in C",
    surfaceLine: "Raft-backed sharded key-value store on an epoll core",
    metric: "192K req/sec · 5.5 ms p99",
    details: [
      "Load-tested a concurrent C server across 16 epoll workers at 192K req/sec on 500 clients at 5.5 ms p99.",
      "Injected node failures across 256 Raft-backed shards, validating 182K reads with 0 mismatches.",
    ],
    technologies: ["C", "epoll", "Raft", "sharding", "fault injection", "Linux"],
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
    title: "MarketTwin",
    category: "Agent-Based Quantitative Market Simulator",
    surfaceLine: "a simulated market for stress-testing autonomous strategies",
    metric: "300K+ events · 360 ms",
    details: [
      "Built a C++20 market simulator processing 300K+ market events in 360 ms across 5 autonomous trading strategies.",
      "Developed a React/FastAPI research terminal supporting 400-run experiments, P&L analytics, and deterministic replay.",
    ],
    technologies: ["C++20", "React", "FastAPI", "agent-based simulation", "P&L analytics", "deterministic replay"],
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
