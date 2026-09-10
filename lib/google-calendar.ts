import { google } from "googleapis";

const TIMEZONE = "Europe/Warsaw";
const VISIT_DURATION_MINUTES = 60;

export type BusySlot = {
  date: string;
  time: string;
};

function getCalendarId(): string | null {
  return process.env.GOOGLE_CALENDAR_ID ?? null;
}

function getAuthClient() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    return null;
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
}

export function isGoogleCalendarConfigured(): boolean {
  return Boolean(getCalendarId() && getAuthClient());
}

function parseTimeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function formatDateInTimezone(date: Date): string {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(date);
}

function getBusyTimesForDay(
  busyPeriods: { start: string; end: string }[],
  date: string,
  visitTimes: readonly string[],
): string[] {
  const busyTimes = new Set<string>();

  for (const period of busyPeriods) {
    const start = new Date(period.start);
    const end = new Date(period.end);
    const periodDate = formatDateInTimezone(start);
    if (periodDate !== date) {
      continue;
    }

    const startMinutes = parseTimeToMinutes(
      new Intl.DateTimeFormat("en-GB", {
        timeZone: TIMEZONE,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(start),
    );
    const endMinutes = parseTimeToMinutes(
      new Intl.DateTimeFormat("en-GB", {
        timeZone: TIMEZONE,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(end),
    );

    for (const slot of visitTimes) {
      const slotStart = parseTimeToMinutes(slot);
      const slotEnd = slotStart + VISIT_DURATION_MINUTES;
      if (slotStart < endMinutes && slotEnd > startMinutes) {
        busyTimes.add(slot);
      }
    }
  }

  return Array.from(busyTimes);
}

export async function getGoogleBusySlots(
  from: string,
  to: string,
  visitTimes: readonly string[],
): Promise<BusySlot[]> {
  const calendarId = getCalendarId();
  const auth = getAuthClient();
  if (!calendarId || !auth) {
    return [];
  }

  const calendar = google.calendar({ version: "v3", auth });
  const timeMin = new Date(`${from}T00:00:00+01:00`).toISOString();
  const timeMax = new Date(`${to}T23:59:59+01:00`).toISOString();

  const response = await calendar.freebusy.query({
    requestBody: {
      timeMin,
      timeMax,
      timeZone: TIMEZONE,
      items: [{ id: calendarId }],
    },
  });

  const busyPeriods = response.data.calendars?.[calendarId]?.busy ?? [];
  const slots: BusySlot[] = [];
  const fromDate = new Date(`${from}T00:00:00`);
  const toDate = new Date(`${to}T00:00:00`);

  for (let cursor = new Date(fromDate); cursor <= toDate; cursor.setDate(cursor.getDate() + 1)) {
    const dateStr = formatDateInTimezone(cursor);
    const busyTimes = getBusyTimesForDay(
      busyPeriods.map((period) => ({
        start: period.start ?? "",
        end: period.end ?? "",
      })),
      dateStr,
      visitTimes,
    );
    for (const time of busyTimes) {
      slots.push({ date: dateStr, time });
    }
  }

  return slots;
}

export type CreateCalendarEventParams = {
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
};

function buildEventDateTime(date: string, time: string): { start: string; end: string } {
  const [hours, minutes] = time.split(":").map(Number);
  const endMinutes = hours * 60 + minutes + VISIT_DURATION_MINUTES;
  const endHours = Math.floor(endMinutes / 60);
  const endMins = endMinutes % 60;
  const endTime = `${String(endHours).padStart(2, "0")}:${String(endMins).padStart(2, "0")}:00`;

  return {
    start: `${date}T${time}:00`,
    end: `${date}T${endTime}`,
  };
}

export async function createCalendarEvent(
  params: CreateCalendarEventParams,
): Promise<string | null> {
  const calendarId = getCalendarId();
  const auth = getAuthClient();
  if (!calendarId || !auth) {
    return null;
  }

  const calendar = google.calendar({ version: "v3", auth });
  const { start, end } = buildEventDateTime(params.date, params.time);

  const response = await calendar.events.insert({
    calendarId,
    requestBody: {
      summary: `Wizyta na budowie — ${params.firstName} ${params.lastName}`,
      location: params.location,
      description: [
        `Imię i nazwisko: ${params.firstName} ${params.lastName}`,
        `E-mail: ${params.email}`,
        `Telefon: ${params.phone}`,
        "Źródło: formularz na stronie sklepzdomami.com",
      ].join("\n"),
      start: {
        dateTime: start,
        timeZone: TIMEZONE,
      },
      end: {
        dateTime: end,
        timeZone: TIMEZONE,
      },
    },
  });

  return response.data.id ?? null;
}
