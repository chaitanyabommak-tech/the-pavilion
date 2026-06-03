"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { getDb } from "@/lib/supabase";

function track(type: "whatsapp" | "call", source: string) {
  getDb()?.from("interactions").insert({ type, source }).then(() => {});
}
import LeadFormModal from "./LeadFormModal";

const projectFacts = [
  { label: "Developer", value: "Bommak Constructions" },
  { label: "Registration", value: "Registered HMDA Circle Project" },
  { label: "Location", value: "Surya Hills, Boduppal, East Hyderabad" },
  { label: "Total Site Area", value: "3 Acres" },
  { label: "Total Villas", value: "45 Standalone Units" },
  { label: "Villa Type", value: "G+1+Penthouse Standalone" },
  { label: "Built-up Area", value: "2,200 – 2,500 SFT" },
  { label: "Plot Sizes", value: "150 | 165 | 167 | 183 | 222–250 Sq. Yards" },
  { label: "Internal Roads", value: "30 ft Main · 25 ft Internal · 33 ft Entry" },
  { label: "Vastu", value: "100% Vastu-Compliant Planning" },
  {
    label: "Bank Loans",
    value: "SBI · HDFC · ICICI · KVB · LIC Housing Finance",
  },
];

export default function ProjectOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="overview" className="py-24 bg-cream" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — editorial copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="text-warm-gray text-xs tracking-[0.4em] uppercase mb-4">
                About the Project
              </p>
              <h2 className="font-heading text-charcoal text-5xl md:text-6xl font-light leading-tight mb-6">
                Not mass housing.
                <br />
                <span className="text-forest-green italic">Curated living.</span>
              </h2>
              <div className="w-12 h-px bg-muted-gold mb-8" />

              <p className="text-warm-gray text-lg leading-relaxed mb-6">
                The Pavillion is not mass housing. It is a limited standalone villa
                community designed for 45 families who want privacy, control, and
                the freedom to shape their own home.
              </p>
              <p className="text-warm-gray text-base leading-relaxed mb-6">
                Positioned in Surya Hills, Boduppal — at the centre of East
                Hyderabad's essential services and growth corridor — The Pavillion
                combines independent living with community living infrastructure.
              </p>
              <p className="text-warm-gray text-base leading-relaxed mb-10">
                After delivering R.N.S Dream Homes, Boduppal's first community living
                destination for 120 families, Bommak Constructions now brings The
                Pavilion: a smaller, more curated chapter. Limited to 45 families.
                Limited by design.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setModalOpen(true)}
                  className="bg-forest-green hover:bg-forest-green-light text-off-white px-8 py-4 text-sm tracking-[0.15em] uppercase transition-colors duration-300"
                >
                  Book Site Visit
                </button>
                <a
                  href="https://wa.me/919676077142"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp", "project_overview")}
                  className="border border-forest-green text-forest-green hover:bg-forest-green hover:text-off-white px-8 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* Right — project facts */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-off-white border border-stone-beige-light"
            >
              <div className="p-8">
                <p className="text-warm-gray text-xs tracking-[0.3em] uppercase mb-6">
                  Project Details
                </p>
                <div className="divide-y divide-stone-beige-light">
                  {projectFacts.map((f) => (
                    <div key={f.label} className="py-4 grid grid-cols-5 gap-4">
                      <span className="col-span-2 text-warm-gray text-xs tracking-wide uppercase">
                        {f.label}
                      </span>
                      <span className="col-span-3 text-charcoal text-sm font-medium">
                        {f.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <LeadFormModal type="visit" onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
