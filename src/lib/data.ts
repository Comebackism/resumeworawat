export const resumeData = {
  name: "วรวัฒน์ ใจดี",
  nameEn: "Worawat Jaidee",
  title: "Full-Stack Developer & UI/UX Enthusiast",
  tagline: "สร้างสิ่งที่สวยงาม มีประสิทธิภาพ และน่าใช้",
  bio: `นักพัฒนาซอฟต์แวร์ที่หลงใหลในการสร้างประสบการณ์ดิจิทัลที่สวยงามและใช้งานได้จริง 
มีประสบการณ์กว่า 3 ปีในการพัฒนา Web Application ตั้งแต่ Frontend จนถึง Backend 
ชอบเรียนรู้เทคโนโลยีใหม่ๆ และแก้ปัญหาที่ซับซ้อนด้วยวิธีที่เรียบง่าย`,
  email: "worawat@example.com",
  phone: "+66 81-234-5678",
  location: "กรุงเทพมหานคร, ประเทศไทย",
  github: "https://github.com/worawat",
  linkedin: "https://linkedin.com/in/worawat",
  website: "https://worawat.dev",
  avatar: "/avatar.jpg",

  experiences: [
    {
      id: 1,
      role: "Senior Full-Stack Developer",
      company: "TechVenture Co., Ltd.",
      period: "2023 – ปัจจุบัน",
      description:
        "นำทีมพัฒนา Web Application ด้วย Next.js และ Node.js รับผิดชอบ Architecture และ Code Review ช่วยให้ระบบรองรับผู้ใช้งานได้มากกว่า 50,000 คน",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Creative Digital Agency",
      period: "2021 – 2023",
      description:
        "พัฒนา UI/UX สำหรับ Startup หลายแห่ง ออกแบบและสร้าง Design System ทำงานร่วมกับ Designer และ PM อย่างใกล้ชิด",
      tags: ["React", "Tailwind CSS", "Figma", "GraphQL"],
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "Startup Hub Thailand",
      period: "2020 – 2021",
      description:
        "เริ่มต้นสายงานนักพัฒนา พัฒนา Feature ใหม่ๆ และแก้ไข Bug บน Laravel + Vue.js ทำให้คุณภาพโค้ดดีขึ้นด้วยการเขียน Unit Test",
      tags: ["Laravel", "Vue.js", "MySQL", "Docker"],
    },
  ],

  skills: [
    { name: "TypeScript / JavaScript", level: 95, category: "Frontend" },
    { name: "React & Next.js", level: 92, category: "Frontend" },
    { name: "Tailwind CSS / CSS3", level: 90, category: "Frontend" },
    { name: "Node.js / Express", level: 85, category: "Backend" },
    { name: "PostgreSQL / MySQL", level: 80, category: "Backend" },
    { name: "Docker / Kubernetes", level: 70, category: "DevOps" },
    { name: "AWS / GCP", level: 65, category: "DevOps" },
    { name: "Figma / UI Design", level: 75, category: "Design" },
  ],

  techStack: [
    { name: "Next.js", icon: "⚡" },
    { name: "TypeScript", icon: "🔷" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Docker", icon: "🐳" },
    { name: "Tailwind", icon: "🎨" },
    { name: "AWS", icon: "☁️" },
    { name: "Figma", icon: "🖌️" },
    { name: "Git", icon: "🔀" },
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "แพลตฟอร์มซื้อขายออนไลน์ที่รองรับ Multi-vendor, Real-time Inventory และระบบชำระเงินอัตโนมัติ มีผู้ใช้งานกว่า 10,000 คน/เดือน",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      github: "https://github.com/worawat/ecommerce",
      demo: "https://shop.worawat.dev",
      gradient: "from-violet-600 to-indigo-600",
      emoji: "🛒",
    },
    {
      id: 2,
      title: "AI Task Manager",
      description:
        "ระบบจัดการงานที่ใช้ AI ช่วยจัดลำดับความสำคัญ แนะนำ Deadline และสรุปงานด้วย Natural Language Processing",
      tech: ["React", "OpenAI API", "FastAPI", "MongoDB"],
      github: "https://github.com/worawat/ai-tasks",
      demo: "https://tasks.worawat.dev",
      gradient: "from-pink-600 to-rose-600",
      emoji: "🤖",
    },
    {
      id: 3,
      title: "Real-time Dashboard",
      description:
        "Dashboard แสดงข้อมูล Analytics แบบ Real-time ด้วย WebSocket รองรับ Custom Widget และ Export เป็น PDF/Excel",
      tech: ["Vue.js", "WebSocket", "Chart.js", "Node.js"],
      github: "https://github.com/worawat/dashboard",
      demo: "https://dash.worawat.dev",
      gradient: "from-emerald-600 to-teal-600",
      emoji: "📊",
    },
    {
      id: 4,
      title: "Open Source UI Library",
      description:
        "Component Library สำหรับ React ที่มี 50+ Component พร้อม Dark Mode, Accessibility และ TypeScript Support",
      tech: ["React", "Storybook", "Rollup", "Jest"],
      github: "https://github.com/worawat/ui-lib",
      demo: "https://ui.worawat.dev",
      gradient: "from-amber-600 to-orange-600",
      emoji: "🎨",
    },
  ],

  education: [
    {
      degree: "วิศวกรรมศาสตรบัณฑิต (วิศวกรรมคอมพิวเตอร์)",
      school: "จุฬาลงกรณ์มหาวิทยาลัย",
      period: "2016 – 2020",
      gpa: "3.72",
    },
  ],

  certifications: [
    "AWS Certified Solutions Architect – Associate",
    "Google Cloud Professional Developer",
    "Meta Frontend Developer Certificate",
  ],
};
