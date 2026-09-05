import { copy } from "@/lib/company";

export function Quote() {
  return (
    <section className="bg-[var(--vipp-dark)] px-6 py-20 sm:py-28">
      <blockquote className="mx-auto max-w-[840px] text-center">
        <p className="font-display text-[26px] font-light italic leading-[1.25] text-white sm:text-[38px] lg:text-[44px]">
          „{copy.quote}”
        </p>
        <footer className="mt-10 text-[11px] font-light tracking-[0.16em] text-[var(--vipp-muted)] uppercase">
          {copy.quoteBy}
        </footer>
      </blockquote>
    </section>
  );
}
