import React from "react";
import AnimatedContent from "./AnimatedContent";
import ContactChannelsCard from "./contact/ContactChannelsCard";
import ContactFormCard from "./contact/ContactFormCard";

/**
 * Contact section component
 * Two-column layout with contact channels and contact form
 */
const Contact: React.FC = () => {
  return (
    <div className="min-h-[70vh] lg:min-h-[80vh] pt-[calc(var(--nav-height,72px)+24px)] pb-24 px-[clamp(16px,5vw,48px)] max-md:pt-[calc(var(--nav-height,64px)+16px)] max-md:pb-16 max-sm:pt-[calc(var(--nav-height,64px)+12px)] max-sm:pb-12 max-sm:px-3 font-['Inter',-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif] text-[#020617] relative">
      {/* Content - transparent, showing global background through */}
      <div className="max-w-[1400px] mx-auto relative px-4 max-sm:px-3">
        {/* Heading Section */}
        <div className="text-center mb-10 max-md:mb-8 max-sm:mb-6">
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
            <h1 className="text-[clamp(2.5rem,2rem+2vw,3.5rem)] max-md:text-[clamp(2rem,1.5rem+2vw,2.5rem)] max-sm:text-[clamp(1.75rem,1.25rem+2vw,2rem)] font-extrabold text-black tracking-wide m-0 mb-4 max-md:mb-3 max-sm:mb-2">
              Get In Touch
            </h1>
          </AnimatedContent>
          <p className="text-xl md:text-2xl max-md:text-lg max-sm:text-base font-medium text-[rgba(0,0,0,0.7)]">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        {/* Two-Column Layout - side by side on desktop */}
        <div className="mt-10 w-full" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <style>{`
            @media (min-width: 768px) {
              .contact-wrapper {
                flex-direction: row !important;
                display: flex !important;
                justify-content: center !important;
                gap: 32px !important;
              }
              .contact-card-left {
                width: 42% !important;
                max-width: 42% !important;
                flex-shrink: 0 !important;
              }
              .contact-card-right {
                width: 42% !important;
                max-width: 42% !important;
                flex-shrink: 0 !important;
              }
            }
          `}</style>
          <div className="contact-wrapper flex w-full">
            {/* Left: Contact Channels Card */}
            <div className="contact-card-left w-full">
              <ContactChannelsCard />
            </div>

            {/* Right: Contact Form Card */}
            <div className="contact-card-right w-full">
              <ContactFormCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
