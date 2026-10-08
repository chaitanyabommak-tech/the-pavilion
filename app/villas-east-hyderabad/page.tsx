import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { project, company, APPROVAL_LABEL } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `Villas in East Hyderabad | ${project.name} Boduppal - ${project.overview.totalVillas} Luxury Villas`,
  description: `${project.overview.totalVillas} luxury villas in East Hyderabad. ${project.overview.configuration}, metro connectivity, ${APPROVAL_LABEL}. Starting ${project.families.silver.priceDisplay}. Book site visit.`,
  alternates: { canonical: "https://bommakugroup.com/villas-east-hyderabad" },
  openGraph: {
    title: `Villas in East Hyderabad | ${project.name}`,
    description: `${project.overview.totalVillas} luxury villas in East Hyderabad. ${project.overview.configuration}, ${project.families.silver.priceDisplay}. ${APPROVAL_LABEL}.`,
    type: "article",
    url: "https://bommakugroup.com/villas-east-hyderabad",
  },
};

export default function VillasEastHyderabadPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[{ label: "Villas in East Hyderabad", href: "/villas-east-hyderabad" }]} />

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            EAST HYDERABAD VILLAS
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Luxury Villas in East Hyderabad – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-8 max-w-3xl">
            Discover {project.overview.totalVillas} exclusive standalone villas in {project.location.area}, East Hyderabad. {project.overview.configuration} design, metro connectivity, and premium amenities. {APPROVAL_LABEL}. From {project.families.silver.priceDisplay}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href={`${company.contact.whatsappUrl}?text=Hi, I am interested in ${project.name} villas in East Hyderabad`} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              WhatsApp: {company.contact.phoneDisplay}
            </a>
            <Link href="/#book-site-visit" className="btn-secondary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              Book Site Visit
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-6">
            Why East Hyderabad for Villas?
          </h2>
          <div className="grid md:grid-cols-2 gap-6" style={{ color: "var(--ink-2)" }}>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">Metro Connectivity</h3>
              <p className="text-sm leading-relaxed">Uppal Metro Station (Blue Line) connects to Ameerpet, Secunderabad, LB Nagar. {project.name} is just 8 min from metro.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">IT Hub Proximity</h3>
              <p className="text-sm leading-relaxed">12 km to HITEC City, 15 km to Gachibowli via ORR. Easy commute for IT professionals.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">Better Value</h3>
              <p className="text-sm leading-relaxed">40% more affordable than Gachibowli/HITEC City while offering similar connectivity and infrastructure.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">Strong Appreciation</h3>
              <p className="text-sm leading-relaxed">8-12% annual appreciation over past 5 years. RRR development and metro expansion driving growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-6">
            What Makes {project.name} Special
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8" style={{ color: "var(--ink-2)" }}>
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-2xl font-semibold mb-2">{project.overview.totalVillas}</p>
              <p className="text-sm">Villas Only</p>
            </div>
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-2xl font-semibold mb-2">{project.overview.configuration}</p>
              <p className="text-sm">Configuration</p>
            </div>
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px" }}>
              <p style={{ color: "var(--accent)" }} className="text-2xl font-semibold mb-2">24,000 SFT</p>
              <p className="text-sm">Recreation Zone</p>
            </div>
          </div>

          <div className="space-y-4" style={{ color: "var(--ink-2)" }}>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Standalone Villas:</strong> No shared walls. Four-side open plots with individual compound walls. TRUE privacy.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Design Freedom:</strong> Customize elevations, floor plans, and finishes before construction. In-house architects guide you.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Premium Amenities:</strong> Swimming pool, gym, pickleball courts, basketball court, Zen garden—750 SFT recreation per family.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Bank Approved:</strong> Home loans pre-approved by SBI, ICICI, HDFC, Kotak, Bajaj Finance, Karur Vysya Bank.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-6">
            Ready to Explore?
          </h2>
          <p style={{ color: "var(--ink-2)" }} className="mb-8 max-w-2xl mx-auto">
            {project.overview.totalVillas} villas in {project.location.area}, East Hyderabad. Limited inventory. Book your site visit today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={company.contact.telUrl} className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
              Call {company.contact.phoneDisplay}
            </a>
            <Link href="/villas-in-boduppal" className="btn-secondary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
              View Full Details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
