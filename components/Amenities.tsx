"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const amenityGroups = [
  {
    label: "Recreation",
    items: [
      "Infinity Pool with Sunset View",
      "30,000 SFT Recreation Zone",
      "Beach Deck & Cabana Pods",
      "Rooftop Lawn & Function Deck",
      "In-house Coffee Shop (Rooftop)",
    ],
  },
  {
    label: "Sports",
    items: [
      "2 Pickleball Courts",
      "Basketball Court",
      "2 Badminton Courts",
      "Turf Cricket Net Box",
      "Jogging Track & Outdoor Gym",
    ],
  },
  {
    label: "Wellness",
    items: [
      "Indoor Gym & Fitness Centre",
      "Yoga & Meditation Deck",
      "Sauna & Spa",
      "Open Air Jacuzzi",
      "Unisex Salon",
    ],
  },
  {
    label: "Community",
    items: [
      "Ratnadeep Supermarket (10,000 SFT)",
      "Banquet & Multi-Purpose Hall",
      "Library / Business Lounge",
      "Kids Play Area & Crèche",
      "Pet Zone",
    ],
  },
  {
    label: "Convenience",
    items: [
      "Grand Welcome Lounge",
      "Valet Laundry",
      "EV Charging Stations",
      "Key-Card Secure Access",
      "Driver Dormitory",
    ],
  },
  {
    label: "Landscape",
    items: [
      "Zen Garden with Spiral Pathways",
      "Aroma Garden",
      "Hanging Garden",
      "Garden Pergola with Rose Bushes",
      "Outdoor Seating Zones",
    ],
  },
];

export default function Amenities() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="amenities"
      className="py-16 md:py-24"
      style={{ background: "var(--bg)", transition: "background-color 300ms ease" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16"
        >
          <div>
            <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
              Clubhouse &amp; Recreation
            </p>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl font-light">
              30,000 SFT
              <br />
              <span style={{ color: "var(--ink-3)" }} className="italic">Recreation Zone.</span>
            </h2>
            <div className="w-12 h-px mt-6" style={{ background: "var(--accent)" }} />
          </div>
          <p style={{ color: "var(--ink-2)" }} className="text-sm max-w-xs">
            Exclusively for 45 families. Every amenity you need, within the community.
          </p>
        </motion.div>

        {/* Image + amenity list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div
              className="w-full aspect-[4/3] bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/clubhouse-aerial.jpeg')", background: "url('/assets/clubhouse-aerial.jpeg') center/cover, var(--img-ph)" }}
              role="img"
              aria-label="Clubhouse and recreation zone at The Pavillion"
            />
            <div className="mt-4 grid grid-cols-3 gap-px" style={{ background: "var(--gap)" }}>
              {[
                { value: "30,000", label: "Sq.Ft Zone" },
                { value: "45", label: "Families Only" },
                { value: "50+", label: "Amenities" },
              ].map((s) => (
                <div key={s.label} className="py-5 text-center" style={{ background: "var(--stats)" }}>
                  <p style={{ color: "var(--ink)" }} className="font-stat text-2xl">{s.value}</p>
                  <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-wide uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Amenity groups */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="amenity-groups-grid grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {amenityGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
              >
                <p style={{ color: "var(--ink)" }} className="text-xs tracking-[0.3em] uppercase font-medium mb-4 flex items-center gap-2">
                  <span className="w-4 h-px inline-block" style={{ background: "var(--accent)" }} />
                  {group.label}
                </p>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} style={{ color: "var(--ink-2)" }} className="text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
