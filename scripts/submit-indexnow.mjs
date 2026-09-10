const SITE_URL = "https://sklepzdomami.com";
const INDEX_NOW_KEY = "8f3c2a91b7e64d0ca4e15f8d2c9b07e3";

function locTags(xml) {
  return [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map((match) => match[1].trim());
}

const sitemap = await fetch(`${SITE_URL}/sitemap.xml`);
if (!sitemap.ok) {
  console.error(`Failed to fetch sitemap: ${sitemap.status}`);
  process.exit(1);
}

const urls = locTags(await sitemap.text()).filter((url) => url.startsWith(SITE_URL));
if (urls.length === 0) {
  console.error("No URLs found in sitemap");
  process.exit(1);
}

const payload = {
  host: "sklepzdomami.com",
  key: INDEX_NOW_KEY,
  keyLocation: `${SITE_URL}/${INDEX_NOW_KEY}.txt`,
  urlList: urls,
};

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});

console.log(`IndexNow ${response.status} ${response.statusText} (${urls.length} URLs)`);
if (!response.ok) {
  console.error(await response.text());
  process.exit(1);
}
