import type { Metadata } from "next";
import Link from "next/link";
import { project, company } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `Villas Near Uppal Metro Station | ${project.name} - 8 Min Drive`,
  description: `Villas just 8 min from Uppal Metro Station. ${project.name} in ${project.location.area}. Blue Line connectivity to Ameerpet, Secunderabad. ${project.overview.totalVillas} villas. ${project.families.silver.priceDisplay}.`,
  alternates: { canonical: "https://bommakugroup.com/villas-near-uppal-metro-station" },
};

export default function VillasNearUppalMetroStationPage() {
  return (
    <main className="min-h-screen py-16 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl lg:text-5xl font-light mb-6">
          Villas 8 Min from Uppal Metro – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
        </h1>
        <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8 max-w-3xl">
          Just 8 minutes from Uppal Metro Station (Blue Line). Easy commute to Ameerpet (25 min), Secunderabad (30 min), HITEC City (metro + cab). {project.overview.totalVillas} standalone villas. From {project.families.silver.priceDisplay}.
        </p>
        <Link href="/#book-site-visit" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">Book Site Visit</Link>
      </div>
    </main>
  );
}
