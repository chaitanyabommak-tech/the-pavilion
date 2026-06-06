"use client";

import { motion } from "framer-motion";
import { Villa } from "@/data/pavilionVillas";

interface VillaBoxProps {
  villa: Villa;
  isSelected: boolean;
  isHovered: boolean;
  onClick: () => void;
  onHoverStart: (event: React.MouseEvent | React.TouchEvent) => void;
  onHoverEnd: () => void;
}

export default function VillaBox({
  villa,
  isSelected,
  isHovered,
  onClick,
  onHoverStart,
  onHoverEnd,
}: VillaBoxProps) {
  const getBoxStyle = () => {
    if (villa.status === "sold") {
      return {
        background: "linear-gradient(135deg, #B91C1C 0%, #991B1B 50%, #7F1D1D 100%)",
        border: "2px solid #DC2626",
        color: "#FFFFFF",
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(185, 28, 28, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)",
      };
    }

    if (isSelected) {
      return {
        background: "linear-gradient(135deg, var(--accent) 0%, #4a6575 50%, #3d4f5c 100%)",
        border: "2.5px solid var(--accent)",
        color: "#FFFFFF",
        boxShadow: "0 8px 20px rgba(83, 104, 120, 0.5), 0 0 0 4px rgba(83, 104, 120, 0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
      };
    }

    if (isHovered) {
      return {
        background: "linear-gradient(135deg, #3d5060 0%, #2e3f4d 50%, #1f2931 100%)",
        border: "2px solid var(--accent)",
        color: "#FFFFFF",
        boxShadow: "0 6px 16px rgba(83, 104, 120, 0.3), 0 2px 6px rgba(0, 0, 0, 0.15)",
      };
    }

    if (villa.status === "reserved") {
      return {
        background: "linear-gradient(135deg, #4A4233 0%, #3a3527 50%, #2a251b 100%)",
        border: "1.5px solid rgba(212, 175, 55, 0.4)",
        color: "rgba(212, 175, 55, 0.95)",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1), inset 0 1px 0 rgba(212, 175, 55, 0.1)",
      };
    }

    return {
      background: "linear-gradient(135deg, #3d4f5c 0%, #2a3640 50%, #1e2932 100%)",
      border: "1.5px solid rgba(255, 255, 255, 0.12)",
      color: "rgba(255, 255, 255, 0.9)",
      boxShadow: "0 2px 6px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
    };
  };

  const style = getBoxStyle();
  const isSold = villa.status === "sold";

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onTouchStart={onHoverStart}
      onTouchEnd={onHoverEnd}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.97 }}
      style={style}
      className="relative w-full aspect-square rounded-xl transition-all duration-300 flex items-center justify-center font-medium text-sm tracking-wide overflow-hidden"
      aria-label={isSold ? `View details for Villa ${villa.id}, ${villa.plotSizeLabel}, sold out` : `Villa ${villa.id}, ${villa.plotSizeLabel}, ${villa.facing} facing, ${villa.status}`}
    >
      {/* Subtle shine effect */}
      {!isSold && (
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent 70%)"
          }}
        />
      )}

      <span className="relative z-10 font-bold text-base tracking-wide">
        {villa.id}
      </span>

      {/* Status badge for sold villas */}
      {villa.status === "sold" && (
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded"
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            color: "#FFFFFF",
            textShadow: "0 1px 2px rgba(0,0,0,0.5)"
          }}
        >
          SOLD
        </span>
      )}
      {villa.status === "reserved" && (
        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-amber-400"
          style={{
            boxShadow: "0 0 8px rgba(251, 191, 36, 0.8)"
          }}
        />
      )}
    </motion.button>
  );
}
