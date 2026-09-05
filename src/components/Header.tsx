import Link from "next/link";
import { company } from "@/lib/company";

const nav = [
  { href: "#o-firmie", label: "Firma" },
  { href: "#informacje", label: "Informacje" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="text-[15px] font-medium tracking-[0.18em] uppercase text-neutral-900"
        >
          {company.brand}
        </Link>
        <nav className="flex items-center gap-6 text-[13px] tracking-[0.12em] uppercase text-neutral-800 sm:gap-10">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-opacity hover:opacity-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
