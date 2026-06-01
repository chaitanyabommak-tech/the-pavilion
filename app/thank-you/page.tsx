import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | The Pavilion — Bommaku Constructions",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6 py-20"
      style={{ background: "var(--bg)", transition: "background-color 300ms ease" }}
    >
      {/* GTM conversion event */}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:'form_submission_complete',event_category:'Lead',event_label:'Enquiry Form',value:1});`,
        }}
      />

      <div className="max-w-xl w-full text-center">
        <div
          className="w-16 h-16 border-2 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ borderColor: "var(--accent)" }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--accent)" }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
          The Pavilion
        </p>

        <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl font-light leading-tight mb-4">
          Thank You — We&apos;ll Be In Touch Shortly
        </h1>

        <div className="w-12 h-px mx-auto mb-8" style={{ background: "var(--accent)" }} />

        <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-3">
          Your enquiry has been received. One of our team members will call you within <strong>2 hours</strong>.
        </p>

        <p style={{ color: "var(--ink-3)" }} className="text-sm mb-10">
          Site visits available: Monday – Sunday, 10am – 6pm
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="https://wa.me/919676077142?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20for%20The%20Pavilion.%20Can%20you%20help%20me%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-flex items-center justify-center gap-2"
          >
            WhatsApp Us for Faster Response
          </a>
          <Link
            href="/"
            style={{ border: "1px solid var(--out-bd)", color: "var(--out-tx)" }}
            className="px-8 py-4 text-xs tracking-[0.2em] uppercase inline-flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            Return to Website
          </Link>
        </div>

        <p style={{ color: "var(--ink-3)" }} className="text-sm">
          Surya Hills, Boduppal, Hyderabad &nbsp;|&nbsp;{" "}
          <a href="tel:+919676077142" style={{ color: "var(--accent)" }}>+91 96760 77142</a>
        </p>
      </div>
    </main>
  );
}
