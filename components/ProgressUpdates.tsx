"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { getDb } from "@/lib/supabase";

function track(type: "whatsapp" | "call", source: string) {
  getDb()?.from("interactions").insert({ type, source }).then(() => {});
}

const updates = [
  {
    category: "Site Progress",
    status: "Active",
    statusColor: "bg-forest-green",
    description:
      "Site levelling and boundary work in progress. Regular updates posted via WhatsApp group for buyers.",
    date: "May 2025",
  },
  {
    category: "Road & Infrastructure",
    status: "Upcoming",
    statusColor: "bg-muted-gold",
    description:
      "BT road laying and underground drainage system planned for the next phase following plot demarcation.",
    date: "Q3 2025",
  },
  {
    category: "Villa Construction",
    status: "On Booking",
    statusColor: "bg-stone-beige",
    description:
      "Construction begins after booking advance. Each villa follows The Clean Slate timeline — independent and owner-designed.",
    date: "Post Booking",
  },
  {
    category: "Amenities Zone",
    status: "Design Phase",
    statusColor: "bg-muted-gold",
    description:
      "30,000 SFT recreation and clubhouse zone design finalized. Construction to begin alongside villa phase.",
    date: "Q4 2025",
  },
  {
    category: "Buyer Updates",
    status: "WhatsApp",
    statusColor: "bg-[#25D366]",
    description:
      "All buyers receive regular construction updates, design approvals, and milestone notifications via dedicated WhatsApp group.",
    date: "Ongoing",
  },
];

export default function ProgressUpdates() {
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
            Construction Updates
          </p>
          <h2 className="font-heading text-charcoal text-5xl font-light leading-tight">
            The Pavilion,
            <br />
            <span className="italic text-forest-green">as it unfolds.</span>
          </h2>
          <div className="w-12 h-px bg-muted-gold mt-6 mb-4" />
          <p className="text-warm-gray text-base">
            Trust grows with transparency. Follow construction progress, design
            decisions, amenity updates, and availability as the community takes shape.
          </p>
        </motion.div>

        {/* Update cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((update, i) => (
            <motion.div
              key={update.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="premium-card bg-off-white border border-stone-beige-light p-7"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-heading text-charcoal text-xl font-medium">
                  {update.category}
                </h3>
                <span
                  className={`${update.statusColor} text-[10px] text-white px-2.5 py-1 tracking-widest uppercase`}
                >
                  {update.status}
                </span>
              </div>
              <div className="w-8 h-px bg-muted-gold mb-4" />
              <p className="text-warm-gray text-sm leading-relaxed mb-4">
                {update.description}
              </p>
              <p className="text-muted-gold text-xs tracking-wider uppercase">
                {update.date}
              </p>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp updates CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="https://wa.me/919676077142"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp", "progress_updates")}
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 text-sm tracking-[0.15em] uppercase transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Get Construction Updates
          </a>
        </motion.div>
      </div>
    </section>
  );
}
