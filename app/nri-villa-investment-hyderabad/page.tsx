import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "NRI Villa Investment in Hyderabad | The Pavillion Boduppal | Bommaku Group",
  description:
    "NRI-friendly villa investment in East Hyderabad. Power of Attorney accepted. Home loans available. Bank approved by SBI, ICICI, HDFC. The Pavillion standalone villas from ₹1.87 Cr.",
  alternates: { canonical: "https://bommakugroup.com/nri-villa-investment-hyderabad" },
  openGraph: {
    title: "NRI Villa Investment in Hyderabad | The Pavillion",
    description: "NRI-friendly process. PoA accepted. Home loans available. Bank approved villas in Boduppal from ₹1.87 Cr.",
    type: "website",
    url: "https://bommakugroup.com/nri-villa-investment-hyderabad",
  },
};

export default function NRIPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[{ label: "NRI Villa Investment", href: "/nri-villa-investment-hyderabad" }]} />

      {/* Hero */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            FOR NRI INVESTORS
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Villa Investment in Hyderabad for NRIs
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-xl md:text-2xl leading-relaxed mb-6 font-light">
            Power of Attorney accepted. Home loans available. Remote documentation supported.
          </p>

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed max-w-3xl">
            The Pavillion is designed for NRI families investing in Hyderabad real estate. We handle the process remotely — you don't need to fly down for every signature.
          </p>
        </div>
      </section>

      {/* Can NRIs Buy Villas in India? */}
      <section className="py-12 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-6">
            Can NRIs Buy Villas in India?
          </h2>

          <p style={{ color: "var(--ink)" }} className="text-xl mb-6 font-medium">
            Yes. Here's what you need to know:
          </p>

          <div className="space-y-6" style={{ color: "var(--ink-2)" }}>
            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-2">
                FEMA GUIDELINES
              </h3>
              <p className="leading-relaxed">
                Under FEMA (Foreign Exchange Management Act), NRIs and PIOs can purchase residential property in India without prior RBI approval. You can buy, own, and sell villas just like resident Indians — with a few documentation differences.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-2">
                WHAT NRIs CAN BUY
              </h3>
              <p className="leading-relaxed">
                ✓ Residential properties (villas, apartments, plots with constructed homes)<br />
                ✓ Commercial properties<br />
                ✗ Agricultural land, farmhouses, or plantation property (not allowed)
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-2">
                PAYMENT & REPATRIATION
              </h3>
              <p className="leading-relaxed">
                NRIs can pay via NRE/NRO accounts or remit funds from abroad. Sale proceeds can be repatriated up to USD 1 million per financial year (subject to RBI rules and documentation).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NRI-Friendly Process */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            Our NRI-Friendly Process
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                POWER OF ATTORNEY
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                Can't fly to India for every step? Appoint a trusted family member or legal representative via Power of Attorney. They can sign on your behalf for bookings, documentation, and registration.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                VIDEO CONSULTATIONS
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                Schedule calls across US/Gulf time zones. We walk you through floor plans, site progress, payment schedules — everything remotely. WhatsApp video site tours available on request.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                NRI HOME LOANS
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                The Pavillion is approved by SBI, ICICI, HDFC, Bajaj Finance, Kotak, and Karur Vysya for NRI home loans. Most banks offer up to 80% LTV (Loan-to-Value) for NRIs with valid documentation.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                REMOTE DOCUMENTATION
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                Most paperwork can be handled via email and courier. For documents requiring notarization, Indian consulates in the US/Gulf can authenticate your signatures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why East Hyderabad */}
      <section className="py-12 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            Why East Hyderabad for NRI Investment?
          </h2>

          <div className="space-y-6" style={{ color: "var(--ink-2)" }}>
            <p className="text-lg leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Infrastructure Growth:</strong> Uppal-Boduppal-Ghatkesar corridor is Hyderabad's fastest-growing residential zone. Metro connectivity (Uppal station 8 min away), ORR proximity (12 km), and ongoing road widening are driving demand.
            </p>

            <p className="text-lg leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Appreciation Potential:</strong> East Hyderabad has seen 8-12% annual price appreciation over the past 5 years. Standalone villas in gated communities appreciate faster than apartments due to land ownership.
            </p>

            <p className="text-lg leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Rental Yield:</strong> If you're not moving back immediately, villas in Boduppal rent for ₹40,000-60,000/month (2-3% annual yield). The 24,000 SFT recreation zone and standalone design command premium rents.
            </p>

            <p className="text-lg leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Future-Proofing:</strong> Many NRIs buy for eventual retirement or for their kids' higher education in India. Standalone villas hold value better than apartments over 15-20 year horizons.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation Checklist */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            Documentation You'll Need
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                FOR BOOKING
              </h3>
              <ul className="space-y-2" style={{ color: "var(--ink-2)" }}>
                <li>• Passport copy (photo & address pages)</li>
                <li>• Visa/work permit copy</li>
                <li>• PAN card</li>
                <li>• Aadhaar (if available)</li>
                <li>• Address proof (Indian or abroad)</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                FOR HOME LOAN (IF APPLICABLE)
              </h3>
              <ul className="space-y-2" style={{ color: "var(--ink-2)" }}>
                <li>• 6 months' salary slips</li>
                <li>• Bank statements (NRE/NRO/foreign)</li>
                <li>• Employment letter</li>
                <li>• IT returns (last 2 years)</li>
                <li>• Property documents (provided by us)</li>
              </ul>
            </div>
          </div>

          <p style={{ color: "var(--ink-3)" }} className="text-sm mt-6">
            Our sales team will guide you through the exact requirements based on your country of residence and bank choice.
          </p>
        </div>
      </section>

      {/* FAQ for NRIs */}
      <section className="py-12 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            Common NRI Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-medium mb-2">
                Do I need to visit India to buy a villa?
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                Not necessarily. You can use Power of Attorney for documentation and registration. We recommend at least one visit to see the site and finalize your villa customization (The Clean Slate), but it's not mandatory.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-medium mb-2">
                Can I get a home loan as an NRI?
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                Yes. The Pavillion is approved by major banks for NRI home loans. Loan terms: up to 80% LTV, 15-20 year tenure, interest rates typically 0.5-1% higher than resident Indian rates.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-medium mb-2">
                What if I move back to India later — does my NRI status matter?
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                Once you buy as an NRI, the property is yours regardless of future status changes. If you return to India and become a resident, you simply update your documentation with the bank (if you have a loan). Ownership doesn't change.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-medium mb-2">
                Can I sell the villa later and repatriate funds?
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                Yes. NRIs can repatriate sale proceeds up to USD 1 million per financial year, subject to RBI guidelines and proper documentation (CA certificate, tax clearance, etc.).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-6">
            Schedule an NRI Consultation
          </h2>
          <p style={{ color: "var(--ink-2)" }} className="text-lg mb-4">
            Talk to our NRI sales team. We work across US East Coast, US West Coast, and Gulf time zones.
          </p>
          <p style={{ color: "var(--ink-3)" }} className="text-sm mb-8">
            WhatsApp is usually fastest for international calls. We respond within 2 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919676077142?text=Hi%2C%20I'm%20an%20NRI%20interested%20in%20The%20Pavillion%20villas.%20I'd%20like%20to%20schedule%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center"
            >
              WhatsApp Us
            </a>
            <a href="tel:+919676077142" className="btn-secondary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              Call India: +91 96760 77142
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
