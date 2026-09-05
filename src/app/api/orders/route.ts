import { getHouseById } from "@/lib/products";

type OrderRequestItem = { id: string };

type OrderRequestBody = {
  customerName?: unknown;
  email?: unknown;
  items?: unknown;
};

function isItemArray(value: unknown): value is OrderRequestItem[] {
  return (
    Array.isArray(value) &&
    value.every(
      (item) =>
        typeof item === "object" &&
        item !== null &&
        typeof (item as { id: unknown }).id === "string",
    )
  );
}

export async function POST(request: Request) {
  let body: OrderRequestBody;
  try {
    body = (await request.json()) as OrderRequestBody;
  } catch {
    return Response.json({ error: "Nieprawidłowe dane." }, { status: 400 });
  }

  const { customerName, email, items } = body;

  if (typeof customerName !== "string" || customerName.trim().length < 2) {
    return Response.json({ error: "Podaj imię i nazwisko." }, { status: 400 });
  }
  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { error: "Podaj poprawny adres e-mail." },
      { status: 400 },
    );
  }
  if (!isItemArray(items) || items.length === 0) {
    return Response.json({ error: "Koszyk jest pusty." }, { status: 400 });
  }

  const resolved = items.map((item) => getHouseById(item.id));
  if (resolved.some((house) => house === undefined)) {
    return Response.json(
      { error: "Koszyk zawiera nieznaną nieruchomość." },
      { status: 400 },
    );
  }

  const totalPln = resolved.reduce(
    (sum, house) => sum + (house?.pricePln ?? 0),
    0,
  );
  const orderNumber = `SZD-${Date.now().toString(36).toUpperCase()}`;

  return Response.json(
    {
      orderNumber,
      customerName: customerName.trim(),
      email,
      itemCount: resolved.length,
      totalPln,
      message: `Dziękujemy, ${customerName.trim()}! Rezerwacja ${resolved.length} nieruchomości została przyjęta.`,
    },
    { status: 201 },
  );
}
