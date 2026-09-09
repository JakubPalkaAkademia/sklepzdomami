"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { SocialLinks } from "@/components/SocialLinks";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setPastHero(false);
      return;
    }

    const hero = document.querySelector(".m8-hero");

    const onScroll = () => {
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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", menuOpen);
    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const headerClass = [
    "site-header",
    isHome ? "site-header--shelter" : "site-header--light",
    isHome && pastHero ? "site-header--scrolled" : "",
    menuOpen ? "site-header--menu-open" : "",
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

      <button
        type="button"
        className="site-header__menu-btn"
        aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={menuOpen}
        aria-controls="site-mobile-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="site-header__menu-icon" aria-hidden="true" />
      </button>

      {menuOpen && (
        <button
          type="button"
          className="site-header__backdrop"
          aria-label="Zamknij menu"
          onClick={closeMenu}
        />
      )}

      <div
        id="site-mobile-menu"
        className={`site-header__drawer${menuOpen ? " site-header__drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="site-header__drawer-nav" aria-label="menu mobilne">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>
        <SocialLinks className="site-header__drawer-socials" />
      </div>
    </header>
  );
}
