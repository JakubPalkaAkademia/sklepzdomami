"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setPastHero(false);
      return;
    }

    const hero = document.querySelector(".m8-hero");

    const onScroll = () => {
      // Switch soon after scroll starts — not after the full 100vh hero leaves the viewport.
      const scrolled = window.scrollY > 32;
      if (!hero) {
        setPastHero(scrolled);
        return;
      }
      const heroBottom = hero.getBoundingClientRect().bottom;
      const heroLeaving = heroBottom < window.innerHeight * 0.92;
      setPastHero(scrolled || heroLeaving);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  const headerClass = [
    "site-header",
    isHome ? "site-header--shelter" : "site-header--light",
    isHome && pastHero ? "site-header--scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <Link href="/" className="site-header__logo" aria-label="sklep z domami">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="site-header__logo-img site-header__logo-img--light"
          src="/logo-wordmark-white.png"
          alt=""
          width={148}
          height={24}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="site-header__logo-img site-header__logo-img--dark"
          src="/logo-wordmark.png"
          alt=""
          width={148}
          height={24}
        />
      </Link>
      <nav className="site-header__nav" aria-label="nawigacja">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
