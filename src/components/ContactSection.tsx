"use client";

import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiScissors } from "react-icons/fi";
import { resumeData } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="record-section" aria-labelledby="contact-title">
      <div className="contact-stub">
        <div className="tear-line">
          <FiScissors size={12} aria-hidden="true" /> ตัดตรงนี้
        </div>

        <div className="contact-grid">
          <div>
            <h2 className="contact-title" id="contact-title">
              สนใจร่วมงาน
              <br />
              กับผม?
            </h2>
            <p className="contact-copy">
              กำลังมองหานักพัฒนาที่พร้อมลงมือทำและเรียนรู้อยู่ใช่ไหมครับ
              ส่งข้อความมาคุยกันได้เลย — พร้อมเริ่มงานและพร้อมทำให้งานนั้นจบจริง
            </p>
            <div className="contact-actions">
              <a className="btn btn--ink" href={`mailto:${resumeData.email}`}>
                ส่งอีเมลหาผม <FiMail size={15} aria-hidden="true" />
              </a>
              <a
                className="btn btn--outline"
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn <FiArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="request-slip">
            <p className="request-slip-title">Service request</p>
            <div className="request-row">
              <span className="request-key">Email</span>
              <span className="request-val">
                <a className="text-link" href={`mailto:${resumeData.email}`}>
                  {resumeData.email}
                </a>
              </span>
            </div>
            <div className="request-row">
              <span className="request-key">Location</span>
              <span className="request-val">{resumeData.location}</span>
            </div>
            <div className="request-row">
              <span className="request-key">Status</span>
              <span className="request-val">พร้อมเริ่มงาน · Internship / Junior</span>
            </div>
            <div className="request-row">
              <span className="request-key">Links</span>
              <span className="request-val">
                <a
                  className="text-link"
                  href={resumeData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {" · "}
                <a
                  className="text-link"
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="hero-social contact-social">
          <a href={resumeData.github} target="_blank" rel="noopener noreferrer">
            <FiGithub size={13} aria-hidden="true" /> github.com/Comebackism
          </a>
          <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">
            <FiLinkedin size={13} aria-hidden="true" /> worawat-boonrueng
          </a>
        </div>
      </div>

      <div className="book-end">
        <span>End of record · ขอบคุณที่อ่านจนจบ</span>
        <span>05 / 05</span>
      </div>
    </section>
  );
}
