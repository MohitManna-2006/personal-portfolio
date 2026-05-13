"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkItem } from "@/components/ui/WorkItem";
import { workItems } from "@/data/work";

export function WorkSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="relative px-6 md:px-12 lg:pr-24 py-24 md:py-36 max-w-[1440px] mx-auto"
    >
      <SectionHeading index="01" eyebrow="Work" title="Selected experience." />

      <ul className="border-t border-[var(--line)]">
        {workItems.map((item, i) => {
          const panelId = `work-panel-${i}`;
          const isOpen = openIndex === i;
          return (
            <WorkItem
              key={item.company + item.role}
              item={item}
              isOpen={isOpen}
              onToggle={() => setOpenIndex(isOpen ? null : i)}
              panelId={panelId}
            />
          );
        })}
      </ul>
    </section>
  );
}
