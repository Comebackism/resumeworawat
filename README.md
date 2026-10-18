# Service Record — Worawat Boonrueng

เว็บไซต์เรซูเม่และพอร์ตโฟลิโอภาษาไทยของ **วรวัฒน์ บุญเรือง** ออกแบบเป็น “สมุดบันทึกงานซ่อม” (service logbook) บนโต๊ะทำงานสี navy — เปิดอ่านประวัติ ทักษะ และผลงานที่ deploy ใช้งานจริง พร้อมบัญชีทดลองของระบบ POS

## Stack

- Next.js 16 (App Router, static output)
- TypeScript
- Tailwind CSS v4 + a custom logbook design system in `src/app/globals.css`
- `next/font`: Anuphan (Thai body), Chakra Petch (display), JetBrains Mono (record labels)
- `react-icons` (Feather line icons)

## Run

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000)

```bash
npm run build
npm start
npm run lint
```

## Structure

```text
src/app/layout.tsx        fonts, metadata, skip link
src/app/page.tsx          resume shell (cover, book, index rail)
src/app/globals.css       tokens + logbook components
src/components/SiteNav    desktop index rail / mobile drawer
src/components/HeroSection
src/components/ExperienceSection
src/components/SkillsSection
src/components/ProjectsSection
src/components/ContactSection
src/lib/data.ts           resume content and project data
```

## Design documentation

- `PRODUCT.md` — confirmed users, purpose, constraints, accessibility
- `DESIGN.md` — tokens, typography, layout, components, do's and don'ts
- `.impeccable/surfaces/src-app-page-tsx.md` — the home surface brief and direction contract

## Notes

- The site is intentionally a single light world; the dark workbench is the frame around the paper, not a dark theme.
- The Tee Ob Waffle POS demo uses verified test accounts: `mzaba01 / 1234` (cashier) and `nipat / 1234` (kitchen).
- Replace `public/worawat.jpg` only with a real portrait; its provenance is embedded in the image metadata.
