import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { project, company } from "@/src/content/facts";
import { WHATSAPP_URL } from "@/src/lib/constants";

export const metadata: Metadata = {
  title: `Customizable Villas in Boduppal | ${project.name} - Design Your Dream Home`,
  description: `Fully customizable villas in Boduppal. ${project.name} offers complete design freedom—customize elevations, floor plans, finishes. ${project.overview.totalVillas} villas. ${project.families.silver.priceDisplay}.`,
  alternates: { canonical: "https://bommakugroup.com/villas-with-customization" },
};

export default function VillasWithCustomizationPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[{ label: "Customizable Villas", href: "/villas-with-customization" }]} />

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">CUSTOMIZABLE VILLAS</p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Design Your Dream Villa – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />
          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-8 max-w-3xl">
            Complete design freedom. Customize elevations, floor plans, and finishes before construction. In-house architects guide you through every choice. From {project.families.silver.priceDisplay}.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
            Start Customizing
          </a>
        </div>
      </section>

      <section className="py-12 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl mb-6">The Clean Slate Program</h2>
          <p style={{ color: "var(--ink-2)" }} className="mb-4 leading-relaxed">{project.cleanSlate.description}. You can customize:</p>
          <ul style={{ color: "var(--ink-2)" }} className="space-y-3 mb-6">
            <li className="flex gap-3"><span style={{ color: "var(--accent)" }}>✓</span> <span>Elevation design (choose from 6 pre-designed styles or bring your own)</span></li>
            <li className="flex gap-3"><span style={{ color: "var(--accent)" }}>✓</span> <span>Floor plan (reposition walls, change room sizes)</span></li>
            <li className="flex gap-3"><span style={{ color: "var(--accent)" }}>✓</span> <span>Finishes (tiles, flooring, paint, fixtures)</span></li>
            <li className="flex gap-3"><span style={{ color: "var(--accent)" }}>✓</span> <span>Penthouse layout (home theatre, gym, lounge)</span></li>
          </ul>
          <p style={{ color: "var(--ink-3)" }} className="text-sm italic">{project.cleanSlate.note}.</p>
        </div>
      </section>
    </main>
  );
}
