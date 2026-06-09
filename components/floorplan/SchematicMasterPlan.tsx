"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import VillaBox from "./VillaBox";
import { Villa, pavilionVillas as fallbackVillas } from "@/data/pavilionVillas";

interface SchematicMasterPlanProps {
  selectedVillaId: string | null;
  onVillaSelect: (villa: Villa) => void;
  villas?: Villa[]; // Accept villas from database
}

export default function SchematicMasterPlan({
  selectedVillaId,
  onVillaSelect,
  villas,
}: SchematicMasterPlanProps) {
  // Use database villas if provided, fallback to hardcoded
  const pavilionVillas = villas || fallbackVillas;
  const [hoveredVillaId, setHoveredVillaId] = useState<string | null>(null);
  const [tooltipVilla, setTooltipVilla] = useState<Villa | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [sftFilter, setSftFilter] = useState<number | null>(null);
  const [facingFilter, setFacingFilter] = useState<string | null>(null);
  const [isNightMode, setIsNightMode] = useState(false);

  // Sync with navbar theme toggle
  useEffect(() => {
    // Read initial theme
    const checkTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      const isDark = theme === "dark";
      setIsNightMode(isDark);
    };

    // Check immediately
    checkTheme();

    // Also check after a short delay to ensure theme-init script has run
    const timeout = setTimeout(checkTheme, 50);

    // Watch for theme changes via MutationObserver
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsNightMode(theme === "dark");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  // Professional Architectural Blueprint Theme
  const theme = {
    // Background - Clean professional colors
    background: isNightMode
      ? "#0f172a" // Dark slate
      : "#f8fafc", // Clean white-gray

    border: isNightMode ? "rgba(148, 163, 184, 0.2)" : "rgba(100, 116, 139, 0.15)",

    shadow: isNightMode
      ? "0 4px 20px rgba(0, 0, 0, 0.4)"
      : "0 2px 12px rgba(0, 0, 0, 0.06)",

    // Roads - Professional gray tones
    roadBackground: isNightMode
      ? "#1e293b" // Slate 800
      : "#e2e8f0", // Slate 200

    roadBorder: isNightMode ? "rgba(71, 85, 105, 0.4)" : "rgba(100, 116, 139, 0.3)",

    roadShadow: isNightMode
      ? "0 1px 3px rgba(0,0,0,0.3)"
      : "0 1px 2px rgba(0,0,0,0.08)",

    // Road markings - Subtle professional lines
    roadMarkingColor: isNightMode ? "rgba(148, 163, 184, 0.4)" : "rgba(100, 116, 139, 0.35)",

    roadLabelBg: isNightMode
      ? "rgba(30, 41, 59, 0.95)"
      : "rgba(255, 255, 255, 0.95)",

    roadLabelBorder: isNightMode ? "rgba(148, 163, 184, 0.3)" : "rgba(100, 116, 139, 0.2)",
    roadLabelText: isNightMode ? "#cbd5e1" : "#475569",

    // Block labels - Clean corporate style
    blockLabelBg: isNightMode
      ? "rgba(30, 41, 59, 0.9)"
      : "rgba(255, 255, 255, 0.95)",
    blockLabelText: isNightMode ? "#e2e8f0" : "#334155",
    blockLabelBorder: isNightMode ? "rgba(148, 163, 184, 0.25)" : "rgba(100, 116, 139, 0.2)",

    // Recreation zone - Professional landscaping representation
    parkBackground: isNightMode
      ? "#064e3b" // Dark emerald
      : "#d1fae5", // Light emerald

    parkBorder: isNightMode ? "rgba(16, 185, 129, 0.3)" : "rgba(5, 150, 105, 0.25)",

    parkShadow: isNightMode
      ? "0 1px 3px rgba(0,0,0,0.3)"
      : "0 1px 2px rgba(0,0,0,0.08)",

    treeColor: isNightMode ? "#047857" : "#10b981",
    treeTrunk: isNightMode ? "#78350f" : "#92400e",
    bushColor: isNightMode ? "#059669" : "#34d399",

    // Text - Professional typography
    textPrimary: isNightMode ? "#e2e8f0" : "#1e293b",
    textSecondary: isNightMode ? "#94a3b8" : "#64748b",

    // Header badge - Corporate styling
    badgeBackground: isNightMode
      ? "rgba(30, 41, 59, 0.95)"
      : "rgba(255, 255, 255, 0.98)",
    badgeText: isNightMode ? "#cbd5e1" : "#334155",
    badgeBorder: isNightMode ? "rgba(148, 163, 184, 0.25)" : "rgba(100, 116, 139, 0.2)",

    // Filter buttons - Clean professional design
    filterActiveBg: isNightMode
      ? "#334155" // Slate 700
      : "#0f172a", // Slate 900
    filterInactiveBg: isNightMode
      ? "rgba(51, 65, 85, 0.4)"
      : "rgba(241, 245, 249, 0.8)",
    filterActiveText: "#ffffff",
    filterInactiveText: isNightMode ? "#94a3b8" : "#64748b",
    filterActiveBorder: isNightMode ? "rgba(148, 163, 184, 0.4)" : "rgba(15, 23, 42, 0.2)",
    filterInactiveBorder: isNightMode ? "rgba(71, 85, 105, 0.3)" : "rgba(203, 213, 225, 0.4)",

    // Entrance gate - Professional corporate entrance
    gateBackground: isNightMode
      ? "#1e40af" // Blue 800
      : "#3b82f6", // Blue 500

    gateShadow: isNightMode
      ? "0 4px 12px rgba(30, 64, 175, 0.3)"
      : "0 4px 12px rgba(59, 130, 246, 0.25)",
  };

  // Organize villas by block
  const getBlockVillas = (block: string) => {
    return pavilionVillas
      .filter((v) => v.block === block && v.id.match(/^[A-H]/))
      .sort((a, b) => {
        const aNum = parseInt(a.id.slice(1));
        const bNum = parseInt(b.id.slice(1));
        return aNum - bNum;
      });
  };

  const blockPairs = [
    { left: "H", right: "G" },
    { left: "F", right: "E" },
    { left: "D", right: "C" },
    { left: "B", right: "A" },
  ];

  const handleVillaClick = (villa: Villa) => {
    if (villa.status !== "sold") {
      onVillaSelect(villa);
    }
  };

  const handleVillaHover = (villa: Villa | null, event?: React.MouseEvent | React.TouchEvent) => {
    setHoveredVillaId(villa?.id || null);
    setTooltipVilla(villa);
    if (event && villa) {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      setTooltipPosition({
        x: rect.right + 10,
        y: rect.top,
      });
    }
  };

  const hoveredVilla = tooltipVilla;

  // Check if villa matches current filters
  const isVillaHighlighted = (villa: Villa) => {
    if (!sftFilter && !facingFilter) return true; // No filters active

    const matchesSft = !sftFilter || villa.totalSft === sftFilter;
    const matchesFacing = !facingFilter ||
      villa.facing.toLowerCase().includes(facingFilter.toLowerCase());

    return matchesSft && matchesFacing;
  };

  // Get unique SFT values
  const uniqueSftValues = Array.from(new Set(pavilionVillas.map(v => v.totalSft))).sort((a, b) => a - b);

  return (
    <div className="relative">
      {/* Filter Options - Ultra Modern Design */}
      <div className="mb-6 md:mb-8 space-y-4 md:space-y-5 px-2 md:px-0">
        {/* SFT Options */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-center p-4 md:p-5 rounded-lg transition-all duration-300"
          style={{
            background: isNightMode ? "rgba(30, 41, 59, 0.6)" : "rgba(255, 255, 255, 0.8)",
            border: `1px solid ${isNightMode ? "rgba(148, 163, 184, 0.2)" : "rgba(203, 213, 225, 0.5)"}`,
            boxShadow: isNightMode
              ? "0 2px 8px rgba(0,0,0,0.2)"
              : "0 1px 3px rgba(0,0,0,0.06)",
          }}>
          <span className="text-xs md:text-sm font-semibold tracking-wide mr-2 md:mr-3 w-full md:w-auto text-center md:text-left mb-2 md:mb-0 transition-colors duration-300" style={{ color: theme.textPrimary }}>
            Filter by Area
          </span>
          <button
            onClick={() => setSftFilter(null)}
            className="px-4 md:px-5 py-2 md:py-2.5 rounded-md text-xs md:text-sm font-medium transition-all duration-200"
            style={{
              background: !sftFilter ? theme.filterActiveBg : theme.filterInactiveBg,
              color: !sftFilter ? theme.filterActiveText : theme.filterInactiveText,
              border: `1px solid ${!sftFilter ? theme.filterActiveBorder : theme.filterInactiveBorder}`,
              boxShadow: !sftFilter
                ? "0 1px 3px rgba(0,0,0,0.1)"
                : "none"
            }}
          >
            All
          </button>
          {uniqueSftValues.map(sft => (
            <button
              key={sft}
              onClick={() => setSftFilter(sft)}
              className="px-4 md:px-5 py-2 md:py-2.5 rounded-md text-xs md:text-sm font-medium transition-all duration-200"
              style={{
                background: sftFilter === sft ? theme.filterActiveBg : theme.filterInactiveBg,
                color: sftFilter === sft ? theme.filterActiveText : theme.filterInactiveText,
                border: `1px solid ${sftFilter === sft ? theme.filterActiveBorder : theme.filterInactiveBorder}`,
                boxShadow: sftFilter === sft ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
              }}
            >
              {sft.toLocaleString()} SFT
            </button>
          ))}
        </div>

        {/* Facing Direction Options */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-center p-4 md:p-5 rounded-lg transition-all duration-300"
          style={{
            background: isNightMode ? "rgba(30, 41, 59, 0.6)" : "rgba(255, 255, 255, 0.8)",
            border: `1px solid ${isNightMode ? "rgba(148, 163, 184, 0.2)" : "rgba(203, 213, 225, 0.5)"}`,
            boxShadow: isNightMode
              ? "0 2px 8px rgba(0,0,0,0.2)"
              : "0 1px 3px rgba(0,0,0,0.06)",
          }}>
          <span className="text-xs md:text-sm font-semibold tracking-wide mr-2 md:mr-3 w-full md:w-auto text-center md:text-left mb-2 md:mb-0 transition-colors duration-300" style={{ color: theme.textPrimary }}>
            Filter by Direction
          </span>
          <button
            onClick={() => setFacingFilter(null)}
            className="px-4 md:px-5 py-2 md:py-2.5 rounded-md text-xs md:text-sm font-medium transition-all duration-200"
            style={{
              background: !facingFilter ? theme.filterActiveBg : theme.filterInactiveBg,
              color: !facingFilter ? theme.filterActiveText : theme.filterInactiveText,
              border: `1px solid ${!facingFilter ? theme.filterActiveBorder : theme.filterInactiveBorder}`,
              boxShadow: !facingFilter ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
            }}
          >
            All
          </button>
          {["East", "West", "North East", "North West"].map(direction => (
            <button
              key={direction}
              onClick={() => setFacingFilter(direction)}
              className="px-4 md:px-5 py-2 md:py-2.5 rounded-md text-xs md:text-sm font-medium transition-all duration-200 whitespace-nowrap"
              style={{
                background: facingFilter === direction ? theme.filterActiveBg : theme.filterInactiveBg,
                color: facingFilter === direction ? theme.filterActiveText : theme.filterInactiveText,
                border: `1px solid ${facingFilter === direction ? theme.filterActiveBorder : theme.filterInactiveBorder}`,
                boxShadow: facingFilter === direction ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
              }}
            >
              {direction === "North East" ? "NE" : direction === "North West" ? "NW" : direction}
            </button>
          ))}
        </div>
      </div>

      {/* Master Plan Container - Theme-aware modern design */}
      <div
        className="relative rounded-2xl md:rounded-[24px] overflow-x-auto shadow-2xl transition-all duration-500"
        style={{
          background: theme.background,
          border: `1px solid ${theme.border}`,
          boxShadow: theme.shadow,
        }}
      >
        {/* Elegant corner details */}
        <div className="absolute top-0 left-0 w-16 h-16 opacity-8 z-30 pointer-events-none">
          <div className="absolute top-4 left-4 w-8 h-8 border-l border-t rounded-tl-xl" style={{ borderColor: "var(--accent)" }} />
        </div>
        <div className="absolute top-0 right-0 w-16 h-16 opacity-8 z-30 pointer-events-none">
          <div className="absolute top-4 right-4 w-8 h-8 border-r border-t rounded-tr-xl" style={{ borderColor: "var(--accent)" }} />
        </div>
        <div className="absolute bottom-0 left-0 w-16 h-16 opacity-8 z-30 pointer-events-none">
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b rounded-bl-xl" style={{ borderColor: "var(--accent)" }} />
        </div>
        <div className="absolute bottom-0 right-0 w-16 h-16 opacity-8 z-30 pointer-events-none">
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b rounded-br-xl" style={{ borderColor: "var(--accent)" }} />
        </div>

        {/* Professional architectural title */}
        <div className="absolute top-4 md:top-5 left-1/2 -translate-x-1/2 px-6 md:px-8 py-2.5 md:py-3 rounded-md text-xs md:text-sm font-semibold tracking-wider uppercase z-30 whitespace-nowrap transition-all duration-300"
          style={{
            color: theme.badgeText,
            background: theme.badgeBackground,
            border: `1px solid ${theme.badgeBorder}`,
            boxShadow: isNightMode
              ? "0 2px 8px rgba(0,0,0,0.3)"
              : "0 1px 3px rgba(0,0,0,0.1)",
          }}>
          THE PAVILLION · MASTER PLAN
        </div>

        {/* Layout Container with Extended Road */}
        <div className="min-w-[1100px] relative pt-8">
          {/* Outer compound wall */}
          <div className="absolute inset-0 pointer-events-none z-[1]">
            <div className="absolute inset-4 rounded-[16px]"
              style={{
                border: "2px solid rgba(83, 104, 120, 0.15)",
                boxShadow: "inset 0 0 20px rgba(83, 104, 120, 0.03)",
              }}
            />
          </div>

          {/* Extended 30 Feet Road - Premium asphalt texture */}
          <div className="relative">
            {/* Road as full-width background bar - dramatically different */}
            <div
              className="absolute left-0 right-0 top-0 h-16 z-0 transition-all duration-500"
              style={{
                background: theme.roadBackground,
                borderTop: `2px solid ${theme.roadBorder}`,
                borderBottom: `2px solid ${theme.roadBorder}`,
                boxShadow: theme.roadShadow,
              }}
            >
              {/* Road texture overlay */}
              <div className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)",
                }}
              />

              {/* Road markings - different styles per theme */}
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-500">
                <div className={`flex gap-5 ${isNightMode ? 'opacity-50' : 'opacity-40'}`}>
                  {[...Array(35)].map((_, i) => (
                    <div key={i}
                      className={`w-7 rounded-full transition-all duration-500 ${isNightMode ? 'h-1' : 'h-0.5'}`}
                      style={{
                        background: theme.roadMarkingColor,
                        boxShadow: isNightMode
                          ? "0 0 8px rgba(96, 165, 250, 0.4), 0 0 3px rgba(96, 165, 250, 0.6)"
                          : "0 0 4px rgba(255,255,255,0.3)"
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Road edge lines - glowing in dark mode */}
              <div className="absolute top-2 left-0 right-0 transition-all duration-500"
                style={{
                  height: isNightMode ? '2px' : '1px',
                  background: isNightMode
                    ? 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.3), transparent)'
                    : 'rgba(255,255,255,0.2)',
                  boxShadow: isNightMode ? '0 0 4px rgba(96, 165, 250, 0.4)' : 'none'
                }}
              />
              <div className="absolute bottom-2 left-0 right-0 transition-all duration-500"
                style={{
                  height: isNightMode ? '2px' : '1px',
                  background: isNightMode
                    ? 'linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.3), transparent)'
                    : 'rgba(255,255,255,0.2)',
                  boxShadow: isNightMode ? '0 0 4px rgba(96, 165, 250, 0.4)' : 'none'
                }}
              />

              {/* Road label - professional style */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 px-4 md:px-5 py-2 md:py-2.5 rounded-md z-10 transition-all duration-300"
                style={{
                  background: theme.roadLabelBg,
                  border: `1px solid ${theme.roadLabelBorder}`,
                  boxShadow: isNightMode
                    ? "0 2px 8px rgba(0,0,0,0.3)"
                    : "0 1px 3px rgba(0,0,0,0.1)",
                }}>
                <span className="font-semibold text-[10px] md:text-xs tracking-wide uppercase transition-all duration-300"
                  style={{
                    color: theme.roadLabelText
                  }}>
                  30 FT ROAD
                </span>
              </div>
            </div>

            {/* Content area with padding for road - mobile optimized */}
            <div className="relative z-10 pt-14 md:pt-16 px-4 sm:px-6 md:px-10 lg:px-12 pb-8 md:pb-10 lg:pb-12">
              {/* Entrance Gate - Dramatically different per theme */}
              <div className="absolute right-3 md:right-6 top-0 flex flex-col items-center gap-2 md:gap-2.5 z-20 -mt-6 md:-mt-8">
                <div
                  className="w-14 h-14 md:w-[72px] md:h-[72px] rounded-xl md:rounded-2xl flex items-center justify-center relative transition-all duration-500"
                  style={{
                    background: theme.gateBackground,
                    border: `3px solid ${isNightMode ? '#1e40af' : '#FFFFFF'}`,
                    boxShadow: theme.gateShadow,
                  }}
                >
                  {/* Premium glass effect - different per theme */}
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl overflow-hidden transition-opacity duration-500">
                    <div className="absolute top-0 left-0 right-0 h-1/2"
                      style={{
                        opacity: isNightMode ? 0.3 : 0.4,
                        background: isNightMode
                          ? "linear-gradient(180deg, rgba(147, 197, 253, 0.4) 0%, transparent 100%)"
                          : "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)"
                      }}
                    />
                  </div>

                  {/* Animated glow in dark mode */}
                  {isNightMode && (
                    <div className="absolute inset-0 rounded-xl md:rounded-2xl animate-pulse"
                      style={{
                        background: "radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.2), transparent 70%)"
                      }}
                    />
                  )}

                  <svg width="24" height="24" className="md:w-8 md:h-8 relative z-10 transition-all duration-500" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{
                      filter: isNightMode
                        ? "drop-shadow(0 0 8px rgba(96, 165, 250, 0.8)) drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                        : "drop-shadow(0 2px 4px rgba(0,0,0,0.2))"
                    }}>
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <span className="text-[9px] md:text-[11px] font-bold tracking-[0.12em] md:tracking-[0.15em] uppercase whitespace-nowrap px-3 md:px-5 py-1.5 md:py-2 rounded-lg md:rounded-xl transition-all duration-500" style={{
                  background: isNightMode
                    ? "linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(29, 78, 216, 0.95) 100%)"
                    : "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(241,245,249,0.98) 100%)",
                  color: isNightMode ? "#93c5fd" : "#1e40af",
                  border: isNightMode ? "2px solid rgba(147, 197, 253, 0.4)" : "1px solid rgba(30, 64, 175, 0.2)",
                  boxShadow: isNightMode
                    ? "0 4px 15px rgba(37, 99, 235, 0.4), 0 2px 6px rgba(0,0,0,0.3), inset 0 0 20px rgba(147, 197, 253, 0.1)"
                    : "0 3px 10px rgba(59, 130, 246, 0.15), 0 1px 3px rgba(0,0,0,0.05)",
                  textShadow: isNightMode ? '0 0 10px rgba(147, 197, 253, 0.5)' : 'none'
                }}>
                  {isNightMode ? '★ ENTRANCE ★' : 'ENTRANCE'}
                </span>
              </div>

              {/* Villa Blocks Grid with greenery - mobile optimized */}
              <div className="flex gap-3 md:gap-5 items-start mt-2 justify-start">
              {/* Left side 25 feet road - Connected to 30 ft road */}
              <div className="flex flex-col items-center justify-start">
                <div
                  className="w-12 relative overflow-hidden transition-all duration-300"
                  style={{
                    background: theme.roadBackground,
                    border: `1px solid ${theme.roadBorder}`,
                    minHeight: "480px",
                    boxShadow: theme.roadShadow,
                  }}
                >
                  {/* Road texture */}
                  <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)",
                    }}
                  />

                  {/* Center line markings */}
                  <div className="absolute inset-0 flex flex-col items-center justify-around py-10">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="h-4 w-0.5 rounded-full transition-all duration-300"
                        style={{
                          background: theme.roadMarkingColor,
                          opacity: 0.4
                        }}
                      />
                    ))}
                  </div>

                  {/* Edge lines */}
                  <div className="absolute top-0 bottom-0 left-1.5 w-px transition-all duration-300"
                    style={{ background: theme.roadMarkingColor, opacity: 0.25 }} />
                  <div className="absolute top-0 bottom-0 right-1.5 w-px transition-all duration-300"
                    style={{ background: theme.roadMarkingColor, opacity: 0.25 }} />

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap px-3 py-1.5 rounded-md transition-all duration-300"
                    style={{
                      background: theme.roadLabelBg,
                      border: `1px solid ${theme.roadLabelBorder}`,
                      boxShadow: isNightMode ? "0 2px 8px rgba(0,0,0,0.3)" : "0 1px 3px rgba(0,0,0,0.1)"
                    }}>
                    <span className="text-[9px] font-semibold tracking-wide uppercase transition-all duration-300"
                      style={{ color: theme.roadLabelText }}>
                      25 FT ROAD
                    </span>
                  </div>
                </div>
              </div>

              {/* Block Pairs (H/G, F/E, D/C, B/A) */}
              {blockPairs.map((pair, pairIndex) => (
                <div key={pairIndex} className="flex gap-4 items-start">
                  {/* Left Block - mobile optimized */}
                  <div className="flex flex-col gap-2 md:gap-2.5 min-w-[70px] md:min-w-[85px]">
                    <div className="text-center text-[10px] md:text-xs font-bold mb-1 md:mb-1.5 tracking-[0.1em] md:tracking-[0.12em] uppercase px-1.5 md:px-2 py-0.5 md:py-1 rounded-md mx-auto transition-all duration-300"
                      style={{
                        color: theme.blockLabelText,
                        background: theme.blockLabelBg,
                        border: `1px solid ${theme.border}`,
                      }}>
                      Block {pair.left}
                    </div>
                    {getBlockVillas(pair.left).map((villa) => {
                      const isHighlighted = isVillaHighlighted(villa);
                      return (
                        <div key={villa.id} className="relative">
                          <VillaBox
                            villa={villa}
                            isSelected={villa.id === selectedVillaId}
                            isHovered={villa.id === hoveredVillaId}
                            onClick={() => handleVillaClick(villa)}
                            onHoverStart={(e: React.MouseEvent | React.TouchEvent) => handleVillaHover(villa, e)}
                            onHoverEnd={() => handleVillaHover(null)}
                          />
                          {/* Dim overlay for non-matching villas */}
                          {!isHighlighted && (
                            <div className="absolute inset-0 rounded-xl pointer-events-none"
                              style={{
                                background: "rgba(0, 0, 0, 0.6)",
                                backdropFilter: "blur(1px)",
                              }}
                            />
                          )}
                          {/* Highlight glow for matching villas */}
                          {isHighlighted && (sftFilter || facingFilter) && (
                            <div className="absolute inset-0 rounded-xl pointer-events-none animate-pulse"
                              style={{
                                boxShadow: "0 0 20px rgba(74, 144, 226, 0.6), inset 0 0 20px rgba(74, 144, 226, 0.2)",
                                border: "2px solid rgba(74, 144, 226, 0.8)",
                              }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Block - mobile optimized */}
                  <div className="flex flex-col gap-2 md:gap-2.5 min-w-[70px] md:min-w-[85px]">
                    <div className="text-center text-[10px] md:text-xs font-bold mb-1 md:mb-1.5 tracking-[0.1em] md:tracking-[0.12em] uppercase px-1.5 md:px-2 py-0.5 md:py-1 rounded-md mx-auto"
                      style={{
                        color: "var(--accent)",
                        background: "rgba(255,255,255,0.6)",
                        border: "1px solid rgba(83, 104, 120, 0.2)",
                      }}>
                      Block {pair.right}
                    </div>
                    {getBlockVillas(pair.right).map((villa) => {
                      const isHighlighted = isVillaHighlighted(villa);
                      return (
                        <div key={villa.id} className="relative">
                          <VillaBox
                            villa={villa}
                            isSelected={villa.id === selectedVillaId}
                            isHovered={villa.id === hoveredVillaId}
                            onClick={() => handleVillaClick(villa)}
                            onHoverStart={(e: React.MouseEvent | React.TouchEvent) => handleVillaHover(villa, e)}
                            onHoverEnd={() => handleVillaHover(null)}
                          />
                          {/* Dim overlay for non-matching villas */}
                          {!isHighlighted && (
                            <div className="absolute inset-0 rounded-xl pointer-events-none"
                              style={{
                                background: "rgba(0, 0, 0, 0.6)",
                                backdropFilter: "blur(1px)",
                              }}
                            />
                          )}
                          {/* Highlight glow for matching villas */}
                          {isHighlighted && (sftFilter || facingFilter) && (
                            <div className="absolute inset-0 rounded-xl pointer-events-none animate-pulse"
                              style={{
                                boxShadow: "0 0 20px rgba(74, 144, 226, 0.6), inset 0 0 20px rgba(74, 144, 226, 0.2)",
                                border: "2px solid rgba(74, 144, 226, 0.8)",
                              }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* 25 feet road between pairs - Connected to 30 ft road */}
                  {pairIndex < blockPairs.length - 1 && (
                    <div className="flex flex-col items-center justify-start mx-2">
                      <div
                        className="w-12 relative overflow-hidden transition-all duration-300"
                        style={{
                          background: theme.roadBackground,
                          border: `1px solid ${theme.roadBorder}`,
                          minHeight: "480px",
                          boxShadow: theme.roadShadow,
                        }}
                      >
                        {/* Road texture */}
                        <div className="absolute inset-0 opacity-[0.03]"
                          style={{
                            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)",
                          }}
                        />

                        {/* Center line markings */}
                        <div className="absolute inset-0 flex flex-col items-center justify-around py-10">
                          {[...Array(12)].map((_, i) => (
                            <div key={i} className="h-4 w-0.5 rounded-full transition-all duration-300"
                              style={{
                                background: theme.roadMarkingColor,
                                opacity: 0.4
                              }}
                            />
                          ))}
                        </div>

                        {/* Edge lines */}
                        <div className="absolute top-0 bottom-0 left-1.5 w-px transition-all duration-300"
                          style={{ background: theme.roadMarkingColor, opacity: 0.25 }} />
                        <div className="absolute top-0 bottom-0 right-1.5 w-px transition-all duration-300"
                          style={{ background: theme.roadMarkingColor, opacity: 0.25 }} />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap px-3 py-1.5 rounded-md transition-all duration-300"
                          style={{
                            background: theme.roadLabelBg,
                            border: `1px solid ${theme.roadLabelBorder}`,
                            boxShadow: isNightMode ? "0 2px 8px rgba(0,0,0,0.3)" : "0 1px 3px rgba(0,0,0,0.1)"
                          }}>
                          <span className="text-[9px] font-semibold tracking-wide uppercase transition-all duration-300"
                            style={{ color: theme.roadLabelText }}>
                            25 FT ROAD
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Final 25 feet road before Recreation Zone - Connected to 30 ft road */}
              <div className="flex flex-col items-center justify-start mx-2">
                <div
                  className="w-12 relative overflow-hidden transition-all duration-300"
                  style={{
                    background: theme.roadBackground,
                    border: `1px solid ${theme.roadBorder}`,
                    minHeight: "480px",
                    boxShadow: theme.roadShadow,
                  }}
                >
                  {/* Road texture */}
                  <div className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)",
                    }}
                  />

                  {/* Center line markings */}
                  <div className="absolute inset-0 flex flex-col items-center justify-around py-10">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="h-4 w-0.5 rounded-full transition-all duration-300"
                        style={{
                          background: theme.roadMarkingColor,
                          opacity: 0.4
                        }}
                      />
                    ))}
                  </div>

                  {/* Edge lines */}
                  <div className="absolute top-0 bottom-0 left-1.5 w-px transition-all duration-300"
                    style={{ background: theme.roadMarkingColor, opacity: 0.25 }} />
                  <div className="absolute top-0 bottom-0 right-1.5 w-px transition-all duration-300"
                    style={{ background: theme.roadMarkingColor, opacity: 0.25 }} />

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap px-3 py-1.5 rounded-md transition-all duration-300"
                    style={{
                      background: theme.roadLabelBg,
                      border: `1px solid ${theme.roadLabelBorder}`,
                      boxShadow: isNightMode ? "0 2px 8px rgba(0,0,0,0.3)" : "0 1px 3px rgba(0,0,0,0.1)"
                    }}>
                    <span className="text-[9px] font-semibold tracking-wide uppercase transition-all duration-300"
                      style={{ color: theme.roadLabelText }}>
                      25 FT ROAD
                    </span>
                  </div>
                </div>
              </div>

              {/* Bommaku Recreation Zone - Private Lifestyle Complex */}
              <div className="flex flex-col min-w-[200px] md:min-w-[220px]">
                {/* Decorative greenery at top */}
                <div className="flex justify-center gap-2 mb-3 opacity-30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#5A8751" stroke="#4A7551" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="7" />
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A7551" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 2v20" />
                    <path d="M12 2C10 4 8 7 8 10c0 2 1 3 4 3s4-1 4-3c0-3-2-6-4-8z" />
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#5A8751" stroke="#4A7551" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="7" />
                  </svg>
                </div>

                <div className="text-center text-[11px] font-bold mb-4 tracking-[0.15em] uppercase px-4 py-2 rounded-xl mx-auto transition-all duration-300"
                  style={{
                    color: theme.blockLabelText,
                    background: theme.badgeBackground,
                    border: `1px solid ${theme.border}`,
                    boxShadow: isNightMode
                      ? "0 2px 8px rgba(0,0,0,0.3)"
                      : "0 2px 8px rgba(0,0,0,0.04)",
                  }}>
                  Recreation Zone
                </div>

                {/* Park & Recreation Area - dramatically different */}
                <div
                  className="flex-1 rounded-[20px] p-6 md:p-8 flex flex-col items-center justify-center text-center relative overflow-hidden transition-all duration-500"
                  style={{
                    background: theme.parkBackground,
                    border: `2px solid ${theme.parkBorder}`,
                    minHeight: "480px",
                    boxShadow: theme.parkShadow,
                  }}
                >
                  {/* Decorative trees in corners - glowing in dark mode */}
                  <div className={`absolute top-4 left-4 transition-all duration-500 ${isNightMode ? 'opacity-60' : 'opacity-40'}`}>
                    <svg width="24" height="30" viewBox="0 0 40 50"
                      style={{
                        filter: isNightMode ? 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))' : 'none'
                      }}>
                      <rect x="17" y="25" width="6" height="12" fill={theme.treeTrunk} rx="1" />
                      <ellipse cx="20" cy="23" rx="10" ry="7" fill={theme.treeColor} />
                      <ellipse cx="20" cy="18" rx="8" ry="6" fill={theme.bushColor} />
                    </svg>
                  </div>
                  <div className={`absolute top-4 right-4 transition-all duration-500 ${isNightMode ? 'opacity-60' : 'opacity-40'}`}>
                    <svg width="24" height="30" viewBox="0 0 40 50"
                      style={{
                        filter: isNightMode ? 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))' : 'none'
                      }}>
                      <rect x="17" y="25" width="6" height="12" fill={theme.treeTrunk} rx="1" />
                      <ellipse cx="20" cy="23" rx="10" ry="7" fill={theme.treeColor} />
                      <ellipse cx="20" cy="18" rx="8" ry="6" fill={theme.bushColor} />
                    </svg>
                  </div>
                  <div className={`absolute bottom-4 left-4 transition-all duration-500 ${isNightMode ? 'opacity-50' : 'opacity-30'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={theme.bushColor} stroke={theme.treeColor} strokeWidth="1.5"
                      style={{
                        filter: isNightMode ? 'drop-shadow(0 0 6px rgba(52, 211, 153, 0.6))' : 'none'
                      }}>
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                  </div>
                  <div className={`absolute bottom-4 right-4 transition-all duration-500 ${isNightMode ? 'opacity-50' : 'opacity-30'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={theme.bushColor} stroke={theme.treeColor} strokeWidth="1.5"
                      style={{
                        filter: isNightMode ? 'drop-shadow(0 0 6px rgba(52, 211, 153, 0.6))' : 'none'
                      }}>
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                  </div>

                  {/* Dark mode ambient glow */}
                  {isNightMode && (
                    <>
                      <div className="absolute inset-0 pointer-events-none animate-pulse"
                        style={{
                          background: "radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.1), transparent 60%)"
                        }}
                      />
                      <div className="absolute inset-0 pointer-events-none animate-pulse"
                        style={{
                          background: "radial-gradient(circle at 70% 70%, rgba(52, 211, 153, 0.08), transparent 60%)",
                          animationDelay: "1s"
                        }}
                      />
                    </>
                  )}

                  {/* Recreation Zone icon - glowing in dark mode */}
                  <div className="mb-6 relative z-10">
                    <div className="absolute inset-0 blur-2xl transition-opacity duration-500"
                      style={{
                        opacity: isNightMode ? 0.4 : 0.2,
                        background: isNightMode ? "#10b981" : "var(--accent)"
                      }}
                    />
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isNightMode ? "#10b981" : "var(--accent)"}
                      strokeWidth={isNightMode ? "2" : "1.5"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="relative transition-all duration-500"
                      style={{
                        filter: isNightMode
                          ? "drop-shadow(0 0 15px rgba(16, 185, 129, 0.7)) drop-shadow(0 4px 12px rgba(0,0,0,0.3))"
                          : "drop-shadow(0 4px 12px rgba(83, 104, 120, 0.15))"
                      }}
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>

                  <h4 className="font-heading text-lg md:text-xl font-light mb-1 tracking-tight transition-colors duration-300" style={{ color: theme.textPrimary }}>
                    Bommaku
                  </h4>
                  <h4 className="font-heading text-lg md:text-xl font-light mb-6 tracking-tight transition-colors duration-300" style={{ color: theme.textPrimary }}>
                    Recreation Zone
                  </h4>

                  <div className="space-y-2.5 text-xs md:text-[13px] transition-colors duration-300" style={{ color: theme.textSecondary }}>
                    <div className="flex items-center gap-2.5 justify-center">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                      <p className="tracking-tight font-medium">Swimming Pool</p>
                    </div>
                    <div className="flex items-center gap-2.5 justify-center">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                      <p className="tracking-tight font-medium">Cabanas</p>
                    </div>
                    <div className="flex items-center gap-2.5 justify-center">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                      <p className="tracking-tight font-medium">Pickleball Court</p>
                    </div>
                    <div className="flex items-center gap-2.5 justify-center">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                      <p className="tracking-tight font-medium">Garden & Park</p>
                    </div>
                  </div>
                </div>

                {/* Greenery border at bottom - theme-aware */}
                <div className="flex justify-center gap-1.5 mt-3 opacity-25 transition-opacity duration-300">
                  {[...Array(6)].map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={theme.treeColor} stroke={isNightMode ? "#2d4a3d" : "#4A7551"} strokeWidth="1">
                      <circle cx="12" cy="12" r="6" />
                    </svg>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>

        {/* Tooltip - positioned beside hovered villa - Hidden on mobile */}
        <AnimatePresence>
          {hoveredVilla && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="fixed z-[100] pointer-events-none hidden md:block"
              style={{
                left: `${tooltipPosition.x}px`,
                top: `${tooltipPosition.y}px`,
              }}
            >
              <div
                className="px-5 py-4 rounded-xl shadow-2xl backdrop-blur-md"
                style={{
                  background: "linear-gradient(135deg, rgba(20, 25, 30, 0.97) 0%, rgba(10, 15, 20, 0.97) 100%)",
                  border: "1.5px solid rgba(255, 255, 255, 0.15)",
                  minWidth: "200px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
                  <div className="w-2 h-2 rounded-full" style={{
                    background: hoveredVilla.status === "sold" ? "#DC2626" : "var(--accent)"
                  }} />
                  <p className="text-white font-bold text-base tracking-wide">
                    Villa {hoveredVilla.id}
                  </p>
                  {hoveredVilla.status === "sold" && (
                    <span className="ml-auto text-xs font-bold px-2 py-0.5 rounded" style={{
                      background: "#DC2626",
                      color: "#FFFFFF"
                    }}>
                      SOLD OUT
                    </span>
                  )}
                </div>
                <div className="space-y-1.5 text-sm" style={{ color: "#E8E3DA" }}>
                  <p className="flex justify-between">
                    <span className="opacity-70">Plot:</span>
                    <span className="font-semibold">{hoveredVilla.plotSizeLabel}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="opacity-70">Total:</span>
                    <span className="font-semibold">{hoveredVilla.totalSft.toLocaleString()} SFT</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="opacity-70">Facing:</span>
                    <span className="font-semibold">{hoveredVilla.facing}</span>
                  </p>
                  {hoveredVilla.status === "sold" && (
                    <p className="flex justify-between">
                      <span className="opacity-70">Status:</span>
                      <span className="font-semibold text-red-400">Sold Out</span>
                    </p>
                  )}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <p className="text-sm font-bold tracking-wide" style={{
                    color: hoveredVilla.status === "sold" ? "#9CA3AF" : "#D4AF37",
                    textDecoration: hoveredVilla.status === "sold" ? "line-through" : "none"
                  }}>
                    {hoveredVilla.price}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend - Mobile optimized */}
      <div className="mt-4 md:mt-6 flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2 text-[10px] md:text-xs justify-center px-2">
        <div className="flex items-center gap-1.5 md:gap-2">
          <div
            className="w-5 h-5 md:w-6 md:h-6 rounded"
            style={{
              background: "linear-gradient(135deg, var(--accent) 0%, #3d4f5c 100%)",
              border: "2px solid var(--accent)",
            }}
          />
          <span style={{ color: "var(--ink-2)" }}>Selected</span>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2">
          <div
            className="w-5 h-5 md:w-6 md:h-6 rounded"
            style={{
              background: "linear-gradient(135deg, #2a3640 0%, #1e2932 100%)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          />
          <span style={{ color: "var(--ink-2)" }}>Available</span>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2">
          <div
            className="w-5 h-5 md:w-6 md:h-6 rounded opacity-70"
            style={{
              background: "linear-gradient(135deg, #3a3527 0%, #2a251b 100%)",
              border: "1px solid rgba(201, 168, 76, 0.4)",
            }}
          />
          <span style={{ color: "var(--ink-2)" }}>Reserved</span>
        </div>
        <div className="flex items-center gap-1.5 md:gap-2">
          <div
            className="w-5 h-5 md:w-6 md:h-6 rounded"
            style={{
              background: "linear-gradient(135deg, #B91C1C 0%, #991B1B 50%, #7F1D1D 100%)",
              border: "2px solid #DC2626",
              boxShadow: "0 2px 6px rgba(185, 28, 28, 0.3)",
            }}
          />
          <span style={{ color: "var(--ink-2)" }}>Sold Out</span>
        </div>
      </div>
    </div>
    </div>
  );
}
