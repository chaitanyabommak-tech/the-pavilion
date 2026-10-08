import type { Metadata } from "next";
import Link from "next/link";
import { project, company, APPROVAL_LABEL } from "@/src/content/facts";
import { WHATSAPP_URL } from "@/src/lib/constants";

export const metadata: Metadata = {
  title: `Luxury Villas in Boduppal | ${project.name} - ${project.overview.configuration}`,
  description: `${project.overview.totalVillas} luxury villas in Boduppal. ${project.overview.configuration}, 24,000 SFT recreation, design freedom, ${APPROVAL_LABEL}. From ${project.families.silver.priceDisplay}.`,
  alternates: { canonical: "https://bommakugroup.com/luxury-villas-boduppal" },
};

export default function LuxuryVillasBodupalPage() {
  return (
    <main className="min-h-screen py-16 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl lg:text-5xl font-light mb-6">
          Luxury Villas in Boduppal – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
        </h1>
        <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8 max-w-3xl">
          {project.overview.totalVillas} luxury villas. {project.overview.configuration}, standalone (no shared walls), 24,000 SFT recreation zone, complete design freedom. {APPROVAL_LABEL}. From {project.families.silver.priceDisplay}.
        </p>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">WhatsApp {company.contact.phoneDisplay}</a>
      </div>
    </main>
  );
}
