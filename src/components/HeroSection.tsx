"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowDown, Code, Link } from "lucide-react";
import { resumeData } from "@/lib/data";

// Stagger animation helpers
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const itemVariants: any = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const floatingBadgeVariants: any = (delay: number) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { delay, duration: 0.5, ease: "backOut" } },
});

export function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        paddingBottom: "4rem",
        background: "var(--gradient-hero)",
      }}
    >
      <div className="container" style={{ width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* LEFT: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: "600px" }}
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} style={{ marginBottom: "1.5rem" }}>
              <span
                className="inline-flex items-center gap-2"
                style={{
                  background: "rgba(124,92,252,0.1)",
                  border: "1px solid rgba(124,92,252,0.25)",
                  borderRadius: "99px",
                  padding: "0.35rem 1rem",
                  fontSize: "0.8rem",
                  color: "var(--accent-light)",
                  fontWeight: 500,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#4ade80",
                    display: "inline-block",
                    boxShadow: "0 0 6px #4ade80",
                  }}
                />
                พร้อมรับงานใหม่ · Open to Work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              สวัสดี, ผม
              <br />
              <span className="gradient-text">{resumeData.name}</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "1.15rem",
                color: "var(--text-secondary)",
                marginBottom: "1rem",
                fontWeight: 500,
              }}
            >
              {resumeData.title}
            </motion.p>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              {resumeData.bio}
            </motion.p>

            {/* Location */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2"
              style={{ color: "var(--text-muted)", fontSize: "0.875rem", marginBottom: "2rem" }}
            >
              <MapPin size={14} />
              <span>{resumeData.location}</span>
            </motion.div>

            {/* CTA Buttons */}
            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 flex-wrap">
              <a href="#contact" className="btn-primary" id="hero-contact-btn">
                <Mail size={16} /> ติดต่อผม
              </a>
              <a href="#projects" className="btn-secondary" id="hero-projects-btn">
                ดูผลงาน <ArrowDown size={16} />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex gap-5" style={{ marginTop: "1rem" }}>
              {[
                { icon: Code, href: "https://github.com/Comebackism", id: "hero-github" },
                { icon: Link, href: "https://www.linkedin.com/in/worawat-boonrueng-407749401/", id: "hero-linkedin" },
                { icon: Mail, href: `mailto:${resumeData.email}`, id: "hero-email" },
              ].map(({ icon: Icon, href, id }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-hover-btn"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--bg-card)",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.color = "var(--accent-light)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Avatar + floating badges */}
          <div
            className="hidden lg:flex"
            style={{ position: "relative", flexShrink: 0 }}
          >
            {/* Avatar circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="animate-float"
              style={{ position: "relative" }}
            >
              {/* Glow ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-8px",
                  borderRadius: "50%",
                  background: "conic-gradient(from 0deg, var(--accent), transparent, var(--accent-light), transparent, var(--accent))",
                  animation: "spin-slow 8s linear infinite",
                  opacity: 0.5,
                }}
              />
              <div
                style={{
                  width: 280,
                  height: 280,
                  borderRadius: "50%",
                  background: "var(--gradient-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem",
                  position: "relative",
                  border: "4px solid var(--bg)",
                  overflow: "hidden",
                }}
              >
                <span style={{ userSelect: "none" }}><img
                  src="/worawat.jpg"
                  alt="Worawat"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
                </span>
              </div>
            </motion.div>

            {/* Floating tech badges */}
            {[
              { label: "3+ ปี", sub: "ประสบการณ์", pos: { top: 0, left: -60 }, delay: 0.6, emoji: "🚀" },
              { label: "50K+", sub: "ผู้ใช้งาน", pos: { top: -20, right: -70 }, delay: 0.7, emoji: "👥" },
              { label: "20+", sub: "โปรเจกต์", pos: { bottom: 20, left: -80 }, delay: 0.8, emoji: "💼" },
              { label: "Next.js", sub: "Main Stack", pos: { bottom: -10, right: -60 }, delay: 0.9, emoji: "⚡" },
            ].map((badge, i) => (
              <motion.div
                key={i}
                variants={floatingBadgeVariants(badge.delay)}
                initial="hidden"
                animate="visible"
                style={{
                  position: "absolute",
                  ...badge.pos,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "14px",
                  padding: "0.6rem 0.9rem",
                  backdropFilter: "blur(12px)",
                  minWidth: "90px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                }}
              >
                <div style={{ fontSize: "1.2rem", marginBottom: "2px" }}>{badge.emoji}</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1 }}>
                  {badge.label}
                </div>
                <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", marginTop: "2px" }}>
                  {badge.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "4rem",
            color: "var(--text-muted)",
            fontSize: "0.75rem",
          }}
        >
          <span>เลื่อนลงเพื่อดูเพิ่มเติม</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
