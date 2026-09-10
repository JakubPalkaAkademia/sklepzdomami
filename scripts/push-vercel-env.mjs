import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const REQUIRED_KEYS = [
  "DATABASE_URL",
  "RESEND_API_KEY",
  "RESEND_FROM",
  "CONTACT_TO_EMAIL",
  "BOOKING_NOTIFY_EMAILS",
  "GOOGLE_CALENDAR_ID",
  "GOOGLE_CLIENT_EMAIL",
  "GOOGLE_PRIVATE_KEY",
];

const ENVIRONMENTS = ["production", "preview", "development"];

function parseEnvFile(filePath) {
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

  return values;
}

function pushEnv(key, value) {
  for (const environment of ENVIRONMENTS) {
    const args = ["env", "add", key, environment, "--force", "--sensitive"];
    const result = spawnSync("vercel", args, {
      cwd: resolve(process.cwd()),
      input: value,
      encoding: "utf8",
      shell: process.platform === "win32",
    });

    if (result.status !== 0) {
      console.error(`Failed to set ${key} (${environment})`);
      if (result.stderr) console.error(result.stderr);
      process.exitCode = 1;
      return;
    }

    console.log(`Set ${key} → ${environment}`);
  }
}

const envPath = resolve(process.cwd(), ".env.local");
const values = parseEnvFile(envPath);

for (const key of REQUIRED_KEYS) {
  const value = values[key];
  if (!value) {
    console.error(`Missing ${key} in .env.local`);
    process.exitCode = 1;
    continue;
  }

  pushEnv(key, value);
}

if (process.exitCode) {
  process.exit(process.exitCode);
}

console.log("Done. Run: vercel --prod");
