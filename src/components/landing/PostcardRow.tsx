import Image from "next/image";
import { copy, photos } from "@/lib/company";

export function PostcardRow() {
  return (
    <section className="py-20">
      <h2 className="px-5 text-sm tracking-[0.16em] uppercase text-neutral-900 sm:px-8">
        {copy.postcardTitle}
      </h2>
      <div className="mt-8 flex gap-3 overflow-x-auto px-5 pb-2 sm:px-8">
        {photos.postcard.map((photo) => (
          <div
            key={photo.src}
            className="relative h-64 w-[78vw] shrink-0 sm:h-80 sm:w-[42vw] lg:w-[28vw]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 42vw, 28vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
