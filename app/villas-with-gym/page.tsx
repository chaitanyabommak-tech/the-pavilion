import type { Metadata } from "next";
import Link from "next/link";
import { project, recreation } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `Villas with Gym in Boduppal | ${project.name} Recreation Zone`,
  description: `${recreation.totalAreaDisplay} recreation zone with professional gym, swimming pool, yoga studio, sports courts. ${project.overview.totalVillas} villas. ${project.families.silver.priceDisplay}.`,
  alternates: { canonical: "https://bommakugroup.com/villas-with-gym" },
};

export default function Page() {
  return (
    <main className="min-h-screen py-16 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl lg:text-5xl font-light mb-6">
          Villas with Professional Gym – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
        </h1>
        <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8 max-w-3xl">
          {recreation.totalAreaDisplay} Bommaku Recreation Zone with professional gym, swimming pool, yoga studio, Zumba studio, pickleball courts. 750 SFT per family. From {project.families.silver.priceDisplay}.
        </p>
        <Link href="/bommaku-recreation-zone" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">See All Amenities</Link>
      </div>
    </main>
  );
}
