import { infoItems } from "@/lib/company";

export function InfoAccordion() {
  return (
    <section id="informacje" className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h2 className="text-sm tracking-[0.16em] uppercase text-neutral-900">
        Informacje
      </h2>
      <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
        {infoItems.map((item) => (
          <details key={item.id} className="group py-5">
            <summary className="cursor-pointer list-none text-[15px] tracking-[0.04em] text-neutral-900 marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {item.label}
                <span className="text-neutral-400 transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <div className="pt-3 leading-relaxed text-neutral-600">
              <p>{item.body}</p>
              {item.href && item.hrefLabel ? (
                <p className="mt-3">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:opacity-60"
                  >
                    {item.hrefLabel}
                  </a>
                </p>
              ) : null}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
