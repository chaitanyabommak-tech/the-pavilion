"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { trackEvent } from "@/lib/tracking";

// TODO: Place recreation zone renders in public/images/recreation-zone/ folder
// Expected files:
// - recreation-zone-aerial-pool.jpg
// - recreation-zone-gym-exterior.jpg
// - recreation-zone-villa-view.jpg
// - recreation-zone-infinity-pool.jpg
// - recreation-zone-landscape-courtyard.jpg
// - recreation-zone-family-deck.jpg
// For now, using existing clubhouse image as placeholder

const features = [
  {
    category: "Wellness",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    items: [
      "State-of-the-art Gym",
      "Yoga Room",
      "Sauna Room",
      "Wellness Lounge"
    ]
  },
  {
    category: "Aquatic Lifestyle",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 12c.6-2.3 2-4 3.5-4s3.5 1.7 3.5 4 1.5 4 3.5 4 2.9-1.7 3.5-4" />
        <path d="M13 12c.6-2.3 2-4 3.5-4s3.5 1.7 3.5 4" />
      </svg>
    ),
    items: [
      "Swimming Pool",
      "Infinity Pool",
      "Pool Deck",
      "Leisure Seating"
    ]
  },
  {
    category: "Sports",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    items: [
      "Football Court",
      "Pickleball Court",
      "Cricket Practice Zone",
      "Multi-sport Areas"
    ]
  },
  {
    category: "Family & Community",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    items: [
      "Zen Garden",
      "Landscaped Deck",
      "Family Seating Zones",
      "Kids Play Areas"
    ]
  },
  {
    category: "Food & Leisure",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    items: [
      "Restaurant",
      "Cafe",
      "Outdoor Deck",
      "Lounge Spaces"
    ]
  },
  {
    category: "Convenience",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    items: [
      "Private Membership Access",
      "Professional Management",
      "Member Benefits for Villa Owners",
      "Public Membership Model"
    ]
  }
];

export default function RecreationZone() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeImage, setActiveImage] = useState(0);

  // TODO: Replace with actual recreation zone images once uploaded
  const galleryImages = [
    {
      src: "/assets/clubhouse-aerial.jpeg",
      alt: "Bommaku Recreation Zone aerial view with swimming pool and landscaped leisure deck",
      caption: "Aerial View"
    },
    {
      src: "/assets/pool-deck.jpeg",
      alt: "Bommaku Recreation Zone infinity pool and rooftop leisure deck",
      caption: "Infinity Pool & Deck"
    },
    {
      src: "/assets/rec-bridge.jpeg",
      alt: "Bommaku Recreation Zone wellness and sports facilities",
      caption: "Recreation Bridge"
    },
    {
      src: "/assets/rec-courts.jpg",
      alt: "Bommaku Recreation Zone sports courts - pickleball, basketball, badminton",
      caption: "Sports Courts"
    }
  ];

  const handleCTAClick = (ctaType: string) => {
    trackEvent('book_site_visit_click' as any, {
      cta_location: `recreation_zone_${ctaType}`
    });
  };

  return (
    <section
      id="recreation-zone"
      ref={ref}
      className="py-16 md:py-24 lg:py-32"
      style={{ background: "var(--surface)", transition: "background-color 300ms ease" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
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

          <div className="max-w-3xl space-y-4">
            <p style={{ color: "var(--ink-2)" }} className="text-base sm:text-lg leading-relaxed">
              Not a conventional clubhouse. The Bommaku Recreation Zone is a privately owned sports, wellness, and lifestyle complex by Bommaku Group.
            </p>
            <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed">
              Designed around active living, family time, wellness, and premium leisure, the Recreation Zone brings together a gym, yoga room, sauna, swimming pool, infinity pool, sports courts, landscaped decks, Zen garden, cafe, restaurant, and community spaces within one dedicated environment.
            </p>
          </div>
        </motion.div>

        {/* Main Visual Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12"
        >
          {/* Large hero image */}
          <div className="lg:row-span-2">
            <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src={galleryImages[activeImage].src}
                alt={galleryImages[activeImage].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
                priority
              />
            </div>
          </div>

          {/* Supporting images */}
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.slice(1, 4).map((img, idx) => (
              <button
                key={img.src}
                onClick={() => setActiveImage(idx + 1)}
                className={`relative aspect-square overflow-hidden rounded-lg transition-opacity ${
                  activeImage === idx + 1 ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  quality={75}
                  loading="lazy"
                />
              </button>
            ))}
            <div
              className="relative aspect-square overflow-hidden rounded-lg flex items-center justify-center text-center p-4"
              style={{ background: "var(--card)" }}
            >
              <div>
                <p style={{ color: "var(--accent)" }} className="font-stat text-3xl mb-2">30,000</p>
                <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-wider uppercase">Sq.Ft Recreation Zone</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Villa Owner Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-12 p-6 md:p-8 rounded-lg"
          style={{ background: "var(--card)", border: "1px solid var(--edge)" }}
        >
          <div className="flex items-start gap-4">
            <div
              className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: "var(--accent)", opacity: 0.15 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--accent)" }}>
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-4">
                Exclusive Benefits for Pavillion Villa Owners
              </h3>
              <div className="space-y-3" style={{ color: "var(--ink-2)" }}>
                <p className="text-sm sm:text-base leading-relaxed">
                  <strong style={{ color: "var(--ink)" }}>First Year:</strong> Free access to the Recreation Zone for all Pavillion villa owners after the facility becomes operational.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  <strong style={{ color: "var(--ink)" }}>From Second Year:</strong> Special 35% member benefit on applicable membership or usage charges, subject to final membership terms.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Public Membership Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
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

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h3 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-8 text-center">
            Facilities & Experiences
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.05 }}
                className="p-6 rounded-lg"
                style={{ background: "var(--card)", border: "1px solid var(--edge)" }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div style={{ color: "var(--accent)" }}>
                    {feature.icon}
                  </div>
                  <h4 style={{ color: "var(--ink)" }} className="text-sm tracking-[0.2em] uppercase font-medium">
                    {feature.category}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {feature.items.map((item) => (
                    <li key={item} style={{ color: "var(--ink-2)" }} className="text-sm flex items-start gap-2">
                      <span style={{ color: "var(--accent)" }} className="shrink-0 mt-1.5">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
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
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center"
        >
          <p style={{ color: "var(--ink-3)" }} className="text-xs leading-relaxed max-w-3xl mx-auto">
            All visuals, facilities, membership benefits, pricing, access terms, operating partners, and final specifications are subject to confirmation, approvals, execution, and final documentation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
