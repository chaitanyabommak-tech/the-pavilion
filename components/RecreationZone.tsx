"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { trackEvent } from "@/lib/tracking";

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

export default function RecreationZone() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleCTAClick = (ctaType: string) => {
    trackEvent('book_site_visit_click' as any, {
      cta_location: `recreation_zone_${ctaType}`
    });
  };

  return (
    <>
      {/* Main Recreation Zone Section with Image + Amenities */}
      <section
        id="recreation-zone"
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
                Lifestyle &amp; Recreation
              </p>
              <h2 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl font-light">
                30,000 SFT
                <br />
                <span style={{ color: "var(--ink-3)" }} className="italic">Recreation Zone.</span>
              </h2>
              <div className="w-12 h-px mt-6" style={{ background: "var(--accent)" }} />
            </div>
            <p style={{ color: "var(--ink-2)" }} className="text-sm max-w-xs">
              A villa community with dedicated recreation infrastructure. Every amenity you need, within the community.
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
                aria-label="Bommaku Recreation Zone at The Pavillion villa community"
              />
              <div className="mt-4 grid grid-cols-3 gap-px" style={{ background: "var(--gap)" }}>
                {[
                  { value: "30,000", label: "Sq.Ft Zone" },
                  { value: "40", label: "Families Only" },
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

      {/* Expanded Recreation Zone Detail Section */}
      <section
        className="py-16 md:py-24 lg:py-32"
        style={{ background: "var(--surface)", transition: "background-color 300ms ease" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Positioning Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12 md:mb-16 max-w-4xl"
          >
            <p style={{ color: "var(--accent)" }} className="text-xs tracking-[0.4em] uppercase mb-4 font-medium">
              Bommaku Recreation Zone
            </p>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
              A Private Recreation Destination
              <br />
              <span style={{ color: "var(--ink-3)" }} className="italic">Attached to The Pavillion</span>
            </h2>
            <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

            <div className="space-y-4">
              <p style={{ color: "var(--ink-2)" }} className="text-base sm:text-lg leading-relaxed">
                Not a conventional clubhouse. The Bommaku Recreation Zone is a privately owned sports, wellness, and lifestyle complex by Bommaku Group.
              </p>
              <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed">
                Designed around active living, family time, wellness, and premium leisure, the Recreation Zone brings together a gym, yoga room, sauna, swimming pool, infinity pool, sports courts, landscaped decks, Zen garden, cafe, restaurant, and community spaces within one dedicated environment.
              </p>
            </div>
          </motion.div>

          {/* Villa Owner Benefits Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-12 p-8 md:p-10 rounded-lg relative overflow-hidden"
            style={{ background: "var(--card)", border: "1px solid var(--edge)" }}
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
              <svg viewBox="0 0 200 200" fill="currentColor" style={{ color: "var(--accent)" }}>
                <path d="M100 20L180 60v80l-80 40-80-40V60z" />
              </svg>
            </div>

            {/* Logo Badge */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                {/* Circular badge background */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center relative"
                  style={{
                    background: "linear-gradient(135deg, var(--accent) 0%, #8B7355 100%)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)"
                  }}
                >
                  {/* Inner circle */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: "var(--card)" }}
                  >
                    {/* Recreation Zone Icon */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--accent)" }}>
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <path d="M9 22V12h6v10" />
                      <circle cx="12" cy="8" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                {/* Logo text */}
                <div className="text-center mt-3">
                  <p style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase font-semibold">
                    Bommaku
                  </p>
                  <p style={{ color: "var(--ink-2)" }} className="text-[10px] tracking-[0.2em] uppercase">
                    Recreation Zone
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center max-w-2xl mx-auto">
              <h3 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-6">
                Exclusive Benefits for Pavillion Villa Owners
              </h3>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                {/* First Year Card */}
                <div
                  className="p-5 rounded-lg"
                  style={{ background: "var(--surface)", border: "1px solid var(--edge)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "var(--accent)", color: "white" }}
                    >
                      1
                    </span>
                    <strong style={{ color: "var(--ink)" }} className="text-base">First Year</strong>
                  </div>
                  <p style={{ color: "var(--ink-2)" }} className="text-sm leading-relaxed">
                    Free access to the Recreation Zone for all Pavillion villa owners after the facility becomes operational.
                  </p>
                </div>

                {/* Year 2+ Card */}
                <div
                  className="p-5 rounded-lg"
                  style={{ background: "var(--surface)", border: "1px solid var(--edge)" }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "var(--accent)", color: "white" }}
                    >
                      2+
                    </span>
                    <strong style={{ color: "var(--ink)" }} className="text-base">From Second Year</strong>
                  </div>
                  <p style={{ color: "var(--ink-2)" }} className="text-sm leading-relaxed">
                    Special <strong style={{ color: "var(--accent)" }}>35% member benefit</strong> on applicable membership or usage charges, subject to final membership terms.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Public Membership Model */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mb-16 max-w-3xl"
          >
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-4">
              Private Membership Model
            </h3>
            <p style={{ color: "var(--ink-2)" }} className="text-sm sm:text-base leading-relaxed mb-4">
              The Bommaku Recreation Zone is planned to operate with a private membership model, similar to a country-club style experience. This gives Pavillion villa owners a lifestyle advantage while allowing the facility to be professionally operated as a premium recreation destination for Boduppal and East Hyderabad.
            </p>
            <p style={{ color: "var(--ink-2)" }} className="text-sm sm:text-base leading-relaxed">
              With premium sports, wellness, pool, leisure, and family-focused infrastructure, the Bommaku Recreation Zone is designed to become one of East Hyderabad's most ambitious private recreation destinations.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={() => handleCTAClick('primary')}
              className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase"
            >
              Book a Private Site Visit
            </button>
            <button
              onClick={() => handleCTAClick('benefits')}
              style={{ border: "1px solid var(--out-bd)", color: "var(--out-tx)" }}
              className="px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:opacity-80"
            >
              Ask About Member Benefits
            </button>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-center"
          >
            <p style={{ color: "var(--ink-3)" }} className="text-xs leading-relaxed max-w-3xl mx-auto">
              All visuals, facilities, membership benefits, pricing, access terms, operating partners, and final specifications are subject to confirmation, approvals, execution, and final documentation.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
