"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { FiCode, FiExternalLink } from "react-icons/fi";
import { resumeData } from "@/lib/data";

const projects = resumeData.projects;

export function ProjectsSection() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const project = projects[active];

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const last = projects.length - 1;
    let next = index;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        next = index === last ? 0 : index + 1;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        next = index === 0 ? last : index - 1;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = last;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="projects" className="record-section" aria-labelledby="projects-title">
      <div className="record-head">
        <div className="section-head">
          <h2 className="section-title" id="projects-title">
            ผลงานที่ใช้งานจริง
          </h2>
          <p className="section-meta">
            Work orders
            <br />
            {projects.length} records
          </p>
        </div>
      </div>

      <div className="spread">
        <div className="page page--left">
          <div className="record-line">
            <span>Work register</span>
            <span>Select a record</span>
          </div>

          <div
            className="work-register"
            role="tablist"
            aria-label="รายการผลงาน"
            aria-orientation="vertical"
          >
            {projects.map((item, index) => (
              <button
                key={item.id}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`work-tab-${item.id}`}
                aria-selected={active === index}
                aria-controls={`work-panel-${item.id}`}
                tabIndex={active === index ? 0 : -1}
                className="work-tab"
                onClick={() => setActive(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <span className="work-num">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="work-title">{item.title}</span>
                  <span className="work-sub">{item.role}</span>
                </span>
                <span className="work-state">{item.status}</span>
              </button>
            ))}
          </div>

          <p className="work-register-note">
            ทุก record มี repo และ demo ให้กดตรวจ · เลือก record เพื่ออ่านรายละเอียด
          </p>
        </div>

        <div className="page page--right">
          <div className="record-line">
            <span>Work order</span>
            <span>WO-{String(active + 1).padStart(2, "0")}</span>
          </div>

          <div
            key={project.id}
            className="work-sheet"
            role="tabpanel"
            id={`work-panel-${project.id}`}
            aria-labelledby={`work-tab-${project.id}`}
            tabIndex={0}
          >
            <div className="work-sheet-head">
              <div>
                <span className="work-order">{project.role}</span>
                <h3 className="work-detail-title">{project.title}</h3>
              </div>
              <span className="work-state">{project.status}</span>
            </div>

            <p className="work-desc">{project.description}</p>

            <p className="work-proof">
              <strong>สิ่งนี้พิสูจน์ว่า</strong>
              <br />
              {project.proof}
            </p>

            <div className="tag-row work-tags">
              {project.tech.map((tech) => (
                <span className="tag" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            {project.credentials ? (
              <div className="credential-box">
                <p className="credential-title">Test login · กดใช้ได้เลย</p>
                {project.credentials.map((account) => (
                  <p className="cred-row" key={account.username}>
                    <span>{account.role}</span>
                    <code className="cred-code">{account.username}</code>
                    <span>/</span>
                    <code className="cred-code">{account.password}</code>
                  </p>
                ))}
                <p className="cred-note">หลังเข้าสู่ระบบเลือกเครื่อง POS เพื่อเริ่มใช้งาน</p>
              </div>
            ) : null}

            <div className="work-actions">
              {project.demo ? (
                <a
                  className="btn btn--cyan"
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink size={15} aria-hidden="true" /> เปิด Demo
                </a>
              ) : null}
              <a
                className="btn btn--outline"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiCode size={15} aria-hidden="true" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
