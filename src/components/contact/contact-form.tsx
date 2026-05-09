"use client";

import { useCallback, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

type FormState = {
  name: string;
  address: string;
  email: string;
  message: string;
};

const initial: FormState = {
  name: "",
  address: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const onChange = useCallback((field: keyof FormState, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
  }, []);

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setErrorMessage(null);

      let recaptchaToken: string | null | undefined = null;
      if (siteKey) {
        recaptchaToken = recaptchaRef.current?.getValue();
        if (!recaptchaToken) {
          setErrorMessage("Please confirm you are not a robot.");
          return;
        }
      }

      setStatus("submitting");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...values,
            recaptchaToken: recaptchaToken ?? undefined,
          }),
        });
        const data = (await res.json().catch(() => ({}))) as { error?: string };

        if (!res.ok) {
          setStatus("error");
          setErrorMessage(data.error ?? "Something went wrong. Please try again.");
          recaptchaRef.current?.reset();
          return;
        }

        setStatus("success");
        setValues(initial);
        recaptchaRef.current?.reset();
      } catch {
        setStatus("error");
        setErrorMessage("Network error. Please try again.");
        recaptchaRef.current?.reset();
      }
    },
    [values],
  );

  if (status === "success") {
    return (
      <div className="contact-form__success" role="status" aria-live="polite">
        <h3 className="contact-form__success-title">Message sent</h3>
        <p>
          Thank you — your inquiry was sent successfully. Someone from our team will follow up with
          you soon.
        </p>
        <button type="button" className="contact-form__reset" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <label className="contact-form__field">
        <span className="visually-hidden">Name</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Name"
          value={values.name}
          onChange={(e) => onChange("name", e.target.value)}
          disabled={status === "submitting"}
        />
      </label>
      <label className="contact-form__field">
        <span className="visually-hidden">Address</span>
        <input
          name="address"
          type="text"
          autoComplete="street-address"
          placeholder="Address"
          value={values.address}
          onChange={(e) => onChange("address", e.target.value)}
          disabled={status === "submitting"}
        />
      </label>
      <label className="contact-form__field">
        <span className="visually-hidden">Email address</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email Address"
          value={values.email}
          onChange={(e) => onChange("email", e.target.value)}
          disabled={status === "submitting"}
        />
      </label>
      <label className="contact-form__field">
        <span className="visually-hidden">Comment or message</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Comment or Message"
          value={values.message}
          onChange={(e) => onChange("message", e.target.value)}
          disabled={status === "submitting"}
        />
      </label>

      {siteKey ? (
        <div className="contact-form__captcha">
          <ReCAPTCHA ref={recaptchaRef} sitekey={siteKey} theme="dark" />
        </div>
      ) : null}

      {errorMessage ? (
        <p className="contact-form__error" role="alert">
          {errorMessage}
        </p>
      ) : null}

      <button type="submit" className="contact-form__submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
