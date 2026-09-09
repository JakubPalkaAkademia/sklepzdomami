import { DetailImageRotator } from "@/components/DetailImageRotator";
import { investment } from "@/lib/site";

type DetailImage = {
  src: string;
  alt: string;
};

type FeatureBlockSectionProps = {
  priority?: boolean;
  heading?: string;
  paragraphs?: readonly string[];
  detailImages?: readonly DetailImage[];
};

export function FeatureBlockSection({
  priority = false,
  heading,
  paragraphs = investment.featureBlock.paragraphs,
  detailImages,
}: FeatureBlockSectionProps) {
  const largeSlide = investment.sequences.find((seq) => seq.image === "/render-garden.jpg");
  const smallSlide = investment.sequences.find((seq) => seq.image === "/render-street.jpg");

  if (!largeSlide || (!smallSlide && !detailImages?.length)) {
    return null;
  }

  return (
    <section className="m5-two">
      {heading ? (
        <div className="m5-two__quote m5-two__quote--lead">
          <p className="m6-rich__quote-line">{heading}</p>
        </div>
      ) : null}
      <div className="m5-two__grid">
        <div className="m5-two__large">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={largeSlide.image}
            alt={largeSlide.alt}
            width={1200}
            height={1640}
            loading={priority ? "eager" : "lazy"}
          />
        </div>
        <div className="m5-two__small-wrap">
          <div className="m5-two__small">
            {detailImages?.length ? (
              <DetailImageRotator images={detailImages} />
            ) : (
              smallSlide && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={smallSlide.image} alt={smallSlide.alt} width={800} height={1000} loading="lazy" />
              )
            )}
          </div>
        </div>
        <div className="m5-two__text m5-two__copy">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="m5-two__mobile-text">
        <p className="t-neue-14 m5-two__lake-copy">{paragraphs.join(" ")}</p>
      </div>
    </section>
  );
}
