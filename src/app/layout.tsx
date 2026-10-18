import type { Metadata } from "next";
import { Anuphan, Chakra_Petch, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const anuphan = Anuphan({
  variable: "--font-body",
  subsets: ["latin", "thai"],
  weight: "variable",
  display: "swap",
});

const chakra = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin", "thai"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Worawat Boonrueng — Junior Developer | Service Record",
  description:
    "บันทึกการทำงานของวรวัฒน์ บุญเรือง นักพัฒนาเว็บและนักศึกษา IT มหาวิทยาลัยสงขลานครินทร์ พร้อมผลงานที่ deploy ใช้งานจริง",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${anuphan.variable} ${chakra.variable} ${mono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <a className="skip-link" href="#profile">
          ข้ามไปยังเนื้อหา
        </a>
        {children}
      </body>
    </html>
  );
}
