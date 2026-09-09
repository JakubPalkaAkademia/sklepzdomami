"use client";

import { useEffect, useRef, useState } from "react";
import { hero } from "@/lib/site";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (!hero.useVideo) return;

    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setVideoReady(true);

    const tryPlay = () => {
      void video.play().catch(() => {
        // Autoplay can fail briefly; keep poster visible until a later attempt succeeds.
      });
    };

    video.addEventListener("playing", markReady);
    video.addEventListener("loadeddata", tryPlay);
    video.addEventListener("canplay", tryPlay);

    tryPlay();

    return () => {
      video.removeEventListener("playing", markReady);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
    };
  }, []);

  return (
    <div className="m8-hero__media" aria-hidden="true">
      {hero.useVideo && (
        <video
          ref={videoRef}
          className={`m8-hero__video${videoReady ? " m8-hero__video--active" : ""}`}
          src={hero.videoMp4}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={hero.poster}
          suppressHydrationWarning
        />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`m8-hero__poster${videoReady ? " m8-hero__poster--hidden" : ""}`}
        src={hero.poster}
        alt=""
        fetchPriority="high"
        decoding="async"
        suppressHydrationWarning
      />
    </div>
  );
}
