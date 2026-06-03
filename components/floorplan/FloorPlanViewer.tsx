"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Villa, getVillaFloorPlan } from "@/data/pavilionVillas";

interface FloorPlanViewerProps {
  villa: Villa | null;
}

export default function FloorPlanViewer({ villa }: FloorPlanViewerProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!villa) {
    return (
      <div
        className="w-full flex flex-col items-center justify-center p-12 text-center"
        style={{
          background: "var(--fp-bg)",
          border: "1px solid var(--edge)",
          borderRadius: "4px",
          minHeight: "400px",
        }}
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: "var(--ink-2)", opacity: 0.3 }}
          className="mb-4"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
        <p className="text-lg font-medium mb-2" style={{ color: "var(--ink)" }}>
          No Villa Selected
        </p>
        <p className="text-sm max-w-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
          Click any villa on the master plan below to view its floor plan, details, and pricing
        </p>
      </div>
    );
  }

  const floorPlanImage = getVillaFloorPlan(villa);

  return (
    <>
      <motion.div
        key={villa.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full"
      >
        {/* Floor Plan Header */}
        <div className="mb-4">
          <div className="flex items-baseline gap-3 mb-2">
            <h3
              className="font-heading text-2xl md:text-3xl font-light"
              style={{ color: "var(--ink)" }}
            >
              Villa {villa.id}
            </h3>
            <span
              className="text-xs tracking-wider uppercase px-2.5 py-1"
              style={{
                background: villa.status === "available"
                  ? "rgba(83, 104, 120, 0.12)"
                  : villa.status === "reserved"
                    ? "rgba(201, 168, 76, 0.12)"
                    : "rgba(0, 0, 0, 0.08)",
                color: villa.status === "available"
                  ? "var(--accent)"
                  : villa.status === "reserved"
                    ? "#C9A84C"
                    : "var(--ink-2)",
              }}
            >
              {villa.status.charAt(0).toUpperCase() + villa.status.slice(1)}
            </span>
          </div>
          <p className="text-sm tracking-wide" style={{ color: "var(--ink-2)" }}>
            {villa.unitType} · {villa.facing} Facing · {villa.plotSizeLabel}
          </p>
        </div>

        {/* Floor Plan Image */}
        <div
          className="relative w-full cursor-zoom-in group overflow-hidden"
          style={{
            background: "var(--fp-bg)",
            border: "1px solid var(--edge)",
            borderRadius: "4px",
          }}
          onClick={() => setLightboxOpen(true)}
        >
          {floorPlanImage ? (
            <>
              <div className="relative w-full" style={{ minHeight: "400px", maxHeight: "500px" }}>
                <Image
                  src={floorPlanImage}
                  alt={`Villa ${villa.id} floor plan`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  style={{ maxHeight: "500px" }}
                  loading="lazy"
                  quality={85}
                />
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/80 text-white text-xs px-3 py-2 flex items-center gap-2 rounded">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
                Click to expand
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center p-12">
              <p className="text-sm" style={{ color: "var(--ink-2)" }}>
                Floor plan coming soon
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && floorPlanImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[8000] bg-black/97 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-[#EDE8E3] text-4xl hover:text-[#8A7F78] transition-colors z-10 w-12 h-12 flex items-center justify-center"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close floor plan"
            >
              ×
            </button>
            <Image
              src={floorPlanImage}
              alt={`Villa ${villa.id} floor plan`}
              width={1200}
              height={900}
              className="max-w-6xl max-h-[90vh] w-auto h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
              quality={90}
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
