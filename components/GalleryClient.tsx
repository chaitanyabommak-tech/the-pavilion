"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

interface GalleryClientProps {
  images: GalleryImage[];
}

export default function GalleryClient({ images }: GalleryClientProps) {
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
          </motion.div>

          {/* Main Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mb-12 overflow-hidden cursor-pointer"
            onClick={() => setLightboxOpen(true)}
          >
            <div className="relative w-full aspect-[16/10] md:aspect-[21/10] overflow-hidden bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={images[current].src}
                    alt={images[current].alt}
                    fill
                    className="object-cover"
                    priority={current === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {e.stopPropagation(); prev();}}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 transition-colors flex items-center justify-center text-white"
                aria-label="Previous image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                onClick={(e) => {e.stopPropagation(); next();}}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 transition-colors flex items-center justify-center text-white"
                aria-label="Next image"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
                <p className="text-white text-sm md:text-base">
                  <span className="opacity-60">{String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
                  {" · "}
                  <span>{images[current].caption}</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Thumbnail Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-3 md:grid-cols-9 gap-3 md:gap-4"
          >
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`relative aspect-square overflow-hidden transition-all ${idx === current ? "ring-2 ring-offset-2 ring-[var(--accent)]" : "opacity-60 hover:opacity-100"}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 33vw, 11vw"
                />
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Close lightbox"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="relative w-full h-full flex items-center justify-center p-4">
              <Image
                src={images[current].src}
                alt={images[current].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>

            <button
              onClick={(e) => {e.stopPropagation(); prev();}}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white"
              aria-label="Previous image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={(e) => {e.stopPropagation(); next();}}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center text-white"
              aria-label="Next image"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <div className="absolute bottom-6 left-0 right-0 text-center text-white">
              <p className="text-sm md:text-base">
                <span className="opacity-60">{String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
                {" · "}
                <span>{images[current].caption}</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
