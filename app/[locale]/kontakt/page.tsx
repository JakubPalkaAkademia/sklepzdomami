import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { getDictionary } from "@/lib/i18n";
import { resolveLocale } from "@/lib/i18n/params";
import { pageMetadata } from "@/lib/i18n/seo";
import { studio } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return pageMetadata(locale, "/kontakt", dict.metadata.contactTitle, dict.metadata.contactDescription);
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const contact = getDictionary(locale).contact;

  return (
    <div className="page">
      <h1 className="page__title">{contact.title}</h1>
      <p className="page__text">{contact.intro}</p>

      <section className="contact-page__form" aria-labelledby="contact-form-title">
        <h2 id="contact-form-title" className="contact-page__subtitle">{contact.formTitle}</h2>
        <ContactForm />
      </section>

      <div className="contact-page__details">
        <div>
          <p className="t-neue-13-caps contact-page__label">{contact.labels.people}</p>
          <p className="page__text">{studio.partners.map((partner) => partner.name).join(" · ")}</p>
        </div>
        <div>
          <p className="t-neue-13-caps contact-page__label">{contact.labels.phone}</p>
          <p className="page__text"><a href={studio.phoneHref}>{studio.phone}</a></p>
        </div>
        <div>
          <p className="t-neue-13-caps contact-page__label">{contact.labels.email}</p>
          <p className="page__text"><a href={studio.emailHref}>{studio.email}</a></p>
        </div>
        <div>
          <p className="t-neue-13-caps contact-page__label">{contact.labels.studio}</p>
          <p className="page__text">{studio.address}<br />{studio.postalCode} {studio.city}</p>
        </div>
        <div>
          <p className="t-neue-13-caps contact-page__label">{contact.labels.social}</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
