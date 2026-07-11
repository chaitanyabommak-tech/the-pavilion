import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Bommaku Group | The Pavillion Villas Boduppal",
  description:
    "Contact Bommaku Group for The Pavillion luxury villas in Boduppal. Call +91 96760 77142. Surya Hills, Boduppal, Hyderabad 500039. Mon-Sat 10-6, Sun 10-5. Response within 2 hours.",
  alternates: { canonical: "https://bommakugroup.com/contact" },
  openGraph: {
    title: "Contact Bommaku Group | The Pavillion Boduppal",
    description: "Get in touch about The Pavillion luxury villas. Call +91 96760 77142. Response within 2 hours.",
    type: "website",
    url: "https://bommakugroup.com/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      {/* Hero */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Contact Us
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-xl md:text-2xl leading-relaxed max-w-3xl font-light">
            Our team responds within 2 hours during business hours. Call, WhatsApp, or visit us.
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div>
                <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-2">
                  PHONE
                </h3>
                <a
                  href="tel:+919676077142"
                  style={{ color: "var(--ink)" }}
                  className="text-lg hover:opacity-70 transition-opacity"
                >
                  +91 96760 77142
                </a>
              </div>

              <div>
                <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-2">
                  WHATSAPP
                </h3>
                <a
                  href="https://wa.me/919676077142?text=Hi%2C%20I'm%20interested%20in%20The%20Pavillion%20villas.%20I'd%20like%20to%20know%20more."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--ink)" }}
                  className="text-lg hover:opacity-70 transition-opacity"
                >
                  +91 96760 77142
                </a>
              </div>

              <div>
                <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-2">
                  EMAIL
                </h3>
                <a
                  href="mailto:bommakugroup@gmail.com"
                  style={{ color: "var(--ink)" }}
                  className="text-lg hover:opacity-70 transition-opacity break-all"
                >
                  bommakugroup@gmail.com
                </a>
              </div>

              <div>
                <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-2">
                  ADDRESS
                </h3>
                <address style={{ color: "var(--ink)" }} className="text-lg not-italic leading-relaxed">
                  Bommaku Group<br />
                  The Pavillion, Surya Hills<br />
                  Boduppal, Hyderabad<br />
                  Telangana 500039
                </address>
              </div>

              <div>
                <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-2">
                  OFFICE HOURS
                </h3>
                <p style={{ color: "var(--ink)" }} className="text-lg">
                  Monday - Saturday: 10:00 AM - 6:00 PM<br />
                  Sunday: 10:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919676077142"
                className="btn-primary px-6 py-3 text-xs tracking-[0.2em] uppercase inline-block text-center"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919676077142?text=Hi%2C%20I'm%20interested%20in%20The%20Pavillion%20villas."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-6 py-3 text-xs tracking-[0.2em] uppercase inline-block text-center"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Column - Map */}
          <div>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-6">
              Location
            </h2>

            <div className="aspect-video rounded-sm overflow-hidden mb-4" style={{ background: "var(--ink-4)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.0!2d78.575600!3d17.416403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzU5LjAiTiA3OMKwMzQnMzIuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Pavillion location map"
              ></iframe>
            </div>

            <a
              href="https://maps.app.goo.gl/3gEbRXmKsENAkjXi7"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent)" }}
              className="text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity inline-block"
            >
              Get Directions →
            </a>

            <div className="mt-8">
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-4">
                NEARBY LANDMARKS
              </h3>
              <div className="space-y-2" style={{ color: "var(--ink-2)" }} className="text-sm">
                <p>• RBM Hospital — 700 meters</p>
                <p>• Uppal Main Road — 5 minutes</p>
                <p>• Uppal Metro Station — 8 minutes</p>
                <p>• Lotus Lap School — 1 km</p>
                <p>• ORR Exit 9 — 12 km</p>
                <p>• Bommak Convention Centre — Adjacent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response */}
      <section className="py-12 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl font-light mb-4">
            Quick Response Guarantee
          </h2>
          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed">
            We respond to all inquiries within <strong style={{ color: "var(--ink)" }}>2 hours</strong> during business hours. Call, WhatsApp, or email — whichever works best for you. Site visits can be scheduled for the same day or next day.
          </p>
        </div>
      </section>
    </main>
  );
}
