"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectItem } from "@/components/ui/ProjectItem";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative px-6 md:px-12 lg:pr-24 py-24 md:py-36 max-w-[1440px] mx-auto"
    >
      <SectionHeading
        index="02"
        eyebrow="Projects"
        title="Things I've shipped."
      />

      <div className="flex flex-col">
        {projects.map((p, i) => {
          const panelId = `project-panel-${i}`;
          const isOpen = openIndex === i;
          return (
            <ProjectItem
              key={p.title}
              item={p}
              index={i}
              isOpen={isOpen}
              onToggle={() => setOpenIndex(isOpen ? null : i)}
              panelId={panelId}
            />
          );
        })}
      </div>
    </section>
  );
}
