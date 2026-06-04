import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "3 BHK Villas in Boduppal | The Pavillion - Standalone Luxury Homes",
  description:
    "3 BHK luxury villas in Boduppal with Pooja Room. 2,200+ SFT standalone homes, 150-228 Sq. Yds plots, G+1+Penthouse. ₹1.87 Cr onwards. NO shared walls. HMDA registered. Design freedom. Book now.",
  keywords:
    "3 BHK villas in Boduppal, 3 bedroom villas Boduppal, 3BHK independent houses Boduppal, luxury 3 BHK villas Hyderabad, 3 BHK standalone villas, gated community 3 BHK, Boduppal 3 bedroom houses, 3 BHK duplex villas",
  alternates: { canonical: "https://bommakugroup.com/3bhk-villas-boduppal" },
  openGraph: {
    title: "3 BHK Villas in Boduppal | The Pavillion - ₹1.87 Cr",
    description: "3 BHK + Pooja Room luxury villas in Boduppal. 2,200+ SFT, standalone, G+1+Penthouse. From ₹1.87 Cr.",
    type: "article",
    url: "https://bommakugroup.com/3bhk-villas-boduppal",
  },
};

export default function ThreeBHKVillasBodupalPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <Link href="/" style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-opacity mb-6 inline-block">
            ← Back to Home
          </Link>

          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            3 BHK VILLAS BODUPPAL
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            3 BHK Villas in Boduppal – <span className="italic" style={{ color: "var(--ink-3)" }}>The Pavillion</span>
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-8 max-w-3xl">
            Spacious 3 BHK + Pooja Room luxury villas in Surya Hills, Boduppal. 2,200-2,500 SFT standalone homes spread across G+1+Penthouse. 150-228 Sq. Yds plots. No shared walls. From ₹1.87 Cr onwards.
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

      {/* 3 BHK Configuration */}
      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            What's Included in Our 3 BHK Villas?
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-6" style={{ background: "var(--bg)", borderRadius: "8px", border: "1px solid var(--edge)" }}>
              <h3 style={{ color: "var(--accent)" }} className="text-xl font-semibold mb-4">Ground Floor (1,100 SFT)</h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--ink-2)" }}>
                <li>✓ Living Room (250 SFT) - spacious, double height option</li>
                <li>✓ Dining Area (150 SFT) - adjacent to living</li>
                <li>✓ Modular Kitchen (150 SFT) - with utility area</li>
                <li>✓ Bedroom 1 (Master) (200 SFT) - with attached bath</li>
                <li>✓ Pooja Room (50 SFT) - dedicated sacred space</li>
                <li>✓ Guest Toilet</li>
                <li>✓ Car Parking (2 cars) + sit-out</li>
              </ul>
            </div>

            <div className="p-6" style={{ background: "var(--bg)", borderRadius: "8px", border: "1px solid var(--edge)" }}>
              <h3 style={{ color: "var(--accent)" }} className="text-xl font-semibold mb-4">First Floor (700 SFT)</h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--ink-2)" }}>
                <li>✓ Bedroom 2 (180 SFT) - with attached bath</li>
                <li>✓ Bedroom 3 (180 SFT) - with attached bath</li>
                <li>✓ Family Lounge (150 SFT) - TV area / study</li>
                <li>✓ Utility Room / Storage</li>
                <li>✓ Balcony (100 SFT) - private outdoor space</li>
              </ul>

              <h3 style={{ color: "var(--accent)" }} className="text-xl font-semibold mb-4 mt-6">Penthouse (400 SFT)</h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--ink-2)" }}>
                <li>✓ Open Terrace (300 SFT) - for parties, yoga, gardening</li>
                <li>✓ Optional Room (100 SFT) - home office / gym</li>
              </ul>
            </div>
          </div>

          <p style={{ color: "var(--ink-2)" }} className="text-sm">
            <strong>Total Built-up Area:</strong> 2,200 SFT (can be customized up to 2,500 SFT based on plot size)
          </p>
        </div>
      </section>

      {/* Why 3 BHK is Perfect */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Why 3 BHK is Perfect for Modern Families
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="grid md:grid-cols-2 gap-6" style={{ color: "var(--ink-2)" }}>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">Ideal For:</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ <strong>Young Couples:</strong> 2 guest rooms + 1 master bedroom (perfect as you grow)</li>
                <li>✓ <strong>Families with 1-2 Kids:</strong> Each kid gets their own room</li>
                <li>✓ <strong>Joint Families:</strong> Parents can have separate bedroom</li>
                <li>✓ <strong>WFH Professionals:</strong> Convert 1 bedroom to home office</li>
                <li>✓ <strong>Investors:</strong> High rental demand (₹35-40K/month in Boduppal)</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">Why Not 2 BHK or 4 BHK?</h3>
              <ul className="space-y-2 text-sm">
                <li>✗ <strong>2 BHK:</strong> Too small for growing families, limited resale</li>
                <li>✗ <strong>4 BHK:</strong> Too big, higher maintenance, less demand</li>
                <li>✓ <strong>3 BHK (Sweet Spot):</strong> Perfect size, best resale, highest demand</li>
                <li>✓ <strong>Future-Proof:</strong> Works for couples, small families, AND joint families</li>
                <li>✓ <strong>Better ROI:</strong> 3 BHK has highest rental yield in Boduppal (5-6%)</li>
              </ul>
            </div>
          </div>

          <p className="text-sm mt-8 p-4" style={{ color: "var(--ink-2)", background: "var(--surface)", borderLeft: "3px solid var(--accent)", borderRadius: "4px" }}>
            <strong>Market Data:</strong> 3 BHK villas in Boduppal have 40% more buyer interest than 2 BHK or 4 BHK. Rental demand is 3x higher. Best configuration for appreciation and rental income.
          </p>
        </div>
      </section>

      {/* 3 BHK Villa Types */}
      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            3 BHK Villa Types at The Pavillion
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="space-y-6">
            <div className="p-6" style={{ background: "var(--bg)", border: "2px solid var(--accent)", borderRadius: "8px" }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 style={{ color: "var(--ink)" }} className="text-2xl font-semibold mb-2">Type A - Standard 3 BHK</h3>
                  <p style={{ color: "var(--ink-2)" }} className="text-sm">East/West Facing | Most Popular</p>
                </div>
                <div className="text-right">
                  <p style={{ color: "var(--accent)" }} className="text-3xl font-light">₹1.87 Cr</p>
                  <p style={{ color: "var(--ink-2)" }} className="text-xs">onwards</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 text-sm" style={{ color: "var(--ink-2)" }}>
                <div>
                  <p className="font-semibold mb-1">Plot Size</p>
                  <p>150 Sq. Yds (30×45 ft)</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Built-up Area</p>
                  <p>2,200 SFT (G+1+Penthouse)</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Configuration</p>
                  <p>3 BHK + Pooja + Terrace</p>
                </div>
              </div>
            </div>

            <div className="p-6" style={{ background: "var(--bg)", border: "1px solid var(--edge)", borderRadius: "8px" }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 style={{ color: "var(--ink)" }} className="text-2xl font-semibold mb-2">Type B - Premium 3 BHK</h3>
                  <p style={{ color: "var(--ink-2)" }} className="text-sm">North-East/North-West Facing | Larger Plot</p>
                </div>
                <div className="text-right">
                  <p style={{ color: "var(--accent)" }} className="text-3xl font-light">₹2.1-2.3 Cr</p>
                  <p style={{ color: "var(--ink-2)" }} className="text-xs">onwards</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 text-sm" style={{ color: "var(--ink-2)" }}>
                <div>
                  <p className="font-semibold mb-1">Plot Size</p>
                  <p>165-167 Sq. Yds</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Built-up Area</p>
                  <p>2,300-2,400 SFT</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Configuration</p>
                  <p>3 BHK + Pooja + Study + Terrace</p>
                </div>
              </div>
            </div>

            <div className="p-6" style={{ background: "var(--bg)", border: "1px solid var(--edge)", borderRadius: "8px" }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 style={{ color: "var(--ink)" }} className="text-2xl font-semibold mb-2">Type C - Luxury Corner 3 BHK</h3>
                  <p style={{ color: "var(--ink-2)" }} className="text-sm">Corner Plots | Maximum Privacy</p>
                </div>
                <div className="text-right">
                  <p style={{ color: "var(--accent)" }} className="text-3xl font-light">₹2.5-3.0 Cr</p>
                  <p style={{ color: "var(--ink-2)" }} className="text-xs">onwards</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 text-sm" style={{ color: "var(--ink-2)" }}>
                <div>
                  <p className="font-semibold mb-1">Plot Size</p>
                  <p>222-228 Sq. Yds</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Built-up Area</p>
                  <p>2,500+ SFT</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Configuration</p>
                  <p>3 BHK + Pooja + Study + Guest + Terrace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 BHK Amenities */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Premium Amenities for 3 BHK Villa Residents
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-8">
            30,000 SFT recreation zone for only 40 families = 750 SFT per family. Most projects offer 200 SFT per family. 3-4x more space for your family to enjoy.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-3">Family Amenities</h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--ink-2)" }}>
                <li>✓ Swimming Pool (20×40 ft)</li>
                <li>✓ Kids Play Area (outdoor)</li>
                <li>✓ Indoor Games Room</li>
                <li>✓ Gym & Yoga Studio</li>
                <li>✓ Meditation Garden</li>
              </ul>
            </div>

            <div className="p-4" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-3">Convenience</h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--ink-2)" }}>
                <li>✓ Clubhouse (5,000 SFT)</li>
                <li>✓ Visitor Parking</li>
                <li>✓ 24/7 Security (CCTV)</li>
                <li>✓ Power Backup</li>
                <li>✓ Landscaped Gardens</li>
              </ul>
            </div>

            <div className="p-4" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-3">Lifestyle</h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--ink-2)" }}>
                <li>✓ Multipurpose Court</li>
                <li>✓ Jogging Track</li>
                <li>✓ Senior Citizen Park</li>
                <li>✓ Community Hall</li>
                <li>✓ EV Charging Points</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price Breakdown */}
      <section className="py-16 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            3 BHK Villa Pricing — Complete Breakdown
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="p-6 mb-6" style={{ background: "var(--bg)", border: "2px solid var(--accent)", borderRadius: "8px" }}>
            <h3 style={{ color: "var(--ink)" }} className="text-xl font-semibold mb-4">Type A - 3 BHK Villa (150 Sq. Yds)</h3>
            <div className="space-y-2 text-sm" style={{ color: "var(--ink-2)" }}>
              <div className="flex justify-between py-2 border-b" style={{ borderColor: "var(--edge)" }}>
                <span>Plot Cost (150 Sq. Yds @ ₹45,000/Sq. Yd)</span>
                <span className="font-semibold">₹67.5 L</span>
              </div>
              <div className="flex justify-between py-2 border-b" style={{ borderColor: "var(--edge)" }}>
                <span>Construction Cost (2,200 SFT @ ₹5,000/SFT)</span>
                <span className="font-semibold">₹1.10 Cr</span>
              </div>
              <div className="flex justify-between py-2 border-b" style={{ borderColor: "var(--edge)" }}>
                <span>Development Charges (amenities, landscaping)</span>
                <span className="font-semibold">₹9.5 L</span>
              </div>
              <div className="flex justify-between py-3 text-lg" style={{ color: "var(--ink)" }}>
                <span className="font-semibold">Total Price</span>
                <span className="font-semibold" style={{ color: "var(--accent)" }}>₹1.87 Cr</span>
              </div>
            </div>

            <p style={{ color: "var(--ink-2)" }} className="text-xs mt-4">
              <strong>Effective Rate:</strong> ₹8,000/SFT (All-inclusive) | <strong>EMI:</strong> ₹1.45 L/month @ 9% for 20 years (80% loan)
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-4" style={{ background: "var(--bg)", borderRadius: "8px", border: "1px solid var(--edge)" }}>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-3">What's Included?</h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--ink-2)" }}>
                <li>✓ Complete villa construction</li>
                <li>✓ All amenities access</li>
                <li>✓ HMDA registration</li>
                <li>✓ 24/7 security setup</li>
                <li>✓ Individual sale deed</li>
                <li>✓ Bank loan assistance</li>
              </ul>
            </div>

            <div className="p-4" style={{ background: "var(--bg)", borderRadius: "8px", border: "1px solid var(--edge)" }}>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-3">Not Included (Optional)</h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--ink-2)" }}>
                <li>• Interior finishes (tiles, paint choices)</li>
                <li>• Modular kitchen fittings</li>
                <li>• Wardrobes & furniture</li>
                <li>• False ceiling & lighting</li>
                <li>• Landscaping (within villa plot)</li>
                <li>• Registration charges (4-5%)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Location — Perfect for 3 BHK Buyers
          </h2>
          <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />

          <div className="grid md:grid-cols-2 gap-8 mb-8" style={{ color: "var(--ink-2)" }}>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">Why Boduppal for 3 BHK?</h3>
              <ul className="space-y-2 text-sm">
                <li>✓ <strong>Affordable:</strong> ₹1.87 Cr vs ₹3.5 Cr in Gachibowli</li>
                <li>✓ <strong>Connected:</strong> Metro (8 min), ORR (12 km), IT hubs (20 min)</li>
                <li>✓ <strong>Schools Nearby:</strong> DPS, Oakridge, Sancta Maria</li>
                <li>✓ <strong>Hospitals:</strong> Medicity, Yashoda, Apollo within 6 km</li>
                <li>✓ <strong>Growing:</strong> Metro Phase 2, Infosys campus nearby</li>
                <li>✓ <strong>Peaceful:</strong> Low-density, greenery, clean air</li>
              </ul>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="text-lg font-semibold mb-3">Commute Times</h3>
              <ul className="space-y-2 text-sm">
                <li>• Uppal Metro: 8 min</li>
                <li>• Uppal IT Park: 12 min</li>
                <li>• HITEC City: 20 min (ORR)</li>
                <li>• Gachibowli: 25 min (ORR)</li>
                <li>• Airport: 35 min (ORR)</li>
                <li>• Secunderabad: 30 min (metro)</li>
                <li>• ECIL: 15 min</li>
                <li>• Nacharam: 10 min</li>
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
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">1. What is the price of 3 BHK villas in Boduppal?</h3>
              <p className="text-sm">3 BHK villas in Boduppal start from ₹1.87 Cr at The Pavillion. This is for 150 Sq. Yds standalone villa with 2,200 SFT built-up area (G+1+Penthouse). Best value in the area.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">2. Are these 3 BHK villas or 3 BHK apartments?</h3>
              <p className="text-sm">These are 3 BHK VILLAS (independent houses), not apartments. Standalone homes with own plot, no shared walls, private entrance, parking on your plot, terrace, and complete design freedom.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">3. What is the built-up area of 3 BHK villa?</h3>
              <p className="text-sm">Standard 3 BHK villa has 2,200 SFT built-up area across G+1+Penthouse. Includes 3 bedrooms (all with attached baths), living, dining, kitchen, pooja room, balcony, and open terrace.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">4. Is 3 BHK enough for a family of 4-5 people?</h3>
              <p className="text-sm">Yes, absolutely! 3 BHK with 2,200 SFT is perfect for families of 4-6 people. Couple + 2 kids + grandparents can comfortably live. Plus you have pooja room, terrace, and option to convert penthouse to 4th bedroom.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">5. Can I get a home loan for this 3 BHK villa?</h3>
              <p className="text-sm">Yes. HMDA registered project, approved by SBI, HDFC, ICICI, Axis banks. Loan up to 80% of property value. For ₹1.87 Cr villa, you can get ₹1.5 Cr loan (EMI ₹1.45 L/month @ 9% for 20 years).</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">6. What is the difference between 3 BHK duplex and 3 BHK villa?</h3>
              <p className="text-sm">Duplex = apartment spread across 2 floors (shared walls, no land ownership). Villa = independent house on own plot (no shared walls, you own land). Villas appreciate better and offer more privacy.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">7. Can I customize my 3 BHK villa layout?</h3>
              <p className="text-sm">Yes! Before construction starts, you can modify: room sizes, add home office/study, bigger kitchen, walk-in closet, additional bathroom, elevation style, finishes. Our architects will help you customize.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">8. What is the resale value of 3 BHK villas?</h3>
              <p className="text-sm">3 BHK villas in Boduppal appreciate at 10-12% YoY. Buy at ₹1.87 Cr today → worth ₹3.0-3.5 Cr in 5 years. Higher appreciation than apartments due to land ownership + scarcity of standalone villas.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">9. What are monthly maintenance charges?</h3>
              <p className="text-sm">Estimated ₹4,000-5,000/month for 3 BHK villa (covers security, common area maintenance, landscaping). Much lower than apartments (₹8-10K) because only 40 families share costs.</p>
            </div>

            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">10. When can I move into my 3 BHK villa?</h3>
              <p className="text-sm">Possession in 18-24 months from booking. Construction is ongoing. Early bird buyers get best villa selection (facing, plot size, location). Book site visit: Call +91 96760 77142.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-6">
            Book Your 3 BHK Villa in Boduppal Today
          </h2>
          <div className="w-16 h-px mx-auto mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-8">
            Only 40 villas. Limited 3 BHK units available. Starting ₹1.87 Cr. Early bird pricing. Book site visit now.
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
            <strong>Related Searches:</strong> 3 BHK villas in Boduppal, 3 bedroom villas Boduppal, 3BHK independent houses Boduppal, luxury 3 BHK villas Hyderabad, 3 BHK standalone villas, 3 BHK duplex villas Boduppal
          </p>
          <div className="flex flex-wrap gap-4 text-xs">
            <Link href="/villas-in-boduppal" style={{ color: "var(--accent)" }}>Villas in Boduppal</Link>
            <Link href="/villas-near-uppal" style={{ color: "var(--accent)" }}>Villas Near Uppal Metro</Link>
            <Link href="/independent-houses-boduppal" style={{ color: "var(--accent)" }}>Independent Houses Boduppal</Link>
            <Link href="/" style={{ color: "var(--accent)" }}>The Pavillion Homepage</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
