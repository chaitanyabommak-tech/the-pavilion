"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import LeadFormModal from "./LeadFormModal";

/* Desktop stats bar — unchanged */
const stats = [
  { value: "45",            label: "Villas"           },
  { value: "G+1+Penthouse", label: "Configuration"    },
  { value: "3 Acres",       label: "Site Area"         },
  { value: "30,000 SFT",   label: "Recreation Zone"  },
  { value: "Boduppal",      label: "East Hyderabad"   },
];

/* Mobile card stats — compact for 5-col strip */
const mobStats = [
  { value: "45",    label: "Villas"    },
  { value: "G+1",   label: "Penthouse" },
  { value: "3 Ac.", label: "Site Area" },
  { value: "30K",   label: "Rec Zone"  },
  { value: "Bodu.", label: "E. Hyd."   },
];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"visit" | "brochure">("visit");

  function openModal(type: "visit" | "brochure") {
    setModalType(type);
    setModalOpen(true);
  }

  return (
    <>
      <section
        className="hero-section-wrap relative min-h-screen flex flex-col"
        aria-label="Hero section"
      >
        {/* ══════════════════════════════════════════
            MOBILE ONLY — portrait background image
            Hidden on lg+ via lg:hidden
            ══════════════════════════════════════════ */}
        <div className="hero-mob-bg absolute inset-0 z-0 lg:hidden" aria-hidden="true">
          <img
            src="/images/pavilion-mobile-hero.png"
            alt=""
            className="w-full h-full object-cover object-top"
            loading="eager"
            fetchPriority="high"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/assets/community-aerial.jpeg";
            }}
          />
          {/* Cinematic gradient: dark top (navbar contrast) → light mid → dark bottom (card contrast) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.26) 0%, rgba(0,0,0,0.04) 38%, rgba(0,0,0,0.48) 100%)",
            }}
          />
        </div>

        {/* ══════════════════════════════════════════
            DESKTOP LAYOUT — hidden on mobile
            Completely unchanged from original.
            ══════════════════════════════════════════ */}
        <div className="flex-1 hidden lg:flex lg:flex-row">
          {/* Left — text */}
          <div
            className="hero-text-panel lg:w-[45%] flex items-start px-10 lg:px-16 xl:px-20 pt-[88px] sm:pt-[120px] lg:pt-[176px] xl:pt-[192px] pb-10 lg:pb-20"
            style={{ background: "var(--bg)", transition: "background-color 300ms ease" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="w-full"
            >
              <h1
                style={{ color: "var(--ink)" }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-[1.05] mb-4"
              >
                THE PAVILLION
              </h1>
              <h2
                style={{ color: "var(--ink-3)" }}
                className="font-heading text-3xl lg:text-4xl xl:text-5xl font-light italic leading-snug mb-6"
              >
                Your parents dreamed of a home like this.
                <br />
                You're buying it.
              </h2>

              <div className="w-12 h-px bg-muted-gold mb-6" />

              <p style={{ color: "var(--ink-2)" }} className="text-sm leading-relaxed mb-10">
                A Clean Slate.<br />
                Most homes are built, then sold.<br />
                Yours is built as you decide — a blank canvas<br />
                handed to you before the first pour of concrete.
              </p>

              <div className="hero-cta-row flex flex-wrap gap-4 pb-10 lg:pb-0">
                <button
                  onClick={() => openModal("visit")}
                  className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase"
                >
                  Book Site Visit
                </button>
                <button
                  onClick={() => openModal("brochure")}
                  style={{ border: "1px solid var(--out-bd)", color: "var(--out-tx)" }}
                  className="px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center gap-2 hover:opacity-80"
                  data-track="brochure-download-intent"
                  aria-label="Download The Pavilion brochure — enter your details to receive it"
                >
                  Download Brochure
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="hero-image-panel lg:w-[55%] relative min-h-[55vw] lg:min-h-0"
          >
            <img
              src="/assets/pavilion-hero.png"
              alt="The Pavilion community living aerial view, Surya Hills Boduppal East Hyderabad"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
              width={1440}
              height={810}
            />
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE ONLY — overlay content card
            Hidden on lg+ via lg:hidden
            ══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="hero-mob-card absolute lg:hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Eyebrow */}
          <span className="hero-mob-eyebrow">Surya Hills, Boduppal · East Hyderabad</span>

          {/* Project title */}
          <h1 className="hero-mob-title font-heading">The Pavilion</h1>

          {/* One-liner */}
          <span className="hero-mob-subtitle">
            A blank canvas handed to you before the first pour of concrete.
          </span>

          {/* Stats strip — 5 compact columns */}
          <div className="hero-mob-stats-strip">
            {mobStats.map((s, i) => (
              <div
                key={s.label}
                className="hero-mob-stat-cell"
                style={i > 0 ? { borderLeft: "1px solid rgba(0,0,0,0.13)" } : {}}
              >
                <span className="hero-mob-stat-val font-stat">{s.value}</span>
                <span className="hero-mob-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Download Brochure CTA */}
          <button
            onClick={() => openModal("brochure")}
            className="hero-mob-dl-btn btn-primary"
            aria-label="Download The Pavilion brochure — enter your details to receive it"
            data-track="brochure-download-intent"
          >
            Download Brochure
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ marginLeft: "8px", flexShrink: 0 }}
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
        </motion.div>

        {/* Mobile stats bar — replaced by card; keep as empty placeholder */}
        <div className="hero-stats-mobile hidden" aria-hidden="true" />

        {/* ══════════════════════════════════════════
            DESKTOP — floating stats card (lg+)
            Completely unchanged from original.
            ══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          style={{
            background: "var(--hero-stats-bg)",
            border: "1px solid var(--hero-stats-div)",
            boxShadow: "var(--hero-stats-shadow)",
            transition: "background-color 300ms ease, border-color 300ms ease, box-shadow 300ms ease",
          }}
          className="hidden lg:grid lg:grid-cols-5
                     absolute bottom-[-60px] left-1/2 -translate-x-1/2 z-20
                     w-[88%] max-w-[1400px] rounded-[8px]"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="py-6 text-center"
              style={{ borderLeft: i > 0 ? "1px solid var(--hero-stats-div)" : undefined }}
            >
              <p style={{ color: "var(--hero-stats-tx)" }} className="font-stat text-2xl">
                {s.value}
              </p>
              <p style={{ color: "var(--hero-stats-tx2)" }} className="text-xs tracking-wider uppercase mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {modalOpen && (
        <LeadFormModal type={modalType} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
