import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { project, company, APPROVAL_LABEL } from "@/src/content/facts";
import { WHATSAPP_URL } from "@/src/lib/constants";

export const metadata: Metadata = {
  title: `Penthouse Villas in Boduppal | ${project.name} - ${project.overview.configuration} Configuration`,
  description: `${project.overview.totalVillas} ${project.overview.configuration} villas in Boduppal. Private penthouse with every villa. ${project.families.silver.priceDisplay}. ${APPROVAL_LABEL}. Book site visit.`,
  alternates: { canonical: "https://bommakugroup.com/penthouse-villas-boduppal" },
  openGraph: {
    title: `Penthouse Villas in Boduppal | ${project.name}`,
    description: `${project.overview.configuration} villas with private penthouse. ${project.overview.totalVillas} units. ${project.families.silver.priceDisplay}.`,
    type: "article",
    url: "https://bommakugroup.com/penthouse-villas-boduppal",
  },
};

export default function PenthouseVillasBodupalPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[{ label: "Penthouse Villas Boduppal", href: "/penthouse-villas-boduppal" }]} />

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            PENTHOUSE VILLAS
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            {project.overview.configuration} Villas in Boduppal – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-8 max-w-3xl">
            Every villa at {project.name} comes with a private penthouse—your personal sky retreat. {project.overview.totalVillas} {project.overview.configuration} villas in {project.location.area}. From {project.families.silver.priceDisplay}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
              WhatsApp {company.contact.phoneDisplay}
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
            What is {project.overview.configuration}?
          </h2>
          <div className="space-y-6" style={{ color: "var(--ink-2)" }}>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Ground Floor (G):</strong> Living room, dining, kitchen, 1 bedroom with attached bath, pooja room, covered parking.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>First Floor (+1):</strong> 2 master bedrooms with attached baths, family lounge, terrace access.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Penthouse (+Penthouse):</strong> Private sky retreat—home theatre, lounge, open terrace, panoramic views. Your personal entertainment zone.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-6">
            Why Penthouse Villas?
          </h2>
          <div className="grid md:grid-cols-2 gap-6" style={{ color: "var(--ink-2)" }}>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">Privacy + Space</h3>
              <p className="text-sm leading-relaxed">Unlike regular G+1 villas, the penthouse gives you a third private level—no neighbors above you, no noise from streets below.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">Home Theatre Ready</h3>
              <p className="text-sm leading-relaxed">Penthouse level is designed for home theatre setup. Soundproofed, dark, private—perfect movie experience.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">Better Resale Value</h3>
              <p className="text-sm leading-relaxed">Penthouse villas command 15-20% premium over regular G+1 in resale market. Future buyers pay more for that extra floor.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">Flexibility</h3>
              <p className="text-sm leading-relaxed">Use it as home office, gym, guest suite, or party zone. One extra floor gives you options regular villas don't have.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-6">
            Book Your Penthouse Villa
          </h2>
          <p style={{ color: "var(--ink-2)" }} className="mb-8 max-w-2xl mx-auto">
            {project.overview.totalVillas} villas, every one with a private penthouse. Limited inventory. From {project.families.silver.priceDisplay}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={company.contact.telUrl} className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
              Call {company.contact.phoneDisplay}
            </a>
            <Link href="/villas-in-boduppal" className="btn-secondary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
              See All Details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
