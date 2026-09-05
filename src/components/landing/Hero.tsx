import Image from "next/image";
import { copy, photos } from "@/lib/company";

export function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[32rem] w-full">
      <Image
        src={photos.hero.src}
        alt={photos.hero.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      <p className="absolute bottom-8 left-5 text-sm tracking-[0.16em] text-white sm:bottom-12 sm:left-8 sm:text-base">
        {copy.heroOverlay}
      </p>
    </section>
  );
}
