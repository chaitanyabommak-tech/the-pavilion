import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Villas in Ghatkesar & Pocharam | Near Infosys SEZ | The Pavillion Boduppal",
  description:
    "Luxury villas near Ghatkesar and Infosys Pocharam SEZ. The Pavillion in Boduppal - 12 km from Ghatkesar, 15 km from Infosys Pocharam. Warangal Highway corridor. From ₹1.87 Cr.",
  alternates: { canonical: "https://bommakugroup.com/villas-in-ghatkesar-pocharam" },
  openGraph: {
    title: "Villas in Ghatkesar & Pocharam | The Pavillion Boduppal",
    description: "Luxury villas in Boduppal, 12 km from Ghatkesar. Easy access to Infosys Pocharam SEZ and Warangal Highway.",
    type: "website",
    url: "https://bommakugroup.com/villas-in-ghatkesar-pocharam",
  },
};

export default function GhatkesarPochalamPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[{ label: "Villas in Ghatkesar & Pocharam", href: "/villas-in-ghatkesar-pocharam" }]} />

      {/* Hero */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            GHATKESAR - POCHARAM CORRIDOR
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Villas Near Ghatkesar & Pocharam
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-xl md:text-2xl leading-relaxed mb-8 font-light">
            The Pavillion in Boduppal — positioned between Uppal Metro (8 min) and the Ghatkesar-Pocharam growth corridor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+919676077142" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              Call: +91 96760 77142
            </a>
            <Link href="/contact" className="btn-secondary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              Book Site Visit
            </Link>
          </div>
        </div>
      </section>

      {/* Connectivity */}
      <section className="py-12 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            Why Boduppal for Ghatkesar-Pocharam Buyers
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                DUAL CONNECTIVITY
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed mb-4">
                Boduppal sits at the intersection of two growth corridors: the Uppal Metro axis (8 min) and the Ghatkesar-Pocharam-Warangal Highway expansion zone.
              </p>
              <ul className="space-y-2" style={{ color: "var(--ink-2)" }} className="text-sm">
                <li>• 12 km to Ghatkesar</li>
                <li>• 15 km to Infosys Pocharam SEZ</li>
                <li>• 8 min to Uppal Metro Station</li>
                <li>• 12 km to ORR Exit 9</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                ESTABLISHED INFRASTRUCTURE
              </h3>
              <p style={{ color: "var(--ink-2)" }} className="leading-relaxed mb-4">
                While Ghatkesar and Pocharam are developing, Boduppal already has schools, hospitals, malls, and metro connectivity — the infrastructure families need now, not 5 years from now.
              </p>
              <ul className="space-y-2" style={{ color: "var(--ink-2)" }} className="text-sm">
                <li>• RBM Hospital: 700m</li>
                <li>• Schools: 1-2.5 km</li>
                <li>• DSL Mall: 5 km</li>
                <li>• Metro operational</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* For Infosys Employees */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-6">
            For Infosys Pocharam Employees
          </h2>

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-6">
            Infosys Pocharam SEZ is 15 km from The Pavillion — a 25-30 minute drive via Uppal Main Road and NH163. Many IT professionals choose Boduppal over Pocharam itself because:
          </p>

          <ul className="space-y-3" style={{ color: "var(--ink-2)" }}>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>•</span>
              <span><strong style={{ color: "var(--ink)" }}>Metro access:</strong> Uppal Metro connects you to the rest of Hyderabad (HITEC City, Gachibowli, airport) without needing a car for every trip.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>•</span>
              <span><strong style={{ color: "var(--ink)" }}>Established amenities:</strong> Schools, hospitals, and shopping are already here. Pocharam is still building out.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>•</span>
              <span><strong style={{ color: "var(--ink)" }}>Appreciation potential:</strong> Boduppal is closer to the city center, so property values tend to rise faster than fringe areas.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>•</span>
              <span><strong style={{ color: "var(--ink)" }}>Job flexibility:</strong> If you switch companies later, you're not locked into the Pocharam area — Boduppal connects to all IT hubs.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* The Pavillion */}
      <section className="py-12 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-6">
            About The Pavillion
          </h2>

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-6">
            40 standalone luxury villas in Surya Hills, Boduppal. G+1+Penthouse, no shared walls, 24,000 SFT recreation zone for just 40 families. GP Layout project.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div>
              <p style={{ color: "var(--accent)" }} className="font-medium mb-1">₹1.87 Cr onwards</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Pricing</p>
            </div>
            <div>
              <p style={{ color: "var(--accent)" }} className="font-medium mb-1">150-250 Sq. Yds</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Plot Sizes</p>
            </div>
            <div>
              <p style={{ color: "var(--accent)" }} className="font-medium mb-1">3 BHK + Pooja</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Configuration</p>
            </div>
          </div>

          <Link
            href="/the-pavillion"
            style={{ color: "var(--accent)" }}
            className="inline-block text-sm tracking-[0.2em] uppercase hover:opacity-70 transition-opacity"
          >
            Full Project Details →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-6">
            Visit The Pavillion
          </h2>
          <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8">
            See the villas, understand the location advantage, walk the recreation zone. Drive from Ghatkesar or Pocharam and experience the connectivity yourself.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919676077142" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              Call: +91 96760 77142
            </a>
            <a
              href="https://wa.me/919676077142?text=Hi%2C%20I'm%20interested%20in%20The%20Pavillion.%20I%20work%20near%20Ghatkesar/Pocharam."
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
