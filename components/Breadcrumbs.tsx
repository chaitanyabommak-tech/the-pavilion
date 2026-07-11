"use client";

import Link from "next/link";
import JsonLd from "./JsonLd";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Always include Home as first item
  const fullItems = [{ label: "Home", href: "/" }, ...items];

  // Generate BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": fullItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://bommakugroup.com${item.href}`,
    })),
  };

  return (
    <>
      {/* Schema.org markup */}
      <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />

      {/* Visible breadcrumb navigation */}
      <nav aria-label="Breadcrumb" className="py-4 px-6">
        <ol className="flex flex-wrap items-center gap-2 text-xs md:text-sm">
          {fullItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index < fullItems.length - 1 ? (
                <>
                  <Link
                    href={item.href}
                    style={{ color: "var(--ink-2)" }}
                    className="hover:opacity-70 transition-opacity"
                  >
                    {item.label}
                  </Link>
                  <span style={{ color: "var(--ink-3)" }} aria-hidden="true">
                    /
                  </span>
                </>
              ) : (
                <span style={{ color: "var(--ink)" }} aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
