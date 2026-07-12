import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Bommaku Group | Luxury Villa Developers in Hyderabad",
  description:
    "Bommaku Group - Premium real estate developers in East Hyderabad. Creators of The Pavillion, 33 luxury standalone villas in Boduppal. GP Layout specialists. Quality construction since inception.",
  alternates: { canonical: "https://bommakugroup.com/about" },
  openGraph: {
    title: "About Bommaku Group | Luxury Villa Developers",
    description: "Premium villa developers in East Hyderabad. Creators of The Pavillion luxury villa community in Boduppal.",
    type: "website",
    url: "https://bommakugroup.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      {/* Hero */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            ABOUT US
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Bommaku Group
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-xl md:text-2xl leading-relaxed mb-12 font-light">
            Building luxury villa communities in East Hyderabad where design meets autonomy.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            Who We Are
          </h2>

          <div className="space-y-6" style={{ color: "var(--ink-2)" }}>
            <p className="text-lg leading-relaxed">
              Bommaku Group Private Limited is a real estate developer focused on creating premium standalone villa communities in East Hyderabad. We specialize in GP Layout (plotted development) projects that give buyers true ownership — land, building, and complete design freedom.
            </p>

            <p className="text-lg leading-relaxed">
              Our flagship project, <strong style={{ color: "var(--ink)" }}>The Pavillion</strong>, represents our core philosophy: low-density luxury, architectural autonomy, and community-scale amenities without the compromises of high-density apartment living.
            </p>

            <p className="text-lg leading-relaxed">
              We operate in the Uppal-Boduppal-Ghatkesar corridor of East Hyderabad — a growth zone where infrastructure expansion meets established residential demand. Our projects are designed for families who want the privacy of a standalone home with the conveniences of a gated community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                LOW DENSITY BY DESIGN
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                We cap projects at 30-50 families. This isn't marketing — it's a design constraint. Fewer families = larger recreation zones per capita, less congestion, genuine community formation.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                THE CLEAN SLATE CONCEPT
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                Buyers customize layouts, elevations, and finishes before construction begins. We don't sell finished boxes — we sell design freedom. Your architect works with ours to freeze a plan that matches how you live.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                QUALITY OVER SCALE
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                We build one project at a time. No multi-city expansion, no 500-unit towers. Focused execution means our founders are on-site, not managing a portfolio from a distance.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                TRANSPARENT APPROVALS
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                All legal documentation, layout plans, and bank approvals are available for verification before booking. No hidden clauses, no surprise charges. What we promise in the brochure is what you get in the sale deed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Pavillion Project */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            The Pavillion Project
          </h2>

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-6">
            Our current flagship: 33 standalone luxury villas in Surya Hills, Boduppal. 3 acres, GP Layout, with a 24,000 SFT recreation zone exclusively for 33 families.
          </p>

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-8">
            The project is bank-approved (SBI, ICICI, HDFC, Bajaj Finance, Kotak, Karur Vysya) and designed for families seeking standalone living without sacrificing amenities or community.
          </p>

          <Link
            href="/the-pavillion"
            style={{ color: "var(--accent)" }}
            className="inline-block text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
          >
            Learn More About The Pavillion →
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8 text-center">
            Get in Touch
          </h2>

          <div className="space-y-4 mb-8 text-center">
            <p style={{ color: "var(--ink-2)" }}>
              <strong style={{ color: "var(--ink)" }}>Phone:</strong>{" "}
              <a href="tel:+919676077142" style={{ color: "var(--accent)" }} className="hover:opacity-70">
                +91 96760 77142
              </a>
            </p>
            <p style={{ color: "var(--ink-2)" }}>
              <strong style={{ color: "var(--ink)" }}>Email:</strong>{" "}
              <a href="mailto:bommakugroup@gmail.com" style={{ color: "var(--accent)" }} className="hover:opacity-70">
                bommakugroup@gmail.com
              </a>
            </p>
            <p style={{ color: "var(--ink-2)" }}>
              <strong style={{ color: "var(--ink)" }}>Office Hours:</strong> Mon-Sat 10:00-18:00, Sun 10:00-17:00
            </p>
            <p style={{ color: "var(--ink-2)" }} className="text-sm">
              We typically respond within 2 hours during business hours.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-xs tracking-[0.2em] uppercase btn-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
