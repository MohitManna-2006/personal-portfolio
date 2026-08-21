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
    title: "PulseKV",
    category: "Concurrent Key-Value Storage Engine in C",
    surfaceLine: "16-thread epoll server sustaining 25K+ req/sec at <5 ms p99",
    metric: "25K+ req/sec · 500 clients · 1M+ keys",
    details: [
      "Sharded mutex-guarded hash buckets on 16-thread epoll server, sustaining 25K+ req/sec across 500 clients at <5 ms p99.",
      "Designed checksummed append-only persistence with batched log replay, cutting restart time 60% across 1M+ keys.",
    ],
    technologies: ["C", "epoll", "Linux", "hash sharding", "append-only persistence", "checksum"],
  },
  {
    title: "Fintrak",
    category: "AI-Powered Finance Tracker",
    surfaceLine: "financial copilot for budget intelligence",
    metric: "$180K+ tracked budget · 200+ users",
    details: [
      "Streamed LLM completions over 90-day histories, powering a financial copilot tracking $180K+ in budgets for 200+ users.",
      "Architected AI cron pipelines detecting spending spikes above 2× 30-day baselines, delivering 600+ daily budget nudges.",
    ],
    technologies: ["TypeScript", "LLM", "PostgreSQL", "cron pipelines", "budget intelligence", "streaming"],
  },
  {
    title: "Photonic Simulation Lab",
    category: "Research Assistant",
    surfaceLine: "automated waveguide simulation at research scale",
    metric: "10K+ designs · 99.7% · 1st/200",
    details: [
      "Accelerated 10,000+ waveguide simulations via Python multiprocessing and HDF5 caching, cutting manual effort by 18%.",
      "Placed 1st among 200 participants at the Purdue Research Symposium for 99.7%-accurate waveguide simulations.",
    ],
    technologies: ["Python", "HDF5", "multiprocessing", "numerical methods", "simulation", "waveguides"],
  },
];
