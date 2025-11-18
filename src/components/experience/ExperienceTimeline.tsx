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
    <aside className="pl-0 -ml-[350px] mr-[300px] max-md:ml-0 max-md:mr-0">
      <div className="sticky top-[calc(var(--nav-height,72px)+18px)] bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-5 pb-[18px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] max-md:static max-sm:px-4">
        <h2 className="text-[1.05rem] font-bold text-black my-[10px] mx-[100px] flex justify-center">
          Timeline
        </h2>
        <p className="text-[0.9rem] leading-[1.5] text-[rgba(0,0,0,0.75)] mb-3 mt-0">
          Blending <span className="font-semibold">AI/ML</span>, <span className="font-semibold">backend systems</span>, and{" "}
          <span className="font-semibold">research</span> across student teams and internships.
        </p>

        <div className="mt-[10px] pl-[15px] border-l border-[rgba(0,0,0,0.15)]">
          {experiences.map((exp, index) => {
            const isActive = exp.id === activeId;
            return (
              <button
                key={exp.id}
                type="button"
                className={`relative py-[10px] pb-3 text-left border-none outline-none bg-transparent cursor-pointer w-full block text-[rgba(0,0,0,0.7)] transition-[color,transform] duration-[0.18s] ease-in-out hover:translate-x-[3px] ${
                  isActive ? "timeline-active" : ""
                }`}
                onClick={() => onTimelineClick(exp.id, index)}
              >
                <span className={`absolute -left-[21px] top-[15px] w-[11px] h-[11px] rounded-full border-2 transition-[background,transform,box-shadow] duration-[0.18s] ease-in-out ${
                  isActive 
                    ? "bg-gradient-to-br from-[#4ab3f4] via-[#6366f1] to-[#a855f7] scale-[1.08] shadow-[0_0_0_3px_rgba(99,102,241,0.3)] border-[rgba(148,163,184,0.5)]" 
                    : "bg-[rgba(0,0,0,0.1)] border-[rgba(0,0,0,0.2)] shadow-[0_0_0_2px_rgba(0,0,0,0.05)]"
                }`} />
                <div className="flex flex-col gap-[2px] justify-center">
                  <span className="text-[0.9rem] font-semibold border-none outline-none">
                    {exp.company}
                  </span>
                  <span className="text-[0.78rem] text-[rgba(0,0,0,0.55)] border-none outline-none">
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

