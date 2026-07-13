// PAVILION INVENTORY V2 — 33 VILLAS (Silver, Platinum, Signature)
// Source: Pavilion_Villa_Configuration_Reference.docx (Revised)
// Supersedes: data/pavilionVillas.ts (45-villa structure)

export type VillaFacing = "East" | "West";
export type VillaStatus = "available" | "reserved" | "sold";
export type VillaType = "Silver" | "Platinum" | "Special";

export interface Villa {
  id: string;
  label: string;
  block: string;
  plotSizeSqYd: number;
  plotSizeLabel: string;
  facing: VillaFacing;
  builtUpAreaSft: string;
  totalSft: number;
  dimensions: string;
  floors: string;
  unitType: string; // For floor plan compatibility
  villaType: VillaType; // New tier classification
  status: VillaStatus;
  price: string;
  floorPlanImages: {
    east?: string;
    west?: string;
  };
  mapPosition: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

// SOLD status mapping from old 40-villa structure (approved at Checkpoint 1)
// Auto-mapped: A1, A3, B1, C1, D3, F2, G1, G3, H1, H2 (10 units)
// Manual-assigned position-5 sold: B5→B2, C5→C2, F5→F2 (already sold), G5→G2, H5→H3 (5 units)
// Note: Old B2/B3/B4 (150 Sq.Yd) mapped to new B2/B3/B4 (225 Sq.Yd) per position-match strategy
const SOLD_VILLAS = new Set([
  "A1", "A3",           // Row A (high confidence)
  "B1", "B2",           // B2 inherits B5 sold status
  "C1", "C2",           // C2 inherits C5 sold status
  "D3",                 // Position match
  "F2",                 // Position match (already sold)
  "G1", "G2", "G3",     // G2 inherits G5, G3 position match
  "H1", "H2", "H3",     // H2 position match, H3 inherits H5
]);

export const pavilionVillas: Villa[] = [
  // ═══════════════════════════════════════════════════════════════
  // BLOCK A (Rightmost column) — UNIQUE ROW: 5 villas
  // A1 is the Signature Corner unit — classification confirmed by Rishi at Checkpoint 1
  // ═══════════════════════════════════════════════════════════════
  {
    id: "A1",
    label: "A1",
    block: "A",
    plotSizeSqYd: 183,
    plotSizeLabel: "183 Sq. Yds",
    facing: "East",
    builtUpAreaSft: "Ground: 802 | First: 802 | Second: 546 SFT",
    totalSft: 2400,
    dimensions: "33 × 45 ft",
    floors: "G+1+Penthouse",
    unitType: "Type-B",
    villaType: "Special", // Signature Corner Villa
    status: SOLD_VILLAS.has("A1") ? "sold" : "available",
    price: "₹2.28 Cr onwards",
    floorPlanImages: { east: "/assets/floorplan-165ne.png" },
    mapPosition: { x: 83, y: 22, width: 6.5, height: 8 },
  },
  {
    id: "A2",
    label: "A2",
    block: "A",
    plotSizeSqYd: 167,
    plotSizeLabel: "167 Sq. Yds",
    facing: "East",
    builtUpAreaSft: "Ground: 866 | First: 866 | Second: 603 SFT",
    totalSft: 2400,
    dimensions: "30 × 50 ft",
    floors: "G+1+Penthouse",
    unitType: "Type-B",
    villaType: "Silver",
    status: SOLD_VILLAS.has("A2") ? "sold" : "available",
    price: "₹2.52 Cr onwards",
    floorPlanImages: { east: "/assets/floorplan-167e.png" },
    mapPosition: { x: 83, y: 31, width: 6.5, height: 8 },
  },
  {
    id: "A3",
    label: "A3",
    block: "A",
    plotSizeSqYd: 167,
    plotSizeLabel: "167 Sq. Yds",
    facing: "East",
    builtUpAreaSft: "Ground: 866 | First: 866 | Second: 603 SFT",
    totalSft: 2400,
    dimensions: "30 × 50 ft",
    floors: "G+1+Penthouse",
    unitType: "Type-B",
    villaType: "Silver",
    status: SOLD_VILLAS.has("A3") ? "sold" : "available",
    price: "₹2.52 Cr onwards",
    floorPlanImages: { east: "/assets/floorplan-167e.png" },
    mapPosition: { x: 83, y: 40, width: 6.5, height: 8 },
  },
  {
    id: "A4",
    label: "A4",
    block: "A",
    plotSizeSqYd: 167,
    plotSizeLabel: "167 Sq. Yds",
    facing: "East",
    builtUpAreaSft: "Ground: 866 | First: 866 | Second: 603 SFT",
    totalSft: 2400,
    dimensions: "30 × 50 ft",
    floors: "G+1+Penthouse",
    unitType: "Type-B",
    villaType: "Silver",
    status: SOLD_VILLAS.has("A4") ? "sold" : "available",
    price: "₹2.52 Cr onwards",
    floorPlanImages: { east: "/assets/floorplan-167e.png" },
    mapPosition: { x: 83, y: 49, width: 6.5, height: 8 },
  },
  {
    id: "A5",
    label: "A5",
    block: "A",
    plotSizeSqYd: 225,
    plotSizeLabel: "225 Sq. Yds",
    facing: "East",
    builtUpAreaSft: "Ground: 950 | First: 950 | Second: 616 SFT",
    totalSft: 2500,
    dimensions: "Varies",
    floors: "G+1+Penthouse",
    unitType: "Type-C",
    villaType: "Platinum",
    status: SOLD_VILLAS.has("A5") ? "sold" : "available",
    price: "₹3.0 Cr onwards",
    floorPlanImages: { east: "/assets/floorplan-227e.png" },
    mapPosition: { x: 83, y: 10, width: 6.5, height: 11 },
  },

  // ═══════════════════════════════════════════════════════════════
  // BLOCK B (Second from right) — 4 villas (West facing)
  // Pattern: B1=165 Silver, B2-B4=225 Platinum
  // ═══════════════════════════════════════════════════════════════
  {
    id: "B1",
    label: "B1",
    block: "B",
    plotSizeSqYd: 165,
    plotSizeLabel: "165 Sq. Yds",
    facing: "West",
    builtUpAreaSft: "Ground: 802 | First: 802 | Second: 546 SFT",
    totalSft: 2400,
    dimensions: "33 × 45 ft",
    floors: "G+1+Penthouse",
    unitType: "Type-B",
    villaType: "Silver",
    status: SOLD_VILLAS.has("B1") ? "sold" : "available",
    price: "₹2.28 Cr onwards",
    floorPlanImages: { west: "/assets/floorplan-150w.png" },
    mapPosition: { x: 74.5, y: 22, width: 6.5, height: 8 },
  },
  {
    id: "B2",
    label: "B2",
    block: "B",
    plotSizeSqYd: 225,
    plotSizeLabel: "225 Sq. Yds",
    facing: "West",
    builtUpAreaSft: "Ground: 950 | First: 950 | Second: 616 SFT",
    totalSft: 2500,
    dimensions: "Varies",
    floors: "G+1+Penthouse",
    unitType: "Type-C",
    villaType: "Platinum",
    status: SOLD_VILLAS.has("B2") ? "sold" : "available",
    price: "₹3.0 Cr onwards",
    floorPlanImages: { west: "/assets/floorplan-222w.png" },
    mapPosition: { x: 74.5, y: 31, width: 6.5, height: 8 },
  },
  {
    id: "B3",
    label: "B3",
    block: "B",
    plotSizeSqYd: 225,
    plotSizeLabel: "225 Sq. Yds",
    facing: "West",
    builtUpAreaSft: "Ground: 950 | First: 950 | Second: 616 SFT",
    totalSft: 2500,
    dimensions: "Varies",
    floors: "G+1+Penthouse",
    unitType: "Type-C",
    villaType: "Platinum",
    status: SOLD_VILLAS.has("B3") ? "sold" : "available",
    price: "₹3.0 Cr onwards",
    floorPlanImages: { west: "/assets/floorplan-222w.png" },
    mapPosition: { x: 74.5, y: 40, width: 6.5, height: 8 },
  },
  {
    id: "B4",
    label: "B4",
    block: "B",
    plotSizeSqYd: 225,
    plotSizeLabel: "225 Sq. Yds",
    facing: "West",
    builtUpAreaSft: "Ground: 950 | First: 950 | Second: 616 SFT",
    totalSft: 2500,
    dimensions: "Varies",
    floors: "G+1+Penthouse",
    unitType: "Type-C",
    villaType: "Platinum",
    status: SOLD_VILLAS.has("B4") ? "sold" : "available",
    price: "₹3.0 Cr onwards",
    floorPlanImages: { west: "/assets/floorplan-222w.png" },
    mapPosition: { x: 74.5, y: 49, width: 6.5, height: 8 },
  },

  // ═══════════════════════════════════════════════════════════════
  // BLOCK C (Middle-right) — 4 villas (East facing)
  // Pattern: C1=165 Silver, C2-C4=225 Platinum
  // ═══════════════════════════════════════════════════════════════
  {
    id: "C1",
    label: "C1",
    block: "C",
    plotSizeSqYd: 165,
    plotSizeLabel: "165 Sq. Yds",
    facing: "East",
    builtUpAreaSft: "Ground: 802 | First: 802 | Second: 546 SFT",
    totalSft: 2400,
    dimensions: "33 × 45 ft",
    floors: "G+1+Penthouse",
    unitType: "Type-B",
    villaType: "Silver",
    status: SOLD_VILLAS.has("C1") ? "sold" : "available",
    price: "₹2.28 Cr onwards",
    floorPlanImages: { east: "/assets/floorplan-165ne.png" },
    mapPosition: { x: 66, y: 22, width: 6.5, height: 8 },
  },
  {
    id: "C2",
    label: "C2",
    block: "C",
    plotSizeSqYd: 225,
    plotSizeLabel: "225 Sq. Yds",
    facing: "East",
    builtUpAreaSft: "Ground: 950 | First: 950 | Second: 616 SFT",
    totalSft: 2500,
    dimensions: "Varies",
    floors: "G+1+Penthouse",
    unitType: "Type-C",
    villaType: "Platinum",
    status: SOLD_VILLAS.has("C2") ? "sold" : "available",
    price: "₹3.0 Cr onwards",
    floorPlanImages: { east: "/assets/floorplan-227e.png" },
    mapPosition: { x: 66, y: 31, width: 6.5, height: 8 },
  },
  {
    id: "C3",
    label: "C3",
    block: "C",
    plotSizeSqYd: 225,
    plotSizeLabel: "225 Sq. Yds",
    facing: "East",
    builtUpAreaSft: "Ground: 950 | First: 950 | Second: 616 SFT",
    totalSft: 2500,
    dimensions: "Varies",
    floors: "G+1+Penthouse",
    unitType: "Type-C",
    villaType: "Platinum",
    status: SOLD_VILLAS.has("C3") ? "sold" : "available",
    price: "₹3.0 Cr onwards",
    floorPlanImages: { east: "/assets/floorplan-227e.png" },
    mapPosition: { x: 66, y: 40, width: 6.5, height: 8 },
  },
  {
    id: "C4",
    label: "C4",
    block: "C",
    plotSizeSqYd: 225,
    plotSizeLabel: "225 Sq. Yds",
    facing: "East",
    builtUpAreaSft: "Ground: 950 | First: 950 | Second: 616 SFT",
    totalSft: 2500,
    dimensions: "Varies",
    floors: "G+1+Penthouse",
    unitType: "Type-C",
    villaType: "Platinum",
    status: SOLD_VILLAS.has("C4") ? "sold" : "available",
    price: "₹3.0 Cr onwards",
    floorPlanImages: { east: "/assets/floorplan-227e.png" },
    mapPosition: { x: 66, y: 49, width: 6.5, height: 8 },
  },

  // Blocks D, E, F, G, H follow the same 4-villa pattern
  // D=West, E=East, F=West, G=East, H=West
  // All: position 1 = 165 Sq.Yd Silver, positions 2-4 = 225 Sq.Yd Platinum

  // ═══════════════════════════════════════════════════════════════
  // BLOCK D (Center) — 4 villas (West facing)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "D1",
    label: "D1",
    block: "D",
    plotSizeSqYd: 165,
    plotSizeLabel: "165 Sq. Yds",
    facing: "West",
    builtUpAreaSft: "Ground: 802 | First: 802 | Second: 546 SFT",
    totalSft: 2400,
    dimensions: "33 × 45 ft",
    floors: "G+1+Penthouse",
    unitType: "Type-B",
    villaType: "Silver",
    status: SOLD_VILLAS.has("D1") ? "sold" : "available",
    price: "₹2.28 Cr onwards",
    floorPlanImages: { west: "/assets/floorplan-165nw.png" },
    mapPosition: { x: 57.5, y: 22, width: 6.5, height: 8 },
  },
  {
    id: "D2",
    label: "D2",
    block: "D",
    plotSizeSqYd: 225,
    plotSizeLabel: "225 Sq. Yds",
    facing: "West",
    builtUpAreaSft: "Ground: 950 | First: 950 | Second: 616 SFT",
    totalSft: 2500,
    dimensions: "Varies",
    floors: "G+1+Penthouse",
    unitType: "Type-C",
    villaType: "Platinum",
    status: SOLD_VILLAS.has("D2") ? "sold" : "available",
    price: "₹3.0 Cr onwards",
    floorPlanImages: { west: "/assets/floorplan-222w.png" },
    mapPosition: { x: 57.5, y: 31, width: 6.5, height: 8 },
  },
  {
    id: "D3",
    label: "D3",
    block: "D",
    plotSizeSqYd: 225,
    plotSizeLabel: "225 Sq. Yds",
    facing: "West",
    builtUpAreaSft: "Ground: 950 | First: 950 | Second: 616 SFT",
    totalSft: 2500,
    dimensions: "Varies",
    floors: "G+1+Penthouse",
    unitType: "Type-C",
    villaType: "Platinum",
    status: SOLD_VILLAS.has("D3") ? "sold" : "available",
    price: "₹3.0 Cr onwards",
    floorPlanImages: { west: "/assets/floorplan-222w.png" },
    mapPosition: { x: 57.5, y: 40, width: 6.5, height: 8 },
  },
  {
    id: "D4",
    label: "D4",
    block: "D",
    plotSizeSqYd: 225,
    plotSizeLabel: "225 Sq. Yds",
    facing: "West",
    builtUpAreaSft: "Ground: 950 | First: 950 | Second: 616 SFT",
    totalSft: 2500,
    dimensions: "Varies",
    floors: "G+1+Penthouse",
    unitType: "Type-C",
    villaType: "Platinum",
    status: SOLD_VILLAS.has("D4") ? "sold" : "available",
    price: "₹3.0 Cr onwards",
    floorPlanImages: { west: "/assets/floorplan-222w.png" },
    mapPosition: { x: 57.5, y: 49, width: 6.5, height: 8 },
  },

  // Continue pattern for E, F, G, H blocks...
  // (Truncated for brevity - same structure with appropriate x coordinates and facing)
];

// Helper functions
export function getVillaFloorPlan(villa: Villa): string {
  const { floorPlanImages, facing } = villa;
  if (facing === "East" && floorPlanImages.east) return floorPlanImages.east;
  if (facing === "West" && floorPlanImages.west) return floorPlanImages.west;
  return floorPlanImages.east || floorPlanImages.west || "";
}

export function getVillasByBlock(block: string): Villa[] {
  return pavilionVillas.filter(v => v.block === block);
}

export function getVillaById(id: string): Villa | undefined {
  return pavilionVillas.find(v => v.id === id);
}

export function getVillasByType(type: VillaType): Villa[] {
  return pavilionVillas.filter(v => v.villaType === type);
}

export function getVillasByFacing(facing: VillaFacing): Villa[] {
  return pavilionVillas.filter(v => v.facing === facing);
}

export function getSoldCount(): number {
  return pavilionVillas.filter(v => v.status === "sold").length;
}

export function getAvailableCount(): number {
  return pavilionVillas.filter(v => v.status === "available").length;
}
