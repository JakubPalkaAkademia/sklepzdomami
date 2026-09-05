import { company, copy } from "@/lib/company";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white px-5 py-16 text-sm text-neutral-700 sm:px-8">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-[13px] font-medium tracking-[0.18em] uppercase text-neutral-900">
            {company.brand}
          </p>
          <p className="max-w-sm leading-relaxed">{copy.footerAbout}</p>
          <p className="max-w-sm leading-relaxed text-neutral-500">
            {company.legalName}
          </p>
        </div>
        <div className="space-y-2 leading-relaxed">
          <p className="text-[13px] font-medium tracking-[0.18em] uppercase text-neutral-900">
            Kontakt
          </p>
          <p>{company.addressLine}</p>
          <p>
            <a className="hover:opacity-60" href={company.phoneHref}>
              {company.phoneDisplay}
            </a>
          </p>
          <p>
            <a className="hover:opacity-60" href={`mailto:${company.email}`}>
              {company.email}
            </a>
          </p>
        </div>
        <div className="space-y-2 leading-relaxed">
          <p className="text-[13px] font-medium tracking-[0.18em] uppercase text-neutral-900">
            Spółka
          </p>
          <p>KRS {company.krs}</p>
          <p>NIP {company.nip}</p>
          <p>REGON {company.regon}</p>
          <p>
            <a
              className="hover:opacity-60"
              href={company.facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
      <p className="mx-auto mt-16 max-w-[1400px] text-xs text-neutral-400">
        © {year} {company.legalNameShort}
      </p>
    </footer>
  );
}
