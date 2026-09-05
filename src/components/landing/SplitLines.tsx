import { copy } from "@/lib/company";

export function SplitLines() {
  return (
    <section className="grid gap-10 px-5 py-24 sm:px-8 md:grid-cols-2 md:gap-16 md:py-32">
      <p className="text-[clamp(1.5rem,3vw,2.35rem)] font-medium leading-snug text-neutral-900">
        {copy.splitLeft}
      </p>
      <p className="text-[clamp(1.5rem,3vw,2.35rem)] font-medium leading-snug text-neutral-900">
        {copy.splitRight}
      </p>
    </section>
  );
}
