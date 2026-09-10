import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { headers } from "next/headers";
import { StructuredData } from "@/components/StructuredData";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { hero, site } from "@/lib/site";
import "./vipp-shelter.css";

const vippSans = Inter({
  variable: "--font-vipp-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const vippSerif = Newsreader({
  variable: "--font-vipp-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
const bingVerification = process.env.BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: {
    icon: [{ url: site.logo, type: "image/svg+xml" }],
    apple: site.logo,
  },
  verification: {
    ...(googleVerification ? { google: googleVerification } : {}),
    ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headerLocale = (await headers()).get("x-locale") ?? defaultLocale;
  const locale = isLocale(headerLocale) ? headerLocale : defaultLocale;

  return (
    <html lang={locale} className={`${vippSans.variable} ${vippSerif.variable}`}>
      <head>
        <StructuredData />
        <link rel="preload" href={hero.poster} as="image" />
        <link rel="preload" href={hero.videoMp4} as="fetch" type="video/mp4" crossOrigin="anonymous" />
      </head>
      <body className={vippSans.className}>
        {children}
      </body>
    </html>
  );
}
