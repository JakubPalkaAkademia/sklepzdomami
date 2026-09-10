import { Resend } from "resend";
import { buildIcsContent, formatVisitDate, type CalendarEventDetails } from "@/lib/booking";
import { escapeHtml } from "@/lib/contact-form";
import type { Locale } from "@/lib/i18n/config";
import { studio } from "@/lib/site";

export type BookingEmailParams = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  locale: Locale;
  location: string;
  event: CalendarEventDetails;
};

function formatDateForEmail(date: string, locale: Locale): string {
  const [year, month, day] = date.split("-").map(Number);
  return formatVisitDate(new Date(year, month - 1, day), locale);
}

export async function sendBookingEmails(params: BookingEmailParams): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM ?? `Sklep z domami <onboarding@resend.dev>`;
  const to = process.env.CONTACT_TO_EMAIL ?? studio.email;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }

  const resend = new Resend(apiKey);
  const icsContent = buildIcsContent(params.event);
  const icsAttachment = {
    filename: "wizyta-szmaragdowa-7.ics",
    content: Buffer.from(icsContent).toString("base64"),
    contentType: "text/calendar",
  };

  const formattedDate = formatDateForEmail(params.date, params.locale);
  const fullName = `${params.firstName} ${params.lastName}`;

  const staffSubject = `Nowa wizyta — ${fullName} — ${formattedDate} ${params.time}`;
  const staffHtml = `
    <p><strong>Nowa rezerwacja wizyty na budowie</strong></p>
    <p><strong>Imię:</strong> ${escapeHtml(params.firstName)}</p>
    <p><strong>Nazwisko:</strong> ${escapeHtml(params.lastName)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(params.email)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(params.phone)}</p>
    <p><strong>Data:</strong> ${escapeHtml(formattedDate)}</p>
    <p><strong>Godzina:</strong> ${escapeHtml(params.time)}</p>
    <p><strong>Miejsce:</strong> ${escapeHtml(params.location)}</p>
    <p><strong>Język:</strong> ${escapeHtml(params.locale)}</p>
  `;

  const clientSubject =
    params.locale === "pl"
      ? `Potwierdzenie wizyty — Szmaragdowa 7 — ${formattedDate}`
      : params.locale === "de"
        ? `Besichtigung bestätigt — Szmaragdowa 7 — ${formattedDate}`
        : `Visit confirmed — Szmaragdowa 7 — ${formattedDate}`;

  const clientHtml =
    params.locale === "pl"
      ? `
        <p>Dzień dobry ${escapeHtml(params.firstName)},</p>
        <p>Dziękujemy za umówienie wizyty na budowie Szmaragdowa 7.</p>
        <p><strong>Termin:</strong> ${escapeHtml(formattedDate)} o ${escapeHtml(params.time)}</p>
        <p><strong>Miejsce:</strong> ${escapeHtml(params.location)}</p>
        <p>W razie pytań prosimy o kontakt: ${escapeHtml(studio.phone)} lub ${escapeHtml(studio.email)}.</p>
        <p>W załączniku znajdziesz plik kalendarza (.ics), który możesz dodać do swojego kalendarza.</p>
      `
      : params.locale === "de"
        ? `
        <p>Guten Tag ${escapeHtml(params.firstName)},</p>
        <p>vielen Dank für die Vereinbarung einer Besichtigung auf der Baustelle Szmaragdowa 7.</p>
        <p><strong>Termin:</strong> ${escapeHtml(formattedDate)} um ${escapeHtml(params.time)}</p>
        <p><strong>Ort:</strong> ${escapeHtml(params.location)}</p>
        <p>Bei Fragen erreichen Sie uns unter ${escapeHtml(studio.phone)} oder ${escapeHtml(studio.email)}.</p>
        <p>Im Anhang finden Sie eine Kalenderdatei (.ics).</p>
      `
        : `
        <p>Hello ${escapeHtml(params.firstName)},</p>
        <p>Thank you for booking a visit to the Szmaragdowa 7 construction site.</p>
        <p><strong>Date:</strong> ${escapeHtml(formattedDate)} at ${escapeHtml(params.time)}</p>
        <p><strong>Location:</strong> ${escapeHtml(params.location)}</p>
        <p>If you have any questions, contact us at ${escapeHtml(studio.phone)} or ${escapeHtml(studio.email)}.</p>
        <p>Please find a calendar file (.ics) attached.</p>
      `;

  const staffResult = await resend.emails.send({
    from,
    to: [to],
    replyTo: params.email,
    subject: staffSubject,
    html: staffHtml,
    attachments: [icsAttachment],
  });

  if (staffResult.error) {
    throw new Error(staffResult.error.message);
  }

  const clientResult = await resend.emails.send({
    from,
    to: [params.email],
    replyTo: studio.email,
    subject: clientSubject,
    html: clientHtml,
    attachments: [icsAttachment],
  });

  if (clientResult.error) {
    console.error("Failed to send client confirmation:", clientResult.error.message);
  }
}
