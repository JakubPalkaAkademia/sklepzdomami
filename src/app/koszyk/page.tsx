"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useCart } from "@/components/useCart";
import { formatPln } from "@/lib/products";

type OrderResult = {
  orderNumber: string;
  itemCount: number;
  totalPln: number;
  message: string;
};

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; result: OrderResult }
  | { kind: "error"; message: string };

export default function CartPage() {
  const { items, totalPln, removeItem, clear } = useCart();
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "submitting" });
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName,
          email,
          items: items.map((item) => ({ id: item.id })),
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        setStatus({ kind: "error", message: data.error ?? "Wystąpił błąd." });
        return;
      }
      setStatus({ kind: "success", result: data as OrderResult });
      clear();
    } catch {
      setStatus({ kind: "error", message: "Nie udało się połączyć z serwerem." });
    }
  }

  if (status.kind === "success") {
    return (
      <div className="mx-auto max-w-2xl px-6 py-16 text-center">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-10 dark:border-emerald-900 dark:bg-emerald-950">
          <p className="text-5xl" aria-hidden>
            ✅
          </p>
          <h1 className="mt-4 text-2xl font-bold" data-testid="order-success">
            Rezerwacja przyjęta
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            {status.result.message}
          </p>
          <p className="mt-4 font-mono text-lg font-bold text-emerald-700 dark:text-emerald-300">
            {status.result.orderNumber}
          </p>
          <p className="mt-1 text-sm text-neutral-500">
            Wartość: {formatPln(status.result.totalPln)}
          </p>
          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Wróć do ofert
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-extrabold">Koszyk</h1>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-black/15 p-12 text-center dark:border-white/15">
          <p className="text-neutral-500" data-testid="empty-cart">
            Twój koszyk jest pusty.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block font-semibold text-indigo-600 hover:underline"
          >
            Przeglądaj oferty →
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          <ul className="space-y-3">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-neutral-900"
                data-testid="cart-item"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-indigo-600">
                    {formatPln(item.pricePln)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-sm text-neutral-500 hover:text-red-600"
                >
                  Usuń
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between border-t border-black/10 pt-4 text-lg font-bold dark:border-white/10">
            <span>Razem</span>
            <span data-testid="cart-total">{formatPln(totalPln)}</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="name">
                Imię i nazwisko
              </label>
              <input
                id="name"
                required
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 outline-none focus:border-indigo-500 dark:border-white/15 dark:bg-neutral-900"
                placeholder="Jan Kowalski"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 outline-none focus:border-indigo-500 dark:border-white/15 dark:bg-neutral-900"
                placeholder="jan@example.com"
              />
            </div>

            {status.kind === "error" && (
              <p className="text-sm font-medium text-red-600" data-testid="order-error">
                {status.message}
              </p>
            )}

            <button
              type="submit"
              disabled={status.kind === "submitting"}
              data-testid="checkout"
              className="w-full rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-60"
            >
              {status.kind === "submitting"
                ? "Przetwarzanie…"
                : "Zarezerwuj i zapłać"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
