// PAVILION INVENTORY V2 — 33 VILLAS (Silver, Platinum, Signature)
// Source: Pavilion_Villa_Configuration_Reference.docx (Revised)
// Generated per BOMMAKU — THE PAVILLION INVENTORY & MASTER PLAN OVERHAUL MASTER PROMPT v2.0

export type Facing = "East" | "West";
export type VillaType = "Silver" | "Platinum" | "Special";
export type Status = "available" | "sold" | "hold";

export interface Villa {
  id: string;            // "A1".."H4"
  block: string;         // "A".."H"
  position: number;      // 1..5 (only Row A has 5; B-H have 4)
  plotSizeSqYd: 165 | 167 | 183 | 225;
  builtUpSft: 2400 | 2500;
  facing: Facing;
  type: VillaType;
  status: Status;
}

const EAST = new Set(["A", "C", "E", "G"]);

/**
 * Generate all 33 villas per the revised configuration.
 *
 * STRUCTURE (LAW):
 * - Row A: 5 villas (A1=183 Special, A2-A4=167 Silver, A5=225 Platinum)
 * - Rows B-H: 4 villas each (R1=165 Silver, R2-R4=225 Platinum)
 * - Facing: A/C/E/G = East, B/D/F/H = West
 *
 * @param statusMap Optional map of villa IDs to sold/hold status
 * @returns Array of 33 Villa objects
 */
export function generateVillas(statusMap: Record<string, Status> = {}): Villa[] {
  const v = (id: string, plot: Villa["plotSizeSqYd"], type: VillaType): Villa => ({
    id,
    block: id[0],
    position: Number(id.slice(1)),
    plotSizeSqYd: plot,
    builtUpSft: plot === 225 ? 2500 : 2400,
    facing: EAST.has(id[0]) ? "East" : "West",
    type,
    status: statusMap[id] ?? "available",
  });

  // Row A is fixed and unique — never templatize
  const rowA: Villa[] = [
    v("A1", 183, "Special"),     // Signature Corner
    v("A2", 167, "Silver"),
    v("A3", 167, "Silver"),
    v("A4", 167, "Silver"),
    v("A5", 225, "Platinum"),
  ];

  // Rows B-H: uniform pattern (R1=165 Silver, R2-R4=225 Platinum)
  const rest = ["B", "C", "D", "E", "F", "G", "H"].flatMap(r => [
    v(`${r}1`, 165, "Silver"),
    v(`${r}2`, 225, "Platinum"),
    v(`${r}3`, 225, "Platinum"),
    v(`${r}4`, 225, "Platinum"),
  ]);

  return [...rowA, ...rest];
}

/**
 * Validate inventory against the single source of truth (Section 1.3).
 * Throws on ANY mismatch — wire into tests AND prebuild.
 */
export function validateInventory(villas: Villa[]): void {
  const count = (f: (x: Villa) => boolean) => villas.filter(f).length;

  const checks: [string, number, number][] = [
    // Core counts
    ["total", villas.length, 33],
    ["silver", count(x => x.type === "Silver"), 10],
    ["platinum", count(x => x.type === "Platinum"), 22],
    ["special", count(x => x.type === "Special"), 1],

    // Facing
    ["east", count(x => x.facing === "East"), 17],
    ["west", count(x => x.facing === "West"), 16],

    // Built-up areas
    ["sft2400", count(x => x.builtUpSft === 2400), 11],
    ["sft2500", count(x => x.builtUpSft === 2500), 22],

    // Plot sizes
    ["plot165", count(x => x.plotSizeSqYd === 165), 7],
    ["plot167", count(x => x.plotSizeSqYd === 167), 3],
    ["plot183", count(x => x.plotSizeSqYd === 183), 1],
    ["plot225", count(x => x.plotSizeSqYd === 225), 22],

    // Row counts
    ["rowA", count(x => x.block === "A"), 5],
    ...["B", "C", "D", "E", "F", "G", "H"].map(r =>
      [`row${r}`, count(x => x.block === r), 4] as [string, number, number]
    ),

    // Cross-checks (plot × facing)
    ["east165", count(x => x.plotSizeSqYd === 165 && x.facing === "East"), 3],
    ["west165", count(x => x.plotSizeSqYd === 165 && x.facing === "West"), 4],
    ["east225", count(x => x.plotSizeSqYd === 225 && x.facing === "East"), 10],
    ["west225", count(x => x.plotSizeSqYd === 225 && x.facing === "West"), 12],
  ];

  const bad = checks.filter(([, got, want]) => got !== want);
  if (bad.length) {
    throw new Error(
      `INVENTORY VALIDATION FAILED:\n${bad.map(([name, got, want]) =>
        `  ${name}: expected ${want}, got ${got}`
      ).join("\n")}`
    );
  }

  // Additional structural checks
  const ids = new Set(villas.map(v => v.id));
  if (ids.size !== villas.length) {
    throw new Error("INVENTORY VALIDATION FAILED: Duplicate villa IDs detected");
  }

  // Verify no position-5 villas exist in blocks B-H
  const badPos5 = villas.filter(v => v.position === 5 && v.block !== "A");
  if (badPos5.length > 0) {
    throw new Error(
      `INVENTORY VALIDATION FAILED: Position-5 villas found in non-A blocks: ${badPos5.map(v => v.id).join(", ")}`
    );
  }

  // Verify only allowed plot sizes exist
  const allowedPlots = new Set([165, 167, 183, 225]);
  const badPlots = villas.filter(v => !allowedPlots.has(v.plotSizeSqYd));
  if (badPlots.length > 0) {
    throw new Error(
      `INVENTORY VALIDATION FAILED: Invalid plot sizes found: ${badPlots.map(v => `${v.id}=${v.plotSizeSqYd}`).join(", ")}`
    );
  }

  // Verify only allowed built-up areas exist
  const allowedSft = new Set([2400, 2500]);
  const badSft = villas.filter(v => !allowedSft.has(v.builtUpSft));
  if (badSft.length > 0) {
    throw new Error(
      `INVENTORY VALIDATION FAILED: Invalid built-up areas found: ${badSft.map(v => `${v.id}=${v.builtUpSft}`).join(", ")}`
    );
  }
}

// Helper functions
export function getVillaById(villas: Villa[], id: string): Villa | undefined {
  return villas.find(v => v.id === id);
}

export function getVillasByBlock(villas: Villa[], block: string): Villa[] {
  return villas.filter(v => v.block === block);
}

export function getVillasByType(villas: Villa[], type: VillaType): Villa[] {
  return villas.filter(v => v.type === type);
}

export function getVillasByFacing(villas: Villa[], facing: Facing): Villa[] {
  return villas.filter(v => v.facing === facing);
}

export function getVillasByBuiltUp(villas: Villa[], sft: 2400 | 2500): Villa[] {
  return villas.filter(v => v.builtUpSft === sft);
}

export function getAvailableVillas(villas: Villa[]): Villa[] {
  return villas.filter(v => v.status === "available");
}

export function getSoldVillas(villas: Villa[]): Villa[] {
  return villas.filter(v => v.status === "sold");
}
