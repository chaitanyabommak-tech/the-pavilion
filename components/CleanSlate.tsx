"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import LeadFormModal from "./LeadFormModal";

const steps = [
  {
    step: "01",
    title: "Initial Understanding",
    body: "The process begins with a detailed conversation between you and our engineering team. We understand your family's needs, lifestyle patterns, space expectations, and personal priorities before any decisions are frozen.",
  },
  {
    step: "02",
    title: "Elevation & Room Configuration",
    body: "Once your requirements are understood, we translate them into practical design decisions. Room sizes, internal divisions, layout adjustments, and elevation preferences are aligned to your vision within the structural framework.",
    features: [
      "Customize room proportions",
      "Rework internal divisions",
      "Convert spaces based on your needs",
      "Adapt 3BHK to customized 4BHK where feasible",
      "Tailor internal planning to your priorities"
    ]
  },
  {
    step: "03",
    title: "Plan Freeze According to Your Vision",
    body: "After the design direction and internal preferences are aligned, the final plan is frozen according to your approved vision. This ensures clarity, confidence, and a truly personalized outcome.",
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
                The Clean Slate
              </p>
              <h2 className="font-heading text-off-white text-5xl md:text-6xl font-light leading-tight mb-4">
                Designed For You,
                <br />
                By You
              </h2>
              <p className="font-heading text-stone-beige text-2xl italic mb-6">
                A villa community where your home is not forced into a cookie-cutter layout.
              </p>
              <div className="w-12 h-px bg-muted-gold mb-8" />

              <p className="text-stone-beige/80 text-base leading-relaxed mb-6">
                At The Pavilion, we believe a home should reflect the people who live in it. The Clean Slate is our buyer-personalization approach, where the structural framework remains strong, while the internal planning and lifestyle choices are shaped around your vision.
              </p>
              <p className="text-stone-beige/80 text-base leading-relaxed mb-8">
                From room configurations to layout preferences and refined design decisions, your home is developed with genuine flexibility from the start.
              </p>

              {/* USP list */}
              <ul className="space-y-3 mb-10">
                {[
                  "A villa community with real personalization",
                  "Not a cookie-cutter villa project",
                  "The RCC structure remains stable, lifestyle choices become personal",
                  "Your preferences shape the home",
                  "Premium customization process for discerning buyers",
                  "Built around the way you want to live",
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
              <p className="font-heading text-stone-beige text-lg mt-10 leading-relaxed">
                A level of personalization typically associated with highly bespoke homes.<br />
                <span className="italic text-xl mt-2 inline-block">The new evolution of Mera Ghar Mera Marzi.</span>
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
                    {'features' in s && s.features && (
                      <ul className="mt-4 space-y-2">
                        {s.features.map((feature: string) => (
                          <li key={feature} className="flex items-start gap-2 text-stone-beige/60 text-xs">
                            <span className="text-muted-gold mt-0.5">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
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
