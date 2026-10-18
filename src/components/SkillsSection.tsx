"use client";

import { resumeData } from "@/lib/data";

const categoryOrder = ["Frontend", "Backend", "Language", "AI", "Design"];

const groups = categoryOrder
  .map((category) => ({
    category,
    items: resumeData.skills.filter((skill) => skill.category === category),
  }))
  .filter((group) => group.items.length > 0);

const leftGroups = groups.slice(0, 2);
const rightGroups = groups.slice(2);

function SkillScale({ level }: { level: number }) {
  const filled = Math.max(1, Math.round(level / 10));

  return (
    <span className="skill-scale">
      <span
        className="meter"
        role="img"
        aria-label={`ระดับ ${filled} จาก 10`}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <span
            className={`meter-cell${index < filled ? " is-on" : ""}`}
            key={index}
          />
        ))}
      </span>
      <span className="skill-level">{filled}/10</span>
    </span>
  );
}

function SkillGroup({
  category,
  items,
}: {
  category: string;
  items: typeof resumeData.skills;
}) {
  return (
    <div>
      <h3 className="skill-group-title">{category}</h3>
      {items.map((skill) => (
        <div className="skill-row" key={skill.name}>
          <span className="skill-name">{skill.name}</span>
          <SkillScale level={skill.level} />
        </div>
      ))}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="record-section" aria-labelledby="skills-title">
      <div className="record-head">
        <div className="section-head">
          <h2 className="section-title" id="skills-title">
            ทักษะและเครื่องมือ
          </h2>
          <p className="section-meta">
            Calibration sheet
            <br />
            {resumeData.skills.length} items
          </p>
        </div>
      </div>

      <div className="spread">
        <div className="page page--left">
          <div className="record-line">
            <span>Calibration / core</span>
            <span>Front &amp; back</span>
          </div>

          <div className="skill-groups">
            {leftGroups.map((group) => (
              <SkillGroup key={group.category} {...group} />
            ))}
          </div>

          <div className="meter-legend">
            <span className="meter">
              <span className="meter-cell is-on" />
              <span className="meter-cell" />
              <span className="meter-cell" />
            </span>
            <span>ประเมินจากงานที่ทำจริง · 10 = ใช้งานคล่อง</span>
          </div>
        </div>

        <div className="page page--right">
          <div className="record-line">
            <span>Calibration / tools</span>
            <span>Daily stack</span>
          </div>

          <div className="skill-groups">
            {rightGroups.map((group) => (
              <SkillGroup key={group.category} {...group} />
            ))}
          </div>

          <p className="stack-label">Tech stack ที่ใช้เป็นประจำ</p>
          <div className="stack-grid">
            {resumeData.techStack.map((tech) => (
              <span className="stack-tag" key={tech.name}>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
