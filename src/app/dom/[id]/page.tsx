import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { formatPln, getHouseById, houses } from "@/lib/products";

export function generateStaticParams() {
  return houses.map((house) => ({ id: house.id }));
}

export default async function HousePage({ params }: PageProps<"/dom/[id]">) {
  const { id } = await params;
  const house = getHouseById(id);

  if (!house) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <Link
        href="/"
        className="text-sm font-medium text-indigo-600 hover:underline"
      >
        ← Wróć do ofert
      </Link>

      <div
        className={`mt-6 flex h-64 items-end rounded-3xl bg-gradient-to-br ${house.accent} p-6`}
      >
        <span className="rounded-full bg-white/85 px-3 py-1 text-sm font-semibold text-neutral-800">
          {house.city}, {house.region}
        </span>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <h1 className="text-3xl font-extrabold">{house.name}</h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            {house.description}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat label="Powierzchnia" value={`${house.areaM2} m²`} />
            <Stat label="Pokoje" value={String(house.rooms)} />
            <Stat label="Sypialnie" value={String(house.bedrooms)} />
            <Stat label="Rok budowy" value={String(house.yearBuilt)} />
          </dl>

          <ul className="mt-6 flex flex-wrap gap-2">
            {house.features.map((feature) => (
              <li
                key={feature}
                className="rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-700 dark:bg-indigo-950 dark:text-indigo-200"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <aside className="h-fit rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-neutral-900 md:w-64">
          <p className="text-sm text-neutral-500">Cena</p>
          <p className="mb-5 text-3xl font-extrabold text-indigo-600">
            {formatPln(house.pricePln)}
          </p>
          <AddToCartButton
            house={{ id: house.id, name: house.name, pricePln: house.pricePln }}
          />
        </aside>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-neutral-100 p-3 dark:bg-neutral-800">
      <dt className="text-xs uppercase tracking-wide text-neutral-500">
        {label}
      </dt>
      <dd className="mt-1 font-semibold">{value}</dd>
    </div>
  );
}
