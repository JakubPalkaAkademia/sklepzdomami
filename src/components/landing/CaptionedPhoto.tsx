import Image from "next/image";
import type { CaptionedBlock } from "@/lib/company";

export function CaptionedPhoto({ block }: { block: CaptionedBlock }) {
  return (
    <figure>
      <div className="relative h-[62vh] min-h-[22rem] w-full">
        <Image
          src={block.image}
          alt={block.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="mx-auto max-w-xl px-5 py-10 sm:px-8">
        <p className="text-sm tracking-[0.14em] uppercase text-neutral-900">
          {block.title}
        </p>
        <p className="mt-3 leading-relaxed text-neutral-600">{block.body}</p>
      </figcaption>
    </figure>
  );
}
