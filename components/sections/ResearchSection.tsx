import { SectionHeading } from "@/components/ui/SectionHeading";

const metrics = [
  { value: "10,000+", label: "designs simulated" },
  { value: "99.7%", label: "accuracy" },
  { value: "18%", label: "less manual analysis" },
  { value: "1 / 200", label: "Purdue Symposium" },
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

      <div className="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between md:gap-12">
        <p className="text-[var(--foreground)]/85 leading-relaxed max-w-lg">
          Automated waveguide simulation at research scale.
        </p>
        <div className="shrink-0 font-mono text-[10px] tracking-[0.22em] uppercase font-medium text-[var(--text-secondary)]">
          Purdue · Undergraduate Research
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--line)] border border-[var(--line)]">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-[var(--background)] p-6 md:p-7 flex flex-col gap-2"
          >
            <div className="font-serif text-3xl md:text-4xl tracking-[-0.02em] text-[var(--foreground)]">
              {m.value}
            </div>
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase font-medium text-[var(--text-secondary)]">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
