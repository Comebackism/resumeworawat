"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "เกี่ยวกับ" },
  { href: "#experience", label: "ประสบการณ์" },
  { href: "#skills", label: "ทักษะ" },
  { href: "#projects", label: "ผลงาน" },
  { href: "#contact", label: "ติดต่อ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled
            ? "rgba(12,12,20,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 no-underline"
            id="nav-logo"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
              style={{ background: "var(--gradient-primary)" }}
            >
              W
            </div>
            <span
              className="font-bold text-sm"
              style={{ color: "var(--text-primary)" }}
            >
              Worawat.dev
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link" id={`nav-${link.href.replace("#", "")}`}>
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="btn-primary hidden md:inline-flex"
              id="nav-hire-btn"
              style={{ padding: "0.5rem 1.25rem", fontSize: "0.82rem" }}
            >
              จ้างงาน ✨
            </a>
            {/* Mobile menu */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                color: "var(--text-primary)",
                cursor: "pointer",
              }}
              onClick={() => setMenuOpen(!menuOpen)}
              id="mobile-menu-btn"
              aria-label="Toggle mobile menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[68px] left-0 right-0 z-40 md:hidden"
            style={{
              background: "rgba(12,12,20,0.95)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
              padding: "1rem 1.5rem 1.5rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="nav-link block py-3"
                style={{ fontSize: "1rem", borderBottom: "1px solid var(--border)" }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMenuOpen(false)}
                id={`mobile-nav-${link.href.replace("#","")}`}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
