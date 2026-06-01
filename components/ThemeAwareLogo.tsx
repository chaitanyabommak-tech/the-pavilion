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
        className="bg-transparent aspect-square h-[54px] sm:h-[66px] lg:h-[88px] xl:h-[96px]"
      />
    );
  }

  return (
    <span
      className="relative inline-block bg-transparent h-[54px] sm:h-[66px] lg:h-[88px] xl:h-[96px]"
      role="img"
      aria-label="The Pavilion — Bommak Group"
    >
      <img
        src="/assets/logo-pavilion-dark.png"
        alt=""
        className="block h-full w-auto object-contain"
        style={{
          opacity: dark ? 0 : 1,
          transition: "opacity 300ms ease",
          pointerEvents: dark ? "none" : "auto",
        }}
      />
      <img
        src="/assets/logo-pavilion-light.png"
        alt=""
        className="block h-full w-auto object-contain absolute top-0 left-0"
        style={{
          opacity: dark ? 1 : 0,
          transition: "opacity 300ms ease",
          pointerEvents: dark ? "auto" : "none",
        }}
      />
    </span>
  );
}
