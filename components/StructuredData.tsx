import { site, socials, studio } from "@/lib/site";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.legalNameFull,
        url: site.url,
        email: studio.email,
        telephone: studio.phone,
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
        "@type": "RealEstateAgent",
        "@id": `${site.url}/#agent`,
        name: site.legalNameFull,
        url: site.url,
        parentOrganization: { "@id": `${site.url}/#organization` },
        areaServed: "Poland",
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
