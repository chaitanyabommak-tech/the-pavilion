// ============================================================
// Supabase Edge Function — send-lead-email
// Deploy this in: Supabase Dashboard → Edge Functions → New Function
// Name it: send-lead-email
// ============================================================

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const TO_EMAIL = "groupbommaku@gmail.com";
const FROM_EMAIL = "The Pavillion <onboarding@resend.dev>"; // change to noreply@bommakugroup.com after domain verification

serve(async (req: Request) => {
  try {
    const body = await req.json();
    const { table, record } = body;

    if (!record) {
      return new Response("No record", { status: 400 });
    }

    const r = record;
    let subject = "";
    let html = "";

    const createdAt = new Date(r.created_at).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // ── LEADS (contact form / enquire modal) ────────────────
    if (table === "leads") {
      const sourceLabel: Record<string, string> = {
        contact_form: "Contact Page Form",
        modal_enquire: "Enquire Now Modal",
      };
      subject = `🏠 New Enquiry — ${r.name} | The Pavillion`;
      html = `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f6f2; border-radius: 8px;">
          <h2 style="color: #1a1510; margin-bottom: 4px;">New Enquiry Received</h2>
          <p style="color: #7a7068; font-size: 13px; margin-top: 0;">${createdAt} · via ${sourceLabel[r.source] || r.source}</p>
          <hr style="border: none; border-top: 1px solid #e0d8ce; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #7a7068; font-size: 13px; width: 120px;">Name</td><td style="padding: 8px 0; color: #1a1510; font-weight: bold;">${r.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #7a7068; font-size: 13px;">Phone</td><td style="padding: 8px 0; color: #1a1510; font-weight: bold;"><a href="tel:${r.phone}" style="color: #536878;">${r.phone}</a></td></tr>
            ${r.email ? `<tr><td style="padding: 8px 0; color: #7a7068; font-size: 13px;">Email</td><td style="padding: 8px 0; color: #1a1510;"><a href="mailto:${r.email}" style="color: #536878;">${r.email}</a></td></tr>` : ""}
            ${r.message ? `<tr><td style="padding: 8px 0; color: #7a7068; font-size: 13px; vertical-align: top;">Message</td><td style="padding: 8px 0; color: #1a1510;">${r.message}</td></tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding: 14px 18px; background: #536878; border-radius: 6px; display: inline-block;">
            <a href="https://wa.me/919676077142?text=Hi ${encodeURIComponent(r.name)}, this is Bommak Constructions regarding your enquiry about The Pavillion." style="color: #fff; text-decoration: none; font-size: 14px;">📲 Reply on WhatsApp</a>
          </div>
        </div>
      `;
    }

    // ── SITE VISITS ─────────────────────────────────────────
    else if (table === "site_visits") {
      subject = `📅 Site Visit Request — ${r.name} | The Pavillion`;
      html = `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f6f2; border-radius: 8px;">
          <h2 style="color: #1a1510; margin-bottom: 4px;">Site Visit Booking Request</h2>
          <p style="color: #7a7068; font-size: 13px; margin-top: 0;">${createdAt}</p>
          <hr style="border: none; border-top: 1px solid #e0d8ce; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #7a7068; font-size: 13px; width: 140px;">Name</td><td style="padding: 8px 0; color: #1a1510; font-weight: bold;">${r.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #7a7068; font-size: 13px;">Phone</td><td style="padding: 8px 0; color: #1a1510; font-weight: bold;"><a href="tel:${r.phone}" style="color: #536878;">${r.phone}</a></td></tr>
            ${r.email ? `<tr><td style="padding: 8px 0; color: #7a7068; font-size: 13px;">Email</td><td style="padding: 8px 0; color: #1a1510;"><a href="mailto:${r.email}" style="color: #536878;">${r.email}</a></td></tr>` : ""}
            ${r.preferred_date ? `<tr><td style="padding: 8px 0; color: #7a7068; font-size: 13px;">Preferred Date</td><td style="padding: 8px 0; color: #1a1510; font-weight: bold;">${r.preferred_date}</td></tr>` : ""}
            ${r.message ? `<tr><td style="padding: 8px 0; color: #7a7068; font-size: 13px; vertical-align: top;">Notes</td><td style="padding: 8px 0; color: #1a1510;">${r.message}</td></tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding: 14px 18px; background: #536878; border-radius: 6px; display: inline-block;">
            <a href="https://wa.me/919676077142?text=Hi ${encodeURIComponent(r.name)}, confirming your site visit to The Pavillion." style="color: #fff; text-decoration: none; font-size: 14px;">📲 Confirm on WhatsApp</a>
          </div>
        </div>
      `;
    }

    // ── BROCHURE DOWNLOADS ──────────────────────────────────
    else if (table === "brochure_downloads") {
      subject = `📄 Brochure Download — ${r.name} | The Pavillion`;
      html = `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f6f2; border-radius: 8px;">
          <h2 style="color: #1a1510; margin-bottom: 4px;">Brochure Downloaded</h2>
          <p style="color: #7a7068; font-size: 13px; margin-top: 0;">${createdAt}</p>
          <hr style="border: none; border-top: 1px solid #e0d8ce; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #7a7068; font-size: 13px; width: 120px;">Name</td><td style="padding: 8px 0; color: #1a1510; font-weight: bold;">${r.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #7a7068; font-size: 13px;">Phone</td><td style="padding: 8px 0; color: #1a1510; font-weight: bold;"><a href="tel:${r.phone}" style="color: #536878;">${r.phone}</a></td></tr>
            ${r.email ? `<tr><td style="padding: 8px 0; color: #7a7068; font-size: 13px;">Email</td><td style="padding: 8px 0; color: #1a1510;"><a href="mailto:${r.email}" style="color: #536878;">${r.email}</a></td></tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding: 14px 18px; background: #536878; border-radius: 6px; display: inline-block;">
            <a href="https://wa.me/919676077142?text=Hi ${encodeURIComponent(r.name)}, thanks for downloading The Pavillion brochure. Can I help you with anything?" style="color: #fff; text-decoration: none; font-size: 14px;">📲 Follow up on WhatsApp</a>
          </div>
        </div>
      `;
    }

    if (!subject) {
      return new Response("Unhandled table", { status: 200 });
    }

    // Send email via Resend
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject,
        html,
      }),
    });

    const data = await emailRes.json();
    return new Response(JSON.stringify(data), {
      status: emailRes.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(String(err), { status: 500 });
  }
});
