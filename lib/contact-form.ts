import type { Dictionary } from "@/lib/i18n";

export type ContactFormPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  website?: string;
  locale?: string;
};

export type ContactFormResult =
  | { ok: true }
  | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  payload: ContactFormPayload,
  errors: Dictionary["contact"]["errors"],
): ContactFormResult {
  if (payload.website?.trim()) {
    return { ok: false, error: errors.generic };
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const phone = payload.phone?.trim() ?? "";
  const message = payload.message.trim();

  if (name.length < 2 || name.length > 120) {
    return { ok: false, error: errors.name };
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { ok: false, error: errors.email };
  }

  if (phone.length > 30) {
    return { ok: false, error: errors.phone };
  }

  if (message.length < 10 || message.length > 4000) {
    return { ok: false, error: errors.message };
  }

  return { ok: true };
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
