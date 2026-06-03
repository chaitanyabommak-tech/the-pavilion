"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Villa } from "@/data/pavilionVillas";

interface InteractiveMasterPlanProps {
  villas: Villa[];
  selectedVillaId: string | null;
  onVillaSelect: (villa: Villa) => void;
}

export default function InteractiveMasterPlan({
  villas,
  selectedVillaId,
  onVillaSelect,
}: InteractiveMasterPlanProps) {
  const [hoveredVilla, setHoveredVilla] = useState<string | null>(null);
  const [tooltipData, setTooltipData] = useState<{ villa: Villa; x: number; y: number } | null>(null);

  const handleVillaClick = (villa: Villa) => {
    if (villa.status !== "sold") {
      onVillaSelect(villa);
    }
  };

  const handleVillaHover = (villa: Villa | null, event?: React.MouseEvent | React.TouchEvent) => {
    setHoveredVilla(villa?.id || null);

    if (villa && event) {
      const container = event.currentTarget.closest('.master-plan-container');
      if (container) {
        const rect = container.getBoundingClientRect();
        let clientX: number, clientY: number;

        if ('touches' in event && event.touches.length > 0) {
          clientX = event.touches[0].clientX;
          clientY = event.touches[0].clientY;
        } else if ('clientX' in event) {
          clientX = event.clientX;
          clientY = event.clientY;
        } else {
          return;
        }

        setTooltipData({
          villa,
          x: ((clientX - rect.left) / rect.width) * 100,
          y: ((clientY - rect.top) / rect.height) * 100,
        });
      }
    } else {
      setTooltipData(null);
    }
  };

  const getVillaStyle = (villa: Villa) => {
    const isSelected = villa.id === selectedVillaId;
    const isHovered = villa.id === hoveredVilla;
    const isSold = villa.status === "sold";
    const isReserved = villa.status === "reserved";

    if (isSold) {
      return {
        background: "rgba(0, 0, 0, 0.5)",
        border: "2px solid rgba(0, 0, 0, 0.3)",
        cursor: "not-allowed",
        opacity: 0.4,
      };
    }

    if (isSelected) {
      return {
        background: "rgba(83, 104, 120, 0.35)",
        border: "2px solid var(--accent)",
        boxShadow: "0 0 0 3px rgba(83, 104, 120, 0.2), 0 0 15px rgba(83, 104, 120, 0.4)",
        cursor: "pointer",
      };
    }

    if (isHovered) {
      return {
        background: "rgba(83, 104, 120, 0.25)",
        border: "2px solid var(--accent)",
        cursor: "pointer",
      };
    }

    if (isReserved) {
      return {
        background: "rgba(201, 168, 76, 0.15)",
        border: "2px solid rgba(201, 168, 76, 0.4)",
        cursor: "pointer",
      };
    }

    return {
      background: "rgba(255, 255, 255, 0.08)",
      border: "2px solid rgba(255, 255, 255, 0.3)",
      cursor: "pointer",
    };
  };

  return (
    <div className="master-plan-container relative w-full">
      {/* Master Plan Image Base */}
      <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
        <img
          src="/assets/master-plan.png"
          alt="The Pavillion Master Plan"
          className="w-full h-full object-cover"
          style={{ borderRadius: "4px" }}
        />

        {/* Interactive SVG Overlay */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          style={{ pointerEvents: "none" }}
        >
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="0.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {villas.map((villa) => {
            const { x, y, width, height } = villa.mapPosition;
            const style = getVillaStyle(villa);

            return (
              <g key={villa.id}>
                <rect
                  x={x}
                  y={y}
                  width={width}
                  height={height}
                  fill={style.background}
                  stroke={style.border?.split(" ")[2] || "transparent"}
                  strokeWidth={style.border?.includes("2px") ? "0.3" : "0.15"}
                  style={{
                    pointerEvents: "all",
                    cursor: style.cursor,
                    transition: "all 0.2s ease",
                    filter: villa.id === selectedVillaId ? "url(#glow)" : "none",
                  }}
                  onClick={() => handleVillaClick(villa)}
                  onMouseEnter={(e) => handleVillaHover(villa, e)}
                  onMouseLeave={() => handleVillaHover(null)}
                  onTouchStart={(e) => {
                    e.preventDefault();
                    handleVillaHover(villa, e);
                  }}
                  onTouchEnd={(e) => {
                    e.preventDefault();
                    handleVillaHover(null);
                    handleVillaClick(villa);
                  }}
                  role="button"
                  aria-label={`Villa ${villa.id}, ${villa.plotSizeLabel}, ${villa.facing} facing`}
                  tabIndex={0}
                />
                {/* Villa Label */}
                <text
                  x={x + width / 2}
                  y={y + height / 2 - 0.8}
                  fontSize="2.2"
                  fontWeight="700"
                  fill={villa.id === selectedVillaId ? "#FFFFFF" : "#FFFFFF"}
                  textAnchor="middle"
                  dominantBaseline="central"
                  pointerEvents="none"
                  style={{
                    textShadow: "0 1px 3px rgba(0,0,0,0.8)",
                    filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.9))",
                  }}
                >
                  {villa.id}
                </text>
                {/* Plot Size */}
                <text
                  x={x + width / 2}
                  y={y + height / 2 + 1.5}
                  fontSize="1.1"
                  fontWeight="500"
                  fill="#FFFFFF"
                  textAnchor="middle"
                  dominantBaseline="central"
                  pointerEvents="none"
                  style={{
                    textShadow: "0 1px 2px rgba(0,0,0,0.8)",
                    opacity: 0.95,
                  }}
                >
                  {villa.plotSizeSqYd}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Tooltip */}
        <AnimatePresence>
          {tooltipData && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="absolute pointer-events-none z-50"
              style={{
                left: `${tooltipData.x}%`,
                top: `${tooltipData.y}%`,
                transform: "translate(-50%, -120%)",
              }}
            >
              <div
                className="px-3 py-2.5 rounded"
                style={{
                  background: "rgba(0, 0, 0, 0.95)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  minWidth: "160px",
                }}
              >
                <p className="text-white font-bold text-sm mb-1">
                  Villa {tooltipData.villa.id}
                </p>
                <p className="text-xs opacity-90 leading-relaxed" style={{ color: "#EDE8E3" }}>
                  Plot: {tooltipData.villa.plotSizeLabel}<br />
                  Total SFT: {tooltipData.villa.totalSft.toLocaleString()}<br />
                  Facing: {tooltipData.villa.facing}
                </p>
                <p className="text-xs font-bold mt-1.5" style={{ color: "#C9A84C" }}>
                  {tooltipData.villa.price}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs justify-center">
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 rounded"
            style={{
              background: "rgba(83, 104, 120, 0.35)",
              border: "2px solid var(--accent)",
            }}
          />
          <span style={{ color: "var(--ink-2)" }}>Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 rounded"
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
            }}
          />
          <span style={{ color: "var(--ink-2)" }}>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 rounded opacity-50"
            style={{
              background: "rgba(201, 168, 76, 0.15)",
              border: "2px solid rgba(201, 168, 76, 0.4)",
            }}
          />
          <span style={{ color: "var(--ink-2)" }}>Reserved</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-5 h-5 rounded opacity-40"
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              border: "2px solid rgba(0, 0, 0, 0.3)",
            }}
          />
          <span style={{ color: "var(--ink-2)" }}>Sold</span>
        </div>
      </div>
    </div>
  );
}
