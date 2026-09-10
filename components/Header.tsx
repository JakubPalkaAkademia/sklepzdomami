"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LocaleLink } from "@/components/LocaleLink";
import { useDictionary } from "@/components/LocaleProvider";
import { SocialLinks } from "@/components/SocialLinks";
import { isHomePath } from "@/lib/i18n/paths";

export function Header() {
  const pathname = usePathname();
  const dict = useDictionary();
  const isHome = isHomePath(pathname);
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
      <LocaleLink href="/" className="site-header__logo" aria-label={dict.nav.homeAriaLabel}>
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
      </LocaleLink>

      <div className="site-header__end">
        <nav className="site-header__nav" aria-label={dict.nav.ariaLabel}>
          {dict.nav.items.map((item) => (
            <LocaleLink key={item.href} href={item.href}>
              {item.label}
            </LocaleLink>
          ))}
        </nav>
        <LanguageSwitcher />
        <button
          type="button"
          className="site-header__menu-btn"
          aria-label={menuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
          aria-expanded={menuOpen}
          aria-controls="site-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="site-header__menu-icon" aria-hidden="true" />
        </button>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="site-header__backdrop"
          aria-label={dict.nav.closeMenu}
          onClick={closeMenu}
        />
      )}

      <div
        id="site-mobile-menu"
        className={`site-header__drawer${menuOpen ? " site-header__drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="site-header__drawer-nav" aria-label={dict.nav.mobileAriaLabel}>
          {dict.nav.items.map((item) => (
            <LocaleLink key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </LocaleLink>
          ))}
        </nav>
        <LanguageSwitcher />
        <SocialLinks className="site-header__drawer-socials" />
      </div>
    </header>
  );
}
