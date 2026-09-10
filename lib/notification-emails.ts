import { studio } from "@/lib/site";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseEmailList(raw: string): string[] {
  const emails = raw
    .split(/[,;]/)
    .map((entry) => entry.trim())
    .filter((entry) => EMAIL_PATTERN.test(entry));

  return Array.from(new Set(emails));
}

export function getBookingNotifyEmails(): string[] {
  const raw =
    process.env.BOOKING_NOTIFY_EMAILS ??
    process.env.CONTACT_TO_EMAIL ??
    studio.email;

  const emails = parseEmailList(raw);
  return emails.length > 0 ? emails : [studio.email];
}
