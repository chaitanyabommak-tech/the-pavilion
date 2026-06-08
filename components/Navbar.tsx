"use client";

import { useEffect, useState } from "react";
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
        className={`fixed top-0 left-0 right-0 z-50 transition-[backdrop-filter] duration-500 ${
          scrolled ? "nav-glass-scrolled" : "nav-glass"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[80px] sm:h-[96px] lg:h-[90px] xl:h-[96px] flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex-shrink-0 bg-transparent">
            <ThemeAwareLogo />
          </a>

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
      </header>

      {modalOpen && (
        <LeadFormModal type="visit" onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
