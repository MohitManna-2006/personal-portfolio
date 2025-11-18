import React from "react";

/**
 * Contact section component
 * Simple section with contact information and email link
 */
const Contact: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:mannamohit542@gmail.com';
  };

  return (
    <div className="min-h-[60vh] max-md:min-h-[50vh] max-sm:min-h-[40vh] pt-[calc(var(--nav-height,72px)+24px)] pb-12 px-[clamp(16px,5vw,48px)] max-md:pt-[calc(var(--nav-height,64px)+16px)] max-md:pb-8 max-sm:pt-[calc(var(--nav-height,64px)+12px)] max-sm:pb-6 max-sm:px-3 font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] text-[#020617] relative flex items-center justify-center">
      {/* Content - transparent, showing global background through */}
      <div className="max-w-[800px] w-full mx-auto relative text-center px-4 max-sm:px-3">
        <h1 className="text-[clamp(2.5rem,2rem+2vw,3.5rem)] max-md:text-[clamp(2rem,1.5rem+2vw,2.5rem)] max-sm:text-[clamp(1.75rem,1.25rem+2vw,2rem)] font-extrabold text-black tracking-wide m-0 mb-6 max-md:mb-4 max-sm:mb-3">
          Get In Touch
        </h1>
        <p className="text-xl md:text-2xl max-md:text-lg max-sm:text-base font-medium text-[rgba(0,0,0,0.7)] mb-8 max-md:mb-6 max-sm:mb-4">
          I'm always open to discussing new opportunities and interesting projects.
        </p>
        <button 
          onClick={handleEmailClick}
          className="inline-flex items-center justify-center bg-black text-white border-none py-4 px-12 max-md:py-3 max-md:px-10 max-sm:py-2.5 max-sm:px-8 rounded-lg text-lg max-md:text-base max-sm:text-sm font-semibold transition-all duration-300 no-underline cursor-pointer font-inherit shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:bg-[#1a1a1a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] active:translate-y-0 active:shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
        >
          Send Email
        </button>
      </div>
    </div>
  );
};

export default Contact;

