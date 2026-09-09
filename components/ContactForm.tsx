"use client";

import { useState } from "react";
import { kontakt } from "@/lib/site";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
          website: formData.get("website"),
        }),
      });

      const result = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !result.ok) {
        setState("error");
        setErrorMessage(result.error ?? kontakt.formError);
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
      setErrorMessage(kontakt.formError);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-name">{kontakt.nameLabel}</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          className="contact-form__input"
          autoComplete="name"
          required
          disabled={state === "submitting"}
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-email">{kontakt.emailLabel}</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className="contact-form__input"
          autoComplete="email"
          required
          disabled={state === "submitting"}
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-phone">{kontakt.phoneLabel}</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          className="contact-form__input"
          autoComplete="tel"
          disabled={state === "submitting"}
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="contact-message">{kontakt.messageLabel}</label>
        <textarea
          id="contact-message"
          name="message"
          className="contact-form__textarea"
          rows={5}
          required
          disabled={state === "submitting"}
        />
      </div>

      <div className="contact-form__honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className="contact-form__submit" disabled={state === "submitting"}>
        {state === "submitting" ? kontakt.submittingLabel : kontakt.submitLabel}
      </button>

      {state === "success" && (
        <p className="contact-form__status contact-form__status--success" role="status">
          {kontakt.formSuccess}
        </p>
      )}

      {state === "error" && (
        <p className="contact-form__status contact-form__status--error" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
