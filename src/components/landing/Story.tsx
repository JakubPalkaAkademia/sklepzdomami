import { copy } from "@/lib/company";

export function Story() {
  return (
    <section className="mx-auto max-w-xl px-5 py-24 sm:px-8 sm:py-32">
      <p className="leading-[1.7] text-neutral-600">{copy.story}</p>
      <p className="mt-10">
        <a
          href="#kontakt"
          className="inline-block border border-neutral-900 px-8 py-3 text-[13px] tracking-[0.16em] uppercase text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
        >
          {copy.cta}
        </a>
      </p>
    </section>
  );
}
