export const resumeData = {
  name: "วรวัฒน์ บุญเรือง",
  nameEn: "Worawat Boonrueng",
  title: "Junior Developer · กำลังหาประสบการณ์ 🌱",
  tagline: "เรียนรู้ทุกวัน สร้างทุกอย่างที่อยากทำ",
  bio: `นักพัฒนาซอฟต์แวร์ที่หลงใหลในการสร้างประสบการณ์ดิจิทัลที่สวยงามและใช้งานได้จริง 
ต้องการหาประสบการณ์ในการพัฒนา Web Application ตั้งแต่ Frontend จนถึง Backend 
ชอบเรียนรู้เทคโนโลยีใหม่ๆ และแก้ปัญหาที่ซับซ้อนด้วยวิธีที่เรียบง่าย`,
  email: "mzamzababatv@gmail.com",
  phone: "",
  location: "หาดใหญ่, สงขลา, ประเทศไทย",
  github: "https://github.com/Comebackism",
  linkedin: "https://www.linkedin.com/in/worawat-boonrueng-407749401/",
  website: "",
  avatar: "/worawat.jpg",

  experiences: [
    {
      id: 1,
      role: "โปรเจกต์ส่วนตัว · Web Developer",
      company: "Self-Learning & Side Projects",
      period: "2025 – ปัจจุบัน",
      description:
        "พัฒนาเว็บไซต์และ Web App ด้วยตัวเองเพื่อฝึกฝนทักษะ ทั้ง Frontend และ Backend เรียนรู้จากการลงมือทำจริง ตั้งแต่ออกแบบ UI จนถึง Deploy",
      tags: ["Next.js", "TypeScript", "Firebase", "Vercel"],
    },
    {
      id: 2,
      role: "นักศึกษาฝึกปฏิบัติ · IT Support & Dev",
      company: "มหาวิทยาลัยสงขลานครินทร์",
      period: "2025 – ปัจจุบัน",
      description:
        "เรียนรู้และพัฒนาโปรเจกต์ในหลักสูตร ทำงานร่วมกับเพื่อนเพื่อสร้าง Web Application ที่แก้ปัญหาจริง พร้อมเรียนรู้ Best Practices จากอาจารย์",
      tags: ["HTML/CSS", "Java", "Python", "SQL", "PHP"],
    },
  ],

  skills: [
    { name: "HTML & CSS", level: 80, category: "Frontend" },
    { name: "JavaScript / TypeScript", level: 75, category: "Frontend" },
    { name: "React & Next.js", level: 70, category: "Frontend" },
    { name: "Tailwind CSS", level: 75, category: "Frontend" },
    { name: "Node.js", level: 60, category: "Backend" },
    { name: "Firebase", level: 65, category: "Backend" },
    { name: "SQL", level: 70, category: "Backend" },
    { name: "Oracle Database", level: 60, category: "Backend" },
    { name: "Java OOP", level: 65, category: "Backend" },
    { name: "PHP", level: 60, category: "Backend" },
    { name: "Python", level: 55, category: "Backend" },
    { name: "AI Prompt Engineering", level: 85, category: "AI" },
    { name: "Figma / UI Design", level: 60, category: "Design" },
  ],

  techStack: [
    { name: "Next.js", icon: "⚡" },
    { name: "TypeScript", icon: "🔷" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Firebase", icon: "🔥" },
    { name: "SQL", icon: "🗄️" },
    { name: "Oracle", icon: "🔶" },
    { name: "Java OOP", icon: "☕" },
    { name: "PHP", icon: "🐘" },
    { name: "Tailwind", icon: "🎨" },
    { name: "Python", icon: "🐍" },
    { name: "Figma", icon: "🖌️" },
    { name: "Git", icon: "🔀" },
    { name: "Prompt AI", icon: "🤖" },
    { name: "Vercel", icon: "▲" },
  ],

  projects: [
    {
      id: 1,
      title: "Resume Website",
      description:
        "เว็บไซต์ Resume ส่วนตัวที่ออกแบบและพัฒนาเอง มี Animation สวยงาม รองรับ Dark/Light Mode พร้อม Responsive Design",
      tech: ["Next.js", "TypeScript", "Framer Motion", "CSS"],
      github: "https://github.com/Comebackism/resumeworawat",
      demo: "",
      gradient: "from-violet-600 to-indigo-600",
      emoji: "📄",
    },
    {
      id: 2,
      title: "Artee Waffle Ordering App",
      description:
        "ระบบสั่งอาหารสำหรับร้านวาฟเฟิล รองรับการสั่งซื้อแบบ Real-time ผ่าน Firebase มีหน้า Dashboard สำหรับร้านค้า",
      tech: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Comebackism/wafflehongongartee",
      demo: "https://wafflehongongartee.vercel.app/",
      demo2: "https://wafflehongongartee.vercel.app/kitchen", // เพิ่มพื้นที่สำหรับ Demo ที่ 2 เช่น หน้า Admin
      gradient: "from-amber-600 to-orange-600",
      emoji: "🧇",
    },
    {
      id: 3,
      title: "Mjaytea Landing Page",
      description:
        "Landing Page สำหรับร้านชา ออกแบบ Minimal & Cozy ใช้ Typography ภาษาไทยที่สวยงาม เน้นความอบอุ่นและเป็นกันเอง",
      tech: ["Next.js", "CSS", "Google Fonts"],
      github: "https://github.com/Comebackism/mjaytea",
      demo: "https://mjaytea.vercel.app",
      demo2: "",
      gradient: "from-emerald-600 to-teal-600",
      emoji: "🍵",
    },
    {
      id: 4,
      title: "Gym Workout App",
      description:
        "เว็บแอปพลิเคชันสำหรับบันทึกการออกกำลังกาย มีระบบจัดการข้อมูลผู้ใช้ พร้อม Dashboard สรุปผล เข้าทดลองใช้งานโดยใช้รหัสทดสอบ [user@gymapp.com] / SecurePass123!",
      tech: ["Next.js", "Prisma", "SQLite", "Tailwind CSS"],
      github: "https://github.com/Comebackism/gymapp",
      demo: "https://gymapp-rosy-three.vercel.app/",
      gradient: "from-blue-600 to-cyan-600",
      emoji: "💪",
    },
  ],

  education: [
    {
      degree: "หลักสูตรเทคโนโลยีบัณฑิต (เทคโนโลยีสารสนเทศ)",
      school: "มหาวิทยาลัยสงขลานครินทร์",
      period: "2025 – 2027",
      gpa: "3.45",
    },
  ],

  certifications: [
    "AI Prompt Engineering Specialist",
    "กำลังศึกษาและพัฒนาตัวเองอย่างต่อเนื่อง",
    "เรียนรู้จาก Online Courses (Udemy, YouTube)",
    "พร้อมสอบ Certification ในอนาคต",
  ],
};
