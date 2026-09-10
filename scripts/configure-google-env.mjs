import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const keyPath = resolve(root, "secrets", "google-calendar-sa.json");
const envPath = resolve(root, ".env.local");

const key = JSON.parse(readFileSync(keyPath, "utf8"));
const clientEmail = key.client_email;
const privateKey = key.private_key.replace(/\n/g, "\\n");

let env = readFileSync(envPath, "utf8");

function upsertEnv(content, name, value) {
  const pattern = new RegExp(`^${name}=.*$`, "m");
  const line = `${name}=${value}`;
  if (pattern.test(content)) {
    return content.replace(pattern, line);
  }
  return `${content.trimEnd()}\n${line}\n`;
}

env = upsertEnv(env, "GOOGLE_CLIENT_EMAIL", clientEmail);
env = upsertEnv(env, "GOOGLE_PRIVATE_KEY", `"${privateKey}"`);

writeFileSync(envPath, env, "utf8");
console.log(`Updated .env.local with GOOGLE_CLIENT_EMAIL=${clientEmail}`);
