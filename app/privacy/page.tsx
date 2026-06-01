import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | The Pavilion — Bommaku Constructions",
  description: "Privacy Policy for The Pavilion by Bommaku Constructions. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://bommakugroup.com/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-20 px-6" style={{ background: "var(--bg)", transition: "background-color 300ms ease" }}>
      <div className="max-w-3xl mx-auto">

        <Link href="/" style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-opacity">
          ← Back to The Pavilion
        </Link>

        <div className="mt-10 mb-12">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">Legal</p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl font-light">Privacy Policy</h1>
          <div className="w-12 h-px mt-6" style={{ background: "var(--accent)" }} />
          <p style={{ color: "var(--ink-3)" }} className="text-sm mt-4">Last updated: 1 June 2026</p>
        </div>

        <div className="prose-legal space-y-8" style={{ color: "var(--ink-2)" }}>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">1. Who We Are</h2>
            <p className="text-sm leading-relaxed">
              Bommaku Constructions ("we", "us", "our") operates The Pavilion, a residential villa community at Surya Hills, Boduppal, Hyderabad — 500039, Telangana, India. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit <strong>bommakugroup.com</strong> or submit an enquiry.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">2. Information We Collect</h2>
            <p className="text-sm leading-relaxed mb-3">We collect information you voluntarily provide when you:</p>
            <ul className="text-sm leading-relaxed space-y-2 list-disc list-inside">
              <li>Submit an enquiry form (name, phone number, email address, villa preference)</li>
              <li>Request a brochure download (name, phone number, email address)</li>
              <li>Book a site visit (name, phone number, email address, preferred date)</li>
              <li>Contact us via WhatsApp or phone</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">
              We also automatically collect non-personal data such as browser type, device type, pages visited, and time spent on the site via Google Analytics and Google Tag Manager.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">3. How We Use Your Information</h2>
            <ul className="text-sm leading-relaxed space-y-2 list-disc list-inside">
              <li>To respond to your enquiries and arrange site visits</li>
              <li>To send you the project brochure and relevant updates about The Pavilion</li>
              <li>To contact you via phone, WhatsApp, or email regarding your interest</li>
              <li>To improve our website and understand visitor behaviour</li>
              <li>To comply with legal and regulatory obligations</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">4. Data Storage & Security</h2>
            <p className="text-sm leading-relaxed">
              Your data is stored securely on Supabase (hosted on AWS infrastructure). We implement industry-standard security measures to protect your personal information from unauthorised access, alteration, or disclosure. We do not sell, trade, or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">5. Third-Party Services</h2>
            <p className="text-sm leading-relaxed">
              Our website uses the following third-party services, each with their own privacy policies:
            </p>
            <ul className="text-sm leading-relaxed space-y-2 list-disc list-inside mt-3">
              <li><strong>Google Analytics 4</strong> — website traffic analysis</li>
              <li><strong>Google Tag Manager</strong> — tag management</li>
              <li><strong>Supabase</strong> — form data storage</li>
              <li><strong>Resend</strong> — email delivery</li>
              <li><strong>Vercel</strong> — website hosting</li>
            </ul>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">6. Cookies</h2>
            <p className="text-sm leading-relaxed">
              Our website uses cookies to improve your browsing experience and to collect analytics data. By using this website, you consent to the use of cookies in accordance with this policy. You can disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">7. Your Rights</h2>
            <p className="text-sm leading-relaxed">
              You have the right to request access to, correction of, or deletion of your personal data held by us. To exercise these rights, contact us at <a href="mailto:bommakugroup@gmail.com" style={{ color: "var(--accent)" }}>bommakugroup@gmail.com</a> or call <a href="tel:+919676077142" style={{ color: "var(--accent)" }}>+91 96760 77142</a>.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">8. Changes to This Policy</h2>
            <p className="text-sm leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of our website after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">9. Contact Us</h2>
            <p className="text-sm leading-relaxed">
              For any privacy-related concerns, please contact:<br /><br />
              <strong style={{ color: "var(--ink)" }}>Bommaku Constructions</strong><br />
              Surya Hills, Boduppal, Hyderabad — 500039, Telangana<br />
              Email: <a href="mailto:bommakugroup@gmail.com" style={{ color: "var(--accent)" }}>bommakugroup@gmail.com</a><br />
              Phone: <a href="tel:+919676077142" style={{ color: "var(--accent)" }}>+91 96760 77142</a>
            </p>
          </section>

        </div>

        <div className="mt-16 pt-8 flex gap-6 flex-wrap" style={{ borderTop: "1px solid var(--edge)" }}>
          <Link href="/terms" style={{ color: "var(--accent)" }} className="text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Terms & Conditions</Link>
          <Link href="/disclaimer" style={{ color: "var(--accent)" }} className="text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Disclaimer</Link>
          <Link href="/" style={{ color: "var(--ink-3)" }} className="text-xs tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">Back to Home</Link>
        </div>

      </div>
    </main>
  );
}
