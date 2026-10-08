import type { Metadata } from "next";
import Link from "next/link";
import { project, company, banks } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `Bank Approved Villas in Boduppal | ${project.name}`,
  description: `Bank approved villas in Boduppal. ${project.name} pre-approved by ${banks.approvedLenders.length} major banks: SBI, ICICI, HDFC, Kotak, Bajaj, Karur Vysya. Home loan ready. ${project.families.silver.priceDisplay}.`,
  alternates: { canonical: "https://bommakugroup.com/bank-approved-villas-boduppal" },
};

export default function BankApprovedVillasPage() {
  return (
    <main className="min-h-screen py-16 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl lg:text-5xl font-light mb-6">
          Bank Approved Villas – <span className="italic" style={{ color: "var(--ink-3)" }}>{project.name}</span>
        </h1>
        <p style={{ color: "var(--ink-2)" }} className="text-lg mb-8 max-w-3xl">
          {project.name} is pre-approved by {banks.approvedLenders.length} major banks: {banks.approvedLenders.map(b => b.name).join(", ")}. Home loans processed faster. From {project.families.silver.priceDisplay}.
        </p>
        <Link href="/#book-site-visit" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">Book Site Visit</Link>
      </div>
    </main>
  );
}
