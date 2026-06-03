"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const floors = [
  {
    level: "Ground Floor",
    subtitle: "Daily Living",
    icon: "■",
    color: "bg-forest-green",
    rooms: [
      "Covered Car Parking — private and dedicated",
      "Living Room with large windows for natural light",
      "1 Bedroom with attached Bathroom (for elders / guests)",
      "Modular Kitchen with jet-black Karimnagar granite",
      "Dining Area",
      "Utility / Store Room & Wash Area",
    ],
  },
  {
    level: "First Floor",
    subtitle: "Private Family Space",
    icon: "■",
    color: "bg-forest-green-light",
    rooms: [
      "Master Bedroom with attached Bathroom & wardrobe provisions",
      "Second Bedroom with attached Bathroom and Balcony",
      "Family Lounge — flexible reading, TV, or gathering space",
      "Pooja Room — 4.5 × 5 ft, 100% Vastu-compliant",
    ],
  },
  {
    level: "Penthouse",
    subtitle: "Your Private Third Floor",
    icon: "■",
    color: "bg-muted-gold",
    rooms: [
      "Home Theatre — dedicated cinematic entertainment room",
      "Private Home Bar — your own lounge space",
      "Open Terrace — garden, barbecue area, or open-air sitting",
      "Full Bathroom on every level",
    ],
    special: "Most villa projects in this corridor do not offer a dedicated third level. At The Pavillion, every family gets one.",
  },
];

export default function VillaLife() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-warm-gray text-xs tracking-[0.4em] uppercase mb-4">
            Villa Layout
          </p>
          <h2 className="font-heading text-charcoal text-5xl font-light leading-tight">
            Three levels.
            <br />
            <span className="italic text-forest-green">One independent home.</span>
          </h2>
          <div className="w-12 h-px bg-muted-gold mt-6 mb-4" />
          <p className="text-warm-gray text-base">
            Every villa is a three-level residence — Ground Floor, First Floor, and
            Penthouse — offering 2,200 to 2,500 SFT. Each floor has a clear purpose.
          </p>
        </motion.div>

        {/* Floor cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {floors.map((floor, i) => (
            <motion.div
              key={floor.level}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-off-white border border-stone-beige-light overflow-hidden"
            >
              {/* Floor header */}
              <div className={`${floor.color} px-8 py-6`}>
                <p className="text-white/70 text-xs tracking-[0.3em] uppercase mb-1">
                  {floor.subtitle}
                </p>
                <h3 className="font-heading text-white text-3xl font-light">
                  {floor.level}
                </h3>
              </div>

              {/* Rooms */}
              <div className="p-8">
                <ul className="space-y-3">
                  {floor.rooms.map((room) => (
                    <li key={room} className="flex items-start gap-3 text-warm-gray text-sm leading-relaxed">
                      <span className="text-muted-gold shrink-0 text-xs mt-1.5">—</span>
                      {room}
                    </li>
                  ))}
                </ul>

                {floor.special && (
                  <div className="mt-6 p-4 bg-muted-gold/10 border-l-2 border-muted-gold">
                    <p className="text-charcoal text-xs leading-relaxed italic">
                      {floor.special}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-stone-beige-light pt-10"
        >
          <p className="font-heading text-charcoal text-2xl font-light italic">
            3 BHK + Pooja Room + Home Theatre. No shared walls.
          </p>
          <a
            href="#villa-plans"
            className="shrink-0 border border-forest-green text-forest-green hover:bg-forest-green hover:text-off-white px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300"
          >
            Explore Villa Plans
          </a>
        </motion.div>
      </div>
    </section>
  );
}
