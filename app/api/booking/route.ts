import {
  buildCalendarEventDetails,
  buildGoogleCalendarUrl,
  buildIcsContent,
  isSlotBooked,
} from "@/lib/booking";
import { validateBookingForm, type BookingFormPayload } from "@/lib/booking-form";
import { sendBookingEmails } from "@/lib/booking-email";
import {
  getConfirmedBookingsInRange,
  insertBooking,
  isDatabaseConfigured,
  updateBookingGoogleEventId,
} from "@/lib/db";
import { createCalendarEvent, getGoogleBusySlots, isGoogleCalendarConfigured } from "@/lib/google-calendar";
import { getDictionary } from "@/lib/i18n";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { visitTimes } from "@/lib/site";

function isUniqueViolation(error: unknown): boolean {
  if (!(error instanceof Error)) {
    return false;
  }
  const message = error.message.toLowerCase();
  const code = (error as { code?: string }).code;
  return (
    code === "23505" ||
    message.includes("unique") ||
    message.includes("duplicate key")
  );
}

export async function POST(request: Request) {
  let payload: BookingFormPayload;

  try {
    payload = (await request.json()) as BookingFormPayload;
  } catch {
    return Response.json(
      { ok: false, error: getDictionary("pl").booking.errors.invalidPayload },
      { status: 400 },
    );
  }

  const rawLocale = payload.locale ?? "pl";
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "pl";
  const dict = getDictionary(locale);
  const booking = dict.booking;

  const validation = validateBookingForm(payload, booking.errors);
  if (!validation.ok) {
    return Response.json({ ok: false, error: validation.error }, { status: 400 });
  }

  if (!isDatabaseConfigured()) {
    return Response.json(
      { ok: false, error: booking.errors.unavailable },
      { status: 503 },
    );
  }

  const date = payload.date.trim();
  const time = payload.time.trim();
  const firstName = payload.firstName.trim();
  const lastName = payload.lastName.trim();
  const email = payload.email.trim();
  const phone = payload.phone.trim();
  const location = dict.investment.address;

  try {
    const dbSlots = await getConfirmedBookingsInRange(date, date);
    const googleSlots = isGoogleCalendarConfigured()
      ? await getGoogleBusySlots(date, date, visitTimes)
      : [];
    const booked = [...dbSlots, ...googleSlots];

    if (isSlotBooked(booked, date, time)) {
      return Response.json({ ok: false, error: booking.errors.slotTaken }, { status: 409 });
    }

    let row;
    try {
      row = await insertBooking({
        date,
        time,
        firstName,
        lastName,
        email,
        phone,
        locale,
      });
    } catch (error) {
      if (isUniqueViolation(error)) {
        return Response.json({ ok: false, error: booking.errors.slotTaken }, { status: 409 });
      }
      throw error;
    }

    let googleEventId: string | null = null;
    if (isGoogleCalendarConfigured()) {
      try {
        googleEventId = await createCalendarEvent({
          date,
          time,
          firstName,
          lastName,
          email,
          phone,
          location,
        });
        if (googleEventId) {
          await updateBookingGoogleEventId(row.id, googleEventId);
        }
      } catch (error) {
        console.error("Google Calendar event creation failed:", error);
      }
    }

    const event = buildCalendarEventDetails({
      date,
      time,
      firstName,
      lastName,
      location,
      copy: booking,
    });

    try {
      await sendBookingEmails({
        firstName,
        lastName,
        email,
        phone,
        date,
        time,
        locale,
        location,
        event,
      });
    } catch (error) {
      console.error("Booking email failed:", error);
    }

    const icsContent = buildIcsContent(event);
    const googleCalendarUrl = buildGoogleCalendarUrl(event);

    return Response.json({
      ok: true,
      booking: {
        id: row.id,
        date,
        time,
        firstName,
        lastName,
        location,
        googleCalendarUrl,
        icsContent,
      },
    });
  } catch (error) {
    console.error("Booking error:", error);
    return Response.json(
      { ok: false, error: booking.errors.sendFailed },
      { status: 500 },
    );
  }
}
