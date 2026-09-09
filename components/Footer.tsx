import { legalDisclaimer } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <p className="site-footer__disclaimer">{legalDisclaimer}</p>
    </footer>
  );
}
