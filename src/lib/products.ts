export type House = {
  id: string;
  name: string;
  city: string;
  region: string;
  pricePln: number;
  areaM2: number;
  rooms: number;
  bedrooms: number;
  yearBuilt: number;
  description: string;
  features: string[];
  accent: string;
};

export const houses: House[] = [
  {
    id: "willa-nadmorska",
    name: "Willa Nadmorska",
    city: "Sopot",
    region: "Pomorskie",
    pricePln: 2_450_000,
    areaM2: 220,
    rooms: 6,
    bedrooms: 4,
    yearBuilt: 2021,
    description:
      "Nowoczesna willa 400 metrów od plaży, z panoramicznymi oknami, tarasem na dachu i ogrodem zimowym.",
    features: ["Widok na morze", "Taras na dachu", "Garaż na 2 auta", "Ogrzewanie podłogowe"],
    accent: "from-sky-400 to-indigo-500",
  },
  {
    id: "dom-w-gorach",
    name: "Dom w Górach",
    city: "Zakopane",
    region: "Małopolskie",
    pricePln: 1_780_000,
    areaM2: 165,
    rooms: 5,
    bedrooms: 3,
    yearBuilt: 2019,
    description:
      "Góralski dom z bali z kominkiem i sauną, idealny na całoroczny wypoczynek z widokiem na Giewont.",
    features: ["Widok na Tatry", "Sauna", "Kominek", "Miejsce postojowe"],
    accent: "from-emerald-400 to-teal-600",
  },
  {
    id: "apartament-loft",
    name: "Loft Fabryczny",
    city: "Łódź",
    region: "Łódzkie",
    pricePln: 890_000,
    areaM2: 98,
    rooms: 3,
    bedrooms: 2,
    yearBuilt: 2018,
    description:
      "Industrialny loft w zrewitalizowanej fabryce, z wysokimi sufitami, cegłą i antresolą.",
    features: ["Antresola", "Wysokie sufity", "Cegła", "Winda"],
    accent: "from-amber-400 to-orange-600",
  },
  {
    id: "dom-podmiejski",
    name: "Dom Podmiejski",
    city: "Konstancin-Jeziorna",
    region: "Mazowieckie",
    pricePln: 1_320_000,
    areaM2: 140,
    rooms: 5,
    bedrooms: 3,
    yearBuilt: 2020,
    description:
      "Energooszczędny dom pod Warszawą z dużym ogrodem, fotowoltaiką i pompą ciepła.",
    features: ["Fotowoltaika", "Pompa ciepła", "Duży ogród", "Cichy zakątek"],
    accent: "from-lime-400 to-green-600",
  },
  {
    id: "kamienica-apartament",
    name: "Apartament w Kamienicy",
    city: "Kraków",
    region: "Małopolskie",
    pricePln: 1_150_000,
    areaM2: 112,
    rooms: 4,
    bedrooms: 2,
    yearBuilt: 1908,
    description:
      "Odrestaurowany apartament w secesyjnej kamienicy na Kazimierzu, kilka kroków od Rynku.",
    features: ["Sztukateria", "Zabytek", "Centrum", "Wysoki standard"],
    accent: "from-rose-400 to-pink-600",
  },
  {
    id: "domek-nad-jeziorem",
    name: "Domek nad Jeziorem",
    city: "Giżycko",
    region: "Warmińsko-mazurskie",
    pricePln: 740_000,
    areaM2: 86,
    rooms: 3,
    bedrooms: 2,
    yearBuilt: 2017,
    description:
      "Przytulny domek na Mazurach z własnym pomostem i miejscem na łódkę, tuż nad wodą.",
    features: ["Własny pomost", "Linia brzegowa", "Kominek", "Taras"],
    accent: "from-cyan-400 to-blue-600",
  },
];

export function getHouseById(id: string): House | undefined {
  return houses.find((house) => house.id === id);
}

const currencyFormatter = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
  maximumFractionDigits: 0,
});

export function formatPln(value: number): string {
  return currencyFormatter.format(value);
}
