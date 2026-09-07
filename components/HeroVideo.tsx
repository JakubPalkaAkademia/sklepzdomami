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

    const onCanPlay = () => {
      if (video.videoWidth > 0 && video.videoHeight > 0) {
        setVideoReady(true);
        void video.play().catch(() => setVideoReady(false));
      }
    };

    video.addEventListener("loadeddata", onCanPlay);
    video.addEventListener("canplay", onCanPlay);
    return () => {
      video.removeEventListener("loadeddata", onCanPlay);
      video.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  return (
    <div className="m8-hero__media" aria-hidden="true">
      {hero.useVideo && (
        <video
          ref={videoRef}
          className={`m8-hero__video${videoReady ? " m8-hero__video--active" : ""}`}
          autoPlay
          muted
          loop
          playsInline
          poster={hero.poster}
        >
          <source src={hero.videoMp4} type="video/mp4" />
        </video>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="m8-hero__poster" src={hero.poster} alt="" fetchPriority="high" decoding="async" />
    </div>
  );
}
