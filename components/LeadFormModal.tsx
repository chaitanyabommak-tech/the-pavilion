"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getDb } from "@/lib/supabase";

type ModalType = "visit" | "brochure" | "enquire";

interface LeadFormModalProps {
  type: ModalType;
  onClose: () => void;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  villaType: string;
  visitDate: string;
  message: string;
}

const initialForm: LeadFormData = {
  name: "",
  phone: "",
  email: "",
  villaType: "",
  visitDate: "",
  message: "",
};

const titleMap: Record<ModalType, string> = {
  visit: "Book a Site Visit",
  brochure: "Download Brochure",
  enquire: "Enquire Now",
};

async function handleLeadSubmit(data: LeadFormData, type: ModalType) {
  const db = getDb();
  if (type === "visit") {
    await db?.from("site_visits").insert({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      preferred_date: data.visitDate || null,
      message: data.villaType ? `Villa preference: ${data.villaType}${data.message ? `. ${data.message}` : ""}` : data.message || null,
    });
  } else if (type === "brochure") {
    await db?.from("brochure_downloads").insert({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
    });
  } else {
    await db?.from("leads").insert({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      message: data.villaType ? `Villa preference: ${data.villaType}${data.message ? `. ${data.message}` : ""}` : data.message || null,
      source: "modal_enquire",
    });
  }
}

export default function LeadFormModal({ type, onClose }: LeadFormModalProps) {
  const [form, setForm] = useState<LeadFormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await handleLeadSubmit(form, type);
      setSuccess(true);
      if (type === "brochure") {
        const link = document.createElement("a");
        link.href = "/assets/pavilion-brochure.pdf";
        link.download = "The-Pavilion-Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="w-full max-w-lg max-h-[90vh] overflow-y-auto"
          style={{ background: "var(--card)", border: "1px solid var(--edge)" }}
        >
          <div className="p-5 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-8">
              <div>
                <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.3em] uppercase mb-1">
                  The Pavilion
                </p>
                <h3 style={{ color: "var(--ink)" }} className="font-heading text-3xl font-light">
                  {titleMap[type]}
                </h3>
                <div className="w-10 h-px mt-3" style={{ background: "var(--accent)" }} />
              </div>
              <button
                onClick={onClose}
                className="text-2xl leading-none mt-1 transition-opacity hover:opacity-60"
                style={{ color: "var(--ink-2)" }}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {success ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 border-2 rounded-full flex items-center justify-center mx-auto mb-6" style={{ borderColor: "var(--accent)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--accent)" }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 style={{ color: "var(--ink)" }} className="font-heading text-2xl font-light mb-3">
                  Thank you.
                </h4>
                <p style={{ color: "var(--ink-2)" }} className="text-sm leading-relaxed">
                  {type === "brochure"
                    ? <>Your brochure download has started.{form.email ? <> A copy has also been sent to <strong>{form.email}</strong>.</> : ""}</>
                    : type === "visit"
                    ? "Our team will contact you shortly to assist with your site visit booking."
                    : "Our team will contact you shortly to assist with your enquiry."}
                </p>
                <button
                  onClick={onClose}
                  className="btn-primary mt-8 px-8 py-3 text-sm tracking-[0.15em] uppercase"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label style={{ color: "var(--ink)" }} className="block text-xs tracking-[0.15em] uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="Your name"
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
                      value={form.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div>
                  <label style={{ color: "var(--ink)" }} className="block text-xs tracking-[0.15em] uppercase mb-2">
                    Email Address {type === "brochure" ? "*" : ""}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required={type === "brochure"}
                    value={form.email}
                    onChange={handleChange}
                    className="input-field"
                    placeholder={type === "brochure" ? "Brochure will be sent here" : "you@email.com"}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label style={{ color: "var(--ink)" }} className="block text-xs tracking-[0.15em] uppercase mb-2">
                      Preferred Villa Type
                    </label>
                    <select
                      name="villaType"
                      value={form.villaType}
                      onChange={handleChange}
                      className="input-field"
                      style={{ background: "var(--in-sel)" }}
                    >
                      <option value="">Select type</option>
                      <option value="Type A East (150 Sq.Yds)">Type A East – 150 Sq.Yds</option>
                      <option value="Type A West (150 Sq.Yds)">Type A West – 150 Sq.Yds</option>
                      <option value="Type B NE/NW (165 Sq.Yds)">Type B NE/NW – 165 Sq.Yds</option>
                      <option value="Type B East (167 Sq.Yds)">Type B East – 167 Sq.Yds</option>
                      <option value="Type C (222-250 Sq.Yds)">Type C – 222–250 Sq.Yds</option>
                    </select>
                  </div>
                  {type === "visit" && (
                    <div>
                      <label style={{ color: "var(--ink)" }} className="block text-xs tracking-[0.15em] uppercase mb-2">
                        Preferred Visit Date
                      </label>
                      <input
                        type="date"
                        name="visitDate"
                        value={form.visitDate}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label style={{ color: "var(--ink)" }} className="block text-xs tracking-[0.15em] uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="input-field resize-none"
                    placeholder="Any specific requirements or questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full py-4 text-sm tracking-[0.2em] uppercase font-medium mt-2"
                >
                  {submitting
                    ? "Please wait..."
                    : type === "brochure"
                    ? "Send Me the Brochure"
                    : type === "visit"
                    ? "Book Site Visit"
                    : "Submit Enquiry"}
                </button>

                <p style={{ color: "var(--ink-2)" }} className="text-xs text-center">
                  By submitting, you agree to be contacted by our sales team.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
