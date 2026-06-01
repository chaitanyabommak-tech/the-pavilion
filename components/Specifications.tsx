"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const specs = [
  {
    category: "Structure",
    items: [
      { item: "Frame", spec: "RCC Framed, 53 Grade Cement Concrete" },
      { item: "Cement", spec: "UltraTech / Birla A1" },
      { item: "Steel", spec: "Jayraj TMT Steel" },
    ],
  },
  {
    category: "Walls & Plastering",
    items: [
      { item: "Inner Walls", spec: '4.5" thickness, light bricks / solid concrete blocks' },
      { item: "Outer Walls", spec: '9" thickness, superior thermal insulation' },
      { item: "Plaster", spec: "2-coat plaster, sponge finish — Birla A1 or equivalent" },
      { item: "Putty Finish", spec: "External & internal with putty finish — JSW or equivalent" },
    ],
  },
  {
    category: "Flooring",
    items: [
      { item: "Living / Hall", spec: "Vitrified 4×2 ft — not less than ₹60/SFT" },
      { item: "Bedrooms", spec: "Vitrified 6×4 ft — premium grade" },
      { item: "Bathrooms", spec: "Anti-skid ceramic tiles" },
      { item: "Car Parking", spec: "Parking tiles, paver grade" },
    ],
  },
  {
    category: "Doors & Windows",
    items: [
      { item: "Main Door", spec: "Teak frame with teak shutter — BT Teak" },
      { item: "Internal Doors", spec: "Teak frame with flush door — African Teak" },
      { item: "Windows", spec: "UPVC / Teak glazed shutters with MS grills & SS hardware" },
    ],
  },
  {
    category: "Kitchen",
    items: [
      { item: "Platform", spec: "Jet-black Karimnagar Granite" },
      { item: "Sink", spec: "SS sink" },
      { item: "Dado", spec: "Ceramic dado up to 3 ft height" },
    ],
  },
  {
    category: "Toilets & Sanitary",
    items: [
      { item: "WC", spec: "Indian WC + EWC (Master Bedroom) — Hindware / Cera" },
      { item: "Dado", spec: "Ceramic dado up to 8 ft with waterproofing" },
      { item: "CP Fittings", spec: "Hindware / Cera or equivalent" },
      { item: "Wash Basins", spec: "In all toilets — Hindware / Cera" },
    ],
  },
  {
    category: "Electrical",
    items: [
      { item: "Wiring", spec: "Finolex copper concealed wiring, PVC conduit" },
      { item: "Power Points", spec: "15A power points in all rooms" },
      { item: "Geyser / AC", spec: "Geyser & AC points in all bedrooms" },
    ],
  },
  {
    category: "Painting",
    items: [
      { item: "Internal", spec: "Putty + plastic emulsion — Asian Paints / Berger" },
      { item: "External", spec: "Weatherproof paint — Asian Paints / Berger equivalent" },
    ],
  },
  {
    category: "False Ceiling & Railings",
    items: [
      { item: "False Ceiling", spec: "All rooms — Gypsum / Jindal Channel, 1 ft gap" },
      { item: "SS Railings", spec: "Steel railings with SS handle — Staircase & Balcony — Jindal Steel" },
      { item: "Lights", spec: "White lights with false ceiling — Anchor brand" },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { item: "Car Parking", spec: "Covered, minimum 14 × 13 ft — dedicated per villa" },
      { item: "Compound Wall", spec: "Individual compound wall & gate, 5.5 ft height" },
      { item: "Roads", spec: "BT (Black Top) road throughout community" },
      { item: "Drainage", spec: "Underground drainage system" },
      { item: "Water", spec: "Overhead water tank; private waterline / municipal" },
    ],
  },
];

export default function Specifications() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="specifications" className="py-24 bg-off-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-warm-gray text-xs tracking-[0.4em] uppercase mb-4">
            Construction Quality
          </p>
          <h2 className="font-heading text-charcoal text-5xl font-light leading-tight">
            Built to last.
            <br />
            <span className="italic text-forest-green">Specified to detail.</span>
          </h2>
          <div className="w-12 h-px bg-muted-gold mt-6" />
        </motion.div>

        {/* Accordion */}
        <div className="space-y-2 max-w-4xl">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.category}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="border border-stone-beige-light bg-cream"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className="font-heading text-charcoal text-xl font-medium group-hover:text-forest-green transition-colors">
                  {spec.category}
                </span>
                <span
                  className={`text-muted-gold text-xl transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-stone-beige-light">
                      <table className="w-full mt-4">
                        <tbody>
                          {spec.items.map((row) => (
                            <tr
                              key={row.item}
                              className="border-b border-stone-beige-light/50 last:border-0"
                            >
                              <td className="py-3 pr-6 text-warm-gray text-xs uppercase tracking-wide w-40 align-top">
                                {row.item}
                              </td>
                              <td className="py-3 text-charcoal text-sm leading-relaxed">
                                {row.spec}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
