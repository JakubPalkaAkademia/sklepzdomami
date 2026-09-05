"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { company, copy } from "@/lib/company";

type Status = "idle" | "ready";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = [
      `Imię: ${name}`,
      `E-mail: ${email}`,
      phone ? `Telefon: ${phone}` : "",
      "",
      message,
    ]
      .filter((line) => line.length > 0)
      .join("\n");
    const href = `mailto:${company.email}?subject=${encodeURIComponent(
      `Wiadomość ze strony — ${name}`,
    )}&body=${encodeURIComponent(lines)}`;
    window.location.href = href;
    setStatus("ready");
  }

  return (
    <section id="kontakt" className="mx-auto max-w-xl px-5 py-20 sm:px-8">
      <h2 className="text-sm tracking-[0.16em] uppercase text-neutral-900">
        {copy.contactTitle}
      </h2>
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <Field label="Imię i nazwisko" htmlFor="contact-name">
          <input
            id="contact-name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="field-input"
            autoComplete="name"
          />
        </Field>
        <Field label="E-mail" htmlFor="contact-email">
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="field-input"
            autoComplete="email"
          />
        </Field>
        <Field label="Telefon (opcjonalnie)" htmlFor="contact-phone">
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            className="field-input"
            autoComplete="tel"
          />
        </Field>
        <Field label="Wiadomość" htmlFor="contact-message">
          <textarea
            id="contact-message"
            required
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="field-input resize-y"
          />
        </Field>
        <button
          type="submit"
          className="w-full border border-neutral-900 bg-neutral-900 px-8 py-3 text-[13px] tracking-[0.16em] uppercase text-white transition-opacity hover:opacity-80"
        >
          Wyślij
        </button>
        {status === "ready" ? (
          <p className="text-sm text-neutral-500">
            Otworzy się program pocztowy. Jeśli nie — napiszcie bezpośrednio na{" "}
            {company.email}.
          </p>
        ) : null}
      </form>
      <p className="mt-8 text-sm leading-relaxed text-neutral-500">
        {copy.contactHint}
      </p>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm text-neutral-700">
        {label}
      </label>
      {children}
    </div>
  );
}
