import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "NRI's Step-by-Step Guide to Buying a Villa in Hyderabad",
  description:
    "Complete NRI guide: FEMA rules, Power of Attorney process, NRI home loans, remote documentation, repatriation, and step-by-step villa purchase process for non-resident Indians.",
  alternates: { canonical: "https://bommakugroup.com/blog/nri-step-by-step-guide-buying-villa-hyderabad" },
  openGraph: {
    title: "NRI's Step-by-Step Guide to Buying a Villa in Hyderabad",
    description: "FEMA rules, Power of Attorney, NRI home loans, remote documentation, and repatriation for NRI villa buyers.",
    type: "article",
    url: "https://bommakugroup.com/blog/nri-step-by-step-guide-buying-villa-hyderabad",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can NRIs buy property in India without visiting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NRIs can buy property using Power of Attorney. Appoint a trusted family member or lawyer in India to handle documentation and registration on your behalf. Most paperwork can be done via courier and consulate authentication.",
      },
    },
    {
      "@type": "Question",
      name: "What is the step-by-step process for NRIs to buy a villa in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Step 1: Shortlist projects remotely (video tours, virtual consultations). Step 2: Verify legal documents (sale deed, EC, RERA, approvals). Step 3: Execute Power of Attorney if not visiting India. Step 4: Pay booking amount via NRE/NRO account or wire transfer. Step 5: Apply for NRI home loan if needed. Step 6: Sign sale agreement and pay installments. Step 7: Final registration and possession.",
      },
    },
    {
      "@type": "Question",
      name: "How do NRI home loans work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NRI home loans offer up to 80% LTV (Loan-to-Value) with 15-20 year tenure. Interest rates are 0.5-1% higher than resident rates. Required documents: passport, visa, 6 months' salary slips, bank statements, employment letter, IT returns, and property documents. Banks like SBI, ICICI, HDFC offer NRI home loans.",
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
          { label: "NRI's Guide to Buying a Villa", href: "/blog/nri-step-by-step-guide-buying-villa-hyderabad" },
        ]}
      />

      <article className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <p style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-4">
            NRI Investment
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl font-light leading-tight mb-6">
            NRI's Step-by-Step Guide to Buying a Villa in Hyderabad
          </h1>
          <div className="w-16 h-px mb-12" style={{ background: "var(--accent)" }} />

          {/* Quick Answer */}
          <div className="p-6 mb-12 border-l-2" style={{ background: "var(--bg-subtle)", borderColor: "var(--accent)" }}>
            <p style={{ color: "var(--ink)" }} className="text-lg leading-relaxed">
              <strong>Quick overview:</strong> NRIs can buy residential property in India without RBI approval. Use Power of Attorney for remote transactions. NRI home loans available up to 80% LTV. Repatriate sale proceeds up to USD 1M per year. Process: shortlist → legal verification → PoA execution → booking → loan → registration.
            </p>
          </div>

          {/* Content */}
          <div className="prose-custom space-y-8" style={{ color: "var(--ink-2)" }}>
            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Step 1: Understand FEMA Rules for NRI Property Purchase
              </h2>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>What NRIs CAN buy:</strong> Residential properties (villas, apartments, plotted developments with constructed homes), commercial properties.
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>What NRIs CANNOT buy:</strong> Agricultural land, farmhouses, or plantation property. These are restricted under FEMA (Foreign Exchange Management Act).
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>Do you need RBI approval?</strong> No. NRIs and PIOs can purchase residential/commercial property without prior RBI permission. You just need valid NRI documentation (passport, visa, PAN).
              </p>
              <p className="leading-relaxed">
                <strong style={{ color: "var(--ink)" }}>Payment methods:</strong> NRE account, NRO account, or wire transfer from abroad. All payments must be through banking channels (no cash transactions).
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Step 2: Shortlist Projects Remotely
              </h2>
              <p className="leading-relaxed mb-4">
                Most NRI buyers start research from abroad. Here's how to shortlist without visiting India:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 style={{ color: "var(--accent)" }} className="text-sm font-medium mb-2">
                    Video Site Tours
                  </h3>
                  <p className="leading-relaxed">
                    Ask builders for live WhatsApp video tours. Walk through sample villas, see the recreation zone, check construction quality in real-time. Better than photos because you can ask questions on the spot.
                  </p>
                </div>
                <div>
                  <h3 style={{ color: "var(--accent)" }} className="text-sm font-medium mb-2">
                    Video Consultations
                  </h3>
                  <p className="leading-relaxed">
                    Schedule Zoom/Google Meet calls with sales teams. Most builders work across US East Coast (evening India time), US West Coast (early morning India time), and Gulf time zones. Get floor plans, pricing, payment schedules explained.
                  </p>
                </div>
                <div>
                  <h3 style={{ color: "var(--accent)" }} className="text-sm font-medium mb-2">
                    Legal Document Pre-Verification
                  </h3>
                  <p className="leading-relaxed">
                    Before booking, request: sale deed, Encumbrance Certificate, RERA registration, approved layout plan. Email these to a property lawyer in India for verification (cost: ₹10,000-25,000 for full due diligence).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Step 3: Execute Power of Attorney (if not visiting India)
              </h2>
              <p className="leading-relaxed mb-4">
                Power of Attorney (PoA) allows someone in India to sign documents on your behalf. You don't need to fly back for every signature.
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>Who can be your PoA holder?</strong> Trusted family member (spouse, sibling, parent) or a property lawyer. Most NRIs appoint family.
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>How to execute PoA from abroad:</strong>
              </p>
              <ul className="space-y-2 ml-6">
                <li className="leading-relaxed">1. Draft PoA document (your builder or lawyer provides template)</li>
                <li className="leading-relaxed">2. Get it notarized at Indian Consulate/Embassy in your country (US: Indian consulates in NYC, DC, SF, Houston, Chicago)</li>
                <li className="leading-relaxed">3. Apostille the document (if required by Telangana registration office)</li>
                <li className="leading-relaxed">4. Courier to your PoA holder in India</li>
                <li className="leading-relaxed">5. PoA holder registers it at Sub-Registrar office in Hyderabad</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong style={{ color: "var(--ink)" }}>Cost:</strong> Consulate notarization ($50-100), apostille ($50-150), courier (~$50), registration in India (₹2,000-5,000). Total: ~$200-300.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Step 4: Pay Booking Amount
              </h2>
              <p className="leading-relaxed mb-4">
                Booking amount is typically 10-20% of total villa cost (₹15-40 lakh depending on project). You can pay via:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="leading-relaxed">
                  <strong style={{ color: "var(--ink)" }}>NRE Account:</strong> Transfer from your NRE savings account in India. Fully repatriable. Most builders prefer this.
                </li>
                <li className="leading-relaxed">
                  <strong style={{ color: "var(--ink)" }}>NRO Account:</strong> Transfer from your NRO account. Repatriation subject to limits (USD 1M per year). Requires CA certificate and tax clearance.
                </li>
                <li className="leading-relaxed">
                  <strong style={{ color: "var(--ink)" }}>Wire Transfer:</strong> Send money from your foreign bank account to builder's account. Declare purpose as "real estate purchase." SWIFT charges apply (~$30-50).
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong style={{ color: "var(--ink)" }}>Important:</strong> Keep all payment receipts. Builder should issue invoices showing TDS deduction (if applicable). You need these for future repatriation.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Step 5: Apply for NRI Home Loan (if needed)
              </h2>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>NRI home loan terms:</strong> Up to 80% LTV (Loan-to-Value), 15-20 year tenure, interest rates 8-9.5% (0.5-1% higher than resident rates).
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>Which banks offer NRI loans:</strong> SBI, ICICI, HDFC, Axis, Kotak, Bajaj Finance, Karur Vysya. Check if your project is pre-approved by the bank (faster processing).
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>Documents required:</strong>
              </p>
              <ul className="space-y-2 ml-6 text-sm">
                <li>• Passport (copy of photo & address pages)</li>
                <li>• Visa/work permit copy</li>
                <li>• PAN card</li>
                <li>• 6 months' salary slips</li>
                <li>• 6 months' bank statements (NRE/NRO/foreign account)</li>
                <li>• Employment letter from current employer</li>
                <li>• IT returns for last 2 years</li>
                <li>• Property documents (sale deed, RERA, approved plan — builder provides)</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong style={{ color: "var(--ink)" }}>Processing time:</strong> 3-6 weeks for NRI loans. Some banks allow online application; others require you to visit India once for final signing.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Step 6: Sign Sale Agreement & Pay Installments
              </h2>
              <p className="leading-relaxed mb-4">
                Sale agreement is the legal contract between you and the builder. It specifies: total cost, payment schedule, possession timeline, specifications, penalties for delays.
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>If you're using PoA:</strong> Your PoA holder signs on your behalf. Get a scanned copy emailed to you before signing. Review every clause — payment dates, villa specs, amenities included.
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>Payment schedule (typical):</strong>
              </p>
              <ul className="space-y-2 ml-6 text-sm">
                <li>• Booking: 10-20%</li>
                <li>• Foundation: 10%</li>
                <li>• Slab completion: 20%</li>
                <li>• Brickwork: 15%</li>
                <li>• Plastering: 15%</li>
                <li>• Flooring & finishing: 15%</li>
                <li>• Possession: 10-15%</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Payments are linked to construction milestones. Builder sends photos/videos of progress. If you have a home loan, bank disburses funds directly to builder on milestone completion.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Step 7: Final Registration & Possession
              </h2>
              <p className="leading-relaxed mb-4">
                Once construction is complete, the villa is registered in your name at the Sub-Registrar office. Registration fees: ~7-8% of property value in Telangana (stamp duty + registration charges).
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>If you're using PoA:</strong> Your PoA holder attends registration on your behalf. After registration, you receive: registered sale deed, possession letter, occupancy certificate (OC), khata extract.
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>Do you need to visit India for possession?</strong> Not mandatory, but recommended. Many NRIs visit once for final inspection, villa handover, and to collect keys. If you can't visit, your PoA holder can do the handover inspection.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Repatriation: Selling the Villa & Moving Money Abroad
              </h2>
              <p className="leading-relaxed mb-4">
                If you sell the villa later and want to repatriate sale proceeds to your foreign bank account:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="leading-relaxed">
                  <strong style={{ color: "var(--ink)" }}>Repatriation limit:</strong> Up to USD 1 million per financial year (April-March).
                </li>
                <li className="leading-relaxed">
                  <strong style={{ color: "var(--ink)" }}>Documents required:</strong> CA certificate showing sale proceeds, tax clearance (Form 15CA/15CB), original purchase proof, sale deed.
                </li>
                <li className="leading-relaxed">
                  <strong style={{ color: "var(--ink)" }}>Tax on capital gains:</strong> NRIs pay Long-Term Capital Gains Tax (LTCG) at 20% with indexation (if property held >2 years). Short-term gains taxed at slab rates.
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong style={{ color: "var(--ink)" }}>Pro tip:</strong> If you bought the property from NRE funds, repatriation is easier. If bought from NRO funds, you need CA certificate and tax clearance even within the USD 1M limit.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Common NRI Mistakes to Avoid
              </h2>
              <ul className="space-y-3 ml-6">
                <li className="leading-relaxed">
                  <strong style={{ color: "var(--ink)" }}>1. Not verifying legal documents upfront:</strong> Don't book based on brochure alone. Verify sale deed, EC, RERA, and approvals before paying booking amount.
                </li>
                <li className="leading-relaxed">
                  <strong style={{ color: "var(--ink)" }}>2. Choosing an unreliable PoA holder:</strong> Your PoA holder has legal authority to sign on your behalf. Choose someone trustworthy (immediate family or vetted lawyer).
                </li>
                <li className="leading-relaxed">
                  <strong style={{ color: "var(--ink)" }}>3. Paying in cash or informal channels:</strong> All payments must be via bank transfer. Cash payments are illegal for NRI property transactions and will block future repatriation.
                </li>
                <li className="leading-relaxed">
                  <strong style={{ color: "var(--ink)" }}>4. Not keeping payment receipts:</strong> Save every invoice, TDS certificate, bank statement. You need these for IT returns and future repatriation.
                </li>
                <li className="leading-relaxed">
                  <strong style={{ color: "var(--ink)" }}>5. Assuming all properties are repatriable:</strong> Only properties purchased from NRE funds or with proper FEMA compliance are fully repatriable. Check before buying.
                </li>
              </ul>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Bottom Line: NRI Villa Purchase Checklist
              </h2>
              <p className="leading-relaxed mb-4">
                Before you commit:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="leading-relaxed">✓ Verify legal documents (sale deed, EC, RERA, approvals)</li>
                <li className="leading-relaxed">✓ Execute Power of Attorney at Indian consulate</li>
                <li className="leading-relaxed">✓ Confirm NRI home loan pre-approval (if taking loan)</li>
                <li className="leading-relaxed">✓ Check if project is bank-approved for NRI loans</li>
                <li className="leading-relaxed">✓ Understand payment schedule and milestone-based disbursement</li>
                <li className="leading-relaxed">✓ Keep all receipts for future repatriation</li>
                <li className="leading-relaxed">✓ Schedule 1-2 India visits (optional but recommended) — one for site inspection, one for possession</li>
              </ul>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 text-center" style={{ background: "var(--bg-subtle)" }}>
            <h3 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
              NRI-Friendly Process at The Pavillion
            </h3>
            <p style={{ color: "var(--ink-2)" }} className="mb-6">
              Power of Attorney accepted. Video consultations across US/Gulf time zones. NRI home loans pre-approved.
            </p>
            <Link href="/nri-villa-investment-hyderabad" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
              Learn More for NRIs
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
