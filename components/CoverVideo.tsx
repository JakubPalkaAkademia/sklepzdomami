"use client";

import { useEffect, useRef, useState } from "react";
import { hero } from "@/lib/site";

export function CoverVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const markReady = () => setVideoReady(true);

    const tryPlay = () => {
      void video.play().catch(() => {
        // Retry when the browser allows playback (e.g. after scroll into view).
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (video.readyState < 2) {
            video.load();
          }
          tryPlay();
          return;
        }

        video.pause();
      },
      { rootMargin: "120px 0px", threshold: 0.01 },
    );

    observer.observe(video);
    video.addEventListener("playing", markReady);
    video.addEventListener("canplay", tryPlay);

    return () => {
      observer.disconnect();
      video.removeEventListener("playing", markReady);
      video.removeEventListener("canplay", tryPlay);
      video.pause();
    };
  }, []);

  return (
    <div className="loop-video loop-video--cover" aria-hidden="true">
      <video
        ref={videoRef}
        className={`loop-video__video${videoReady ? " loop-video__video--active" : ""}`}
        src={hero.coverVideoMp4}
        muted
        loop
        playsInline
        preload="auto"
        poster={hero.poster}
        suppressHydrationWarning
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`loop-video__poster${videoReady ? " loop-video__poster--hidden" : ""}`}
        src={hero.poster}
        alt=""
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
