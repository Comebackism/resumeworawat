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

      <section id="contact" className="py-24 bg-background">
        {/* เพิ่ม flex flex-col items-center justify-center เข้าไปที่กล่องนี้ */}
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">

          <h2 className="section-title mb-8 flex justify-center items-center gap-2 flex-wrap" style={{ marginTop: "1.5rem" }}>
            <span>สนใจร่วมงานกับ</span>
            <span className="gradient-text">ผม?</span>
          </h2>

          {/* ลบ mx-auto ออกได้เลยเพราะ Container แม่จัดให้อยู่ตรงกลางแล้ว */}
          <p className="text-secondary mb-12 max-w-2xl text-center">
            กำลังมองหานักพัฒนาที่พร้อมสร้างสรรค์ผลงานคุณภาพอยู่ใช่ไหม? ส่งข้อความมาคุยกันได้เลยครับ พร้อมเริ่มงานทันที!
          </p>

          <a
            href="mailto:mzamzababatv@gmail.com"
            className="btn-primary text-[1.1rem] px-10 py-4 shadow-xl shadow-violet-500/20" style={{ marginTop: "1.5rem" }} >
            ส่งอีเมลหาผมเลย 🚀
          </a>

        </div>
      </section>
    </>
  );
}
