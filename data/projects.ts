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
    title: "Fintrak",
    category: "AI-Powered Finance Tracker",
    surfaceLine: "financial copilot for budget intelligence",
    metric: "$180K+ tracked budget · 200+ users",
    details: [
      "Streamed LLM completions on 90-day financial histories.",
      "Powered a financial copilot tracking $180K+ budget across 200+ users.",
      "Architected cron pipeline detecting 2x spending deviations across 30-day baselines.",
      "Delivered 600+ daily budget nudges.",
    ],
    technologies: [
      "LLMs",
      "finance",
      "cron pipelines",
      "budget intelligence",
      "streaming",
      "automation",
    ],
  },
  {
    title: "Photonic Simulation Lab",
    category: "Research Assistant",
    surfaceLine: "automated waveguide simulation at research scale",
    metric: "10,000+ designs · 99.7% accuracy",
    details: [
      "Built automated Python ETL pipeline for simulating 10,000+ waveguide designs.",
      "Reduced manual analysis time by 18%.",
      "Won 1st of 200 at Purdue Research Symposium.",
      "Produced 99.7%-accurate waveguide simulations using numerical methods.",
    ],
    technologies: [
      "Python",
      "ETL",
      "numerical methods",
      "simulation",
      "research",
      "waveguides",
    ],
  },
  {
    title: "BB-8 Robot",
    category: "Autonomous Embedded System",
    surfaceLine: "embedded control system for synchronized robotics",
    metric: "40 synchronized actions/min · +4m range",
    details: [
      "Wrote firmware code in C++ for microcontrollers.",
      "Worked with RF tuning and quality checks.",
      "Extended wireless range by 4 meters.",
      "Engineered drivetrain sensor control interface with real-time feedback.",
      "Enabled 40 synchronized robot actions per minute.",
    ],
    technologies: [
      "C++",
      "firmware",
      "microcontrollers",
      "RF tuning",
      "sensors",
      "embedded systems",
      "robotics",
    ],
  },
];
