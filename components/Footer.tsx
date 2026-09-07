import { site, studio } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        {site.legalName} · KRS {studio.krs} · NIP {studio.nip}
      </p>
    </footer>
  );
}
