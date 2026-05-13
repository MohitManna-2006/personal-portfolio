# CLAUDE.md — Project Instructions for Updated Portfolio

You are building the personal portfolio website for Mohit Manna.

This file is the source of truth for the project’s design, structure, behavior, content philosophy, implementation rules, and development constraints.

Read this file carefully before making changes.

Do not build a generic developer portfolio.
Do not create a default template website.
Do not over-engineer the project.
Do not make this look like every other student portfolio.
Do not turn this into a dark neon cyberpunk site.
Do not dump the resume word-for-word onto the page.

The goal is to build a minimal, premium, interactive, high-aura portfolio that presents Mohit as a technically strong Computer Engineering student and software builder.

---

## 1. Project Identity

This is the new personal portfolio for Mohit Manna.

Identity:

- Name: Mohit Manna
- School: Purdue University
- Major: Computer Engineering
- Positioning: Software systems / applied intelligence / infrastructure
- Brand feeling: minimal, technical, premium, calm, memorable

The portfolio should represent Mohit as someone who builds across:

- software engineering
- systems
- backend infrastructure
- data / AI
- cloud tooling
- computer engineering
- embedded / low-level work
- product-facing engineering

The site should feel like:

> a quiet technical artifact from someone who builds serious systems

It should not feel like:

- a resume dumped into a webpage
- a generic student portfolio
- a neon developer template
- a startup SaaS landing page
- a corporate LinkedIn clone
- an overbuilt Three.js demo
- a basic “about me / projects / contact” template

Core feeling:

> Static at first glance. Alive when touched. Deep when explored.

The site should make recruiters think:

- This person has technical depth.
- This person has taste.
- This person can present engineering work clearly.
- This person builds real systems.
- This person is worth interviewing.

The site should make engineers think:

- The visual metaphor makes sense.
- The interaction is tasteful.
- The content is technically credible.
- The site is not overbuilt.
- The design has restraint.

---

## 2. Creative North Star

The main creative concept is:

> Scroll-driven systems chip teardown

The hero uses a generated video asset showing a futuristic graphite/gold systems chip deconstructing into layers.

This chip is the central metaphor for Mohit’s engineering identity.

Meaning:

- Mohit = the system
- chip layers = the technical stack
- scroll = revealing depth

The chip layers represent:

- interfaces
- backend
- data
- intelligence
- infrastructure
- systems

The video should not feel like a random decorative animation.

It should feel like the site is revealing the structure behind Mohit’s work.

The animation should introduce the portfolio’s structure, not distract from it.

The visual metaphor should help recruiters understand that Mohit is not just a frontend developer or just a student. He builds across layers: UI, backend, data, AI, infrastructure, and systems.

---

## 3. Existing Assets

The project already has assets in the `public` folder.

Expected important assets:

- `public/videos/systems-chip-scroll.mp4`
- `public/resume.pdf`

Use the video file as the hero visual centerpiece.

Use the resume file for resume links/downloads.

Do not rename these assets unless absolutely necessary.

If the asset paths differ, inspect the `public` folder and adapt carefully.

The video should be used as the primary “3D” effect. Do not use heavy 3D libraries in the first version unless absolutely necessary.

---

## 4. Visual Style Direction

Use a warm editorial light theme.

Do not build a dark neon portfolio unless specifically asked later.

The design should feel like:

> quiet luxury × engineering lab × personal archive

Visual ingredients:

- warm off-white background
- huge black serif typography
- graphite/gold chip render
- minimal navigation
- subtle grain texture
- soft shadows
- thin muted dividers
- clean spacing
- muted technical labels
- careful gold accents

Avoid:

- cyberpunk
- gamer RGB
- overdone gradients
- huge glowing blobs
- particle overload
- generic startup landing-page visuals
- random glassmorphism cards everywhere
- heavy 3D scenes
- loud visual effects
- busy background animation

The final visual tone should be:

- minimal
- premium
- calm
- technical
- editorial
- nonchalant
- memorable

The site should feel confident without trying too hard.

---

## 5. Color Palette

Use this color direction unless a later instruction overrides it.

Recommended palette:

- background: `#F5F1E8`
- background alternate: `#F7F3EA`
- text primary: `#111111`
- text secondary: `#5F5A52`
- muted text: `#8C877E`
- line/divider: `#D8D1C3`
- accent gold: `#B9964A`
- accent gold bright: `#C9A646`
- graphite: `#171717`
- soft graphite: `#252525`

Usage rules:

- Use off-white as the main background.
- Use black/near-black for primary text.
- Use muted gray/brown for secondary text.
- Use gold only as a refined accent.
- Do not overuse gold.
- Do not make the page look yellow.
- Do not use bright saturated neon colors.
- Keep the chip video visually connected to the palette.

Gold should appear in:

- small labels
- hover states
- thin accent lines
- metadata
- subtle dividers
- resume/contact links

The palette should feel premium, not flashy.

---

## 6. Typography Direction

The site should use strong editorial typography.

Recommended typography structure:

- large headings: serif/display font
- body text: clean modern sans-serif
- small technical labels: subtle monospace

The main name “Mohit” should be huge, confident, and editorial.

Typography should feel:

- sparse
- refined
- readable
- high-contrast
- personal
- premium

Avoid:

- overly futuristic fonts
- playful fonts
- too many font weights
- all-caps everywhere
- generic template typography
- unreadable display fonts
- excessive letter spacing

If choosing fonts:

- Use a strong serif/display font for headings.
- Use a clean sans-serif for body.
- Use a subtle mono for technical labels if needed.
- Do not sacrifice readability for style.

The typography should feel closer to an editorial portfolio or design archive than a basic software portfolio template.

---

## 7. Homepage Hero

The hero should create curiosity immediately.

It should not over-explain Mohit.

It should feel minimal, confident, and alive.

Required hero copy:

- Primary heading: `Mohit`
- Supporting line: `I build software where systems, data, and people meet.`
- Small metadata:
  - `Computer Engineering @ Purdue`
  - `Software systems / applied intelligence / infrastructure`

Do not use:

- Welcome to my portfolio!
- I am a passionate software engineer...
- Aspiring developer...
- I love solving problems...
- Hi, I’m Mohit and welcome to my website...

Desktop hero layout direction:

- left side:
  - large “Mohit”
  - supporting line
  - small metadata

- right side / center-right:
  - scroll-scrubbed systems chip video

- right edge:
  - minimal vertical navigation

The hero should have generous whitespace.

Do not crowd the text.

Do not crowd the video.

Let the composition breathe.

The hero should feel like:

> I do serious work. Explore if you want.

Not arrogant.

Not overly formal.

Not desperate.

Just sharp and calm.

---

## 8. Scroll Video Hero Behavior

The hero video is the most important interaction.

Use:

- `public/videos/systems-chip-scroll.mp4`

Expected behavior:

- Top of hero scroll range:
  - video `currentTime = 0`
  - chip is assembled

- Middle of hero scroll range:
  - chip begins deconstructing

- End of hero scroll range:
  - video `currentTime = video.duration`
  - chip is exploded/deconstructed

Technical requirements:

- video is muted
- video is `playsInline`
- video does not autoplay normally
- video `currentTime` is controlled by scroll progress
- scrolling down scrubs forward
- scrolling up scrubs backward
- hero section is tall enough for meaningful scrub
- hero content is sticky/pinned during video scrub

Recommended section behavior:

- outer hero animation section height: `250vh` to `350vh`
- sticky inner content height: `100vh`

Scroll mapping:

- scroll progress `0%` -> video `currentTime = 0`
- scroll progress `100%` -> video `currentTime = video.duration`

Important implementation rules:

- Do not update React state on every scroll frame.
- Use refs.
- Use `requestAnimationFrame` for smooth scrubbing.
- Clamp video time safely.
- Preload video metadata.
- Use a poster/static fallback if possible.
- Respect reduced-motion.
- On mobile, simplify if needed.

The scroll should not feel hijacked.

The user should still feel in control.

The video should feel like a premium product interaction, not a random autoplay animation.

---

## 9. Navigation

Desktop navigation should be minimal and placed on the right side.

Suggested nav items:

- Work
- Projects
- Research
- Skills
- Resume
- Contact

Social links:

- GitHub
- LinkedIn
- Email

The nav should be quiet and useful.

Avoid a large traditional top navbar.

Do not make nav visually heavy.

Mobile navigation should be simpler.

Acceptable mobile options:

- compact top-right menu
- simple horizontal nav
- minimal menu button

Do not force the desktop vertical nav onto mobile.

Mobile should prioritize readability and performance.

---

## 10. Site Structure

Build a one-page portfolio first.

Required sections:

- Hero
- Work
- Projects
- Research
- Skills
- Notes
- Contact

Do not create multiple routes unless asked later.

Optional future routes may be added later, but not in v1:

- `/projects/fintrak`
- `/projects/purdue-stack`
- `/projects/bb8`
- `/projects/photonic-simulation`
- `/notes`

For the first build, keep it one page and polished.

---

## 11. Content Philosophy

Do not copy the resume word-for-word into the page.

Translate resume content into clean, curated website content.

Each experience/project should have:

- surface layer:
  - short, product-like one-line summary

- expanded layer:
  - technical proof
  - metrics
  - technologies

Example resume-style content:

> Boosted CAT's supply-chain forecast accuracy by 10% with a multi-horizon decoder model on 1M+ records.

Website surface:

> forecasting supply-chain behavior across 1M+ records

Expanded proof:

- Improved forecast accuracy by 10%
- Built multi-horizon decoder workflow
- Worked across PyTorch, Docker, Kubernetes, SQL, Azure, and Power BI

The site should feel curated, not dumped.

Prioritize clarity, restraint, and strong technical signal.

Content should be minimal on the surface but credible when expanded.

---

## 12. Work Section

The Work section should show credibility without looking like LinkedIn.

Use a minimal list or accordion style.

Avoid bulky generic job cards.

Each role should include:

- company
- role
- dates
- surface line
- expanded details
- technology tags

### IBM

Company: IBM

Role: Software Engineer Intern

Dates: May – Aug 2026

Surface line:

> mainframe network automation on IBM Z NetView

Expanded detail:

- Incoming SDE Intern on IBM Z NetView, IBM’s mainframe network management and automation platform.

Tags:

- systems
- mainframe
- network automation
- infrastructure

### Caterpillar

Company: Caterpillar

Role: Data Science Intern

Dates: Aug 2025 – Apr 2026

Surface line:

> forecasting supply-chain behavior across 1M+ records

Expanded details:

- Boosted supply-chain forecast accuracy by 10% with a multi-horizon decoder model.
- Optimized PyTorch pipeline using Docker and Kubernetes.
- Reduced model latency to 2.85 minutes for 500+ SKUs.
- Automated SQL-backed Power BI pipeline with Azure.
- Supported 20 dashboards processing 100K+ daily records.

Tags:

- PyTorch
- Docker
- Kubernetes
- SQL
- Azure
- Power BI
- forecasting
- data pipelines

### Purdue Stack

Company: Purdue Stack

Role: Software Developer

Dates: Sep – Dec 2025

Surface line:

> optimization infrastructure for TA scheduling constraints

Expanded details:

- Engineered Flask REST API with JWT auth and middleware.
- Supported 10K+ requests/day across 40+ endpoints.
- Implemented PuLP optimization engine handling 500+ constraints and 200+ variables.
- Reached optimal scheduling solutions in around 2 seconds.
- Cached PostgreSQL queries with Redis, reducing TA lookup time to 50ms for 6,000+ assignments.

Tags:

- Flask
- JWT
- REST APIs
- PuLP
- PostgreSQL
- Redis
- optimization
- backend

### Creative Capital

Company: Creative Capital

Role: Software Engineer

Dates: Mar – Aug 2025

Surface line:

> real-time finance dashboards and projection systems

Expanded details:

- Built React dashboard with GraphQL and WebSockets.
- Handled 500+ connections across 10K+ data points.
- Strengthened return projections by 20% with scikit-learn model validated through backtesting.
- Achieved 89% accuracy in return projection workflows.
- Secured 40+ Express endpoints with JWT tokens and Postgres RLS.
- Validated backend behavior with 50+ Jest integration tests.

Tags:

- React
- GraphQL
- WebSockets
- scikit-learn
- Express
- JWT
- PostgreSQL
- Jest
- finance systems

### MySphere

Company: MySphere

Role: Software Developer

Dates: Jun – Aug 2025

Surface line:

> voice-enabled task infrastructure and low-latency feeds

Expanded details:

- Indexed task/profile queries behind Node APIs.
- Reduced around 120ms off task-feed latency for 300+ concurrent users.
- Integrated speech-to-text with OpenAI Whisper.
- Used WebSocket streaming to enable around 35% of tasks through voice.

Tags:

- Node.js
- APIs
- OpenAI Whisper
- WebSockets
- latency
- voice interfaces

---

## 13. Projects Section

Projects should feel like product case studies, not class assignment cards.

Use large clean project rows or minimal curated project cards.

Avoid generic equal-size cards if they make the page feel templated.

Each project should include:

- title
- product-like summary
- impact metric
- technologies
- optional links
- optional expanded proof

### Fintrak — AI-Powered Finance Tracker

Surface line:

> financial copilot for budget intelligence

Expanded details:

- Streamed LLM completions on 90-day financial histories.
- Powered a financial copilot tracking $180K+ budget across 200+ users.
- Architected cron pipeline detecting 2x spending deviations across 30-day baselines.
- Delivered 600+ daily budget nudges.

Tags:

- LLMs
- finance
- cron pipelines
- budget intelligence
- streaming
- automation

### Photonic Simulation Lab — Research Assistant

Surface line:

> automated waveguide simulation at research scale

Expanded details:

- Built automated Python ETL pipeline for simulating 10,000+ waveguide designs.
- Reduced manual analysis time by 18%.
- Won 1st of 200 at Purdue Research Symposium.
- Produced 99.7%-accurate waveguide simulations using numerical methods.

Tags:

- Python
- ETL
- numerical methods
- simulation
- research
- waveguides

### BB-8 Robot — Autonomous Embedded System

Surface line:

> embedded control system for synchronized robotics

Expanded details:

- Wrote firmware code in C++ for microcontrollers.
- Worked with RF tuning and quality checks.
- Extended wireless range by 4 meters.
- Engineered drivetrain sensor control interface with real-time feedback.
- Enabled 40 synchronized robot actions per minute.

Tags:

- C++
- firmware
- microcontrollers
- RF tuning
- sensors
- embedded systems
- robotics

---

## 14. Research Section

Research should have its own section because it gives technical depth and academic credibility.

Main item:

- Photonic Simulation Lab

Design direction:

- thin technical lines
- subtle wave/grid pattern
- sparse text
- one strong metric block
- minimal background variation

Key metrics:

- 10,000+ simulated waveguide designs
- 18% manual analysis reduction
- 99.7% simulation accuracy
- 1st of 200 at Purdue Research Symposium

Keep it elegant.

Do not make it look like a school poster.

Do not over-explain.

Let the numbers and visual restraint speak.

---

## 15. Skills Section

Show technical range without keyword spam.

Do not use:

- progress bars
- huge icon clouds
- random animated badges everywhere
- skill percentages

Use grouped skill clusters with clean typography.

### Languages

- JavaScript
- TypeScript
- HTML
- CSS
- Python
- Java
- C
- C++
- C#
- SQL
- Go
- R

### Frontend

- React
- Angular
- Next.js
- Tailwind CSS
- component systems
- responsive UI

### Backend

- Node.js
- Express.js
- Flask
- Django
- REST APIs
- GraphQL
- WebSockets
- JWT auth

### Data / AI

- PyTorch
- scikit-learn
- LLM workflows
- forecasting
- SQL pipelines
- Power BI
- OpenAI Whisper

### Infrastructure

- Git
- Docker
- Kubernetes
- AWS
- Azure
- Firebase
- Jenkins
- PostgreSQL
- Redis
- PyTest

The section should feel like organized capability, not a checklist.

---

## 16. Notes Section

The Notes section gives the site personality and “aura” without being cringe.

Keep it short and minimal.

Possible title:

- notes

Possible entries:

- systems should feel simple from the outside
- the best products hide the hardest engineering
- constraints are usually the actual problem
- useful software beats clever software
- interfaces are only as good as the systems behind them

Do not write long essays in v1.

This section should feel like small personal principles.

---

## 17. Contact Section

The Contact section should make the next step obvious.

Suggested copy:

> Want the concise version?

Links:

- Resume
- GitHub
- LinkedIn
- Email

Optional line:

> Open to software engineering, systems, infrastructure, and applied AI roles.

No complicated contact form in v1.

A form may be added later, but links are enough.

---

## 18. Resume Handling

Use the resume file in `public`.

Expected path:

- `public/resume.pdf`

Create links to the resume in:

- right-side nav
- contact section
- possibly small hero metadata area

Resume link should open or download cleanly.

The site must make it easy for recruiters to access the resume.

---

## 19. Animation Rules

Animations should feel subtle and expensive.

Use:

- slow fades
- soft blur reveals
- small y-axis movement
- gentle hover states
- minimal parallax
- scroll-scrubbed hero video

Avoid:

- bouncing animations
- dramatic parallax
- scroll hijacking
- massive rotations
- neon effects
- particle overload
- animated text chaos
- constant distracting movement
- loud transitions
- gimmicky cursor trails

Preferred animation style:

- calm
- precise
- minimal
- smooth
- premium

Animations should make the site feel alive, not busy.

---

## 20. Performance Requirements

The portfolio must feel low-latency.

Critical rules:

- Do not make the entire site a heavy Three.js scene.
- Do not use massive 3D models in v1.
- Do not run expensive animation logic through React state every frame.
- Do not block scrolling.
- Do not create layout shifts.
- Do not add unnecessary libraries.
- Do not overuse client components.

Use the video asset as the main 3D-like effect.

The actual page should be mostly normal HTML/CSS with one controlled video interaction.

This keeps the site smooth and recruiter-friendly.

---

## 21. Accessibility Requirements

The site must remain usable without motion.

Respect:

- `prefers-reduced-motion`

If reduced motion is enabled:

- disable aggressive video scrubbing
- show a static poster or stable frame
- keep all content accessible

Other requirements:

- strong color contrast
- keyboard-accessible navigation
- semantic HTML sections
- readable font sizes
- alt text for important images
- no essential information hidden only inside animation
- visible focus states

---

## 22. Responsive Design Requirements

The site must work well on:

- desktop
- laptop
- tablet
- mobile

Desktop can use the full scroll-scrubbed chip experience.

Mobile can simplify.

Mobile recommendations:

- show the chip video or static poster above/below hero text
- avoid complicated pinned scrolling if it feels janky
- use simpler navigation
- keep typography large but not oversized
- preserve the premium editorial feel

The mobile version should not feel like an afterthought.

---

## 23. Implementation Architecture

Suggested file structure:

````text
src/
  app/
    page.tsx
    layout.tsx
    globals.css

  components/
    hero/
      ScrollVideoHero.tsx

    sections/
      WorkSection.tsx
      ProjectsSection.tsx
      ResearchSection.tsx
      SkillsSection.tsx
      NotesSection.tsx
      ContactSection.tsx

    ui/
      SectionHeading.tsx
      MagneticLink.tsx
      WorkItem.tsx
      ProjectItem.tsx
      NavLink.tsx

  data/
    work.ts
    projects.ts
    skills.ts
    notes.ts

## 24. Data Model Suggestions

Keep content data separate from UI components.

This makes the site easier to update and prevents content edits from breaking layout logic.

Create dedicated data files for:

- work experience
- projects
- skills
- notes
- navigation links
- social links if useful

Suggested folder:

```text
src/data/
  work.ts
  projects.ts
  skills.ts
  notes.ts
  links.ts

### Suggested Work Item Structure

Use a structure like this for each work item:

```ts
{
  company: string;
  role: string;
  dates: string;
  surfaceLine: string;
  details: string[];
  technologies: string[];
}
````

Example work item:

```ts
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
    "Supported 20 dashboards processing 100K+ daily records."
  ],
  technologies: [
    "PyTorch",
    "Docker",
    "Kubernetes",
    "SQL",
    "Azure",
    "Power BI",
    "forecasting",
    "data pipelines"
  ]
}
```

The actual implementation should place work data in a dedicated file such as:

```text
src/data/work.ts
```

The UI components should import this data and render it dynamically.

Do not hardcode all work content directly inside section components unless there is a strong reason.

Keep the visible surface text minimal, and place detailed proof in expandable or secondary content.

---

### Suggested Project Item Structure

Use a structure like this for each project:

```ts
{
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
}
```

Example project item:

```ts
{
  title: "Fintrak",
  category: "AI-Powered Finance Tracker",
  surfaceLine: "financial copilot for budget intelligence",
  metric: "$180K+ tracked budget across 200+ users",
  details: [
    "Streamed LLM completions on 90-day financial histories.",
    "Powered a financial copilot tracking $180K+ budget across 200+ users.",
    "Architected cron pipeline detecting 2x spending deviations across 30-day baselines.",
    "Delivered 600+ daily budget nudges."
  ],
  technologies: [
    "LLMs",
    "finance",
    "cron pipelines",
    "budget intelligence",
    "streaming",
    "automation"
  ],
  links: {
    github: "",
    live: ""
  }
}
```

The actual implementation should place project data in a dedicated file such as:

```text
src/data/projects.ts
```

Project cards or rows should render from this data.

Projects should feel like curated product case studies, not school assignment cards.

Avoid generic equal-size project cards if they make the section feel templated.

---

### Suggested Skill Group Structure

Use a structure like this for skill groups:

```ts
{
  group: string;
  items: string[];
}
```

Example skill group:

```ts
{
  group: "Backend",
  items: [
    "Node.js",
    "Express.js",
    "Flask",
    "Django",
    "REST APIs",
    "GraphQL",
    "WebSockets",
    "JWT auth"
  ]
}
```

The actual implementation should place skill data in a dedicated file such as:

```text
src/data/skills.ts
```

Skills should be grouped cleanly.

Do not use progress bars.

Do not use skill percentages.

Do not create a huge icon cloud.

The skills section should feel organized, technical, and restrained.

---

### Suggested Note Item Structure

Use a structure like this for notes:

```ts
{
  text: string;
}
```

Example notes:

```ts
[
  {
    text: 'systems should feel simple from the outside',
  },
  {
    text: 'the best products hide the hardest engineering',
  },
  {
    text: 'constraints are usually the actual problem',
  },
  {
    text: 'useful software beats clever software',
  },
  {
    text: 'interfaces are only as good as the systems behind them',
  },
];
```

The actual implementation should place notes data in a dedicated file such as:

```text
src/data/notes.ts
```

The Notes section should be short, minimal, and personal.

It should add quiet personality without becoming cringe or overly philosophical.

Do not write long essays in version 1.

---

### Suggested Navigation Link Structure

Use a structure like this for navigation links:

```ts
{
  label: string;
  href: string;
}
```

Example navigation links:

```ts
[
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Research',
    href: '#research',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Resume',
    href: '/resume.pdf',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];
```

The actual implementation may place navigation data in:

```text
src/data/links.ts
```

Navigation should remain minimal and quiet.

Desktop navigation should be vertical/right-side if it fits the layout.

Mobile navigation should be simplified.

---

### Suggested Social Link Structure

Use a structure like this for social/contact links:

```ts
{
  label: string;
  href: string;
  external: boolean;
}
```

Example social links:

```ts
[
  {
    label: 'GitHub',
    href: 'https://github.com/MohitManna-2006',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mohit542',
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:mannamohit542@gmail.com',
    external: false,
  },
];
```

Social/contact links should be easy to find but not visually loud.

Use them in the right-side navigation, hero metadata area if appropriate, and final Contact section.

---

## 25. Development Philosophy

Build this iteratively.

Do not try to create the entire perfect website in one pass.

Recommended build order:

1. Set up the base Next.js + Tailwind layout.
2. Create content data files.
3. Build static sections.
4. Build the hero layout without scroll video behavior.
5. Add scroll-scrubbed video behavior.
6. Add responsive behavior.
7. Add subtle animation polish.
8. Add final typography/spacing pass.
9. Optimize performance.
10. Prepare for Vercel deployment.

Most important rules:

- Do not overengineer.
- Do not add unnecessary libraries.
- Do not make it generic.
- Do not make it dark neon by default.
- Do not hide important content behind broken animation.
- Do not let animation hurt readability.
- Do not build every section as the same generic rounded card.
- Do not sacrifice performance for visual effects.
- Do not make the design feel loud or desperate.
- Do not copy resume bullets directly into the visible surface layer.
- Do not use a heavy 3D scene when the video asset already creates the 3D effect.

The correct first version should be clean, simple, and working.

Then polish.

Do not start with complexity.

---

## 26. Initial Build Task

When asked to build, start with:

> Build the first polished version of the portfolio homepage using this instruction file as the source of truth.

The first build should include:

- Next.js App Router
- TypeScript
- Tailwind CSS
- data-driven content files
- hero layout
- scroll-scrubbed systems chip video
- minimal right-side desktop navigation
- simplified mobile navigation
- Work section
- Projects section
- Research section
- Skills section
- Notes section
- Contact section
- resume links
- responsive layout
- reduced-motion fallback

Do not add heavy 3D libraries unless absolutely necessary.

Use the video asset for the 3D effect.

The first implementation should prioritize:

- layout
- typography
- spacing
- scroll video behavior
- clean section structure
- responsive behavior
- readability
- performance

Do not spend the first pass adding unnecessary micro-interactions everywhere.

---

## 27. Initial Implementation Prompt Context

When implementing, follow this exact design direction:

Build the first version of my personal portfolio homepage in this Next.js app.

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- clean component architecture
- data-driven content files

The visual style should be minimal, premium, editorial, and high-aura.

Use:

- warm off-white background
- huge black serif-style typography
- subtle graphite/gold accents
- lots of whitespace
- quiet technical product-render aesthetic
- restrained animation
- clean spacing
- minimal navigation

Do not make a generic dark neon developer portfolio.

The main hero should feature a scroll-scrubbed video located at:

```text
public/videos/systems-chip-scroll.mp4
```

The video shows a futuristic black graphite and gold systems chip deconstructing into layers.

Use it as the centerpiece of the hero.

The video should not autoplay normally.

It should scrub forward as the user scrolls down and reverse as the user scrolls up.

The hero section should be sticky/pinned during the video scrub.

Hero copy:

```text
Mohit
I build software where systems, data, and people meet.
```

Small metadata:

```text
Computer Engineering @ Purdue
Software systems / applied intelligence / infrastructure
```

Desktop navigation:

```text
Work
Projects
Research
Skills
Resume
Contact
```

Create polished sections below:

```text
Work
Projects
Research
Skills
Notes
Contact
```

Use the content and design direction from this CLAUDE.md file as the source of truth.

Keep the first version clean and minimal.

Focus on:

- layout
- typography
- scroll video behavior
- responsiveness
- premium feel
- curated content
- performance

Do not add heavy 3D libraries unless absolutely necessary.

Use the video asset for the 3D effect.

---

## 28. First Actual Prompt To Claude Code

Use this exact prompt when starting development:

```text
Read CLAUDE.md fully before making changes.

Build the first polished version of this personal portfolio homepage using CLAUDE.md as the source of truth.

Use Next.js App Router, TypeScript, Tailwind CSS, clean component architecture, and data-driven content files.

The project already has the hero video and resume in the public folder. Use the systems chip video as the centerpiece of the hero and implement scroll-scrubbed behavior so the video plays forward as the user scrolls down and reverses as the user scrolls up.

Do not make a generic developer portfolio. Do not make it dark neon. Do not add heavy 3D libraries unless absolutely necessary. Use the existing video asset for the 3D effect.

Build:
- hero with huge “Mohit” typography
- supporting line: “I build software where systems, data, and people meet.”
- metadata: “Computer Engineering @ Purdue” and “Software systems / applied intelligence / infrastructure”
- minimal right-side desktop navigation
- responsive mobile navigation
- Work section
- Projects section
- Research section
- Skills section
- Notes section
- Contact section
- resume links
- reduced-motion fallback
- clean responsive layout

Keep the visual style warm off-white, editorial, premium, minimal, and high-aura. Prioritize spacing, typography, smooth scroll-video behavior, and recruiter-friendly readability.
```

---

## 29. Follow-Up Prompt If Scroll Speed Feels Too Fast

Use this if the chip teardown finishes too quickly:

```text
Slow down the scroll-scrubbed video by increasing the hero animation scroll range. Make the scrub feel more deliberate and premium. The chip teardown should take longer as the user scrolls. Keep the hero sticky and smooth.
```

---

## 30. Follow-Up Prompt If Scroll Speed Feels Too Slow

Use this if the hero takes too long:

```text
Tighten the scroll-scrubbed video range slightly so the chip teardown completes sooner, but keep the motion smooth, calm, and premium. Do not make the scroll feel rushed.
```

---

## 31. Follow-Up Prompt If The Video Is Janky

Use this if the video stutters or scroll behavior is rough:

```text
Optimize the scroll-scrubbed video. Avoid React state updates on every scroll frame. Use refs and requestAnimationFrame. Preload metadata, clamp currentTime safely, and make the scrub feel smooth. Add a static fallback for reduced-motion and mobile if needed.
```

---

## 32. Follow-Up Prompt If The Hero Layout Feels Awkward

Use this if the hero spacing/composition is bad:

```text
Rebalance the hero layout. Keep “Mohit” large on the left and the scroll video on the right/center-right. Improve spacing so the design feels intentional, calm, and high-end. Do not crowd the video or text. Preserve the warm off-white editorial style.
```

---

## 33. Follow-Up Prompt If The Site Feels Too Plain

Use this if the first build is functional but boring:

```text
Add subtle premium polish: a very light grain texture, soft section dividers, refined typography spacing, understated hover animations, and small gold accent details. Keep everything minimal and editorial. Do not add loud gradients, neon effects, or generic tech visuals.
```

---

## 34. Follow-Up Prompt If The Site Feels Too Corporate

Use this if it looks too HR/corporate:

```text
Make the site feel less corporate and more like a personal technical artifact. Reduce generic card styling, increase editorial whitespace, use sharper typography hierarchy, and make content feel curated rather than templated.
```

---

## 35. Follow-Up Prompt If The Site Feels Too Flashy

Use this if Claude overdoes animations:

```text
Reduce animation intensity and visual noise. Make the design calmer, more minimal, more editorial, and more premium. Remove unnecessary gradients, excessive motion, generic tech effects, loud transitions, and anything that feels distracting.
```

---

## 36. Follow-Up Prompt If The Site Feels Too Generic

Use this if it looks like a template:

```text
Make the portfolio feel more unique and personal. Lean into the systems chip metaphor, editorial whitespace, sparse copy, and clean technical labels. Avoid standard developer portfolio patterns like generic project cards, skill icon grids, oversized gradient blobs, and repeated rounded cards.
```

---

## 37. Follow-Up Prompt If Mobile Is Bad

Use this if mobile layout breaks:

```text
Improve the mobile layout. On mobile, simplify the scroll video behavior if needed and use a static poster or lighter animation fallback. Ensure the text is readable, spacing is clean, navigation is usable, and the site still feels premium and editorial.
```

---

## 38. Follow-Up Prompt If Content Feels Like A Resume Dump

Use this if Claude pastes too many bullets visibly:

```text
Make the content more curated and minimal. Keep the surface text short and product-like, then place detailed proof in expandable or secondary text. The homepage should not feel like a copied resume. Preserve credibility with metrics, but reduce visible clutter.
```

---

## 39. Follow-Up Prompt If Projects Section Looks Boring

Use this if projects look too generic:

```text
Redesign the Projects section so each project feels like a minimal product case study. Use strong titles, one-line summaries, metrics, and restrained technology tags. Avoid generic equal-size cards if they make the page feel templated.
```

---

## 40. Follow-Up Prompt If Work Section Looks Like LinkedIn

Use this if work section looks too corporate/card-heavy:

```text
Make the Work section feel more editorial and curated. Use a clean list or accordion layout with company names, short meaning lines, and optional details. Avoid bulky job cards and excessive bullet density.
```

---

## 41. Follow-Up Prompt If Typography Feels Weak

Use this if fonts/spacing are bad:

```text
Improve the typography hierarchy. Make “Mohit” feel like a confident editorial display heading. Use clean body text, restrained labels, and better spacing. The site should feel like a premium personal archive, not a generic web template.
```

---

## 42. Follow-Up Prompt If Colors Feel Wrong

Use this if colors are too sterile, yellow, gray, or generic:

```text
Refine the color palette. Use a warm off-white background, near-black primary text, muted brown-gray secondary text, and subtle gold accents. The page should feel warm, premium, and editorial. Do not make it yellow, neon, cold gray, or corporate blue.
```

---

## 43. Follow-Up Prompt If Resume Link Is Missing Or Bad

Use this if resume handling is wrong:

```text
Fix resume handling. The resume file is in the public folder as resume.pdf. Add clear resume links in the navigation and Contact section. The link should open the resume cleanly in a new tab or download naturally. Make it easy for recruiters to find.
```

---

## 44. Quality Checklist

Before considering work complete, verify:

- Does the site look unique within 5 seconds?
- Does the hero feel premium and minimal?
- Does the video scrub smoothly?
- Does the site avoid generic developer portfolio patterns?
- Can recruiters quickly understand Mohit’s experience?
- Can engineers see technical depth?
- Does the content feel curated instead of dumped?
- Is the typography strong?
- Is the spacing clean?
- Does the site work on mobile?
- Does it load fast?
- Does the chip animation feel intentional rather than gimmicky?
- Does the site feel calm instead of noisy?
- Does the portfolio feel memorable?
- Are resume/contact links easy to find?
- Is reduced-motion handled?
- Is the site still usable if the video does not load?
- Is content readable without relying only on animation?

If any answer is no, iterate.

---

## 45. Common Mistakes To Avoid

Do not include:

- Welcome to my portfolio
- Passionate software engineer
- Aspiring developer
- I love solving problems
- Generic tech gradient backgrounds
- Random particles everywhere
- Huge skill icon grid
- Progress bars for skills
- Overly colorful cards
- Too many rounded cards
- Dark neon cyberpunk theme
- Massive spinning 3D object
- Scroll hijacking
- Loud cursor trail
- Slow loading intro animation
- Music or sound effects
- Generic bento grid with no purpose
- Floating icons everywhere
- Overuse of glassmorphism
- Overuse of AI buzzwords
- Overly formal corporate copy
- Excessive resume bullet density
- Same card layout repeated for every section

Do not make the site visually noisy.

Do not make it look like every other student portfolio.

Do not use generic card grids everywhere.

Do not over-explain every resume bullet.

Do not let the video overshadow readability.

---

## 46. Desired Emotional Reaction

Ideal recruiter reaction:

- This is clean.
- This is different.
- This person has real experience.
- This person can present technical work well.
- I want to click around.

Ideal engineer reaction:

- The visual is tasteful.
- The systems metaphor makes sense.
- The details are technically credible.
- The site is not overbuilt.

Ideal personal brand reaction:

- Mohit feels sharp, technical, and intentional.

---

## 47. Final Reminder

This portfolio should feel:

- sharp
- interactive
- minimal
- technical
- premium
- memorable

Not loud.

Not generic.

Not over-explained.

Build with restraint.

The final site should feel like:

> a quiet technical artifact from someone who builds serious systems
