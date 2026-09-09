import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SocialLinks } from "@/components/SocialLinks";
import { kontakt, studio } from "@/lib/site";

export const metadata: Metadata = {
  title: kontakt.title,
  description: kontakt.intro,
};

export default function KontaktPage() {
  return (
    <div className="page">
      <h1 className="page__title">{kontakt.title}</h1>
      <p className="page__text">{kontakt.intro}</p>

      <section className="contact-page__form" aria-labelledby="contact-form-title">
        <h2 id="contact-form-title" className="contact-page__subtitle">{kontakt.formTitle}</h2>
        <ContactForm />
      </section>

      <div className="contact-page__details">
        <div>
          <p className="t-neue-13-caps contact-page__label">osoby</p>
          <p className="page__text">{studio.partners.map((p) => p.name).join(" · ")}</p>
        </div>
        <div>
          <p className="t-neue-13-caps contact-page__label">telefon</p>
          <p className="page__text"><a href={studio.phoneHref}>{studio.phone}</a></p>
        </div>
        <div>
          <p className="t-neue-13-caps contact-page__label">e-mail</p>
          <p className="page__text"><a href={studio.emailHref}>{studio.email}</a></p>
        </div>
        <div>
          <p className="t-neue-13-caps contact-page__label">pracownia</p>
          <p className="page__text">{studio.address}<br />{studio.postalCode} {studio.city}</p>
        </div>
        <div>
          <p className="t-neue-13-caps contact-page__label">social media</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
