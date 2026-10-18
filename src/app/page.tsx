import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { MobileBar, TabRail } from "@/components/SiteNav";

export default function Home() {
  return (
    <>
      <MobileBar />
      <main className="site-shell">
        <div className="book-frame">
          <div className="book-cover">
            <div className="book">
              <HeroSection />
              <ExperienceSection />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
            </div>
          </div>
          <TabRail />
        </div>

        <footer className="site-footer">
          <span>© 2026 Worawat Boonrueng · Service Record</span>
          <span>React 19 · Tailwind CSS v4 · Static build</span>
        </footer>
      </main>
    </>
  );
}
