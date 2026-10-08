import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { project, company, banks, APPROVAL_LABEL } from "@/src/content/facts";

export const metadata: Metadata = {
  title: `${APPROVAL_LABEL} vs RERA vs DTCP: What's the Difference? | ${project.name} Blog`,
  description: `Understand ${APPROVAL_LABEL}, RERA, and DTCP approvals. Which matters for villa buyers? Legal differences, bank approvals, and resale impact explained.`,
  alternates: { canonical: "https://bommakugroup.com/blog/gp-development-vs-rera-dtcp" },
};

export default function BlogPost() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[
        { label: "Blog", href: "/blog" },
        { label: `${APPROVAL_LABEL} vs RERA vs DTCP`, href: "/blog/gp-development-vs-rera-dtcp" }
      ]} />

      <article className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-4">LEGAL GUIDE</p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl font-light leading-tight mb-6">
            {APPROVAL_LABEL} vs RERA vs DTCP: What Villa Buyers Need to Know
          </h1>
          <div className="w-16 h-px mb-12" style={{ background: "var(--accent)" }} />

          <div className="prose-custom space-y-8" style={{ color: "var(--ink-2)" }}>
            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                The Short Answer
              </h2>
              <p className="leading-relaxed">
                <strong style={{ color: "var(--ink)" }}>{APPROVAL_LABEL}</strong> (Circle Project): You buy a plot + villa. Individual sale deed for your land. RERA: Developer registers the project. DTCP: Town planning approval for layouts. All three serve different purposes—none is "better" than the other.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                What is {APPROVAL_LABEL}?
              </h2>
              <p className="leading-relaxed mb-4">
                A {APPROVAL_LABEL} is where the developer sells individual villa plots with construction. You own the land (plot) outright, plus the villa built on it. Your sale deed shows you as the plot owner.
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>Example:</strong> {project.name} is a {APPROVAL_LABEL}. You buy a 165 Sq. Yd plot + the {project.overview.configuration} villa {company.brandName} builds on it. Your name on the land = no shared ownership.
              </p>
              <p className="leading-relaxed">
                <strong style={{ color: "var(--ink)" }}>Why buyers choose {APPROVAL_LABEL}:</strong> Clear ownership. Easier resale (you're selling land + villa, not a share). Banks approve loans faster because title is straightforward.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                What is RERA?
              </h2>
              <p className="leading-relaxed mb-4">
                RERA (Real Estate Regulatory Authority) is a registration system for real estate projects. Developers register their project with RERA, which gives buyers legal protection—fixed timeline, standard agreement, escrow account.
              </p>
              <p className="leading-relaxed">
                RERA applies to apartments, plotted developments, and villa projects above a certain size. It's a <strong>registration + compliance framework</strong>, not a land approval.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                What is DTCP?
              </h2>
              <p className="leading-relaxed mb-4">
                DTCP (Directorate of Town and Country Planning) approves layout plans—where roads go, plot sizes, drainage, open spaces. Think of it as the blueprint approval for residential layouts.
              </p>
              <p className="leading-relaxed">
                DTCP approval means the layout plan follows town planning rules—road widths, setbacks, amenities. It's about <strong>physical planning</strong>, not ownership structure.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Key Differences
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "var(--surface)" }}>
                      <th className="p-3 text-left border" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>Aspect</th>
                      <th className="p-3 text-left border" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>{APPROVAL_LABEL}</th>
                      <th className="p-3 text-left border" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>RERA</th>
                      <th className="p-3 text-left border" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>DTCP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border font-semibold" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>What It Is</td>
                      <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Ownership structure</td>
                      <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Project registration</td>
                      <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Layout approval</td>
                    </tr>
                    <tr>
                      <td className="p-3 border font-semibold" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>Sale Deed</td>
                      <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Individual plot deed</td>
                      <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Varies by project type</td>
                      <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>N/A (layout plan only)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border font-semibold" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>Bank Loans</td>
                      <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Fast approval</td>
                      <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Buyers get protection</td>
                      <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Required for layout</td>
                    </tr>
                    <tr>
                      <td className="p-3 border font-semibold" style={{ borderColor: "var(--edge)", color: "var(--ink)" }}>Resale</td>
                      <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Easier (land ownership)</td>
                      <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>Buyer confidence</td>
                      <td className="p-3 border" style={{ borderColor: "var(--edge)" }}>N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                What Should You Verify Before Buying?
              </h2>
              <ul className="space-y-3 ml-6">
                <li className="leading-relaxed">✓ <strong style={{ color: "var(--ink)" }}>Sale Deed:</strong> Confirms you own the plot.</li>
                <li className="leading-relaxed">✓ <strong style={{ color: "var(--ink)" }}>Encumbrance Certificate (EC):</strong> Shows clear title for 13-30 years.</li>
                <li className="leading-relaxed">✓ <strong style={{ color: "var(--ink)" }}>Layout Plan:</strong> DTCP-approved or equivalent.</li>
                <li className="leading-relaxed">✓ <strong style={{ color: "var(--ink)" }}>Bank Approval:</strong> Has a major bank approved home loans?</li>
                <li className="leading-relaxed">✓ <strong style={{ color: "var(--ink)" }}>Legal Review:</strong> Hire a property lawyer to verify all documents.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Example: {project.name}
              </h2>
              <p className="leading-relaxed mb-4">
                {project.name} is a <strong style={{ color: "var(--ink)" }}>{APPROVAL_LABEL}</strong> at {project.location.area}. Each buyer gets an individual sale deed for their plot + villa. Before booking, we share the full document set for independent legal verification.
              </p>
              <p className="leading-relaxed">
                <strong style={{ color: "var(--ink)" }}>Bank approvals:</strong> {banks.approvedLenders.map(b => b.name).join(", ")} have completed full due diligence. Home loans process faster.
              </p>
            </section>
          </div>

          <div className="mt-16 p-8 text-center" style={{ background: "var(--surface)" }}>
            <h3 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
              Have Questions About {APPROVAL_LABEL}?
            </h3>
            <p style={{ color: "var(--ink-2)" }} className="mb-6">
              Call {company.contact.phoneDisplay} or visit our site office. We'll walk you through all documents.
            </p>
            <Link href="/gp-development-boduppal" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
              Learn More About {APPROVAL_LABEL}
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
