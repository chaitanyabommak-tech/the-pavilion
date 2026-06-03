"use client";

import { motion } from "framer-motion";
import { Villa } from "@/data/pavilionVillas";

interface SelectedVillaPanelProps {
  villa: Villa | null;
  onEnquire: () => void;
}

export default function SelectedVillaPanel({ villa, onEnquire }: SelectedVillaPanelProps) {
  if (!villa) {
    return (
      <div
        className="h-full flex flex-col items-center justify-center p-8 text-center"
        style={{
          background: "var(--card)",
          border: "1px solid var(--edge)",
          borderRadius: "4px",
          minHeight: "400px",
        }}
      >
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: "var(--ink-2)", opacity: 0.25 }}
          className="mb-5"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        <p className="text-base font-medium mb-2" style={{ color: "var(--ink)" }}>
          Select Your Villa
        </p>
        <p className="text-xs leading-relaxed max-w-xs" style={{ color: "var(--ink-2)" }}>
          Click any villa on the master plan to view complete details, floor plans, and pricing
        </p>
      </div>
    );
  }

  return (
    <motion.div
      key={villa.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      style={{
        background: "var(--card)",
        border: "1px solid var(--edge)",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div className="p-6 pb-5" style={{ borderBottom: "1px solid var(--edge)" }}>
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <h3 className="font-heading text-3xl font-light mb-1" style={{ color: "var(--ink)" }}>
              Villa {villa.id}
            </h3>
            <p className="text-xs tracking-wider uppercase" style={{ color: "var(--ink-2)" }}>
              {villa.unitType}
            </p>
          </div>
          <div
            className="px-3 py-1.5 text-xs font-semibold tracking-wide shrink-0"
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
              borderRadius: "3px",
            }}
          >
            {villa.status.charAt(0).toUpperCase() + villa.status.slice(1)}
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 space-y-4">
        {/* Plot & Facing */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs tracking-wider uppercase mb-1.5" style={{ color: "var(--ink-2)" }}>
              Plot Size
            </p>
            <p className="text-base font-semibold" style={{ color: "var(--ink)" }}>
              {villa.plotSizeLabel}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase mb-1.5" style={{ color: "var(--ink-2)" }}>
              Facing
            </p>
            <p className="text-base font-semibold" style={{ color: "var(--ink)" }}>
              {villa.facing}
            </p>
          </div>
        </div>

        {/* Total SFT - Prominent */}
        <div
          className="p-4 rounded"
          style={{
            background: "rgba(83, 104, 120, 0.08)",
            border: "1px solid rgba(83, 104, 120, 0.15)",
          }}
        >
          <p className="text-xs tracking-wider uppercase mb-1" style={{ color: "var(--ink-2)" }}>
            Total Built-up Area
          </p>
          <p className="text-2xl font-bold" style={{ color: "var(--accent)" }}>
            {villa.totalSft.toLocaleString()} SFT
          </p>
          <p className="text-xs mt-1 opacity-75" style={{ color: "var(--ink-2)" }}>
            {villa.builtUpAreaSft}
          </p>
        </div>

        {/* Dimensions */}
        <div>
          <p className="text-xs tracking-wider uppercase mb-1.5" style={{ color: "var(--ink-2)" }}>
            Dimensions
          </p>
          <p className="text-base font-medium" style={{ color: "var(--ink)" }}>
            {villa.dimensions}
          </p>
        </div>

        {/* Configuration & Price */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs tracking-wider uppercase mb-1.5" style={{ color: "var(--ink-2)" }}>
              Configuration
            </p>
            <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>
              {villa.floors}
            </p>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase mb-1.5" style={{ color: "var(--ink-2)" }}>
              Price
            </p>
            <p className="text-base font-bold" style={{ color: "var(--accent)" }}>
              {villa.price}
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 pt-0">
        <button
          onClick={onEnquire}
          className="btn-primary w-full py-3.5 text-xs tracking-[0.2em] uppercase font-medium"
        >
          Enquire for Villa {villa.id}
        </button>
      </div>

      {/* Features */}
      <div className="px-6 pb-6 pt-4" style={{ borderTop: "1px solid var(--edge)" }}>
        <p className="text-xs tracking-wide leading-relaxed" style={{ color: "var(--ink-2)" }}>
          <span style={{ color: "var(--ink)" }} className="font-semibold">Includes:</span>{" "}
          3 BHK + Pooja Room, Home Theatre on Penthouse, Covered parking, Private compound wall & gate, 100% Vastu compliant
        </p>
      </div>
    </motion.div>
  );
}
