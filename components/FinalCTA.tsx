"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import LeadFormModal from "./LeadFormModal";
import { getDb } from "@/lib/supabase";

function track(type: "whatsapp" | "call", source: string) {
  getDb()?.from("interactions").insert({ type, source }).then(() => {});
}

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modalType, setModalType] = useState<"visit" | "brochure" | "enquire">("visit");
  const [modalOpen, setModalOpen] = useState(false);

  function openModal(type: "visit" | "brochure" | "enquire") {
    setModalType(type);
    setModalOpen(true);
  }

  return (
    <>
      <section
        className="relative py-32 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1C1C1C 0%, #1E3329 50%, #1C1C1C 100%)" }}
        ref={ref}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/assets/pavilion-aerial.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          role="presentation"
        />
        <div className="absolute inset-0 bg-charcoal/60" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <p className="text-stone-beige text-xs tracking-[0.4em] uppercase mb-6">
              The Final Word
            </p>
            <h2 className="font-heading text-off-white text-6xl md:text-8xl font-light leading-none mb-6">
              Only 45 families.
            </h2>
            <p className="font-heading text-muted-gold text-3xl md:text-4xl italic mb-8">
              Limited by design.
            </p>
            <div className="flex justify-center mb-10">
              <div className="w-16 h-px bg-muted-gold" />
            </div>
            <p className="text-stone-beige/90 text-lg leading-relaxed max-w-2xl mx-auto mb-14">
              The Pavilion is for families who want an independent villa, a private
              identity, and the comfort of community living. This is not for everyone.
              It is for 45 families who understand what that means.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openModal("visit")}
                className="bg-muted-gold hover:bg-muted-gold-light text-charcoal font-semibold px-10 py-4 text-sm tracking-[0.2em] uppercase transition-colors duration-300"
              >
                Book Site Visit
              </button>
              <button
                onClick={() => openModal("brochure")}
                className="border border-off-white/40 text-off-white hover:bg-off-white/10 px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300"
              >
                Download Brochure
              </button>
              <a
                href="tel:+919676077142"
                onClick={() => track("call", "final_cta")}
                className="border border-stone-beige/40 text-stone-beige hover:border-muted-gold hover:text-muted-gold px-10 py-4 text-sm tracking-[0.2em] uppercase transition-all duration-300"
              >
                Speak to Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {modalOpen && (
        <LeadFormModal type={modalType} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
