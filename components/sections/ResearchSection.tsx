import { SectionHeading } from "@/components/ui/SectionHeading";

const metrics = [
  { value: "10,000+", label: "waveguide designs simulated" },
  { value: "99.7%", label: "simulation accuracy" },
  { value: "18%", label: "manual analysis reduction" },
  { value: "1 / 200", label: "Purdue Research Symposium" },
];

export function ResearchSection() {
  return (
    <section
      id="research"
      className="relative px-6 md:px-12 lg:pr-24 py-24 md:py-36 max-w-[1440px] mx-auto"
    >
      <SectionHeading
        index="03"
        eyebrow="Research"
        title="Photonic Simulation Lab."
      />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          <p className="text-[var(--foreground)]/85 leading-relaxed max-w-md">
            Automated waveguide simulation at research scale — a Python ETL
            pipeline producing high-accuracy numerical results across thousands
            of designs.
          </p>
          <div className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--text-muted)]">
            Purdue · Undergraduate Research
          </div>
        </div>

        <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)]">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-[var(--background)] p-6 md:p-8 flex flex-col gap-2"
            >
              <div className="font-serif text-3xl md:text-4xl tracking-[-0.02em] text-[var(--foreground)]">
                {m.value}
              </div>
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--text-muted)]">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
