"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import LeadFormModal from "./LeadFormModal";
import SchematicMasterPlan from "./floorplan/SchematicMasterPlan";
import SelectedVillaPanel from "./floorplan/SelectedVillaPanel";
import FloorPlanViewer from "./floorplan/FloorPlanViewer";
import { pavilionVillas as fallbackPavilionVillas, Villa } from "@/data/pavilionVillas";

const types = [
  { id: "a", label: "Type A" },
  { id: "b", label: "Type B" },
  { id: "c", label: "Type C" },
];

const villas = [
  { typeId:"a", label:"Type A — East Facing",    plot:"150 Sq. Yds", dimensions:"30 × 45 ft", builtup:"Ground: 888 | First: 888 | Second: 590 SFT", floors:"G+1+Penthouse", facing:"East",       floorplan:"/assets/floorplan-150e.png",  price:"₹1.7 Cr onwards"  },
  { typeId:"a", label:"Type A — West Facing",    plot:"150 Sq. Yds", dimensions:"30 × 45 ft", builtup:"Ground: 888 | First: 888 | Second: 590 SFT", floors:"G+1+Penthouse", facing:"West",       floorplan:"/assets/floorplan-150w.png",  price:"₹1.7 Cr onwards"  },
  { typeId:"b", label:"Type B — 165 NE Facing",  plot:"165 Sq. Yds", dimensions:"33 × 45 ft", builtup:"Ground: 802 | First: 802 | Second: 546 SFT", floors:"G+1+Penthouse", facing:"North East", floorplan:"/assets/floorplan-165ne.png", price:"₹1.9 Cr onwards"  },
  { typeId:"b", label:"Type B — 165 NW Facing",  plot:"165 Sq. Yds", dimensions:"33 × 45 ft", builtup:"Ground: 802 | First: 802 | Second: 546 SFT", floors:"G+1+Penthouse", facing:"North West", floorplan:"/assets/floorplan-165nw.png", price:"₹1.9 Cr onwards"  },
  { typeId:"b", label:"Type B — 167 East Facing",plot:"167 Sq. Yds", dimensions:"30 × 50 ft", builtup:"Ground: 866 | First: 866 | Second: 603 SFT", floors:"G+1+Penthouse", facing:"East",       floorplan:"/assets/floorplan-167e.png",  price:"₹2.1 Cr onwards"  },
  { typeId:"c", label:"Type C — 222 West Facing",plot:"222 Sq. Yds", dimensions:"Varies",      builtup:"Ground: 925 | First: 925 | Second: 925 SFT", floors:"G+1+Penthouse", facing:"West",       floorplan:"/assets/floorplan-222w.png",  price:"₹2.25 Cr onwards" },
  { typeId:"c", label:"Type C — 227 East Facing",plot:"227 Sq. Yds", dimensions:"Varies",      builtup:"Ground: 950 | First: 950 | Second: 616 SFT", floors:"G+1+Penthouse", facing:"East",       floorplan:"/assets/floorplan-227e.png",  price:"₹2.5 Cr onwards"  },
];

const specs = [
  "3 BHK + Pooja Room",
  "Home Theatre on Penthouse",
  "Covered car parking",
  "Private compound wall & gate",
  "100% Vastu layout",
];

interface VillaConfigurationsProps {
  villas?: Villa[]; // Database villas prop
}

export default function VillaConfigurations({ villas: dbVillas }: VillaConfigurationsProps = {}) {
  // Use database villas if provided, fallback to hardcoded
  const pavilionVillas = dbVillas || fallbackPavilionVillas;
  // Original floor plan state
  const [activeType, setActiveType] = useState("a");
  const [activeVilla, setActiveVilla] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Interactive master plan state
  const [selectedVilla, setSelectedVilla] = useState<Villa | null>(null);
  const [showMasterPlan, setShowMasterPlan] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = villas.filter((v) => v.typeId === activeType);
  const current = filtered[activeVilla] ?? filtered[0];

  function handleTypeChange(id: string) {
    setActiveType(id);
    setActiveVilla(0);
  }

  const handleVillaSelectFromMasterPlan = (villa: Villa) => {
    setSelectedVilla(villa);

    // Scroll to villa details panel
    setTimeout(() => {
      const villaDetailsPanel = document.getElementById("villa-details-panel");
      if (villaDetailsPanel) {
        villaDetailsPanel.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 300);
  };

  // URL deep linking for master plan
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const villaParam = params.get("villa");
    if (villaParam) {
      const villa = pavilionVillas.find((v) => v.id.toLowerCase() === villaParam.toLowerCase());
      if (villa) {
        setSelectedVilla(villa);
        setShowMasterPlan(true);
      }
    }
  }, []);

  return (
    <>
      <section
        id="floor-plans"
        ref={ref}
        className="py-10 md:py-14"
        style={{ background: "var(--bg)", transition: "background-color 300ms ease" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Header — visible on all breakpoints */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-6 md:mb-8"
          >
            <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-3">
              Villa Configurations
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-light">
                Floor Plans.
              </h2>
              <p style={{ color: "var(--ink-2)" }} className="text-sm max-w-xs">
                Three types, seven configurations. All G+1+Penthouse.
              </p>
            </div>
            <div className="w-12 h-px mt-4" style={{ background: "var(--accent)" }} />
          </motion.div>

          {/* ══════════════════════════════════════════
              MOBILE ONLY — Elena-style layout
              Hidden on md+ (tablet+) via md:hidden
              ══════════════════════════════════════════ */}
          <div className="mob-fp-mobile md:hidden">

            {/* Type tabs */}
            <div
              className="mob-fp-tabs-wrap"
              style={{ borderBottom: "1px solid var(--edge)" }}
            >
              {types.map((t) => (
                <button
                  key={t.id}
                  className="mob-fp-tab font-heading"
                  onClick={() => handleTypeChange(t.id)}
                  style={{
                    borderBottom: activeType === t.id ? "2px solid var(--accent)" : "2px solid transparent",
                    color: activeType === t.id ? "var(--ink)" : "var(--ink-2)",
                    marginBottom: "-1px",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Option cards — horizontal scroll */}
            <div className="mob-fp-cards-wrap">
              {filtered.map((villa, i) => (
                <button
                  key={villa.label}
                  className="mob-fp-card"
                  onClick={() => setActiveVilla(i)}
                  style={{
                    border: `1px solid ${activeVilla === i ? "var(--sel-bd)" : "var(--edge)"}`,
                    background: activeVilla === i ? "var(--sel-bg)" : "transparent",
                  }}
                >
                  <div className="mob-fp-card-thumb" style={{ background: "var(--fp-bg)" }}>
                    <img src={villa.floorplan} alt={villa.label} />
                  </div>
                  <span className="mob-fp-card-facing" style={{ color: "var(--ink-2)" }}>
                    {villa.facing}
                  </span>
                  <span className="mob-fp-card-plot" style={{ color: "var(--ink)" }}>
                    {villa.plot}
                  </span>
                  <span className="mob-fp-card-price" style={{ color: "var(--accent)" }}>
                    {villa.price}
                  </span>
                </button>
              ))}
            </div>

            {current && (
              <>
                {/* Plan title */}
                <h3
                  className="mob-fp-plan-title font-heading"
                  style={{ color: "var(--ink)" }}
                >
                  {current.label}
                </h3>

                {/* Floor plan image */}
                <div
                  className="mob-fp-img-wrap relative cursor-zoom-in group"
                  style={{ border: "1px solid var(--edge)", background: "var(--fp-bg)" }}
                  onClick={() => setLightboxOpen(true)}
                >
                  <img
                    src={current.floorplan}
                    alt={`${current.label} floor plan`}
                    className="mob-fp-img"
                  />
                  <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1.5 flex items-center gap-2">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                      <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
                    </svg>
                    Tap to expand
                  </div>
                </div>

                {/* Spec table */}
                <div
                  className="mob-fp-spec-table"
                  style={{ borderTop: "1px solid var(--edge)" }}
                >
                  {[
                    { k: "Plot Size",  v: current.plot       },
                    { k: "Dimensions", v: current.dimensions },
                    { k: "Built-up",   v: current.builtup    },
                    { k: "Floors",     v: current.floors     },
                    { k: "Price",      v: current.price      },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="mob-fp-spec-row"
                      style={{ borderBottom: "1px solid var(--edge)" }}
                    >
                      <span className="mob-fp-spec-key" style={{ color: "var(--ink-2)" }}>
                        {row.k}
                      </span>
                      <span className="mob-fp-spec-val" style={{ color: "var(--ink)" }}>
                        {row.v}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Enquire button */}
                <div className="mob-fp-enquire-wrap">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="btn-primary mob-fp-enquire-btn"
                  >
                    Enquire About This Villa
                  </button>
                </div>
              </>
            )}
          </div>

          {/* ══════════════════════════════════════════
              DESKTOP ONLY — Type tabs + grid
              Hidden on mobile via hidden lg:flex / hidden lg:grid
              ══════════════════════════════════════════ */}

          {/* Desktop type tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ borderBottom: "1px solid var(--edge)" }}
            className="hidden md:flex gap-1 mb-6 md:mb-8"
          >
            {types.map((t) => (
              <button
                key={t.id}
                onClick={() => handleTypeChange(t.id)}
                style={{
                  borderBottom: activeType === t.id ? "2px solid var(--accent)" : "2px solid transparent",
                  color: activeType === t.id ? "var(--ink)" : "var(--ink-2)",
                  marginBottom: "-1px",
                }}
                className="px-4 sm:px-6 py-2.5 text-sm tracking-[0.1em] uppercase transition-all duration-300"
              >
                {t.label}
              </button>
            ))}
          </motion.div>

          {/* Desktop villa grid */}
          <div className="villa-grid hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

            {/* Left: sub-type list + specs */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="villa-left flex flex-col gap-2.5"
            >
              {/* Sub-type selector */}
              <div className="villa-selector flex flex-col gap-2.5">
                {filtered.map((villa, i) => (
                  <button
                    key={villa.label}
                    onClick={() => setActiveVilla(i)}
                    className="text-left p-3.5 transition-all duration-200 shrink-0"
                    style={{
                      border: `1px solid ${activeVilla === i ? "var(--sel-bd)" : "var(--edge)"}`,
                      background: activeVilla === i ? "var(--sel-bg)" : "transparent",
                    }}
                  >
                    <p style={{ color: "var(--ink)" }} className="text-sm font-medium">{villa.label}</p>
                    <p style={{ color: "var(--ink-2)" }} className="text-xs mt-0.5">{villa.plot} · {villa.facing}</p>
                    <p className="text-xs font-semibold mt-0.5" style={{ color: "var(--accent)" }}>{villa.price}</p>
                  </button>
                ))}
              </div>

              {/* Specs */}
              <div className="villa-specs mt-2 pt-3 shrink-0" style={{ borderTop: "1px solid var(--edge)" }}>
                {current && (
                  <div className="space-y-1.5 mb-4">
                    {[
                      { k: "Plot Size",  v: current.plot       },
                      { k: "Dimensions", v: current.dimensions },
                      { k: "Built-up",   v: current.builtup    },
                      { k: "Floors",     v: current.floors     },
                    ].map((row) => (
                      <div
                        key={row.k}
                        style={{ borderBottom: "1px solid var(--edge)" }}
                        className="flex justify-between py-1"
                      >
                        <span style={{ color: "var(--ink-2)" }} className="text-xs uppercase tracking-wide">{row.k}</span>
                        <span style={{ color: "var(--ink)" }} className="text-xs text-right max-w-[60%]">{row.v}</span>
                      </div>
                    ))}
                  </div>
                )}
                <button
                  onClick={() => setModalOpen(true)}
                  style={{ border: "1px solid var(--out-bd)", color: "var(--out-tx)" }}
                  className="w-full py-2.5 text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity duration-300"
                >
                  Enquire
                </button>
              </div>
            </motion.div>

            {/* Right: floor plan image */}
            <motion.div
              key={current?.floorplan}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="villa-right md:col-span-2"
            >
              {current && (
                <div
                  className="w-full cursor-zoom-in relative group overflow-hidden"
                  style={{ background: "var(--fp-bg)", border: "1px solid var(--edge)" }}
                  onClick={() => setLightboxOpen(true)}
                >
                  <img
                    src={current.floorplan}
                    alt={`${current.label} floor plan`}
                    className="w-full object-contain block"
                    style={{ maxHeight: "62vh" }}
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/70 text-white text-xs px-3 py-1.5 flex items-center gap-2">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" />
                      <line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" />
                    </svg>
                    Expand
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Desktop common specs strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ borderTop: "1px solid var(--edge)" }}
            className="hidden md:block pt-5 mt-6 md:mt-10"
          >
            <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4 text-center">
              Included in Every Villa
            </p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              {specs.map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full inline-block shrink-0" style={{ background: "var(--accent)" }} />
                  <span style={{ color: "var(--ink)" }} className="text-sm">{s}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════
              INTERACTIVE MASTER PLAN SECTION - NEW!
              ══════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ borderTop: "1px solid var(--edge)" }}
            className="pt-10 mt-10 md:mt-14"
            id="interactive-master-plan-section"
          >
            {/* Header with toggle */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
              <div>
                <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-3">
                  Choose Your Villa
                </p>
                <h3 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl lg:text-4xl font-light">
                  Choose Your Villa From the Master Plan
                </h3>
                <p style={{ color: "var(--ink-2)" }} className="text-sm mt-2 max-w-2xl">
                  Select a villa directly from the layout to view its plot size, facing, total built-up area, and floor plan.
                </p>
                <div className="w-12 h-px mt-4" style={{ background: "var(--accent)" }} />
              </div>
              <button
                onClick={() => setShowMasterPlan(!showMasterPlan)}
                className="btn-primary w-full md:w-auto px-6 py-3 text-xs tracking-[0.2em] uppercase"
              >
                {showMasterPlan ? "Hide Master Plan" : "View Master Plan"}
              </button>
            </div>

            {/* Master Plan Expandable Section */}
            <AnimatePresence>
              {showMasterPlan && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  {/* Schematic Master Plan + Villa Details */}
                  <div className="space-y-6">
                    {/* Master Plan */}
                    <div>
                      <SchematicMasterPlan
                        selectedVillaId={selectedVilla?.id || null}
                        onVillaSelect={handleVillaSelectFromMasterPlan}
                        villas={pavilionVillas}
                      />
                    </div>

                    {/* Floor Plan & Villa Details Panel (Appears When Selected) */}
                    {selectedVilla && (
                      <motion.div
                        id="villa-details-panel"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
                      >
                        {/* Floor Plan Viewer */}
                        <div className="lg:col-span-2">
                          <FloorPlanViewer villa={selectedVilla} />
                        </div>

                        {/* Villa Details Panel */}
                        <div className="lg:col-span-1">
                          <SelectedVillaPanel
                            villa={selectedVilla}
                            onEnquire={() => setModalOpen(true)}
                          />
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Mobile Helper Text */}
                  <div
                    className="lg:hidden p-4 text-center text-xs rounded"
                    style={{
                      background: "var(--card)",
                      border: "1px solid var(--edge)",
                      color: "var(--ink-2)",
                    }}
                  >
                    <span style={{ color: "var(--accent)" }} className="font-semibold">Tip:</span> Scroll horizontally to view all villa blocks. Tap any villa box to see details and floor plan.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Floor plan lightbox */}
      <AnimatePresence>
        {lightboxOpen && current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[8000] bg-black/97 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-[#EDE8E3] text-3xl hover:text-[#8A7F78] transition-colors z-10"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close"
            >×</button>
            <img
              src={current.floorplan}
              alt={`${current.label} floor plan`}
              className="max-w-5xl max-h-[90vh] w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {modalOpen && <LeadFormModal type="enquire" onClose={() => setModalOpen(false)} />}
    </>
  );
}
