"use client";

import Link from "next/link";
import { localizedPath } from "@/lib/i18n/paths";
import { useLocale } from "@/components/LocaleProvider";

type LocaleLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const locale = useLocale();
  return <Link href={localizedPath(locale, href)} {...props} />;
}
