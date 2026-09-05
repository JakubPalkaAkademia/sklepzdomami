import Image from "next/image";
import { copy, photos } from "@/lib/company";

export function Hero() {
  return (
    <section className="relative h-[72vh] min-h-[420px] w-full overflow-hidden bg-black sm:h-[86vh]">
      <Image
        src={photos.hero.src}
        alt={photos.hero.alt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/15" />
      <h1 className="absolute bottom-10 left-4 z-10 font-display text-[22px] font-light leading-none text-white sm:bottom-14 sm:left-10 sm:text-[28px]">
        {copy.heroOverlay}
      </h1>
    </section>
  );
}
