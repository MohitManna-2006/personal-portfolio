import React from "react";
import Home from "./home/Home";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";
import Contact from "./Contact";
import Particles from "./Particles";

/**
 * Single-page portfolio component that stacks Home, Experience, Skills, and Contact sections vertically.
 * Each section has a unique id for scroll-to-section navigation.
 * scroll-mt-[72px] ensures proper spacing when scrolling to account for fixed navbar.
 * 
 * Global background and particles are rendered here once to avoid seams between sections.
 */
const Portfolio: React.FC = () => {
  return (
    <div className="relative bg-[#eef6ff] [background-image:radial-gradient(60%_50%_at_15%_20%,rgba(99,102,241,0.20),transparent_60%),radial-gradient(60%_50%_at_85%_30%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(70%_60%_at_50%_80%,rgba(168,85,247,0.16),transparent_60%)]">
      {/* Global Particles Background Animation - rendered once for entire page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={['#000000', '#1a1a1a', '#2c2c2c']}
          particleCount={500}
          particleSpread={10}
          speed={0.08}
          particleBaseSize={100}
          sizeRandomness={0.2}
          moveParticlesOnHover={true}
          particleHoverFactor={5}
          alphaParticles={false}
          disableRotation={false}
          cameraDistance={25}
        />
      </div>

      {/* Grid Overlay - Optional, can be removed if too busy */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-30 [background-image:linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(65%_55%_at_55%_40%,black,transparent_70%)]" />

      {/* Sections - all transparent, showing global background through */}
      <div className="relative z-[2]">
        {/* Home Section */}
        <section id="home" className="scroll-mt-[72px]">
          <Home />
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-[72px]">
          <Experience />
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-[72px]">
          <Skills />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-[72px]">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Portfolio;

