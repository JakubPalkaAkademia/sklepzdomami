import { copy } from "@/lib/company";

export function SplitLines() {
  return (
    <section className="bg-[var(--vipp-dark)] px-4 py-20 sm:px-10 sm:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-2 lg:gap-24">
        <p className="font-display text-[26px] font-light leading-[1.2] text-white sm:text-[36px]">
          {copy.splitLeft}
        </p>
        <p className="font-display text-[26px] font-light leading-[1.2] text-white sm:text-[36px]">
          {copy.splitRight}
        </p>
      </div>
    </section>
  );
}
