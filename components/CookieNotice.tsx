"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie_notice_dismissed";

export function CookieNotice() {
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
    <div className="cookie-notice" role="region" aria-label="informacja o plikach cookies">
      <p className="cookie-notice__text">
        Serwis korzysta wyłącznie z niezbędnych plików cookies. Szczegóły w{" "}
        <Link href="/polityka-cookies">polityce cookies</Link> i{" "}
        <Link href="/polityka-prywatnosci">polityce prywatności</Link>.
      </p>
      <button type="button" className="cookie-notice__btn" onClick={dismiss}>
        OK
      </button>
    </div>
  );
}
