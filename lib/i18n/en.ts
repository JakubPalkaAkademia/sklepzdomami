import { site, studio } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n/pl";

const administratorBlock = [
  `The controller of personal data is ${site.legalNameFull}, with its registered office in Szczecin (address: ${studio.address}, ${studio.postalCode} ${studio.city}), entered in the Register of Entrepreneurs of the National Court Register kept by ${studio.court}, KRS: ${studio.krs}, NIP: ${studio.nip}, REGON: ${studio.regon}.`,
  `The general partnership is represented by its partners: ${studio.partners.map((p) => p.name).join(", ")}. Each partner is authorised to represent the company independently.`,
];

export const en: Dictionary = {
  metadata: {
    titleDefault: `Szmaragdowa 7 · ${site.name}`,
    titleTemplate: `%s · ${site.name}`,
  },
  nav: {
    ariaLabel: "navigation",
    mobileAriaLabel: "mobile menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    homeAriaLabel: "sklep z domami",
    items: [
      { href: "/o-nas", label: "about" },
      { href: "/kontakt", label: "contact" },
    ],
  },
  language: {
    ariaLabel: "Language selection",
    switchTo: "Switch language to",
  },
  footer: {
    ariaLabel: "footer",
    copyright: "© 2026 Sklep z domami — sklepzdomami.com. All rights reserved.",
    disclaimer:
      "This offer is for information purposes only and does not constitute a commercial offer within the meaning of Article 66¹ of the Polish Civil Code. Floor areas are given according to Polish Standard PN-ISO 9836:2015-12, excluding plaster. The final floor area will be determined on the basis of the as-built survey. Drawings, visualisations and maps presented in this offer are indicative only and their final form may change.",
    legalPages: [
      { href: "/polityka-prywatnosci", label: "privacy policy" },
      { href: "/polityka-cookies", label: "cookie policy" },
    ],
  },
  cookieNotice: {
    ariaLabel: "cookie information",
    beforeLinks: "This site uses essential cookies only. Details in the ",
    cookiesLink: "cookie policy",
    betweenLinks: " and ",
    privacyLink: "privacy policy",
    afterLinks: ".",
    ok: "OK",
  },
  notFound: {
    title: "Page not found",
    body: "The address you are looking for does not exist or has been moved.",
    back: "Back to the homepage",
  },
  ui: {
    expandAll: "expand all",
    total: "total",
    buildingTotal: "total floor area",
    floorAriaLabel: "storey",
    plansComingSoon: "Floor plans for unit {lot} — coming soon.",
    livingSpaceHeadline: "living space — heading",
    livingSpace: "living space",
    coordinates: "property coordinates",
    mapLotsAria: "homes on the map",
    driveViewAlt: "view of the development from the driveway — Szmaragdowa 7",
    dayAlt: "daytime visualisation — Szmaragdowa 7",
    nightAlt: "night-time visualisation — Szmaragdowa 7",
    dayNightCompare: "day and night visualisation comparison",
    gallery: "investment photo gallery",
  },
  studio: {
    partnerRoles: ["partner", "interior architect, partner"],
    representation: "each partner is authorised to represent the company independently",
  },
  rooms: {
    vestibule: "vestibule",
    livingKitchen: "living area with kitchen",
    terrace: "terrace",
    office: "office",
    pantry: "pantry",
    bathroom: "bathroom",
    technical: "utility room",
    bedroom1: "bedroom 1",
    bedroom2: "bedroom 2",
    bedroom3: "bedroom 3",
    laundry: "laundry",
    hall: "hall",
  },
  floors: {
    ground: "ground floor",
    upper: "first floor",
    groundPlanAlt: "ground-floor plan — unit {lot}, Szmaragdowa 7",
    upperPlanAlt: "first-floor plan — unit {lot}, Szmaragdowa 7",
  },
  investment: {
    title: "Szmaragdowa 7",
    subtitle: "Morzyczyn, West Pomerania",
    tagline: "Your harbour on Lake Miedwie",
    address: "Szmaragdowa 7, 73-108 Morzyczyn",
    locationLabel: "morzyczyn, szmaragdowa 7",
    status: "under construction",
    intro:
      "A pair of semi-detached houses by the lake for people who want a quieter everyday life, with a convenient commute to Szczecin and Stargard.",
    featureBlock: {
      paragraphs: [
        "Sklep z Domami was founded on a simple idea: buying a house should be clear and straightforward.",
        "Choose yours, book a visit online and see it on site. Everything you need to make a good decision, in one place.",
        "A house is not something you buy in a hurry. You can, however, choose it more simply.",
      ],
    },
    facadeBlock: {
      heading:
        "Modern architecture does not need many extras. It needs good materials and details.",
      paragraphs: [
        "We chose high-grade façade panels, Ruukki Pro sheet metal and a concealed gutter system. They are complemented by smart solutions, including for doors and lighting, and two-tone aluminium joinery with large sliding glazing that opens the living area to the garden and fills the interior with natural light. The high thermal performance of the joinery keeps the house comfortable all year round.",
      ],
      detailAlts: [
        "smart lock and entrance door — Szmaragdowa 7",
        "façade detail — wood and Ruukki Pro metal",
        "timber façade panels — detail",
      ],
    },
    quoteLines: [
      "The lake at hand. The city within reach.",
      "A house you are glad to come back to.",
    ],
    turnkeyHeading: "A house ready for the way you live.",
    livingSpace: {
      lead: "Up to",
      area: "170 m²",
      tagline: "of living space.",
      features: [
        "A generous living area.",
        "Private rooms.",
        "Space to work.",
        "Room for gathering.",
        "Room for quiet.",
      ],
    },
    closing: {
      line1: "Szmaragdowa 7, Morzyczyn",
      line2: "7A and 7B · under construction",
    },
    sequences: [
      {
        kickerBold: "terrace 7B",
        body: "The living area opens onto the terrace. A slatted façade — the garden view.",
        alt: "timber façade and garden — golden hour",
      },
      {
        kickerBold: "entrance",
        body: "A gravel drive and a sheltered door. The façade from Szmaragdowa Street.",
        alt: "street façade — golden hour",
      },
      {
        alt: "entrance and driveway",
        copy: {
          openingBold: "A house on Lake Miedwie, close to everything that matters.",
          body: "Morning coffee by the water, a walk along the promenade, cycling, sailing or a family afternoon on the beach — Morzyczyn lets you enjoy nature every day.",
          closingBold:
            "Close enough to Szczecin and Stargard to keep the convenience of the city, and far enough to feel a change of pace and the calm of your own home.",
        },
      },
    ],
    captions: [
      {
        kickerBold: "terrace",
        body: "Ground floor 7B: kitchen and living room in one space, opening straight onto the terrace.",
        alt: "interior — dining area and kitchen",
      },
      {
        alt: "interior — living area",
        leadBeforeKey: "We can complete the interior ",
        keyBold: "turnkey",
        leadAfterKey:
          " — from concept and layout through materials, lighting, joinery and the last detail.",
        closingBold: "Fitted to you, your needs and the way you want to live.",
      },
    ],
    sliderAlts: [
      "front façade — the pair of houses 7A and 7B",
      "lake — pier at sunset",
      "pair of houses behind the fence — golden hour",
      "timber path between the houses — evening",
      "night-time visualisation — Szmaragdowa 7",
      "detail — timber texture on the façade",
      "daytime visualisation — Szmaragdowa 7",
      "lake — shore and water",
    ],
    specsTitle: "details",
    lotSpecs: [
      { id: "price", label: "price", value: "PLN 8,900 per m²" },
      { id: "status", label: "status", value: "under construction" },
      { id: "address", label: "address", value: "Szmaragdowa 7, 73-108 Morzyczyn" },
    ],
    siteBasicsTitle: "Information",
    siteBasics: [
      { id: "contact", label: "contact" },
      {
        id: "team",
        label: "team",
        value: "Martyna Miłowska, Jakub Palka, Jarosław Miś, Beata Johansen",
      },
      {
        id: "company",
        label: "company",
        value: `${site.legalNameFull} · KRS ${studio.krs} · NIP ${studio.nip} · REGON ${studio.regon}`,
      },
      {
        id: "studioAddress",
        label: "studio address",
        value: `${studio.address}, ${studio.postalCode} ${studio.city}`,
      },
    ],
  },
  map: {
    title: "Site plan",
    subtitle: "choose one of the four houses.",
    imageAlt: "Szmaragdowa 7 plot map — hovering a unit reveals its layer",
  },
  about: {
    title: "about",
    lead: "We create houses from start to finish.",
    intro: [
      "Sklep z Domami grew from a need to make houses more deliberately — from choosing the site and the first design decisions through to materials, finishes and the interior.",
      "We care about the whole process. That is why we bring together design, construction and interior architecture, treating the house as one coherent whole.",
    ],
    sections: [
      {
        heading: "We start with the place.",
        paragraphs: [
          "Every house is different because every place is different. Light, surroundings, views, the garden and the way we want to use the space shape the design as strongly as the architecture itself.",
          "Szmaragdowa 7 came from exactly this approach. The proximity of Lake Miedwie, a calm setting and a generous plot became the starting point for a house that offers more space and a life closer to nature.",
        ],
      },
      {
        heading: "We look after what you see — and what you don’t.",
        paragraphs: [
          "From the outset we pay attention to materials, proportions and workmanship. We choose solutions that sit well with the architecture and are meant to last.",
          "We take the same approach to the interior. The house can be finished turnkey, with a bespoke design matched to the needs and lifestyle of the people who live there.",
        ],
      },
      {
        heading: "We do not work from a single ready-made template.",
        paragraphs: [
          "We want to create houses that are considered in every detail, yet natural and comfortable in everyday life.",
          "Sklep z Domami is a way of making a house in which design, materials and interior can form one whole from the beginning.",
        ],
      },
    ],
  },
  contact: {
    title: "contact",
    intro: "One address, one phone number, one inbox.",
    formTitle: "write to us",
    nameLabel: "full name",
    emailLabel: "e-mail",
    phoneLabel: "phone (optional)",
    messageLabel: "message",
    submitLabel: "send message",
    submittingLabel: "sending…",
    formSuccess: "Thank you — your message has been sent. We will reply as soon as we can.",
    formError: "The message could not be sent. Please try again or write to biuro@sklepzdomami.pl.",
    labels: {
      people: "people",
      phone: "phone",
      email: "e-mail",
      studio: "studio",
      social: "social media",
    },
    errors: {
      invalidPayload: "Invalid form data.",
      generic: "The message could not be sent.",
      name: "Please enter your full name (at least 2 characters).",
      email: "Please enter a valid e-mail address.",
      phone: "The phone number is too long.",
      message: "The message should be between 10 and 4,000 characters.",
      unavailable: "The contact form is temporarily unavailable. Please write to biuro@sklepzdomami.pl.",
      sendFailed:
        "The message could not be sent. Please try again or write directly to biuro@sklepzdomami.pl.",
    },
  },
  booking: {
    label: "Book a visit",
    panelTitle: "Book a visit",
    panelSubtitle: "a viewing on the construction site",
    locationLine: "Szmaragdowa 7, Morzyczyn",
    dateLabel: "visit date",
    timeLabel: "time",
    confirmLabel: "Book visit",
    close: "close",
    prevMonth: "previous month",
    nextMonth: "next month",
    available: "available",
    booked: "booked",
    selected: "selected",
    stepLabel: "booking steps",
    stepDateTime: "date and time",
    stepDetails: "contact details",
    nextLabel: "next",
    backLabel: "back",
    firstNameLabel: "first name",
    lastNameLabel: "last name",
    emailLabel: "e-mail",
    phoneLabel: "phone",
    selectedSummary: "Selected time: {date} at {time}",
    submittingLabel: "booking…",
    loadingAvailability: "checking availability…",
    successTitle: "Visit booked",
    successSubtitle: "thank you for your booking",
    successMessage:
      "Your visit has been booked. We sent a confirmation to your e-mail address.",
    addToCalendarHint: "Add the meeting to your calendar:",
    addToGoogle: "Add to Google Calendar",
    addToApple: "Add to Apple Calendar",
    closeSuccess: "close",
    eventTitle: "Site visit — {name}",
    eventDescription:
      "Viewing of the Szmaragdowa 7 development.\nAddress: {location}",
    errors: {
      invalidPayload: "Invalid form data.",
      generic: "The visit request could not be sent.",
      date: "Please enter a valid visit date.",
      time: "Please select an available visit time.",
      datePast: "The visit date cannot be in the past.",
      firstName: "Please enter your first name (min. 2 characters).",
      lastName: "Please enter your last name (min. 2 characters).",
      email: "Please enter a valid e-mail address.",
      phone: "Please enter a phone number (min. 7 characters).",
      unavailable: "Visit booking is temporarily unavailable. Please write to biuro@sklepzdomami.pl.",
      slotTaken: "This time slot is already taken. Please choose another date or time.",
      sendFailed: "The visit could not be booked. Please try again or write to biuro@sklepzdomami.pl.",
    },
  },
  privacy: {
    title: "Privacy policy",
    description: "Privacy policy of Sklep z Domami — Szmaragdowa 7.",
    effectivePrefix: "Effective from",
    effectiveDate: "2026-09-09",
    sections: [
      {
        title: "1. Definitions",
        paragraphs: [
          "Controller – Sklep z Domami M. Miłowska, J. Palka Spółka Jawna, contact details as set out in the “Contact details” section.",
          "Personal data – any information relating to an identified or identifiable natural person.",
          `Policy – this document available at ${site.url}/en/polityka-prywatnosci.`,
          "GDPR – Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data.",
          `Website – the website operated by the Controller at ${site.url}.`,
          "User – any natural person visiting the Website or using its functions.",
        ],
      },
      {
        title: "2. Processing of data in connection with use of the Website",
        paragraphs: [
          `In connection with the User’s use of the Website ${site.url}, the Controller collects data to the extent necessary to present the Szmaragdowa 7 development, handle enquiries and ensure the proper operation of the site.`,
          "The Website is informational. We do not operate user accounts, a newsletter or online sales with payment via the site.",
        ],
      },
      {
        title: "3. Purposes and legal bases of processing",
        paragraphs: [
          "We process personal data for the following purposes:",
          "· presenting the offer and information about the Szmaragdowa 7 development;",
          "· handling enquiries made by phone, e-mail or the visit-booking form on the Website;",
          "· organising visits to the construction site after prior contact;",
          "· operating social-media profiles (Facebook, X);",
          "· ensuring the security of the Website and protecting against abuse;",
          "· establishing, exercising or defending legal claims.",
          "Legal bases of processing:",
          "· Article 6(1)(b) GDPR – steps taken at the request of the data subject prior to entering into a contract;",
          "· Article 6(1)(f) GDPR – the Controller’s legitimate interest (operating the Website, security, correspondence);",
          "· Article 6(1)(a) GDPR – only where a separate consent is given, if introduced in the future.",
        ],
      },
      {
        title: "4. Getting in touch and booking visits",
        paragraphs: [
          `Data provided by phone, e-mail (${studio.email}) or when booking a visit via the “Book a visit” function on the Website (first name, last name, e-mail, phone, selected time) are processed in order to reply to enquiries, reserve a time slot and arrange a meeting on the construction site. The visit may be recorded in the Controller’s Google Calendar.`,
          "The data may include: full name, phone number, e-mail address, preferred visit date and the content of the message.",
          "Correspondence data are stored for as long as needed to handle the matter, and then for the period required by law or until claims become time-barred.",
        ],
      },
      {
        title: "5. Social media",
        paragraphs: [
          "The Controller maintains profiles on Facebook and X (Twitter). After you go to those profiles, those services become separate controllers of data and apply their own processing rules:",
          "· Facebook: https://www.facebook.com/privacy/policy/",
          "· X: https://x.com/en/privacy",
          "Data provided in comments or private messages on those platforms are processed in order to communicate with Users and promote the development.",
        ],
      },
      {
        title: "6. Cookies",
        paragraphs: [
          `The Website uses cookies. Detailed information is available in the Cookie policy: ${site.url}/en/polityka-cookies.`,
        ],
      },
      {
        title: "7. Retention period",
        paragraphs: [
          "We process data for as long as needed to fulfil the purpose, including:",
          "· correspondence – until the matter is closed, no longer than 3 years from the last contact, unless a longer period is required by law;",
          "· technical server logs – in accordance with the hosting provider’s policy, usually up to 30 days;",
          "· data processed on the basis of consent – until it is withdrawn.",
          "After the retention period, data are deleted or anonymised.",
        ],
      },
      {
        title: "8. Your rights",
        paragraphs: [
          "You have the right to:",
          "· access your data (Article 15 GDPR);",
          "· rectify your data (Article 16 GDPR);",
          "· erase your data (Article 17 GDPR);",
          "· restrict processing (Article 18 GDPR);",
          "· data portability (Article 20 GDPR);",
          "· object to processing (Article 21 GDPR);",
          "· withdraw consent at any time if processing is based on consent;",
          "· lodge a complaint with the President of the Personal Data Protection Office (ul. Stawki 2, 00-193 Warsaw, kancelaria@uodo.gov.pl).",
          `To exercise your rights, contact the Controller: ${studio.email}.`,
        ],
      },
      {
        title: "9. Recipients of data",
        paragraphs: [
          "Data may be disclosed to entities supporting the Controller, in particular:",
          "· Vercel Inc. — hosting and delivery of the Website;",
          "· e-mail and telecommunications providers;",
          "· accounting and legal service providers — to the extent necessary to fulfil legal obligations.",
          "Data may be disclosed to public authorities where required by law.",
        ],
      },
      {
        title: "10. Transfers outside the EEA",
        paragraphs: [
          "Hosting of the Website may involve transferring technical data (e.g. IP address, logs) to third countries, including the USA, by Vercel Inc.",
          "Transfers are made using mechanisms that ensure an adequate level of protection, including standard contractual clauses approved by the European Commission.",
        ],
      },
      {
        title: "11. Security of personal data",
        paragraphs: [
          "The Controller applies technical and organisational measures appropriate to the risk, including transmission encryption (HTTPS), access control and regular software updates.",
          "Data are collected to an extent adequate to the purpose and stored no longer than necessary.",
        ],
      },
      {
        title: "12. Contact details",
        paragraphs: [
          ...administratorBlock,
          `Contact for personal-data matters: ${studio.email}, tel. ${studio.phone}.`,
        ],
      },
      {
        title: "13. Changes to the Privacy policy",
        paragraphs: [
          "The Policy is reviewed and updated where needed. We will inform you of material changes on the Website.",
          "The Policy is effective from 2026-09-09.",
          "This document is for information purposes and does not replace individual legal advice.",
        ],
      },
    ],
  },
  cookies: {
    title: "Cookie policy",
    description: "Cookie policy of the Sklep z Domami website.",
    effectivePrefix: "Effective from",
    effectiveDate: "2026-09-09",
    sections: [
      {
        title: "1. Introduction",
        paragraphs: [
          ...administratorBlock,
          `Contact for cookies and personal data: ${studio.email}, postal address: ${studio.address}, ${studio.postalCode} ${studio.city}.`,
          `Our website ${site.url} (the “Website”) uses cookies and similar technologies.`,
          "If you follow links to external services (Facebook, X) you may be redirected to sites administered by other entities that apply their own cookie policies.",
        ],
      },
      {
        title: "2. What are cookies?",
        paragraphs: [
          "Cookies are small text files stored in the user’s browser. They are used to ensure the proper operation of the site, remember settings and — if the user consents — for analytics or marketing.",
          "Cookies may collect technical data such as IP address, session identifier or display preferences.",
        ],
      },
      {
        title: "3. What are scripts?",
        paragraphs: [
          "A script is a fragment of program code run to provide interactive behaviour on the Website. The code may run on the hosting server or on the user’s device.",
        ],
      },
      {
        title: "4. Types of cookies used on the Website",
        paragraphs: [
          "We use only cookies that are essential for the site to work and to record that you have seen this policy. We do not currently use analytics tools (e.g. Google Analytics), marketing tools (e.g. Facebook Pixel) or functional chat widgets.",
        ],
      },
      {
        title: "4.1. Essential (technical) cookies",
        paragraphs: [
          "They ensure the proper operation of the Website, security and delivery of content. They may be set without the user’s consent.",
          "Example cookies on the Website:",
        ],
      },
      {
        title: "Essential cookies table",
        paragraphs: [
          "cookie_notice_dismissed | sklepzdomami.com | 12 months | Records that the user has seen the cookie notice.",
          "NEXT_LOCALE | sklepzdomami.com | 12 months | Remembers the selected site language.",
          "Vercel hosting session files | sklepzdomami.com / vercel.app | session / short period | Maintaining the connection, load balancing, infrastructure security.",
        ],
      },
      {
        title: "4.2. Analytics cookies",
        paragraphs: [
          "We do not currently use analytics cookies. If they are introduced in the future, we will update this policy and — where required — ask for consent.",
        ],
      },
      {
        title: "4.3. Marketing cookies",
        paragraphs: [
          "We do not currently use marketing or remarketing cookies.",
        ],
      },
      {
        title: "4.4. Functional cookies",
        paragraphs: [
          "We do not currently use cookies related to online chat or interface personalisation beyond essential technical settings. The selected site language may be stored to remember the user’s preference.",
        ],
      },
      {
        title: "5. Third-party cookies",
        paragraphs: [
          "After clicking links to social-media profiles (Facebook, X) or other third-party sites, cookies administered by those entities may be set. The Controller of the Website does not control cookies outside the sklepzdomami.com domain.",
        ],
      },
      {
        title: "6. Managing cookies",
        paragraphs: [
          "You can change cookie settings in your browser at any time — block, delete or limit the storage of files.",
          "Disabling essential cookies may make some Website functions difficult or impossible to use.",
          "Instructions for managing cookies can be found in your browser documentation (Chrome, Firefox, Safari, Edge).",
        ],
      },
      {
        title: "7. Legal basis",
        paragraphs: [
          "We process essential cookies on the basis of Article 6(1)(f) GDPR (legitimate interest — operation of the Website) and Article 173 of the Polish Telecommunications Law.",
          "Optional cookies — if introduced — will require the user’s consent (Article 6(1)(a) GDPR).",
        ],
      },
      {
        title: "8. Changes to the Cookie policy",
        paragraphs: [
          "The Cookie policy is reviewed and updated as the Website or the law changes.",
          "The Policy is effective from 2026-09-09.",
          "This document is for information purposes and does not replace individual legal advice.",
        ],
      },
    ],
  },
};
