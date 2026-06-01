import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | The Pavilion — Bommaku Constructions",
  description: "Terms and Conditions for The Pavilion by Bommaku Constructions, Boduppal, Hyderabad.",
  alternates: { canonical: "https://bommakugroup.com/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen py-20 px-6" style={{ background: "var(--bg)", transition: "background-color 300ms ease" }}>
      <div className="max-w-3xl mx-auto">

        <Link href="/" style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-opacity">
          ← Back to The Pavilion
        </Link>

        <div className="mt-10 mb-12">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">Legal</p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl font-light">Terms and Conditions</h1>
          <div className="w-12 h-px mt-6" style={{ background: "var(--accent)" }} />
          <p style={{ color: "var(--ink-3)" }} className="text-sm mt-4">Last updated: 1 June 2026</p>
        </div>

        <div className="space-y-8" style={{ color: "var(--ink-2)" }}>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">1. Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed">
              By accessing and using <strong>bommakugroup.com</strong> ("the Website"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this Website. These terms apply to all visitors, enquirers, and users of the Website.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">2. About the Project</h2>
            <p className="text-sm leading-relaxed">
              The Pavilion is a residential villa development by Bommaku Constructions comprising 45 standalone G+1+Penthouse villas at Surya Hills, Boduppal, East Hyderabad. All information on this Website is provided for general informational purposes and is subject to change without notice.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">3. No Offer or Contract</h2>
            <p className="text-sm leading-relaxed">
              Nothing on this Website constitutes an offer, invitation to offer, or contract of any kind. All details — including pricing, specifications, floor plans, amenities, and availability — are indicative and subject to change at the sole discretion of Bommaku Constructions. Any booking or sale shall be governed solely by the formal agreement executed between the buyer and Bommaku Constructions.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">4. Accuracy of Information</h2>
            <p className="text-sm leading-relaxed">
              While we make every effort to ensure the information on this Website is accurate and up to date, Bommaku Constructions makes no warranties or representations regarding the completeness, accuracy, or reliability of any information provided. Visitors are advised to independently verify all details before making any investment decisions.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">5. Images and Representations</h2>
            <p className="text-sm leading-relaxed">
              All images, renders, CGI visuals, floor plans, and photographs on this Website are for representational and illustrative purposes only. Actual finishes, layouts, landscapes, and views may differ from those depicted. Furniture and fittings shown in images are not included unless expressly stated in the sale agreement.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">6. Pricing</h2>
            <p className="text-sm leading-relaxed">
              All prices mentioned on this Website are indicative and subject to change without prior notice. Final pricing shall be as per the formal booking agreement. Prices are exclusive of registration charges, GST, stamp duty, and other applicable government levies unless specifically stated.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">7. Intellectual Property</h2>
            <p className="text-sm leading-relaxed">
              All content on this Website — including text, graphics, logos, images, and software — is the property of Bommaku Constructions or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without prior written permission.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">8. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed">
              Bommaku Constructions shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this Website or reliance on any information contained herein. Your use of the Website is entirely at your own risk.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">9. RERA Compliance</h2>
            <p className="text-sm leading-relaxed">
              The Pavilion is a project by Bommaku Constructions. RERA registration details will be updated upon approval. Prospective buyers are advised to verify the RERA registration of this project at the official Telangana RERA portal before making any purchase decision.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">10. Governing Law</h2>
            <p className="text-sm leading-relaxed">
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your use of this Website shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">11. Contact</h2>
            <p className="text-sm leading-relaxed">
              For any queries regarding these Terms, please contact:<br /><br />
              <strong style={{ color: "var(--ink)" }}>Bommaku Constructions</strong><br />
              Surya Hills, Boduppal, Hyderabad — 500039, Telangana<br />
              Email: <a href="mailto:bommakugroup@gmail.com" style={{ color: "var(--accent)" }}>bommakugroup@gmail.com</a><br />
              Phone: <a href="tel:+919676077142" style={{ color: "var(--accent)" }}>+91 96760 77142</a>
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 flex gap-6 flex-wrap" style={{ borderTop: "1px solid var(--edge)" }}>
          <Link href="/privacy" style={{ color: "var(--accent)" }} className="text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Privacy Policy</Link>
          <Link href="/disclaimer" style={{ color: "var(--accent)" }} className="text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Disclaimer</Link>
          <Link href="/" style={{ color: "var(--ink-3)" }} className="text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Back to Home</Link>
        </div>

      </div>
    </main>
  );
}
