"use client";

import { LocaleLink } from "@/components/LocaleLink";
import { useDictionary } from "@/components/LocaleProvider";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const dict = useDictionary();

  return (
    <footer className="site-footer">
      <nav className="site-footer__nav" aria-label={dict.footer.ariaLabel}>
        {dict.nav.items.map((item) => (
          <LocaleLink key={item.href} href={item.href}>{item.label}</LocaleLink>
        ))}
        {dict.footer.legalPages.map((item) => (
          <LocaleLink key={item.href} href={item.href}>{item.label}</LocaleLink>
        ))}
      </nav>
      <SocialLinks className="site-footer__socials" />
      <p className="site-footer__copyright">{dict.footer.copyright}</p>
      <p className="site-footer__disclaimer">{dict.footer.disclaimer}</p>
    </footer>
  );
}
