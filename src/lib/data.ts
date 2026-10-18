export const resumeData = {
  name: "วรวัฒน์ บุญเรือง",
  nameEn: "Worawat Boonrueng",
  title: "Junior Developer · กำลังหาประสบการณ์",
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
    { name: "HTML & CSS", level: 65, category: "Frontend" },
    { name: "JavaScript / TypeScript", level: 65, category: "Frontend" },
    { name: "React & Next.js", level: 65, category: "Frontend" },
    { name: "Tailwind CSS", level: 65, category: "Frontend" },
    { name: "Node.js", level: 60, category: "Backend" },
    { name: "SQL", level: 65, category: "Backend" },
    { name: "Oracle Database", level: 60, category: "Backend" },
    { name: "Java OOP", level: 65, category: "Backend" },
    { name: "PHP", level: 60, category: "Backend" },
    { name: "Python", level: 55, category: "Language" },
    { name: "C", level: 50, category: "Language" },
    { name: "AI Prompt Engineering", level: 65, category: "AI" },
    { name: "Figma / UI Design", level: 60, category: "Design" },
  ],

  techStack: [
    { name: "Next.js", icon: "" },
    { name: "TypeScript", icon: "" },
    { name: "React", icon: "" },
    { name: "Node.js", icon: "" },
    { name: "SQL", icon: "" },
    { name: "Oracle", icon: "" },
    { name: "Java OOP", icon: "" },
    { name: "PHP", icon: "" },
    { name: "Tailwind", icon: "" },
    { name: "Python", icon: "" },
    { name: "Figma", icon: "" },
    { name: "Git", icon: "" },
    { name: "Prompt AI", icon: "" },
    { name: "Vercel", icon: "" },
  ],

  projects: [
    {
      id: 6,
      title: "Tee Ob Waffle POS System",
      description:
        "ระบบ POS ครบวงจรสำหรับร้าน ตี๋อบ วาฟเฟิล HongKong ตั้งแต่ลูกค้าสแกน QR Code สั่งอาหารที่โต๊ะ, ระบบแคชเชียร์, หน้าจอครัว (KDS), จัดการคลังสินค้าและเมนู ไปจนถึงแดชบอร์ดสรุปยอดขาย รองรับชำระเงินสดและ PromptPay พร้อมตรวจสอบสลิปอัตโนมัติ",
      tech: ["React 19", "Vite", "Express", "PostgreSQL", "JWT", "Cloudinary"],
      github: "https://github.com/Comebackism/Project_waffle_tee_ob",
      demo: "https://project-waffle-tee-ob.vercel.app/login",
      demo2: "",
      role: "Full-stack · POS",
      status: "LIVE",
      proof:
        "ระบบที่ร้านใช้งานจริง ครอบคลุมตั้งแต่ลูกค้าสแกน QR สั่งอาหาร แคชเชียร์ ห้องครัว คลังสินค้า ไปจนถึงแดชบอร์ดยอดขาย",
      credentials: [
        { role: "แคชเชียร์", username: "mzaba01", password: "1234" },
        { role: "ครัว (KDS)", username: "nipat", password: "1234" },
      ],
      gradient: "from-red-600 to-amber-500",
      emoji: "",
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
      role: "Design + Front-end",
      status: "LIVE",
      proof:
        "ออกแบบและสร้างแบรนด์ร้านชาให้อ่านง่ายบนมือถือ ด้วยการจัดวางตัวอักษรไทยและจังหวะพื้นที่ที่นิ่ง",
      gradient: "from-emerald-600 to-teal-600",
      emoji: "",
    },
    {
      id: 5,
      title: "Worawat Computer E-Commerce",
      description:
        "เว็บไซต์ E-Commerce ร้านขายคอมพิวเตอร์และอุปกรณ์ไอที มีระบบจัดการสินค้า ระบบตะกร้า และจำลองการสั่งซื้อ",
      tech: ["React", "Vite", "Node.js", "Express", "Tailwind CSS"],
      github: "https://github.com/Comebackism/worawat_computer-e-com-",
      demo: "https://worawat-computer-e-com.vercel.app/",
      role: "Full-stack · E-commerce",
      status: "LIVE",
      proof:
        "ฝึก flow การขายจริงตั้งแต่หน้ารายการสินค้า ตะกร้า ไปจนถึงการจำลองคำสั่งซื้อ และแยกส่วน front-end กับ API ชัดเจน",
      gradient: "from-fuchsia-600 to-pink-600",
      emoji: "",
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
