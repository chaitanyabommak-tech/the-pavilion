import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | The Pavillion — Bommaku Constructions",
  description: "Disclaimer for The Pavillion by Bommaku Constructions. Important information for prospective buyers.",
  alternates: { canonical: "https://bommakugroup.com/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <main className="h-screen overflow-hidden py-2 px-4 flex items-center" style={{ background: "var(--bg)", transition: "background-color 300ms ease" }}>
      <div className="max-w-7xl mx-auto w-full">

        <Link href="/" style={{ color: "var(--accent)" }} className="text-[10px] tracking-[0.3em] uppercase hover:opacity-70 transition-opacity">
          ← Back to The Pavillion
        </Link>

        <div className="mt-2 mb-2">
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-xl font-light">Disclaimer</h1>
          <div className="w-10 h-px mt-1" style={{ background: "var(--accent)" }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-2" style={{ color: "var(--ink-2)", fontSize: "9px", lineHeight: "1.3" }}>

          <section
            className="p-1.5 rounded-sm md:col-span-3"
            style={{ background: "var(--surface)", border: "1px solid var(--edge)" }}
          >
            <p className="font-medium" style={{ color: "var(--ink)", fontSize: "9px" }}>
              This website and its contents are for informational purposes only. The information provided does not constitute an offer, solicitation, or contract. All details are subject to change without notice.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-[10px] font-semibold mb-0.5">Project Information</h3>
            <p>
              The Pavillion is a residential development by Bommaku Constructions at Surya Hills, Boduppal. All details — specifications, amenities, floor plans, pricing, timelines — are indicative and subject to revision without notice.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-[10px] font-semibold mb-0.5">Visual Representations</h3>
            <p>
              All images, CGI, renders, photos, videos are artistic impressions only. Actual construction, finishes, landscaping, views may differ materially from those depicted.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-[10px] font-semibold mb-0.5">Pricing</h3>
            <p>
              All prices are indicative and subject to change. Exclusive of registration, stamp duty, GST, infrastructure charges, legal fees, and government levies. Final pricing per sale agreement.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-[10px] font-semibold mb-0.5">Amenities</h3>
            <p>
              All amenities and specifications are proposed and subject to approvals. Bommaku Constructions reserves the right to modify or remove any amenity without notice.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-[10px] font-semibold mb-0.5">RERA Notice</h3>
            <p>
              RERA registration in process. Prospective buyers should verify all details — approvals, RERA, title — independently through legal counsel before investment.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-[10px] font-semibold mb-0.5">Investment Risk</h3>
            <p>
              Real estate involves risk. Past performance doesn't guarantee future results. Prospective buyers should conduct due diligence and seek independent legal and financial advice.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-[10px] font-semibold mb-0.5">No Liability</h3>
            <p>
              Bommaku Constructions shall not be liable for any loss, damage, or inconvenience from reliance on this Website. Users access at their own risk.
            </p>
          </section>

          <section>
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-[10px] font-semibold mb-0.5">Contact</h3>
            <p>
              <strong style={{ color: "var(--ink)" }}>Bommaku Constructions</strong><br />
              Surya Hills, Boduppal, Hyderabad — 500039<br />
              <a href="mailto:bommakugroup@gmail.com" style={{ color: "var(--accent)" }}>bommakugroup@gmail.com</a> · <a href="tel:+919676077142" style={{ color: "var(--accent)" }}>+91 96760 77142</a>
            </p>
          </section>

        </div>

        <div className="mt-2 pt-2 flex gap-3 flex-wrap text-[9px]" style={{ borderTop: "1px solid var(--edge)" }}>
          <Link href="/privacy" style={{ color: "var(--accent)" }} className="tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Privacy</Link>
          <Link href="/terms" style={{ color: "var(--accent)" }} className="tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Terms</Link>
          <Link href="/" style={{ color: "var(--ink-3)" }} className="tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Home</Link>
        </div>

      </div>
    </main>
  );
}
