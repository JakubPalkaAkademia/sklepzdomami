import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";
import { footerCopyright, legalDisclaimer, legalPages, nav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <nav className="site-footer__nav" aria-label="stopka">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
        {legalPages.map((item) => (
          <Link key={item.href} href={item.href}>{item.label}</Link>
        ))}
      </nav>
      <SocialLinks className="site-footer__socials" />
      <p className="site-footer__copyright">{footerCopyright}</p>
      <p className="site-footer__disclaimer">{legalDisclaimer}</p>
    </footer>
  );
}
