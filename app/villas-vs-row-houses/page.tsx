import type { Metadata } from "next";
import Link from "next/link";
import { project, company } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `Villas vs Row Houses in Boduppal | Why ${project.name} Villas Win`,
  description: `Standalone villas vs row houses comparison. ${project.name} offers zero shared walls, complete privacy, 15-20% better resale. ${project.overview.totalVillas} villas. ${project.families.silver.priceDisplay}.`,
  alternates: { canonical: "https://bommakugroup.com/villas-vs-row-houses" },
};

export default function Page() {
  return (
    <main className="min-h-screen py-16 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl lg:text-5xl font-light mb-6">
          Standalone Villas vs Row Houses – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
        </h1>
        <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8 max-w-3xl">
          {project.name} offers TRUE standalone villas—not row houses. Zero shared walls, four-side open plots, 15-20% better resale value. {project.overview.totalVillas} villas. From {project.families.silver.priceDisplay}.
        </p>
        <Link href="/standalone-villas-boduppal" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">See Full Comparison</Link>
      </div>
    </main>
  );
}
