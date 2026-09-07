"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  addMonths,
  buildVisitMailto,
  formatVisitDateShort,
  getMonthGrid,
  getMonthLabel,
  getWeekdayLabels,
  isBeforeDay,
  isSameDay,
  startOfDay,
} from "@/lib/booking";
import { booking, investment, studio } from "@/lib/site";

function MonthCalendar({
  monthDate,
  today,
  selectedDate,
  onSelect,
}: {
  monthDate: Date;
  today: Date;
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
}) {
  const grid = getMonthGrid(monthDate.getFullYear(), monthDate.getMonth());

  return (
    <div className="book-calendar__month-block">
      <p className="book-calendar__month-title">
        {getMonthLabel(monthDate.getFullYear(), monthDate.getMonth())}
      </p>
      <div className="book-calendar__weekdays" aria-hidden="true">
        {getWeekdayLabels().map((day) => (
          <span key={`${monthDate.getMonth()}-${day}`} className="book-calendar__weekday">
            {day}
          </span>
        ))}
      </div>
      <div className="book-calendar__grid">
        {grid.map((date, index) => {
          if (!date) return <span key={`e-${index}`} className="book-calendar__cell" />;
          const disabled = isBeforeDay(date, today);
          const selected = selectedDate ? isSameDay(date, selectedDate) : false;
          return (
            <button
              key={date.toISOString()}
              type="button"
              className={[
                "book-calendar__cell",
                disabled ? "book-calendar__cell--disabled" : "book-calendar__cell--available",
                selected ? "book-calendar__cell--selected" : "",
              ].filter(Boolean).join(" ")}
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

export function BookNow() {
  const [open, setOpen] = useState(false);
  const [visibleMonth, setVisibleMonth] = useState(() => startOfDay(new Date()));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>(booking.visitTimes[2]);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const today = startOfDay(new Date());

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.documentElement.classList.add("booking-open");
    document.addEventListener("keydown", onKeyDown);
    panelRef.current?.focus();
    return () => {
      document.documentElement.classList.remove("booking-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [close, open]);

  const months = [0, 1, 2].map((i) => addMonths(visibleMonth, i));
  const mailtoHref =
    selectedDate &&
    buildVisitMailto({
      email: studio.email,
      subject: `${booking.mailtoSubject} — ${formatVisitDateShort(selectedDate)} ${selectedTime}`,
      date: selectedDate,
      time: selectedTime,
      locationLine: investment.address,
      phone: studio.phone,
    });

  return (
    <>
      <button ref={triggerRef} type="button" className="vipp-btn" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>
        {booking.label}
      </button>

      {open && (
        <div className="book-overlay" onClick={close} role="presentation">
          <div ref={panelRef} className="book-panel" role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1} onClick={(e) => e.stopPropagation()}>
            <header className="book-panel__header">
              <div>
                <h2 id={titleId} className="book-panel__title">{booking.panelTitle}</h2>
                <p className="book-panel__subtitle">{booking.panelSubtitle}</p>
                <p className="book-panel__location">{booking.locationLine}</p>
              </div>
              <button type="button" className="book-panel__close" onClick={close} aria-label="zamknij">×</button>
            </header>
            <div className="book-panel__body">
              <div>
                <span className="book-panel__field-label">{booking.dateLabel}</span>
                <div className="book-calendar__nav">
                  <button type="button" className="book-calendar__nav-btn" onClick={() => setVisibleMonth((c) => addMonths(c, -1))} aria-label="poprzedni miesiąc">‹</button>
                  <button type="button" className="book-calendar__nav-btn" onClick={() => setVisibleMonth((c) => addMonths(c, 1))} aria-label="następny miesiąc">›</button>
                </div>
                <div className="book-calendar__months">
                  {months.map((m) => (
                    <MonthCalendar key={`${m.getFullYear()}-${m.getMonth()}`} monthDate={m} today={today} selectedDate={selectedDate} onSelect={setSelectedDate} />
                  ))}
                </div>
                <div className="book-calendar__legend" aria-hidden="true">
                  <span className="book-calendar__legend-item book-calendar__legend-item--available">dostępne</span>
                  <span className="book-calendar__legend-item book-calendar__legend-item--selected">wybrane</span>
                </div>
              </div>
              <div>
                <span className="book-panel__field-label">{booking.timeLabel}</span>
                <div className="book-times">
                  {booking.visitTimes.map((time) => (
                    <button key={time} type="button" className={`book-times__slot${selectedTime === time ? " book-times__slot--selected" : ""}`} onClick={() => setSelectedTime(time)}>{time}</button>
                  ))}
                </div>
              </div>
            </div>
            <footer className="book-panel__footer">
              {selectedDate && mailtoHref ? (
                <a href={mailtoHref} className="book-panel__confirm" onClick={close}>{booking.confirmLabel}</a>
              ) : (
                <button type="button" className="book-panel__confirm" disabled>{booking.confirmLabel}</button>
              )}
              <p className="book-panel__hint">{booking.confirmHint}</p>
              <a href={studio.phoneHref} className="book-panel__phone">{studio.phone}</a>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}
