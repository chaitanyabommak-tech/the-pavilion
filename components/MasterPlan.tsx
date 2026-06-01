"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const labels = [
  { label: "30 ft Wide Road",       position: { top: "8%", left: "28%" }  },
  { label: "33 ft Entry Road",       position: { top: "10%", right: "12%" } },
  { label: "25 ft Internal Roads",   position: { top: "45%", left: "28%" }  },
  { label: "Villa Clusters A–I",     position: { top: "40%", left: "45%" }  },
  { label: "Recreational Space",     position: { top: "60%", right: "20%" } },
  { label: "Pool & Cabanas",         position: { bottom: "30%", right: "22%" } },
  { label: "Pickleball Court",       position: { top: "25%", right: "15%" } },
  { label: "Clubhouse Zone",         position: { bottom: "22%", right: "18%" } },
];

export default function MasterPlan() {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section
        id="master-plan"
        ref={ref}
        className="py-10 md:py-14"
        style={{ background: "var(--surface)", transition: "background-color 300ms ease" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mplan-header flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6 md:mb-8"
          >
            <div>
              <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-3">
                Site Layout
              </p>
              <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light">
                Master Plan
              </h2>
              <div className="w-12 h-px mt-4" style={{ background: "var(--accent)" }} />
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="btn-primary w-full md:w-auto px-6 py-3 text-xs tracking-[0.2em] uppercase text-center"
            >
              View Full Master Plan
            </button>
          </motion.div>

          {/* Plan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <div
              className="w-full aspect-[16/9] md:aspect-[2/1] bg-cover bg-center relative md:max-h-[52vh]"
              style={{ backgroundImage: "url('/assets/master-plan.png')", background: "url('/assets/master-plan.png') center/cover, var(--img-ph)" }}
              role="img"
              aria-label="Master plan layout of The Pavilion, Surya Hills Boduppal"
            >
              {labels.map((l) => (
                <div key={l.label} className="absolute hidden md:flex" style={l.position}>
                  <div className="bg-black/80 text-[#EDE8E3] text-[10px] px-3 py-1.5 tracking-wide whitespace-nowrap backdrop-blur-sm">
                    {l.label}
                  </div>
                </div>
              ))}
              <div className="absolute bottom-4 right-4 bg-black/60 text-[#EDE8E3] text-xs px-3 py-2 flex items-center gap-2 hover:bg-black/80 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
                </svg>
                Click to expand
              </div>
            </div>
          </motion.div>

          {/* Mobile quick labels */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2.5 md:hidden">
            {labels.slice(0, 4).map((l) => (
              <div
                key={l.label}
                style={{ background: "var(--card)", border: "1px solid var(--edge)" }}
                className="px-3 py-2"
              >
                <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-wide">{l.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[8000] bg-black/97 flex items-center justify-center p-4"
            onClick={() => setModalOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-[#EDE8E3] text-3xl hover:text-muted-gold transition-colors"
              onClick={() => setModalOpen(false)}
              aria-label="Close master plan"
            >×</button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full aspect-[16/9] bg-cover bg-center relative bg-[#1A1A1A]"
                style={{ backgroundImage: "url('/assets/master-plan.png')" }}
                role="img"
                aria-label="Master plan layout of The Pavilion"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="font-heading text-4xl text-[#9A8F87] font-light">Master Plan</p>
                </div>
              </div>
              <p className="text-[#8A7F78] text-xs text-center mt-4 tracking-widest uppercase">
                The Pavilion — Surya Hills, Boduppal · GPS: 17°24&apos;59.1&quot;N, 78°34&apos;32.2&quot;E
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
