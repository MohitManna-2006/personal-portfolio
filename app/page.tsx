import { ScrollVideoHero } from "@/components/hero/ScrollVideoHero";
import { CurrentlySection } from "@/components/sections/CurrentlySection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { NotesSection } from "@/components/sections/NotesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SideNav, TopNav } from "@/components/ui/SideNav";

export default function Home() {
  return (
    <>
      <TopNav />
      <SideNav />
      <main className="relative z-10">
        <ScrollVideoHero />
        <CurrentlySection />
        <WorkSection />
        <ProjectsSection />
        <ResearchSection />
        <SkillsSection />
        <NotesSection />
        <ContactSection />
      </main>
    </>
  );
}
