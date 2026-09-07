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
    surfaceLine: "zero-allocation Nasdaq feed parser with lossless UDP recovery",
    metric: "8.7M msgs/sec · 42 µs p99",
    details: [
      "Benchmarked 23 Nasdaq message types at 8.7M msgs/sec with zero allocations and bounds-checked parsing.",
      "Stress-tested a bounded 65K-message reorder buffer under injected packet loss without unbounded memory growth.",
      "Recovered 1.2M messages under simulated UDP loss at 42 µs p99, matching clean replay with 0 state mismatches.",
    ],
    technologies: ["C++20", "Nasdaq feeds", "UDP", "zero-allocation", "reorder buffer", "benchmarking"],
  },
  {
    title: "PulseKV",
    category: "Low-Latency Distributed Key-Value Engine in C",
    surfaceLine: "distributed key-value store with Raft-backed sharding",
    metric: "192K req/sec · 5.5 ms p99",
    details: [
      "Load-tested a concurrent C server across 16 epoll workers at 192K req/sec on 500 clients at 5.5 ms p99.",
      "Injected node failures across 256 Raft-backed shards, validating 182K reads with 0 mismatches.",
    ],
    technologies: ["C", "epoll", "Raft", "distributed systems", "sharding", "Linux"],
  },
  {
    title: "Fintrak",
    category: "LLM Powered Personal Finance Copilot",
    surfaceLine: "financial copilot for budget intelligence",
    metric: "$180K+ tracked budget · 200+ users",
    details: [
      "Streamed LLM completions over 90-day histories, powering a financial copilot tracking $180K+ in budgets for 200+ users.",
      "Architected AI cron pipelines detecting spending spikes above 2× 30-day baselines, delivering 600+ daily budget nudges.",
    ],
    technologies: ["TypeScript", "LLM", "PostgreSQL", "cron pipelines", "budget intelligence", "streaming"],
  },
];
