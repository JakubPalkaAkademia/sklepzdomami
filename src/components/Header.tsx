"use client";

import Link from "next/link";
import { useCart } from "@/components/useCart";

export function Header() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="text-2xl" aria-hidden>
            🏡
          </span>
          <span>
            sklep<span className="text-indigo-600">z</span>domami
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-indigo-600">
            Oferty
          </Link>
          <Link
            href="/koszyk"
            className="relative rounded-full bg-indigo-600 px-4 py-2 text-white transition hover:bg-indigo-700"
            data-testid="cart-link"
          >
            Koszyk
            {count > 0 && (
              <span
                className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-amber-400 px-1.5 text-xs font-bold text-black"
                data-testid="cart-count"
              >
                {count}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
