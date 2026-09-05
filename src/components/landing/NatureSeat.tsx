import Image from "next/image";
import { copy, photos } from "@/lib/company";

export function NatureSeat() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="relative min-h-[22rem] md:min-h-[32rem]">
        <Image
          src={photos.nature.src}
          alt={photos.nature.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center px-5 py-14 sm:px-12">
        <h2 className="text-2xl tracking-[0.08em] text-neutral-900 sm:text-3xl">
          {copy.natureTitle}
        </h2>
        <p className="mt-6 max-w-md leading-[1.7] text-neutral-600">
          {copy.natureBody}
        </p>
        <a
          href="#informacje"
          className="mt-8 text-[13px] tracking-[0.14em] uppercase underline decoration-neutral-300 underline-offset-8 hover:decoration-neutral-900"
        >
          {copy.readMore}
        </a>
      </div>
    </section>
  );
}
