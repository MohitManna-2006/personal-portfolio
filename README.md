# Personal Portfolio — Mohit Manna

A clean, fast React + TypeScript portfolio to showcase projects, experience, and contact info.  
Built with modular components (CSS Modules) and smooth, modern interactions.

> Branches: `main` (stable) · `feature/rubiks-cube` (WIP interactive 3D element)

---

## ✨ Features

- Responsive Navbar with active-section highlighting + smooth scroll
- Sections: **Home**, **About**, **Experience**, **Projects**, **Contact**
- Dark/Light friendly styles (no harsh contrast)
- Animated micro-interactions (hover, fade/slide on scroll)
- Config-driven nav links (`src/components/Nav/links.json`)
- “Experience” timeline component (clean, resume-ready)
- Ready for static hosting (builds to `dist/`)
- Simple to extend (drop-in new components under `src/components/`)

---

## 🧰 Tech Stack

- **React** (TypeScript)
- **Vite** (dev server + build) *(or CRA if you used it—either way commands below work)*
- **CSS Modules** (scoped styles)  
  *(Tailwind can be added later if you want, but not required here.)*

---

## 🚀 Quickstart

```bash
# clone
git clone https://github.com/<your-username>/personal-portfolio.git
cd personal-portfolio

# install
npm install          # or: pnpm install  |  yarn

# dev
npm run dev          # opens on http://localhost:5173 (Vite default)

# production build
npm run build        # outputs to /dist
npm run preview      # serve the production build locally

