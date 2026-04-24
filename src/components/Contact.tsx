import React from "react";
import AnimatedContent from "./AnimatedContent";
import ContactChannelsCard from "./contact/ContactChannelsCard";
import ContactFormCard from "./contact/ContactFormCard";

const Contact: React.FC = () => {
  return (
    <div className="relative min-h-[70vh] pb-24 pt-[calc(var(--nav-height,72px)+24px)] px-[clamp(16px,5vw,48px)] text-slate-100 max-md:pb-16 max-md:pt-[calc(var(--nav-height,64px)+16px)] max-sm:px-3 max-sm:pb-12 max-sm:pt-[calc(var(--nav-height,64px)+12px)]">
      <div className="relative mx-auto max-w-[1320px] px-4 max-sm:px-2">
        <div className="mb-10 text-center max-md:mb-8">
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
            <h2 className="m-0 mb-3 bg-gradient-to-r from-cyan-200 via-slate-100 to-violet-200 bg-clip-text text-[clamp(2.2rem,2rem+2vw,3.4rem)] font-bold tracking-tight text-transparent">
              Let&apos;s Build Something Great
            </h2>
          </AnimatedContent>
          <p className="mx-auto max-w-2xl text-base text-slate-300 md:text-lg">
            I&apos;m always open to discussing internships, full-time opportunities, and ideas worth shipping.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <ContactChannelsCard />
          <ContactFormCard />
        </div>
      </div>
    </div>
  );
};

export default Contact;
