import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Bommaku Recreation Zone | 24,000 SFT for 33 Families | The Pavillion",
  description:
    "24,000 SFT recreation zone exclusively for 33 families = 750 SFT per family. Swimming pool, gym, sports courts, restaurant. First year free. The Pavillion, Boduppal.",
  alternates: { canonical: "https://bommakugroup.com/bommaku-recreation-zone" },
  openGraph: {
    title: "Bommaku Recreation Zone | 24,000 SFT Private Amenities",
    description: "24,000 SFT for just 33 families. 750 SFT per family vs 200 typical. Swimming pool, gym, sports, wellness.",
    type: "website",
    url: "https://bommakugroup.com/bommaku-recreation-zone",
  },
};

export default function RecreationZonePage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[{ label: "Bommaku Recreation Zone", href: "/bommaku-recreation-zone" }]} />

      {/* Hero */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            THE PAVILLION AMENITIES
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Bommaku Recreation Zone
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-2xl md:text-3xl leading-relaxed mb-6 font-light">
            24,000 SFT for 33 families
          </p>

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed max-w-3xl">
            Not a conventional clubhouse. A private recreation zone designed exclusively for 33 families — giving you <strong style={{ color: "var(--ink)" }}>750 SFT per family</strong> when most projects offer 200 SFT.
          </p>
        </div>
      </section>

      {/* The Math */}
      <section className="py-12 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            The Math That Matters
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border-l-2 pl-6" style={{ borderColor: "var(--accent)" }}>
              <p style={{ color: "var(--accent)" }} className="text-4xl font-light mb-2">750 SFT</p>
              <p style={{ color: "var(--ink)" }} className="text-lg mb-2">Per Family at The Pavillion</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">24,000 SFT ÷ 33 families</p>
            </div>

            <div className="border-l-2 pl-6" style={{ borderColor: "var(--ink-3)" }}>
              <p style={{ color: "var(--ink-2)" }} className="text-4xl font-light mb-2">200 SFT</p>
              <p style={{ color: "var(--ink-2)" }} className="text-lg mb-2">Per Family in Typical Projects</p>
              <p style={{ color: "var(--ink-3)" }} className="text-sm">20,000 SFT ÷ 100-200 families</p>
            </div>
          </div>

          <p style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
            3-4× More Space Per Family
          </p>
          <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
            This isn't marketing math. Fewer families sharing the same facilities means less congestion, shorter wait times, genuine community formation instead of anonymous crowds.
          </p>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            Facilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-4">
                WELLNESS
              </h3>
              <ul className="space-y-2" style={{ color: "var(--ink-2)" }}>
                <li>• Swimming Pool</li>
                <li>• Infinity Pool</li>
                <li>• Fully Equipped Gym</li>
                <li>• Yoga & Meditation Deck</li>
                <li>• Steam & Sauna</li>
                <li>• Spa Treatment Rooms</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-4">
                SPORTS & RECREATION
              </h3>
              <ul className="space-y-2" style={{ color: "var(--ink-2)" }}>
                <li>• Football Court</li>
                <li>• Pickleball Court</li>
                <li>• Cricket Practice Net</li>
                <li>• Indoor Games Room</li>
                <li>• Children's Play Area</li>
                <li>• Walking & Jogging Track</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-4">
                COMMUNITY & LIFESTYLE
              </h3>
              <ul className="space-y-2" style={{ color: "var(--ink-2)" }}>
                <li>• Restaurant & Cafe</li>
                <li>• Multipurpose Hall</li>
                <li>• Co-working Spaces</li>
                <li>• Zen Garden</li>
                <li>• Landscaped Gardens</li>
                <li>• 24×7 Security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Model */}
      <section className="py-12 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            Owner Benefits
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border p-6 rounded-sm" style={{ borderColor: "var(--accent)" }}>
              <p style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                YEAR 1
              </p>
              <p style={{ color: "var(--ink)" }} className="text-2xl font-light mb-3">First Year Free</p>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                Complete access to all facilities for the first year of ownership at no additional cost.
              </p>
            </div>

            <div className="border p-6 rounded-sm" style={{ borderColor: "var(--ink-3)" }}>
              <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                YEAR 2+
              </p>
              <p style={{ color: "var(--ink)" }} className="text-2xl font-light mb-3">35% Member Benefit</p>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                From year two onwards, villa owners receive a 35% benefit on membership fees compared to external members.
              </p>
            </div>
          </div>

          <p style={{ color: "var(--ink-3)" }} className="text-sm leading-relaxed">
            * The Bommaku Recreation Zone is a private membership facility. Terms and conditions apply. Membership fees and benefits subject to the facility management agreement.
          </p>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            Why Low Density Matters
          </h2>

          <div className="space-y-6" style={{ color: "var(--ink-2)" }}>
            <p className="text-lg leading-relaxed">
              Most villa projects market "world-class clubhouse" but cram 200-300 families into a 20,000 SFT space. The gym has waitlists. The pool is crowded on weekends. The sports courts are booked weeks in advance.
            </p>

            <p className="text-lg leading-relaxed">
              At The Pavillion, 33 families share 24,000 SFT. That's <strong style={{ color: "var(--ink)" }}>3-4× more space per family</strong>. The difference isn't subtle — it's the difference between an amenity you use and an amenity you avoid.
            </p>

            <p className="text-lg leading-relaxed">
              Low density also means genuine community. You know your neighbors by name, not apartment number. Kids grow up together. Weekend barbecues aren't anonymous events.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-6">
            Experience the Recreation Zone
          </h2>
          <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8">
            Book a site visit to walk the facilities, understand the layout, and see why 750 SFT per family makes a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919676077142" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              Call: +91 96760 77142
            </a>
            <Link href="/contact" className="btn-secondary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              Book Site Visit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
