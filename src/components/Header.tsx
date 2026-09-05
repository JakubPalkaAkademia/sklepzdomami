import Link from "next/link";
import { company } from "@/lib/company";

const nav = [
  { href: "#o-firmie", label: "Firma" },
  { href: "#informacje", label: "Informacje" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white text-black">
      <div className="flex h-[72px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="text-[21px] font-semibold lowercase leading-none tracking-tight"
        >
          {company.brand.toLowerCase()}
        </Link>
        <nav className="flex items-center gap-5 text-[13px] font-normal sm:gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hidden text-[#222325] transition-opacity hover:opacity-50 md:inline"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={company.facebookUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#222325] transition-opacity hover:opacity-50"
          >
            Facebook
          </Link>
          <Link
            href="#kontakt"
            aria-label="Szukaj — kontakt"
            className="text-[#222325] transition-opacity hover:opacity-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.4" />
              <path d="M16 16l5 5" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
