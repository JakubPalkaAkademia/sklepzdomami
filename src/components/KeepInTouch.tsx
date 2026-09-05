"use client";

import { useState } from "react";
import { company, copy } from "@/lib/company";

export function KeepInTouch() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-4 z-40 bg-white px-5 py-3.5 text-[13px] font-light text-black sm:right-8 sm:bottom-8"
      >
        {copy.keepInTouch}
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:p-8">
          <button
            type="button"
            aria-label="Zamknij"
            className="absolute inset-0 bg-black/25"
            onClick={() => setOpen(false)}
          />
          <div className="relative z-10 w-full max-w-sm bg-white p-8 text-black">
            <p className="font-display text-[22px] font-light">
              {copy.keepInTouch}
            </p>
            <p className="mt-5 text-[13px] font-light leading-relaxed">
              {company.addressLine}
              <br />
              Tel. {company.phoneDisplay}
              <br />
              <a className="underline" href={company.emailHref}>
                {company.email}
              </a>
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-8 text-[13px] font-light underline underline-offset-4"
            >
              Zamknij
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
