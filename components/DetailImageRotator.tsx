"use client";

import { useEffect, useState } from "react";

type DetailImage = {
  src: string;
  alt: string;
};

type DetailImageRotatorProps = {
  images: readonly DetailImage[];
  intervalMs?: number;
};

export function DetailImageRotator({ images, intervalMs = 4500 }: DetailImageRotatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className="m5-two__small-rotator" aria-live="polite">
      {images.map((image, index) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={800}
          height={1000}
          loading="lazy"
          decoding="async"
          draggable={false}
          className={[
            "m5-two__small-rotator__img",
            index === activeIndex ? "m5-two__small-rotator__img--active" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        />
      ))}
    </div>
  );
}
