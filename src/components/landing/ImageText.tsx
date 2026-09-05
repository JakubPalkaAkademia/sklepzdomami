import type { ReactNode } from "react";
import Image from "next/image";
import { copy } from "@/lib/company";

type ImageTextProps = {
  src: string;
  alt: string;
  reverse?: boolean;
  moreHref?: string;
  children: ReactNode;
};

export function ImageText({ src, alt, reverse, moreHref = "#informacje", children }: ImageTextProps) {
  return (
    <section className="bg-[var(--vipp-dark)] px-3 py-3 sm:px-4 sm:py-4">
      <div className={`grid lg:grid-cols-2 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <div className="relative min-h-[280px] bg-black sm:min-h-[420px] lg:min-h-[560px]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="flex items-center bg-[var(--vipp-dark)] px-6 py-12 sm:px-14 sm:py-16">
          <div className="max-w-[440px]">
            <div className="text-[15px] font-light leading-[1.75] text-[var(--vipp-muted)] sm:text-[16px]">
              {children}
            </div>
            <a
              href={moreHref}
              className="mt-8 inline-block text-[13px] font-light text-white underline decoration-white/30 underline-offset-8 hover:decoration-white"
            >
              {copy.readMore}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
