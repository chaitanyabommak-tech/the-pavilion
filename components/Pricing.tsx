"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import LeadFormModal from "./LeadFormModal";
import { getDb } from "@/lib/supabase";

function track(type: "whatsapp" | "call", source: string) {
  getDb()?.from("interactions").insert({ type, source }).then(() => {});
}

const pricingCards = [
  {
    type: "Type A — East",
    plot: "150 Sq. Yds (30×45)",
    builtup: "2,200 SFT",
    facing: "East Facing",
    price: "₹1.8 Cr – ₹2 Cr",
    priceNote: "Preferred orientation",
    highlight: false,
  },
  {
    type: "Type A — West",
    plot: "150 Sq. Yds (30×45)",
    builtup: "2,200 SFT",
    facing: "West Facing",
    price: "₹1.7 Cr – ₹1.9 Cr",
    priceNote: "Warm evening light",
    highlight: false,
  },
  {
    type: "Type B — NE/NW",
    plot: "165 Sq. Yds (33×45)",
    builtup: "2,400 SFT",
    facing: "NE / NW Facing",
    price: "₹1.9 Cr – ₹2.1 Cr",
    priceNote: "Most popular",
    highlight: true,
  },
  {
    type: "Type B — East",
    plot: "167 Sq. Yds (30×50)",
    builtup: "2,500 SFT",
    facing: "East Facing",
    price: "₹2.1 Cr – ₹2.25 Cr",
    priceNote: "Deeper 50 ft plot",
    highlight: false,
  },
  {
    type: "Type C",
    plot: "222–250 Sq. Yds",
    builtup: "2,500 SFT",
    facing: "East / West",
    price: "₹2.25 Cr – ₹2.75 Cr",
    priceNote: "Largest in community",
    highlight: false,
  },
];

export default function Pricing() {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <section className="py-24 bg-charcoal" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-16"
          >
            <p className="text-stone-beige text-xs tracking-[0.4em] uppercase mb-4">
              Pricing — W.E.F. 2024–25
            </p>
            <h2 className="font-heading text-off-white text-5xl font-light leading-tight">
              Villa Pricing
              <br />
              <span className="italic text-stone-beige">& Booking</span>
            </h2>
            <div className="w-12 h-px bg-muted-gold mt-6" />
          </motion.div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {pricingCards.map((card, i) => (
              <motion.div
                key={card.type}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative p-8 border transition-all duration-300 premium-card ${
                  card.highlight
                    ? "bg-off-white border-muted-gold"
                    : "bg-charcoal-light border-white/10 hover:border-white/20"
                }`}
              >
                {card.highlight && (
                  <span className="absolute top-4 right-4 bg-muted-gold text-charcoal text-[10px] font-bold px-2 py-1 tracking-widest uppercase">
                    Popular
                  </span>
                )}

                <p
                  className={`text-xs tracking-[0.3em] uppercase mb-3 ${
                    card.highlight ? "text-warm-gray" : "text-stone-beige/60"
                  }`}
                >
                  {card.priceNote}
                </p>

                <h3
                  className={`font-heading text-2xl font-medium mb-4 ${
                    card.highlight ? "text-charcoal" : "text-off-white"
                  }`}
                >
                  {card.type}
                </h3>

                <p
                  className={`font-stat text-4xl mb-6 ${
                    card.highlight ? "text-forest-green" : "text-muted-gold"
                  }`}
                >
                  {card.price}
                </p>

                <div
                  className={`divide-y ${
                    card.highlight ? "divide-stone-beige-light" : "divide-white/10"
                  } mb-6`}
                >
                  {[
                    { label: "Plot", value: card.plot },
                    { label: "Built-up", value: card.builtup },
                    { label: "Facing", value: card.facing },
                    { label: "Type", value: "G+1+Penthouse" },
                  ].map((row) => (
                    <div key={row.label} className="py-3 flex justify-between">
                      <span
                        className={`text-xs uppercase tracking-wide ${
                          card.highlight ? "text-warm-gray" : "text-stone-beige/60"
                        }`}
                      >
                        {row.label}
                      </span>
                      <span
                        className={`text-sm ${
                          card.highlight ? "text-charcoal" : "text-off-white"
                        }`}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setModalOpen(true)}
                  className={`w-full py-3 text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                    card.highlight
                      ? "bg-forest-green text-off-white hover:bg-forest-green-light"
                      : "border border-white/30 text-off-white hover:bg-off-white/10"
                  }`}
                >
                  Check Availability
                </button>
              </motion.div>
            ))}
          </div>

          {/* Booking info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/10 pt-10"
          >
            <div>
              <p className="font-stat text-muted-gold text-3xl mb-1">
                ₹2 Lakhs
              </p>
              <p className="text-stone-beige text-xs uppercase tracking-widest">Booking Advance Only</p>
              <p className="text-stone-beige/60 text-sm mt-2">
                Book your property at just 1%. Balance on construction milestones.
              </p>
            </div>
            <div>
              <p className="font-heading text-off-white text-xl font-light mb-1">
                Bank Loans Available
              </p>
              <p className="text-stone-beige/60 text-sm mt-2">
                SBI · HDFC · ICICI · KVB · LIC Housing Finance
              </p>
            </div>
            <div>
              <p className="font-heading text-off-white text-xl font-light mb-1">
                6-Month Completion
              </p>
              <p className="text-stone-beige/60 text-sm mt-2">
                Project completion within 6 months after advance payment.
              </p>
            </div>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-muted-gold hover:bg-muted-gold-light text-charcoal font-semibold px-8 py-4 text-sm tracking-[0.15em] uppercase transition-colors"
            >
              Book Site Visit
            </button>
            <a
              href="https://wa.me/919676077142"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp", "pricing")}
              className="border border-white/30 text-off-white hover:bg-off-white/10 px-8 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300"
            >
              WhatsApp for Pricing
            </a>
          </div>
        </div>
      </section>

      {modalOpen && (
        <LeadFormModal type="visit" onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
