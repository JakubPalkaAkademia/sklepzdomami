"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useDictionary } from "@/components/LocaleProvider";

type DayNightCompareProps = {
  daySrc: string;
  nightSrc: string;
  dayAlt: string;
  nightAlt: string;
};

export function DayNightCompare({ daySrc, nightSrc, dayAlt, nightAlt }: DayNightCompareProps) {
  const dict = useDictionary();
  const rootRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const root = rootRef.current;
    if (!root) return;

    const rect = root.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      if (!draggingRef.current) return;
      updateFromClientX(event.clientX);
    };

    const onPointerUp = () => {
      draggingRef.current = false;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, [updateFromClientX]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  };

  return (
    <section className="day-night-compare" aria-label={dict.ui.dayNightCompare}>
      <div
        ref={rootRef}
        className="day-night-compare__frame"
        onPointerDown={onPointerDown}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="day-night-compare__img day-night-compare__img--day" src={daySrc} alt={dayAlt} draggable={false} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="day-night-compare__img day-night-compare__img--night"
          src={nightSrc}
          alt={nightAlt}
          draggable={false}
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />
        <div className="day-night-compare__handle" style={{ left: `${position}%` }} aria-hidden="true">
          <span className="day-night-compare__knob" />
        </div>
      </div>
    </section>
  );
}
