interface ExperienceHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function ExperienceHeader({
  title = "Experience",
  subtitle = "A quick reel of some of my past work.",
}: ExperienceHeaderProps) {
  return (
    <header className="w-fit mx-auto mb-8 text-center py-[22px] px-10 max-sm:max-w-full max-sm:px-6">
      <h1 className="text-[clamp(2.5rem,2rem+2vw,3.5rem)] font-extrabold text-black tracking-wide m-0">
        {title}
      </h1>
      <p className="mt-[10px] text-xl md:text-2xl font-medium text-[rgba(0,0,0,0.7)]">
        {subtitle}
      </p>
    </header>
  );
}

