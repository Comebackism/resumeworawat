"use client";

import Image from "next/image";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { resumeData } from "@/lib/data";

export function HeroSection() {
  const [firstName, ...rest] = resumeData.name.split(" ");
  const lastName = rest.join(" ");
  const liveProjects = resumeData.projects;

  return (
    <section id="profile" className="spread hero" aria-labelledby="hero-name">
      <div className="page page--left">
        <div className="record-line">
          <span>Asset record</span>
          <span>No. WB-2026-01</span>
        </div>

        <div className="hero-head">
          <div className="portrait-wrap">
            <figure className="portrait">
              <Image
                src={resumeData.avatar}
                alt={`ภาพถ่ายของ ${resumeData.name}`}
                width={400}
                height={500}
                className="portrait-image"
                priority
              />
            </figure>
            <p className="portrait-caption">Fig. 01 · Portrait</p>
            <span className="stamp portrait-stamp">
              พร้อมเริ่มงาน
              <small>Open to work</small>
            </span>
          </div>

          <div className="hero-id">
            <h1 className="hero-name" id="hero-name">
              <span>{firstName}</span>
              <span>{lastName}</span>
            </h1>
            <p className="hero-name-en">{resumeData.nameEn}</p>
            <p className="hero-role">{resumeData.title}</p>
          </div>
        </div>

        <a className="hero-proof-link" href="#projects">
          <span>
            <strong>3 live systems</strong> · Tee Ob POS / Mjaytea / Worawat Computer
          </span>
          <FiArrowUpRight size={15} aria-hidden="true" />
        </a>

        <dl className="meta-list">
          <div className="meta-row">
            <dt className="meta-key">Location</dt>
            <dd className="meta-val">{resumeData.location}</dd>
          </div>
          <div className="meta-row">
            <dt className="meta-key">Education</dt>
            <dd className="meta-val">เทคโนโลยีสารสนเทศ · มหาวิทยาลัยสงขลานครินทร์</dd>
          </div>
          <div className="meta-row">
            <dt className="meta-key">Status</dt>
            <dd className="meta-val">พร้อมเริ่มงาน · Internship / Junior Developer</dd>
          </div>
        </dl>

        <p className="hero-bio">{resumeData.bio}</p>

        <div className="hero-actions">
          <a className="btn btn--ink" href="#projects">
            ดูบันทึกผลงาน <FiArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a className="btn btn--outline" href="#contact">
            ติดต่อ
          </a>
        </div>

        <div className="hero-social">
          <a href={resumeData.github} target="_blank" rel="noopener noreferrer">
            <FiGithub size={13} aria-hidden="true" /> GitHub
          </a>
          <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">
            <FiLinkedin size={13} aria-hidden="true" /> LinkedIn
          </a>
          <a href={`mailto:${resumeData.email}`}>
            <FiMail size={13} aria-hidden="true" /> Email
          </a>
        </div>

        <div className="hero-foot">
          <span>Service record · since 2025</span>
          <span>01 — 05</span>
        </div>
      </div>

      <div className="page page--right">
        <div className="record-line">
          <span>Service log</span>
          <span>3 live systems</span>
        </div>

        <p className="hero-log-intro">ระบบที่ deploy ใช้งานจริง — กดเพื่อเปิดเดโม</p>

        <div className="log-list">
          {liveProjects.map((project, index) => (
            <a
              key={project.id}
              className="log-row"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`เปิดเดโม ${project.title}`}
            >
              <span className="log-index">{String(index + 1).padStart(2, "0")}</span>
              <span>
                <span className="log-title">{project.title}</span>
                <span className="log-meta">
                  {project.role} · {project.tech.slice(0, 3).join(" / ")}
                </span>
              </span>
              <span className="log-end">
                <span className="log-status">{project.status}</span>
                <FiArrowUpRight className="log-arrow" size={14} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>

        <ul className="hero-notes">
          <li>ลงมือทำจริง — เรียนรู้จากโปรเจกต์ที่ deploy ไม่ใช่แค่ทฤษฎี</li>
          <li>ใช้งานได้จริง — ความสวยต้องมาพร้อมประสบการณ์ที่ลื่นไหล</li>
          <li>พร้อมรับ feedback — ปรับปรุงและเรียนรู้อย่างต่อเนื่อง</li>
        </ul>

        <p className="stack-label hero-stack-label">Daily toolkit</p>
        <div className="stack-grid">
          {resumeData.techStack.slice(0, 10).map((tech) => (
            <span className="stack-tag" key={tech.name}>
              {tech.name}
            </span>
          ))}
        </div>

        <div className="hero-proof">
          <span className="rule-label">Proof, not claims</span>
          <p>ทุกผลงานมี repo และ demo ให้กดตรวจ · POS ใช้งานจริงที่ร้าน · GPA 3.45</p>
        </div>

        <div className="hero-foot">
          <span>Deployed on Vercel</span>
          <span>02 — 05</span>
        </div>
      </div>
    </section>
  );
}
