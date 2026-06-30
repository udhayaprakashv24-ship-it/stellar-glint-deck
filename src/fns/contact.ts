import { createServerFn } from "@tanstack/react-start";
import { getRequestIP } from "@tanstack/react-start/server";
import { z } from "zod";
import { getPool } from "../lib/db";
import { Resend } from "resend";

const Schema = z.object({
  email: z.string().email("Please enter a valid email address."),
  query: z.string().min(5, "Query must be at least 5 characters.").max(2000),
});

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const window = 60 * 60 * 1000;
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + window });
    return true;
  }
  if (entry.count >= 5) return false;
  entry.count++;
  return true;
}

export const submitContact = createServerFn({ method: "POST" })
  .validator((data: unknown) => Schema.parse(data))
  .handler(async ({ data }) => {
    const ip =
      getRequestIP({ xForwardedFor: true }) ?? "unknown";

    if (!checkRateLimit(ip)) {
      throw new Error("Too many submissions. Please try again later.");
    }

    const pool = getPool();

    await pool.query(
      `INSERT INTO contact_submissions (email, query, ip, status)
       VALUES ($1, $2, $3, 'Unread')`,
      [data.email, data.query, ip]
    );

    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      const resend = new Resend(resendKey);
      const ownerEmail = "udhayaprakashv.24@gmail.com";

      await Promise.allSettled([
        resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: ownerEmail,
          subject: `New Portfolio Message from ${data.email}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a0f1e;color:#e2e8f0;border-radius:12px;border:1px solid #1e3a5f">
              <h2 style="color:#38bdf8;margin-top:0">New Contact Message</h2>
              <p><strong style="color:#94a3b8">From:</strong> ${data.email}</p>
              <p><strong style="color:#94a3b8">Message:</strong></p>
              <blockquote style="border-left:3px solid #38bdf8;padding-left:12px;color:#cbd5e1;margin:8px 0">${data.query.replace(/\n/g, "<br/>")}</blockquote>
              <p style="font-size:12px;color:#64748b;margin-top:24px">Received at ${new Date().toISOString()}</p>
            </div>
          `,
        }),
        resend.emails.send({
          from: "Udhaya Prakash V <onboarding@resend.dev>",
          to: data.email,
          subject: "Thanks for reaching out — Udhaya Prakash V",
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a0f1e;color:#e2e8f0;border-radius:12px;border:1px solid #1e3a5f">
              <h2 style="color:#38bdf8;margin-top:0">Hi there! 👋</h2>
              <p>Thank you for reaching out through my portfolio. I've received your message and will get back to you within <strong>24 hours</strong>.</p>
              <p style="color:#94a3b8;font-size:14px">Your message:</p>
              <blockquote style="border-left:3px solid #38bdf8;padding-left:12px;color:#cbd5e1;margin:8px 0">${data.query.replace(/\n/g, "<br/>")}</blockquote>
              <p style="margin-top:24px">Best regards,<br/><strong style="color:#38bdf8">Udhaya Prakash V</strong><br/>Data Analytics · UI/UX Designer</p>
            </div>
          `,
        }),
      ]);
    }

    return { success: true };
  });
