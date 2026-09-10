import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description:
      "Domy na sprzedaż Szmaragdowa 7 w Morzyczynie nad jeziorem Miedwie.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#454434",
    lang: "pl",
    icons: [
      {
        src: site.logo,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
