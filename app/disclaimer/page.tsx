import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | The Pavillion — Bommaku Constructions",
  description: "Disclaimer for The Pavillion by Bommaku Constructions. Important information for prospective buyers.",
  alternates: { canonical: "https://bommakugroup.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <main className="h-screen overflow-hidden py-4 px-6 flex items-center" style={{ background: "var(--bg)", transition: "background-color 300ms ease" }}>
      <div className="max-w-6xl mx-auto w-full">

        <Link href="/" style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-opacity">
          ← Back to The Pavillion
        </Link>

        <div className="mt-3 mb-4">
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light">Disclaimer</h1>
          <div className="w-12 h-px mt-2" style={{ background: "var(--accent)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3" style={{ color: "var(--ink-2)", fontSize: "10px", lineHeight: "1.4" }}>

          <section
            className="p-2 rounded-sm md:col-span-2"
            style={{ background: "var(--surface)", border: "1px solid var(--edge)" }}
          >
            <p className="font-medium" style={{ color: "var(--ink)" }}>
              This website and its contents are for informational purposes only. The information provided does not constitute an offer, solicitation, or contract. All details are subject to change without notice.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-sm font-semibold mb-1">Project Information</h3>
            <p>
              The Pavillion is a residential development by Bommaku Constructions at Surya Hills, Boduppal. All details — specifications, amenities, floor plans, pricing, timelines — are indicative and subject to revision without notice.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-sm font-semibold mb-1">Visual Representations</h3>
            <p>
              All images, CGI, renders, photos, videos are artistic impressions only. Actual construction, finishes, landscaping, views may differ materially from those depicted.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-sm font-semibold mb-1">Pricing</h3>
            <p>
              All prices are indicative and subject to change. Exclusive of registration, stamp duty, GST, infrastructure charges, legal fees, and government levies. Final pricing per sale agreement.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-sm font-semibold mb-1">Amenities</h3>
            <p>
              All amenities and specifications are proposed and subject to approvals. Bommaku Constructions reserves the right to modify or remove any amenity without notice.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-sm font-semibold mb-1">RERA Notice</h3>
            <p>
              RERA registration in process. Prospective buyers should verify all details — approvals, RERA, title — independently through legal counsel before investment.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-sm font-semibold mb-1">Investment Risk</h3>
            <p>
              Real estate involves risk. Past performance doesn't guarantee future results. Prospective buyers should conduct due diligence and seek independent legal and financial advice.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-sm font-semibold mb-1">No Liability</h3>
            <p>
              Bommaku Constructions shall not be liable for any loss, damage, or inconvenience from reliance on this Website. Users access at their own risk.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-sm font-semibold mb-1">Contact</h3>
            <p>
              <strong style={{ color: "var(--ink)" }}>Bommaku Constructions</strong><br />
              Surya Hills, Boduppal, Hyderabad — 500039<br />
              <a href="mailto:bommakugroup@gmail.com" style={{ color: "var(--accent)" }}>bommakugroup@gmail.com</a> · <a href="tel:+919676077142" style={{ color: "var(--accent)" }}>+91 96760 77142</a>
            </p>
          </section>

        </div>

        <div className="mt-4 pt-3 flex gap-4 flex-wrap text-xs" style={{ borderTop: "1px solid var(--edge)" }}>
          <Link href="/privacy" style={{ color: "var(--accent)" }} className="tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Privacy</Link>
          <Link href="/terms" style={{ color: "var(--accent)" }} className="tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Terms</Link>
          <Link href="/" style={{ color: "var(--ink-3)" }} className="tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Home</Link>
        </div>

      </div>
    </main>
  );
}
