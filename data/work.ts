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
    surfaceLine: "mainframe network automation on IBM Z NetView",
    details: [
      "Incoming SDE Intern on IBM Z NetView, IBM's mainframe network management and automation platform.",
    ],
    technologies: ["systems", "mainframe", "network automation", "architecture"],
  },
  {
    company: "Caterpillar",
    role: "Data Science Intern",
    dates: "Aug 2025 – Apr 2026",
    surfaceLine: "forecasting supply-chain behavior across 1M+ records",
    details: [
      "Boosted supply-chain forecast accuracy by 10% with a multi-horizon decoder model.",
      "Optimized PyTorch pipeline using Docker and Kubernetes.",
      "Reduced model latency to 2.85 minutes for 500+ SKUs.",
      "Automated SQL-backed Power BI pipeline with Azure.",
      "Supported 20 dashboards processing 100K+ daily records.",
    ],
    technologies: [
      "PyTorch",
      "Docker",
      "Kubernetes",
      "SQL",
      "Azure",
      "Power BI",
      "forecasting",
      "data pipelines",
    ],
  },
  {
    company: "Purdue Stack",
    role: "Software Developer",
    dates: "Sep – Dec 2025",
    surfaceLine: "optimization architecture for TA scheduling constraints",
    details: [
      "Engineered Flask REST API with JWT auth and middleware.",
      "Supported 10K+ requests/day across 40+ endpoints.",
      "Implemented PuLP optimization engine handling 500+ constraints and 200+ variables.",
      "Reached optimal scheduling solutions in around 2 seconds.",
      "Cached PostgreSQL queries with Redis, reducing TA lookup time to 50ms for 6,000+ assignments.",
    ],
    technologies: [
      "Flask",
      "JWT",
      "REST APIs",
      "PuLP",
      "PostgreSQL",
      "Redis",
      "optimization",
      "backend",
    ],
  },
  {
    company: "Creative Capital",
    role: "Software Engineer",
    dates: "Mar – Aug 2025",
    surfaceLine: "real-time finance dashboards and projection systems",
    details: [
      "Built React dashboard with GraphQL and WebSockets.",
      "Handled 500+ connections across 10K+ data points.",
      "Strengthened return projections by 20% with scikit-learn model validated through backtesting.",
      "Achieved 89% accuracy in return projection workflows.",
      "Secured 40+ Express endpoints with JWT tokens and Postgres RLS.",
      "Validated backend behavior with 50+ Jest integration tests.",
    ],
    technologies: [
      "React",
      "GraphQL",
      "WebSockets",
      "scikit-learn",
      "Express",
      "JWT",
      "PostgreSQL",
      "Jest",
      "finance systems",
    ],
  },
  {
    company: "MySphere",
    role: "Software Developer",
    dates: "Jun – Aug 2025",
    surfaceLine: "voice-enabled task architecture and low-latency feeds",
    details: [
      "Indexed task/profile queries behind Node APIs.",
      "Reduced around 120ms off task-feed latency for 300+ concurrent users.",
      "Integrated speech-to-text with OpenAI Whisper.",
      "Used WebSocket streaming to enable around 35% of tasks through voice.",
    ],
    technologies: [
      "Node.js",
      "APIs",
      "OpenAI Whisper",
      "WebSockets",
      "latency",
      "voice interfaces",
    ],
  },
];
