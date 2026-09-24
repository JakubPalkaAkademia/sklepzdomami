export const BOOKING_CONFIRMATION_PATH = "/wizyta-potwierdzona";

export const BOOKING_CONFIRMATION_STORAGE_KEY = "sklepzdomami-booking-confirmation";

export type BookingConfirmationPayload = {
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  googleCalendarUrl: string;
  icsContent: string;
};

export function saveBookingConfirmation(data: BookingConfirmationPayload): void {
  sessionStorage.setItem(BOOKING_CONFIRMATION_STORAGE_KEY, JSON.stringify(data));
}

function parseBookingConfirmation(raw: string): BookingConfirmationPayload | null {
  try {
    return JSON.parse(raw) as BookingConfirmationPayload;
  } catch {
    return null;
  }
}

/** Read confirmation data without removing (safe for React Strict Mode). */
export function readBookingConfirmation(): BookingConfirmationPayload | null {
  const raw = sessionStorage.getItem(BOOKING_CONFIRMATION_STORAGE_KEY);
  if (!raw) {
    return null;
  }
  return parseBookingConfirmation(raw);
}

export function clearBookingConfirmation(): void {
  sessionStorage.removeItem(BOOKING_CONFIRMATION_STORAGE_KEY);
}

export function downloadIcsFile(content: string, filename: string): void {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
