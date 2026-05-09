import { contactFormRecipients } from "@/lib/content/site";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type Body = {
  name?: string;
  address?: string;
  email?: string;
  message?: string;
  recaptchaToken?: string;
};

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) {
    return true;
  }
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  const data = (await res.json()) as { success?: boolean };
  return Boolean(data.success);
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const address = typeof body.address === "string" ? body.address.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const token = typeof body.recaptchaToken === "string" ? body.recaptchaToken : "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (siteKey && secret) {
    if (!token) {
      return NextResponse.json({ error: "reCAPTCHA verification missing." }, { status: 400 });
    }
    const ok = await verifyRecaptcha(token);
    if (!ok) {
      return NextResponse.json({ error: "reCAPTCHA verification failed." }, { status: 400 });
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("[contact] Missing RESEND_API_KEY or RESEND_FROM_EMAIL");
    return NextResponse.json(
      {
        error:
          "The contact form cannot send mail yet. Please email us directly or try again later.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const subject = `Bermex website — message from ${name}`;
  const text = [
    `New message via bermexdevelopmentgroup.com contact form`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Address: ${address || "(not provided)"}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const html = `
    <p><strong>New message</strong> via the Bermex contact form.</p>
    <table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px">
      <tr><td style="padding:4px 12px 4px 0;vertical-align:top"><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="padding:4px 12px 4px 0;vertical-align:top"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="padding:4px 12px 4px 0;vertical-align:top"><strong>Address</strong></td><td>${address ? escapeHtml(address) : "—"}</td></tr>
    </table>
    <p style="margin-top:16px"><strong>Message</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to: [...contactFormRecipients],
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
