import type { Metadata } from "next";
import { Prompt, Kanit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";

const prompt = Prompt({
  variable: "--font-sans",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const kanit = Kanit({
  variable: "--font-display",
  subsets: ["latin", "thai"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Worawat Jaidee | Full-Stack Developer",
  description: "Personal Resume & Portfolio of Worawat Jaidee, a Full-Stack Developer based in Bangkok.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${prompt.variable} ${kanit.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col transition-colors duration-300 overflow-x-hidden pt-4" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <footer className="py-12 text-center text-sm border-t border-white/5 opacity-60">
            <div className="container mx-auto px-4" style={{ marginTop: "1.5rem" }}>
              <p>© {new Date().getFullYear()} Worawat.dev. Built with Next.js 16 & Tailwind CSS v4.</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
