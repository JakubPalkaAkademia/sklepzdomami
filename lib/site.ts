export const site = {
  name: "sklep z domami",
  legalName: "Sklep z Domami M. Miłowska, J. Palka sp.j.",
  legalNameFull: "Sklep z Domami M. Miłowska, J. Palka Spółka Jawna",
  domain: "sklepzdomami.com",
  url: "https://sklepzdomami.com",
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
  regon: "529623912",
  court:
    "Sąd Rejonowy Szczecin-Centrum w Szczecinie, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego",
  registeredAt: "2024-09-11",
  representation: "każdy wspólnik ma prawo samodzielnie reprezentować spółkę",
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

export const legalPages = [
  { href: "/polityka-prywatnosci", label: "polityka prywatności" },
  { href: "/polityka-cookies", label: "polityka cookies" },
] as const;

export const legalDisclaimer =
  "Przedstawiona oferta ma charakter informacyjny i nie stanowi oferty handlowej w rozumieniu art. 66¹ Kodeksu Cywilnego. Powierzchnie podano według Polskiej Normy PN-ISO 9836:2015-12, bez uwzględnienia tynków. Ostateczny pomiar powierzchni zostanie określony na podstawie inwentaryzacji powykonawczej. Prezentowane w treści oferty rysunki, wizualizacje oraz mapy mają wyłącznie charakter poglądowy i ich ostateczny kształt może ulec zmianie.";

export const hero = {
  /** Lake loop — seamless crossfade in hero.mp4 */
  poster: "/hero-poster.jpg",
  videoMp4: "/hero.mp4",
  coverVideoMp4: "/hero-cover.mp4",
  useVideo: true,
} as const;

/** Szmaragdowa 7 — single investment, two buildings side by side. */
export const investment = {
  title: "Szmaragdowa 7",
  subtitle: "Morzyczyn, zachodniopomorskie",
  tagline: "Twoja przystań nad Miedwiem",
  latitude: 53.35312,
  longitude: 14.90159,
  address: "ul. Szmaragdowa 7, 73-108 Morzyczyn",
  locationLabel: "morzyczyn, szmaragdowa 7",
  status: "w budowie",
  intro:
    "Kameralna zabudowa dwóch domów bliźniaczych blisko jeziora dla osób, które chcą mieszkać spokojniej, a jednocześnie mieć wygodny dojazd do Szczecina i Stargardu.",
  featureBlock: {
    paragraphs: [
      "Sklep z Domami powstał z prostego założenia: zakup domu powinien być przejrzysty i prosty.",
      "Wybierz swój, umów wizytę online i zobacz go na miejscu. Wszystko, czego potrzebujesz, aby podjąć dobrą decyzję w jednym miejscu.",
      "Domu nie kupuje się w pośpiechu. Można za to wybierać go prościej.",
    ],
  },
  facadeBlock: {
    heading:
      "Nowoczesna architektura nie potrzebuje wielu dodatków. Potrzebuje dobrych materiałów i detali.",
    paragraphs: [
      "Wybraliśmy wysokiej klasy panele elewacyjne, blachę Ruukki Pro oraz system ukrytych rynien. Uzupełniają je rozwiązania smart, między innymi w zakresie drzwi i oświetlenia, oraz dwukolorowa aluminiowa stolarka z dużymi przesuwnymi przeszkleniami, które otwierają część dzienną na ogród i wpuszczają do wnętrza dużo naturalnego światła. Wysoka izolacyjność stolarki zapewnia komfort przez cały rok.",
    ],
    detailImages: [
      { src: "/detail-door.jpg", alt: "smart zamek i drzwi wejściowe — Szmaragdowa 7" },
      { src: "/detail-facade.jpg", alt: "detal elewacji — drewno i blacha Ruukki Pro" },
      { src: "/detail-wood.jpg", alt: "panele elewacyjne drewniane — detal" },
    ],
  },
  quote: "Jezioro pod ręką. Miasto w zasięgu. Dom, do którego dobrze się wraca.",
  quoteLines: [
    "Jezioro pod ręką. Miasto w zasięgu.",
    "Dom, do którego dobrze się wraca.",
  ],
  turnkeyHeading: "Dom gotowy na Twój sposób życia.",
  livingSpace: {
    lead: "Nawet",
    area: "170 m²",
    tagline: "przestrzeni do życia.",
    features: [
      "Duża strefa dzienna.",
      "Prywatne pokoje.",
      "Przestrzeń do pracy.",
      "Miejsce na spotkania.",
      "Miejsce na ciszę.",
    ],
  },
  coordinatesDecimal: "53.35312° N  14.90159° E",
  coordinatesDms: "53°21'11.2\"N  14°54'05.7\"E",
  closing: {
    line1: "Szmaragdowa 7, Morzyczyn",
    line2: "7A i 7B · w budowie",
  },
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
    large: "/render-front.jpg",
    coords: "/render-para.jpg",
    entrance: "/render-wejscie.jpg",
    day: "/render-day.jpg",
    night: "/render-night.jpg",
  },
  sequences: [
    {
      kickerBold: "taras 7B",
      body: "Strefa dzienna wychodzi na taras. Elewacja z lameli — widok od ogrodu.",
      image: "/render-garden.jpg",
      alt: "elewacja drewniana i ogród — golden hour",
    },
    {
      kickerBold: "wejście",
      body: "Podjazd żwirowy i zadaszone drzwi. Elewacja od strony ulicy Szmaragdowej.",
      image: "/render-street.jpg",
      alt: "elewacja od ulicy — golden hour",
    },
    {
      image: "/render-wejscie.jpg",
      alt: "wejście i podjazd",
      copy: {
        openingBold: "Dom nad Miedwiem, blisko wszystkiego, co ważne.",
        body:
          "Poranna kawa nad jeziorem, spacer promenadą, rower, żagle albo rodzinne popołudnie na plaży - Morzyczyn pozwala korzystać z natury każdego dnia.",
        closingBold:
          "Wystarczająco blisko Szczecina i Stargardu, by zachować wygodę miasta, i wystarczająco daleko, by poczuć zmianę rytmu oraz spokój własnego domu.",
      },
    },
  ],
  captions: [
    {
      kickerBold: "taras",
      body: "Parter 7B: kuchnia i salon w jednej strefie, wyjście prosto na taras.",
      image: "/render-interior-dining.jpg",
      alt: "wnętrze — jadalnia i kuchnia",
    },
    {
      image: "/render-interior-living.jpg",
      alt: "wnętrze — strefa dzienna",
      leadBeforeKey: "Oferujemy możliwość wykończenia wnętrza pod ",
      keyBold: "klucz",
      leadAfterKey:
        " - od koncepcji i układu funkcjonalnego po materiały, oświetlenie, zabudowy i ostatni detal.",
      closingBold:
        "Dopasowany do Ciebie, Twoich potrzeb i sposobu, w jaki chcesz mieszkać.",
    },
  ],
  slider: [
    { src: "/render-front.jpg", alt: "elewacja frontowa — para domów 7A i 7B" },
    { src: "/slider-lake-pier.jpg", alt: "jezioro — pomost przy zachodzie słońca" },
    { src: "/render-para.jpg", alt: "para domów za ogrodzeniem — golden hour" },
    { src: "/slider-boardwalk.jpg", alt: "ścieżka drewniana między domami — wieczór" },
    { src: "/render-night.jpg", alt: "wizualizacja nocna — Szmaragdowa 7", fit: "cover" },
    { src: "/slider-detail-bark.jpg", alt: "detal — faktura drewna na elewacji" },
    { src: "/render-day.jpg", alt: "wizualizacja dzienna — Szmaragdowa 7", fit: "cover" },
    { src: "/slider-lake-shore.jpg", alt: "jezioro — brzeg i woda", fit: "cover" },
  ],
  specsTitle: "informacje",
  lotSpecs: [
    { label: "cena", value: "8900 zł za m²" },
    { label: "status", value: "w budowie" },
    { label: "adres inwestycji", value: "ul. Szmaragdowa 7, 73-108 Morzyczyn" },
  ],
  siteBasicsTitle: "Informacje",
  siteBasics: [
    { label: "kontakt", value: "" },
    { label: "zespół", value: "Martyna Miłowska, Jakub Palka, Jarosław Miś, Beata Johansen" },
    {
      label: "firma",
      value: `${site.legalNameFull} · KRS ${studio.krs} · NIP ${studio.nip} · REGON ${studio.regon}`,
    },
    { label: "adres pracowni", value: `${studio.address}, ${studio.postalCode} ${studio.city}` },
  ],
} as const;

export const oNas = {
  title: "o nas",
  lead: "Tworzymy domy od początku do końca.",
  intro: [
    "Sklep z Domami powstał z potrzeby tworzenia domów w sposób bardziej świadomy — od wyboru miejsca i pierwszych decyzji projektowych, aż po materiały, wykończenie i wnętrze.",
    "Interesuje nas cały proces. Dlatego łączymy projektowanie, realizację i architekturę wnętrz, patrząc na dom jako na jedną, spójną całość.",
  ],
  sections: [
    {
      heading: "Zaczynamy od miejsca.",
      paragraphs: [
        "Każdy dom jest inny, bo każde miejsce jest inne. Światło, otoczenie, widoki, ogród i sposób, w jaki chcemy korzystać z przestrzeni, mają wpływ na projekt równie mocno jak sama architektura.",
        "Szmaragdowa 7 powstała właśnie z takiego podejścia. Bliskość Miedwia, spokojne otoczenie i duża działka stały się punktem wyjścia do stworzenia domu, który daje więcej przestrzeni i jednocześnie pozwala żyć bliżej natury.",
      ],
    },
    {
      heading: "Dbamy o to, co widać — i o to, czego nie widać.",
      paragraphs: [
        "Od początku zwracamy uwagę na materiały, proporcje i wykonanie. Wybieramy rozwiązania, które dobrze współgrają z architekturą domu i mają sprawdzać się przez lata.",
        "Tak samo podchodzimy do wnętrza. Dlatego dom może zostać wykończony pod klucz, z indywidualnym projektem dopasowanym do potrzeb i stylu życia jego mieszkańców.",
      ],
    },
    {
      heading: "Nie korzystamy z jednego gotowego schematu.",
      paragraphs: [
        "Chcemy tworzyć domy, które są przemyślane w każdym szczególe, ale jednocześnie naturalne i wygodne w codziennym życiu.",
        "Sklep z Domami to sposób na stworzenie domu, w którym projekt, materiały i wnętrze mogą od początku tworzyć jedną całość.",
      ],
    },
  ],
} as const;

export const kontakt = {
  title: "kontakt",
  intro: "Jeden adres, jeden telefon, jedna skrzynka.",
  formTitle: "napisz do nas",
  nameLabel: "imię i nazwisko",
  emailLabel: "e-mail",
  phoneLabel: "telefon (opcjonalnie)",
  messageLabel: "wiadomość",
  submitLabel: "wyślij wiadomość",
  submittingLabel: "wysyłanie…",
  formSuccess: "Dziękujemy — wiadomość została wysłana. Odpowiemy najszybciej jak to możliwe.",
  formError: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz na biuro@sklepzdomami.pl.",
} as const;

export const footerCopyright =
  "© 2026 Sklep z domami — sklepzdomami.com. Wszystkie prawa zastrzeżone.";

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
  { href: "/o-nas", label: "o nas" },
  { href: "/kontakt", label: "kontakt" },
] as const;
