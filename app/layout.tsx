import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { hero, investment, site } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${investment.title} · ${site.name}`,
    template: `%s · ${site.name}`,
  },
  description: investment.intro,
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: site.url,
    siteName: site.name,
    title: `${investment.title} · ${site.name}`,
    description: investment.tagline,
    images: [{ url: hero.poster, width: 1500, height: 500, alt: investment.title }],
  },
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${vippSans.variable} ${vippSerif.variable}`}>
      <body className={vippSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
