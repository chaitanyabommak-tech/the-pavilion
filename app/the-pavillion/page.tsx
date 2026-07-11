import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "The Pavillion Boduppal | 40 Luxury Villas by Bommaku Group",
  description:
    "The Pavillion - 40 standalone luxury villas in Surya Hills, Boduppal. G+1+Penthouse, 24,000 SFT recreation zone, 3 BHK + Pooja Room. GP Layout. From ₹1.87 Cr. Bommaku Group.",
  alternates: { canonical: "https://bommakugroup.com/the-pavillion" },
  openGraph: {
    title: "The Pavillion Boduppal | 40 Luxury Villas by Bommaku Group",
    description: "40 standalone luxury villas in Boduppal. G+1+Penthouse, 24,000 SFT recreation zone. GP Layout. From ₹1.87 Cr.",
    type: "website",
    url: "https://bommakugroup.com/the-pavillion",
  },
};

export default function ThePavillionPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[{ label: "The Pavillion", href: "/the-pavillion" }]} />

      {/* Hero */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            BOMMAKU GROUP PRESENTS
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-7xl font-light leading-tight mb-6">
            The Pavillion
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-xl md:text-2xl leading-relaxed mb-12 max-w-3xl font-light">
            40 standalone luxury villas in Surya Hills, Boduppal. Where architecture meets autonomy.
          </p>
        </div>
      </section>

      {/* Quick Facts Table */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            Quick Facts
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ borderColor: "var(--ink-3)" }}>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--ink-4)" }}>
                  <td className="py-4 pr-8 font-medium" style={{ color: "var(--ink-2)" }}>Project Name</td>
                  <td className="py-4" style={{ color: "var(--ink)" }}>The Pavillion by Bommaku Group</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--ink-4)" }}>
                  <td className="py-4 pr-8 font-medium" style={{ color: "var(--ink-2)" }}>Location</td>
                  <td className="py-4" style={{ color: "var(--ink)" }}>Surya Hills, Boduppal, East Hyderabad, Telangana 500039</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--ink-4)" }}>
                  <td className="py-4 pr-8 font-medium" style={{ color: "var(--ink-2)" }}>Total Units</td>
                  <td className="py-4" style={{ color: "var(--ink)" }}>40 standalone villas</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--ink-4)" }}>
                  <td className="py-4 pr-8 font-medium" style={{ color: "var(--ink-2)" }}>Configuration</td>
                  <td className="py-4" style={{ color: "var(--ink)" }}>G+1+Penthouse (3 floors)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--ink-4)" }}>
                  <td className="py-4 pr-8 font-medium" style={{ color: "var(--ink-2)" }}>Type</td>
                  <td className="py-4" style={{ color: "var(--ink)" }}>3 BHK + Pooja Room + Home Theatre (Penthouse)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--ink-4)" }}>
                  <td className="py-4 pr-8 font-medium" style={{ color: "var(--ink-2)" }}>Plot Sizes</td>
                  <td className="py-4" style={{ color: "var(--ink)" }}>150 - 250 Sq. Yds</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--ink-4)" }}>
                  <td className="py-4 pr-8 font-medium" style={{ color: "var(--ink-2)" }}>Built-up Area</td>
                  <td className="py-4" style={{ color: "var(--ink)" }}>2,200 - 2,500 SFT per villa</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--ink-4)" }}>
                  <td className="py-4 pr-8 font-medium" style={{ color: "var(--ink-2)" }}>Site Area</td>
                  <td className="py-4" style={{ color: "var(--ink)" }}>3 Acres</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--ink-4)" }}>
                  <td className="py-4 pr-8 font-medium" style={{ color: "var(--ink-2)" }}>Recreation Zone</td>
                  <td className="py-4" style={{ color: "var(--ink)" }}>24,000 SFT Bommaku Recreation Zone (750 SFT per family)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--ink-4)" }}>
                  <td className="py-4 pr-8 font-medium" style={{ color: "var(--ink-2)" }}>Price Range</td>
                  <td className="py-4" style={{ color: "var(--ink)" }}>Starting ₹1.87 Crore</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--ink-4)" }}>
                  <td className="py-4 pr-8 font-medium" style={{ color: "var(--ink-2)" }}>Project Type</td>
                  <td className="py-4" style={{ color: "var(--ink)" }}>GP Layout (Plotted Development)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--ink-4)" }}>
                  <td className="py-4 pr-8 font-medium" style={{ color: "var(--ink-2)" }}>Bank Approvals</td>
                  <td className="py-4" style={{ color: "var(--ink)" }}>SBI, ICICI, HDFC, Bajaj Finance, Kotak, Karur Vysya</td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--ink-4)" }}>
                  <td className="py-4 pr-8 font-medium" style={{ color: "var(--ink-2)" }}>Vastu</td>
                  <td className="py-4" style={{ color: "var(--ink)" }}>100% Vastu compliant</td>
                </tr>
                <tr>
                  <td className="py-4 pr-8 font-medium" style={{ color: "var(--ink-2)" }}>Connectivity</td>
                  <td className="py-4" style={{ color: "var(--ink)" }}>8 min to Uppal Metro | 12 km to ORR Exit 9 | 45 min to Airport</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Villa Features */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            What Makes The Pavillion Different
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                TRUE STANDALONE
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                No shared walls. Every villa stands on its own plot with private compound walls and gates. You own the land, the building, and the air between you and your neighbor.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                LOW DENSITY
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                40 families across 3 acres = 750 SFT of recreation per family. Most projects offer 200 SFT per family. You get 3-4X more space, fewer crowds, more privacy.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                THE CLEAN SLATE
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                Customize before construction. Change room layouts, elevations, finishes — before the first pour of concrete. Your home, your design.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                G+1+PENTHOUSE
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                Three usable floors. Ground for living, First for bedrooms, Penthouse for home theatre and sky views. No wasted vertical space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            Location
          </h2>

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-8">
            Surya Hills, Boduppal — the intersection of East Hyderabad's growth corridor and established residential infrastructure.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div>
              <p style={{ color: "var(--accent)" }} className="font-medium mb-1">5 minutes</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Uppal Main Road</p>
            </div>
            <div>
              <p style={{ color: "var(--accent)" }} className="font-medium mb-1">8 minutes</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Uppal Metro Station</p>
            </div>
            <div>
              <p style={{ color: "var(--accent)" }} className="font-medium mb-1">700 meters</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">RBM Hospital</p>
            </div>
            <div>
              <p style={{ color: "var(--accent)" }} className="font-medium mb-1">1 km</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Lotus Lap School</p>
            </div>
            <div>
              <p style={{ color: "var(--accent)" }} className="font-medium mb-1">12 km</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">ORR Exit 9</p>
            </div>
            <div>
              <p style={{ color: "var(--accent)" }} className="font-medium mb-1">45 minutes</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Rajiv Gandhi International Airport</p>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/3gEbRXmKsENAkjXi7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-xs tracking-[0.2em] uppercase btn-secondary"
          >
            Get Directions
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-6">
            Book Your Site Visit
          </h2>
          <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8">
            See the villas, walk the plots, understand the recreation zone. Our team responds within 2 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919676077142" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              Call: +91 96760 77142
            </a>
            <a
              href="https://wa.me/919676077142?text=Hi%2C%20I'm%20interested%20in%20The%20Pavillion%20villas.%20I'd%20like%20to%20book%20a%20site%20visit."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
