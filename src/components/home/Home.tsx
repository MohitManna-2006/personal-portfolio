import { useState } from "react";
import resumePdf from "../../assets/resume.pdf";
import Particles from "../Particles";
import ProfileCard from "../ProfileCard";
import profilePic from "../../assets/images/profilePic.png";

export const Home = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);
  
  const handleContactClick = () => {
    window.location.href = 'mailto:mannamohit542@gmail.com';
  };

  return (
    <div className="min-h-screen pt-[72px] flex items-center justify-center relative overflow-hidden bg-[#eef6ff] [background-image:radial-gradient(60%_50%_at_15%_20%,rgba(99,102,241,0.20),transparent_60%),radial-gradient(60%_50%_at_85%_30%,rgba(56,189,248,0.18),transparent_60%),radial-gradient(70%_60%_at_50%_80%,rgba(168,85,247,0.16),transparent_60%)]">
      {/* Particles Background Animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
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
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-30 [background-image:linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(65%_55%_at_55%_40%,black,transparent_70%)]" />

      <div className="max-w-[1200px] w-full px-8 z-[2] relative flex flex-col items-center">
        <div className="mb-12 w-full flex justify-center">
          <span className="text-3xl font-light text-[#4AB3F4] tracking-wide animate-fadeInUp">Hi, I'm</span>
        </div>
        
        {/* ProfileCard */}
        <div 
          className="mb-16 w-full max-w-[500px] mx-auto"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
        >
          <ProfileCard
            name="Mohit Manna"
            title="Computer Engineering + Math @ Purdue University"
            handle="mohitmanna"
            status="Available"
            contactText="Contact Me"
            avatarUrl={profilePic}
            miniAvatarUrl={profilePic}
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={handleContactClick}
            behindGlowEnabled={false}
            behindGlowColor="rgba(74, 179, 244, 0.67)"
            className="w-full"
          />
        </div>
        
        {/* CTAs */}
        <div 
          className="flex justify-start items-center gap-6 w-full max-w-[500px] mx-auto"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}
        >
            <a 
              href="mailto:mannamohit542@gmail.com"  
              className="group relative inline-flex items-center justify-center gap-3 bg-black text-white border-none py-4 px-12 rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 no-underline shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:bg-[#1a1a1a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            >
              <span>Contact Me</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </a>
  
            <button 
              onClick={openResume} 
              className="inline-flex items-center justify-center bg-black text-white border-none py-4 px-12 rounded-lg text-lg font-semibold transition-all duration-300 no-underline cursor-pointer font-inherit shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:bg-[#1a1a1a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[0_4px_16px_rgba(0,0,0,0.2)] ml-auto"
            >
              Resume
            </button>
          </div>
      </div>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div 
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-[1000] p-8 animate-fadeIn"
          onClick={closeResume}
        >
          <div 
            className="relative w-full max-w-[900px] h-[90vh] max-h-[1200px] bg-white rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.3)] overflow-hidden animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 bg-white/90 border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-200 text-[#2c3e50] shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:bg-white hover:scale-110"
              onClick={closeResume}
              aria-label="Close resume"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
