export type CartItem = {
  id: string;
  name: string;
  pricePln: number;
};

const STORAGE_KEY = "sklepzdomami.cart";
const EMPTY: CartItem[] = [];

let items: CartItem[] = EMPTY;
let hydrated = false;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) {
    listener();
  }
}

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Ignore storage errors (e.g. private mode, quota).
  }
}

function hydrate() {
  if (hydrated) {
    return;
  }
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      items = JSON.parse(raw) as CartItem[];
    }
  } catch {
    items = EMPTY;
  }
}

export function subscribe(listener: () => void): () => void {
  hydrate();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getSnapshot(): CartItem[] {
  return items;
}

export function getServerSnapshot(): CartItem[] {
  return EMPTY;
}

export function addItem(item: CartItem) {
  if (!items.some((existing) => existing.id === item.id)) {
    items = [...items, item];
    persist();
    emit();
  }
}

export function removeItem(id: string) {
  items = items.filter((item) => item.id !== id);
  persist();
  emit();
}

export function clear() {
  items = EMPTY;
  persist();
  emit();
}
