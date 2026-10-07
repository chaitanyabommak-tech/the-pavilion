import type { Metadata } from "next";
import Link from "next/link";
import { project, company } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `165-228 Sq. Yard Villas in Boduppal | ${project.name}`,
  description: `Plot sizes from ${project.families.silver.plotSizes[0]} to 250 Sq. Yds. ${project.overview.configuration} villas in ${project.location.area}. From ${project.families.silver.priceDisplay}.`,
  alternates: { canonical: "https://bommakugroup.com/200-sq-yard-villas-boduppal" },
};

export default function Page() {
  return (
    <main className="min-h-screen py-16 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl lg:text-5xl font-light mb-6">
          165-250 Sq. Yard Villas – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
        </h1>
        <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8 max-w-3xl">
          Plot sizes from {project.families.silver.plotSizes[0]} to 250 Sq. Yds. {project.overview.configuration} configuration. Built-up: {project.families.silver.builtUpSft}-2,600 SFT. From {project.families.silver.priceDisplay}.
        </p>
        <Link href="/#book-site-visit" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">Book Site Visit</Link>
      </div>
    </main>
  );
}
