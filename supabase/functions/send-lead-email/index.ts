import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const TO_EMAIL = "groupbommaku@gmail.com";
const FROM_EMAIL = "The Pavillion <noreply@bommakugroup.com>";

serve(async (req: Request) => {
  try {
    const body = await req.json();
    const { table, record } = body;

    if (!record) return new Response("No record", { status: 400 });

    const r = record;
    let subject = "";
    let html = "";

    const createdAt = new Date(r.created_at).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    if (table === "leads") {
      const sourceLabel: Record<string, string> = {
        contact_form: "Contact Page Form",
        modal_enquire: "Enquire Now Modal",
      };
      subject = `🏠 New Enquiry — ${r.name} | The Pavillion`;
      html = `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f6f2;border-radius:8px;">
          <h2 style="color:#1a1510;margin-bottom:4px;">New Enquiry Received</h2>
          <p style="color:#7a7068;font-size:13px;margin-top:0;">${createdAt} · via ${sourceLabel[r.source] || r.source}</p>
          <hr style="border:none;border-top:1px solid #e0d8ce;margin:20px 0;"/>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#7a7068;font-size:13px;width:120px;">Name</td><td style="padding:8px 0;color:#1a1510;font-weight:bold;">${r.name}</td></tr>
            <tr><td style="padding:8px 0;color:#7a7068;font-size:13px;">Phone</td><td style="padding:8px 0;"><a href="tel:${r.phone}" style="color:#536878;font-weight:bold;">${r.phone}</a></td></tr>
            ${r.email ? `<tr><td style="padding:8px 0;color:#7a7068;font-size:13px;">Email</td><td style="padding:8px 0;"><a href="mailto:${r.email}" style="color:#536878;">${r.email}</a></td></tr>` : ""}
            ${r.message ? `<tr><td style="padding:8px 0;color:#7a7068;font-size:13px;vertical-align:top;">Message</td><td style="padding:8px 0;color:#1a1510;">${r.message}</td></tr>` : ""}
          </table>
          <div style="margin-top:24px;">
            <a href="https://wa.me/919676077142?text=Hi%20${encodeURIComponent(r.name)}%2C%20this%20is%20Bommak%20Constructions%20regarding%20your%20enquiry%20about%20The%20Pavilion." style="background:#536878;color:#fff;padding:12px 20px;border-radius:6px;text-decoration:none;font-size:14px;">📲 Reply on WhatsApp</a>
          </div>
        </div>`;
    } else if (table === "site_visits") {
      subject = `📅 Site Visit Request — ${r.name} | The Pavillion`;
      html = `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f6f2;border-radius:8px;">
          <h2 style="color:#1a1510;margin-bottom:4px;">Site Visit Booking Request</h2>
          <p style="color:#7a7068;font-size:13px;margin-top:0;">${createdAt}</p>
          <hr style="border:none;border-top:1px solid #e0d8ce;margin:20px 0;"/>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#7a7068;font-size:13px;width:140px;">Name</td><td style="padding:8px 0;color:#1a1510;font-weight:bold;">${r.name}</td></tr>
            <tr><td style="padding:8px 0;color:#7a7068;font-size:13px;">Phone</td><td style="padding:8px 0;"><a href="tel:${r.phone}" style="color:#536878;font-weight:bold;">${r.phone}</a></td></tr>
            ${r.email ? `<tr><td style="padding:8px 0;color:#7a7068;font-size:13px;">Email</td><td style="padding:8px 0;"><a href="mailto:${r.email}" style="color:#536878;">${r.email}</a></td></tr>` : ""}
            ${r.preferred_date ? `<tr><td style="padding:8px 0;color:#7a7068;font-size:13px;">Preferred Date</td><td style="padding:8px 0;color:#1a1510;font-weight:bold;">${r.preferred_date}</td></tr>` : ""}
            ${r.message ? `<tr><td style="padding:8px 0;color:#7a7068;font-size:13px;vertical-align:top;">Notes</td><td style="padding:8px 0;color:#1a1510;">${r.message}</td></tr>` : ""}
          </table>
          <div style="margin-top:24px;">
            <a href="https://wa.me/919676077142?text=Hi%20${encodeURIComponent(r.name)}%2C%20confirming%20your%20site%20visit%20to%20The%20Pavilion." style="background:#536878;color:#fff;padding:12px 20px;border-radius:6px;text-decoration:none;font-size:14px;">📲 Confirm on WhatsApp</a>
          </div>
        </div>`;
    } else if (table === "brochure_downloads") {
      subject = `📄 Brochure Download — ${r.name} | The Pavillion`;
      html = `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f6f2;border-radius:8px;">
          <h2 style="color:#1a1510;margin-bottom:4px;">Brochure Downloaded</h2>
          <p style="color:#7a7068;font-size:13px;margin-top:0;">${createdAt}</p>
          <hr style="border:none;border-top:1px solid #e0d8ce;margin:20px 0;"/>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#7a7068;font-size:13px;width:120px;">Name</td><td style="padding:8px 0;color:#1a1510;font-weight:bold;">${r.name}</td></tr>
            <tr><td style="padding:8px 0;color:#7a7068;font-size:13px;">Phone</td><td style="padding:8px 0;"><a href="tel:${r.phone}" style="color:#536878;font-weight:bold;">${r.phone}</a></td></tr>
            ${r.email ? `<tr><td style="padding:8px 0;color:#7a7068;font-size:13px;">Email</td><td style="padding:8px 0;"><a href="mailto:${r.email}" style="color:#536878;">${r.email}</a></td></tr>` : ""}
          </table>
          <div style="margin-top:24px;">
            <a href="https://wa.me/919676077142?text=Hi%20${encodeURIComponent(r.name)}%2C%20thanks%20for%20downloading%20The%20Pavilion%20brochure.%20Can%20I%20help%20you%20with%20anything%3F" style="background:#536878;color:#fff;padding:12px 20px;border-radius:6px;text-decoration:none;font-size:14px;">📲 Follow up on WhatsApp</a>
          </div>
        </div>`;
    }

    if (!subject) return new Response("Unhandled table", { status: 200 });

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    // Send team notification
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({ from: FROM_EMAIL, to: [TO_EMAIL], subject, html }),
    });

    // For brochure requests: also email the brochure link to the user
    if (table === "brochure_downloads" && r.email) {
      const brochureUrl = "https://the-pavilion.vercel.app/assets/pavilion-brochure.pdf";
      const userHtml = `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f6f2;border-radius:8px;">
          <h2 style="color:#1a1510;margin-bottom:4px;">Your Pavilion Brochure</h2>
          <p style="color:#7a7068;font-size:13px;margin-top:0;">From Bommak Constructions</p>
          <hr style="border:none;border-top:1px solid #e0d8ce;margin:20px 0;"/>
          <p style="color:#1a1510;font-size:15px;line-height:1.6;">Dear ${r.name},</p>
          <p style="color:#1a1510;font-size:15px;line-height:1.6;">Thank you for your interest in <strong>The Pavillion</strong> — 45 exclusive G+1+Penthouse villas at Surya Hills, Boduppal, East Hyderabad.</p>
          <p style="color:#1a1510;font-size:15px;line-height:1.6;">Your brochure is ready to download:</p>
          <div style="margin:28px 0;text-align:center;">
            <a href="${brochureUrl}" style="background:#536878;color:#fff;padding:14px 28px;border-radius:6px;text-decoration:none;font-size:15px;display:inline-block;">📄 Download Brochure</a>
          </div>
          <p style="color:#7a7068;font-size:13px;line-height:1.6;">For enquiries or to book a site visit, reach us at:</p>
          <p style="color:#1a1510;font-size:14px;">📞 +91 96760 77142 &nbsp;|&nbsp; ✉️ bommakugroup@gmail.com</p>
          <hr style="border:none;border-top:1px solid #e0d8ce;margin:20px 0;"/>
          <p style="color:#7a7068;font-size:12px;margin:0;">Bommak Constructions · Surya Hills, Boduppal, East Hyderabad</p>
        </div>`;
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [r.email],
          subject: "Your Pavilion Brochure — Bommak Constructions",
          html: userHtml,
        }),
      });
    }

    const data = await emailRes.json();
    return new Response(JSON.stringify(data), {
      status: emailRes.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(String(err), { status: 500 });
  }
});
