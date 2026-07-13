// Script to generate complete 33-villa data with coordinates
// Run: npx tsx data/generate-villas-v2.ts > data/pavilionVillas-v2-GENERATED.ts

const SOLD_VILLAS = new Set([
  "A1", "A3", "B1", "B2", "C1", "C2",
  "D3", "F2", "G1", "G2", "G3", "H1", "H2", "H3"
]);

const BLOCKS_EAST = ["A", "C", "E", "G"];
const BLOCKS_WEST = ["B", "D", "F", "H"];

const BLOCK_X_POS: Record<string, number> = {
  A: 83, B: 74.5, C: 66, D: 57.5,
  E: 49, F: 40.5, G: 32, H: 23.5
};

interface VillaSpec {
  pos: number;
  plot: number;
  type: string;
  tier: string;
  y: number;
  h: number;
}

const ROW_A: VillaSpec[] = [
  { pos: 5, plot: 225, type: "Type-C", tier: "Platinum", y: 10, h: 11 },
  { pos: 1, plot: 183, type: "Type-B", tier: "Special", y: 22, h: 8 },
  { pos: 2, plot: 167, type: "Type-B", tier: "Silver", y: 31, h: 8 },
  { pos: 3, plot: 167, type: "Type-B", tier: "Silver", y: 40, h: 8 },
  { pos: 4, plot: 167, type: "Type-B", tier: "Silver", y: 49, h: 8 },
];

const ROW_TEMPLATE: VillaSpec[] = [
  { pos: 1, plot: 165, type: "Type-B", tier: "Silver", y: 22, h: 8 },
  { pos: 2, plot: 225, type: "Type-C", tier: "Platinum", y: 31, h: 8 },
  { pos: 3, plot: 225, type: "Type-C", tier: "Platinum", y: 40, h: 8 },
  { pos: 4, plot: 225, type: "Type-C", tier: "Platinum", y: 49, h: 8 },
];

function genVilla(block: string, spec: VillaSpec) {
  const id = `${block}${spec.pos}`;
  const facing = BLOCKS_EAST.includes(block) ? "East" : "West";
  const sft = spec.plot === 225 ? 2500 : 2400;
  const fpImg = spec.plot === 165 ? (facing === "East" ? "165ne" : "165nw")
    : spec.plot === 167 ? "167e"
    : spec.plot === 183 ? "165ne"
    : facing === "East" ? "227e" : "222w";

  return `  {
    id: "${id}", label: "${id}", block: "${block}",
    plotSizeSqYd: ${spec.plot}, plotSizeLabel: "${spec.plot} Sq. Yds",
    facing: "${facing}",
    builtUpAreaSft: "Ground: 950 | First: 950 | Second: 616 SFT",
    totalSft: ${sft}, dimensions: "Varies", floors: "G+1+Penthouse",
    unitType: "${spec.type}", villaType: "${spec.tier}",
    status: ${SOLD_VILLAS.has(id) ? '"sold"' : '"available"'},
    price: "₹${spec.plot >= 200 ? '3.0' : spec.plot >= 180 ? '2.52' : '2.28'} Cr onwards",
    floorPlanImages: { ${facing.toLowerCase()}: "/assets/floorplan-${fpImg}.png" },
    mapPosition: { x: ${BLOCK_X_POS[block]}, y: ${spec.y}, width: 6.5, height: ${spec.h} }
  }`;
}

console.log(`// GENERATED FILE - DO NOT EDIT MANUALLY
// Run: npx tsx data/generate-villas-v2.ts > data/pavilionVillas-v2-GENERATED.ts

export const pavilionVillas = [`);

// Row A (unique)
ROW_A.forEach(spec => console.log(genVilla("A", spec) + ","));

// Rows B-H (template)
["B", "C", "D", "E", "F", "G", "H"].forEach(block => {
  ROW_TEMPLATE.forEach(spec => console.log(genVilla(block, spec) + ","));
});

console.log(`];`);
