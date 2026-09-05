import { HouseCard } from "@/components/HouseCard";
import { houses } from "@/lib/products";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <section className="mb-12 rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-sky-500 px-8 py-14 text-white">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-100">
          Twój dom o jeden klik
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">
          Kup wymarzony dom online
        </h1>
        <p className="mt-4 max-w-xl text-indigo-100">
          Przeglądaj wyselekcjonowane oferty domów i apartamentów z całej Polski,
          dodawaj je do koszyka i rezerwuj bez wychodzenia z domu.
        </p>
      </section>

      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-2xl font-bold">Dostępne oferty</h2>
        <span className="text-sm text-neutral-500" data-testid="offer-count">
          {houses.length} nieruchomości
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {houses.map((house) => (
          <HouseCard key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
}
