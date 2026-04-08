"use client";

import { motion, Variants } from "framer-motion";
import { resumeData } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export function AboutSection() {
  const stats = [
    { value: "4+", label: "โปรเจกต์" },
    { value: "1K+", label: "ผู้ใช้งาน" },
    { value: "100%", label: "Passion" },
    { value: "∞", label: "ความตั้งใจ" },
  ];

  return (
    <section
      id="about"
      style={{ padding: "6rem 0" }}
    >
      <div className="container">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Section label */}
          <motion.div variants={fadeUp}>
            <span className="section-label">เกี่ยวกับผม</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="section-title" style={{ marginBottom: "3rem" }}>
            ทำไมต้องให้โอกาส<span className="gradient-text">ผม</span>?
          </motion.h2>

          {/* Two-column layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
            className="about-grid"
          >
            {/* Left: bio cards */}
            <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div className="glass-card" style={{ padding: "1.75rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>🌱</div>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "1rem" }}>
                  พร้อมเรียนรู้เสมอ
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  ผมเชื่อว่าการลงมือทำคือครูที่ดีที่สุด ทุกโปรเจกต์คือโอกาสในการเติบโต พร้อมรับ Feedback และปรับปรุงตัวเองตลอดเวลา
                </p>
              </div>
              <div className="glass-card" style={{ padding: "1.75rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>🎨</div>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "1rem" }}>
                  ชอบทำให้สวย & ใช้งานได้จริง
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  ผมไม่ได้แค่เขียนโค้ดให้มันทำงานได้ แต่อยากให้ผลลัพธ์ออกมาสวยงาม ใช้ง่าย และน่าประทับใจ
                </p>
              </div>
              <div className="glass-card" style={{ padding: "1.75rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.75rem" }}>🔥</div>
                <h3 style={{ fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.5rem", fontSize: "1rem" }}>
                  Passion ที่ไม่มีวันหมด
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  ถึงจะยังเป็นเด็กใหม่ แต่ความตั้งใจและความหลงใหลในการเขียนโค้ดของผม 100% เต็มเสมอ
                </p>
              </div>
            </motion.div>

            {/* Right: stats + education + certs */}
            <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Stats grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="glass-card"
                    style={{ padding: "1.25rem", textAlign: "center" }}
                  >
                    <div
                      className="gradient-text"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2rem",
                        fontWeight: 800,
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginTop: "0.375rem" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Education */}
              <div className="glass-card" style={{ padding: "1.75rem" }}>
                <h3
                  style={{
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "1rem",
                    fontSize: "0.875rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase"
                  }}
                >
                  🎓 การศึกษา
                </h3>
                {resumeData.education.map((edu) => (
                  <div key={edu.degree}>
                    <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.95rem" }}>
                      {edu.degree}
                    </div>
                    <div style={{ color: "var(--text-secondary)", fontSize: "0.875rem", marginTop: "0.25rem" }}>
                      {edu.school}
                    </div>
                    <div
                      className="flex items-center gap-3"
                      style={{ marginTop: "0.5rem" }}
                    >
                      <span className="tag">{edu.period}</span>
                      <span className="tag">GPA {edu.gpa}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="glass-card" style={{ padding: "1.75rem" }}>
                <h3
                  style={{
                    fontWeight: 700,
                    marginBottom: "1rem",
                    fontSize: "0.875rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "var(--accent-light)",
                  }}
                >
                  🏆 Certifications
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {resumeData.certifications.map((cert) => (
                    <div
                      key={cert}
                      className="flex items-center gap-2"
                      style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}
                    >
                      <span style={{ color: "var(--accent-light)" }}>✓</span>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
