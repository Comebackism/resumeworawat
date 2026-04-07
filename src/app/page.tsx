import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      
      {/* Contact Section - Placeholder for now if not created */}
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-8 flex justify-center items-center gap-2 flex-wrap">
            <span>สนใจร่วมงานกับ</span>
            <span className="gradient-text">ผม?</span>
          </h2>
          <p className="text-secondary mb-12 max-w-2xl mx-auto">
            กำลังมองหานักพัฒนาที่พร้อมสร้างสรรค์ผลงานคุณภาพอยู่ใช่ไหม? 
            ส่งข้อความมาคุยกันได้เลยครับ พร้อมเริ่มงานทันที!
          </p>
          <a href="mailto:worawat@example.com" className="btn-primary text-[1.1rem] px-10 py-4 shadow-xl shadow-violet-500/20">
            ส่งอีเมลหาผมเลย 🚀
          </a>
        </div>
      </section>
    </>
  );
}
