import Link from "next/link";
import { formatPln, type House } from "@/lib/products";

export function HouseCard({ house }: { house: House }) {
  return (
    <article
      className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-neutral-900"
      data-testid="house-card"
    >
      <Link href={`/dom/${house.id}`} className="block">
        <div
          className={`flex h-44 items-end bg-gradient-to-br ${house.accent} p-4`}
        >
          <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-neutral-800">
            {house.city}, {house.region}
          </span>
        </div>
        <div className="space-y-2 p-5">
          <h3 className="text-lg font-bold">{house.name}</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {house.areaM2} m² · {house.rooms} pokoi · {house.yearBuilt}
          </p>
          <p className="pt-1 text-xl font-extrabold text-indigo-600">
            {formatPln(house.pricePln)}
          </p>
        </div>
      </Link>
    </article>
  );
}
