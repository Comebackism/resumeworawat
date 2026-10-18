"use client";

import { FiCheck } from "react-icons/fi";
import { resumeData } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="record-section" aria-labelledby="experience-title">
      <div className="record-head">
        <div className="section-head">
          <h2 className="section-title" id="experience-title">
            ประสบการณ์
          </h2>
          <p className="section-meta">
            Service history
            <br />
            2025 — now
          </p>
        </div>
      </div>

      <div className="spread">
        <div className="page page--left">
          <div className="record-line">
            <span>Service entries</span>
            <span>{String(resumeData.experiences.length).padStart(2, "0")} records</span>
          </div>

          <div className="exp-list">
            {resumeData.experiences.map((experience) => (
              <article className="exp-entry" key={experience.id}>
                <div className="exp-date">{experience.period}</div>
                <div>
                  <h3 className="exp-role">{experience.role}</h3>
                  <span className="exp-org">{experience.company}</span>
                  <p className="exp-desc">{experience.description}</p>
                  <div className="tag-row">
                    {experience.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="page page--right">
          <div className="record-line">
            <span>Training record</span>
            <span>PSU · IT</span>
          </div>

          <div className="training-block">
            <p className="rule-label">Education</p>
            {resumeData.education.map((education) => (
              <div key={education.degree}>
                <h3 className="degree">{education.degree}</h3>
                <span className="exp-org">{education.school}</span>
                <div className="training-meta">
                  <span className="tag">{education.period}</span>
                  <span className="tag">GPA {education.gpa}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="training-block">
            <p className="rule-label">Certifications &amp; notes</p>
            <ul className="check-list">
              {resumeData.certifications.map((certification) => (
                <li key={certification}>
                  <FiCheck size={13} aria-hidden="true" />
                  <span>{certification}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="training-block">
            <p className="rule-label">Working principle</p>
            <p className="exp-desc">
              เริ่มจากปัญหาจริงของคนใช้งาน แล้วเลือกเทคโนโลยีที่ทำให้งานนั้นจบได้
              ไม่ใช่เลือกเพราะเป็นกระแส — ทุกโปรเจกต์จึงต้องมีคนกดใช้ได้จริงเสมอ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
