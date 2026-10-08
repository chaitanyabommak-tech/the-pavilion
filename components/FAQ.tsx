"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Script from "next/script";
import { project, company, recreation, banks, APPROVAL_LABEL } from "@/src/content/facts";

const faqs = [
  {
    question: `Where is ${project.name} located?`,
    answer: `${project.name} is located in ${project.location.area}, East Hyderabad. It's just 5 minutes from Uppal Main Road, 8 minutes from Uppal Metro Station, and 12 km from ORR Exit No. 9.`
  },
  {
    question: `How many villas are there in ${project.name}?`,
    answer: `${project.name} comprises ${project.overview.totalVillas} villas across ${project.overview.totalBlocks} blocks in ${project.location.area}. Each villa is ${project.overview.configuration} configuration with 3 BHK + Pooja Room.`
  },
  {
    question: "What is the price range of villas?",
    answer: `Villas at ${project.name} start from ${project.families.silver.priceDisplay} onwards, varying based on plot size, configuration, and facing direction.`
  },
  {
    question: "What are the villa configurations available?",
    answer: `We offer ${project.overview.configuration} villas with 3 BHK + Pooja Room configuration. Plot sizes range from ${project.families.silver.plotSizes[0]} to 250 Sq. Yds with built-up areas from ${project.families.silver.builtUpSft} to 2,600 SFT.`
  },
  {
    question: `What kind of development is ${project.name}?`,
    answer: `${project.name} is a ${APPROVAL_LABEL} by ${company.brandName} at ${project.location.area}. Each buyer owns their individual plot and the villa that Bommaku builds on it. Before you book, we share the full document set with you and your lawyer for independent verification.`
  },
  {
    question: "Can I verify the documents before booking?",
    answer: "Yes. Visit our site office with your lawyer, or ask us to share copies in advance. We encourage every buyer to complete independent legal checks."
  },
  {
    question: `Is it ${project.name} or The Pavilion?`,
    answer: `Our project is named ${project.name}, with a double L. Many people search for it as The Pavilion — both lead to the same ${project.overview.totalVillas}-villa ${APPROVAL_LABEL} at ${project.location.area}.`
  },
  {
    question: "What amenities are provided?",
    answer: `${project.name} features a ${recreation.totalAreaDisplay} Bommaku Recreation Zone with ${recreation.confirmed.join(", ").toLowerCase()}.`
  },
  {
    question: "Do you provide bank loan assistance?",
    answer: `Yes. Our team guides you through home-loan options and the documents lenders usually ask for. Loan eligibility and sanction are decided by the lender. ${banks.faqAnswer}`
  },
  {
    question: "Can I customize my villa?",
    answer: `Yes! ${project.name} offers 'The Clean Slate' — ${project.cleanSlate.description}. You can customize layouts and finishes before construction. ${project.cleanSlate.note}.`
  },
  {
    question: "What is the possession timeline?",
    answer: `Construction is ongoing. Please contact our sales team at ${company.contact.phoneDisplay} for current project status and expected possession timelines.`
  },
  {
    question: "How can I book a site visit?",
    answer: `You can book a site visit by calling ${company.contact.phoneDisplay}, WhatsApp at ${company.contact.phoneDisplay}, or filling the enquiry form on our website. Our team typically responds within 2 hours.`
  }
];

// Generate FAQ schema for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section
        id="faq"
        ref={ref}
        className="py-16 md:py-24"
        style={{ background: "var(--bg)", transition: "background-color 300ms ease" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="mb-12 text-center"
          >
            <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
              Frequently Asked Questions
            </p>
            <h2 style={{ color: "var(--ink)" }} className="type-h2">
              Everything you need to know
              <br />
              <span style={{ color: "var(--ink-3)" }} className="italic">about The Pavillion</span>
            </h2>
            <div className="w-12 h-px mt-6 mx-auto" style={{ background: "var(--accent)" }} />
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item rounded overflow-hidden transition-all duration-300"
                style={{
                  background: "var(--card)",
                  border: `1px solid ${openIndex === index ? "var(--accent)" : "var(--edge)"}`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-5 md:p-6 flex items-start justify-between gap-4 transition-colors duration-200"
                  style={{ color: "var(--ink)" }}
                >
                  <span className="font-heading text-lg md:text-xl font-light pr-4">
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 text-2xl transition-transform duration-300"
                    style={{
                      transform: openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                      color: "var(--accent)"
                    }}
                  >
                    +
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div
                    className="px-5 md:px-6 pb-5 md:pb-6 pt-2"
                    style={{
                      color: "var(--ink-2)",
                      borderTop: `1px solid var(--edge)`
                    }}
                  >
                    <p className="text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p style={{ color: "var(--ink-2)" }} className="text-sm mb-4">
              Have more questions?
            </p>
            <a
              href="https://wa.me/919676077142?text=Hi, I am interested in The Pavillion villas" target="_blank" rel="noopener noreferrer"
              className="btn-primary inline-block px-8 py-4 text-xs tracking-[0.2em] uppercase"
            >
              Speak to Sales
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
