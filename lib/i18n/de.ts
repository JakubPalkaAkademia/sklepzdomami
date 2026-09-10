import { site, studio } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/pl";

const administratorBlock = [
  `Verantwortlicher für die personenbezogenen Daten ist ${site.legalNameFull} mit Sitz in Stettin (Adresse: ${studio.address}, ${studio.postalCode} ${studio.city}), eingetragen im Unternehmerregister des Landesgerichtsregisters, geführt durch ${studio.court}, KRS: ${studio.krs}, NIP: ${studio.nip}, REGON: ${studio.regon}.`,
  `Die offene Handelsgesellschaft wird durch die Gesellschafter vertreten: ${studio.partners.map((p) => p.name).join(", ")}. Jeder Gesellschafter ist zur selbstständigen Vertretung der Gesellschaft berechtigt.`,
];

export const de: Dictionary = {
  metadata: {
    titleDefault: `Häuser zum Kauf Szmaragdowa 7 Morzyczyn | ${site.name}`,
    titleTemplate: `%s · ${site.name}`,
    description:
      "Doppelhaushälften an der Szmaragdowa 7 in Morzyczyn am Miedwie-See. Vier Einheiten 7A–7D, mit bequemer Anbindung nach Stettin und Stargard. Besuch online vereinbaren.",
    aboutTitle: "Über uns",
    aboutDescription:
      "Sklep z Domami entwirft und baut Häuser vom Ort und Entwurf bis zu Materialien und Innenräumen. Investition Szmaragdowa 7 in Morzyczyn am Miedwie-See.",
    contactTitle: "Kontakt",
    contactDescription:
      "Kontakt zu Sklep z Domami: +48 504 194 854, biuro@sklepzdomami.pl. Atelier in Stettin, Investition Szmaragdowa 7 in Morzyczyn. Besuch vereinbaren.",
  },
  nav: {
    ariaLabel: "Navigation",
    mobileAriaLabel: "Mobiles Menü",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    homeAriaLabel: "sklep z domami",
    items: [
      { href: "/o-nas", label: "über uns" },
      { href: "/kontakt", label: "kontakt" },
    ],
  },
  language: {
    ariaLabel: "Sprachauswahl",
    switchTo: "Sprache wechseln zu",
  },
  footer: {
    ariaLabel: "Fußzeile",
    copyright: "© 2026 Sklep z domami — sklepzdomami.com. Alle Rechte vorbehalten.",
    disclaimer:
      "Das dargestellte Angebot hat informativen Charakter und stellt kein Handelsangebot im Sinne von Art. 66¹ des polnischen Zivilgesetzbuches dar. Flächenangaben erfolgen gemäß der Polnischen Norm PN-ISO 9836:2015-12, ohne Berücksichtigung von Putz. Die endgültige Fläche wird auf Grundlage der Bestandsaufnahme nach Fertigstellung ermittelt. Zeichnungen, Visualisierungen und Pläne in diesem Angebot sind ausschließlich unverbindlich; ihre endgültige Gestalt kann sich ändern.",
    legalPages: [
      { href: "/polityka-prywatnosci", label: "datenschutz" },
      { href: "/polityka-cookies", label: "cookie-richtlinie" },
    ],
  },
  cookieNotice: {
    ariaLabel: "Hinweis zu Cookies",
    beforeLinks: "Diese Website verwendet ausschließlich notwendige Cookies. Details in der ",
    cookiesLink: "Cookie-Richtlinie",
    betweenLinks: " und der ",
    privacyLink: "Datenschutzerklärung",
    afterLinks: ".",
    ok: "OK",
  },
  notFound: {
    title: "Seite nicht gefunden",
    body: "Die gesuchte Adresse existiert nicht oder wurde verschoben.",
    back: "Zurück zur Startseite",
  },
  ui: {
    expandAll: "alle öffnen",
    total: "gesamt",
    buildingTotal: "Gesamtfläche",
    floorAriaLabel: "Geschoss",
    plansComingSoon: "Grundrisse für Einheit {lot} — demnächst.",
    livingSpaceHeadline: "Wohnfläche — Überschrift",
    livingSpace: "Wohnfläche",
    coordinates: "Koordinaten der Investition",
    mapLotsAria: "Häuser auf dem Plan",
    driveViewAlt: "Blick auf die Anlage von der Zufahrt — Szmaragdowa 7",
    dayAlt: "Tagesvisualisierung — Szmaragdowa 7",
    nightAlt: "Nachtvisualisierung — Szmaragdowa 7",
    dayNightCompare: "Vergleich der Visualisierungen Tag und Nacht",
    gallery: "Fotogalerie der Investition",
  },
  studio: {
    partnerRoles: ["Gesellschafter", "Innenarchitekt, Gesellschafter"],
    representation: "jeder Gesellschafter ist zur selbstständigen Vertretung der Gesellschaft berechtigt",
  },
  rooms: {
    vestibule: "Vorraum",
    livingKitchen: "Wohnbereich mit Küche",
    terrace: "Terrasse",
    office: "Büro",
    pantry: "Speisekammer",
    bathroom: "Bad",
    technical: "Technikraum",
    bedroom1: "Schlafzimmer 1",
    bedroom2: "Schlafzimmer 2",
    bedroom3: "Schlafzimmer 3",
    laundry: "Waschküche",
    hall: "Flur",
  },
  floors: {
    ground: "Erdgeschoss",
    upper: "Obergeschoss",
    groundPlanAlt: "Grundriss Erdgeschoss — Einheit {lot}, Szmaragdowa 7",
    upperPlanAlt: "Grundriss Obergeschoss — Einheit {lot}, Szmaragdowa 7",
  },
  investment: {
    title: "Szmaragdowa 7",
    subtitle: "Morzyczyn, Westpommern",
    tagline: "Ihr Ankerplatz am Miedwie-See",
    address: "Szmaragdowa 7, 73-108 Morzyczyn",
    locationLabel: "morzyczyn, szmaragdowa 7",
    status: "im Bau",
    intro:
      "Zwei Doppelhaushälften nahe am See für Menschen, die ruhiger wohnen und zugleich bequem nach Stettin und Stargard gelangen möchten.",
    featureBlock: {
      paragraphs: [
        "Sklep z Domami entstand aus einer einfachen Idee: Der Kauf eines Hauses sollte klar und unkompliziert sein.",
        "Wählen Sie Ihres, vereinbaren Sie online einen Besuch und sehen Sie es vor Ort. Alles, was Sie für eine gute Entscheidung brauchen, an einem Ort.",
        "Ein Haus kauft man nicht in Eile. Man kann es jedoch einfacher wählen.",
      ],
    },
    facadeBlock: {
      heading:
        "Moderne Architektur braucht nicht viele Zusätze. Sie braucht gute Materialien und Details.",
      paragraphs: [
        "Wir haben hochwertige Fassadenpaneele, Ruukki-Pro-Blech und ein System verdeckter Dachrinnen gewählt. Ergänzt werden sie durch Smart-Lösungen, unter anderem bei Türen und Beleuchtung, sowie zweifarbige Aluminiumfenster mit großen Schiebeverglasungen, die den Wohnbereich zum Garten öffnen und viel natürliches Licht ins Innere lassen. Die hohe Dämmung der Fenster sorgt das ganze Jahr über für Komfort.",
      ],
      detailAlts: [
        "Smart-Schloss und Eingangstür — Szmaragdowa 7",
        "Fassadendetail — Holz und Ruukki-Pro-Blech",
        "Holzfassadenpaneele — Detail",
      ],
    },
    quoteLines: [
      "Der See in Reichweite. Die Stadt zum Greifen nah.",
      "Ein Haus, in das man gern zurückkehrt.",
    ],
    turnkeyHeading: "Ein Haus, bereit für Ihre Art zu leben.",
    livingSpace: {
      lead: "Bis zu",
      area: "170 m²",
      tagline: "Wohnfläche.",
      features: [
        "Großer Wohnbereich.",
        "Private Zimmer.",
        "Raum zum Arbeiten.",
        "Platz für Begegnung.",
        "Platz für Ruhe.",
      ],
    },
    closing: {
      line1: "Szmaragdowa 7, Morzyczyn",
      line2: "7A und 7B · im Bau",
    },
    sequences: [
      {
        kickerBold: "Terrasse 7B",
        body: "Der Wohnbereich öffnet sich zur Terrasse. Lamellenfassade — Blick vom Garten.",
        alt: "Holzfassade und Garten — goldene Stunde",
      },
      {
        kickerBold: "Eingang",
        body: "Kieszufahrt und überdachte Tür. Die Fassade von der Szmaragdowa-Straße.",
        alt: "Straßenfassade — goldene Stunde",
      },
      {
        alt: "Eingang und Zufahrt",
        copy: {
          openingBold: "Ein Haus am Miedwie-See, nah an allem, was zählt.",
          body: "Morgenkaffee am See, ein Spaziergang entlang der Promenade, Radfahren, Segeln oder ein Familiennachmittag am Strand — Morzyczyn lässt die Natur zum Alltag werden.",
          closingBold:
            "Nah genug an Stettin und Stargard, um die Annehmlichkeiten der Stadt zu behalten, und weit genug, um einen anderen Rhythmus und die Ruhe des eigenen Hauses zu spüren.",
        },
      },
    ],
    captions: [
      {
        kickerBold: "Terrasse",
        body: "Erdgeschoss 7B: Küche und Wohnzimmer in einem Bereich, direkter Ausgang zur Terrasse.",
        alt: "Innenraum — Essbereich und Küche",
      },
      {
        alt: "Innenraum — Wohnbereich",
        leadBeforeKey: "Wir bieten die Möglichkeit, den Innenraum ",
        keyBold: "schlüsselfertig",
        leadAfterKey:
          " auszubauen — vom Konzept und der Raumaufteilung über Materialien, Licht, Einbauten bis zum letzten Detail.",
        closingBold: "Abgestimmt auf Sie, Ihre Bedürfnisse und die Art, wie Sie wohnen möchten.",
      },
    ],
    sliderAlts: [
      "Frontfassade — das Hauspaar 7A und 7B",
      "See — Steg bei Sonnenuntergang",
      "Hauspaar hinter dem Zaun — goldene Stunde",
      "Holzweg zwischen den Häusern — Abend",
      "Nachtvisualisierung — Szmaragdowa 7",
      "Detail — Holzstruktur an der Fassade",
      "Tagesvisualisierung — Szmaragdowa 7",
      "See — Ufer und Wasser",
    ],
    specsTitle: "informationen",
    lotSpecs: [
      { id: "price", label: "preis", value: "8.900 zł pro m²" },
      { id: "status", label: "status", value: "im Bau" },
      { id: "address", label: "adresse", value: "Szmaragdowa 7, 73-108 Morzyczyn" },
    ],
    siteBasicsTitle: "Informationen",
    siteBasics: [
      { id: "contact", label: "kontakt" },
      {
        id: "team",
        label: "team",
        value: "Martyna Miłowska, Jakub Palka, Jarosław Miś, Beata Johansen",
      },
      {
        id: "company",
        label: "firma",
        value: `${site.legalNameFull} · KRS ${studio.krs} · NIP ${studio.nip} · REGON ${studio.regon}`,
      },
      {
        id: "studioAddress",
        label: "atelieradresse",
        value: `${studio.address}, ${studio.postalCode} ${studio.city}`,
      },
    ],
  },
  map: {
    title: "Lageplan",
    subtitle: "wählen Sie eines der vier Häuser.",
    imageAlt: "Grundstücksplan Szmaragdowa 7 — beim Überfahren erscheint die Ebene der Einheit",
  },
  about: {
    title: "über uns",
    lead: "Wir schaffen Häuser von Anfang bis Ende.",
    intro: [
      "Sklep z Domami entstand aus dem Wunsch, Häuser bewusster zu schaffen — von der Wahl des Ortes und den ersten Entwurfsentscheidungen bis zu Materialien, Ausbau und Innenraum.",
      "Uns interessiert der gesamte Prozess. Deshalb verbinden wir Entwurf, Realisierung und Innenarchitektur und betrachten das Haus als ein zusammenhängendes Ganzes.",
    ],
    sections: [
      {
        heading: "Wir beginnen beim Ort.",
        paragraphs: [
          "Jedes Haus ist anders, weil jeder Ort anders ist. Licht, Umgebung, Ausblicke, Garten und die Art, wie wir den Raum nutzen wollen, prägen den Entwurf ebenso stark wie die Architektur selbst.",
          "Szmaragdowa 7 entstand genau aus diesem Ansatz. Die Nähe zum Miedwie-See, die ruhige Umgebung und das große Grundstück wurden zum Ausgangspunkt für ein Haus, das mehr Raum gibt und zugleich ein Leben näher an der Natur ermöglicht.",
        ],
      },
      {
        heading: "Wir achten auf das Sichtbare — und auf das, was man nicht sieht.",
        paragraphs: [
          "Von Anfang an achten wir auf Materialien, Proportionen und Ausführung. Wir wählen Lösungen, die zur Architektur des Hauses passen und sich über Jahre bewähren sollen.",
          "Genauso gehen wir an den Innenraum heran. Deshalb kann das Haus schlüsselfertig ausgebaut werden, mit einem individuellen Entwurf, der zu den Bedürfnissen und dem Lebensstil der Bewohner passt.",
        ],
      },
      {
        heading: "Wir arbeiten nicht nach einem einzigen fertigen Schema.",
        paragraphs: [
          "Wir wollen Häuser schaffen, die in jedem Detail durchdacht sind und sich zugleich natürlich und bequem im Alltag leben lassen.",
          "Sklep z Domami ist ein Weg, ein Haus zu schaffen, in dem Entwurf, Materialien und Innenraum von Beginn an eine Einheit bilden können.",
        ],
      },
    ],
  },
  contact: {
    title: "kontakt",
    intro: "Eine Adresse, ein Telefon, ein Postfach.",
    formTitle: "schreiben Sie uns",
    nameLabel: "Vor- und Nachname",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon (optional)",
    messageLabel: "Nachricht",
    submitLabel: "Nachricht senden",
    submittingLabel: "wird gesendet…",
    formSuccess: "Vielen Dank — Ihre Nachricht wurde gesendet. Wir antworten so schnell wie möglich.",
    formError:
      "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an biuro@sklepzdomami.pl.",
    labels: {
      people: "personen",
      phone: "telefon",
      email: "e-mail",
      studio: "atelier",
      social: "social media",
    },
    errors: {
      invalidPayload: "Ungültige Formulardaten.",
      generic: "Die Nachricht konnte nicht gesendet werden.",
      name: "Bitte Vor- und Nachname angeben (mind. 2 Zeichen).",
      email: "Bitte eine gültige E-Mail-Adresse angeben.",
      phone: "Die Telefonnummer ist zu lang.",
      message: "Die Nachricht sollte zwischen 10 und 4000 Zeichen lang sein.",
      unavailable:
        "Das Kontaktformular ist vorübergehend nicht verfügbar. Bitte schreiben Sie an biuro@sklepzdomami.pl.",
      sendFailed:
        "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an biuro@sklepzdomami.pl.",
    },
  },
  booking: {
    label: "Besichtigung vereinbaren",
    panelTitle: "Besichtigung vereinbaren",
    panelSubtitle: "Besichtigung auf der Baustelle",
    locationLine: "Szmaragdowa 7, Morzyczyn",
    dateLabel: "Besichtigungstermin",
    timeLabel: "Uhrzeit",
    confirmLabel: "Besichtigung buchen",
    close: "schließen",
    prevMonth: "vorheriger Monat",
    nextMonth: "nächster Monat",
    available: "verfügbar",
    booked: "belegt",
    selected: "ausgewählt",
    stepLabel: "Buchungsschritte",
    stepDateTime: "Datum und Uhrzeit",
    stepDetails: "Kontaktdaten",
    nextLabel: "weiter",
    phoneHint: "oder anrufen:",
    backLabel: "zurück",
    firstNameLabel: "Vorname",
    lastNameLabel: "Nachname",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    selectedSummary: "Gewählter Termin: {date} um {time}",
    submittingLabel: "wird gebucht…",
    loadingAvailability: "Verfügbarkeit wird geprüft…",
    successTitle: "Besichtigung gebucht",
    successSubtitle: "vielen Dank für Ihre Buchung",
    successMessage:
      "Ihre Besichtigung wurde gebucht. Wir haben eine Bestätigung an Ihre E-Mail-Adresse gesendet.",
    addToCalendarHint: "Termin zu Ihrem Kalender hinzufügen:",
    addToGoogle: "Zu Google Calendar hinzufügen",
    addToApple: "Zu Apple Kalender hinzufügen",
    closeSuccess: "schließen",
    eventTitle: "Baustellenbesichtigung — {name}",
    eventDescription:
      "Besichtigung der Investition Szmaragdowa 7.\nAdresse: {location}",
    errors: {
      invalidPayload: "Ungültige Formulardaten.",
      generic: "Die Besichtigungsanfrage konnte nicht gesendet werden.",
      date: "Bitte geben Sie ein gültiges Besichtigungsdatum ein.",
      time: "Bitte wählen Sie eine verfügbare Besichtigungszeit.",
      datePast: "Das Besichtigungsdatum darf nicht in der Vergangenheit liegen.",
      firstName: "Bitte geben Sie Ihren Vornamen ein (min. 2 Zeichen).",
      lastName: "Bitte geben Sie Ihren Nachnamen ein (min. 2 Zeichen).",
      email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
      phone: "Bitte geben Sie eine Telefonnummer ein (min. 7 Zeichen).",
      unavailable: "Die Besichtigungsbuchung ist vorübergehend nicht verfügbar. Bitte schreiben Sie an biuro@sklepzdomami.pl.",
      slotTaken: "Dieser Termin ist bereits vergeben. Bitte wählen Sie ein anderes Datum oder eine andere Uhrzeit.",
      sendFailed: "Die Besichtigung konnte nicht gebucht werden. Bitte versuchen Sie es erneut oder schreiben Sie an biuro@sklepzdomami.pl.",
    },
  },
  privacy: {
    title: "Datenschutzerklärung",
    description: "Datenschutzerklärung von Sklep z Domami — Szmaragdowa 7.",
    effectivePrefix: "Gültig ab",
    effectiveDate: "2026-09-09",
    sections: [
      {
        title: "1. Begriffsbestimmungen",
        paragraphs: [
          "Verantwortlicher – Sklep z Domami M. Miłowska, J. Palka Spółka Jawna, Kontaktdaten im Abschnitt „Kontaktdaten“.",
          "Personenbezogene Daten – alle Informationen über eine identifizierte oder identifizierbare natürliche Person.",
          `Richtlinie – dieses Dokument unter ${site.url}/de/polityka-prywatnosci.`,
          "DSGVO – Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates vom 27. April 2016 zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten.",
          `Website – die vom Verantwortlichen unter ${site.url} betriebene Internetseite.`,
          "Nutzer – jede natürliche Person, die die Website besucht oder ihre Funktionen nutzt.",
        ],
      },
      {
        title: "2. Datenverarbeitung im Zusammenhang mit der Nutzung der Website",
        paragraphs: [
          `Im Zusammenhang mit der Nutzung der Website ${site.url} durch den Nutzer erhebt der Verantwortliche Daten im für die Darstellung des Angebots Szmaragdowa 7, die Bearbeitung von Anfragen und den ordnungsgemäßen Betrieb der Seite erforderlichen Umfang.`,
          "Die Website hat informativen Charakter. Wir führen keine Nutzerkonten, keinen Newsletter und keinen Online-Verkauf mit Zahlung über die Seite.",
        ],
      },
      {
        title: "3. Zwecke und Rechtsgrundlagen der Verarbeitung",
        paragraphs: [
          "Personenbezogene Daten verarbeiten wir zu folgenden Zwecken:",
          "· Darstellung des Angebots und von Informationen zur Investition Szmaragdowa 7;",
          "· Bearbeitung von Anfragen per Telefon, E-Mail oder über das Besichtigungsformular auf der Website;",
          "· Organisation von Baustellenbesichtigungen nach vorherigem Kontakt;",
          "· Betrieb von Social-Media-Profilen (Facebook, X);",
          "· Sicherung der Website und Schutz vor Missbrauch;",
          "· Geltendmachung oder Verteidigung von Ansprüchen.",
          "Rechtsgrundlagen der Verarbeitung:",
          "· Art. 6 Abs. 1 lit. b DSGVO – Maßnahmen auf Antrag der betroffenen Person vor Vertragsschluss;",
          "· Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse des Verantwortlichen (Betrieb der Website, Sicherheit, Korrespondenz);",
          "· Art. 6 Abs. 1 lit. a DSGVO – nur bei gesonderter Einwilligung, sofern diese künftig eingeführt wird.",
        ],
      },
      {
        title: "4. Kontaktaufnahme und Vereinbarung von Besichtigungen",
        paragraphs: [
          `Daten, die bei telefonischem oder E-Mail-Kontakt (${studio.email}) oder bei der Vereinbarung einer Besichtigung über die Funktion „Besichtigung vereinbaren“ auf der Website (Vorname, Nachname, E-Mail, Telefon, gewählter Termin) angegeben werden, verarbeiten wir, um Anfragen zu beantworten, einen Termin zu reservieren und ein Treffen auf der Baustelle zu organisieren. Der Termin kann im Google-Kalender des Verantwortlichen gespeichert werden.`,
          "Der Datenumfang kann umfassen: Vor- und Nachname, Telefonnummer, E-Mail-Adresse, Wunschtermin der Besichtigung sowie den Inhalt der Nachricht.",
          "Korrespondenzdaten speichern wir so lange, wie es zur Bearbeitung der Angelegenheit erforderlich ist, und anschließend für den gesetzlich vorgeschriebenen Zeitraum oder bis zur Verjährung von Ansprüchen.",
        ],
      },
      {
        title: "5. Soziale Netzwerke",
        paragraphs: [
          "Der Verantwortliche betreibt Profile auf Facebook und X (Twitter). Nach dem Wechsel zu diesen Profilen werden diese Dienste eigenständige Verantwortliche und wenden eigene Verarbeitungsregeln an:",
          "· Facebook: https://www.facebook.com/privacy/policy/",
          "· X: https://x.com/en/privacy",
          "In Kommentaren oder privaten Nachrichten auf diesen Plattformen übermittelte Daten verarbeiten wir zur Kommunikation mit Nutzern und zur Bewerbung der Investition.",
        ],
      },
      {
        title: "6. Cookies",
        paragraphs: [
          `Die Website verwendet Cookies. Ausführliche Informationen finden Sie in der Cookie-Richtlinie: ${site.url}/de/polityka-cookies.`,
        ],
      },
      {
        title: "7. Speicherdauer",
        paragraphs: [
          "Daten verarbeiten wir so lange, wie es zur Zweckerfüllung erforderlich ist, darunter:",
          "· Korrespondenz – bis zum Abschluss der Angelegenheit, längstens 3 Jahre nach dem letzten Kontakt, sofern das Recht keine längere Frist verlangt;",
          "· technische Serverprotokolle – gemäß der Richtlinie des Hosting-Anbieters, in der Regel bis zu 30 Tage;",
          "· auf Einwilligung beruhende Daten – bis zu deren Widerruf.",
          "Nach Ablauf der Speicherdauer werden Daten gelöscht oder anonymisiert.",
        ],
      },
      {
        title: "8. Rechte der Nutzer",
        paragraphs: [
          "Ihnen stehen folgende Rechte zu:",
          "· Auskunft (Art. 15 DSGVO);",
          "· Berichtigung (Art. 16 DSGVO);",
          "· Löschung (Art. 17 DSGVO);",
          "· Einschränkung der Verarbeitung (Art. 18 DSGVO);",
          "· Datenübertragbarkeit (Art. 20 DSGVO);",
          "· Widerspruch gegen die Verarbeitung (Art. 21 DSGVO);",
          "· Widerruf einer Einwilligung jederzeit, wenn die Verarbeitung auf einer Einwilligung beruht;",
          "· Beschwerde beim Präsidenten des polnischen Datenschutzamtes (ul. Stawki 2, 00-193 Warschau, kancelaria@uodo.gov.pl).",
          `Zur Ausübung Ihrer Rechte wenden Sie sich an den Verantwortlichen: ${studio.email}.`,
        ],
      },
      {
        title: "9. Empfänger der Daten",
        paragraphs: [
          "Daten können an Stellen übermittelt werden, die den Verantwortlichen unterstützen, insbesondere:",
          "· Vercel Inc. — Hosting und Bereitstellung der Website;",
          "· Anbieter von E-Mail- und Telekommunikationsdiensten;",
          "· Anbieter von Buchhaltungs- und Rechtsdienstleistungen — soweit zur Erfüllung von Pflichten erforderlich.",
          "Daten können öffentlichen Stellen offengelegt werden, wenn das Recht dies verlangt.",
        ],
      },
      {
        title: "10. Übermittlung außerhalb des EWR",
        paragraphs: [
          "Das Hosting der Website kann die Übermittlung technischer Daten (z. B. IP-Adresse, Protokolle) in Drittländer, einschließlich der USA, durch Vercel Inc. mit sich bringen.",
          "Die Übermittlung erfolgt mit Mechanismen, die ein angemessenes Schutzniveau gewährleisten, einschließlich von der Europäischen Kommission genehmigter Standardvertragsklauseln.",
        ],
      },
      {
        title: "11. Sicherheit personenbezogener Daten",
        paragraphs: [
          "Der Verantwortliche setzt dem Risiko angemessene technische und organisatorische Maßnahmen ein, darunter Verschlüsselung der Übertragung (HTTPS), Zugangskontrolle und regelmäßige Software-Updates.",
          "Daten werden in einem dem Zweck angemessenen Umfang erhoben und nicht länger als nötig gespeichert.",
        ],
      },
      {
        title: "12. Kontaktdaten",
        paragraphs: [
          ...administratorBlock,
          `Kontakt in Datenschutzangelegenheiten: ${studio.email}, Tel. ${studio.phone}.`,
        ],
      },
      {
        title: "13. Änderungen der Datenschutzerklärung",
        paragraphs: [
          "Die Richtlinie wird geprüft und bei Bedarf aktualisiert. Über wesentliche Änderungen informieren wir auf der Website.",
          "Die Richtlinie gilt ab dem 2026-09-09.",
          "Dieses Dokument hat informativen Charakter und ersetzt keine individuelle Rechtsberatung.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie-Richtlinie",
    description: "Cookie-Richtlinie der Website Sklep z Domami.",
    effectivePrefix: "Gültig ab",
    effectiveDate: "2026-09-09",
    sections: [
      {
        title: "1. Einleitung",
        paragraphs: [
          ...administratorBlock,
          `Kontakt in Sachen Cookies und personenbezogener Daten: ${studio.email}, Anschrift: ${studio.address}, ${studio.postalCode} ${studio.city}.`,
          `Unsere Website ${site.url} (im Folgenden: „Website“) verwendet Cookies und ähnliche Technologien.`,
          "Wenn Sie Links zu externen Diensten (Facebook, X) anklicken, können Sie auf Seiten weitergeleitet werden, die von anderen Stellen betrieben werden und eigene Cookie-Richtlinien anwenden.",
        ],
      },
      {
        title: "2. Was sind Cookies?",
        paragraphs: [
          "Cookies sind kleine Textdateien, die im Browser des Nutzers gespeichert werden. Sie dienen dem ordnungsgemäßen Betrieb der Seite, dem Speichern von Einstellungen und — bei Einwilligung des Nutzers — der Analyse oder dem Marketing.",
          "Cookies können technische Daten wie IP-Adresse, Sitzungskennung oder Anzeigeeinstellungen erfassen.",
        ],
      },
      {
        title: "3. Was sind Skripte?",
        paragraphs: [
          "Ein Skript ist ein Programmcode, der ausgeführt wird, um interaktives Verhalten der Website zu ermöglichen. Der Code kann auf dem Hosting-Server oder auf dem Gerät des Nutzers laufen.",
        ],
      },
      {
        title: "4. Arten der auf der Website verwendeten Cookies",
        paragraphs: [
          "Wir verwenden ausschließlich für den Betrieb der Seite notwendige Cookies sowie die Speicherung der Kenntnisnahme dieser Richtlinie. Derzeit nutzen wir keine Analyse-Tools (z. B. Google Analytics), Marketing-Tools (z. B. Facebook Pixel) oder funktionale Chats.",
        ],
      },
      {
        title: "4.1. Notwendige (technische) Cookies",
        paragraphs: [
          "Sie gewährleisten den ordnungsgemäßen Betrieb der Website, Sicherheit und die Bereitstellung von Inhalten. Sie können ohne Einwilligung des Nutzers gesetzt werden.",
          "Beispielhafte Cookies auf der Website:",
        ],
      },
      {
        title: "Tabelle notwendiger Cookies",
        paragraphs: [
          "cookie_notice_dismissed | sklepzdomami.com | 12 Monate | Speichert, dass der Nutzer den Cookie-Hinweis zur Kenntnis genommen hat.",
          "NEXT_LOCALE | sklepzdomami.com | 12 Monate | Speichert die gewählte Sprache der Website.",
          "Vercel-Hosting-Sitzungsdateien | sklepzdomami.com / vercel.app | Sitzung / kurze Dauer | Aufrechterhaltung der Verbindung, Lastverteilung, Infrastruktur-Sicherheit.",
        ],
      },
      {
        title: "4.2. Analyse-Cookies",
        paragraphs: [
          "Derzeit verwenden wir keine Analyse-Cookies. Werden sie künftig eingeführt, aktualisieren wir diese Richtlinie und — soweit erforderlich — holen wir eine Einwilligung ein.",
        ],
      },
      {
        title: "4.3. Marketing-Cookies",
        paragraphs: [
          "Derzeit verwenden wir keine Marketing- oder Remarketing-Cookies.",
        ],
      },
      {
        title: "4.4. Funktionale Cookies",
        paragraphs: [
          "Derzeit verwenden wir keine Cookies für Online-Chat oder Interface-Personalisierung über notwendige technische Einstellungen hinaus. Die gewählte Sprache der Website kann gespeichert werden, um die Präferenz des Nutzers zu merken.",
        ],
      },
      {
        title: "5. Cookies Dritter",
        paragraphs: [
          "Nach dem Anklicken von Links zu Social-Media-Profilen (Facebook, X) oder anderen Drittseiten können Cookies gesetzt werden, die von diesen Stellen verwaltet werden. Der Verantwortliche der Website kontrolliert keine Cookies außerhalb der Domain sklepzdomami.com.",
        ],
      },
      {
        title: "6. Verwaltung von Cookies",
        paragraphs: [
          "Sie können Cookie-Einstellungen in Ihrem Browser jederzeit ändern — Dateien blockieren, löschen oder deren Speicherung einschränken.",
          "Das Deaktivieren notwendiger Cookies kann die Nutzung einzelner Funktionen der Website erschweren oder unmöglich machen.",
          "Anleitungen zur Cookie-Verwaltung finden Sie in der Dokumentation Ihres Browsers (Chrome, Firefox, Safari, Edge).",
        ],
      },
      {
        title: "7. Rechtsgrundlage",
        paragraphs: [
          "Notwendige Cookies verarbeiten wir auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse — Betrieb der Website) sowie Art. 173 des polnischen Telekommunikationsgesetzes.",
          "Optionale Cookies — sofern eingeführt — erfordern die Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO).",
        ],
      },
      {
        title: "8. Änderungen der Cookie-Richtlinie",
        paragraphs: [
          "Die Cookie-Richtlinie wird geprüft und bei Änderungen der Website oder des Rechts aktualisiert.",
          "Die Richtlinie gilt ab dem 2026-09-09.",
          "Dieses Dokument hat informativen Charakter und ersetzt keine individuelle Rechtsberatung.",
        ],
      },
    ],
  },
};
