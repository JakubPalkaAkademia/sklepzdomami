"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useBooking } from "@/components/BookingProvider";
import { useDictionary, useLocale } from "@/components/LocaleProvider";
import {
  addMonths,
  formatDateKey,
  formatVisitDate,
  getAvailableTimesForDate,
  getMonthGrid,
  getMonthLabel,
  getWeekdayLabels,
  hasAvailableTimesOnDate,
  isBeforeDay,
  isSameDay,
  isSlotBooked,
  startOfDay,
  type BookedSlot,
} from "@/lib/booking";
import { studio, visitTimes } from "@/lib/site";

type BookingStep = "datetime" | "details" | "success";

type SuccessData = {
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  googleCalendarUrl: string;
  icsContent: string;
};

function MonthCalendar({
  monthDate,
  today,
  selectedDate,
  bookedSlots,
  onSelect,
  locale,
}: {
  monthDate: Date;
  today: Date;
  selectedDate: Date | null;
  bookedSlots: BookedSlot[];
  onSelect: (date: Date) => void;
  locale: ReturnType<typeof useLocale>;
}) {
  const grid = getMonthGrid(monthDate.getFullYear(), monthDate.getMonth());

  return (
    <div className="book-calendar__month-block">
      <p className="book-calendar__month-title">
        {getMonthLabel(monthDate.getFullYear(), monthDate.getMonth(), locale)}
      </p>
      <div className="book-calendar__weekdays" aria-hidden="true">
        {getWeekdayLabels(locale).map((day, index) => (
          <span key={`${monthDate.getMonth()}-${index}`} className="book-calendar__weekday">
            {day}
          </span>
        ))}
      </div>
      <div className="book-calendar__grid">
        {grid.map((date, index) => {
          if (!date) {
            return <span key={`e-${index}`} className="book-calendar__cell" />;
          }

          const isPast = isBeforeDay(date, today);
          const hasSlots = hasAvailableTimesOnDate(date, visitTimes, bookedSlots, today);
          const disabled = isPast || !hasSlots;
          const selected = selectedDate ? isSameDay(date, selectedDate) : false;
          const fullyBooked = !isPast && !hasSlots;

          return (
            <button
              key={date.toISOString()}
              type="button"
              className={[
                "book-calendar__cell",
                disabled ? "book-calendar__cell--disabled" : "book-calendar__cell--available",
                fullyBooked ? "book-calendar__cell--booked" : "",
                selected ? "book-calendar__cell--selected" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              disabled={disabled}
              aria-pressed={selected}
              onClick={() => onSelect(date)}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function downloadIcs(content: string, filename: string) {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export function BookingDialog() {
  const { isOpen, close } = useBooking();
  const dict = useDictionary();
  const locale = useLocale();
  const booking = dict.booking;

  const [step, setStep] = useState<BookingStep>("datetime");
  const [visibleMonth, setVisibleMonth] = useState(() => startOfDay(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>(visitTimes[0]);
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([]);
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successData, setSuccessData] = useState<SuccessData | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const today = startOfDay(new Date());

  const resetForm = useCallback(() => {
    setStep("datetime");
    setSelectedDate(null);
    setSelectedTime(visitTimes[0]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setErrorMessage("");
    setSuccessData(null);
    setVisibleMonth(startOfDay(new Date()));
  }, []);

  const handleClose = useCallback(() => {
    close();
    resetForm();
  }, [close, resetForm]);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 834px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    document.documentElement.classList.add("booking-open");
    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.focus();

    return () => {
      document.documentElement.classList.remove("booking-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [handleClose, isOpen]);

  const fetchAvailability = useCallback(async () => {
    setLoadingAvailability(true);
    try {
      const from = formatDateKey(new Date());
      const toDate = addMonths(new Date(), 3);
      const to = formatDateKey(new Date(toDate.getFullYear(), toDate.getMonth() + 1, 0));
      const response = await fetch(`/api/booking/availability?from=${from}&to=${to}`);
      const result = (await response.json()) as { ok: boolean; booked?: BookedSlot[] };
      if (result.ok && result.booked) {
        setBookedSlots(result.booked);
      }
    } catch {
      setBookedSlots([]);
    } finally {
      setLoadingAvailability(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      fetchAvailability();
    }
  }, [fetchAvailability, isOpen]);

  const months = isMobile
    ? [visibleMonth]
    : [0, 1, 2].map((i) => addMonths(visibleMonth, i));

  const selectedDateKey = selectedDate ? formatDateKey(selectedDate) : null;
  const availableTimes = useMemo(
    () =>
      selectedDate
        ? getAvailableTimesForDate(selectedDate, visitTimes, bookedSlots, today)
        : [],
    [selectedDate, bookedSlots, today],
  );

  useEffect(() => {
    if (availableTimes.length > 0 && !availableTimes.includes(selectedTime)) {
      setSelectedTime(availableTimes[0]);
    }
  }, [availableTimes, selectedTime]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    const times = getAvailableTimesForDate(date, visitTimes, bookedSlots, today);
    if (times.length > 0) {
      setSelectedTime(times[0]);
    }
  };

  const canProceedToDetails =
    selectedDate !== null &&
    selectedDateKey !== null &&
    availableTimes.includes(selectedTime) &&
    !isSlotBooked(bookedSlots, selectedDateKey, selectedTime);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedDateKey) return;

    setSubmitting(true);
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: selectedDateKey,
          time: selectedTime,
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          website: formData.get("website"),
          locale,
        }),
      });

      const result = (await response.json()) as {
        ok: boolean;
        error?: string;
        booking?: SuccessData;
      };

      if (!response.ok || !result.ok || !result.booking) {
        if (response.status === 409) {
          await fetchAvailability();
        }
        setErrorMessage(result.error ?? booking.errors.sendFailed);
        return;
      }

      setSuccessData(result.booking);
      setStep("success");
    } catch {
      setErrorMessage(booking.errors.sendFailed);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  const dialog = (
    <div className="book-overlay" onClick={handleClose} role="presentation">
      <div
        ref={panelRef}
        className="book-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="book-panel__header">
          <div>
            <h2 id={titleId} className="book-panel__title">
              {step === "success" ? booking.successTitle : booking.panelTitle}
            </h2>
            <p className="book-panel__subtitle">
              {step === "success" ? booking.successSubtitle : booking.panelSubtitle}
            </p>
            {step !== "success" && (
              <p className="book-panel__location">{booking.locationLine}</p>
            )}
          </div>
          <button
            type="button"
            className="book-panel__close"
            onClick={handleClose}
            aria-label={booking.close}
          >
            ×
          </button>
        </header>

        {step === "datetime" && (
          <>
            <div className="book-panel__steps" aria-label={booking.stepLabel}>
              <span className="book-panel__step book-panel__step--active">
                1. {booking.stepDateTime}
              </span>
              <span className="book-panel__step">2. {booking.stepDetails}</span>
            </div>
            <div className="book-panel__body">
              <div>
                <span className="book-panel__field-label">{booking.dateLabel}</span>
                <div className="book-calendar__nav">
                  <button
                    type="button"
                    className="book-calendar__nav-btn"
                    onClick={() => setVisibleMonth((current) => addMonths(current, -1))}
                    aria-label={booking.prevMonth}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    className="book-calendar__nav-btn"
                    onClick={() => setVisibleMonth((current) => addMonths(current, 1))}
                    aria-label={booking.nextMonth}
                  >
                    ›
                  </button>
                </div>
                {loadingAvailability && (
                  <p className="book-panel__loading">{booking.loadingAvailability}</p>
                )}
                <div className="book-calendar__months">
                  {months.map((monthDate) => (
                    <MonthCalendar
                      key={`${monthDate.getFullYear()}-${monthDate.getMonth()}`}
                      monthDate={monthDate}
                      today={today}
                      selectedDate={selectedDate}
                      bookedSlots={bookedSlots}
                      onSelect={handleDateSelect}
                      locale={locale}
                    />
                  ))}
                </div>
                <div className="book-calendar__legend" aria-hidden="true">
                  <span className="book-calendar__legend-item book-calendar__legend-item--available">
                    {booking.available}
                  </span>
                  <span className="book-calendar__legend-item book-calendar__legend-item--booked">
                    {booking.booked}
                  </span>
                  <span className="book-calendar__legend-item book-calendar__legend-item--selected">
                    {booking.selected}
                  </span>
                </div>
              </div>
              <div>
                <span className="book-panel__field-label">{booking.timeLabel}</span>
                <div className="book-times">
                  {visitTimes.map((time) => {
                    const isBooked =
                      selectedDateKey !== null &&
                      isSlotBooked(bookedSlots, selectedDateKey, time);
                    const isPast =
                      selectedDate !== null &&
                      isSameDay(selectedDate, today) &&
                      !getAvailableTimesForDate(selectedDate, visitTimes, bookedSlots, today).includes(time);
                    const disabled = !selectedDate || isBooked || isPast;

                    return (
                      <button
                        key={time}
                        type="button"
                        className={[
                          "book-times__slot",
                          selectedTime === time ? "book-times__slot--selected" : "",
                          disabled ? "book-times__slot--disabled" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        disabled={disabled}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            <footer className="book-panel__footer">
              <button
                type="button"
                className="book-panel__confirm"
                disabled={!canProceedToDetails}
                onClick={() => setStep("details")}
              >
                {booking.nextLabel}
              </button>
              <a href={studio.phoneHref} className="book-panel__phone">
                {studio.phone}
              </a>
            </footer>
          </>
        )}

        {step === "details" && selectedDate && (
          <>
            <div className="book-panel__steps" aria-label={booking.stepLabel}>
              <span className="book-panel__step">1. {booking.stepDateTime}</span>
              <span className="book-panel__step book-panel__step--active">
                2. {booking.stepDetails}
              </span>
            </div>
            <form className="book-panel__body book-panel__form" onSubmit={handleSubmit} noValidate>
              <p className="book-panel__summary">
                {booking.selectedSummary
                  .replace("{date}", formatVisitDate(selectedDate, locale))
                  .replace("{time}", selectedTime)}
              </p>

              <div className="book-form__field">
                <label className="book-form__label" htmlFor="booking-first-name">
                  {booking.firstNameLabel}
                </label>
                <input
                  id="booking-first-name"
                  name="firstName"
                  type="text"
                  className="book-form__input"
                  autoComplete="given-name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={submitting}
                />
              </div>

              <div className="book-form__field">
                <label className="book-form__label" htmlFor="booking-last-name">
                  {booking.lastNameLabel}
                </label>
                <input
                  id="booking-last-name"
                  name="lastName"
                  type="text"
                  className="book-form__input"
                  autoComplete="family-name"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={submitting}
                />
              </div>

              <div className="book-form__field">
                <label className="book-form__label" htmlFor="booking-email">
                  {booking.emailLabel}
                </label>
                <input
                  id="booking-email"
                  name="email"
                  type="email"
                  className="book-form__input"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                />
              </div>

              <div className="book-form__field">
                <label className="book-form__label" htmlFor="booking-phone">
                  {booking.phoneLabel}
                </label>
                <input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  className="book-form__input"
                  autoComplete="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={submitting}
                />
              </div>

              <input
                type="text"
                name="website"
                className="book-form__honeypot"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {errorMessage && (
                <p className="book-panel__error" role="alert">{errorMessage}</p>
              )}

              <footer className="book-panel__footer book-panel__footer--inline">
                <button
                  type="button"
                  className="book-panel__back"
                  onClick={() => setStep("datetime")}
                  disabled={submitting}
                >
                  {booking.backLabel}
                </button>
                <button
                  type="submit"
                  className="book-panel__confirm"
                  disabled={submitting}
                >
                  {submitting ? booking.submittingLabel : booking.confirmLabel}
                </button>
              </footer>
            </form>
          </>
        )}

        {step === "success" && successData && (
          <div className="book-panel__body book-panel__success">
            <p className="book-panel__success-message">{booking.successMessage}</p>
            <p className="book-panel__summary">
              {booking.selectedSummary
                .replace(
                  "{date}",
                  formatVisitDate(
                    new Date(
                      Number(successData.date.slice(0, 4)),
                      Number(successData.date.slice(5, 7)) - 1,
                      Number(successData.date.slice(8, 10)),
                    ),
                    locale,
                  ),
                )
                .replace("{time}", successData.time)}
            </p>
            <p className="book-panel__success-hint">{booking.addToCalendarHint}</p>
            <div className="book-panel__calendar-actions">
              <a
                href={successData.googleCalendarUrl}
                className="book-panel__calendar-btn book-panel__calendar-btn--google"
                target="_blank"
                rel="noopener noreferrer"
              >
                {booking.addToGoogle}
              </a>
              <button
                type="button"
                className="book-panel__calendar-btn book-panel__calendar-btn--apple"
                onClick={() =>
                  downloadIcs(successData.icsContent, "wizyta-szmaragdowa-7.ics")
                }
              >
                {booking.addToApple}
              </button>
            </div>
            <footer className="book-panel__footer book-panel__footer--inline">
              <button type="button" className="book-panel__confirm" onClick={handleClose}>
                {booking.closeSuccess}
              </button>
            </footer>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(dialog, document.body);
}
