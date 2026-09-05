import Image from "next/image";
import { company, photos } from "@/lib/company";

export function Coordinates() {
  return (
    <section className="relative h-[70vh] min-h-[400px] w-full overflow-hidden bg-black">
      <Image
        src={photos.coordinates.src}
        alt={photos.coordinates.alt}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/20" />
      <p className="absolute bottom-8 left-4 z-10 font-display text-[22px] font-light text-white sm:bottom-12 sm:left-10 sm:text-[32px]">
        {company.coordinates.label}
      </p>
    </section>
  );
}
