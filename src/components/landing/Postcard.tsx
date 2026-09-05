import Image from "next/image";
import { copy, photos } from "@/lib/company";

export function Postcard() {
  return (
    <section className="bg-[var(--vipp-dark)] px-4 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="font-display text-[28px] font-light text-white sm:text-[36px]">
          {copy.postcardTitle}
        </h2>
        <p className="mt-4 max-w-[520px] text-[15px] font-light leading-[1.7] text-[var(--vipp-muted)]">
          {copy.postcardLead}
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
          {photos.postcard.map((photo) => (
            <div key={photo.src} className="relative aspect-[3/4] overflow-hidden bg-black">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1100px) 540px, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
