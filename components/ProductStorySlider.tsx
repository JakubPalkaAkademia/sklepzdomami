"use client";

import { useKeenSlider } from "keen-slider/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useDictionary } from "@/components/LocaleProvider";

const AUTOPLAY_MS = 4000;
const TRANSITION_DURATION_MS = 1000;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export type ProductStorySlide = {
  src: string;
  alt: string;
  fit?: "contain" | "cover";
};

type ProductStorySliderProps = {
  slides: readonly ProductStorySlide[];
};

export function ProductStorySlider({ slides }: ProductStorySliderProps) {
  const dict = useDictionary();
  const sectionRef = useRef<HTMLElement>(null);
  const [loadedBySrc, setLoadedBySrc] = useState<Record<string, boolean>>({});
  const [sliderReady, setSliderReady] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const uniqueSources = useMemo(() => [...new Set(slides.map((slide) => slide.src))], [slides]);
  const firstSlideLoaded = Boolean(loadedBySrc[slides[0]?.src]);
  const isLoading = !sliderReady || !firstSlideLoaded;

  const isSlideLoaded = useCallback(
    (index: number) => Boolean(loadedBySrc[slides[index]?.src]),
    [loadedBySrc, slides],
  );

  const markSourceLoaded = useCallback((src: string) => {
    setLoadedBySrc((prev) => (prev[src] ? prev : { ...prev, [src]: true }));
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    drag: true,
    mode: "snap",
    renderMode: "precision",
    rubberband: true,
    defaultAnimation: {
      duration: TRANSITION_DURATION_MS,
      easing: easeInOutCubic,
    },
    slides: {
      perView: 1,
      spacing: 0,
    },
    created() {
      setSliderReady(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
      setProgressKey((key) => key + 1);
    },
  });

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setProgressKey((key) => key + 1);
          instanceRef.current?.update();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [instanceRef]);

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.visibilityState !== "visible") return;
      setProgressKey((key) => key + 1);
      instanceRef.current?.update();
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [instanceRef]);

  useEffect(() => {
    const cleanups: Array<() => void> = [];

    uniqueSources.forEach((src) => {
      const img = new Image();
      const onLoad = () => markSourceLoaded(src);
      img.addEventListener("load", onLoad);
      img.src = src;
      if (img.complete) {
        onLoad();
      }
      cleanups.push(() => img.removeEventListener("load", onLoad));
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [markSourceLoaded, uniqueSources]);

  useEffect(() => {
    if (isLoading) return;
    instanceRef.current?.update();
  }, [isLoading, instanceRef, slides.length]);

  useEffect(() => {
    if (isLoading || !isVisible || !instanceRef.current) return;

    const timer = window.setTimeout(() => {
      instanceRef.current?.next();
    }, AUTOPLAY_MS);

    return () => window.clearTimeout(timer);
  }, [isLoading, isVisible, currentSlide, progressKey, instanceRef]);

  const handleStoryClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const slider = instanceRef.current;
    if (!slider || isLoading) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    if (x < rect.width * 0.3) {
      slider.prev();
      return;
    }
    if (x > rect.width * 0.7) {
      slider.next();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="m7-product-story"
      aria-label={dict.ui.gallery}
    >
      <div className="m7-product-story__slider-wrapper">
        <div
          ref={sliderRef}
          className={`keen-slider m7-product-story__slider${
            isLoading ? " m7-product-story--loading" : ""
          }`}
          onClick={handleStoryClick}
        >
          {slides.map((slide, index) => (
            <div key={`${slide.src}-${index}`} className="keen-slider__slide">
              <div className="m7-product-story__slide">
                <div
                  className={`m7-product-story__media-wrapper${
                    isSlideLoaded(index) ? " m7-product-story__media-wrapper--loaded" : ""
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className={[
                      "m7-product-story__media",
                      slide.fit === "cover" ? "m7-product-story__media--cover" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onLoad={() => markSourceLoaded(slide.src)}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                  />
                </div>
                <div className="m7-product-story__details">
                  <div className="m7-product-story__topbar-spacer" aria-hidden="true" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="m7-product-story__topbar m7-product-story__absolute-topbar"
          aria-hidden="true"
        >
          {slides.map((slide, index) => {
            const isPast = index < currentSlide;
            const isCurrent = index === currentSlide;

            return (
              <div key={`${slide.src}-${index}`} className="m7-product-story__time-block">
                <div className="m7-product-story__time-bg" />
                <div
                  key={isCurrent ? `active-${progressKey}` : `segment-${index}`}
                  className={[
                    "m7-product-story__time-fg",
                    isPast ? "m7-product-story__time-fg--filled" : "",
                    isCurrent && !isLoading && isVisible ? "m7-product-story__time-fg--active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={
                    isCurrent
                      ? ({ "--fill-duration": `${AUTOPLAY_MS}ms` } as React.CSSProperties)
                      : undefined
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
