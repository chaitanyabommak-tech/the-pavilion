"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import LeadFormModal from "./LeadFormModal";

const steps = [
  {
    step: "01",
    title: "Structural Shell Delivered",
    body: "We deliver a fully built G+1+Penthouse RCC frame with slabs, staircase, external walls, and utility connections.",
  },
  {
    step: "02",
    title: "Open Slab on Each Floor",
    body: "You receive a clean, open slab on every floor — unpartitioned and ready for your layout.",
  },
  {
    step: "03",
    title: "You Decide the Internal Layout",
    body: "Room sizes, wall placements, bathroom positions, kitchen orientation — all decided by you.",
  },
  {
    step: "04",
    title: "You Choose Your Elevation",
    body: "Facade design, materials, colour palette, cladding. Your home's exterior is entirely your decision.",
  },
  {
    step: "05",
    title: "Dedicated Engineer Assigned",
    body: "A dedicated engineer is assigned to your villa alone — not shared — who translates your plan into construction.",
  },
  {
    step: "06",
    title: "Your Home Is Built",
    body: "Executed to your exact specifications using premium materials and Vastu guidance. You design. We build.",
  },
];

export default function CleanSlate() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-charcoal overflow-hidden" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-stone-beige text-xs tracking-[0.4em] uppercase mb-4">
                The Strongest USP
              </p>
              <h2 className="font-heading text-off-white text-5xl md:text-6xl font-light leading-tight mb-4">
                The Clean Slate
              </h2>
              <p className="font-heading text-stone-beige text-2xl italic mb-6">
                Your canvas. Your walls. Your elevation. Your home.
              </p>
              <div className="w-12 h-px bg-muted-gold mb-8" />

              <p className="text-stone-beige/80 text-base leading-relaxed mb-6">
                Most builders hand over a finished home. The walls are fixed. The rooms are
                decided. You accept someone else's layout.
              </p>
              <p className="text-stone-beige/80 text-base leading-relaxed mb-8">
                At The Pavillion, we deliver the structural shell and help you design
                every room, every wall, and your entire exterior elevation with our
                in-house engineers. No two homes need to look the same.
              </p>

              {/* USP list */}
              <ul className="space-y-3 mb-10">
                {[
                  "A dedicated engineer for your villa alone",
                  "Your own design timeline — not mass handover",
                  "Full choice of internal layout",
                  "Full choice of elevation and facade",
                  "Direct input on every design decision",
                  "Hands-free execution — you design, we build",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-beige/80 text-sm">
                    <span className="text-muted-gold mt-1 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-muted-gold hover:bg-muted-gold-light text-charcoal font-semibold px-8 py-4 text-sm tracking-[0.15em] uppercase transition-colors duration-300"
                >
                  Explore The Clean Slate
                </button>
              </div>

              {/* Tagline */}
              <p className="font-heading text-off-white text-3xl italic mt-10">
                Mera Ghar, Mera Marzi.
              </p>
            </motion.div>

            {/* Right — steps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0">
                    <span className="font-heading text-muted-gold text-2xl font-light">
                      {s.step}
                    </span>
                    {i < steps.length - 1 && (
                      <div className="w-px h-10 bg-white/10 mx-auto mt-2" />
                    )}
                  </div>
                  <div className="border-l border-white/10 pl-6 pb-2">
                    <h3 className="font-heading text-off-white text-xl font-medium mb-1">
                      {s.title}
                    </h3>
                    <p className="text-stone-beige/70 text-sm leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <LeadFormModal type="enquire" onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
