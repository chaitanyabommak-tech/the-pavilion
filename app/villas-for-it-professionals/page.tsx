import type { Metadata } from "next";
import Link from "next/link";
import { project, company } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `Villas for IT Professionals in Boduppal | ${project.name}`,
  description: `Perfect for IT professionals: 8 min to Uppal Metro, 12 km to HITEC City via ORR, metro to Gachibowli. ${project.overview.totalVillas} villas. ${project.families.silver.priceDisplay}.`,
  alternates: { canonical: "https://bommakugroup.com/villas-for-it-professionals" },
};

export default function Page() {
  return (
    <main className="min-h-screen py-16 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl lg:text-5xl font-light mb-6">
          Villas for IT Professionals – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
        </h1>
        <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8 max-w-3xl">
          Perfect for IT professionals: 8 min to Uppal Metro (Blue Line to Ameerpet), 12 km to HITEC City via ORR, metro connectivity to Gachibowli. Work from penthouse. {project.overview.totalVillas} villas. From {project.families.silver.priceDisplay}.
        </p>
        <Link href="/#book-site-visit" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">Book Site Visit</Link>
      </div>
    </main>
  );
}
