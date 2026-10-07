import type { Metadata } from "next";
import Link from "next/link";
import { project, company, recreation } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `Villas with Swimming Pool in Boduppal | ${project.name}`,
  description: `${project.overview.totalVillas} villas with swimming pool access in Boduppal. ${recreation.totalAreaDisplay} recreation zone with infinity pool, lap pool, gym. ${project.families.silver.priceDisplay}.`,
  alternates: { canonical: "https://bommakugroup.com/villas-with-swimming-pool" },
};

export default function VillasWithSwimmingPoolPage() {
  return (
    <main className="min-h-screen py-16 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl lg:text-5xl font-light mb-6">
          Villas with Swimming Pool – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
        </h1>
        <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8 max-w-3xl">
          {recreation.totalAreaDisplay} recreation zone with swimming pool, infinity pool, gym, yoga studio, pickleball courts. 750 SFT per family—7-8X industry average. {project.overview.totalVillas} villas. From {project.families.silver.priceDisplay}.
        </p>
        <Link href="/#book-site-visit" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">Book Site Visit</Link>
      </div>
    </main>
  );
}
