import { useState } from "react";
import resumePdf from "../../assets/resume.pdf";
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
    <div className="min-h-screen pt-[72px] pb-12 flex items-center justify-center relative max-md:pt-[64px] max-md:pb-8">
      {/* Content - transparent, showing global background through */}
      <div className="max-w-[1200px] w-full px-8 max-md:px-4 max-sm:px-3 relative flex flex-col items-center">
        <div className="mb-6 w-full flex justify-center max-md:mb-4">
          <span className="text-4xl md:text-5xl max-md:text-3xl max-sm:text-2xl font-extrabold text-black tracking-wide animate-fadeInUp">Hi, I'm</span>
        </div>
        
        {/* ProfileCard */}
        <div 
          className="mb-12 w-full max-w-[1100px] mx-auto max-md:mb-8 max-sm:mb-6"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
        >
          <ProfileCard
            name="Mohit Manna"
            title="Computer Engineering + Math @ Purdue University"
            subtitle="Aspiring Software Engineer"
            involvement="Involved in: Data Mine | Vertically Integrated Projects | Purdue Stack"
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
            className="w-full"
          />
        </div>
        
        {/* CTAs */}
        <div 
          className="flex justify-center items-center w-full max-w-[1100px] mx-auto max-md:px-4"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}
        >
            <button 
              onClick={openResume} 
              className="inline-flex items-center justify-center bg-black text-white border-none py-4 px-12 max-md:py-3 max-md:px-10 max-sm:py-2.5 max-sm:px-8 rounded-lg text-lg max-md:text-base max-sm:text-sm font-semibold transition-all duration-300 no-underline cursor-pointer font-inherit shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:bg-[#1a1a1a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
            >
              Resume
            </button>
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
