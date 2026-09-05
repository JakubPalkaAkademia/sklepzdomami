import { copy } from "@/lib/company";

export function Intro() {
  return (
    <section id="o-firmie" className="bg-[var(--vipp-dark)] px-4 py-16 sm:px-10 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="ml-auto w-full max-w-[620px] lg:max-w-[52%]">
          <h2 className="font-display text-[28px] font-light leading-[1.12] text-white sm:text-[40px] lg:text-[46px]">
            {copy.introHeadline}
          </h2>
          <p className="mt-8 text-[15px] font-light leading-[1.75] text-[var(--vipp-muted)] sm:text-[16px]">
            {copy.introLead}
          </p>
        </div>
      </div>
    </section>
  );
}
