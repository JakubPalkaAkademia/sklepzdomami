"use client";

import { useCart, type CartItem } from "@/components/useCart";

export function AddToCartButton({ house }: { house: CartItem }) {
  const { addItem, removeItem, hasItem } = useCart();
  const inCart = hasItem(house.id);

  return (
    <button
      type="button"
      onClick={() => (inCart ? removeItem(house.id) : addItem(house))}
      data-testid="add-to-cart"
      aria-pressed={inCart}
      className={
        inCart
          ? "w-full rounded-full border border-indigo-600 px-5 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50 dark:hover:bg-indigo-950"
          : "w-full rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
      }
    >
      {inCart ? "Usuń z koszyka" : "Dodaj do koszyka"}
    </button>
  );
}
