import Image from "next/image";
import { company, photos } from "@/lib/company";

export function Coordinates() {
  return (
    <section className="relative h-[70vh] min-h-[26rem] w-full">
      <Image
        src={photos.coordinates.src}
        alt={photos.coordinates.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />
      <p className="absolute inset-x-5 bottom-10 text-center font-mono text-sm tracking-[0.18em] text-white sm:bottom-14 sm:text-lg">
        {company.coordinates.label}
      </p>
    </section>
  );
}
