type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalPageContentProps = {
  title: string;
  effectivePrefix: string;
  effectiveDate: string;
  sections: LegalSection[];
};

export function LegalPageContent({
  title,
  effectivePrefix,
  effectiveDate,
  sections,
}: LegalPageContentProps) {
  return (
    <div className="page page--legal">
      <h1 className="page__title">{title}</h1>
      <p className="page__meta">{effectivePrefix} {effectiveDate}</p>
      <div className="page__legal">
        {sections.map((section) => (
          <section key={section.title} className="page__legal-section">
            <h2 className="page__legal-heading">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="page__text">{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
