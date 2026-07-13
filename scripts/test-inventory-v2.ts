// TEST: Inventory V2 Generator & Validator
// Run: npx tsx scripts/test-inventory-v2.ts

import { generateVillas, validateInventory } from "../data/villas-v2";

console.log("🔄 Testing Inventory V2 Generator...\n");

try {
  const villas = generateVillas();

  console.log(`✅ Generated ${villas.length} villas\n`);

  console.log("📊 Running validation checks...");
  validateInventory(villas);

  console.log("✅ ALL VALIDATION CHECKS PASSED\n");

  // Print summary
  const silver = villas.filter(v => v.type === "Silver").length;
  const platinum = villas.filter(v => v.type === "Platinum").length;
  const special = villas.filter(v => v.type === "Special").length;
  const east = villas.filter(v => v.facing === "East").length;
  const west = villas.filter(v => v.facing === "West").length;
  const sft2400 = villas.filter(v => v.builtUpSft === 2400).length;
  const sft2500 = villas.filter(v => v.builtUpSft === 2500).length;

  console.log("📋 INVENTORY SUMMARY:");
  console.log(`   Total: ${villas.length} villas`);
  console.log(`   Silver: ${silver} | Platinum: ${platinum} | Special: ${special}`);
  console.log(`   East: ${east} | West: ${west}`);
  console.log(`   2,400 SFT: ${sft2400} | 2,500 SFT: ${sft2500}\n`);

  // Print Row A (unique structure)
  console.log("🏠 ROW A (UNIQUE — 5 villas):");
  villas.filter(v => v.block === "A").forEach(v => {
    console.log(`   ${v.id}: ${v.plotSizeSqYd} Sq.Yd | ${v.builtUpSft} SFT | ${v.facing} | ${v.type}`);
  });

  // Print one sample row (B)
  console.log("\n🏠 ROW B (TEMPLATE — 4 villas):");
  villas.filter(v => v.block === "B").forEach(v => {
    console.log(`   ${v.id}: ${v.plotSizeSqYd} Sq.Yd | ${v.builtUpSft} SFT | ${v.facing} | ${v.type}`);
  });

  console.log("\n✅ INVENTORY V2 GENERATOR: PASS");
  process.exit(0);
} catch (error) {
  console.error("\n❌ VALIDATION FAILED:");
  console.error((error as Error).message);
  process.exit(1);
}
