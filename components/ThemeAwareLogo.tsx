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
        className="bg-transparent h-[42px] sm:h-[48px] lg:h-[52px] xl:h-[56px]"
      />
    );
  }

  return (
    <img
      src="/images/logo-bommaku.svg"
      alt="Bommaku Group"
      className="h-[42px] sm:h-[48px] lg:h-[52px] xl:h-[56px] w-auto"
      style={{
        filter: dark ? "invert(1) brightness(2)" : "none",
        transition: "filter 300ms ease",
      }}
    />
  );
}
