"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getDb } from "@/lib/supabase";
import { enrichFormData } from "@/lib/utm";
import { trackFormSubmit, trackConversion } from "@/lib/tracking";

type ModalType = "visit" | "brochure" | "enquire";

interface LeadFormModalProps {
  type: ModalType;
  onClose: () => void;
}

export interface LeadFormData {
  phone: string;
}

const initialForm: LeadFormData = {
  phone: "",
};

const titleMap: Record<ModalType, string> = {
  visit: "Book Site Visit",
  brochure: "Download Brochure",
  enquire: "Enquire Now",
};

const buttonMap: Record<ModalType, string> = {
  visit: "Book Visit",
  brochure: "Send Brochure",
  enquire: "Submit",
};

async function handleLeadSubmit(data: LeadFormData, type: ModalType) {
  const db = getDb();
  if (type === "visit") {
    await db?.from("site_visits").insert({
      phone: data.phone,
      source: "site_visit_modal",
    });
  } else if (type === "brochure") {
    await db?.from("brochure_downloads").insert({
      phone: data.phone,
      source: "brochure_modal",
    });
  } else {
    await db?.from("leads").insert({
      phone: data.phone,
      source: "modal_enquire",
    });
  }
}

export default function LeadFormModal({ type, onClose }: LeadFormModalProps) {
  const [form, setForm] = useState<LeadFormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    // Allow only numbers and + symbol
    if (value === "" || /^[+0-9]*$/.test(value)) {
      setForm({ phone: value });
    }
  }

  async function handleSubmit(e: { preventDefault(): void }) {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Enrich form data with UTM parameters
      const enrichedData = enrichFormData(form);

      // Submit to database with UTM params
      await handleLeadSubmit(enrichedData as LeadFormData, type);

      // Track form submission event
      if (type === "visit") {
        trackFormSubmit('site_visit', '');
      } else {
        trackFormSubmit('enquiry', '');
      }

      // Track Google Ads conversion
      trackConversion();

      setSuccess(true);

      if (type === "brochure") {
        const link = document.createElement("a");
        link.href = "/assets/pavilion-brochure.pdf";
        link.download = "The-Pavillion-Brochure.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      // Auto-close after 2 seconds
      setTimeout(() => {
        onClose();
      }, 2000);
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-md"
          style={{ background: "var(--card)", border: "1px solid var(--edge)", borderRadius: "2px" }}
        >
          <div className="p-8 sm:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <p style={{ color: "var(--ink-2)" }} className="text-xs tracking-[0.3em] uppercase mb-2">
                The Pavillion
              </p>
              <h3 style={{ color: "var(--ink)" }} className="font-heading text-3xl sm:text-4xl font-light mb-3">
                {titleMap[type]}
              </h3>
              <div className="w-12 h-px mx-auto" style={{ background: "var(--accent)" }} />
            </div>

            {success ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 border-2 rounded-full flex items-center justify-center mx-auto mb-6" style={{ borderColor: "var(--accent)" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--accent)" }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 style={{ color: "var(--ink)" }} className="type-h3 mb-3">
                  Thank You!
                </h4>
                <p style={{ color: "var(--ink-2)" }} className="text-sm leading-relaxed">
                  {type === "brochure"
                    ? "Your brochure download has started."
                    : "We'll call you shortly."}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label style={{ color: "var(--ink)" }} className="block text-xs tracking-[0.2em] uppercase mb-3 text-center">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    aria-required="true"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="input-field text-center text-lg"
                    placeholder="+91 00000 00000"
                    style={{ fontSize: "18px", padding: "16px" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting || form.phone.length < 10}
                  className="btn-primary w-full py-4 text-sm tracking-[0.2em] uppercase font-medium"
                >
                  {submitting ? "Please wait..." : buttonMap[type]}
                </button>

                <p style={{ color: "var(--ink-3)" }} className="text-xs text-center leading-relaxed">
                  {type === "brochure"
                    ? "Get instant access to villa details, floor plans & pricing."
                    : "Our team will call you within 2 hours."}
                </p>
              </form>
            )}

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-2xl leading-none transition-opacity hover:opacity-60"
              style={{ color: "var(--ink-2)" }}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
