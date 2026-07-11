import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "HMDA-Approved vs Unapproved Projects: What Buyers Must Check",
  description:
    "HMDA, RERA, and GP layout approvals explained. Legal due diligence checklist before buying a villa in Hyderabad. Document verification, bank loan approval, and resale implications.",
  alternates: { canonical: "https://bommakugroup.com/blog/hmda-approved-vs-unapproved-projects-what-buyers-must-check" },
  openGraph: {
    title: "HMDA-Approved vs Unapproved Projects: What to Check",
    description: "Legal due diligence for villa buyers: HMDA, RERA, GP layouts, and document verification.",
    type: "article",
    url: "https://bommakugroup.com/blog/hmda-approved-vs-unapproved-projects-what-buyers-must-check",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is HMDA approval and why does it matter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HMDA (Hyderabad Metropolitan Development Authority) approval confirms a project complies with urban planning regulations. It ensures proper road widths, drainage, setbacks, and land use. HMDA-approved projects get bank loans faster and have smoother resale.",
      },
    },
    {
      "@type": "Question",
      name: "What is a GP layout? Do I need HMDA or RERA for it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "GP (Gram Panchayat) layout is plotted development approved by the local Gram Panchayat, not HMDA. GP layouts typically do not require RERA registration (only buildings/villas being sold need RERA). For GP layouts, verify GP approval letter, survey numbers, and clear title.",
      },
    },
    {
      "@type": "Question",
      name: "What documents should I verify before buying a villa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key documents: Sale deed of the land, Encumbrance Certificate (EC), approved building plan (HMDA/GHMC/GP), khata certificate, property tax receipts, NOC from authorities (if applicable), and RERA registration number (if the project is RERA-applicable).",
      },
    },
  ],
};

export default function BlogPost() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <JsonLd data={faqSchema} />
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "HMDA-Approved vs Unapproved Projects", href: "/blog/hmda-approved-vs-unapproved-projects-what-buyers-must-check" },
        ]}
      />

      <article className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <p style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase">
              Legal & Approvals
            </p>
            <span style={{ color: "var(--ink-3)", background: "var(--surface)", padding: "4px 12px", borderRadius: "4px" }} className="text-xs">
              Last Updated: July 2026
            </span>
          </div>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl font-light leading-tight mb-6">
            HMDA-Approved vs Unapproved Projects: What Buyers Must Check
          </h1>
          <div className="w-16 h-px mb-12" style={{ background: "var(--accent)" }} />

          {/* Quick Answer */}
          <div className="p-6 mb-12 border-l-2" style={{ background: "var(--bg-subtle)", borderColor: "var(--accent)" }}>
            <p style={{ color: "var(--ink)" }} className="text-lg leading-relaxed">
              <strong>Key takeaway:</strong> HMDA approval confirms a project meets urban planning regulations (road widths, drainage, setbacks). GP layouts are approved by Gram Panchayat, not HMDA, and typically don't need RERA registration for plotted developments. Always verify: sale deed, Encumbrance Certificate, approved plan, khata, and RERA number (if applicable).
            </p>
          </div>

          {/* Content */}
          <div className="prose-custom space-y-8" style={{ color: "var(--ink-2)" }}>
            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                What is HMDA approval and why does it matter?
              </h2>
              <p className="leading-relaxed mb-4">
                HMDA (Hyderabad Metropolitan Development Authority) approval confirms a project complies with urban planning regulations — proper road widths, drainage systems, setbacks, open spaces, and zoning (residential/commercial/mixed-use).
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>Why it matters for buyers:</strong> Banks approve home loans faster for HMDA-approved projects. Resale is smoother because future buyers trust HMDA-approved properties. Municipal services (water, sewage, roads) are more likely to be maintained.
              </p>
              <p className="leading-relaxed">
                <strong style={{ color: "var(--ink)" }}>What HMDA approval does NOT guarantee:</strong> It doesn't mean the builder will deliver on time or that construction quality is high. HMDA checks compliance with layout rules, not builder reputation.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                What is a GP layout? Do I need HMDA or RERA for it?
              </h2>
              <p className="leading-relaxed mb-4">
                GP (Gram Panchayat) layout is plotted development approved by the local Gram Panchayat, typically in areas outside HMDA jurisdiction (fringe areas, villages becoming suburbs). GP layouts follow Panchayat Raj Act rules, not HMDA's urban planning code.
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>Do GP layouts need RERA registration?</strong> RERA applies when you're selling "under-construction" buildings or villas. If you're selling <em>plots only</em>, RERA is not required. If you're selling <em>villas (built or under construction)</em>, RERA applies even in GP layouts.
              </p>
              <p className="leading-relaxed">
                <strong style={{ color: "var(--ink)" }}>The Pavillion example:</strong> The Pavillion is a GP layout project (Surya Hills, Boduppal). The <em>layout</em> itself doesn't need HMDA or RERA because it's a plotted development approved by the GP. The <em>villas being sold</em> are RERA-applicable (check RERA website for registration).
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                HMDA vs GHMC vs GP: Which authority approves what?
              </h2>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>HMDA (Hyderabad Metropolitan Development Authority):</strong> Approves layouts and buildings in the "Hyderabad Metropolitan Region" (parts of Hyderabad, Ranga Reddy, Medchal-Malkajgiri districts). Covers urban and semi-urban areas.
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>GHMC (Greater Hyderabad Municipal Corporation):</strong> Approves buildings within GHMC limits (core Hyderabad city). Issues building permits, occupancy certificates, property tax khata.
              </p>
              <p className="leading-relaxed">
                <strong style={{ color: "var(--ink)" }}>GP (Gram Panchayat):</strong> Approves layouts in rural/fringe areas not yet under HMDA or GHMC. As areas urbanize, they transition to HMDA or GHMC jurisdiction.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                What documents should I verify before buying a villa?
              </h2>
              <p className="leading-relaxed mb-4">
                Here's the legal due diligence checklist every villa buyer should complete before signing:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 style={{ color: "var(--accent)" }} className="text-sm font-medium mb-2">
                    1. Sale Deed of the Land
                  </h3>
                  <p className="leading-relaxed">
                    Confirms the builder/developer owns the land legally. Verify seller's name matches the sale deed. Check for encumbrances (mortgages, liens).
                  </p>
                </div>

                <div>
                  <h3 style={{ color: "var(--accent)" }} className="text-sm font-medium mb-2">
                    2. Encumbrance Certificate (EC)
                  </h3>
                  <p className="leading-relaxed">
                    Shows the property is free from legal dues (loans, court cases, unpaid taxes). Get EC for the last 13 years minimum. Available from Sub-Registrar office or online (Telangana Registration & Stamps Dept).
                  </p>
                </div>

                <div>
                  <h3 style={{ color: "var(--accent)" }} className="text-sm font-medium mb-2">
                    3. Approved Layout Plan
                  </h3>
                  <p className="leading-relaxed">
                    HMDA/GHMC/GP-approved layout plan showing roads, drainage, plot boundaries. Verify your plot number matches the approved plan. Check if the layout approval is still valid (some expire after 3-5 years).
                  </p>
                </div>

                <div>
                  <h3 style={{ color: "var(--accent)" }} className="text-sm font-medium mb-2">
                    4. Building Plan Approval
                  </h3>
                  <p className="leading-relaxed">
                    If you're buying a constructed villa, verify the building plan is approved by the relevant authority (HMDA/GHMC/GP). Check setbacks, FAR (Floor Area Ratio), height restrictions.
                  </p>
                </div>

                <div>
                  <h3 style={{ color: "var(--accent)" }} className="text-sm font-medium mb-2">
                    5. Khata Certificate & Property Tax Receipts
                  </h3>
                  <p className="leading-relaxed">
                    Khata confirms the property is registered with the municipality for tax purposes. Check property tax is paid up to date. No khata = no legal recognition by the municipality.
                  </p>
                </div>

                <div>
                  <h3 style={{ color: "var(--accent)" }} className="text-sm font-medium mb-2">
                    6. RERA Registration Number
                  </h3>
                  <p className="leading-relaxed">
                    If the project is selling under-construction villas, it must be RERA-registered. Verify on Telangana RERA website (rera.telangana.gov.in). Check project timeline, builder credentials, approved plans.
                  </p>
                </div>

                <div>
                  <h3 style={{ color: "var(--accent)" }} className="text-sm font-medium mb-2">
                    7. NOCs (if applicable)
                  </h3>
                  <p className="leading-relaxed">
                    Fire NOC (for buildings above 15m height), Environmental Clearance (for large projects), Gram Panchayat NOC (for GP layouts). Not all projects need all NOCs — depends on project size and location.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Red flags: When to walk away from a villa project
              </h2>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>1. Builder refuses to share documents:</strong> If they say "we'll show you after booking," walk away. Legitimate projects share sale deeds, ECs, and approvals upfront.
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>2. Encumbrance Certificate shows pending litigation:</strong> Court cases on the land mean legal ownership is disputed. Banks won't approve loans. Resale will be impossible.
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>3. Layout approval expired:</strong> Some approvals are valid for 3-5 years. If the layout was approved in 2018 and it's now 2026, check if renewal happened. Expired approvals = legal risk.
              </p>
              <p className="leading-relaxed">
                <strong style={{ color: "var(--ink)" }}>4. No RERA registration for under-construction villas:</strong> If they're selling villas still being built but have no RERA number, it's illegal. RERA is mandatory for under-construction real estate sales.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                How banks evaluate legal approvals for home loans
              </h2>
              <p className="leading-relaxed mb-4">
                Banks have approved lists of projects for home loans. To get on that list, a project must have:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="leading-relaxed">• Clear title (no encumbrances, no litigation)</li>
                <li className="leading-relaxed">• HMDA/GHMC/GP-approved layout plan</li>
                <li className="leading-relaxed">• RERA registration (if under-construction)</li>
                <li className="leading-relaxed">• Builder's financial track record (no past defaults)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                If your project isn't bank-approved, you can still get a loan — but the bank will do independent legal verification, which takes longer (30-60 days vs 7-15 days for pre-approved projects).
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Bottom line: Legal checklist before signing
              </h2>
              <p className="leading-relaxed mb-4">
                Before you pay the booking amount:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="leading-relaxed">✓ Verify sale deed and EC (last 13 years)</li>
                <li className="leading-relaxed">✓ Check approved layout plan (HMDA/GHMC/GP)</li>
                <li className="leading-relaxed">✓ Confirm RERA registration (if under-construction)</li>
                <li className="leading-relaxed">✓ Verify khata and tax receipts</li>
                <li className="leading-relaxed">✓ Check bank approval status (ask your bank)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                If the builder provides all documents within 48 hours, it's a good sign. If they stall for weeks, consider it a red flag.
              </p>
            </section>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8" style={{ borderTop: "1px solid var(--edge)" }}>
            <h3 style={{ color: "var(--ink)" }} className="text-xl font-semibold mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/blog/villa-prices-boduppal-east-hyderabad-2026" className="p-4 hover:opacity-80 transition-opacity" style={{ background: "var(--surface)", borderRadius: "8px" }}>
                <p style={{ color: "var(--accent)" }} className="text-xs uppercase tracking-wide mb-2">Pricing</p>
                <p style={{ color: "var(--ink)" }} className="font-semibold mb-1">Villa Prices in Boduppal 2026</p>
                <p style={{ color: "var(--ink-3)" }} className="text-sm">Complete pricing breakdown</p>
              </Link>
              <Link href="/blog/is-boduppal-good-place-to-buy-villa-2026" className="p-4 hover:opacity-80 transition-opacity" style={{ background: "var(--surface)", borderRadius: "8px" }}>
                <p style={{ color: "var(--accent)" }} className="text-xs uppercase tracking-wide mb-2">Location</p>
                <p style={{ color: "var(--ink)" }} className="font-semibold mb-1">Is Boduppal Good for Villas?</p>
                <p style={{ color: "var(--ink-3)" }} className="text-sm">Location analysis and trends</p>
              </Link>
              <Link href="/independent-houses-boduppal" className="p-4 hover:opacity-80 transition-opacity" style={{ background: "var(--surface)", borderRadius: "8px" }}>
                <p style={{ color: "var(--accent)" }} className="text-xs uppercase tracking-wide mb-2">Independent Houses</p>
                <p style={{ color: "var(--ink)" }} className="font-semibold mb-1">Independent Houses in Boduppal</p>
                <p style={{ color: "var(--ink-3)" }} className="text-sm">Standalone, no shared walls</p>
              </Link>
              <Link href="/villas-in-boduppal" className="p-4 hover:opacity-80 transition-opacity" style={{ background: "var(--surface)", borderRadius: "8px" }}>
                <p style={{ color: "var(--accent)" }} className="text-xs uppercase tracking-wide mb-2">Villas</p>
                <p style={{ color: "var(--ink)" }} className="font-semibold mb-1">HMDA Registered Villas</p>
                <p style={{ color: "var(--ink-3)" }} className="text-sm">The Pavillion - legal & transparent</p>
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 text-center" style={{ background: "var(--bg-subtle)" }}>
            <h3 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
              The Pavillion: Legal Transparency
            </h3>
            <p style={{ color: "var(--ink-2)" }} className="mb-6">
              GP layout project. Bank-approved by SBI, ICICI, HDFC. All documents available for verification.
            </p>
            <Link href="/contact" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
              Request Document Verification
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
