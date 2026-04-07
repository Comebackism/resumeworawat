"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: "easeInOut" },
  }),
};

export function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{ padding: "6rem 0", background: "rgba(124,92,252,0.03)" }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">ประสบการณ์</span>
          <h2 className="section-title" style={{ marginBottom: "3rem" }}>
            เส้นทาง<span className="gradient-text">การทำงาน</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: "3rem" }}>
          {/* Vertical line */}
          <div className="timeline-line" />

          {resumeData.experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              style={{
                display: "flex",
                gap: "1.5rem",
                marginBottom: "2rem",
                position: "relative",
              }}
            >
              {/* Dot */}
              <div
                className="timeline-dot"
                style={{ position: "absolute", left: "-2.1rem", marginTop: "1.5rem" }}
              />

              {/* Card */}
              <div
                className="glass-card"
                style={{ padding: "1.75rem 2rem", flex: 1 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "var(--text-primary)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      className="gradient-text"
                      style={{ fontWeight: 600, fontSize: "0.9rem" }}
                    >
                      {exp.company}
                    </span>
                  </div>
                  <span
                    style={{
                      background: "rgba(124,92,252,0.1)",
                      border: "1px solid rgba(124,92,252,0.2)",
                      borderRadius: "8px",
                      padding: "0.25rem 0.75rem",
                      fontSize: "0.78rem",
                      color: "var(--accent-light)",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    lineHeight: 1.75,
                    marginBottom: "1rem",
                  }}
                >
                  {exp.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
