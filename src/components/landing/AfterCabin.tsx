import { copy } from "@/lib/company";

export function AfterCabin() {
  return (
    <section className="bg-[var(--vipp-dark)] px-4 py-16 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-[560px]">
          <p className="text-[15px] font-light leading-[1.75] text-[var(--vipp-muted)] sm:text-[16px]">
            {copy.afterCabin}
          </p>
          <p className="mt-8 text-[13px] font-light text-[var(--vipp-muted)]">
            {copy.afterCabinMeta}
          </p>
        </div>
      </div>
    </section>
  );
}
