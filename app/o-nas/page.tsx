import type { Metadata } from "next";
import { oNas } from "@/lib/site";

export const metadata: Metadata = {
  title: oNas.title,
  description: oNas.lead,
};

export default function ONasPage() {
  return (
    <div className="page">
      <h1 className="page__title">{oNas.title}</h1>
      <p className="page__text page__lead">{oNas.lead}</p>
      {oNas.intro.map((p) => (
        <p key={p.slice(0, 24)} className="page__text">
          {p}
        </p>
      ))}
      {oNas.sections.map((section) => (
        <section key={section.heading} className="page__legal-section">
          <h2 className="page__legal-heading">{section.heading}</h2>
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="page__text">
              {p}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
