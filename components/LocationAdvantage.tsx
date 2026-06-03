"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const highlights = [
  { time: "5 min",  label: "away from Uppal Main Road" },
  { time: "8 min",  label: "away from Uppal Metro Station" },
  { time: "12 min", label: "away from Cricket Stadium" },
  { time: "45 min", label: "away from International Airport" },
];

const nearby = [
  { place: "RBM Hospital", distance: "700 m" },
  { place: "Lotus Lap School", distance: "1 km" },
  { place: "Kiran International School", distance: "2.5 km" },
  { place: "Decathlon", distance: "3 km" },
  { place: "DSL Mall", distance: "5 km" },
  { place: "ORR Exit No. 9", distance: "12 km" },
  { place: "Bommak Convention", distance: "Adjacent" },
  { place: "Secunderabad Station", distance: "10 km" },
];

export default function LocationAdvantage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="location"
      className="py-16 md:py-24"
      style={{ background: "var(--surface)", transition: "background-color 300ms ease" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="loc-header mb-10 md:mb-16"
        >
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            Location
          </p>
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl font-light mb-6">
            Surya Hills, Boduppal.
            <br />
            <span style={{ color: "var(--ink-3)" }} className="italic">East Hyderabad.</span>
          </h2>

          <div className="flex flex-col sm:flex-row items-start gap-3 mt-6">
            <a
              href="https://maps.app.goo.gl/3gEbRXmKsENAkjXi7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-get-location"
            >
              Get Location <span aria-hidden="true">→</span>
            </a>
            <a
              href="tel:+919182332244"
              className="btn-get-location flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Now
            </a>
          </div>
        </motion.div>

        {/* Map + nearby — shown before metrics on mobile via CSS order */}
        <div className="loc-map-block grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="location-map-wrap aspect-[4/3] w-full overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps?q=17.416403,78.575600&z=17&t=k&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Pavilion location map"
            />
          </motion.div>

          {/* Nearby list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="loc-nearby"
          >
            <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.3em] uppercase mb-6">
              Nearby
            </p>
            <div>
              {nearby.map((loc) => (
                <div
                  key={loc.place}
                  className="py-4 flex items-center justify-between"
                  style={{ borderBottom: "1px solid var(--edge)" }}
                >
                  <span style={{ color: "var(--ink)" }} className="text-sm">{loc.place}</span>
                  <span className="text-sm font-medium tabular-nums" style={{ color: "var(--accent)" }}>
                    {loc.distance}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 4 bold time metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="loc-metrics grid grid-cols-2 md:grid-cols-4 gap-px mb-10 md:mb-16"
          style={{ background: "var(--gap)" }}
        >
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="py-7 px-4 md:py-10 md:px-6 text-center"
              style={{ background: "var(--stats)" }}
            >
              <p style={{ color: "var(--ink)" }} className="font-stat text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                {h.time}
              </p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm sm:text-base font-medium mt-2 leading-snug">
                {h.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
