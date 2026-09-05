import { company, copy } from "@/lib/company";

export function Partners() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-8">
      <p className="text-[clamp(1.35rem,3vw,2rem)] font-medium leading-snug text-neutral-900">
        {company.partners.join(" i ")}
      </p>
      <p className="mt-4 text-[12px] tracking-[0.18em] uppercase text-neutral-500">
        {copy.partnersKicker}
      </p>
      <p className="mt-6 text-neutral-600">{company.representation}</p>
    </section>
  );
}
