"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import LeadFormModal from "./LeadFormModal";

const documents = [
  {
    icon: "✓",
    title: "Approved Layout",
    body: "Layout approved with all necessary permissions from competent authorities.",
  },
  {
    icon: "✓",
    title: "Pahani",
    body: "Land revenue records and Pahani available for verification.",
  },
  {
    icon: "✓",
    title: "Partition Deeds",
    body: "Clear partition deeds establishing ownership lineage.",
  },
  {
    icon: "✓",
    title: "GPA",
    body: "General Power of Attorney documents available.",
  },
  {
    icon: "✓",
    title: "Market Value Documents",
    body: "All market value and encumbrance certificates in order.",
  },
  {
    icon: "✓",
    title: "Bank Loan Support",
    body: "Pre-approved by SBI, HDFC, ICICI, KVB, and LIC Housing Finance.",
  },
  {
    icon: "✓",
    title: "Dedicated Project Team",
    body: "Sales, legal, and construction teams available for buyer assistance.",
  },
  {
    icon: "✓",
    title: "HMDA Registration",
    body: "Registered HMDA Circle Project. Regulatory compliance in place.",
  },
];

export default function TrustDocuments() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-off-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-16"
          >
            <p className="text-warm-gray text-xs tracking-[0.4em] uppercase mb-4">
              Transparency First
            </p>
            <h2 className="font-heading text-charcoal text-5xl font-light leading-tight">
              Documents.
              <br />
              <span className="italic text-forest-green">Permissions. Loan Support.</span>
            </h2>
            <div className="w-12 h-px bg-muted-gold mt-6" />
          </motion.div>

          {/* Document cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {documents.map((doc, i) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="premium-card bg-cream border border-stone-beige-light p-6"
              >
                <div className="w-8 h-8 rounded-full bg-forest-green/10 flex items-center justify-center mb-4">
                  <span className="text-forest-green text-sm font-bold">{doc.icon}</span>
                </div>
                <h3 className="font-heading text-charcoal text-lg font-medium mb-2">
                  {doc.title}
                </h3>
                <p className="text-warm-gray text-sm leading-relaxed">{doc.body}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 bg-forest-green p-8 md:p-10"
          >
            <div>
              <p className="font-heading text-off-white text-2xl font-light mb-1">
                Complete document package available on request.
              </p>
              <p className="text-stone-beige text-sm">
                Our team will share all verification documents directly with you.
              </p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="shrink-0 bg-muted-gold hover:bg-muted-gold-light text-charcoal font-semibold px-8 py-4 text-sm tracking-[0.15em] uppercase transition-colors"
            >
              Request Documents
            </button>
          </motion.div>
        </div>
      </section>

      {modalOpen && (
        <LeadFormModal type="enquire" onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
