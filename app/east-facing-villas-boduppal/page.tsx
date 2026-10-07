import type { Metadata } from "next";
import Link from "next/link";
import { project, company } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `East Facing Villas in Boduppal | ${project.name}`,
  description: `${project.facing.eastCount} east-facing villas available. Vastu-compliant, morning sunlight, premium orientation. ${project.overview.configuration}. From ${project.families.silver.priceDisplay}.`,
  alternates: { canonical: "https://bommakugroup.com/east-facing-villas-boduppal" },
};

export default function Page() {
  return (
    <main className="min-h-screen py-16 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl lg:text-5xl font-light mb-6">
          East Facing Villas – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
        </h1>
        <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8 max-w-3xl">
          {project.facing.eastCount} east-facing villas in rows {project.facing.eastRows.join(", ")}. Vastu-compliant, premium morning sunlight. {project.overview.configuration}. From {project.families.silver.priceDisplay}.
        </p>
        <Link href="/#book-site-visit" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">Book Site Visit</Link>
      </div>
    </main>
  );
}
