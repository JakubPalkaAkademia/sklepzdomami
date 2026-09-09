import { Resend } from "resend";
import { escapeHtml, validateContactForm, type ContactFormPayload } from "@/lib/contact-form";
import { site, studio } from "@/lib/site";

export async function POST(request: Request) {
  let payload: ContactFormPayload;

  try {
    payload = (await request.json()) as ContactFormPayload;
  } catch {
    return Response.json({ ok: false, error: "Nieprawidłowe dane formularza." }, { status: 400 });
  }

  const validation = validateContactForm(payload);
  if (!validation.ok) {
    return Response.json({ ok: false, error: validation.error }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM ?? `Sklep z domami <onboarding@resend.dev>`;
  const to = process.env.CONTACT_TO_EMAIL ?? studio.email;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return Response.json(
      { ok: false, error: "Formularz kontaktowy jest chwilowo niedostępny. Napisz na biuro@sklepzdomami.pl." },
      { status: 503 },
    );
  }

  const name = payload.name.trim();
  const email = payload.email.trim();
  const phone = payload.phone?.trim();
  const message = payload.message.trim();

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Zapytanie ze strony ${site.domain} — ${name}`,
    html: `
      <p><strong>Imię i nazwisko:</strong> ${escapeHtml(name)}</p>
      <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
      ${phone ? `<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>` : ""}
      <p><strong>Wiadomość:</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    `,
  });

  if (error) {
    console.error("Resend error:", error.message);
    return Response.json(
      { ok: false, error: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio na biuro@sklepzdomami.pl." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
