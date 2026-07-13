"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LeadFormModal from "./LeadFormModal";
import ThemeToggle from "./ThemeToggle";
import ThemeAwareLogo from "./ThemeAwareLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > 60);
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const checkWidth = () => setIsNarrow(window.innerWidth <= 360);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{ background: "transparent" }}
      >
        <nav
          className={`navbar-floating ${
            scrolled ? "nav-glass-scrolled" : "nav-glass"
          }`}
          style={{ pointerEvents: "auto" }}
        >
          {/* Three-zone professional layout */}


          {/* LEFT ZONE: Brand */}
          <div className="navbar__brand">
            <a href="/" className="navbar__logo-link">
              <ThemeAwareLogo />
            </a>
          </div>

          {/* CENTRE ZONE: Navigation - hidden on mobile, visible on lg+ */}
          <nav className="navbar__navigation hidden lg:flex">
            <Link href="/the-pavillion" className="type-nav transition-all hover:opacity-60" style={{ color: "var(--ink)" }}>
              The Project
            </Link>
            <Link href="/about" className="type-nav transition-all hover:opacity-60" style={{ color: "var(--ink)" }}>
              About
            </Link>
            <Link href="/blog" className="type-nav transition-all hover:opacity-60" style={{ color: "var(--ink)" }}>
              Blog
            </Link>
            <Link href="/contact" className="type-nav transition-all hover:opacity-60" style={{ color: "var(--ink)" }}>
              Contact
            </Link>
          </nav>

          {/* RIGHT ZONE: Actions (Theme Toggle + CTAs) */}
          <div className="navbar__actions">
            {/* Premium theme toggle */}
            <ThemeToggle />

            {/* Book Site Visit — hidden on xs, visible sm+ */}
            <button
              onClick={() => setModalOpen(true)}
              className="btn-nav-visit hidden sm:inline-flex"
            >
              Book Site Visit
            </button>

            {/* Enquire Now — always visible */}
            <a href="#contact" className="btn-nav-enquire">
              {isNarrow ? "Enquire" : "Enquire Now"}
            </a>
          </div>
        </nav>
      </header>

      {modalOpen && (
        <LeadFormModal type="visit" onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
