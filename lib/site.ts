export const site = {
  name: "sklep z domami",
  legalName: "Sklep z Domami M. Miłowska, J. Palka sp.j.",
  legalNameFull: "Sklep z Domami M. Miłowska, J. Palka Spółka Jawna",
  domain: "sklepzdomami.com",
  url: "https://sklepzdomami.com",
  locale: "pl_PL",
} as const;

/** Studio / legal — contact & footer only. */
export const studio = {
  address: "ul. Śródleśna 44",
  postalCode: "71-498",
  city: "Szczecin",
  phone: "+48 504 194 854",
  phoneHref: "tel:+48504194854",
  email: "biuro@sklepzdomami.pl",
  emailHref: "mailto:biuro@sklepzdomami.pl",
  partners: [{ name: "Martyna Miłowska" }, { name: "Jakub Palka" }],
  krs: "0001126473",
  nip: "8513318220",
  regon: "529623912",
  court:
    "Sąd Rejonowy Szczecin-Centrum w Szczecinie, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego",
  registeredAt: "2024-09-11",
} as const;

export const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61575634206335",
  },
  {
    label: "X",
    href: "https://x.com/Sklepzdomami",
  },
] as const;

export const hero = {
  /** Lake loop — seamless crossfade in hero.mp4 */
  poster: "/hero-poster.jpg",
  videoMp4: "/hero.mp4",
  coverVideoMp4: "/hero-cover.mp4",
  useVideo: true,
} as const;

export const visitTimes = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"] as const;

export type RoomKey =
  | "vestibule"
  | "livingKitchen"
  | "terrace"
  | "office"
  | "pantry"
  | "bathroom"
  | "technical"
  | "bedroom1"
  | "bedroom2"
  | "bedroom3"
  | "laundry"
  | "hall";

/** Szmaragdowa 7 — locale-independent assets and measurements. */
export const investmentAssets = {
  latitude: 53.35312,
  longitude: 14.90159,
  coordinatesDecimal: "53.35312° N  14.90159° E",
  coordinatesDms: "53°21'11.2\"N  14°54'05.7\"E",
  media: {
    hero: "/render-deck.jpg",
    pair: "/render-para.jpg",
    deck: "/render-deck.jpg",
    large: "/render-front.jpg",
    coords: "/render-para.jpg",
    entrance: "/render-wejscie.jpg",
    day: "/render-day.jpg",
    night: "/render-night.jpg",
  },
  sequenceImages: ["/render-garden.jpg", "/render-street.jpg", "/render-wejscie.jpg"],
  captionImages: ["/render-interior-dining.jpg", "/render-interior-living.jpg"],
  facadeDetailImages: ["/detail-door.jpg", "/detail-facade.jpg", "/detail-wood.jpg"],
  slider: [
    { src: "/render-front.jpg" },
    { src: "/slider-lake-pier.jpg" },
    { src: "/render-para.jpg" },
    { src: "/slider-boardwalk.jpg" },
    { src: "/render-night.jpg", fit: "cover" as const },
    { src: "/slider-detail-bark.jpg" },
    { src: "/render-day.jpg", fit: "cover" as const },
    { src: "/slider-lake-shore.jpg", fit: "cover" as const },
  ],
  groundFloor: {
    total: "84,50 m²",
    rooms: [
      { key: "livingKitchen" as const, area: "53,50 m²" },
      { key: "terrace" as const, area: "20,00 m²" },
      { key: "office" as const, area: "13,80 m²" },
      { key: "pantry" as const, area: "5,00 m²" },
      { key: "bathroom" as const, area: "4,20 m²" },
      { key: "technical" as const, area: "4,00 m²" },
      { key: "vestibule" as const, area: "4,00 m²" },
    ],
  },
  upperFloor: {
    total: "71,05 m²",
    rooms: [
      { key: "bedroom1" as const, area: "11,70 m²" },
      { key: "bedroom2" as const, area: "18,65 m²" },
      { key: "bedroom3" as const, area: "18,30 m²" },
      { key: "bathroom" as const, area: "9,30 m²" },
      { key: "laundry" as const, area: "4,40 m²" },
      { key: "hall" as const, area: "8,70 m²" },
    ],
  },
} as const;
