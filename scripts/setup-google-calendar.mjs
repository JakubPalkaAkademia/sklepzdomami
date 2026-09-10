import { google } from "googleapis";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const keyPath = resolve(root, "secrets", "google-calendar-sa.json");
const envPath = resolve(root, ".env.local");

const key = JSON.parse(readFileSync(keyPath, "utf8"));
const auth = new google.auth.JWT({
  email: key.client_email,
  key: key.private_key,
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });

const existingEnv = readFileSync(envPath, "utf8");
const calendarIdMatch = existingEnv.match(/^GOOGLE_CALENDAR_ID=(.*)$/m);
const existingCalendarId = calendarIdMatch?.[1]?.trim();

if (existingCalendarId) {
  console.log(`GOOGLE_CALENDAR_ID already set: ${existingCalendarId}`);
  process.exit(0);
}

const response = await calendar.calendars.insert({
  requestBody: {
    summary: "Wizyty Szmaragdowa 7",
    description: "Rezerwacje wizyt ze strony sklepzdomami.com",
    timeZone: "Europe/Warsaw",
  },
});

const calendarId = response.data.id;
if (!calendarId) {
  throw new Error("Failed to create Google Calendar");
}

let env = existingEnv;
const pattern = /^GOOGLE_CALENDAR_ID=.*$/m;
const line = `GOOGLE_CALENDAR_ID=${calendarId}`;
env = pattern.test(env) ? env.replace(pattern, line) : `${env.trimEnd()}\n${line}\n`;

writeFileSync(envPath, env, "utf8");

console.log("Created Google Calendar: Wizyty Szmaragdowa 7");
console.log(`GOOGLE_CALENDAR_ID=${calendarId}`);
console.log("");
console.log("Aby widzieć wizyty w swoim kalendarzu Google:");
console.log("1. Otwórz https://calendar.google.com");
console.log("2. Po lewej: + → Subskrybuj kalendarz → Identyfikator kalendarza");
console.log(`3. Wklej: ${calendarId}`);
