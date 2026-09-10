import { site, studio } from "@/lib/site";

const administratorBlock = [
  `Administratorem danych osobowych jest ${site.legalNameFull} z siedzibą w Szczecinie (adres: ${studio.address}, ${studio.postalCode} ${studio.city}), wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez ${studio.court} pod numerem KRS: ${studio.krs}, NIP: ${studio.nip}, REGON: ${studio.regon}.`,
  `Spółka jawna reprezentowana jest przez wspólników: ${studio.partners.map((p) => p.name).join(", ")}. Każdy wspólnik ma prawo samodzielnie reprezentować spółkę.`,
];

export const pl = {
  metadata: {
    titleDefault: `Domy na sprzedaż Szmaragdowa 7 Morzyczyn | ${site.name}`,
    titleTemplate: `%s · ${site.name}`,
    description:
      "Kameralne domy bliźniacze Szmaragdowa 7 w Morzyczynie nad jeziorem Miedwie. Cztery lokale 7A–7D, wygodny dojazd do Szczecina i Stargardu. Umów wizytę online.",
    aboutTitle: "O nas",
    aboutDescription:
      "Sklep z Domami projektuje i buduje domy od wyboru miejsca po materiały i wnętrza. Inwestycja Szmaragdowa 7 w Morzyczynie nad Miedwiem.",
    contactTitle: "Kontakt",
    contactDescription:
      "Kontakt do Sklepu z Domami: +48 504 194 854, biuro@sklepzdomami.pl. Pracownia w Szczecinie, inwestycja Szmaragdowa 7 w Morzyczynie. Umów wizytę.",
  },
  nav: {
    ariaLabel: "nawigacja",
    mobileAriaLabel: "menu mobilne",
    openMenu: "Otwórz menu",
    closeMenu: "Zamknij menu",
    homeAriaLabel: "sklep z domami",
    items: [
      { href: "/o-nas", label: "o nas" },
      { href: "/kontakt", label: "kontakt" },
    ],
  },
  language: {
    ariaLabel: "Wybór języka",
    switchTo: "Zmień język na",
  },
  footer: {
    ariaLabel: "stopka",
    copyright: "© 2026 Sklep z domami — sklepzdomami.com. Wszystkie prawa zastrzeżone.",
    disclaimer:
      "Przedstawiona oferta ma charakter informacyjny i nie stanowi oferty handlowej w rozumieniu art. 66¹ Kodeksu Cywilnego. Powierzchnie podano według Polskiej Normy PN-ISO 9836:2015-12, bez uwzględnienia tynków. Ostateczny pomiar powierzchni zostanie określony na podstawie inwentaryzacji powykonawczej. Prezentowane w treści oferty rysunki, wizualizacje oraz mapy mają wyłącznie charakter poglądowy i ich ostateczny kształt może ulec zmianie.",
    legalPages: [
      { href: "/polityka-prywatnosci", label: "polityka prywatności" },
      { href: "/polityka-cookies", label: "polityka cookies" },
    ],
  },
  cookieNotice: {
    ariaLabel: "informacja o plikach cookies",
    beforeLinks: "Serwis korzysta wyłącznie z niezbędnych plików cookies. Szczegóły w ",
    cookiesLink: "polityce cookies",
    betweenLinks: " i ",
    privacyLink: "polityce prywatności",
    afterLinks: ".",
    ok: "OK",
  },
  notFound: {
    title: "Strona nie została znaleziona",
    body: "Adres, którego szukasz, nie istnieje lub został przeniesiony.",
    back: "Wróć na stronę główną",
  },
  ui: {
    expandAll: "rozwiń wszystko",
    total: "razem",
    buildingTotal: "powierzchnia całkowita",
    floorAriaLabel: "kondygnacja",
    plansComingSoon: "Rzuty dla lokalu {lot} — wkrótce.",
    livingSpaceHeadline: "powierzchnia domu — nagłówek",
    livingSpace: "powierzchnia domu",
    coordinates: "współrzędne inwestycji",
    mapLotsAria: "lokale na mapie",
    driveViewAlt: "widok na inwestycję od podjazdu — Szmaragdowa 7",
    dayAlt: "wizualizacja dzienna — Szmaragdowa 7",
    nightAlt: "wizualizacja nocna — Szmaragdowa 7",
    dayNightCompare: "porównanie wizualizacji dzień i noc",
    gallery: "galeria zdjęć inwestycji",
  },
  studio: {
    partnerRoles: ["wspólnik", "architekt wnętrz, wspólnik"],
    representation: "każdy wspólnik ma prawo samodzielnie reprezentować spółkę",
  },
  rooms: {
    vestibule: "przedsionek",
    livingKitchen: "strefa dzienna z kuchnią",
    terrace: "taras",
    office: "pom. biurowe",
    pantry: "spiżarnia",
    bathroom: "łazienka",
    technical: "pom. techniczne",
    bedroom1: "sypialnia 1",
    bedroom2: "sypialnia 2",
    bedroom3: "sypialnia 3",
    laundry: "pralnia",
    hall: "hol",
  },
  floors: {
    ground: "parter",
    upper: "piętro",
    groundPlanAlt: "rzut parteru — lokal {lot}, Szmaragdowa 7",
    upperPlanAlt: "rzut piętra — lokal {lot}, Szmaragdowa 7",
  },
  investment: {
    title: "Szmaragdowa 7",
    subtitle: "Morzyczyn, zachodniopomorskie",
    tagline: "Twoja przystań nad Miedwiem",
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
      detailAlts: [
        "smart zamek i drzwi wejściowe — Szmaragdowa 7",
        "detal elewacji — drewno i blacha Ruukki Pro",
        "panele elewacyjne drewniane — detal",
      ],
    },
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
    closing: {
      line1: "Szmaragdowa 7, Morzyczyn",
      line2: "7A i 7B · w budowie",
    },
    sequences: [
      {
        kickerBold: "taras 7B",
        body: "Strefa dzienna wychodzi na taras. Elewacja z lameli — widok od ogrodu.",
        alt: "elewacja drewniana i ogród — golden hour",
      },
      {
        kickerBold: "wejście",
        body: "Podjazd żwirowy i zadaszone drzwi. Elewacja od strony ulicy Szmaragdowej.",
        alt: "elewacja od ulicy — golden hour",
      },
      {
        alt: "wejście i podjazd",
        copy: {
          openingBold: "Dom nad Miedwiem, blisko wszystkiego, co ważne.",
          body: "Poranna kawa nad jeziorem, spacer promenadą, rower, żagle albo rodzinne popołudnie na plaży - Morzyczyn pozwala korzystać z natury każdego dnia.",
          closingBold:
            "Wystarczająco blisko Szczecina i Stargardu, by zachować wygodę miasta, i wystarczająco daleko, by poczuć zmianę rytmu oraz spokój własnego domu.",
        },
      },
    ] as [
      { kickerBold: string; body: string; alt: string },
      { kickerBold: string; body: string; alt: string },
      { alt: string; copy: { openingBold: string; body: string; closingBold: string } },
    ],
    captions: [
      {
        kickerBold: "taras",
        body: "Parter 7B: kuchnia i salon w jednej strefie, wyjście prosto na taras.",
        alt: "wnętrze — jadalnia i kuchnia",
      },
      {
        alt: "wnętrze — strefa dzienna",
        leadBeforeKey: "Oferujemy możliwość wykończenia wnętrza pod ",
        keyBold: "klucz",
        leadAfterKey:
          " - od koncepcji i układu funkcjonalnego po materiały, oświetlenie, zabudowy i ostatni detal.",
        closingBold: "Dopasowany do Ciebie, Twoich potrzeb i sposobu, w jaki chcesz mieszkać.",
      },
    ] as [
      { kickerBold: string; body: string; alt: string },
      {
        alt: string;
        leadBeforeKey: string;
        keyBold: string;
        leadAfterKey: string;
        closingBold: string;
      },
    ],
    sliderAlts: [
      "elewacja frontowa — para domów 7A i 7B",
      "jezioro — pomost przy zachodzie słońca",
      "para domów za ogrodzeniem — golden hour",
      "ścieżka drewniana między domami — wieczór",
      "wizualizacja nocna — Szmaragdowa 7",
      "detal — faktura drewna na elewacji",
      "wizualizacja dzienna — Szmaragdowa 7",
      "jezioro — brzeg i woda",
    ],
    specsTitle: "informacje",
    lotSpecs: [
      { id: "price", label: "cena", value: "8900 zł za m²" },
      { id: "status", label: "status", value: "w budowie" },
      { id: "address", label: "adres inwestycji", value: "ul. Szmaragdowa 7, 73-108 Morzyczyn" },
    ],
    siteBasicsTitle: "Informacje",
    siteBasics: [
      { id: "contact", label: "kontakt" },
      {
        id: "team",
        label: "zespół",
        value: "Martyna Miłowska, Jakub Palka, Jarosław Miś, Beata Johansen",
      },
      {
        id: "company",
        label: "firma",
        value: `${site.legalNameFull} · KRS ${studio.krs} · NIP ${studio.nip} · REGON ${studio.regon}`,
      },
      {
        id: "studioAddress",
        label: "adres pracowni",
        value: `${studio.address}, ${studio.postalCode} ${studio.city}`,
      },
    ],
  },
  map: {
    title: "Mapa inwestycji",
    subtitle: "wybierz jeden z czterech domów.",
    imageAlt: "mapa działki Szmaragdowa 7 — najechanie na lokal odsłania jego warstwę",
  },
  about: {
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
  },
  contact: {
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
    labels: {
      people: "osoby",
      phone: "telefon",
      email: "e-mail",
      studio: "pracownia",
      social: "social media",
    },
    errors: {
      invalidPayload: "Nieprawidłowe dane formularza.",
      generic: "Nie udało się wysłać wiadomości.",
      name: "Podaj imię i nazwisko (min. 2 znaki).",
      email: "Podaj poprawny adres e-mail.",
      phone: "Numer telefonu jest zbyt długi.",
      message: "Wiadomość powinna mieć od 10 do 4000 znaków.",
      unavailable: "Formularz kontaktowy jest chwilowo niedostępny. Napisz na biuro@sklepzdomami.pl.",
      sendFailed:
        "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio na biuro@sklepzdomami.pl.",
    },
  },
  booking: {
    label: "Umów wizytę",
    panelTitle: "Umów wizytę",
    panelSubtitle: "oględziny na placu budowy",
    locationLine: "Szmaragdowa 7, Morzyczyn",
    dateLabel: "data wizyty",
    timeLabel: "godzina",
    confirmLabel: "Umów wizytę",
    close: "zamknij",
    prevMonth: "poprzedni miesiąc",
    nextMonth: "następny miesiąc",
    available: "dostępne",
    booked: "zajęte",
    selected: "wybrane",
    stepLabel: "kroki rezerwacji",
    stepDateTime: "data i godzina",
    stepDetails: "dane kontaktowe",
    nextLabel: "dalej",
    phoneHint: "lub zadzwoń:",
    backLabel: "wróć",
    firstNameLabel: "imię",
    lastNameLabel: "nazwisko",
    emailLabel: "e-mail",
    phoneLabel: "telefon",
    selectedSummary: "Wybrany termin: {date} o {time}",
    submittingLabel: "rezerwowanie…",
    loadingAvailability: "sprawdzanie dostępności…",
    successTitle: "Wizyta umówiona",
    successSubtitle: "dziękujemy za rezerwację",
    successMessage:
      "Twoja wizyta została zarezerwowana. Wysłaliśmy potwierdzenie na podany adres e-mail.",
    addToCalendarHint: "Dodaj spotkanie do swojego kalendarza:",
    addToGoogle: "Dodaj do Google Calendar",
    addToApple: "Dodaj do kalendarza Apple",
    closeSuccess: "zamknij",
    eventTitle: "Wizyta na budowie — {name}",
    eventDescription:
      "Oględziny inwestycji Szmaragdowa 7.\nAdres: {location}",
    errors: {
      invalidPayload: "Nieprawidłowe dane formularza.",
      generic: "Nie udało się wysłać zapytania o wizytę.",
      date: "Podaj poprawną datę wizyty.",
      time: "Wybierz dostępną godzinę wizyty.",
      datePast: "Data wizyty nie może być z przeszłości.",
      firstName: "Podaj imię (min. 2 znaki).",
      lastName: "Podaj nazwisko (min. 2 znaki).",
      email: "Podaj poprawny adres e-mail.",
      phone: "Podaj numer telefonu (min. 7 znaków).",
      unavailable: "Rezerwacja wizyt jest chwilowo niedostępna. Napisz na biuro@sklepzdomami.pl.",
      slotTaken: "Ten termin jest już zajęty. Wybierz inną datę lub godzinę.",
      sendFailed: "Nie udało się zarezerwować wizyty. Spróbuj ponownie lub napisz na biuro@sklepzdomami.pl.",
    },
  },
  privacy: {
    title: "Polityka prywatności",
    description: "Polityka prywatności serwisu Sklep z Domami — Szmaragdowa 7.",
    effectivePrefix: "Obowiązuje od",
    effectiveDate: "2026-09-09",
    sections: [
      {
        title: "1. Definicje",
        paragraphs: [
          "Administrator – Sklep z Domami M. Miłowska, J. Palka Spółka Jawna, dane kontaktowe wskazane w sekcji „Dane kontaktowe”.",
          "Dane osobowe – wszelkie informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej.",
          `Polityka – niniejszy dokument dostępny pod adresem ${site.url}/polityka-prywatnosci.`,
          "RODO – Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych.",
          `Serwis – serwis internetowy prowadzony przez Administratora pod adresem ${site.url}.`,
          "Użytkownik – każda osoba fizyczna odwiedzająca Serwis lub korzystająca z jego funkcji.",
        ],
      },
      {
        title: "2. Przetwarzanie danych w związku z korzystaniem z Serwisu",
        paragraphs: [
          `W związku z korzystaniem przez Użytkownika z Serwisu ${site.url} Administrator zbiera dane w zakresie niezbędnym do prezentacji oferty inwestycji Szmaragdowa 7, obsługi zapytań oraz zapewnienia prawidłowego działania strony.`,
          "Serwis ma charakter informacyjny. Nie prowadzimy rejestracji kont użytkowników, newslettera ani sprzedaży online z płatnością przez stronę.",
        ],
      },
      {
        title: "3. Cele oraz podstawy prawne przetwarzania danych",
        paragraphs: [
          "Dane osobowe przetwarzamy w następujących celach:",
          "· prezentacja oferty i informacji o inwestycji Szmaragdowa 7;",
          "· obsługa zapytań przesłanych telefonicznie, e-mailem lub przez formularz umawiania wizyty na stronie;",
          "· organizacja wizyt na placu budowy po wcześniejszym kontakcie;",
          "· prowadzenie profili w mediach społecznościowych (Facebook, X);",
          "· zapewnienie bezpieczeństwa Serwisu i obrona przed nadużyciami;",
          "· dochodzenie lub obrona przed roszczeniami.",
          "Podstawy prawne przetwarzania:",
          "· art. 6 ust. 1 lit. b RODO – działania na żądanie osoby, której dane dotyczą, przed zawarciem umowy;",
          "· art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes Administratora (prowadzenie Serwisu, bezpieczeństwo, korespondencja);",
          "· art. 6 ust. 1 lit. a RODO – wyłącznie w przypadku wyrażenia odrębnej zgody, jeśli zostanie wprowadzona w przyszłości.",
        ],
      },
      {
        title: "4. Nawiązywanie kontaktu i umawianie wizyt",
        paragraphs: [
          `Dane podane przy kontakcie telefonicznym, mailowym (${studio.email}) lub podczas umawiania wizyty przez funkcję „Umów wizytę” na stronie (imię, nazwisko, e-mail, telefon, wybrany termin) przetwarzamy w celu odpowiedzi na zapytania, rezerwacji terminu i organizacji spotkania na placu budowy. Termin wizyty może być zapisany w kalendarzu Google Administratora.`,
          "Zakres danych może obejmować: imię i nazwisko, numer telefonu, adres e-mail, preferowany termin wizyty oraz treść wiadomości.",
          "Dane z korespondencji przechowujemy przez czas niezbędny do obsługi sprawy, a następnie przez okres wymagany przepisami lub do czasu przedawnienia roszczeń.",
        ],
      },
      {
        title: "5. Portale społecznościowe",
        paragraphs: [
          "Administrator prowadzi profile na Facebooku i X (Twitter). Po przejściu na profile te serwisy stają się odrębnymi administratorami danych i stosują własne zasady przetwarzania:",
          "· Facebook: https://www.facebook.com/privacy/policy/",
          "· X: https://x.com/en/privacy",
          "Dane przekazane w komentarzach lub wiadomościach prywatnych na tych platformach przetwarzamy w celu komunikacji z Użytkownikami i promowania inwestycji.",
        ],
      },
      {
        title: "6. Pliki cookies",
        paragraphs: [
          `Serwis korzysta z plików cookies. Szczegółowe informacje znajdują się w Polityce cookies: ${site.url}/polityka-cookies.`,
        ],
      },
      {
        title: "7. Okres przetwarzania danych osobowych",
        paragraphs: [
          "Dane przetwarzamy przez okres niezbędny do realizacji celu, w tym:",
          "· korespondencja – do zakończenia sprawy, nie dłużej niż 3 lata od ostatniego kontaktu, chyba że przepisy wymagają dłuższego okresu;",
          "· dane techniczne logów serwera – zgodnie z polityką hostingodawcy, zwykle do 30 dni;",
          "· dane przetwarzane na podstawie zgody – do jej wycofania.",
          "Po upływie okresu przetwarzania dane są usuwane lub anonimizowane.",
        ],
      },
      {
        title: "8. Uprawnienia Użytkownika",
        paragraphs: [
          "Przysługują Ci prawa:",
          "· dostępu do treści danych (art. 15 RODO);",
          "· sprostowania danych (art. 16 RODO);",
          "· usunięcia danych (art. 17 RODO);",
          "· ograniczenia przetwarzania (art. 18 RODO);",
          "· przenoszenia danych (art. 20 RODO);",
          "· sprzeciwu wobec przetwarzania (art. 21 RODO);",
          "· wycofania zgody w dowolnym momencie, jeśli przetwarzanie opiera się na zgodzie;",
          "· wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa, kancelaria@uodo.gov.pl).",
          `W celu realizacji praw skontaktuj się z Administratorem: ${studio.email}.`,
        ],
      },
      {
        title: "9. Odbiorcy danych",
        paragraphs: [
          "Dane mogą być przekazywane podmiotom wspierającym Administratora, w szczególności:",
          "· Vercel Inc. – hosting i dostarczanie Serwisu;",
          "· dostawcom usług e-mail i telekomunikacyjnych;",
          "· podmiotom świadczącym usługi księgowe i prawne – w zakresie niezbędnym do realizacji obowiązków.",
          "Dane mogą zostać ujawnione organom publicznym, jeśli wymaga tego prawo.",
        ],
      },
      {
        title: "10. Przekazywanie danych poza EOG",
        paragraphs: [
          "Hosting Serwisu może wiązać się z przekazywaniem danych technicznych (np. adres IP, logi) do państw trzecich, w tym USA, przez Vercel Inc.",
          "Przekazywanie odbywa się z zastosowaniem mechanizmów zapewniających odpowiedni stopień ochrony, w tym standardowych klauzul umownych zatwierdzonych przez Komisję Europejską.",
        ],
      },
      {
        title: "11. Bezpieczeństwo danych osobowych",
        paragraphs: [
          "Administrator stosuje środki techniczne i organizacyjne odpowiednie do ryzyka, w tym szyfrowanie transmisji (HTTPS), kontrolę dostępu oraz regularne aktualizacje oprogramowania.",
          "Dane są zbierane w zakresie adekwatnym do celu i przechowywane nie dłużej niż to konieczne.",
        ],
      },
      {
        title: "12. Dane kontaktowe",
        paragraphs: [
          ...administratorBlock,
          `Kontakt w sprawach ochrony danych osobowych: ${studio.email}, tel. ${studio.phone}.`,
        ],
      },
      {
        title: "13. Zmiany Polityki prywatności",
        paragraphs: [
          "Polityka jest weryfikowana i w razie potrzeby aktualizowana. O istotnych zmianach poinformujemy w Serwisie.",
          "Polityka obowiązuje od 2026-09-09.",
          "Niniejszy dokument ma charakter informacyjny i nie zastępuje indywidualnej porady prawnej.",
        ],
      },
    ],
  },
  cookies: {
    title: "Polityka cookies",
    description: "Polityka plików cookies serwisu Sklep z Domami.",
    effectivePrefix: "Obowiązuje od",
    effectiveDate: "2026-09-09",
    sections: [
      {
        title: "1. Wprowadzenie",
        paragraphs: [
          ...administratorBlock,
          `Kontakt w sprawach cookies i danych osobowych: ${studio.email}, adres korespondencyjny: ${studio.address}, ${studio.postalCode} ${studio.city}.`,
          `Nasza strona internetowa ${site.url} (dalej: „Serwis”) korzysta z plików cookies i podobnych technologii.`,
          "Klikając linki do serwisów zewnętrznych (Facebook, X) możesz zostać przekierowany na strony administrowane przez inne podmioty, które stosują własne polityki cookies.",
        ],
      },
      {
        title: "2. Czym są cookies?",
        paragraphs: [
          "Pliki cookies to niewielkie pliki tekstowe zapisywane w przeglądarce użytkownika. Służą do zapewnienia prawidłowego działania strony, zapamiętania ustawień oraz – jeśli użytkownik wyrazi zgodę – do analityki lub marketingu.",
          "Cookies mogą zbierać dane techniczne, takie jak adres IP, identyfikator sesji lub preferencje wyświetlania.",
        ],
      },
      {
        title: "3. Czym są skrypty?",
        paragraphs: [
          "Skrypt to fragment kodu programu uruchamiany w celu zapewnienia interaktywnego działania Serwisu. Kod może być wykonywany na serwerze hostingowym lub w urządzeniu użytkownika.",
        ],
      },
      {
        title: "4. Rodzaje plików cookies używanych w Serwisie",
        paragraphs: [
          "W Serwisie stosujemy wyłącznie cookies niezbędne do działania strony oraz zapis informacji o zapoznaniu się z niniejszą polityką. Nie używamy obecnie narzędzi analitycznych (np. Google Analytics), marketingowych (np. Facebook Pixel) ani funkcjonalnych chatów.",
        ],
      },
      {
        title: "4.1. Cookies niezbędne (techniczne)",
        paragraphs: [
          "Zapewniają prawidłowe działanie Serwisu, bezpieczeństwo i dostarczanie treści. Mogą być ustawiane bez zgody użytkownika.",
          "Przykładowe cookies w Serwisie:",
        ],
      },
      {
        title: "Tabela cookies niezbędnych",
        paragraphs: [
          "cookie_notice_dismissed | sklepzdomami.com | 12 miesięcy | Zapis informacji, że użytkownik zapoznał się z komunikatem o cookies.",
          "NEXT_LOCALE | sklepzdomami.com | 12 miesięcy | Zapamiętanie wybranego języka strony.",
          "Pliki sesyjne hostingu Vercel | sklepzdomami.com / vercel.app | sesja / krótki okres | Utrzymanie połączenia, równoważenie obciążenia, bezpieczeństwo infrastruktury.",
        ],
      },
      {
        title: "4.2. Cookies analityczne",
        paragraphs: [
          "Obecnie nie stosujemy cookies analitycznych. Jeśli zostaną wprowadzone w przyszłości, zaktualizujemy niniejszą politykę i – jeśli wymagane – poprosimy o zgodę.",
        ],
      },
      {
        title: "4.3. Cookies marketingowe",
        paragraphs: [
          "Obecnie nie stosujemy cookies marketingowych ani remarketingowych.",
        ],
      },
      {
        title: "4.4. Cookies funkcjonalne",
        paragraphs: [
          "Obecnie nie stosujemy cookies związanych z czatem online ani personalizacją interfejsu poza niezbędnymi ustawieniami technicznymi. Wybrany język strony może zostać zapisany, aby zapamiętać preferencję użytkownika.",
        ],
      },
      {
        title: "5. Cookies serwisów zewnętrznych",
        paragraphs: [
          "Po kliknięciu linków do profili społecznościowych (Facebook, X) lub innych stron trzecich mogą zostać ustawione cookies administrowane przez te podmioty. Administrator Serwisu nie kontroluje cookies poza domeną sklepzdomami.com.",
        ],
      },
      {
        title: "6. Zarządzanie cookies",
        paragraphs: [
          "Możesz w każdej chwili zmienić ustawienia cookies w swojej przeglądarce – zablokować, usunąć lub ograniczyć zapisywanie plików.",
          "Wyłączenie cookies niezbędnych może utrudnić lub uniemożliwić korzystanie z części funkcji Serwisu.",
          "Instrukcje zarządzania cookies znajdziesz w dokumentacji przeglądarki (Chrome, Firefox, Safari, Edge).",
        ],
      },
      {
        title: "7. Podstawa prawna",
        paragraphs: [
          "Cookies niezbędne przetwarzamy na podstawie art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes – działanie Serwisu) oraz art. 173 ustawy Prawo telekomunikacyjne.",
          "Cookies opcjonalne – gdy zostaną wprowadzone – będą wymagały zgody użytkownika (art. 6 ust. 1 lit. a RODO).",
        ],
      },
      {
        title: "8. Zmiany Polityki cookies",
        paragraphs: [
          "Polityka cookies jest weryfikowana i aktualizowana w miarę zmian w Serwisie lub przepisach prawa.",
          "Polityka obowiązuje od 2026-09-09.",
          "Niniejszy dokument ma charakter informacyjny i nie zastępuje indywidualnej porady prawnej.",
        ],
      },
    ],
  },
};

export type Dictionary = typeof pl;
