"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/assets/community-aerial.jpeg",  alt: "Aerial view of The Pavillion villa community living recreation zone, Boduppal", caption: "Community View" },
  { src: "/assets/entry-gate-sunset.jpg",  alt: "The Pavillion entry gate at golden hour",                               caption: "Entry Gate"     },
  { src: "/assets/clubhouse-aerial.jpeg",  alt: "Bommaku Recreation Zone overhead view with pool, bridge, and wellness facilities",  caption: "Recreation Zone" },
  { src: "/assets/pool-deck.jpeg",         alt: "Infinity pool deck at dusk, The Pavillion",                            caption: "Infinity Pool"  },
  { src: "/assets/rec-bridge.jpeg",        alt: "Rooftop recreation bridge connecting amenity blocks",                  caption: "Recreation Bridge" },
  { src: "/assets/rec-courts.jpg",         alt: "Recreation courts complex — pickleball, basketball, badminton",       caption: "Sports Courts"  },
  { src: "/assets/gallery-1.jpeg",         alt: "Villa street view with lush landscaping",                             caption: "Villa Street"   },
  { src: "/assets/garden-pergola.jpeg",    alt: "Garden pergola with flowering rose bushes at golden hour",            caption: "Garden Pergola" },
  { src: "/assets/gallery-2.jpeg",         alt: "Villa exterior with private compound gate",                           caption: "Villa Exterior" },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setCurrent((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrent((i) => (i + 1) % images.length);

  return (
    <>
      <section
        id="gallery"
        ref={ref}
        className="py-16 md:py-24 lg:pt-32"
        style={{ background: "var(--surface)", transition: "background-color 300ms ease" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
              Visual Gallery
            </p>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl font-light">
              The Pavillion,{" "}
              <span style={{ color: "var(--ink-3)" }} className="italic">in detail.</span>
            </h2>
            <div className="w-12 h-px mt-6" style={{ background: "var(--accent)" }} />
          </motion.div>

          {/* Carousel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden"
          >
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${current * 100}%` }}
                transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
                style={{ willChange: "transform" }}
              >
                {images.map((img, idx) => (
                  <div
                    key={img.src}
                    className="w-full shrink-0 aspect-[16/9] relative cursor-zoom-in overflow-hidden"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      quality={85}
                      loading={idx === 0 ? "eager" : "lazy"}
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Arrows */}
            {[{ dir: "prev", onClick: prev, label: "Previous image", pos: "left-4", char: "‹" },
              { dir: "next", onClick: next, label: "Next image",     pos: "right-4", char: "›" }
            ].map(({ dir, onClick, label, pos, char }) => (
              <button
                key={dir}
                onClick={onClick}
                aria-label={label}
                className={`absolute ${pos} top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center text-2xl transition-all duration-200 backdrop-blur-sm`}
                style={{
                  background: "rgba(0,0,0,0.38)",
                  color: "#EDE8E3",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                {char}
              </button>
            ))}
          </motion.div>

          {/* Caption + counter */}
          <div className="mt-4 flex items-center justify-between">
            <p style={{ color: "var(--ink)" }} className="text-sm tracking-widest uppercase">
              {images[current].caption}
            </p>
            <p style={{ color: "var(--ink-2)" }} className="text-sm tabular-nums">
              {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </p>
          </div>

          {/* Thumbnail strip */}
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setCurrent(i)}
                aria-label={`Go to ${img.caption}`}
                className={`shrink-0 w-20 h-12 relative overflow-hidden transition-all duration-200 ${
                  i === current ? "ring-2 ring-offset-2" : "opacity-35 hover:opacity-70"
                }`}
                style={i === current
                  ? { "--tw-ring-color": "var(--ring-c)", "--tw-ring-offset-color": "var(--ring-off)" } as React.CSSProperties
                  : {}}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover"
                  sizes="80px"
                  quality={60}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[8000] bg-black/97 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-[#EDE8E3] text-3xl hover:text-muted-gold transition-colors z-10"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              ×
            </button>
            <button
              className="absolute left-4 md:left-8 text-[#EDE8E3]/50 hover:text-[#EDE8E3] z-10 text-4xl transition-colors"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
            >‹</button>

            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl w-full mx-auto text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full aspect-video relative bg-[#1A1A1A]">
                <Image
                  src={images[current].src}
                  alt={images[current].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  quality={90}
                  priority
                />
              </div>
              <p className="text-[#9A8F87] text-sm tracking-widest uppercase mt-4">
                {images[current].caption}
              </p>
              <p className="text-[#8A7F78]/50 text-xs mt-1">
                {current + 1} / {images.length}
              </p>
            </motion.div>

            <button
              className="absolute right-4 md:right-8 text-[#EDE8E3]/50 hover:text-[#EDE8E3] z-10 text-4xl transition-colors"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
            >›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
