const SITEMAP_URL = "https://sklepzdomami.com/sitemap.xml";

const response = await fetch(
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
);

console.log(`Bing ping ${response.status} ${response.statusText}`);
if (response.status === 410) {
  console.log("Bing ping endpoint retired — use IndexNow (pnpm seo:indexnow) instead.");
} else if (!response.ok) {
  console.error(await response.text());
  process.exit(1);
}
