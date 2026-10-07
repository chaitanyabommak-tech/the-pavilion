import type { Metadata } from "next";
import Link from "next/link";
import { project, company, APPROVAL_LABEL } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `Best Villas in Boduppal 2026 | ${project.name} - Top Rated`,
  description: `${project.overview.totalVillas} standalone villas in Boduppal. ${project.overview.configuration}, zero shared walls, 24,000 SFT recreation, ${APPROVAL_LABEL}. ${project.families.silver.priceDisplay}.`,
  alternates: { canonical: "https://bommakugroup.com/best-villas-boduppal" },
};

export default function Page() {
  return (
    <main className="min-h-screen py-16 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl lg:text-5xl font-light mb-6">
          Best Villas in Boduppal 2026 – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
        </h1>
        <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8 max-w-3xl">
          {project.overview.totalVillas} standalone villas. {project.overview.configuration}, zero shared walls, complete design freedom, 750 SFT recreation per family, {APPROVAL_LABEL}, bank approved. From {project.families.silver.priceDisplay}.
        </p>
        <Link href="/villas-in-boduppal" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">See Full Details</Link>
      </div>
    </main>
  );
}
