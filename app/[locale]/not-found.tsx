import { headers } from "next/headers";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { defaultLocale, isLocale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

export default async function LocaleNotFound() {
  const headerLocale = (await headers()).get("x-locale") ?? defaultLocale;
  const locale = isLocale(headerLocale) ? headerLocale : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <div className="page">
      <h1 className="page__title">{dict.notFound.title}</h1>
      <p className="page__text">{dict.notFound.body}</p>
      <p className="page__text">
        <Link href={localizedPath(locale, "/")}>{dict.notFound.back}</Link>
      </p>
    </div>
  );
}
