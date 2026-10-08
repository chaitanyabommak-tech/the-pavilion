import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { project, company, APPROVAL_LABEL } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `Villas in Surya Hills Boduppal | ${project.name} - ${project.overview.totalVillas} Luxury Villas`,
  description: `${project.overview.totalVillas} luxury villas in Surya Hills, Boduppal. ${project.overview.configuration}, ${APPROVAL_LABEL}, metro connectivity. ${project.families.silver.priceDisplay}. Book visit.`,
  alternates: { canonical: "https://bommakugroup.com/villas-surya-hills" },
  openGraph: {
    title: `Villas in Surya Hills | ${project.name} Boduppal`,
    description: `${project.overview.totalVillas} standalone villas in Surya Hills. ${project.overview.configuration}, ${project.families.silver.priceDisplay}.`,
    type: "article",
    url: "https://bommakugroup.com/villas-surya-hills",
  },
};

export default function VillasSuryaHillsPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[{ label: "Villas in Surya Hills", href: "/villas-surya-hills" }]} />

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            SURYA HILLS VILLAS
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Luxury Villas in Surya Hills – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-8 max-w-3xl">
            {project.overview.totalVillas} exclusive standalone villas in {project.location.area}. {project.overview.configuration}, no shared walls, complete privacy. {APPROVAL_LABEL}. From {project.families.silver.priceDisplay}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href={`${company.contact.whatsappUrl}?text=Hi, I am interested in ${project.name} villas in Surya Hills`} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              WhatsApp Now
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
            About Surya Hills, Boduppal
          </h2>
          <div className="space-y-4" style={{ color: "var(--ink-2)" }}>
            <p className="leading-relaxed">
              Surya Hills is a premium residential locality in Boduppal, East Hyderabad. Known for well-planned layouts, wide roads, and established villa communities.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Location Advantages:</strong> 8 min to Uppal Metro (Blue Line), 5 min to Uppal Main Road, 12 km to ORR Exit 9. Easy access to IT hubs (HITEC City 12 km, Gachibowli 15 km).
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Infrastructure:</strong> Operational schools (Chirec International 1 km, JHPS 2.5 km), hospitals (RBM 700m, Omega 5 km), markets (DSL Virtue Mall 5 km).
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Appreciation:</strong> 8-12% annual price growth over past 5 years driven by metro completion and ORR proximity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-6">
            {project.name} in Surya Hills
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px", color: "var(--ink-2)" }}>
              <p style={{ color: "var(--accent)" }} className="text-2xl font-semibold mb-2">{project.overview.totalVillas} Villas</p>
              <p className="text-sm">Exclusive Community</p>
            </div>
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px", color: "var(--ink-2)" }}>
              <p style={{ color: "var(--accent)" }} className="text-2xl font-semibold mb-2">Zero</p>
              <p className="text-sm">Shared Walls</p>
            </div>
            <div className="text-center p-6" style={{ background: "var(--surface)", borderRadius: "8px", color: "var(--ink-2)" }}>
              <p style={{ color: "var(--accent)" }} className="text-2xl font-semibold mb-2">24,000 SFT</p>
              <p className="text-sm">Recreation Zone</p>
            </div>
          </div>

          <div className="space-y-4" style={{ color: "var(--ink-2)" }}>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Standalone Villas:</strong> Four-side open plots. Individual compound walls. Complete privacy—no shared walls with neighbors.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Design Freedom:</strong> Customize elevations, floor plans, finishes. In-house architects guide you through personalization.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Premium Recreation:</strong> 750 SFT per family—7-8X industry average. Swimming pool, gym, pickleball, basketball, Zen garden.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-6">
            Visit Surya Hills Today
          </h2>
          <p style={{ color: "var(--ink-2)" }} className="mb-8 max-w-2xl mx-auto">
            {project.overview.totalVillas} villas in Surya Hills, Boduppal. Limited inventory. From {project.families.silver.priceDisplay}. Book your site visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={company.contact.telUrl} className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
              Call {company.contact.phoneDisplay}
            </a>
            <Link href="/villas-in-boduppal" className="btn-secondary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
              View Project Details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
