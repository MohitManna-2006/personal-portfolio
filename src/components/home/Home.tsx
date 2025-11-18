import { useState } from "react";
import resumePdf from "../../assets/resume.pdf";
import ProfileCard from "../ProfileCard";
import profilePic from "../../assets/images/profilePic.png";
import AnimatedContent from "../AnimatedContent";

export const Home = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);
  
  const handleContactClick = () => {
    window.location.href = 'mailto:mannamohit542@gmail.com';
  };

  return (
    <div className="min-h-screen pt-[72px] pb-12 flex items-center justify-center relative max-md:pt-[64px] max-md:pb-8">
      {/* Content - transparent, showing global background through */}
      <div className="max-w-[1200px] w-full px-8 max-md:px-4 max-sm:px-2 relative flex flex-col items-center">
        {/* Hero Heading - Combined */}
        <div className="mt-16 mb-8 w-full flex justify-center max-md:mt-12 max-md:mb-6 max-sm:mt-10 max-sm:mb-5">
          <AnimatedContent
            distance={150}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="bounce.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.3}
          >
            <h1 className="text-[clamp(2.5rem,2rem+2vw,3.5rem)] max-md:text-[clamp(2rem,1.5rem+2vw,2.5rem)] max-sm:text-[clamp(1.75rem,1.25rem+2vw,2rem)] font-light tracking-tight m-0 text-black" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontWeight: 300, letterSpacing: '-0.02em' }}>
              Hi, I'm Mohit Manna 👋
            </h1>
          </AnimatedContent>
        </div>
        
        {/* ProfileCard */}
        <div 
          className="mb-10 w-full max-w-[1100px] max-md:max-w-full max-sm:max-w-full mx-auto max-md:mb-8 max-sm:mb-6 max-sm:px-0"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
        >
          <ProfileCard
            name=""
            title="Computer Engineering @ Purdue University"
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
            behindGlowEnabled={false}
            behindGlowColor="rgba(74, 179, 244, 0.67)"
            className="w-full max-sm:w-[calc(100vw-24px)] max-sm:mx-auto"
          />
        </div>
        
        {/* CTAs */}
        <div 
          className="flex flex-col items-center gap-4 w-full max-w-[1100px] mx-auto max-md:px-4 max-sm:gap-3"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}
        >
          {/* Primary CTA */}
          <button 
            onClick={openResume} 
            className="inline-flex items-center justify-center bg-black text-white border-none py-4 px-12 max-md:py-3 max-md:px-10 max-sm:py-2.5 max-sm:px-8 rounded-full text-lg max-md:text-base max-sm:text-sm font-semibold transition-all duration-300 no-underline cursor-pointer font-inherit shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:bg-[#1a1a1a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
          >
            View Resume
          </button>
          
          {/* Secondary CTAs - Social Links */}
          <div className="flex items-center gap-3 max-sm:gap-2">
            <a
              href="https://github.com/MohitManna-2006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 max-sm:w-10 max-sm:h-10 rounded-full border border-black/20 bg-white/10 backdrop-blur-sm text-black transition-all duration-300 hover:bg-white/20 hover:border-black/30 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="max-sm:w-4 max-sm:h-4">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mohit542/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-12 h-12 max-sm:w-10 max-sm:h-10 rounded-full border border-black/20 bg-white/10 backdrop-blur-sm text-black transition-all duration-300 hover:bg-white/20 hover:border-black/30 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="max-sm:w-4 max-sm:h-4">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:mannamohit542@gmail.com"
              className="inline-flex items-center justify-center w-12 h-12 max-sm:w-10 max-sm:h-10 rounded-full border border-black/20 bg-white/10 backdrop-blur-sm text-black transition-all duration-300 hover:bg-white/20 hover:border-black/30 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
              aria-label="Email"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="max-sm:w-4 max-sm:h-4">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div 
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-[1000] p-8 max-md:p-4 max-sm:p-2 animate-fadeIn"
          onClick={closeResume}
        >
          <div 
            className="relative w-full max-w-[900px] h-[90vh] max-h-[1200px] max-md:h-[85vh] max-sm:h-[80vh] bg-white rounded-2xl max-md:rounded-xl shadow-[0_25px_50px_rgba(0,0,0,0.3)] overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 max-md:top-2 max-md:right-2 z-10 bg-white/90 border-none rounded-full w-10 h-10 max-md:w-8 max-md:h-8 flex items-center justify-center cursor-pointer transition-all duration-200 text-[#2c3e50] shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-white hover:scale-110"
              onClick={closeResume}
              aria-label="Close resume"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="max-md:w-5 max-md:h-5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={resumePdf}
              className="w-full h-full border-none"
              title="Resume"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
