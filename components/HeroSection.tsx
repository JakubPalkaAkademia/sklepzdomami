"use client";

import { useEffect, useRef, useState } from "react";
import { HeroVideo } from "@/components/HeroVideo";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  label: string;
};

type ContentPhase = "moving" | "pinned";

function getPinThreshold() {
  return Math.min(280, window.innerHeight * 0.22);
}

export function HeroSection({ title, subtitle, label }: HeroSectionProps) {
  const rootRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef<ContentPhase>("moving");
  const pinnedTopRef = useRef<number | null>(null);
  const [pastHero, setPastHero] = useState(false);
  const [contentPhase, setContentPhase] = useState<ContentPhase>("moving");
  const [pinnedTop, setPinnedTop] = useState<number | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const content = contentRef.current;
    if (!root || !content) return;

    const update = () => {
      const heroBottom = root.getBoundingClientRect().bottom;

      if (heroBottom <= 0) {
        setPastHero(true);
        return;
      }
      setPastHero(false);

      const scrollY = window.scrollY;
      const pinThreshold = getPinThreshold();

      if (scrollY < pinThreshold) {
        if (phaseRef.current !== "moving") {
          phaseRef.current = "moving";
          pinnedTopRef.current = null;
          setPinnedTop(null);
          setContentPhase("moving");
        }
        return;
      }

      if (phaseRef.current === "moving") {
        const top = content.getBoundingClientRect().top;
        phaseRef.current = "pinned";
        pinnedTopRef.current = top;
        setPinnedTop(top);
        setContentPhase("pinned");
      }
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  const contentClass = [
    "m8-hero__content",
    "shelter-grid",
    contentPhase === "pinned" ? "m8-hero__content--pinned" : "m8-hero__content--moving",
  ].join(" ");

  const contentStyle =
    contentPhase === "pinned" && pinnedTop !== null
      ? ({ "--hero-content-top": `${pinnedTop}px` } as React.CSSProperties)
      : undefined;

  return (
    <section
      ref={rootRef}
      className={`m8-hero${pastHero ? " m8-hero--past" : ""}`}
      aria-label={label}
    >
      <div className="m8-hero__wrapper" aria-hidden="true">
        <HeroVideo />
      </div>
      <div ref={contentRef} className={contentClass} style={contentStyle}>
        <div className="m8-hero__title-wrap">
          <p className="t-neue-50">{title}</p>
          <p className="t-neue-14 m8-hero__tagline">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
