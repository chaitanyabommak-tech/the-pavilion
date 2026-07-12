"use client";

import { useEffect, useState } from "react";

export default function ThemeAwareLogo() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const readDark = () =>
      document.documentElement.getAttribute("data-theme") === "dark";
    setDark(readDark());
    setMounted(true);
    const observer = new MutationObserver(() => setDark(readDark()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  if (!mounted) {
    return (
      <div
        className="bg-transparent"
        style={{
          width: "clamp(110px, 30vw, 140px)",
          height: "auto"
        }}
      />
    );
  }

  return (
    <img
      src="/images/logo-bommaku.svg"
      alt="Bommaku Group"
      className="block"
      style={{
        width: "clamp(110px, 30vw, 140px)",
        height: "auto",
        maxHeight: "48px",
        objectFit: "contain",
        filter: dark ? "invert(1) brightness(2)" : "none",
        transition: "filter 300ms ease",
        flexShrink: 0,
      }}
    />
  );
}
