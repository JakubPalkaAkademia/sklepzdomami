import { google } from "googleapis";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

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
const auth = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });
const response = await calendar.acl.list({ calendarId });
const meta = await calendar.calendars.get({ calendarId });

console.log("Calendar:", meta.data.summary);
console.log("ID:", calendarId);
console.log("");
console.log("ACL:");
for (const entry of response.data.items ?? []) {
  console.log(`  ${entry.role?.padEnd(8)} ${entry.scope?.type} ${entry.scope?.value ?? ""} (${entry.id})`);
}
