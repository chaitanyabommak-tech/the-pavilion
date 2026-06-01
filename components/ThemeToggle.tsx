"use client";

import { useEffect, useState } from "react";

function SunIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("pavilion-theme");
    const isDark = saved === "dark";
    setDark(isDark);
    setMounted(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    const theme = next ? "dark" : "light";
    localStorage.setItem("pavilion-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }

  // Invisible placeholder prevents layout shift during hydration
  if (!mounted) {
    return (
      <div
        aria-hidden
        style={{ width: 52, height: 26, borderRadius: 13, flexShrink: 0 }}
      />
    );
  }

  return (
    <button
      role="switch"
      aria-checked={dark}
      aria-label="Toggle Light / Dark mode"
      onClick={toggle}
      className="relative flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-muted-gold focus-visible:ring-offset-1 rounded-full"
      style={{
        width: 52,
        height: 26,
        padding: 3,
        background: dark
          ? "rgba(14, 12, 10, 0.92)"
          : "rgba(255, 255, 255, 0.82)",
        border: dark
          ? "1px solid rgba(255,255,255,0.10)"
          : "1px solid rgba(80,65,85,0.18)",
        boxShadow: dark
          ? "inset 0 1px 3px rgba(0,0,0,0.5)"
          : "inset 0 1px 2px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.08)",
        transition:
          "background 300ms ease, border-color 300ms ease, box-shadow 300ms ease",
      }}
    >
      {/* ── Sliding knob ── */}
      <span
        style={{
          position: "absolute",
          top: 3,
          left: 3,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: dark ? "#1C2820" : "#FFFFFF",
          boxShadow: dark
            ? "0 1px 5px rgba(0,0,0,0.6)"
            : "0 1px 5px rgba(0,0,0,0.14)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: dark ? "translateX(26px)" : "translateX(0)",
          transition:
            "transform 300ms cubic-bezier(0.4, 0, 0.2, 1), background 300ms ease",
          color: "#C9A84C",
        }}
      >
        {dark ? <MoonIcon size={11} /> : <SunIcon size={11} />}
      </span>

      {/* ── Faint hint icon on the inactive side ── */}
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          ...(dark ? { left: 7 } : { right: 7 }),
          opacity: 0.22,
          color: dark ? "#9A8F87" : "#6B6360",
          display: "flex",
          alignItems: "center",
          pointerEvents: "none",
          transition: "opacity 300ms ease",
        }}
      >
        {dark ? <SunIcon size={10} /> : <MoonIcon size={10} />}
      </span>
    </button>
  );
}
