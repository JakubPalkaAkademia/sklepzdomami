"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AppleCalendarIcon,
  CheckIcon,
  GoogleCalendarIcon,
} from "@/components/BookingIcons";
import { useDictionary, useLocale } from "@/components/LocaleProvider";
import { formatVisitDate } from "@/lib/booking";
import {
  clearBookingConfirmation,
  downloadIcsFile,
  readBookingConfirmation,
  type BookingConfirmationPayload,
} from "@/lib/booking-confirmation";
import { localizedPath } from "@/lib/i18n/paths";

export function BookingConfirmationGate() {
  const router = useRouter();
  const locale = useLocale();
  const dict = useDictionary();
  const booking = dict.booking;
  const [data, setData] = useState<BookingConfirmationPayload | null | undefined>(undefined);

  useEffect(() => {
    const payload = readBookingConfirmation();
    if (!payload) {
      router.replace(localizedPath(locale, "/"));
      return;
    }
    setData(payload);
  }, [locale, router]);

  if (data === undefined) {
    return <p className="page__text">{booking.loadingAvailability}</p>;
  }

  if (!data) {
    return null;
  }

  const visitDate = new Date(
    Number(data.date.slice(0, 4)),
    Number(data.date.slice(5, 7)) - 1,
    Number(data.date.slice(8, 10)),
  );

  return (
    <div className="book-confirmation">
      <div className="book-panel__success-badge book-confirmation__badge" aria-hidden="true">
        <CheckIcon />
      </div>
      <p className="t-neue-13-caps book-confirmation__eyebrow">{booking.successSubtitle}</p>
      <h1 className="page__title book-confirmation__title">{booking.successTitle}</h1>
      <p className="page__text book-confirmation__message">{booking.successMessage}</p>

      <div className="book-panel__summary-card book-confirmation__summary">
        <p className="book-panel__summary-label">{booking.dateLabel}</p>
        <p className="book-panel__summary-value">{formatVisitDate(visitDate, locale)}</p>
        <p className="book-panel__summary-label">{booking.timeLabel}</p>
        <p className="book-panel__summary-value">{data.time}</p>
        <p className="book-panel__summary-label">{booking.locationLine}</p>
      </div>

      <p className="book-panel__success-hint">{booking.addToCalendarHint}</p>
      <div className="book-panel__calendar-actions book-confirmation__calendar-actions">
        <a
          href={data.googleCalendarUrl}
          className="book-panel__calendar-btn book-panel__calendar-btn--google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GoogleCalendarIcon />
          <span>{booking.addToGoogle}</span>
        </a>
        <button
          type="button"
          className="book-panel__calendar-btn book-panel__calendar-btn--apple"
          onClick={() => downloadIcsFile(data.icsContent, "wizyta-szmaragdowa-7.ics")}
        >
          <AppleCalendarIcon />
          <span>{booking.addToApple}</span>
        </button>
      </div>

      <p className="page__text book-confirmation__home">
        <Link
          href={localizedPath(locale, "/")}
          className="book-confirmation__home-link"
          onClick={() => clearBookingConfirmation()}
        >
          {booking.backToSite}
        </Link>
      </p>
    </div>
  );
}
