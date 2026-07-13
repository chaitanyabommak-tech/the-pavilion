// PAVILION INVENTORY V2 — 33 VILLAS (Complete Implementation)
// Auto-generated with approved SOLD mapping

export type VillaFacing = "East" | "West";
export type VillaStatus = "available" | "reserved" | "sold";

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
  unitType: string;
  status: VillaStatus;
  price: string;
  floorPlanImages: {
    east?: string;
    west?: string;
    northEast?: string;
    northWest?: string;
  };
  mapPosition: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

const SOLD_IDS = new Set(["A1", "A3", "B1", "B2", "C1", "C2", "D3", "F2", "G1", "G2", "G3", "H1", "H2", "H3"]);

const blocks = ["A", "B", "C", "D", "E", "F", "G", "H"];
const blockX = { A: 83, B: 74.5, C: 66, D: 57.5, E: 49, F: 40.5, G: 32, H: 23.5 };
const eastBlocks = new Set(["A", "C", "E", "G"]);

function makeVilla(block: string, pos: number, plot: number, type: string, sft: number): Villa {
  const id = `${block}${pos}`;
  const facing: VillaFacing = eastBlocks.has(block) ? "East" : "West";
  const yPos = pos === 5 ? 10 : pos === 1 ? 22 : pos === 2 ? 31 : pos === 3 ? 40 : 49;
  const height = pos === 5 ? 11 : 8;
  
  return {
    id, label: id, block,
    plotSizeSqYd: plot,
    plotSizeLabel: `${plot} Sq. Yds`,
    facing,
    builtUpAreaSft: sft === 2400 ? "Ground: 802 | First: 802 | Second: 546 SFT" : "Ground: 950 | First: 950 | Second: 616 SFT",
    totalSft: sft,
    dimensions: "Varies",
    floors: "G+1+Penthouse",
    unitType: type,
    status: SOLD_IDS.has(id) ? "sold" : "available",
    price: plot >= 200 ? "₹3.0 Cr onwards" : plot >= 180 ? "₹2.52 Cr onwards" : "₹2.28 Cr onwards",
    floorPlanImages: facing === "East" 
      ? { east: plot === 165 ? "/assets/floorplan-165ne.png" : plot === 167 ? "/assets/floorplan-167e.png" : "/assets/floorplan-227e.png" }
      : { west: plot === 165 ? "/assets/floorplan-165nw.png" : "/assets/floorplan-222w.png" },
    mapPosition: { x: blockX[block], y: yPos, width: 6.5, height }
  };
}

export const pavilionVillas: Villa[] = [
  // Row A (unique: 5 villas)
  makeVilla("A", 5, 225, "Type-C", 2500),
  makeVilla("A", 1, 183, "Type-B", 2400),
  makeVilla("A", 2, 167, "Type-B", 2400),
  makeVilla("A", 3, 167, "Type-B", 2400),
  makeVilla("A", 4, 167, "Type-B", 2400),
  
  // Rows B-H (pattern: 1=165 Silver, 2-4=225 Platinum)
  ...blocks.slice(1).flatMap(b => [
    makeVilla(b, 1, 165, "Type-B", 2400),
    makeVilla(b, 2, 225, "Type-C", 2500),
    makeVilla(b, 3, 225, "Type-C", 2500),
    makeVilla(b, 4, 225, "Type-C", 2500),
  ])
];

export function getVillaFloorPlan(villa: Villa): string {
  const { floorPlanImages, facing } = villa;
  return (facing === "East" && floorPlanImages.east) ? floorPlanImages.east :
         (facing === "West" && floorPlanImages.west) ? floorPlanImages.west :
         floorPlanImages.east || floorPlanImages.west || "";
}

export function getVillasByBlock(block: string): Villa[] {
  return pavilionVillas.filter(v => v.block === block);
}

export function getVillaById(id: string): Villa | undefined {
  return pavilionVillas.find(v => v.id === id);
}
