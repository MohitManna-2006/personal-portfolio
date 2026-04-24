import React from "react";
import Home from "./home/Home";
import Experience from "./experience/Experience";
import Skills from "./skills/Skills";
import Contact from "./Contact";
import Particles from "./Particles";

const Portfolio: React.FC = () => {
  return (
    <div className="relative overflow-x-hidden bg-[#050816] [background-image:radial-gradient(55%_40%_at_18%_8%,rgba(56,189,248,0.18),transparent_65%),radial-gradient(50%_40%_at_84%_14%,rgba(139,92,246,0.22),transparent_70%),radial-gradient(75%_65%_at_50%_92%,rgba(20,184,166,0.16),transparent_70%)]">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-70">
        <Particles
          particleColors={["#67e8f9", "#a78bfa", "#cbd5e1"]}
          particleCount={280}
          particleSpread={9}
          speed={0.06}
          particleBaseSize={88}
          sizeRandomness={0.25}
          moveParticlesOnHover={true}
          particleHoverFactor={4}
          alphaParticles={true}
          disableRotation={false}
          cameraDistance={28}
        />
      </div>

      <div className="fixed inset-0 pointer-events-none z-[1] opacity-35 [background-image:linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent_75%)]" />

      <div className="relative z-[2]">
        <section id="home" className="scroll-mt-[72px]">
          <Home />
        </section>

        <section id="experience" className="scroll-mt-[72px]">
          <Experience />
        </section>

        <section id="skills" className="scroll-mt-[72px]">
          <Skills />
        </section>

        <section id="contact" className="scroll-mt-[72px]">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
