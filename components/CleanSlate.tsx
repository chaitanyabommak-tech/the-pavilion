"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import LeadFormModal from "./LeadFormModal";

const steps = [
  {
    step: "01",
    title: "Initial Understanding",
    body: "Our engineers begin by understanding how you want to live. This initial stage is about listening closely to your preferences, room expectations, family use-cases, and design priorities before any decisions are frozen.",
  },
  {
    step: "02",
    title: "Elevation & Room Configuration",
    body: "Once your requirements are understood, the next stage focuses on translating them into practical design decisions. Room sizes, internal divisions, layout adjustments, and certain elevation preferences can be aligned to your vision while staying within the project's structural framework.",
    features: [
      "Customize room proportions",
      "Rework internal divisions",
      "Convert home theater into an additional bedroom if desired",
      "Adapt a 3BHK-style approach into a more customized 4BHK-style solution where feasible",
      "Tailor the internal planning to your priorities"
    ]
  },
  {
    step: "03",
    title: "Plan Freeze According to Your Vision",
    body: "After the design direction and internal preferences are aligned, the final plan is frozen according to the customer's approved vision. This ensures clarity, confidence, and a more personalized outcome for the final home.",
  },
];

export default function CleanSlate() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="clean-slate"
        className="py-16 md:py-24 overflow-hidden"
        ref={ref}
        style={{ background: "var(--surface)", transition: "background-color 300ms ease" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <p style={{ color: "var(--accent)" }} className="text-xs tracking-[0.4em] uppercase mb-4 font-medium">
              The Clean Slate
            </p>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Designed For You,
              <br />
              <span style={{ color: "var(--ink-3)" }} className="italic">By You</span>
            </h2>
            <div className="w-12 h-px mx-auto mb-8" style={{ background: "var(--accent)" }} />

            <p style={{ color: "var(--ink-2)" }} className="text-lg sm:text-xl leading-relaxed mb-4">
              A villa community where your home is not forced into a cookie-cutter layout.
            </p>
            <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed max-w-3xl mx-auto">
              At The Pavilion, we believe a home should reflect the people who live in it. The Clean Slate is our buyer-personalization approach, where the structural framework remains strong, while the internal planning and lifestyle choices are shaped around your vision.
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg">
              <Image
                src="/images/pavilion/exteriors/villa-front-elevation-02.jpg"
                alt="The Pavilion villa showcasing The Clean Slate customization possibilities"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
                quality={90}
                priority
              />
            </div>
          </motion.div>

          {/* 3-Step Process Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light text-center mb-12">
              The Clean Slate <span style={{ color: "var(--ink-3)" }} className="italic">Process</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="relative p-8 rounded-lg"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--edge)",
                    transition: "all 300ms ease"
                  }}
                >
                  {/* Step Number Badge */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "var(--accent)", color: "white" }}
                  >
                    <span className="font-heading text-xl font-medium">{s.step}</span>
                  </div>

                  {/* Title */}
                  <h4 style={{ color: "var(--ink)" }} className="font-heading text-xl font-medium mb-3 leading-tight">
                    {s.title}
                  </h4>

                  {/* Body */}
                  <p style={{ color: "var(--ink-2)" }} className="text-sm leading-relaxed mb-4">
                    {s.body}
                  </p>

                  {/* Features (Step 02 only) */}
                  {'features' in s && s.features && (
                    <ul className="space-y-2 mt-6 pt-6 border-t" style={{ borderColor: "var(--edge)" }}>
                      {s.features.map((feature: string) => (
                        <li key={feature} style={{ color: "var(--ink-2)" }} className="flex items-start gap-2 text-xs">
                          <span style={{ color: "var(--accent)" }} className="mt-0.5 shrink-0">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Content - Benefits & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "A villa community with real personalization",
                "Not a cookie-cutter villa project",
                "The RCC structure remains stable, lifestyle choices become personal",
                "Your preferences shape the home",
                "Premium customization process for discerning buyers",
                "Built around the way you want to live",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-lg text-left"
                  style={{ background: "var(--bg)" }}
                >
                  <span style={{ color: "var(--accent)" }} className="mt-1 shrink-0 text-lg">—</span>
                  <span style={{ color: "var(--ink-2)" }} className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mb-8">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-primary px-10 py-4 text-sm tracking-[0.2em] uppercase"
              >
                Explore The Clean Slate
              </button>
            </div>

            {/* Tagline */}
            <div className="pt-8 border-t" style={{ borderColor: "var(--edge)" }}>
              <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed">
                A level of personalization typically associated with highly bespoke homes.
              </p>
              <p style={{ color: "var(--ink-3)" }} className="font-heading text-xl italic mt-3">
                The new evolution of Mera Ghar Mera Marzi.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {modalOpen && (
        <LeadFormModal type="enquire" onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
