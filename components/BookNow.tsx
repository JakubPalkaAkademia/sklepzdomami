"use client";

import { useBooking } from "@/components/BookingProvider";
import { useDictionary } from "@/components/LocaleProvider";

export function BookNow() {
  const { open, isOpen } = useBooking();
  const booking = useDictionary().booking;

  return (
    <button
      type="button"
      className="vipp-btn"
      onClick={open}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
    >
      {booking.label}
    </button>
  );
}
