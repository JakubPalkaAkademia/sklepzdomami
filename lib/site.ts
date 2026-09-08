export const site = {
  name: "sklep z domami",
  legalName: "Sklep z Domami M. Miłowska, J. Palka sp.j.",
  domain: "sklepzdomami.pl",
  url: "https://sklepzdomami.pl",
  locale: "pl_PL",
} as const;

/** Studio / legal — kontakt & footer only. */
export const studio = {
  address: "ul. Śródleśna 44",
  postalCode: "71-498",
  city: "Szczecin",
  phone: "+48 504 194 854",
  phoneHref: "tel:+48504194854",
  email: "biuro@sklepzdomami.pl",
  emailHref: "mailto:biuro@sklepzdomami.pl",
  partners: [
    { name: "Martyna Miłowska", role: "wspólnik" },
    { name: "Jakub Palka", role: "architekt wnętrz, wspólnik" },
  ],
  krs: "0001126473",
  nip: "8513318220",
} as const;

export const hero = {
  /** Landscape render without baked-in typography — set useVideo true after replacing hero.mp4 */
  poster: "/render-deck.jpg",
  videoMp4: "/hero.mp4",
  useVideo: false,
} as const;

/** Szmaragdowa 7 — single investment, two buildings side by side. */
export const investment = {
  title: "Szmaragdowa 7",
  subtitle: "Morzyczyn, zachodniopomorskie",
  tagline: "Twoja przestrzeń nad Miedwiem",
  latitude: 53.35312,
  longitude: 14.90159,
  address: "ul. Szmaragdowa 7, 73-108 Morzyczyn",
  locationLabel: "morzyczyn, szmaragdowa 7",
  status: "w budowie",
  introLeadPl: "7A · 7B · szmaragdowa",
  intro:
    "Dwa domy na jednej działce nad Miedwiem — drewno, ciemny dach, taras w osi z ogrodem. Oglądasz na budowie, nie w katalogu.",
  statusLine: "7A / 7B · w budowie",
  quote: {
    line1: "Miedwie nie widać z drogi, ale jest tuż obok...",
    line2: "Dwa domy stoją już w bryle — wchodzimy w detale.",
    attribution: "martyna miłowska & jakub palka",
  },
  coordinatesDecimal: "53.35312° N  14.90159° E",
  coordinatesDms: "53°21'11.2\"N  14°54'05.7\"E",
  closing: {
    line1: "Szmaragdowa 7, Morzyczyn",
    line2: "7A i 7B · w budowie",
  },
  postcardTitle: "z placu budowy",
  groundFloor: {
    label: "parter",
    total: "84,50 m²",
    rooms: [
      { name: "strefa dzienna z kuchnią", area: "53,50 m²" },
      { name: "taras", area: "20,00 m²" },
      { name: "pom. biurowe", area: "13,80 m²" },
      { name: "spiżarnia", area: "5,00 m²" },
      { name: "łazienka", area: "4,20 m²" },
      { name: "pom. techniczne", area: "4,00 m²" },
      { name: "przedsionek", area: "4,00 m²" },
    ],
  },
  upperFloor: {
    label: "piętro",
    total: "71,05 m²",
    rooms: [
      { name: "sypialnia 1", area: "11,70 m²" },
      { name: "sypialnia 2", area: "18,65 m²" },
      { name: "sypialnia 3", area: "18,30 m²" },
      { name: "łazienka", area: "9,30 m²" },
      { name: "pralnia", area: "4,40 m²" },
      { name: "hol", area: "8,70 m²" },
    ],
  },
  media: {
    hero: "/render-deck.jpg",
    pair: "/render-para.jpg",
    deck: "/render-deck.jpg",
    coords: "/render-para.jpg",
    entrance: "/render-wejscie.jpg",
  },
  sequences: [
    {
      kickerBold: "taras 7B",
      body: "Strefa dzienna wychodzi na taras. Elewacja z lameli — widok od ogrodu.",
      image: "/render-deck.jpg",
      alt: "widok na taras i elewację — golden hour",
    },
    {
      kickerBold: "wejście",
      body: "Podjazd żwirowy i zadaszone drzwi. Elewacja od strony ulicy Szmaragdowej.",
      image: "/render-wejscie.jpg",
      alt: "wejście i podjazd",
    },
    {
      kickerBold: "7A i 7B",
      body: "Dwa domy za jednym ogrodzeniem — ta sama bryła, osobna działka na każdy.",
      image: "/render-para.jpg",
      alt: "para domów za ogrodzeniem",
    },
  ],
  captions: [
    {
      kickerBold: "taras",
      body: "Parter 7B: kuchnia i salon w jednej strefie, wyjście prosto na taras.",
      image: "/render-deck.jpg",
      alt: "taras i elewacja — golden hour",
    },
    {
      kickerBold: "wejście",
      body: "Pierwsze piętro schodów, drzwi pod daszkiem, elewacja drewniana.",
      image: "/render-wejscie.jpg",
      alt: "wejście i podjazd",
    },
  ],
  /** 24 slides — matches Vipp Shelter m7 product story count; reuses 3 renders until real photos. */
  slider: [
    { src: "/render-deck.jpg", alt: "taras 7B — golden hour" },
    { src: "/render-wejscie.jpg", alt: "wejście od podjazdu" },
    { src: "/render-para.jpg", alt: "para domów 7A i 7B" },
    { src: "/render-deck.jpg", alt: "elewacja od ogrodu" },
    { src: "/render-wejscie.jpg", alt: "zadaszone drzwi wejściowe" },
    { src: "/render-para.jpg", alt: "bryła od strony ulicy" },
    { src: "/render-deck.jpg", alt: "strefa dzienna z tarasem" },
    { src: "/render-wejscie.jpg", alt: "podjazd żwirowy" },
    { src: "/render-para.jpg", alt: "dwa domy za ogrodzeniem" },
    { src: "/render-deck.jpg", alt: "lamelowa elewacja" },
    { src: "/render-wejscie.jpg", alt: "wejście 7B" },
    { src: "/render-para.jpg", alt: "inwestycja Szmaragdowa 7" },
    { src: "/render-deck.jpg", alt: "taras wieczorem" },
    { src: "/render-wejscie.jpg", alt: "elewacja drewniana" },
    { src: "/render-para.jpg", alt: "widok na działkę" },
    { src: "/render-deck.jpg", alt: "okna od ogrodu" },
    { src: "/render-wejscie.jpg", alt: "pierwsze piętro schodów" },
    { src: "/render-para.jpg", alt: "para domów bliźniaczych" },
    { src: "/render-deck.jpg", alt: "taras i salon" },
    { src: "/render-wejscie.jpg", alt: "wejście od Szmaragdowej" },
    { src: "/render-para.jpg", alt: "7A i 7B w bryle" },
    { src: "/render-deck.jpg", alt: "detal elewacji" },
    { src: "/render-wejscie.jpg", alt: "wejście z podjazdu" },
    { src: "/render-para.jpg", alt: "Morzyczyn — plac budowy" },
  ],
  specsTitle: "informacje",
  lotSpecs: [
    { label: "obiekt", value: "dwa domy bliźniacze na jednej działce · 7A / 7B" },
    { label: "status", value: "w budowie" },
    { label: "adres inwestycji", value: "ul. Szmaragdowa 7, 73-108 Morzyczyn" },
  ],
  siteBasicsTitle: "podstawowe informacje",
  siteBasics: [
    { label: "kontakt", value: `${studio.phone} · ${studio.email}` },
    { label: "zespół", value: "Martyna Miłowska & Jakub Palka" },
    { label: "firma", value: site.legalName },
    { label: "adres pracowni", value: `${studio.address}, ${studio.postalCode} ${studio.city}` },
  ],
} as const;

export const pracownia = {
  title: "pracownia",
  paragraphs: [
    "Sklep z domami to mała pracownia projektowo-wykonawcza z Szczecina. Projektujemy i budujemy domy jednorodzinne — od pierwszego szkicu po klucz na placu budowy.",
    "Obecnie realizujemy inwestycję Szmaragdowa 7 — parę domów bliźniaczych nad Miedwiem. Jakub Palka odpowiada za architekturę wnętrz; Martyna Miłowska prowadzi proces inwestycyjny.",
  ],
  processTitle: "proces",
  process: [
    { step: "01", title: "rozmowa", text: "Spotkanie w pracowni lub na działce." },
    { step: "02", title: "projekt", text: "Bryła, układ, materiały — jeden spójny język." },
    { step: "03", title: "budowa", text: "Prowadzimy roboty na własnym obiekcie." },
    { step: "04", title: "oddanie", text: "Dom gotowy do zamieszkania." },
  ],
} as const;

export const kontakt = {
  title: "kontakt",
  intro: "Jeden adres, jeden telefon, jedna skrzynka.",
} as const;

export const booking = {
  label: "Umów wizytę",
  panelTitle: "Umów wizytę",
  panelSubtitle: "oględziny na placu budowy",
  locationLine: "Szmaragdowa 7, Morzyczyn",
  dateLabel: "data wizyty",
  timeLabel: "godzina",
  visitTimes: ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00"] as const,
  confirmLabel: "Request visit",
  confirmHint: "otwiera wiadomość e-mail — bez płatności online",
  mailtoSubject: "Wizyta na budowie — Szmaragdowa 7, Morzyczyn",
} as const;

export const nav = [
  { href: "/pracownia", label: "pracownia" },
  { href: "/kontakt", label: "kontakt" },
] as const;
