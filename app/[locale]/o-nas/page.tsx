import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { resolveLocale } from "@/lib/i18n/params";
import { pageMetadata } from "@/lib/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const about = getDictionary(locale).about;
  return pageMetadata(locale, "/o-nas", about.title, about.lead);
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = await resolveLocale(params);
  const about = getDictionary(locale).about;

  return (
    <div className="page">
      <h1 className="page__title">{about.title}</h1>
      <p className="page__text page__lead">{about.lead}</p>
      {about.intro.map((paragraph) => (
        <p key={paragraph.slice(0, 24)} className="page__text">
          {paragraph}
        </p>
      ))}
      {about.sections.map((section) => (
        <section key={section.heading} className="page__legal-section">
          <h2 className="page__legal-heading">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="page__text">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
