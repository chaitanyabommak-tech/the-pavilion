"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "3", unit: "Acres", label: "Total Site Area" },
  { value: "45", unit: "Villas", label: "Standalone Families" },
  { value: "G+1+PH", unit: "", label: "Villa Configuration" },
  { value: "2,200–2,500", unit: "SFT", label: "Built-up Per Villa" },
  { value: "30,000", unit: "SFT", label: "Recreation Zone" },
  { value: "100%", unit: "", label: "Vastu Compliant" },
];

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-forest-green py-14" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-stat text-off-white text-3xl">
                {s.value}
                {s.unit && (
                  <span className="text-stone-beige text-lg ml-1 font-semibold">{s.unit}</span>
                )}
              </p>
              <div className="w-6 h-px bg-muted-gold mx-auto my-2" />
              <p className="text-stone-beige text-xs tracking-wider uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
