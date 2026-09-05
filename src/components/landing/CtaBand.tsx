import { copy } from "@/lib/company";

export function CtaBand() {
  return (
    <section className="bg-[var(--vipp-dark)] px-4 py-16 text-center sm:py-24">
      <h2 className="font-display text-[28px] font-light text-white sm:text-[40px]">
        {copy.ctaHeadline}
      </h2>
      <p className="mx-auto mt-5 max-w-md text-[15px] font-light leading-relaxed text-[var(--vipp-muted)]">
        {copy.ctaLead}
      </p>
      <a
        href="#kontakt"
        className="mt-10 inline-flex bg-white px-12 py-3.5 text-[13px] font-light text-black"
      >
        {copy.ctaButton}
      </a>
    </section>
  );
}
