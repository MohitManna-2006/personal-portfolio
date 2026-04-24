import AnimatedContent from "../AnimatedContent";

interface ExperienceHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function ExperienceHeader({
  title = "Experience",
  subtitle = "A quick reel of product, research, and engineering work.",
}: ExperienceHeaderProps) {
  return (
    <header className="mx-auto mb-8 w-fit max-w-3xl text-center">
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
        <h2 className="m-0 bg-gradient-to-r from-cyan-200 via-slate-100 to-violet-200 bg-clip-text text-[clamp(2.2rem,2rem+2vw,3.4rem)] font-bold tracking-tight text-transparent">
          {title}
        </h2>
      </AnimatedContent>
      <p className="mt-3 text-base font-medium text-slate-300 md:text-lg">{subtitle}</p>
    </header>
  );
}
