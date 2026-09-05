"use client";

import { FormEvent, useState } from "react";
import { company, copy } from "@/lib/company";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="kontakt" className="bg-[var(--vipp-beige)] px-6 py-16 text-black sm:px-12 sm:py-24">
      <div className="mx-auto max-w-[640px]">
        <h2 className="font-display text-[32px] font-light sm:text-[40px]">{copy.contactTitle}</h2>
        <p className="mt-4 text-[15px] font-light leading-relaxed text-black/70">
          {company.brand} · {company.phoneDisplay} ·{" "}
          <a className="underline" href={company.emailHref}>
            {company.email}
          </a>
        </p>
        {sent ? (
          <p className="mt-10 text-[15px] font-light">
            Dziękujemy. Napisz na {company.email} albo zadzwoń — wrócimy z odpowiedzią.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="mt-10 space-y-6">
            <label className="block text-[13px] font-light">
              Imię i nazwisko
              <input required name="name" className="field-input" />
            </label>
            <label className="block text-[13px] font-light">
              E-mail
              <input required type="email" name="email" className="field-input" />
            </label>
            <label className="block text-[13px] font-light">
              Wiadomość
              <textarea required name="message" rows={4} className="field-input resize-none" />
            </label>
            <button
              type="submit"
              className="bg-black px-12 py-3.5 text-[13px] font-light text-white"
            >
              Wyślij
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
