"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stats = [
  { value: "45",            label: "Villas"        },
  { value: "G+1+Penthouse", label: "Config"        },
  { value: "3 Acres",       label: "Site Area"     },
  { value: "30,000 SFT",   label: "Rec Zone"      },
  { value: "Boduppal",      label: "East Hyd."     },
];

export default function DisclaimerOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (visible) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32 }}
          className="disclaimer-overlay fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            background: "rgba(8, 6, 4, 0.78)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            padding: "16px",
          } as React.CSSProperties}
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-heading"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.42, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="disclaimer-card"
            style={{
              background: "#F3F0EA",
              border: "1px solid rgba(0,0,0,0.13)",
              boxShadow: "0 24px 70px rgba(0,0,0,0.20), 0 4px 18px rgba(0,0,0,0.10)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="disclaimer-content">

              {/* ── Header ── */}
              <div className="disclaimer-header">
                {/* Left: title */}
                <div className="disclaimer-title-block">
                  <p className="disclaimer-eyebrow" style={{ color: "#9A9087" }}>
                    Entry Notice
                  </p>
                  <h1
                    id="disclaimer-heading"
                    className="disclaimer-title font-heading font-light"
                    style={{ color: "#1A1510", lineHeight: 1 }}
                  >
                    Disclaimer
                  </h1>
                  <div className="disclaimer-rule-line" style={{ background: "#C9A84C" }} />
                </div>

                {/* Right: branding */}
                <div className="disclaimer-brand">
                  <p
                    className="font-heading font-semibold"
                    style={{ color: "#1A1510", letterSpacing: "0.07em" }}
                  >
                    THE PAVILLION
                  </p>
                  <p style={{ color: "#7A7068" }}>Bommaku Group</p>
                  <p className="disclaimer-brand-location" style={{ color: "#9A928A" }}>
                    Surya Hills, Boduppal, Hyderabad
                  </p>
                </div>
              </div>

              {/* ── Divider ── */}
              <div className="disclaimer-hr" style={{ borderTop: "1px solid rgba(0,0,0,0.10)" }} />

              {/* ── Body paragraphs ── */}
              <div className="disclaimer-body" style={{ color: "#4A4440" }}>
                {/* Para 1 — shown on all breakpoints */}
                <p>
                  By continuing to this website, you acknowledge and agree that all information,
                  visuals, layouts, specifications, dimensions, amenities, pricing, and descriptions
                  shown are{" "}
                  <strong style={{ color: "#2A2018", fontWeight: 600 }}>
                    indicative and for general information purposes only
                  </strong>
                  . They may be updated or changed at the sole discretion of the developer,
                  approving authorities, architects, or project team.
                </p>

                {/* Para 2 — hidden on mobile via CSS */}
                <p className="disclaimer-p2">
                  The Pavillion is a proposed premium villa community in Boduppal, East Hyderabad —
                  45 villas, G+1+Penthouse configuration, 3&nbsp;acres site area, 30,000&nbsp;SFT
                  recreation zone. All project details including approvals, pricing, availability,
                  and legal documentation must be verified directly with the company before any
                  purchase decision.
                </p>

                {/* Para 3 — hidden on mobile via CSS */}
                <p className="disclaimer-p3">
                  Images, renders, elevations, amenities, and artistic impressions are for
                  representational purposes only. Final execution may vary based on technical,
                  regulatory, site, material, or design conditions. Nothing on this website is
                  a final offer, legal commitment, or binding representation.
                </p>

                {/* Accept line — always shown */}
                <p className="disclaimer-accept-line" style={{ color: "#2A2018", fontWeight: 500 }}>
                  By clicking &ldquo;Accept &amp; Continue&rdquo;, you confirm that you have
                  read, understood, and accepted this disclaimer.
                </p>
              </div>

              {/* ── Stats strip ── */}
              <div
                className="disclaimer-stats"
                style={{
                  background: "rgba(255,255,255,0.80)",
                  border: "1px solid rgba(0,0,0,0.09)",
                }}
              >
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="disclaimer-stat-item"
                    style={i > 0 ? { borderLeft: "1px solid rgba(0,0,0,0.08)" } : {}}
                  >
                    <p
                      className="disclaimer-stat-value font-stat"
                      style={{ color: "#1A1510" }}
                    >
                      {s.value}
                    </p>
                    <p
                      className="disclaimer-stat-label"
                      style={{ color: "#7A7068", letterSpacing: "0.20em" }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* ── Footer ── */}
              <div className="disclaimer-footer">
                <button
                  onClick={() => setVisible(false)}
                  className="disclaimer-accept-btn"
                  style={{ background: "#5B4766" }}
                >
                  Accept &amp; Continue
                </button>

                <div className="disclaimer-footer-note">
                  <p style={{ color: "#5C5654" }}>Registered HMDA Circle Project</p>
                  <p className="disclaimer-reg-sub" style={{ color: "#9A928A" }}>
                    Registration details available on request
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
