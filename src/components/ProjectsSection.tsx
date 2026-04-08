"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";
import { resumeData } from "@/lib/data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeInOut" },
  }),
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      // เปลี่ยนจาก inline style มาใช้ Tailwind classes จัดการ padding และ background
      className="py-24 bg-violet-500/5 dark:bg-violet-900/10"
    >
      <div className="container mx-auto px-4 md:px-8" >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-sm font-bold tracking-wider text-violet-600 dark:text-violet-400 uppercase mb-2 block text-center" style={{ padding: "2rem 0" }}>
            ผลงาน
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white text-center leading-snug">
            โปรเจกต์ที่ <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">ภาคภูมิใจ</span>
          </h2>
          <p className="text-[1.05rem] text-gray-600 dark:text-gray-400 text-center">
            คัดสรรผลงานที่ดีที่สุดจากประสบการณ์การทำงานจริง
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" style={{ marginTop: "1.5rem", paddingBottom: "2rem" }}>
          {resumeData.projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              id={`project-${project.id}`}
              className="h-full"
            >
              {/* ปรับ Padding ให้กว้างขั้นสุดยอด (ประมาณ 64px) */}
              <div className="relative flex flex-col h-full min-h-[380px] p-12 lg:p-16 rounded-[32px] bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group" style={{ padding: "3.5rem" }}>

                {/* Color accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{
                    background: `linear-gradient(90deg, ${project.gradient?.includes("violet")
                      ? "#7c5cfc, #a78bfa"
                      : project.gradient?.includes("pink")
                        ? "#ec4899, #f43f5e"
                        : project.gradient?.includes("emerald")
                          ? "#10b981, #14b8a6"
                          : "#f59e0b, #f97316"
                      })`,
                  }}
                />

                {/* Emoji (แก้ไข syntax error จาก '1.5 rem' เป็น '1.5rem') */}
                <div className="text-4xl mb-5 transform group-hover:scale-110 transition-transform duration-300 origin-left" style={{ marginTop: "1.5rem" }}>
                  {project.emoji}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[1rem] text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>



                {/* Links */}
                <div className="flex flex-wrap gap-4 mt-auto pt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 flex-1 min-w-[120px] px-4 py-3 text-[0.95rem] font-semibold text-gray-700 dark:text-gray-300 bg-gray-100/80 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full transition-all duration-200"
                  >
                    <Code size={18} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-2 flex-1 min-w-[120px] px-4 py-3 text-[0.95rem] font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-full transition-all duration-200 shadow-lg shadow-violet-500/25"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                  {/* ปุ่ม Demo ที่ 2 (จะแสดงเมื่อมีข้อมูล) */}
                  {project.demo2 && (
                    <a
                      href={project.demo2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center gap-2 flex-1 min-w-[120px] px-4 py-3 text-[0.95rem] font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 rounded-full transition-all duration-200 shadow-lg shadow-violet-500/25"
                    >
                      <ExternalLink size={18} /> Demo 2
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}