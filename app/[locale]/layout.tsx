import type { Metadata } from "next";
import { BookingProvider } from "@/components/BookingProvider";
import { CookieNotice } from "@/components/CookieNotice";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocaleProvider } from "@/components/LocaleProvider";
import { getDictionary } from "@/lib/i18n";
import { isLocale, localeOg, locales } from "@/lib/i18n/config";
import { resolveLocale } from "@/lib/i18n/params";
import { hero, site } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(site.url),
    title: {
      default: dict.metadata.titleDefault,
      template: dict.metadata.titleTemplate,
    },
    description: dict.investment.intro,
    openGraph: {
      type: "website",
      locale: localeOg[locale],
      siteName: site.name,
      title: dict.metadata.titleDefault,
      description: dict.investment.tagline,
      images: [{ url: hero.poster, width: 1500, height: 500, alt: dict.investment.title }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);

  return (
    <LocaleProvider locale={locale} dict={dict}>
      <BookingProvider>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieNotice />
      </BookingProvider>
    </LocaleProvider>
  );
}
