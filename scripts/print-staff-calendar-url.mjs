import { randomBytes } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnv(filePath) {
  const content = readFileSync(filePath, "utf8");
  const values = {};

  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const index = trimmed.indexOf("=");
    if (index === -1) continue;
    const key = trimmed.slice(0, index);
    let value = trimmed.slice(index + 1);
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    values[key] = value.replace(/\\n/g, "\n");
  }

  return { content, values };
}

const envPath = resolve(process.cwd(), ".env.local");
const { content, values } = loadEnv(envPath);

let token = values.BOOKING_CALENDAR_ICS_TOKEN;
if (!token) {
  token = randomBytes(24).toString("hex");
  const line = `BOOKING_CALENDAR_ICS_TOKEN=${token}`;
  const nextContent = content.endsWith("\n") ? `${content}${line}\n` : `${content}\n${line}\n`;
  writeFileSync(envPath, nextContent, "utf8");
  console.log("Created BOOKING_CALENDAR_ICS_TOKEN in .env.local");
}

const siteUrl = values.NEXT_PUBLIC_SITE_URL ?? "https://sklepzdomami.com";
const feedUrl = `${siteUrl}/api/booking/staff-calendar?token=${token}`;

console.log("");
console.log("Apple Calendar subscription URL:");
console.log(feedUrl);
console.log("");
console.log("iPhone steps:");
console.log("1. Settings → Calendar → Accounts → Add Account → Other");
console.log("2. Add Subscribed Calendar");
console.log("3. Paste the URL above");
console.log("");
console.log("Also add BOOKING_CALENDAR_ICS_TOKEN to Vercel env and redeploy.");
