"use client";

import { useEffect, useState } from "react";

const bankRows = [
  [
    { src: "/assets/banks/sbi.svg",    alt: "SBI"         },
    { src: "/assets/banks/icici.svg",  alt: "ICICI Bank"  },
    { src: "/assets/banks/hdfc.svg",   alt: "HDFC Bank"   },
  ],
  [
    { src: "/assets/banks/bajaj.svg",  alt: "Bajaj"       },
    { src: "/assets/banks/kotak.svg",  alt: "Kotak Bank"  },
    { src: "/assets/banks/canara.svg", alt: "Karur Vysya Bank" },
  ],
];

function FooterLogo() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  if (!mounted) return <div className="footer-logo" aria-hidden="true" />;

  return (
    <img
      src={dark ? "/assets/logo-pavilion-light.png" : "/assets/logo-pavilion-dark.png"}
      alt="The Pavilion — Bommak Group"
      className="footer-logo"
    />
  );
}

export default function Footer() {
  return (
    <>
      {/* ── Bank Approval Section ──────────────────────────────────── */}
      <section className="finance-approval-section" aria-label="Bank approvals">
        <div className="finance-approval-inner">
          <h2 className="finance-heading font-heading">
            Approved for project finance by
          </h2>

          <div className="bank-logo-grid">
            {bankRows.map((row, ri) => (
              <div key={ri} className="bank-logo-row">
                {row.map((bank) => (
                  <div key={bank.alt} className="bank-logo-cell">
                    <img
                      src={bank.src}
                      alt={bank.alt}
                      className="bank-logo"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <p className="finance-more-text font-heading italic">And many more!</p>
        </div>
      </section>

      {/* ── Site Footer ─────────────────────────────────────────────── */}
      <footer className="site-footer">
        <div className="footer-inner">
          <FooterLogo />

          <nav className="footer-socials" aria-label="Social links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="YouTube"
            >
              YouTube
            </a>
          </nav>

          <div className="footer-legal">
            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <span aria-hidden="true">·</span>
              <a href="#">Terms and Conditions</a>
              <span aria-hidden="true">·</span>
              <a href="#">Disclaimer</a>
            </div>
            <p className="footer-copy">
              © 2026 Bommak Constructions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
