"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const advantages = [
  {
    number: "01",
    title: "Zero Shared Walls",
    body: "Complete acoustic and visual privacy. Your villa stands alone on all four sides.",
  },
  {
    number: "02",
    title: "Open Facades",
    body: "Better natural light and cross-ventilation on every floor due to open exterior on all sides.",
  },
  {
    number: "03",
    title: "Private Setbacks",
    body: "Landscaped space around your home, not just inside it. Your own garden and boundary.",
  },
  {
    number: "04",
    title: "Low-Density Living",
    body: "Only 40 families across 3 acres. The density is low by design for a calm, private lifestyle.",
  },
  {
    number: "05",
    title: "Gated Infrastructure",
    body: "Roads, security, water, drainage, recreation, and managed common spaces — all included.",
  },
];

export default function StandaloneAdvantage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-off-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-xl mb-16"
        >
          <p className="text-warm-gray text-xs tracking-[0.4em] uppercase mb-4">
            Why Standalone
          </p>
          <h2 className="font-heading text-charcoal text-5xl font-light leading-tight">
            No shared walls.
            <br />
            <span className="text-forest-green italic">No compromises.</span>
          </h2>
          <div className="w-12 h-px bg-muted-gold mt-6" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="premium-card bg-cream border border-stone-beige-light p-8 group"
            >
              <span className="font-heading text-stone-beige text-4xl font-light group-hover:text-forest-green transition-colors duration-300">
                {adv.number}
              </span>
              <h3 className="font-heading text-charcoal text-2xl font-medium mt-4 mb-3">
                {adv.title}
              </h3>
              <div className="w-8 h-px bg-muted-gold mb-4 group-hover:w-16 transition-all duration-500" />
              <p className="text-warm-gray text-sm leading-relaxed">{adv.body}</p>
            </motion.div>
          ))}

          {/* Sixth card — CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-forest-green p-8 flex flex-col justify-between"
          >
            <div>
              <p className="text-stone-beige text-xs tracking-[0.3em] uppercase mb-4">
                Only 40 Families
              </p>
              <h3 className="font-heading text-off-white text-2xl font-light leading-relaxed">
                Limited by design. Unlimited by freedom.
              </h3>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-block border border-muted-gold text-muted-gold-light hover:bg-muted-gold hover:text-charcoal text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300 self-start"
            >
              Check Availability
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
