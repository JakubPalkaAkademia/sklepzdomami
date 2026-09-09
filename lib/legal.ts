import { site, studio } from "@/lib/site";

export type LegalSection = {
  title: string;
  paragraphs: string[];
};

const administratorBlock = [
  `Administratorem danych osobowych jest ${site.legalNameFull} z siedzibą w Szczecinie (adres: ${studio.address}, ${studio.postalCode} ${studio.city}), wpisana do rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez ${studio.court} pod numerem KRS: ${studio.krs}, NIP: ${studio.nip}, REGON: ${studio.regon}.`,
  `Spółka jawna reprezentowana jest przez wspólników: ${studio.partners.map((p) => p.name).join(", ")}. ${studio.representation.charAt(0).toUpperCase()}${studio.representation.slice(1)}.`,
];

export const privacyPolicyEffectiveDate = "2026-09-09";

export const privacyPolicySections: LegalSection[] = [
  {
    title: "1. Definicje",
    paragraphs: [
      "Administrator – Sklep z Domami M. Miłowska, J. Palka Spółka Jawna, dane kontaktowe wskazane w sekcji „Dane kontaktowe”.",
      "Dane osobowe – wszelkie informacje o zidentyfikowanej lub możliwej do zidentyfikowania osobie fizycznej.",
      "Polityka – niniejszy dokument dostępny pod adresem https://sklepzdomami.com/polityka-prywatnosci.",
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
      "· obsługa zapytań przesłanych telefonicznie, e-mailem lub przez formularz umawiania wizyty (mailto);",
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
      `Dane podane przy kontakcie telefonicznym, mailowym (${studio.email}) lub podczas umawiania wizyty przez funkcję „Umów wizytę” (otwarcie wiadomości e-mail) przetwarzamy w celu odpowiedzi na zapytania i organizacji spotkania na placu budowy.`,
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
      "Serwis korzysta z plików cookies. Szczegółowe informacje znajdują się w Polityce cookies: https://sklepzdomami.com/polityka-cookies.",
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
      `Polityka obowiązuje od ${privacyPolicyEffectiveDate}.`,
      "Niniejszy dokument ma charakter informacyjny i nie zastępuje indywidualnej porady prawnej.",
    ],
  },
];

export const cookiesPolicyEffectiveDate = "2026-09-09";

export const cookiesPolicySections: LegalSection[] = [
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
      "Obecnie nie stosujemy cookies związanych z czatem online ani personalizacją interfejsu poza niezbędnymi ustawieniami technicznymi.",
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
      `Polityka obowiązuje od ${cookiesPolicyEffectiveDate}.`,
      "Niniejszy dokument ma charakter informacyjny i nie zastępuje indywidualnej porady prawnej.",
    ],
  },
];
