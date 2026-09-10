import type { Dictionary } from "@/lib/i18n";
import { visitTimes } from "@/lib/site";

export type BookingFormPayload = {
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website?: string;
  locale?: string;
};

export type BookingFormResult =
  | { ok: true }
  | { ok: false; error: string };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;
const TIME_PATTERN = /^\d{2}:\d{2}$/;

export function validateBookingForm(
  payload: BookingFormPayload,
  errors: Dictionary["booking"]["errors"],
): BookingFormResult {
  if (payload.website?.trim()) {
    return { ok: false, error: errors.generic };
  }

  const date = payload.date.trim();
  const time = payload.time.trim();
  const firstName = payload.firstName.trim();
  const lastName = payload.lastName.trim();
  const email = payload.email.trim();
  const phone = payload.phone.trim();

  if (!DATE_PATTERN.test(date)) {
    return { ok: false, error: errors.date };
  }

  if (!TIME_PATTERN.test(time) || !visitTimes.includes(time as (typeof visitTimes)[number])) {
    return { ok: false, error: errors.time };
  }

  const bookingDate = new Date(`${date}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (bookingDate < today) {
    return { ok: false, error: errors.datePast };
  }

  if (firstName.length < 2 || firstName.length > 120) {
    return { ok: false, error: errors.firstName };
  }

  if (lastName.length < 2 || lastName.length > 120) {
    return { ok: false, error: errors.lastName };
  }

  if (!EMAIL_PATTERN.test(email) || email.length > 254) {
    return { ok: false, error: errors.email };
  }

  if (phone.length < 7 || phone.length > 30) {
    return { ok: false, error: errors.phone };
  }

  return { ok: true };
}
