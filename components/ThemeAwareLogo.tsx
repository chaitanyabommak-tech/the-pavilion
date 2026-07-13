"use client";

import { useEffect, useState } from "react";

export default function ThemeAwareLogo() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const readDark = () =>
      document.documentElement.getAttribute("data-theme") === "dark";
    const checkMobile = () => window.innerWidth <= 767;

    setDark(readDark());
    setIsMobile(checkMobile());
    setMounted(true);

    const observer = new MutationObserver(() => setDark(readDark()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!mounted) {
    return (
      <div
        className="navbar__logo"
        style={{
          width: "32px",
          height: "28px"
        }}
      />
    );
  }

  return (
    <img
      src={isMobile ? "/images/logo-icon.svg" : "/images/logo-bommaku.svg"}
      alt="Bommaku Group"
      className="navbar__logo block"
      style={{
        width: isMobile ? "32px" : "clamp(128px, 10.5vw, 168px)",
        height: isMobile ? "28px" : "auto",
        maxHeight: isMobile ? "28px" : "46px",
        objectFit: "contain",
        objectPosition: "left center",
        filter: dark ? "invert(1) brightness(2)" : "none",
        transition: "filter 300ms ease",
        flexShrink: 0,
      }}
    />
  );
}
