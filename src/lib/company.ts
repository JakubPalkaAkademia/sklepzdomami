export const company = {
  brand: "Sklep z Domami",
  legalName: "Sklep z Domami M. Miłowska, J. Palka spółka jawna",
  legalNameShort: "Sklep z Domami M. Miłowska, J. Palka sp.j.",
  krs: "0001126473",
  nip: "8513318220",
  regon: "529623912",
  registeredAt: "11.09.2024",
  partners: ["Martyna Miłowska", "Jakub Palka"] as const,
  representation: "Każdy ze wspólników reprezentuje spółkę samodzielnie.",
  street: "ul. Śródleśna 44",
  postalCode: "71-498",
  city: "Szczecin",
  district: "Warszewo / Podbórz",
  phoneDisplay: "+48 504 194 854",
  phoneHref: "tel:+48504194854",
  email: "biuro@sklepzdomami.pl",
  domain: "https://sklepzdomami.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=61575634206335",
  krsUrl:
    "https://krs-pobierz.pl/sklep-z-domami-m-milowska-j-palka-spolka-jawna-i0001126473",
  coordinates: {
    lat: 53.4860285,
    lng: 14.5429939,
    label: "53°29'09.7\"N  14°32'34.8\"E",
  },
  addressLine: "ul. Śródleśna 44, 71-498 Szczecin",
} as const;

export const copy = {
  metaTitle: "Sklep z Domami — budowa, sprzedaż, architektura",
  metaDescription:
    "Sklep z Domami M. Miłowska, J. Palka sp.j., Szczecin. Projektujemy, budujemy i sprzedajemy domy. ul. Śródleśna 44, 71-498. Tel. +48 504 194 854.",
  heroOverlay: "Sklep z Domami, Szczecin",
  introHeadline: "BUDUJEMY. SPRZEDAJEMY. PROJEKTUJEMY.",
  introLead1:
    "Spółka jawna ze Szczecina. Martyna Miłowska i Jakub Palka. Domy — od projektu, przez budowę, po sprzedaż. Nie pośredniczymy w cudzych ogłoszeniach.",
  introLead2:
    "Pytania o działkę, projekt albo budowę: telefon i mail. Żadnej ściany ogłoszeń i żadnego call center.",
  story:
    "Siedziba przy Śródleśnej 44, na Warszewie. Robimy to, co wpisane: wznosimy budynki, sprzedajemy nieruchomości na własny rachunek, projektujemy. Jeśli jest działka albo dom pod klucz — piszecie do biura.",
  cta: "Napisz do biura",
  partnersKicker: "Wspólnicy, Sklep z Domami sp.j.",
  natureTitle: "Siedziba na skraju lasu",
  natureBody:
    "Warszewo, Podbórz, ulica jak z nazwy — śródleśna. Stąd prowadzimy budowę, projekt i sprzedaż. Adres do korespondencji jest ten z KRS: 71-498, nie inny.",
  readMore: "Czytaj więcej",
  splitLeft: "Projekt i budowa — u nas.",
  splitRight: "Rozmowa o domu — pod telefonem i mailem.",
  postcardTitle: "Pocztówka ze Szczecina",
  contactTitle: "Napisz do biura",
  contactHint:
    "Albo od razu: +48 504 194 854, biuro@sklepzdomami.pl.",
  footerAbout:
    "Spółka jawna ze Szczecina. Budowa, sprzedaż nieruchomości, architektura.",
} as const;

export type CaptionedBlock = {
  id: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

export const captionedBlocks: CaptionedBlock[] = [
  {
    id: "budowa",
    title: "Budowa",
    body: "Stan zerowy, ściany, dach, instalacje. Dom, który da się oddać — nie wizualizacja bez wykonawcy.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=80",
    alt: "Budowa domu — konstrukcja i rusztowania",
  },
  {
    id: "architektura",
    title: "Architektura",
    body: "Układ pomieszczeń, konstrukcja, to co później stoi na działce. Projekt pod budowę, nie pod folder.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80",
    alt: "Deska kreślarska i rysunek architektoniczny",
  },
  {
    id: "sprzedaz",
    title: "Sprzedaż",
    body: "Obrót na własny rachunek. Gdy jest nieruchomość do sprzedania, jest adres i rozmowa. Dziś zaczyna się od telefonu do biura.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80",
    alt: "Nowoczesny dom jednorodzinny",
  },
];

export const photos = {
  hero: {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80",
    alt: "Dom w otoczeniu drzew, elewacja od ogrodu",
  },
  fullBleed: {
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2400&q=80",
    alt: "Bryła budynku, architektura",
  },
  nature: {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2400&q=80",
    alt: "Las — okolice siedziby na Warszewie",
  },
  coordinates: {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=2400&q=80",
    alt: "Krajobraz północny, światło nad drzewami",
  },
  postcard: [
    {
      src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=80",
      alt: "Elewacja domu",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
      alt: "Wnętrze, światło w salonie",
    },
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      alt: "Rysunek architektoniczny",
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
      alt: "Plac budowy",
    },
  ],
} as const;

export function getCaptionedBlock(id: string): CaptionedBlock {
  const block = captionedBlocks.find((item) => item.id === id);
  if (!block) {
    throw new Error(`Missing captioned block: ${id}`);
  }
  return block;
}

export type InfoItem = {
  id: string;
  label: string;
  body: string;
  href?: string;
  hrefLabel?: string;
};

export const infoItems: InfoItem[] = [
  {
    id: "kontakt",
    label: "Kontakt",
    body: "+48 504 194 854 · biuro@sklepzdomami.pl. Piszcie o budowie, projekcie albo sprzedaży.",
  },
  {
    id: "siedziba",
    label: "Siedziba",
    body: "ul. Śródleśna 44, 71-498 Szczecin (Warszewo / Podbórz).",
  },
  {
    id: "firma",
    label: "Firma",
    body: "Sklep z Domami M. Miłowska, J. Palka spółka jawna. KRS 0001126473, NIP 8513318220, REGON 529623912. Wpis 11.09.2024. Wspólnicy: Martyna Miłowska, Jakub Palka. Każdy reprezentuje spółkę samodzielnie.",
  },
  {
    id: "dzialalnosc",
    label: "Czym się zajmujemy",
    body: "Budowa, sprzedaż nieruchomości na własny rachunek, architektura.",
  },
  {
    id: "facebook",
    label: "Facebook",
    body: "Aktualności i realizacje — profil Real Estate.",
    href: company.facebookUrl,
    hrefLabel: "Otwórz Facebook",
  },
  {
    id: "krs",
    label: "KRS",
    body: "Odpis i dane rejestrowe spółki.",
    href: company.krsUrl,
    hrefLabel: "Zobacz w KRS",
  },
];
