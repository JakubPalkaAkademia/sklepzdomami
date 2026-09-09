export type ContactFormPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  website?: string;
};

export type ContactFormResult =
  | { ok: true }
  | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(payload: ContactFormPayload): ContactFormResult {
  if (payload.website?.trim()) {
    return { ok: false, error: "Nie udało się wysłać wiadomości." };
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const phone = payload.phone?.trim() ?? "";
  const message = payload.message.trim();

  if (name.length < 2 || name.length > 120) {
    return { ok: false, error: "Podaj imię i nazwisko (min. 2 znaki)." };
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { ok: false, error: "Podaj poprawny adres e-mail." };
  }

  if (phone.length > 30) {
    return { ok: false, error: "Numer telefonu jest zbyt długi." };
  }

  if (message.length < 10 || message.length > 4000) {
    return { ok: false, error: "Wiadomość powinna mieć od 10 do 4000 znaków." };
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
