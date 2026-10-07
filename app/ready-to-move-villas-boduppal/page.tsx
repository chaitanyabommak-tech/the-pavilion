import type { Metadata } from "next";
import Link from "next/link";
import { project, company } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `Ready to Move Villas in Boduppal | ${project.name}`,
  description: `Construction ongoing. Contact for current status and possession timeline. ${project.overview.totalVillas} ${project.overview.configuration} villas. From ${project.families.silver.priceDisplay}.`,
  alternates: { canonical: "https://bommakugroup.com/ready-to-move-villas-boduppal" },
};

export default function Page() {
  return (
    <main className="min-h-screen py-16 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl lg:text-5xl font-light mb-6">
          Villa Construction Status – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
        </h1>
        <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8 max-w-3xl">
          Construction is ongoing. {project.overview.totalVillas} {project.overview.configuration} villas. For current project status and expected possession timeline, contact {company.contact.phoneDisplay}.
        </p>
        <a href={company.contact.telUrl} className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">Call {company.contact.phoneDisplay}</a>
      </div>
    </main>
  );
}
