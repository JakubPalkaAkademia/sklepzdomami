import { localeIntl, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n";

const TIMEZONE = "Europe/Warsaw";
const VISIT_DURATION_MINUTES = 60;

export function getWeekdayLabels(locale: Locale): readonly string[] {
  const formatter = new Intl.DateTimeFormat(localeIntl[locale], { weekday: "short" });
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(2024, 0, 1 + index);
    return formatter.format(date).replace(".", "").slice(0, 2);
  });
}

export function getMonthLabel(year: number, month: number, locale: Locale): string {
  return new Intl.DateTimeFormat(localeIntl[locale], { month: "long", year: "numeric" }).format(
    new Date(year, month, 1),
  );
}

export function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isBeforeDay(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() < startOfDay(b).getTime();
}

export function addMonths(date: Date, delta: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + delta, 1);
}

export function formatDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/** Monday-first grid cells for a month view. Leading/trailing cells are null. */
export function getMonthGrid(year: number, month: number): (Date | null)[] {
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];

  for (let i = 0; i < startOffset; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, month, day));
  }
  while (cells.length % 7 !== 0) cells.push(null);

  return cells;
}

export function formatVisitDate(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(localeIntl[locale], {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatVisitDateShort(date: Date, locale: Locale): string {
  return new Intl.DateTimeFormat(localeIntl[locale], {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export type BookedSlot = {
  date: string;
  time: string;
};

export function slotKey(date: string, time: string): string {
  return `${date}|${time}`;
}

export function isSlotBooked(
  bookedSlots: BookedSlot[],
  date: string,
  time: string,
): boolean {
  return bookedSlots.some((slot) => slot.date === date && slot.time === time);
}

export function getAvailableTimesForDate(
  date: Date,
  visitTimes: readonly string[],
  bookedSlots: BookedSlot[],
  today: Date,
): string[] {
  const dateKey = formatDateKey(date);
  const isToday = isSameDay(date, today);

  return visitTimes.filter((time) => {
    if (isSlotBooked(bookedSlots, dateKey, time)) {
      return false;
    }
    if (isToday) {
      const [hours, minutes] = time.split(":").map(Number);
      const slotDate = new Date(date);
      slotDate.setHours(hours, minutes, 0, 0);
      if (slotDate <= new Date()) {
        return false;
      }
    }
    return true;
  });
}

export function hasAvailableTimesOnDate(
  date: Date,
  visitTimes: readonly string[],
  bookedSlots: BookedSlot[],
  today: Date,
): boolean {
  return getAvailableTimesForDate(date, visitTimes, bookedSlots, today).length > 0;
}

function parseTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function formatIcsDateTime(date: string, time: string): string {
  const [year, month, day] = date.split("-");
  const [hours, minutes] = time.split(":");
  return `${year}${month}${day}T${hours}${minutes}00`;
}

function escapeIcsText(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

export type CalendarEventDetails = {
  date: string;
  time: string;
  title: string;
  location: string;
  description: string;
};

export function buildIcsContent(event: CalendarEventDetails): string {
  const startMinutes = parseTimeToMinutes(event.time);
  const endMinutes = startMinutes + VISIT_DURATION_MINUTES;
  const endHours = Math.floor(endMinutes / 60);
  const endMins = endMinutes % 60;
  const endTime = `${String(endHours).padStart(2, "0")}:${String(endMins).padStart(2, "0")}`;
  const uid = `${event.date.replace(/-/g, "")}T${event.time.replace(":", "")}@sklepzdomami.com`;
  const now = new Date()
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}Z$/, "Z");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Sklep z domami//Booking//PL",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VTIMEZONE",
    "TZID:Europe/Warsaw",
    "BEGIN:STANDARD",
    "TZOFFSETFROM:+0200",
    "TZOFFSETTO:+0100",
    "TZNAME:CET",
    "DTSTART:19701025T030000",
    "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU",
    "END:STANDARD",
    "BEGIN:DAYLIGHT",
    "TZOFFSETFROM:+0100",
    "TZOFFSETTO:+0200",
    "TZNAME:CEST",
    "DTSTART:19700329T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU",
    "END:DAYLIGHT",
    "END:VTIMEZONE",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART;TZID=${TIMEZONE}:${formatIcsDateTime(event.date, event.time)}`,
    `DTEND;TZID=${TIMEZONE}:${formatIcsDateTime(event.date, endTime)}`,
    `SUMMARY:${escapeIcsText(event.title)}`,
    `LOCATION:${escapeIcsText(event.location)}`,
    `DESCRIPTION:${escapeIcsText(event.description)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export function buildGoogleCalendarUrl(event: CalendarEventDetails): string {
  const startMinutes = parseTimeToMinutes(event.time);
  const endMinutes = startMinutes + VISIT_DURATION_MINUTES;
  const endHours = Math.floor(endMinutes / 60);
  const endMins = endMinutes % 60;
  const endTime = `${String(endHours).padStart(2, "0")}:${String(endMins).padStart(2, "0")}`;

  const start = `${event.date.replace(/-/g, "")}T${event.time.replace(":", "")}00`;
  const end = `${event.date.replace(/-/g, "")}T${endTime.replace(":", "")}00`;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${start}/${end}`,
    details: event.description,
    location: event.location,
    ctz: TIMEZONE,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function buildCalendarEventDetails(params: {
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  location: string;
  copy: Dictionary["booking"];
}): CalendarEventDetails {
  const { date, time, firstName, lastName, location, copy } = params;
  return {
    date,
    time,
    title: copy.eventTitle.replace("{name}", `${firstName} ${lastName}`),
    location,
    description: copy.eventDescription.replace("{location}", location),
  };
}
