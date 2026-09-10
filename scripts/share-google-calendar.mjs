import { google } from "googleapis";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const DEFAULT_SHARE_EMAILS = [
  "jakub89palka@gmail.com",
  "mar.milowska@gmail.com",
  "biuro@sklepzdomami.pl",
  "jakub_palka@icloud.com",
];

function parseEmailList(raw) {
  return raw
    .split(/[,;]/)
    .map((entry) => entry.trim())
    .filter((entry) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry));
}

const shareWithList =
  process.argv.length > 2
    ? process.argv.slice(2)
    : process.env.CALENDAR_SHARE_EMAILS
      ? parseEmailList(process.env.CALENDAR_SHARE_EMAILS)
      : DEFAULT_SHARE_EMAILS;

function loadEnv() {
  const envPath = resolve(process.cwd(), ".env.local");
  const content = readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    const key = trimmed.slice(0, index);
    let value = trimmed.slice(index + 1);
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    process.env[key] = value.replace(/\\n/g, "\n");
  }
}

loadEnv();

const calendarId = process.env.GOOGLE_CALENDAR_ID;
if (!calendarId) {
  throw new Error("GOOGLE_CALENDAR_ID is not set in .env.local");
}

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });

for (const shareWith of shareWithList) {
  try {
    const acl = await calendar.acl.insert({
      calendarId,
      sendNotifications: true,
      requestBody: {
        role: "writer",
        scope: {
          type: "user",
          value: shareWith,
        },
      },
    });

    console.log(`Shared calendar with ${shareWith} (ACL id: ${acl.data.id})`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (message.includes("already exists") || message.includes("duplicate")) {
      console.log(`Already shared with ${shareWith}`);
      continue;
    }
    console.error(`Failed to share with ${shareWith}: ${message}`);
  }
}

console.log("");
console.log("Google Calendar app: enable Wizyty Szmaragdowa 7 under Other calendars.");
console.log("Apple Calendar (iCloud): accept the invite e-mail from Google, then enable the calendar in the iOS Calendar app.");
