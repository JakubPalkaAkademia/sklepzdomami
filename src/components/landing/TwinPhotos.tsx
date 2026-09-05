import Image from "next/image";
import { photos } from "@/lib/company";

export function TwinPhotos() {
  return (
    <section className="bg-[var(--vipp-dark)] px-3 pb-3 sm:px-4">
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        <div className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[640px] lg:min-h-[780px]">
          <Image
            src={photos.pairLeft.src}
            alt={photos.pairLeft.alt}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div className="relative min-h-[420px] overflow-hidden bg-black sm:min-h-[640px] lg:min-h-[780px]">
          <Image
            src={photos.pairRight.src}
            alt={photos.pairRight.alt}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
