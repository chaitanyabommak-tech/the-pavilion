import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "The Clean Slate | Customize Your Villa Before Construction | The Pavillion",
  description:
    "Customize your villa layout, elevation, and finishes before construction begins. Change room sizes, add features, choose materials. True design freedom at The Pavillion, Boduppal.",
  alternates: { canonical: "https://bommakugroup.com/the-clean-slate" },
  openGraph: {
    title: "The Clean Slate | Design Your Villa Your Way",
    description: "Customize layouts, elevations, finishes before construction. Your home, your design. The Pavillion, Boduppal.",
    type: "website",
    url: "https://bommakugroup.com/the-clean-slate",
  },
};

export default function CleanSlatePage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[{ label: "The Clean Slate", href: "/the-clean-slate" }]} />

      {/* Hero */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            DESIGN FREEDOM
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            The Clean Slate
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-2xl md:text-3xl leading-relaxed mb-6 font-light">
            Design your villa, your way
          </p>

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed max-w-3xl">
            We don't sell finished boxes. We give you a plot, a budget, and complete freedom to design the villa that matches how you actually live — before the first pour of concrete.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            The Problem with Pre-Designed Villas
          </h2>

          <div className="space-y-6" style={{ color: "var(--ink-2)" }}>
            <p className="text-lg leading-relaxed">
              Most villa projects sell you a fixed design. Three bedrooms here, living room there, kitchen in the back. The architect decided five years ago, and you're buying their vision — not yours.
            </p>

            <p className="text-lg leading-relaxed">
              But families are different. You work from home and need a real office, not a "study nook." Your parents live with you and need a ground-floor bedroom, not stairs to climb. You cook daily and need a larger kitchen, not a showcase one sized for Instagram.
            </p>

            <p className="text-lg leading-relaxed">
              Pre-designed villas force you to adapt your life to someone else's floor plan. <strong style={{ color: "var(--ink)" }}>The Clean Slate flips that</strong> — we adapt the villa to your life.
            </p>
          </div>
        </div>
      </section>

      {/* The 3-Step Process */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-12">
            How It Works — 3 Steps
          </h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p style={{ color: "var(--accent)" }} className="text-5xl font-light mb-4">01</p>
                <h3 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-3">
                  Initial Understanding
                </h3>
              </div>
              <div className="md:col-span-2">
                <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-4">
                  We sit with you and understand how your family lives. Who needs what spaces. How you cook, work, entertain. Do your parents stay with you? Do kids need separate study zones? Do you host often or prefer privacy?
                </p>
                <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                  This isn't a sales pitch — it's a design brief. Your inputs become the constraints our architects work within.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p style={{ color: "var(--accent)" }} className="text-5xl font-light mb-4">02</p>
                <h3 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-3">
                  Elevation & Room Configuration
                </h3>
              </div>
              <div className="md:col-span-2">
                <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-4">
                  You choose your elevation style — contemporary, traditional, minimal. Then we configure rooms: swap bedroom sizes, expand the kitchen, add a home office, move the pooja room, reconfigure the penthouse.
                </p>
                <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                  You can work with our in-house architects or bring your own. Either way, the goal is the same: a floor plan that fits your family, not a template.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p style={{ color: "var(--accent)" }} className="text-5xl font-light mb-4">03</p>
                <h3 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-3">
                  Plan Freeze & Finishes
                </h3>
              </div>
              <div className="md:col-span-2">
                <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-4">
                  Final blueprint approval with complete specifications. You lock in room layouts, structural details, materials, and finishes — all <strong style={{ color: "var(--ink)" }}>before construction begins</strong>.
                </p>
                <p style={{ color: "var(--ink-2)" }} className="leading-relaxed">
                  Once you sign off, we build exactly what you approved. No surprises, no "we can't change that now" moments during construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Customize */}
      <section className="py-12 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-5xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            What You Can Customize
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                FLOOR PLANS
              </h3>
              <ul className="space-y-2" style={{ color: "var(--ink-2)" }}>
                <li>• Room sizes and placements</li>
                <li>• Add or remove rooms within structural limits</li>
                <li>• Bathroom configurations</li>
                <li>• Kitchen layout (open, closed, island)</li>
                <li>• Balcony sizes and positions</li>
                <li>• Staircase placement</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                ELEVATIONS & FACADE
              </h3>
              <ul className="space-y-2" style={{ color: "var(--ink-2)" }}>
                <li>• Architectural style (modern, traditional, blend)</li>
                <li>• Window sizes and placements</li>
                <li>• Balcony railings and design</li>
                <li>• Entrance canopy and main door</li>
                <li>• Exterior cladding materials</li>
                <li>• Color palette</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                INTERIORS & FINISHES
              </h3>
              <ul className="space-y-2" style={{ color: "var(--ink-2)" }}>
                <li>• Flooring materials (marble, tiles, wood)</li>
                <li>• Wall finishes and paint colors</li>
                <li>• Kitchen countertops and cabinets</li>
                <li>• Bathroom fittings and sanitary ware</li>
                <li>• Lighting fixtures and electrical points</li>
                <li>• Built-in wardrobes and storage</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                SMART & SPECIAL FEATURES
              </h3>
              <ul className="space-y-2" style={{ color: "var(--ink-2)" }}>
                <li>• Home automation systems</li>
                <li>• Solar panel pre-wiring</li>
                <li>• Rainwater harvesting setup</li>
                <li>• EV charging point in garage</li>
                <li>• Home theatre acoustics (penthouse)</li>
                <li>• Security and CCTV placement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-8">
            The Philosophy
          </h2>

          <div className="space-y-6" style={{ color: "var(--ink-2)" }}>
            <p className="text-lg leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>"Mera Ghar Mera Marzi"</strong> — My Home, My Choice — isn't just a slogan. It's the design constraint we work within.
            </p>

            <p className="text-lg leading-relaxed">
              You're spending ₹2 crore. You'll live here for decades. Your kids will grow up here. Why should you accept someone else's vision of how you should live?
            </p>

            <p className="text-lg leading-relaxed">
              The Clean Slate gives you what standalone villas should have always offered: true ownership, not just of the land, but of the design itself.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6" style={{ background: "var(--bg-subtle)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl md:text-4xl font-light mb-6">
            Start Your Design Journey
          </h2>
          <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8">
            Book a consultation to understand how The Clean Slate works, see sample customizations, and begin designing your villa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919676077142" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              Call: +91 96760 77142
            </a>
            <Link href="/contact" className="btn-secondary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
