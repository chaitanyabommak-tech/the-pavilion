import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Villas in Boduppal | The Pavillion - 40 Standalone Luxury Villas in Surya Hills",
  description:
    "40 standalone luxury villas in Boduppal, Surya Hills. G+1+Penthouse, no shared walls, design freedom, 30,000 SFT recreation. ₹1.87 Cr onwards. HMDA registered. 8 min to Uppal Metro. Book site visit.",
  keywords:
    "villas in Boduppal, Boduppal villas, standalone villas Boduppal, luxury villas Boduppal, independent houses Boduppal, gated community Boduppal, villas for sale Boduppal, new villa projects Boduppal, 3BHK villas Boduppal, G+1 penthouse villas Boduppal, The Pavillion Boduppal",
  alternates: { canonical: "https://bommakugroup.com/villas-in-boduppal" },
  openGraph: {
    title: "Villas in Boduppal | The Pavillion - 40 Standalone Luxury Villas",
    description: "40 standalone villas in Boduppal. G+1+Penthouse, no shared walls, ₹1.87 Cr. HMDA registered. 8 min to Uppal Metro.",
    type: "article",
    url: "https://bommakugroup.com/villas-in-boduppal",
  },
};

export default function VillasInBodupalPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Link href="/" style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-opacity mb-6 inline-block">
            ← Back to Home
          </Link>

          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            BODUPPAL VILLAS
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Standalone Villas in Boduppal – <span className="italic" style={{ color: "var(--ink-3)" }}>The Pavillion</span>
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-8 max-w-3xl">
            Discover 40 luxury standalone villas in Boduppal's most exclusive community. G+1+Penthouse design, no shared walls, complete design freedom, and a 30,000 SFT recreation zone for just 40 families. Starting ₹1.87 Cr.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="tel:+919676077142" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              Call Now: +91 96760 77142
            </a>
            <a href="/#main-content" className="btn-secondary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              Book Site Visit
            </a>
          </div>
        </div>
      </section>

      {/* Why Boduppal for Villas */}
      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Why Boduppal for Villas?
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="grid md:grid-cols-2 gap-8" style={{ color: "var(--ink-2)" }}>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-xl font-semibold mb-3">🚇 Metro Connectivity</h3>
              <p className="text-sm leading-relaxed">
                Just 8 minutes from Uppal Metro Station (Blue Line). Reach Ameerpet in 25 minutes, Secunderabad in 30 minutes. Metro Phase 2 extension to Ghatkesar will pass through Boduppal area.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-xl font-semibold mb-3">💼 IT Hub Proximity</h3>
              <p className="text-sm leading-relaxed">
                12 km to HITEC City, 15 km to Gachibowli, 8 km to Uppal IT Park (TCS, Wipro, Infosys). Perfect for IT professionals seeking end-use homes near work.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-xl font-semibold mb-3">💰 Value Pricing</h3>
              <p className="text-sm leading-relaxed">
                40% cheaper than Gachibowli for same villa quality. Boduppal villas: ₹1.87 Cr vs Gachibowli: ₹3.5+ Cr. Better value, same lifestyle.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-xl font-semibold mb-3">📈 Appreciation Potential</h3>
              <p className="text-sm leading-relaxed">
                Regional Ring Road (RRR) announcement makes Boduppal a transit hub. Expected 10-12% YoY appreciation vs 5-7% in established areas. Early mover advantage.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-xl font-semibold mb-3">🏫 Family Infrastructure</h3>
              <p className="text-sm leading-relaxed">
                DPS School (4 km), Oakridge International (12 km), Medicity Hospital (3 km), Yashoda Hospital (6 km). Everything a family needs within 15 min.
              </p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-xl font-semibold mb-3">🛣️ Outer Ring Road Access</h3>
              <p className="text-sm leading-relaxed">
                ORR Exit 9 just 12 km away. Easy commute to Airport (25 km), Gachibowli, Madhapur, entire Hyderabad via expressway. No inner-city traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About The Pavillion */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            About The Pavillion — Boduppal's Premier Villa Community
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-6">
            The Pavillion is Boduppal's most exclusive standalone villa community, limited to just 40 families. Unlike mass villa projects with 100-200 units, we've intentionally kept it small to offer true low-density living.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-4xl font-light mb-2">45</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Total Villas Only</p>
            </div>
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-4xl font-light mb-2">3</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Acres of Land</p>
            </div>
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-4xl font-light mb-2">670</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">SFT Recreation/Family</p>
            </div>
          </div>

          <h3 style={{ color: "var(--ink)" }} className="text-2xl font-semibold mb-4">Key Features:</h3>
          <ul className="space-y-3 mb-8" style={{ color: "var(--ink-2)" }}>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>True Standalone Villas:</strong> No shared walls. Four-side open plots. Complete independence.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>G+1+Penthouse Design:</strong> Ground floor, First floor, + Private penthouse terrace. 3BHK + Pooja Room.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Plot Sizes:</strong> 150 to 228 Sq. Yds. Built-up area: 2,200 to 2,500 SFT.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Design Freedom:</strong> Customize your villa elevation, floor plan, finishes before construction. Your home, your way.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Low Density:</strong> Only 40 families share 30,000 SFT recreation (670 SFT per family vs 200-300 typical).</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Prime Location:</strong> Surya Hills, Boduppal. 8 min to Uppal Metro, 12 km to HITEC City.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Villa Types */}
      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Villa Types & Pricing
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6" style={{ background: "var(--bg)", border: "1px solid var(--edge)", borderRadius: "8px" }}>
              <h3 style={{ color: "var(--ink)" }} className="text-xl font-semibold mb-3">Type A - East/West Facing</h3>
              <p style={{ color: "var(--ink-2)" }} className="text-sm mb-4">
                <strong>Plot:</strong> 150 Sq. Yds (30 × 45 ft)<br />
                <strong>Built-up:</strong> 2,200 SFT (G: 888 | F: 888 | P: 590 SFT)<br />
                <strong>Configuration:</strong> 3 BHK + Pooja Room<br />
                <strong>Price:</strong> ₹1.87 Cr onwards
              </p>
              <a href="/#main-content" className="btn-primary px-6 py-3 text-xs tracking-[0.2em] uppercase inline-block">
                View Floor Plan
              </a>
            </div>

            <div className="p-6" style={{ background: "var(--bg)", border: "1px solid var(--edge)", borderRadius: "8px" }}>
              <h3 style={{ color: "var(--ink)" }} className="text-xl font-semibold mb-3">Type B - NE/NW Facing</h3>
              <p style={{ color: "var(--ink-2)" }} className="text-sm mb-4">
                <strong>Plot:</strong> 165-167 Sq. Yds (33/30 × 45/50 ft)<br />
                <strong>Built-up:</strong> 2,300-2,400 SFT<br />
                <strong>Configuration:</strong> 3 BHK + Pooja Room<br />
                <strong>Price:</strong> ₹2.1-2.3 Cr onwards
              </p>
              <a href="/#main-content" className="btn-primary px-6 py-3 text-xs tracking-[0.2em] uppercase inline-block">
                View Floor Plan
              </a>
            </div>

            <div className="p-6" style={{ background: "var(--bg)", border: "1px solid var(--edge)", borderRadius: "8px" }}>
              <h3 style={{ color: "var(--ink)" }} className="text-xl font-semibold mb-3">Type C - Premium Plots</h3>
              <p style={{ color: "var(--ink-2)" }} className="text-sm mb-4">
                <strong>Plot:</strong> 222-228 Sq. Yds (varies)<br />
                <strong>Built-up:</strong> 2,500+ SFT<br />
                <strong>Configuration:</strong> 3 BHK + Pooja Room<br />
                <strong>Price:</strong> ₹2.5-3.0 Cr onwards
              </p>
              <a href="/#main-content" className="btn-primary px-6 py-3 text-xs tracking-[0.2em] uppercase inline-block">
                View Floor Plan
              </a>
            </div>

            <div className="p-6" style={{ background: "var(--accent)", color: "#fff", borderRadius: "8px" }}>
              <h3 className="text-xl font-semibold mb-3">Limited Time Offer</h3>
              <p className="text-sm mb-4">
                <strong>Early Bird Discount:</strong> 2% (Save ₹3.74L+)<br />
                <strong>Free Vastu Consultation:</strong> Worth ₹25,000<br />
                <strong>Priority Villa Selection</strong><br />
                <strong>Offer Valid Till:</strong> June 30, 2026
              </p>
              <a href="tel:+919676077142" className="bg-white text-black px-6 py-3 text-xs tracking-[0.2em] uppercase inline-block rounded">
                Call to Book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            30,000 SFT Recreation Zone — For Just 40 Families
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-8">
            Most villa projects cram 200 families into 20,000 SFT recreation (100 SFT per family). At The Pavillion, 40 families share 30,000 SFT = <strong>670 SFT per family</strong>. That's 6-7X more space per family.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <ul className="space-y-3" style={{ color: "var(--ink-2)" }}>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }}>✓</span>
                <span className="text-sm">Clubhouse with AC (party hall, lounge, indoor games)</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }}>✓</span>
                <span className="text-sm">Swimming Pool (25m lap pool + kids pool)</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }}>✓</span>
                <span className="text-sm">Fully Equipped Gym (cardio + weights)</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }}>✓</span>
                <span className="text-sm">Pickleball Court (regulation size)</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }}>✓</span>
                <span className="text-sm">Basketball Court (half-court)</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }}>✓</span>
                <span className="text-sm">Badminton Court (indoor)</span>
              </li>
            </ul>

            <ul className="space-y-3" style={{ color: "var(--ink-2)" }}>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }}>✓</span>
                <span className="text-sm">Kids Play Area (age-appropriate equipment)</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }}>✓</span>
                <span className="text-sm">Landscaped Gardens (walkways, seating areas)</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }}>✓</span>
                <span className="text-sm">Jogging Track (500m loop)</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }}>✓</span>
                <span className="text-sm">Yoga Lawn (open-air fitness)</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }}>✓</span>
                <span className="text-sm">24x7 Security, CCTV, Intercom</span>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--accent)" }}>✓</span>
                <span className="text-sm">Power Backup, Rainwater Harvesting</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Standalone > Row House */}
      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Why Standalone Villas &gt; Row Houses
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--bg)", color: "var(--ink)" }}>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>Feature</th>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>Standalone (The Pavillion)</th>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>Row House</th>
                </tr>
              </thead>
              <tbody style={{ color: "var(--ink-2)" }}>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Shared Walls</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>❌ None (100% independent)</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>✓ 1-2 walls shared with neighbors</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Noise</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>✓ Complete privacy, no neighbor noise</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>You hear their TV, they hear your kids</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Modifications</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>✓ Change anything (your walls, your rules)</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Need neighbor approval for wall changes</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Plot Access</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>✓ Four-side open (sunlight, ventilation)</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Two-side open only</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Resale Value</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>✓ 15-20% higher (scarcity premium)</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Standard appreciation</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Privacy</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>✓ Maximum (compound wall all around)</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Limited (shared boundaries)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Design Freedom */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Design Freedom — Your Villa, Your Way
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-8">
            Unlike most villa projects where every home looks identical, The Pavillion offers complete design freedom. We deliver the structural shell, you design the rest.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 text-center" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <h3 style={{ color: "var(--accent)" }} className="text-lg font-semibold mb-3">Elevation Style</h3>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">
                Choose contemporary, traditional, modern, minimalist — or design your own unique elevation.
              </p>
            </div>

            <div className="p-6 text-center" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <h3 style={{ color: "var(--accent)" }} className="text-lg font-semibold mb-3">Floor Plan</h3>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">
                Modify room sizes, add home office, bigger kitchen, gym room — customize before construction.
              </p>
            </div>

            <div className="p-6 text-center" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <h3 style={{ color: "var(--accent)" }} className="text-lg font-semibold mb-3">Finishes</h3>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">
                Select Italian marble, wooden floors, designer tiles, bathroom fixtures — your taste, your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Location Advantages — Surya Hills, Boduppal
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="grid md:grid-cols-2 gap-8" style={{ color: "var(--ink-2)" }}>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">Nearby Landmarks</h3>
              <ul className="space-y-2 text-sm">
                <li>• Uppal Metro Station: 8 min</li>
                <li>• HITEC City: 12 km (20 min via ORR)</li>
                <li>• Gachibowli: 15 km (25 min)</li>
                <li>• Uppal IT Park: 8 km</li>
                <li>• ECIL: 10 km</li>
                <li>• ORR Exit 9: 12 km</li>
                <li>• Airport (RGIA): 25 km (35 min)</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">Family Essentials</h3>
              <ul className="space-y-2 text-sm">
                <li>• DPS School: 4 km</li>
                <li>• Oakridge International: 12 km</li>
                <li>• Sancta Maria School: 5 km</li>
                <li>• Medicity Hospital: 3 km</li>
                <li>• Yashoda Hospital: 6 km</li>
                <li>• Radhika Theater Mall: 4 km</li>
                <li>• Forum Sujana Mall: 15 km</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Legal */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            HMDA Registered. Bank Approved. Legally Sound.
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-2xl font-semibold mb-2">HMDA</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Registered Project</p>
            </div>
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-2xl font-semibold mb-2">6 Banks</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Loan Approved</p>
            </div>
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-2xl font-semibold mb-2">Clear Title</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">30-Year EC Available</p>
            </div>
          </div>

          <p style={{ color: "var(--ink-2)" }} className="text-sm leading-relaxed mb-6">
            <strong>Bank Approvals:</strong> SBI, ICICI, HDFC, Kotak, Bajaj Finance, Karur Vysya Bank have completed full due diligence and approved home loans for The Pavillion.
          </p>

          <p style={{ color: "var(--ink-2)" }} className="text-sm leading-relaxed">
            <strong>Developer Track Record:</strong> Bommaku Constructions delivered RNS Dream Homes in 2023 (120 families living there today). Visit and verify quality yourself.
          </p>
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
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">1. Why choose Boduppal for villas?</h3>
              <p className="text-sm">Boduppal offers 40% better value than Gachibowli, excellent metro connectivity (8 min to Uppal), proximity to IT hubs, and strong appreciation potential with RRR development.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">2. How many villas are available?</h3>
              <p className="text-sm">The Pavillion has just 40 villas total. Currently 12 villas remain in Phase 1. East-facing: 5 units, West-facing: 4 units, Corner plots: 2 units, NE facing: 1 unit.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">3. What is the price range?</h3>
              <p className="text-sm">Villa prices start from ₹1.87 Cr for 150 Sq. Yds East/West facing, up to ₹3.0 Cr for larger premium plots. Early bird discount: 2% (save ₹3.74L+).</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">4. Can I customize my villa?</h3>
              <p className="text-sm">Yes! The Pavillion offers complete design freedom. Choose your elevation style, modify floor plans, select finishes — all before construction. In-house architects support your vision.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">5. Is RERA/HMDA approval in place?</h3>
              <p className="text-sm">Yes. The Pavillion is HMDA registered (Circle Project). All approvals, clear land title, and bank approvals from SBI, ICICI, HDFC, Kotak are in place.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">6. What amenities are included?</h3>
              <p className="text-sm">30,000 SFT recreation zone with clubhouse, swimming pool, gym, sports courts (pickleball, basketball, badminton), kids play area, landscaped gardens, 24x7 security.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">7. How is this different from row houses?</h3>
              <p className="text-sm">The Pavillion offers TRUE standalone villas with no shared walls, unlike row houses. Four-side open plots, complete privacy, independent modifications, higher resale value.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">8. Is home loan available?</h3>
              <p className="text-sm">Yes. The project is approved by 6 major banks: SBI, ICICI, HDFC, Kotak, Bajaj Finance, Karur Vysya Bank. Home loan process is smooth and pre-approved.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">9. When is possession?</h3>
              <p className="text-sm">Construction is ongoing. Contact our sales team at +91 96760 77142 for current project status and expected possession timelines for specific villa types.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">10. How do I book a site visit?</h3>
              <p className="text-sm">Call +91 96760 77142, WhatsApp at +91 96760 77142, or fill the enquiry form on our website. Site visits available Mon-Sun, 10 AM - 6 PM. We provide cab pickup from nearby locations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Only 12 Villas Remaining. Book Your Site Visit Today.
          </h2>
          <div className="w-16 h-px mx-auto mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-8">
            Don't miss your chance to own a standalone villa in Boduppal's most exclusive community. Limited units. Limited opportunity.
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
            <strong>Related Searches:</strong> villas in Boduppal, standalone villas Boduppal, independent houses Boduppal, luxury villas Boduppal, villas near Uppal Metro, gated community Boduppal, 3BHK villas Boduppal, G+1 penthouse villas, The Pavillion Boduppal, Bommaku Constructions villas
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link href="/villas-near-uppal" style={{ color: "var(--accent)" }}>Villas Near Uppal</Link>
            <Link href="/independent-houses-boduppal" style={{ color: "var(--accent)" }}>Independent Houses Boduppal</Link>
            <Link href="/" style={{ color: "var(--accent)" }}>The Pavillion Homepage</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
