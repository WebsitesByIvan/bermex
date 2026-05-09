import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { contactEmail } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Bermex Development Group — ${contactEmail}`,
  openGraph: {
    title: "Contact",
    description: "Request a consultation or reach our team by email.",
  },
};

function EnvelopeIcon() {
  return (
    <svg
      className="contact-page__envelope"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="currentColor"
      aria-hidden
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function ContactPage() {
  const mailto = `mailto:${contactEmail}`;

  return (
    <div className="contact-page">
      <div className="contact-page__inner">
        <h1 className="contact-page__title">Contact Us</h1>
        <p className="contact-page__email">
          <EnvelopeIcon />
          <a href={mailto}>{contactEmail}</a>
        </p>

        <h2 className="contact-page__form-title">Request a Consultation</h2>
        <ContactForm />
      </div>
    </div>
  );
}
