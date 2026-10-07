import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { project, company, banks, APPROVAL_LABEL } from "@/src/content/facts";

export const metadata: Metadata = {
  title: "Home Loan Approval for Villas: Complete Guide 2026 | Documentation & Process",
  description: "How to get home loan approved for villas. Documents needed, eligibility, bank-approved projects, GP Development vs apartments, processing time.",
  alternates: { canonical: "https://bommakugroup.com/blog/home-loan-approval-for-villas-complete-guide" },
};

export default function BlogPost() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[
        { label: "Blog", href: "/blog" },
        { label: "Home Loan Guide for Villas", href: "/blog/home-loan-approval-for-villas-complete-guide" }
      ]} />

      <article className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-4">HOME LOANS</p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl font-light leading-tight mb-6">
            How to Get Home Loan Approved for Villas: Complete Guide
          </h1>
          <div className="w-16 h-px mb-12" style={{ background: "var(--accent)" }} />

          <div className="prose-custom space-y-8" style={{ color: "var(--ink-2)" }}>
            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Quick Overview
              </h2>
              <p className="leading-relaxed">
                Villa home loans work like apartment loans—same rates, same tenure (up to 30 years). The difference: banks scrutinize villa projects more carefully. If the project is bank-approved and you meet eligibility, loan approval is straightforward.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Documents You'll Need
              </h2>
              <p className="leading-relaxed mb-4"><strong style={{ color: "var(--ink)" }}>Personal Documents:</strong></p>
              <ul className="space-y-2 ml-6 mb-4">
                <li>PAN card + Aadhaar</li>
                <li>Last 6 months' salary slips (salaried) or ITR for 2 years (self-employed)</li>
                <li>Last 6 months' bank statements</li>
                <li>Form 16 (salaried applicants)</li>
              </ul>
              <p className="leading-relaxed mb-4"><strong style={{ color: "var(--ink)" }}>Property Documents:</strong></p>
              <ul className="space-y-2 ml-6">
                <li>Sale agreement with builder</li>
                <li>Allotment letter</li>
                <li>Encumbrance Certificate (EC)</li>
                <li>Layout approval documents</li>
                <li>Builder's NOC for loan</li>
              </ul>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Eligibility Criteria
              </h2>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>Age:</strong> 21-65 years (some banks extend to 70 for salaried)<br/>
                <strong style={{ color: "var(--ink)" }}>Income:</strong> Minimum ₹25,000/month (varies by bank and loan amount)<br/>
                <strong style={{ color: "var(--ink)" }}>Credit Score:</strong> 750+ for best rates; 650+ may qualify with higher rates<br/>
                <strong style={{ color: "var(--ink)" }}>Debt-to-Income:</strong> Total EMIs (including this loan) shouldn't exceed 50-60% of income
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Why Bank-Approved Projects Matter
              </h2>
              <p className="leading-relaxed mb-4">
                When a bank "approves" a project, they've verified the builder's documents—title, layout approvals, legal clearances. For you, this means:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="leading-relaxed">✓ <strong style={{ color: "var(--ink)" }}>Faster processing:</strong> Bank already has project documents on file. You don't submit layout approvals—bank has them.</li>
                <li className="leading-relaxed">✓ <strong style={{ color: "var(--ink)" }}>Higher approval rate:</strong> Bank's legal team has cleared the project. Your application focuses on your eligibility, not project legality.</li>
                <li className="leading-relaxed">✓ <strong style={{ color: "var(--ink)" }}>Better rates:</strong> Some banks offer 0.05-0.10% lower rates for pre-approved projects.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                {APPROVAL_LABEL} vs Apartment Loans
              </h2>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>{APPROVAL_LABEL} loans (like {project.name}):</strong> You own the land + villa. Sale deed shows plot ownership. Banks process these like plot+construction loans—verify title, approve layout, then sanction.
              </p>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>Apartment loans:</strong> You own a unit in a shared building. Banks verify builder's title to the entire land, then sanction based on your unit's agreement.
              </p>
              <p className="leading-relaxed">
                <strong style={{ color: "var(--ink)" }}>Processing time:</strong> Similar—2-3 weeks for loan sanction if documents are ready. {APPROVAL_LABEL} isn't slower than apartments when the project is bank-approved.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Interest Rates & Tenure
              </h2>
              <p className="leading-relaxed mb-4">
                <strong style={{ color: "var(--ink)" }}>Current Rates (2026):</strong> 8.50% - 9.50% p.a. (floating)<br/>
                <strong style={{ color: "var(--ink)" }}>Tenure:</strong> Up to 30 years<br/>
                <strong style={{ color: "var(--ink)" }}>Loan Amount:</strong> Up to 90% of property value (80-85% common for villas)
              </p>
              <p className="leading-relaxed">
                <strong style={{ color: "var(--ink)" }}>Example:</strong> ₹2.1 Cr villa. 80% loan = ₹1.68 Cr. At 9% for 25 years, EMI ≈ ₹1,41,000/month.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Common Rejection Reasons (and Fixes)
              </h2>
              <ul className="space-y-3 ml-6">
                <li className="leading-relaxed"><strong style={{ color: "var(--ink)" }}>Low credit score:</strong> Fix: Clear outstanding dues, dispute errors on credit report, wait 3-6 months.</li>
                <li className="leading-relaxed"><strong style={{ color: "var(--ink)" }}>High existing EMIs:</strong> Fix: Close small loans, increase income (add co-applicant), or reduce loan amount.</li>
                <li className="leading-relaxed"><strong style={{ color: "var(--ink)" }}>Project not approved:</strong> Fix: Choose a bank-approved project (or wait for builder to get approval).</li>
                <li className="leading-relaxed"><strong style={{ color: "var(--ink)" }}>Incomplete documents:</strong> Fix: Submit all docs builder requires—EC, layout approval, NOC.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Example: {project.name} Bank Approvals
              </h2>
              <p className="leading-relaxed mb-4">
                {project.name} is pre-approved by <strong style={{ color: "var(--ink)" }}>{banks.approvedLenders.length} major banks:</strong> {banks.approvedLenders.map(b => b.name).join(", ")}.
              </p>
              <p className="leading-relaxed">
                <strong style={{ color: "var(--ink)" }}>What this means:</strong> These banks have completed full legal due diligence on the project. When you apply for a loan, the bank already has {project.name}'s title, EC, and layout approvals. Your application focuses on your eligibility—not project legality. Processing is faster.
              </p>
            </section>

            <section>
              <h2 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
                Step-by-Step Process
              </h2>
              <ol className="space-y-3 ml-6 list-decimal">
                <li className="leading-relaxed"><strong style={{ color: "var(--ink)" }}>Book the villa:</strong> Pay booking advance. Get allotment letter from builder.</li>
                <li className="leading-relaxed"><strong style={{ color: "var(--ink)" }}>Choose bank:</strong> If project is pre-approved, pick from that list. If not, ask builder which banks they work with.</li>
                <li className="leading-relaxed"><strong style={{ color: "var(--ink)" }}>Submit documents:</strong> Personal docs + property docs. Bank verifies in 7-10 days.</li>
                <li className="leading-relaxed"><strong style={{ color: "var(--ink)" }}>Sanction letter:</strong> Bank issues sanction (approval in principle). Valid for 3-6 months.</li>
                <li className="leading-relaxed"><strong style={{ color: "var(--ink)" }}>Legal + technical check:</strong> Bank's lawyer verifies title. Bank's engineer inspects site.</li>
                <li className="leading-relaxed"><strong style={{ color: "var(--ink)" }}>Disbursal:</strong> Bank disburses to builder in stages (foundation, roofing, finishing). You pay EMI from first disbursal.</li>
              </ol>
            </section>
          </div>

          <div className="mt-16 p-8 text-center" style={{ background: "var(--surface)" }}>
            <h3 style={{ color: "var(--ink)" }} className="text-2xl font-light mb-4">
              Need Home Loan Assistance?
            </h3>
            <p style={{ color: "var(--ink-2)" }} className="mb-6">
              Our team guides you through bank options and documentation. Call {company.contact.phoneDisplay}.
            </p>
            <Link href="/bank-approved-villas-boduppal" className="btn-primary px-8 py-4 text-xs tracking-[0.2em] uppercase inline-block">
              See Bank-Approved Villas
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
