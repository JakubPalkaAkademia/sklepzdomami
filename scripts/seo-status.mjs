const SITE_URL = "https://sklepzdomami.com";
const INDEX_NOW_KEY = "8f3c2a91b7e64d0ca4e15f8d2c9b07e3";

async function get(url) {
  const response = await fetch(url, { redirect: "manual" });
  const body = await response.text();
  return { status: response.status, location: response.headers.get("location"), body };
}

function pick(html, pattern) {
  return html.match(pattern)?.[1];
}

const home = await get(SITE_URL);
const www = await get("https://www.sklepzdomami.com/");
const robots = await get(`${SITE_URL}/robots.txt`);
const sitemap = await get(`${SITE_URL}/sitemap.xml`);
const indexNow = await get(`${SITE_URL}/${INDEX_NOW_KEY}.txt`);

console.log("Home", home.status, "title=", pick(home.body, /<title>([^<]+)<\/title>/i) ?? "(missing)");
console.log(
  "Meta description",
  pick(home.body, /<meta name="description" content="([^"]+)"/i) ?? "(missing)",
);
console.log(
  "Google verification",
  pick(home.body, /<meta name="google-site-verification" content="([^"]+)"/i) ?? "(not set)",
);
console.log("Canonical", pick(home.body, /<link rel="canonical" href="([^"]+)"/i) ?? "(missing)");
console.log("OG image", pick(home.body, /<meta property="og:image" content="([^"]+)"/i) ?? "(missing)");
console.log(
  "JSON-LD types",
  [...home.body.matchAll(/"@type":"([^"]+)"/g)].map((match) => match[1]).join(", ") || "(missing)",
);
console.log("WWW redirect", www.status, www.location ?? "");
console.log("robots.txt", robots.status);
console.log(robots.body.trim());
console.log("sitemap.xml", sitemap.status, "urls=", (sitemap.body.match(/<loc>/g) ?? []).length);
console.log("IndexNow key", indexNow.status, indexNow.body.trim());
