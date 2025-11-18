import { type Experience } from "./ExperienceCards";

interface ExperienceTimelineProps {
  experiences: Experience[];
  activeId: string;
  onTimelineClick: (id: string, index: number) => void;
}

export default function ExperienceTimeline({
  experiences,
  activeId,
  onTimelineClick,
}: ExperienceTimelineProps) {
  return (
    <aside className="pl-0 -ml-[320px] mr-[320px] max-md:ml-0 max-md:mr-0">
      <div className="sticky top-[calc(var(--nav-height,72px)+18px)] max-md:top-[calc(var(--nav-height,64px)+12px)] bg-white/[0.12] backdrop-blur-xl rounded-3xl max-md:rounded-2xl max-sm:rounded-xl border border-white/25 p-6 max-md:p-5 max-sm:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.15)] max-md:static">
        <h2 className="text-[1.1rem] max-md:text-base max-sm:text-sm font-bold text-black my-3 max-md:my-2.5 max-sm:my-2 mx-[100px] max-md:mx-0 flex justify-center">
          Timeline
        </h2>
        <p className="text-[0.9rem] max-md:text-[0.85rem] max-sm:text-[0.8rem] leading-[1.55] text-[rgba(0,0,0,0.75)] mb-4 max-md:mb-3 max-sm:mb-2.5 mt-0">
          Blending <span className="font-semibold">AI/ML</span>, <span className="font-semibold">backend systems</span>, and{" "}
          <span className="font-semibold">research</span> across student teams and internships.
        </p>

        <div className="mt-3 pl-4 max-sm:pl-3 relative">
          {/* Gradient timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[rgba(99,102,241,0.4)] via-[rgba(139,92,246,0.3)] to-[rgba(99,102,241,0.2)]"></div>
          {experiences.map((exp, index) => {
            const isActive = exp.id === activeId;
            return (
              <button
                key={exp.id}
                type="button"
                className={`relative py-3 max-sm:py-2.5 pb-3.5 max-sm:pb-3 text-left border-none outline-none bg-transparent cursor-pointer w-full block transition-all duration-300 ease-out hover:translate-x-1.5 ${
                  isActive 
                    ? "text-black" 
                    : "text-[rgba(0,0,0,0.65)] hover:text-[rgba(0,0,0,0.8)]"
                }`}
                onClick={() => onTimelineClick(exp.id, index)}
              >
                {/* Outer ring */}
                <span className={`absolute -left-[18px] top-[18px] max-sm:top-[16px] w-4 h-4 max-sm:w-3.5 max-sm:h-3.5 rounded-full transition-all duration-300 ${
                  isActive 
                    ? "bg-gradient-to-br from-[rgba(99,102,241,0.2)] to-[rgba(139,92,246,0.2)] ring-2 ring-[rgba(99,102,241,0.4)] ring-offset-2 ring-offset-transparent animate-pulse-glow" 
                    : "bg-transparent ring-1 ring-[rgba(0,0,0,0.15)]"
                }`} />
                {/* Inner fill */}
                <span className={`absolute -left-[15px] top-[21px] max-sm:top-[18.5px] w-2.5 h-2.5 max-sm:w-2 max-sm:h-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? "bg-gradient-to-br from-[#6366f1] via-[#7c3aed] to-[#8b5cf6] shadow-[0_0_12px_rgba(99,102,241,0.6)]" 
                    : "bg-[rgba(0,0,0,0.2)]"
                }`} />
                <div className="flex flex-col gap-1 max-sm:gap-0.5 justify-center pl-1">
                  <span className={`text-[0.92rem] max-md:text-[0.87rem] max-sm:text-[0.82rem] font-semibold border-none outline-none transition-colors duration-300 ${
                    isActive ? "text-black font-bold" : ""
                  }`}>
                    {exp.company}
                  </span>
                  <span className="text-[0.78rem] max-md:text-[0.73rem] max-sm:text-[0.7rem] text-[rgba(0,0,0,0.55)] border-none outline-none">
                    {exp.timelineLabel}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

