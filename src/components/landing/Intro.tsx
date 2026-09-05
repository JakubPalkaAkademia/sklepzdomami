import { copy } from "@/lib/company";

export function Intro() {
  return (
    <section id="o-firmie" className="mx-auto max-w-xl px-5 py-24 text-center sm:px-8 sm:py-32">
      <h1 className="text-[clamp(1.75rem,4.5vw,3.25rem)] font-medium leading-[1.15] tracking-[0.08em] text-neutral-900">
        {copy.introHeadline}
      </h1>
      <p className="mt-10 text-left leading-[1.7] text-neutral-600">{copy.introLead1}</p>
      <p className="mt-5 text-left leading-[1.7] text-neutral-600">{copy.introLead2}</p>
    </section>
  );
}
