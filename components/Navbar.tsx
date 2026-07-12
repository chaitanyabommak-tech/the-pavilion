"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LeadFormModal from "./LeadFormModal";
import ThemeToggle from "./ThemeToggle";
import ThemeAwareLogo from "./ThemeAwareLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setScrolled(window.scrollY > 60);
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
          <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <a href="/" className="flex-shrink-0 bg-transparent">
            <ThemeAwareLogo />
          </a>

          {/* Navigation Links - hidden on mobile, visible on lg+ */}
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/the-pavillion" className="font-heading text-base font-light tracking-wide transition-all hover:opacity-60" style={{ color: "var(--ink)", letterSpacing: "0.02em" }}>
              The Project
            </Link>
            <Link href="/about" className="font-heading text-base font-light tracking-wide transition-all hover:opacity-60" style={{ color: "var(--ink)", letterSpacing: "0.02em" }}>
              About
            </Link>
            <Link href="/blog" className="font-heading text-base font-light tracking-wide transition-all hover:opacity-60" style={{ color: "var(--ink)", letterSpacing: "0.02em" }}>
              Blog
            </Link>
            <Link href="/contact" className="font-heading text-base font-light tracking-wide transition-all hover:opacity-60" style={{ color: "var(--ink)", letterSpacing: "0.02em" }}>
              Contact
            </Link>
          </nav>

          {/* Right side: ThemeToggle + CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">

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
              Enquire Now
            </a>
          </div>
          </div>
        </nav>
      </header>

      {modalOpen && (
        <LeadFormModal type="visit" onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
