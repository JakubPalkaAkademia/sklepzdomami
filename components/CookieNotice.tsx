"use client";

import { useEffect, useState } from "react";
import { LocaleLink } from "@/components/LocaleLink";
import { useDictionary } from "@/components/LocaleProvider";

const STORAGE_KEY = "cookie_notice_dismissed";

export function CookieNotice() {
  const dict = useDictionary();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      if (!dismissed) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage errors
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-notice" role="region" aria-label={dict.cookieNotice.ariaLabel}>
      <p className="cookie-notice__text">
        {dict.cookieNotice.beforeLinks}
        <LocaleLink href="/polityka-cookies">{dict.cookieNotice.cookiesLink}</LocaleLink>
        {dict.cookieNotice.betweenLinks}
        <LocaleLink href="/polityka-prywatnosci">{dict.cookieNotice.privacyLink}</LocaleLink>
        {dict.cookieNotice.afterLinks}
      </p>
      <button type="button" className="cookie-notice__btn" onClick={dismiss}>
        {dict.cookieNotice.ok}
      </button>
    </div>
  );
}
