import {
  formatDateKey,
  slotKey,
  type BookedSlot,
} from "@/lib/booking";
import { getConfirmedBookingsInRange, isDatabaseConfigured } from "@/lib/db";
import { getGoogleBusySlots, isGoogleCalendarConfigured } from "@/lib/google-calendar";
import { visitTimes } from "@/lib/site";

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

function mergeSlots(...slotLists: BookedSlot[][]): BookedSlot[] {
  const seen = new Set<string>();
  const merged: BookedSlot[] = [];

  for (const slots of slotLists) {
    for (const slot of slots) {
      const key = slotKey(slot.date, slot.time);
      if (!seen.has(key)) {
        seen.add(key);
        merged.push(slot);
      }
    }
  }

  return merged;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get("from") ?? formatDateKey(new Date());
  const to =
    searchParams.get("to") ??
    formatDateKey(new Date(new Date().getFullYear(), new Date().getMonth() + 3, 0));

  if (!DATE_PATTERN.test(from) || !DATE_PATTERN.test(to)) {
    return Response.json({ ok: false, error: "Invalid date range" }, { status: 400 });
  }

  if (!isDatabaseConfigured()) {
    return Response.json(
      { ok: false, error: "Booking service unavailable" },
      { status: 503 },
    );
  }

  try {
    const dbSlots = await getConfirmedBookingsInRange(from, to);
    const googleSlots = isGoogleCalendarConfigured()
      ? await getGoogleBusySlots(from, to, visitTimes)
      : [];

    const booked = mergeSlots(dbSlots, googleSlots);

    return Response.json({ ok: true, booked });
  } catch (error) {
    console.error("Availability error:", error);
    return Response.json(
      { ok: false, error: "Failed to fetch availability" },
      { status: 500 },
    );
  }
}
