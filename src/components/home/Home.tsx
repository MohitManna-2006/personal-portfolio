import { useState, useEffect } from "react";
import resumePdf from "../../assets/resume.pdf";
import ProfileCard from "../ProfileCard";
import profilePic from "../../assets/images/profilePic.png";
import AnimatedContent from "../AnimatedContent";

const quickHighlights = ["AI + Full-Stack", "Open to Summer '26 Internships", "Purdue University"];

export const Home = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => {
    setIsResumeOpen(true);
    document.body.classList.add("resume-open");
  };

  const closeResume = () => {
    setIsResumeOpen(false);
    document.body.classList.remove("resume-open");
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("resume-open");
    };
  }, []);

  const handleContactClick = () => {
    window.location.href = "mailto:mannamohit542@gmail.com";
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center pb-8 pt-[88px] max-md:pb-5 max-md:pt-[72px]">
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 max-md:px-4">
        <div className="mb-6 mt-10 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-slate-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200 backdrop-blur-xl">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
          Building meaningful software experiences
        </div>

        <div className="mb-8 w-full text-center max-md:mb-6">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.08}
            threshold={0.2}
            delay={0.3}
          >
            <h1 className="m-0 text-[clamp(2.3rem,2rem+2vw,3.7rem)] font-semibold tracking-tight text-slate-100">
              Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">Mohit Manna</span>{" "}
              <span className="wave-hand-emoji">👋</span>
            </h1>
          </AnimatedContent>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300/90 md:text-lg">
            Computer Engineering student crafting AI-powered and full-stack products with a focus on clean UX and measurable impact.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {quickHighlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200/20 bg-slate-950/50 px-4 py-2 text-xs font-medium text-slate-200 shadow-[0_10px_35px_rgba(8,15,36,0.35)] backdrop-blur"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mb-10 w-full max-w-[1100px]">
          <ProfileCard
            name=""
            title="Computer Engineering @ Purdue"
            subtitle="Aspiring Software Engineer"
            involvement="Involved in: Data Mine | Vertically Integrated Projects | Purdue Stack"
            currently="Enthusiastic about building software solutions."
            handle="mohitmanna"
            status="Available"
            contactText="Contact Me"
            avatarUrl={profilePic}
            miniAvatarUrl={profilePic}
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={handleContactClick}
            behindGlowEnabled={true}
            behindGlowColor="rgba(103, 232, 249, 0.5)"
            className="w-full"
          />
        </div>

        <div className="flex w-full max-w-[1100px] flex-col items-center gap-4">
          <button
            onClick={openResume}
            className="inline-flex items-center justify-center rounded-full border border-cyan-200/40 bg-gradient-to-r from-cyan-300 to-violet-300 px-12 py-4 text-base font-semibold text-slate-950 shadow-[0_16px_45px_rgba(59,130,246,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(139,92,246,0.45)]"
          >
            View Resume
          </button>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MohitManna-2006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-100/25 bg-slate-900/55 text-slate-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-slate-900/85"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mohit542/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-100/25 bg-slate-900/55 text-slate-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-slate-900/85"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:mannamohit542@gmail.com"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-100/25 bg-slate-900/55 text-slate-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-slate-900/85"
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {isResumeOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 p-8 backdrop-blur-sm max-md:p-3" onClick={closeResume}>
          <div
            className="relative h-[90vh] w-full max-w-[960px] overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_28px_60px_rgba(0,0,0,0.45)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-slate-700 transition-transform hover:scale-105"
              onClick={closeResume}
              aria-label="Close resume"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <iframe src={resumePdf} className="h-full w-full border-none" title="Resume" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
