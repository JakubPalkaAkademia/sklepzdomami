import { investmentAssets, investmentPlace, site, socials, studio } from "@/lib/site";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.legalNameFull,
        alternateName: site.name,
        url: site.url,
        email: studio.email,
        telephone: studio.phone,
        logo: `${site.url}${site.logo}`,
        image: `${site.url}${site.ogImage}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: studio.address,
          postalCode: studio.postalCode,
          addressLocality: studio.city,
          addressCountry: "PL",
        },
        sameAs: socials.map((s) => s.href),
        taxID: studio.nip,
        identifier: [
          { "@type": "PropertyValue", name: "KRS", value: studio.krs },
          { "@type": "PropertyValue", name: "REGON", value: studio.regon },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: ["pl", "en", "de"],
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "RealEstateAgent",
        "@id": `${site.url}/#agent`,
        name: site.legalNameFull,
        url: site.url,
        parentOrganization: { "@id": `${site.url}/#organization` },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Zachodniopomorskie, Poland",
        },
      },
      {
        "@type": "HousingDevelopment",
        "@id": `${site.url}/#development`,
        name: investmentPlace.name,
        url: site.url,
        description:
          "Kameralna zabudowa dwóch domów bliźniaczych (lokale 7A–7D) w Morzyczynie nad jeziorem Miedwie, z dojazdem do Szczecina i Stargardu.",
        image: `${site.url}${site.ogImage}`,
        numberOfAccommodationUnits: investmentPlace.numberOfUnits,
        address: {
          "@type": "PostalAddress",
          streetAddress: investmentPlace.streetAddress,
          postalCode: investmentPlace.postalCode,
          addressLocality: investmentPlace.addressLocality,
          addressRegion: investmentPlace.addressRegion,
          addressCountry: investmentPlace.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: investmentAssets.latitude,
          longitude: investmentAssets.longitude,
        },
        developer: { "@id": `${site.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
