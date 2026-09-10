import { spawnSync } from "node:child_process";

const DOMAIN = "sklepzdomami.com";
const rawToken = process.argv[2] || process.env.GOOGLE_SITE_VERIFICATION;

if (!rawToken) {
  console.error(
    "Usage: node scripts/add-google-dns-verification.mjs <GOOGLE_SITE_VERIFICATION_TOKEN>",
  );
  process.exit(1);
}

const token = rawToken.replace(/^google-site-verification=/i, "");
const value = `google-site-verification=${token}`;
const result = spawnSync(
  "vercel",
  ["dns", "add", DOMAIN, "@", "TXT", value, "--scope", "pali89s-projects"],
  {
    encoding: "utf8",
    shell: process.platform === "win32",
    stdio: "inherit",
  },
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

console.log(`Added TXT ${value} on ${DOMAIN}`);
