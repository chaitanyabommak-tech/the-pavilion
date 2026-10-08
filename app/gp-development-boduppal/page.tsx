import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { project, company, APPROVAL_LABEL, banks } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `${APPROVAL_LABEL} in Boduppal | ${project.name} - ${project.overview.totalVillas} Villas`,
  description: `${project.name} is a ${APPROVAL_LABEL} in ${project.location.area}. ${project.overview.totalVillas} standalone villas, bank approved, clear title. ${project.families.silver.priceDisplay}.`,
  alternates: { canonical: "https://bommakugroup.com/gp-development-boduppal" },
  openGraph: {
    title: `${APPROVAL_LABEL} in Boduppal | ${project.name}`,
    description: `${APPROVAL_LABEL}. ${project.overview.totalVillas} villas, bank approved, ${project.families.silver.priceDisplay}.`,
    type: "article",
    url: "https://bommakugroup.com/gp-development-boduppal",
  },
};

export default function GPDevelopmentBodupalPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[{ label: `${APPROVAL_LABEL} Boduppal`, href: "/gp-development-boduppal" }]} />

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            {APPROVAL_LABEL.toUpperCase()}
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            {APPROVAL_LABEL} in Boduppal – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-lg leading-relaxed mb-8 max-w-3xl">
            {project.name} is a {APPROVAL_LABEL} by {company.brandName} at {project.location.area}. Each buyer owns their individual plot and the villa that Bommaku builds on it. Bank approved. Clear title. {project.overview.totalVillas} villas. From {project.families.silver.priceDisplay}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href={`${company.contact.whatsappUrl}?text=Hi, I want to know about ${project.name} ${APPROVAL_LABEL}`} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block text-center">
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
            What is {APPROVAL_LABEL}?
          </h2>
          <div className="space-y-4" style={{ color: "var(--ink-2)" }}>
            <p className="leading-relaxed">
              A {APPROVAL_LABEL} (also called Circle Project) is where the developer sells individual villa plots with construction. Each buyer owns their plot outright, plus the villa built on it.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>How it's different from apartments:</strong> In an apartment, you buy a unit in a shared building. In a {APPROVAL_LABEL}, you own land + villa—no shared ownership of common areas.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Why buyers choose {APPROVAL_LABEL}:</strong> Individual sale deed for your plot. No undivided share. Easier resale. Banks approve loans faster for {APPROVAL_LABEL} layouts.
            </p>
            <p className="leading-relaxed">
              <strong style={{ color: "var(--ink)" }}>Due diligence:</strong> Before you book, we share the full document set with you and your lawyer for independent verification. We encourage every buyer to complete legal checks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-6">
            Bank Approvals for {project.name}
          </h2>
          <p style={{ color: "var(--ink-2)" }} className="mb-6 leading-relaxed">
            {project.name} is approved by {banks.approvedLenders.length} major banks for home loan financing:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {banks.approvedLenders.map(bank => (
              <div key={bank.name} className="text-center p-4" style={{ background: "var(--surface)", borderRadius: "8px" }}>
                <p style={{ color: "var(--ink)" }} className="font-semibold">{bank.name}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "var(--ink-2)" }} className="text-sm leading-relaxed">
            <strong style={{ color: "var(--ink)" }}>What this means:</strong> These banks have completed full due diligence on the project—verified title, layout approvals, and legal documents. Home loan approval is faster and smoother.
          </p>
        </div>
      </section>

      <section className="py-12 px-6" style={{ background: "var(--surface)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-6">
            What You Get at {project.name}
          </h2>
          <div className="grid md:grid-cols-2 gap-6" style={{ color: "var(--ink-2)" }}>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">Individual Sale Deed</h3>
              <p className="text-sm leading-relaxed">Your name on the land. No undivided share. Direct ownership of plot + villa.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">Standalone Villas</h3>
              <p className="text-sm leading-relaxed">{project.overview.configuration} configuration. No shared walls. Four-side open plots.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">Design Freedom</h3>
              <p className="text-sm leading-relaxed">Customize elevations, floor plans, finishes before construction starts.</p>
            </div>
            <div>
              <h3 style={{ color: "var(--ink)" }} className="font-semibold mb-2">Premium Recreation</h3>
              <p className="text-sm leading-relaxed">24,000 SFT recreation zone—750 SFT per family. Swimming pool, gym, sports courts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 style={{ color: "var(--ink)" }} className="font-heading text-2xl sm:text-3xl font-light mb-6">
            Visit the Site
          </h2>
          <p style={{ color: "var(--ink-2)" }} className="mb-8 max-w-2xl mx-auto">
            {project.overview.totalVillas} villas in {project.location.area}. {APPROVAL_LABEL}. Bank approved. From {project.families.silver.priceDisplay}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={company.contact.telUrl} className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
              Call {company.contact.phoneDisplay}
            </a>
            <Link href="/villas-in-boduppal" className="btn-secondary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
              Full Project Details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
