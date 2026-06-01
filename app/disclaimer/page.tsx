import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | The Pavilion — Bommaku Constructions",
  description: "Disclaimer for The Pavilion by Bommaku Constructions. Important information for prospective buyers.",
  alternates: { canonical: "https://bommakugroup.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen py-20 px-6" style={{ background: "var(--bg)", transition: "background-color 300ms ease" }}>
      <div className="max-w-3xl mx-auto">

        <Link href="/" style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-opacity">
          ← Back to The Pavilion
        </Link>

        <div className="mt-10 mb-12">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">Legal</p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl font-light">Disclaimer</h1>
          <div className="w-12 h-px mt-6" style={{ background: "var(--accent)" }} />
          <p style={{ color: "var(--ink-3)" }} className="text-sm mt-4">Last updated: 1 June 2026</p>
        </div>

        <div className="space-y-8" style={{ color: "var(--ink-2)" }}>

          <section
            className="p-6 rounded-sm"
            style={{ background: "var(--surface)", border: "1px solid var(--edge)" }}
          >
            <p className="text-sm leading-relaxed font-medium" style={{ color: "var(--ink)" }}>
              This website and its contents are for informational purposes only. The information provided does not constitute an offer, solicitation, or contract. All details are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">Project Information</h2>
            <p className="text-sm leading-relaxed">
              The Pavilion is a residential development by Bommaku Constructions located at Surya Hills, Boduppal, East Hyderabad, Telangana. All information provided on this Website — including project details, specifications, amenities, floor plans, pricing, and timelines — is indicative and subject to revision at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">Visual Representations</h2>
            <p className="text-sm leading-relaxed">
              All images, computer-generated images (CGI), renders, photographs, videos, and virtual tours on this Website are artistic impressions only. They are created for marketing and representational purposes and do not constitute a warranty or representation of the final product. Actual construction, finishes, landscaping, views, and surroundings may differ materially from those depicted.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">Pricing Disclaimer</h2>
            <p className="text-sm leading-relaxed">
              All prices mentioned on this Website are indicative at the time of publication and are subject to change without notice based on market conditions, construction progress, and management decisions. Quoted prices are exclusive of registration fees, stamp duty, GST, infrastructure charges, legal fees, and any other applicable government levies. Final pricing is as per the formal sale agreement executed between the buyer and Bommaku Constructions.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">Amenities & Specifications</h2>
            <p className="text-sm leading-relaxed">
              All amenities, features, and specifications mentioned are proposed and subject to necessary approvals, modifications based on design development, and availability. Bommaku Constructions reserves the right to add, modify, or remove any amenity or specification without notice. The final list of amenities shall be as per the approved plans and the executed sale agreement.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">RERA Notice</h2>
            <p className="text-sm leading-relaxed">
              The Pavilion is a project by Bommaku Constructions. RERA registration for this project is in process. Prospective buyers are strongly advised to verify all project details — including approvals, RERA registration, title, and encumbrances — independently through legal counsel before making any investment. [INSERT RERA NUMBER when available]
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">Investment Risk</h2>
            <p className="text-sm leading-relaxed">
              Real estate investments involve risk. Past performance of Bommaku Constructions projects does not guarantee future results. Prospective buyers are advised to conduct their own due diligence, seek independent legal and financial advice, and make decisions based on their own assessment of risk and circumstances.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">No Liability</h2>
            <p className="text-sm leading-relaxed">
              Bommaku Constructions shall not be held liable for any loss, damage, or inconvenience arising from reliance on information published on this Website. Users access and use this Website and its content entirely at their own risk.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">Contact</h2>
            <p className="text-sm leading-relaxed">
              For project-specific information, please contact our sales team directly:<br /><br />
              <strong style={{ color: "var(--ink)" }}>Bommaku Constructions</strong><br />
              Surya Hills, Boduppal, Hyderabad — 500039, Telangana<br />
              Email: <a href="mailto:bommakugroup@gmail.com" style={{ color: "var(--accent)" }}>bommakugroup@gmail.com</a><br />
              Phone: <a href="tel:+919676077142" style={{ color: "var(--accent)" }}>+91 96760 77142</a>
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 flex gap-6 flex-wrap" style={{ borderTop: "1px solid var(--edge)" }}>
          <Link href="/privacy" style={{ color: "var(--accent)" }} className="text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Privacy Policy</Link>
          <Link href="/terms" style={{ color: "var(--accent)" }} className="text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Terms & Conditions</Link>
          <Link href="/" style={{ color: "var(--ink-3)" }} className="text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Back to Home</Link>
        </div>

      </div>
    </main>
  );
}
