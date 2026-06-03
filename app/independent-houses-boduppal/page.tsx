import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Independent Houses in Boduppal | The Pavillion - 45 Standalone Villas",
  description:
    "45 independent houses in Boduppal, Surya Hills. True standalone villas, no shared walls, G+1+Penthouse, 150-228 Sq. Yds plots. ₹1.87 Cr onwards. HMDA registered. Design freedom. Book site visit today.",
  keywords:
    "independent houses in Boduppal, standalone houses Boduppal, independent villas Boduppal, Boduppal independent houses, villa for sale Boduppal, independent house projects Boduppal, gated community independent houses, luxury independent houses Hyderabad",
  alternates: { canonical: "https://bommakugroup.com/independent-houses-boduppal" },
  openGraph: {
    title: "Independent Houses in Boduppal | The Pavillion - 45 Villas",
    description: "45 independent standalone houses in Boduppal. No shared walls, design freedom, ₹1.87 Cr. HMDA registered.",
    type: "article",
    url: "https://bommakugroup.com/independent-houses-boduppal",
  },
};

export default function IndependentHousesBodupalPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Link href="/" style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-opacity mb-6 inline-block">
            ← Back to Home
          </Link>

          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            INDEPENDENT HOUSES BODUPPAL
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Independent Houses in Boduppal – <span className="italic" style={{ color: "var(--ink-3)" }}>The Pavillion</span>
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-8 max-w-3xl">
            45 luxury independent houses in Surya Hills, Boduppal. TRUE standalone homes with no shared walls, complete privacy, and design freedom. G+1+Penthouse, 150-228 Sq. Yds plots. From ₹1.87 Cr onwards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:+919676077142" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              Call: +91 96760 77142
            </a>
            <a href="/#main-content" className="btn-secondary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              Book Site Visit
            </a>
          </div>
        </div>
      </section>

      {/* What is Independent House */}
      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            What is an Independent House?
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-6">
            An independent house (also called standalone house or villa) is a residential property that stands alone on its own plot of land, with NO walls shared with neighbors. It's the opposite of a row house or apartment.
          </p>

          <h3 style={{ color: "var(--ink)" }} className="text-2xl font-semibold mb-4">Key Features of Independent Houses:</h3>
          <ul className="space-y-3" style={{ color: "var(--ink-2)" }}>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>No Shared Walls:</strong> Your compound wall surrounds only YOUR house. No common walls with neighbors.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Complete Privacy:</strong> Four-side spacing between your house and neighbors. No noise, no intrusion.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Own Plot:</strong> Land is yours. You can modify, expand (with approvals), landscape, or customize completely.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Independent Entrance:</strong> Private gate, private driveway, private identity. Not a shared entrance.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Better Resale:</strong> Independent houses appreciate 15-20% more than row houses or apartments due to scarcity.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Independent House vs Other Types */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Independent House vs Row House vs Apartment
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--bg)", color: "var(--ink)" }}>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>Feature</th>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>Independent House</th>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>Row House</th>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>Apartment</th>
                </tr>
              </thead>
              <tbody style={{ color: "var(--ink-2)" }}>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Shared Walls</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>❌ None</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>✓ 1-2 walls</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>✓ All 4 walls</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Privacy</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Maximum</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Limited</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Minimal</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Noise</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>None from neighbors</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Medium (through walls)</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>High (all sides)</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Modification</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Your choice</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Need neighbor approval</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Not allowed</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Sunlight</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>All 4 sides</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>2-3 sides</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>2 sides (max)</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Resale Value</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Highest (+15-20%)</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Medium</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Standard</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Price (Boduppal)</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>₹1.87-3.0 Cr</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>₹1.65-2.2 Cr</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>₹80L-1.5 Cr</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ color: "var(--ink-2)" }} className="text-sm mt-6">
            <strong>Verdict:</strong> Independent houses offer maximum privacy, freedom, and resale value. Worth the premium for families seeking long-term homes.
          </p>
        </div>
      </section>

      {/* About The Pavillion */}
      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            The Pavillion — 45 Independent Houses in Boduppal
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-6">
            The Pavillion in Surya Hills, Boduppal offers 45 TRUE independent houses (standalone villas) in a low-density gated community. Unlike most projects claiming to be "villas" but actually row houses, every home at The Pavillion is completely independent.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="p-6" style={{ background: "var(--bg)", borderRadius: "8px", border: "1px solid var(--edge)" }}>
              <h3 style={{ color: "var(--accent)" }} className="text-lg font-semibold mb-3">What Makes Us Independent?</h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--ink-2)" }}>
                <li>• Zero shared walls (100% standalone)</li>
                <li>• Four-side open plots (150-228 Sq. Yds)</li>
                <li>• Individual compound walls</li>
                <li>• Private gate & entrance</li>
                <li>• No dependency on neighbors</li>
                <li>• Complete design freedom</li>
              </ul>
            </div>

            <div className="p-6" style={{ background: "var(--bg)", borderRadius: "8px", border: "1px solid var(--edge)" }}>
              <h3 style={{ color: "var(--accent)" }} className="text-lg font-semibold mb-3">Project Highlights</h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--ink-2)" }}>
                <li>• Only 45 houses (low-density)</li>
                <li>• G+1+Penthouse (3 levels)</li>
                <li>• 3 BHK + Pooja Room</li>
                <li>• 30,000 SFT recreation zone</li>
                <li>• HMDA registered project</li>
                <li>• Starting ₹1.87 Cr onwards</li>
              </ul>
            </div>
          </div>

          <h3 style={{ color: "var(--ink)" }} className="text-2xl font-semibold mb-4">House Configurations:</h3>
          <div className="space-y-4">
            <div className="p-4" style={{ background: "var(--bg)", border: "1px solid var(--edge)", borderRadius: "8px" }}>
              <h4 style={{ color: "var(--ink)" }} className="font-semibold mb-2">Type A - East/West Facing</h4>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">
                <strong>Plot:</strong> 150 Sq. Yds (30 × 45 ft) | <strong>Built-up:</strong> 2,200 SFT | <strong>Price:</strong> ₹1.87 Cr onwards
              </p>
            </div>

            <div className="p-4" style={{ background: "var(--bg)", border: "1px solid var(--edge)", borderRadius: "8px" }}>
              <h4 style={{ color: "var(--ink)" }} className="font-semibold mb-2">Type B - NE/NW Facing</h4>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">
                <strong>Plot:</strong> 165-167 Sq. Yds | <strong>Built-up:</strong> 2,300-2,400 SFT | <strong>Price:</strong> ₹2.1-2.3 Cr onwards
              </p>
            </div>

            <div className="p-4" style={{ background: "var(--bg)", border: "1px solid var(--edge)", borderRadius: "8px" }}>
              <h4 style={{ color: "var(--ink)" }} className="font-semibold mb-2">Type C - Premium Corner Plots</h4>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">
                <strong>Plot:</strong> 222-228 Sq. Yds | <strong>Built-up:</strong> 2,500+ SFT | <strong>Price:</strong> ₹2.5-3.0 Cr onwards
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Independent House */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Why Choose Independent House Over Apartment?
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="grid md:grid-cols-2 gap-6" style={{ color: "var(--ink-2)" }}>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">Benefits of Independent House</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ No neighbor noise (peace & quiet)</li>
                <li>✓ No maintenance disputes</li>
                <li>✓ No elevator waits</li>
                <li>✓ No common wall repairs</li>
                <li>✓ Park on your own plot</li>
                <li>✓ Expand/modify as needed</li>
                <li>✓ Garden, lawn, terrace all yours</li>
                <li>✓ Kids play in own compound</li>
                <li>✓ Better air circulation (4 sides open)</li>
                <li>✓ Privacy for family gatherings</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">Challenges of Apartments</h3>
              <ul className="space-y-2 text-sm">
                <li>✗ Neighbor noise (all 4 walls shared)</li>
                <li>✗ Elevator dependency (breakdown issues)</li>
                <li>✗ Maintenance disputes (monthly meetings)</li>
                <li>✗ No parking (or expensive slots)</li>
                <li>✗ Cannot modify (society rules)</li>
                <li>✗ Shared amenities (always crowded)</li>
                <li>✗ No private outdoor space</li>
                <li>✗ Kids can't play freely</li>
                <li>✗ Balcony is only outdoor area</li>
                <li>✗ Resale takes longer (more supply)</li>
              </ul>
            </div>
          </div>

          <p style={{ color: "var(--ink-2)" }} className="text-sm mt-8">
            <strong>For families with kids, pets, or those who value privacy:</strong> Independent houses are significantly better than apartments. The extra cost is worth the lifestyle upgrade.
          </p>
        </div>
      </section>

      {/* Design Freedom */}
      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Design Freedom — Customize Your Independent House
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-8">
            One of the biggest advantages of owning an independent house at The Pavillion is complete design freedom. Unlike apartments (fixed design) or row houses (restrictions due to shared walls), you can customize everything.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 text-center" style={{ background: "var(--bg)", borderRadius: "8px" }}>
              <h3 style={{ color: "var(--accent)" }} className="text-lg font-semibold mb-3">Elevation Style</h3>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">
                Choose contemporary, traditional, modern, minimalist — any style. Your house = your identity.
              </p>
            </div>

            <div className="p-6 text-center" style={{ background: "var(--bg)", borderRadius: "8px" }}>
              <h3 style={{ color: "var(--accent)" }} className="text-lg font-semibold mb-3">Floor Plan</h3>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">
                Modify room sizes, add home office, bigger kitchen, gym room — all possible before construction.
              </p>
            </div>

            <div className="p-6 text-center" style={{ background: "var(--bg)", borderRadius: "8px" }}>
              <h3 style={{ color: "var(--accent)" }} className="text-lg font-semibold mb-3">Interiors & Landscape</h3>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">
                Italian marble, wooden floors, designer tiles, zen garden, kids play area — your choice, your budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Location — Surya Hills, Boduppal, East Hyderabad
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="grid md:grid-cols-2 gap-8 mb-8" style={{ color: "var(--ink-2)" }}>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">Connectivity</h3>
              <ul className="space-y-2 text-sm">
                <li>• Uppal Metro: 8 min</li>
                <li>• HITEC City: 12 km (20 min via ORR)</li>
                <li>• Gachibowli: 15 km (25 min)</li>
                <li>• Airport: 25 km (35 min via ORR)</li>
                <li>• ORR Exit 9: 12 km</li>
                <li>• ECIL: 10 km</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">Nearby</h3>
              <ul className="space-y-2 text-sm">
                <li>• DPS School: 4 km</li>
                <li>• Oakridge: 12 km</li>
                <li>• Medicity Hospital: 3 km</li>
                <li>• Yashoda Hospital: 6 km</li>
                <li>• Radhika Theater Mall: 4 km</li>
                <li>• Forum Mall: 15 km</li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg" style={{ border: "1px solid var(--edge)" }}>
            <iframe
              src="https://www.google.com/maps?q=17.416403,78.575600&z=17&t=k&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Pavillion location map"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="space-y-6" style={{ color: "var(--ink-2)" }}>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">1. What is the difference between independent house and villa?</h3>
              <p className="text-sm">Independent house and villa are the same thing — both mean a standalone residential property with no shared walls. "Villa" often implies luxury, while "independent house" is a more general term.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">2. Are these truly independent houses or row houses?</h3>
              <p className="text-sm">The Pavillion offers TRUE independent houses. Zero shared walls, four-side open plots. Visit site to verify — many projects advertise as "villas" but are actually row houses with shared walls.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">3. What is the price of independent houses in Boduppal?</h3>
              <p className="text-sm">Independent houses in Boduppal range from ₹1.65 Cr (semi-attached/row house) to ₹3.5 Cr (luxury standalone). The Pavillion starts at ₹1.87 Cr for true standalone villas — best value in the area.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">4. Can I customize the design of my independent house?</h3>
              <p className="text-sm">Yes! Complete design freedom at The Pavillion. Choose elevation style, modify floor plan, select finishes. Our architects will work with you to customize before construction starts.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">5. Is independent house better investment than apartment?</h3>
              <p className="text-sm">Yes, for two reasons: (1) Land value appreciation — independent houses include land, apartments don't; (2) Scarcity — fewer independent houses being built, so demand stays high. 15-20% better appreciation than apartments.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">6. What are plot sizes available?</h3>
              <p className="text-sm">The Pavillion offers 150-228 Sq. Yds plots. Type A (150 Sq. Yds): ₹1.87 Cr | Type B (165-167 Sq. Yds): ₹2.1-2.3 Cr | Type C (222-228 Sq. Yds): ₹2.5-3.0 Cr. All standalone, no shared walls.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">7. Is this HMDA approved?</h3>
              <p className="text-sm">Yes. The Pavillion is HMDA registered project in Surya Hills Layout. All legal approvals in place. Individual sale deeds for each villa plot. Bank loan approved project.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">8. When is possession?</h3>
              <p className="text-sm">Construction is ongoing. Estimated possession: 18-24 months from booking. Early bird buyers get better villa selection (facing, plot size, location within community).</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">9. Can I get a home loan for this property?</h3>
              <p className="text-sm">Yes. The Pavillion is approved by major banks (SBI, HDFC, ICICI, Axis). Home loans available up to 80% of property value. We can connect you with our loan partners for quick processing.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">10. How do I book a site visit?</h3>
              <p className="text-sm">Call +91 96760 77142 or WhatsApp. Site visits available Mon-Sun, 10 AM - 6 PM. We'll show you the exact plot, floor plans, sample villa, and amenities. Free consultation with architects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Own Your Independent House in Boduppal
          </h2>
          <div className="w-16 h-px mx-auto mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-8">
            Only 45 independent standalone houses. Early bird pricing. Book site visit today to reserve your villa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919676077142" className="btn-primary px-10 py-4 text-xs tracking-[0.2em] uppercase">
              Call: +91 96760 77142
            </a>
            <a href="https://wa.me/919676077142" target="_blank" rel="noopener noreferrer" className="btn-secondary px-10 py-4 text-xs tracking-[0.2em] uppercase">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-8 px-6" style={{ background: "var(--surface)", borderTop: "1px solid var(--edge)" }}>
        <div className="max-w-4xl mx-auto">
          <p style={{ color: "var(--ink-2)" }} className="text-xs mb-4">
            <strong>Related Searches:</strong> independent houses in Boduppal, standalone houses Boduppal, independent villas Boduppal, villa for sale Boduppal, independent house projects Boduppal, luxury independent houses Hyderabad
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link href="/villas-in-boduppal" style={{ color: "var(--accent)" }}>Villas in Boduppal</Link>
            <Link href="/villas-near-uppal" style={{ color: "var(--accent)" }}>Villas Near Uppal Metro</Link>
            <Link href="/" style={{ color: "var(--accent)" }}>The Pavillion Homepage</Link>
          </div>
        </div>
      </section>
    </main>
  );
}