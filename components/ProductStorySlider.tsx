"use client";

import { useKeenSlider } from "keen-slider/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import "keen-slider/keen-slider.min.css";

const AUTOPLAY_MS = 4000;
const TRANSITION_DURATION_MS = 1000;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
export const PRODUCT_STORY_SLIDE_COUNT = 24;

export type ProductStorySlide = {
  src: string;
  alt: string;
};

type ProductStorySliderProps = {
  slides: readonly ProductStorySlide[];
};

export function ProductStorySlider({ slides }: ProductStorySliderProps) {
  const [loadedBySrc, setLoadedBySrc] = useState<Record<string, boolean>>({});
  const [sliderReady, setSliderReady] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

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
    if (isLoading || !instanceRef.current) return;

    const timer = window.setTimeout(() => {
      instanceRef.current?.next();
    }, AUTOPLAY_MS);

    return () => window.clearTimeout(timer);
  }, [isLoading, currentSlide, progressKey, instanceRef]);

  return (
    <section className="m7-product-story" aria-label="galeria zdjęć z budowy">
      <div className="m7-product-story__slider-wrapper">
        <div
          ref={sliderRef}
          className={`keen-slider m7-product-story__slider${
            isLoading ? " m7-product-story--loading" : ""
          }`}
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
                    className="m7-product-story__media"
                    onLoad={() => markSourceLoaded(slide.src)}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
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
          <div
            className="m7-product-story__time-block"
            style={{ "--fill-duration": `${AUTOPLAY_MS}ms` } as React.CSSProperties}
          >
            <div className="m7-product-story__time-bg" />
            <div
              key={progressKey}
              className={`m7-product-story__time-fg${
                !isLoading ? " m7-product-story__time-fg--active" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
