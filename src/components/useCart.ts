"use client";

import { useSyncExternalStore } from "react";
import {
  addItem,
  clear,
  getServerSnapshot,
  getSnapshot,
  removeItem,
  subscribe,
  type CartItem,
} from "@/lib/cart-store";

export type { CartItem };

export function useCart() {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return {
    items,
    count: items.length,
    totalPln: items.reduce((sum, item) => sum + item.pricePln, 0),
    addItem,
    removeItem,
    clear,
    hasItem: (id: string) => items.some((item) => item.id === id),
  };
}
