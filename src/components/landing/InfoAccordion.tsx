"use client";

import { useState } from "react";
import Image from "next/image";
import { copy, infoItems, photos } from "@/lib/company";

export function InfoAccordion() {
  const [open, setOpen] = useState<Set<number>>(new Set());

  function toggle(i: number) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  function openAll() {
    setOpen(new Set(infoItems.map((_, i) => i)));
  }

  return (
    <section id="informacje" className="bg-[var(--vipp-beige)] text-black">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[360px] bg-[#d8d2c8] lg:min-h-[720px]">
          <Image
            src={photos.infoPortrait.src}
            alt={photos.infoPortrait.alt}
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="mb-8 flex items-baseline justify-between gap-4">
            <h2 className="font-display text-[32px] font-light sm:text-[40px]">
              {copy.infoHeading}
            </h2>
            <button
              type="button"
              onClick={openAll}
              className="text-[13px] font-light underline underline-offset-4"
            >
              {copy.openAll}
            </button>
          </div>
          <ul>
            {infoItems.map((item, i) => {
              const isOpen = open.has(i);
              return (
                <li key={item.id} className="border-t border-black/20">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between py-4 text-left text-[15px] font-light"
                    aria-expanded={isOpen}
                  >
                    {item.label}
                    <span className="text-lg leading-none">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? (
                    <div className="pb-5 text-[14px] font-light leading-relaxed text-black/80">
                      <p>{item.body}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-block underline underline-offset-4"
                        >
                          {item.hrefLabel}
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
