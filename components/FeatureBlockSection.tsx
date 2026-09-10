import { DetailImageRotator } from "@/components/DetailImageRotator";

type DetailImage = {
  src: string;
  alt: string;
};

type FeatureBlockSectionProps = {
  priority?: boolean;
  heading?: string;
  paragraphs: readonly string[];
  largeImage: DetailImage;
  smallImage?: DetailImage;
  detailImages?: readonly DetailImage[];
};

export function FeatureBlockSection({
  priority = false,
  heading,
  paragraphs,
  largeImage,
  smallImage,
  detailImages,
}: FeatureBlockSectionProps) {
  if (!detailImages?.length && !smallImage) {
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
            src={largeImage.src}
            alt={largeImage.alt}
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
              smallImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={smallImage.src} alt={smallImage.alt} width={800} height={1000} loading="lazy" />
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
