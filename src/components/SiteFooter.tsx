import { company, copy } from "@/lib/company";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white px-6 py-16 text-[13px] font-light text-black sm:px-10 sm:py-20">
      <div className="mx-auto grid max-w-[1400px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="mb-5 text-[16px] font-semibold lowercase">{company.brand.toLowerCase()}</p>
          <p className="max-w-xs leading-relaxed text-black/70">{copy.footerAbout}</p>
          <p className="mt-4 leading-relaxed">{company.legalName}</p>
          <p className="mt-3">{company.addressLine}</p>
        </div>
        <div>
          <p className="mb-4 text-[12px] text-black/45">Firma</p>
          <a className="block py-0.5 hover:opacity-50" href="#o-firmie">
            O nas
          </a>
          <a className="block py-0.5 hover:opacity-50" href="#informacje">
            Informacje
          </a>
          <a className="block py-0.5 hover:opacity-50" href="#kontakt">
            Kontakt
          </a>
        </div>
        <div>
          <p className="mb-4 text-[12px] text-black/45">Kontakt</p>
          <a className="block py-0.5 hover:opacity-50" href={company.phoneHref}>
            {company.phoneDisplay}
          </a>
          <a className="block py-0.5 hover:opacity-50" href={company.emailHref}>
            {company.email}
          </a>
        </div>
        <div>
          <p className="mb-4 text-[12px] text-black/45">Spółka</p>
          <p>KRS {company.krs}</p>
          <p>NIP {company.nip}</p>
          <p>REGON {company.regon}</p>
          <p className="mt-3">
            {company.partners[0]}, {company.partners[1]}
          </p>
          <p className="mt-1 text-black/60">{company.representation}</p>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-[1400px] flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-8">
        <a
          href={company.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-50"
        >
          Facebook
        </a>
        <p className="text-black/45">
          © {year} {company.brand}
        </p>
      </div>
    </footer>
  );
}
