"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

const westFacingVillas = {
  exteriors: [
    {
      src: "/images/pavilion/exteriors/villa-street-view-02.jpg",
      alt: "West Facing villa facade at The Pavilion with contemporary architectural expression",
      caption: "West Facing Variation 01"
    },
    {
      src: "/images/pavilion/exteriors/villa-front-elevation-02.jpg",
      alt: "West Facing villa with bold facade presence and premium proportions",
      caption: "West Facing Variation 02"
    },
    {
      src: "/images/pavilion/exteriors/corner-villa-view.jpg",
      alt: "West Facing corner villa showcasing architectural versatility",
      caption: "West Facing Variation 03"
    }
  ],
  interiors: [
    {
      src: "/images/pavilion/interiors/living-room-02.jpg",
      alt: "West Facing villa interior with warm afternoon light",
      caption: "Living Space"
    },
    {
      src: "/images/pavilion/interiors/kitchen-02.jpg",
      alt: "West Facing villa luxury kitchen with island and premium fittings",
      caption: "Premium Kitchen"
    },
    {
      src: "/images/pavilion/interiors/master-bedroom-02.jpg",
      alt: "West Facing villa master bedroom with contemporary design",
      caption: "Master Suite"
    }
  ]
};

const features = [
  "Distinct facade expression",
  "Premium exterior proportions",
  "Interior personalization opportunities",
  "Flexible room planning",
  "Clean Slate-driven customization"
];

export default function WestFacingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);
  const [lightboxType, setLightboxType] = useState<'exteriors' | 'interiors'>('exteriors');

  const openLightbox = (type: 'exteriors' | 'interiors', index: number) => {
    setLightboxType(type);
    setLightboxImage(index);
    setLightboxOpen(true);
  };

  const currentImages = lightboxType === 'exteriors' ? westFacingVillas.exteriors : westFacingVillas.interiors;

  const nextImage = () => setLightboxImage((i) => (i + 1) % currentImages.length);
  const prevImage = () => setLightboxImage((i) => (i - 1 + currentImages.length) % currentImages.length);

  return (
    <>
      <section
        id="west-facing"
        ref={ref}
        className="py-16 md:py-24"
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
              West Facing
            </p>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl font-light mb-6">
              West Facing Villa Facades
            </h2>
            <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

            <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed max-w-3xl mb-6">
              The West Facing villas at The Pavilion bring together bold facade expression, strong architectural presence, and adaptable interior possibilities. Through The Clean Slate process, these homes can be shaped around the buyer's priorities while preserving the premium design language of the community.
            </p>
          </motion.div>

          {/* Exterior Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h3 style={{ color: "var(--ink)" }} className="text-xl font-medium mb-6 flex items-center gap-2">
              <span className="w-6 h-px inline-block" style={{ background: "var(--accent)" }} />
              West Facing Exteriors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {westFacingVillas.exteriors.map((img, idx) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => openLightbox('exteriors', idx)}
                  style={{ background: "var(--img-ph)" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm tracking-wide">{img.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interior Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h3 style={{ color: "var(--ink)" }} className="text-xl font-medium mb-6 flex items-center gap-2">
              <span className="w-6 h-px inline-block" style={{ background: "var(--accent)" }} />
              West Facing Interiors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {westFacingVillas.interiors.map((img, idx) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                  className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
                  onClick={() => openLightbox('interiors', idx)}
                  style={{ background: "var(--img-ph)" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm tracking-wide">{img.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl"
          >
            <h3 style={{ color: "var(--ink)" }} className="text-xl font-medium mb-6">
              West Facing Design Features
            </h3>
            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} style={{ color: "var(--ink-2)" }} className="flex items-start gap-3 text-sm">
                  <span style={{ color: "var(--accent)" }} className="mt-1 shrink-0">—</span>
                  {feature}
                </li>
              ))}
            </ul>
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
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              aria-label="Previous image"
            >‹</button>

            <motion.div
              key={lightboxImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl w-full mx-auto text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full aspect-video relative bg-[#1A1A1A]">
                <Image
                  src={currentImages[lightboxImage].src}
                  alt={currentImages[lightboxImage].alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  quality={90}
                  priority
                />
              </div>
              <p className="text-[#9A8F87] text-sm tracking-widest uppercase mt-4">
                {currentImages[lightboxImage].caption}
              </p>
              <p className="text-[#8A7F78]/50 text-xs mt-1">
                {lightboxImage + 1} / {currentImages.length}
              </p>
            </motion.div>

            <button
              className="absolute right-4 md:right-8 text-[#EDE8E3]/50 hover:text-[#EDE8E3] z-10 text-4xl transition-colors"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              aria-label="Next image"
            >›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
