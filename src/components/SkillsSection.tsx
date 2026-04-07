"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

const categories = ["ทั้งหมด", "Frontend", "Backend", "DevOps", "Design"];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: "easeInOut" },
  }),
};

export function SkillsSection() {
  const [active, setActive] = useState("ทั้งหมด");

  const filtered =
    active === "ทั้งหมด"
      ? resumeData.skills
      : resumeData.skills.filter((s) => s.category === active);

  return (
    <section id="skills" style={{ padding: "4rem 0" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center" }}
        >
          <span className="section-label">ทักษะ</span>
          <h2 className="section-title" style={{ marginBottom: "0.75rem", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "0.5rem" }}>
            <span>สิ่งที่ผม</span><span className="gradient-text">ถนัด</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
            เทคโนโลยีและเครื่องมือที่ใช้งานบ่อยในชีวิตประจำวัน
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem", justifyContent: "center" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`skill-filter-${cat}`}
              onClick={() => setActive(cat)}
              style={{
                padding: "0.5rem 1.125rem",
                borderRadius: "99px",
                border: "1px solid",
                borderColor: active === cat ? "var(--accent)" : "var(--border)",
                background: active === cat ? "rgba(124,92,252,0.15)" : "transparent",
                color: active === cat ? "var(--accent-light)" : "var(--text-secondary)",
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
            marginBottom: "4rem",
          }}
        >
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card"
              style={{ padding: "1.5rem" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.75rem",
                }}
              >
                <span style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "0.95rem" }}>
                  {skill.name}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span className="tag" style={{ fontSize: "0.7rem" }}>{skill.category}</span>
                  <span
                    className="gradient-text"
                    style={{ fontWeight: 700, fontSize: "0.95rem" }}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>
              <div className="skill-bar-bg">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Bubbles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginTop: "2rem", textAlign: "center" }}
        >
          <h3
            style={{
              fontWeight: 700,
              fontSize: "0.9rem",
              color: "var(--text-secondary)",
              marginBottom: "1.5rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Tech Stack ที่ใช้เป็นประจำ
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center" }}>
            {resumeData.techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                id={`tech-${tech.name.toLowerCase()}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.6rem 1.15rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  cursor: "default",
                  transition: "all 0.25s ease",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
