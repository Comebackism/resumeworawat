"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const sections = [
  { id: "profile", label: "โปรไฟล์" },
  { id: "experience", label: "ประสบการณ์" },
  { id: "skills", label: "ทักษะ" },
  { id: "projects", label: "ผลงาน" },
  { id: "contact", label: "ติดต่อ" },
];

function useActiveSection() {
  const [active, setActive] = useState("profile");

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-32% 0px -58% 0px", threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return active;
}

function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

export function TabRail() {
  const active = useActiveSection();

  return (
    <nav className="tab-rail" aria-label="สารบัญบันทึก">
      <span className="rail-label">Index</span>
      {sections.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`tab${active === section.id ? " is-active" : ""}`}
          style={{ "--i": index } as CSSProperties}
          aria-current={active === section.id ? "page" : undefined}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}

export function MobileBar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const progress = useReadingProgress();
  const panelRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const main = document.querySelector("main");
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div className="reading-ribbon" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />

      <header className="mobile-bar">
        <a className="mobile-brand" href="#profile">
          <span className="mobile-brand-mark" aria-hidden="true">
            W
          </span>
          <span>
            <span className="mobile-brand-long">Service Record · </span>
            W. Boonrueng
          </span>
        </a>
        <button
          ref={buttonRef}
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX size={17} aria-hidden="true" /> : <FiMenu size={17} aria-hidden="true" />}
          {open ? "ปิด" : "สารบัญ"}
        </button>
      </header>

      {open ? (
        <nav className="mobile-menu" id="mobile-menu" ref={panelRef} aria-label="สารบัญบันทึก">
          <p className="mobile-menu-label">Index / สารบัญ</p>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={active === section.id ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <span>{section.label}</span>
              <span>
                <FiArrowUpRight size={15} aria-hidden="true" />
              </span>
            </a>
          ))}
        </nav>
      ) : null}
    </>
  );
}
