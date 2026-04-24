import AnimatedContent from "../AnimatedContent";

interface ExperienceHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function ExperienceHeader({
  title = "Experience",
  subtitle = "A quick reel of some of my past work.",
}: ExperienceHeaderProps) {
  return (
    <header className="w-fit mx-auto mb-8 max-md:mb-6 max-sm:mb-4 text-center py-[22px] px-10 max-md:py-4 max-md:px-6 max-sm:py-3 max-sm:px-4 max-sm:max-w-full">
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
        <h1 className="text-[clamp(2.5rem,2rem+2vw,3.5rem)] max-md:text-[clamp(2rem,1.5rem+2vw,2.5rem)] max-sm:text-[clamp(1.75rem,1.25rem+2vw,2rem)] font-extrabold text-black tracking-wide m-0">
          {title}
        </h1>
      </AnimatedContent>
      <p className="mt-[10px] max-md:mt-2 max-sm:mt-1.5 text-xl md:text-2xl max-md:text-lg max-sm:text-base font-medium text-[rgba(0,0,0,0.7)]">
        {subtitle}
      </p>
    </header>
  );
}

