"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { type LeadFormData } from "./LeadFormModal";
import { getDb } from "@/lib/supabase";

function track(type: "whatsapp" | "call", source: string) {
  getDb()?.from("interactions").insert({ type, source }).then(() => {});
}

const initialForm: LeadFormData = {
  name: "",
  phone: "",
  email: "",
  villaType: "",
  visitDate: "",
  message: "",
};

async function handleLeadSubmit(data: LeadFormData) {
  await getDb()?.from("leads").insert({
    name: data.name,
    phone: data.phone,
    email: data.email || null,
    message: data.villaType ? `Villa preference: ${data.villaType}${data.message ? `. ${data.message}` : ""}` : data.message || null,
    source: "contact_form",
  });
}

export default function Contact() {
  const [form, setForm] = useState<LeadFormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await handleLeadSubmit(form);
      router.push("/thank-you");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-24"
      style={{ background: "var(--bg)", transition: "background-color 300ms ease" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.4em] uppercase mb-4">
              Reach Us
            </p>
            <h2 style={{ color: "var(--ink)" }} className="font-heading text-4xl sm:text-5xl font-light leading-tight mb-4">
              Just a call away.
            </h2>
            <div className="w-12 h-px mb-8" style={{ background: "var(--accent)" }} />
            <p style={{ color: "var(--ink-2)" }} className="text-base leading-relaxed mb-10">
              Our team will assist you with villa availability, pricing, site visits,
              bank loan support, and document verification.
            </p>

            {/* Contact cards */}
            <div className="space-y-6">
              {/* Developer */}
              <div
                className="p-6"
                style={{ background: "var(--card)", border: "1px solid var(--edge)" }}
              >
                <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.2em] uppercase mb-3">
                  Developer
                </p>
                <h3 style={{ color: "var(--ink)" }} className="font-heading text-xl font-medium mb-4">
                  Bommak Constructions
                </h3>
                <div className="space-y-2">
                  <a
                    href="tel:+919676077142"
                    onClick={() => track("call", "contact")}
                    className="flex items-center gap-3 text-sm transition-opacity hover:opacity-70"
                    style={{ color: "var(--lnk)" }}
                  >
                    <PhoneIcon /> +91 96760 77142
                  </a>
                  <a
                    href="mailto:bommakugroup@gmail.com"
                    className="flex items-center gap-3 text-sm transition-opacity hover:opacity-70"
                    style={{ color: "var(--lnk)" }}
                  >
                    <EmailIcon /> bommakugroup@gmail.com
                  </a>
                  <p className="flex items-start gap-3 text-sm" style={{ color: "var(--ink-2)" }}>
                    <LocationIcon />
                    Surya Hills, Boduppal, Hyderabad
                  </p>
                  <a
                    href="https://wa.me/919676077142"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("whatsapp", "contact")}
                    className="flex items-center gap-3 text-[#25D366] hover:text-[#4CE882] transition-colors text-sm"
                  >
                    <WhatsAppIcon /> WhatsApp Us
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="contact-form-panel p-6 sm:p-8 md:p-10"
            style={{ background: "var(--card)", border: "1px solid var(--edge)" }}
          >
            <h3 style={{ color: "var(--ink)" }} className="font-heading text-3xl font-light mb-2">
              Submit Enquiry
            </h3>
            <div className="w-10 h-px mb-8" style={{ background: "var(--accent)" }} />

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                data-track="enquiry-form"
                data-form-id="main-enquiry"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label style={{ color: "var(--ink)" }} className="block text-xs tracking-[0.15em] uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      aria-required="true"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label style={{ color: "var(--ink)" }} className="block text-xs tracking-[0.15em] uppercase mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      aria-required="true"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91"
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ color: "var(--ink)" }} className="block text-xs tracking-[0.15em] uppercase mb-2">
                    Preferred Villa Type *
                  </label>
                  <select
                    name="villaType"
                    required
                    aria-required="true"
                    value={form.villaType}
                    onChange={handleChange}
                    className="input-field"
                    style={{ background: "var(--in-sel)" }}
                  >
                    <option value="">Select type</option>
                    <option value="Type A East">Type A East — 150 Sq.Yds</option>
                    <option value="Type A West">Type A West — 150 Sq.Yds</option>
                    <option value="Type B NE/NW">Type B NE/NW — 165 Sq.Yds</option>
                    <option value="Type B East">Type B East — 167 Sq.Yds</option>
                    <option value="Type C">Type C — 222–250 Sq.Yds</option>
                  </select>
                </div>

                <div>
                  <label style={{ color: "var(--ink)" }} className="block text-xs tracking-[0.15em] uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="input-field"
                  />
                </div>

                <div>
                  <label style={{ color: "var(--ink)" }} className="block text-xs tracking-[0.15em] uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any specific requirements or questions..."
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full py-4 text-sm tracking-[0.2em] uppercase font-medium"
                >
                  {submitting ? "Submitting..." : "Submit Enquiry"}
                </button>

                <p style={{ color: "var(--ink-3)" }} className="text-xs text-center leading-relaxed">
                  Complimentary site visit. No obligations. Our team will call within 2 hours.
                </p>
              </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 12.9 19.79 19.79 0 012.03 4.27 2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
