import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Villas Near Uppal Metro | The Pavillion Boduppal - Just 8 Min Away",
  description:
    "Luxury villas near Uppal Metro Station. The Pavillion in Boduppal offers 45 standalone villas just 8 min from metro. G+1+Penthouse, ₹1.87 Cr. HMDA registered. Easy commute to HITEC City, Gachibowli.",
  keywords:
    "villas near Uppal, villas near Uppal metro, Uppal villas, villas near Uppal metro station, luxury villas near Uppal, independent houses near Uppal, villas Boduppal Uppal, gated community near Uppal, standalone villas near Uppal metro",
  alternates: { canonical: "https://bommakugroup.com/villas-near-uppal" },
  openGraph: {
    title: "Villas Near Uppal Metro | The Pavillion - 8 Min Away",
    description: "45 standalone villas near Uppal Metro. Just 8 min drive. G+1+Penthouse, ₹1.87 Cr. HMDA registered.",
    type: "article",
    url: "https://bommakugroup.com/villas-near-uppal",
  },
};

export default function VillasNearUppalPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Link href="/" style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-opacity mb-6 inline-block">
            ← Back to Home
          </Link>

          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            VILLAS NEAR UPPAL METRO
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Villas Near Uppal Metro – <span className="italic" style={{ color: "var(--ink-3)" }}>The Pavillion</span>
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-8 max-w-3xl">
            Just 8 minutes from Uppal Metro Station. 45 standalone luxury villas in Boduppal with metro connectivity, IT hub access, and premium lifestyle. G+1+Penthouse, no shared walls, from ₹1.87 Cr.
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

      {/* Distance from Uppal Metro */}
      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Just 8 Minutes from Uppal Metro Station
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-8">
            The Pavillion in Surya Hills, Boduppal is strategically located just 8 minutes drive from Uppal Metro Station (Blue Line). This means easy access to the entire Hyderabad metro network without the noise and congestion of living right next to the metro.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6" style={{ background: "var(--bg)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-4xl font-light mb-2">8 min</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Drive to Uppal Metro</p>
            </div>
            <div className="text-center p-6" style={{ background: "var(--bg)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-4xl font-light mb-2">25 min</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Metro to Ameerpet</p>
            </div>
            <div className="text-center p-6" style={{ background: "var(--bg)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-4xl font-light mb-2">30 min</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Metro to Secunderabad</p>
            </div>
          </div>

          <h3 style={{ color: "var(--ink)" }} className="text-2xl font-semibold mb-4">Metro Connectivity Benefits:</h3>
          <ul className="space-y-3" style={{ color: "var(--ink-2)" }}>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Blue Line Access:</strong> Uppal Metro connects to Ameerpet, Secunderabad, Nagole, LB Nagar</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Avoid Traffic:</strong> Metro bypasses road congestion during peak hours</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Airport Connectivity:</strong> Metro to Jubilee Hills, then cab to airport (total 50 min)</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Future Expansion:</strong> Metro Phase 2 extension to Ghatkesar will pass through Boduppal area</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Cost Savings:</strong> Metro commute is 70% cheaper than daily cab rides</span>
            </li>
          </ul>
        </div>
      </section>

      {/* IT Hub Proximity */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Perfect for IT Professionals — Close to Major Hubs
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-8">
            Villas near Uppal Metro are ideal for IT professionals working in Gachibowli, HITEC City, or Uppal IT Park. Easy commute via ORR or metro.
          </p>

          <div className="grid md:grid-cols-2 gap-6" style={{ color: "var(--ink-2)" }}>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">Commute Times from The Pavillion</h3>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Uppal IT Park:</strong> 8 km (12 min)</li>
                <li>• <strong>HITEC City:</strong> 12 km (20 min via ORR)</li>
                <li>• <strong>Gachibowli:</strong> 15 km (25 min via ORR)</li>
                <li>• <strong>ECIL:</strong> 10 km (15 min)</li>
                <li>• <strong>Madhapur:</strong> 14 km (22 min via ORR)</li>
                <li>• <strong>Secunderabad:</strong> 18 km (30 min via metro)</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">Major Companies Nearby</h3>
              <ul className="space-y-2 text-sm">
                <li>• TCS, Wipro, Infosys (Uppal IT Park)</li>
                <li>• Tech Mahindra, HCL (HITEC City)</li>
                <li>• Google, Amazon (Gachibowli)</li>
                <li>• Cognizant, Accenture (Madhapur)</li>
                <li>• ECIL Defense & Aerospace</li>
                <li>• Nacharam Industrial Area</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Near Uppal > In Uppal */}
      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Why "Near Uppal" is Better Than "In Uppal"
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--bg)", color: "var(--ink)" }}>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>Factor</th>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>Near Uppal (Boduppal)</th>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>In Uppal</th>
                </tr>
              </thead>
              <tbody style={{ color: "var(--ink-2)" }}>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Price</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>₹8,000/SFT (better value)</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>₹9,500-10,000/SFT</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Traffic</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Low congestion, peaceful</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>High congestion, noisy</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Plot Sizes</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>150-228 Sq. Yds (larger)</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>120-150 Sq. Yds</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Appreciation</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>10-12% YoY (growth phase)</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>7-8% YoY (mature area)</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Air Quality</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Better (less pollution)</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Moderate (metro station area)</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>Villa Projects</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>New, premium (The Pavillion)</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Older, limited options</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ color: "var(--ink-2)" }} className="text-sm mt-6">
            <strong>Verdict:</strong> Living near Uppal Metro (not in Uppal) gives you connectivity benefits WITHOUT congestion, noise, and high prices. Boduppal offers 15-20% better value.
          </p>
        </div>
      </section>

      {/* About The Pavillion */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            The Pavillion — 45 Standalone Villas Near Uppal Metro
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-6">
            The Pavillion in Surya Hills, Boduppal is the perfect choice for families seeking luxury villa living with excellent metro connectivity. Just 8 minutes from Uppal Metro, yet peaceful and spacious.
          </p>

          <h3 style={{ color: "var(--ink)" }} className="text-2xl font-semibold mb-4">What Makes Us Different:</h3>
          <ul className="space-y-3 mb-8" style={{ color: "var(--ink-2)" }}>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Only 45 Villas:</strong> Low-density living (most projects have 100-200 units)</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>True Standalone:</strong> No shared walls, four-side open plots</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Metro Proximity:</strong> 8 min to Uppal Metro Station (Blue Line)</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>IT Hub Access:</strong> 12-15 km to HITEC City, Gachibowli via ORR</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>Design Freedom:</strong> Customize elevation, floor plan, finishes</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: "var(--accent)" }}>✓</span>
              <span className="text-sm"><strong>30,000 SFT Recreation:</strong> 670 SFT per family (vs 200 typical)</span>
            </li>
          </ul>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-2xl font-semibold mb-2">₹1.87 Cr</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Starting Price</p>
            </div>
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-2xl font-semibold mb-2">3 BHK</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">+ Pooja Room</p>
            </div>
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-2xl font-semibold mb-2">HMDA</p>
              <p style={{ color: "var(--ink-2)" }} className="text-sm">Registered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Infrastructure */}
      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Complete Family Infrastructure Near Uppal Metro
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="grid md:grid-cols-2 gap-8" style={{ color: "var(--ink-2)" }}>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">🏫 Schools</h3>
              <ul className="space-y-2 text-sm">
                <li>• DPS School: 4 km</li>
                <li>• Oakridge International: 12 km</li>
                <li>• Sancta Maria School: 5 km</li>
                <li>• Delhi Public School Nacharam: 6 km</li>
                <li>• Gowtham Model School: 3 km</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">🏥 Hospitals</h3>
              <ul className="space-y-2 text-sm">
                <li>• Medicity Hospital: 3 km</li>
                <li>• Yashoda Hospital: 6 km</li>
                <li>• Continental Hospital: 18 km</li>
                <li>• Apollo Hospital Uppal: 5 km</li>
                <li>• Omega Hospital: 4 km</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">🛍️ Shopping</h3>
              <ul className="space-y-2 text-sm">
                <li>• Radhika Theater Mall: 4 km</li>
                <li>• Forum Sujana Mall: 15 km</li>
                <li>• Metro Cash & Carry: 6 km</li>
                <li>• D-Mart Uppal: 5 km</li>
                <li>• Local markets: Multiple</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">🎬 Entertainment</h3>
              <ul className="space-y-2 text-sm">
                <li>• Radhika Theater: 4 km</li>
                <li>• Uppal Stadium: 5 km</li>
                <li>• NTR Gardens: 18 km (via metro)</li>
                <li>• Wonderla Hyderabad: 30 km</li>
                <li>• Restaurants & Cafes: Multiple in Uppal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Price Comparison: Villas Near Uppal Metro
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-8">
            Compare villa prices near Uppal Metro. The Pavillion offers best value for standalone luxury villas with metro connectivity.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--bg)", color: "var(--ink)" }}>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>Project</th>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>Location</th>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>Distance to Metro</th>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>Villa Type</th>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)" }}>Price (150 Sq. Yds)</th>
                </tr>
              </thead>
              <tbody style={{ color: "var(--ink-2)" }}>
                <tr style={{ background: "var(--surface)" }}>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>The Pavillion</strong></td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Boduppal</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>8 min</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Standalone</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong>₹1.87 Cr</strong></td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Project A</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Uppal</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>5 min</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Row house</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>₹2.1 Cr</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Project B</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Nagole</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>15 min</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Row house</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>₹1.75 Cr</td>
                </tr>
                <tr>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Project C</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Boduppal</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>10 min</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Semi-attached</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>₹1.82 Cr</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ color: "var(--ink-2)" }} className="text-sm mt-6">
            <strong>Best Value:</strong> The Pavillion offers TRUE standalone villas (no shared walls) near Uppal Metro at competitive pricing. Others are row houses or farther from metro.
          </p>

          {/* Map */}
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg mt-8" style={{ border: "1px solid var(--edge)" }}>
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
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">1. How far is The Pavillion from Uppal Metro?</h3>
              <p className="text-sm">The Pavillion is 8 minutes drive from Uppal Metro Station. You can take auto/cab or park your vehicle at the metro station and commute daily.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">2. Can I commute to Gachibowli daily from here?</h3>
              <p className="text-sm">Yes! Gachibowli is 15 km (25 min via ORR). Many IT professionals living near Uppal commute to Gachibowli/HITEC City daily. OR, use metro to Jubilee Hills + cab.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">3. Is it better to live near Uppal Metro or in Uppal?</h3>
              <p className="text-sm">"Near Uppal" (like Boduppal) is better because you get metro connectivity WITHOUT the congestion, noise, and high prices of living right in Uppal. Plus 15-20% better value.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">4. What is the villa price near Uppal Metro?</h3>
              <p className="text-sm">The Pavillion villas near Uppal Metro start from ₹1.87 Cr for 150 Sq. Yds standalone villa. This is 10-15% cheaper than projects right in Uppal.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">5. Are these standalone villas or row houses?</h3>
              <p className="text-sm">The Pavillion offers TRUE standalone villas with NO shared walls. Four-side open plots. Unlike most projects near Uppal which are row houses.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">6. Is metro Phase 2 coming to this area?</h3>
              <p className="text-sm">Yes! Metro Phase 2 extension to Ghatkesar is planned to pass through Boduppal area. This will make metro even more accessible (walking distance).</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">7. Which is better for IT professionals — Gachibowli or near Uppal?</h3>
              <p className="text-sm">Near Uppal (Boduppal) is better for value. Same villa in Gachibowli costs ₹3.5 Cr vs ₹1.87 Cr here. Commute is 25 min via ORR. Save ₹1.5 Cr+.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">8. How do I book a site visit?</h3>
              <p className="text-sm">Call +91 96760 77142, WhatsApp us, or fill enquiry form. We offer FREE cab pickup from Uppal Metro Station for site visits. Available Mon-Sun, 10 AM - 6 PM.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Book Your Site Visit — Free Pickup from Uppal Metro
          </h2>
          <div className="w-16 h-px mx-auto mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-8">
            Experience luxury villa living near Uppal Metro. We offer complimentary cab service from Uppal Metro Station to The Pavillion for site visits.
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
            <strong>Related Searches:</strong> villas near Uppal, villas near Uppal metro, villas near Uppal metro station, luxury villas near Uppal, independent houses near Uppal, standalone villas near Uppal, gated community near Uppal, villas Boduppal Uppal
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link href="/villas-in-boduppal" style={{ color: "var(--accent)" }}>Villas in Boduppal</Link>
            <Link href="/independent-houses-boduppal" style={{ color: "var(--accent)" }}>Independent Houses Boduppal</Link>
            <Link href="/" style={{ color: "var(--accent)" }}>The Pavillion Homepage</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
