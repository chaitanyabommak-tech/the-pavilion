import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Real Estate Insights & Villa Buying Guides | The Pavillion Blog",
  description:
    "Expert guides on buying villas in Hyderabad. Learn about HMDA approvals, villa prices in Boduppal, NRI property investment, and choosing between villas and apartments.",
  alternates: { canonical: "https://bommakugroup.com/blog" },
  openGraph: {
    title: "Real Estate Insights | The Pavillion Blog",
    description: "Expert guides on buying villas in Hyderabad. HMDA approvals, pricing, NRI investment, and more.",
    type: "website",
    url: "https://bommakugroup.com/blog",
  },
};

const blogPosts = [
  {
    slug: "is-boduppal-good-place-to-buy-villa-2026",
    title: "Is Boduppal a Good Place to Buy a Villa in 2026?",
    description: "Location analysis, infrastructure growth, metro connectivity, and appreciation trends in Boduppal and East Hyderabad.",
    category: "Location Analysis",
  },
  {
    slug: "villa-prices-boduppal-east-hyderabad-2026",
    title: "Villa Prices in Boduppal & East Hyderabad: Complete 2026 Guide",
    description: "Current pricing, per-sq-ft rates, what drives villa costs, and how to evaluate value for money in East Hyderabad.",
    category: "Pricing Guide",
  },
  {
    slug: "hmda-approved-vs-unapproved-projects-what-buyers-must-check",
    title: "HMDA-Approved vs Unapproved Projects: What Buyers Must Check",
    description: "Understanding HMDA, RERA, GP layouts, and the legal due diligence checklist before buying a villa in Hyderabad.",
    category: "Legal & Approvals",
  },
  {
    slug: "g-plus-1-plus-penthouse-explained",
    title: "G+1+Penthouse Explained: Why This Configuration Wins for Families",
    description: "The architecture behind G+1+Penthouse villas. Space optimization, privacy, and why it works better than G+2 for standalone homes.",
    category: "Architecture",
  },
  {
    slug: "nri-step-by-step-guide-buying-villa-hyderabad",
    title: "NRI's Step-by-Step Guide to Buying a Villa in Hyderabad",
    description: "FEMA rules, Power of Attorney process, NRI home loans, remote documentation, and repatriation guidelines for villa purchases.",
    category: "NRI Investment",
  },
  {
    slug: "villa-vs-apartment-east-hyderabad-honest-comparison",
    title: "Standalone Villa vs Apartment in East Hyderabad: The Honest Comparison",
    description: "Privacy, appreciation potential, maintenance costs, lifestyle differences — an unbiased comparison to help you decide.",
    category: "Buyer's Guide",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

      {/* Hero */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
            INSIGHTS & GUIDES
          </p>
          <h1 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            The Pavillion Blog
          </h1>
          <div className="w-16 h-px mb-8" style={{ background: "var(--accent)" }} />

          <p style={{ color: "var(--ink-2)" }} className="text-xl md:text-2xl leading-relaxed font-light max-w-3xl">
            Expert guides on buying villas in Hyderabad — location analysis, pricing, legal due diligence, NRI investment, and architecture.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border rounded-sm p-6 transition-all hover:shadow-lg"
                style={{ borderColor: "var(--ink-4)" }}
              >
                <p style={{ color: "var(--accent)" }} className="text-xs tracking-[0.3em] uppercase mb-3">
                  {post.category}
                </p>
                <h2 style={{ color: "var(--ink)" }} className="text-xl font-light mb-3 group-hover:opacity-70 transition-opacity">
                  {post.title}
                </h2>
                <p style={{ color: "var(--ink-2)" }} className="text-sm leading-relaxed mb-4">
                  {post.description}
                </p>
                <span style={{ color: "var(--accent)" }} className="text-xs tracking-[0.2em] uppercase">
                  Read Article →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
