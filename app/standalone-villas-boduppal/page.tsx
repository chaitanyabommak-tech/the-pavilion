import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { project, company, APPROVAL_LABEL } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `Standalone Villas in Boduppal | ${project.name} - No Shared Walls`,
  description: `${project.overview.totalVillas} standalone villas in Boduppal. NO shared walls, four-side open plots, complete privacy. ${project.overview.configuration}. ${project.families.silver.priceDisplay}.`,
  alternates: { canonical: "https://bommakugroup.com/standalone-villas-boduppal" },
  openGraph: {
    title: `Standalone Villas in Boduppal | ${project.name}`,
    description: `${project.overview.totalVillas} standalone villas. No shared walls. ${project.overview.configuration}, ${project.families.silver.priceDisplay}.`,
    type: "article",
    url: "https://bommakugroup.com/standalone-villas-boduppal",
  },
};

export default function StandaloneVillasBodupalPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[{ label: "Standalone Villas Boduppal", href: "/standalone-villas-boduppal" }]} />

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            STANDALONE VILLAS
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            TRUE Standalone Villas in Boduppal – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-8 max-w-3xl">
            {project.overview.totalVillas} genuine standalone villas—NOT row houses. Four-side open plots, zero shared walls, individual compound walls. Complete privacy. {project.overview.configuration} design. From {project.families.silver.priceDisplay}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href={`${company.contact.whatsappUrl}?text=Hi, I want to visit the standalone villas at ${project.name}`} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
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
            Standalone vs Row Houses
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "var(--bg)" }}>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>Feature</th>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>Standalone Villas</th>
                  <th className="p-3 text-left border" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>Row Houses</th>
                </tr>
              </thead>
              <tbody style={{ color: "var(--ink-2)" }}>
                <tr>
                  <td className="p-3 border font-semibold" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>Shared Walls</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong style={{ color: "green" }}>ZERO</strong> — Four-side open</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong style={{ color: "red" }}>YES</strong> — Shares 1-2 walls</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>Privacy</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Maximum — All windows face your compound</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Partial — Side walls have no windows</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>Modifications</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Independent — Modify without neighbor approval</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Restricted — Shared walls limit changes</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>Sound Insulation</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Complete — No neighbor noise through walls</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Partial — Hear neighbors through shared walls</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>Resale Value</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}><strong style={{ color: "green" }}>15-20% Premium</strong> over row houses</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Lower — Buyers prefer standalone</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>Natural Light</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>All four sides — Maximum sunlight</td>
                  <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Only front/back — Dark side rooms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-6">
            Why {project.name} Villas Are TRUE Standalone
          </h2>
          <div className="space-y-4" style={{ color: "var(--ink-2)" }}>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Four-Side Open Plots:</strong> Every villa has open space on all four sides. No shared walls with any neighbor.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Individual Compound Walls:</strong> Each villa has its own compound wall and gate. Your private boundary.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Independent Modifications:</strong> Want to add a room? Modify elevation? You can—no neighbor approval needed because you don't share walls.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Complete Privacy:</strong> All your windows and balconies face your own compound—not a neighbor's wall. Maximum natural light, zero intrusion.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Higher Resale:</strong> When you sell, standalone villas command 15-20% premium over row houses in the same area. Buyers pay more for privacy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-6">
            Visit Our Standalone Villas
          </h2>
          <p style={{ color: "var(--ink-2)" }} className="mb-8 max-w-2xl mx-auto">
            {project.overview.totalVillas} villas, all standalone. No shared walls. {project.overview.configuration}. From {project.families.silver.priceDisplay}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={company.contact.telUrl} className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
              Call {company.contact.phoneDisplay}
            </a>
            <Link href="/villas-in-boduppal" className="btn-secondary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
              See Full Details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
