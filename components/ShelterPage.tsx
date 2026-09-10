import { FeatureBlockSection } from "@/components/FeatureBlockSection";
import { MapAndLotInfo } from "@/components/MapAndLotInfo";
import { StickyBookNow } from "@/components/StickyBookNow";
import { CoverVideo } from "@/components/CoverVideo";
import { DayNightCompare } from "@/components/DayNightCompare";
import { HeroSection } from "@/components/HeroSection";
import type { Dictionary } from "@/lib/i18n";
import { getInvestment } from "@/lib/content";

function Spacer({ height = "10vh", bg = "#222325" }: { height?: string; bg?: string }) {
  return (
    <div
      className="m3-spacer"
      style={{ "--spacer-height": height, "--spacer-bg": bg } as React.CSSProperties}
    />
  );
}

function splitDmsCoordinates(dms: string): [string, string] {
  const match = dms.trim().match(/^(.+?N)\s+(.+?E)$/);
  if (!match) return [dms, ""];
  return [match[1], match[2]];
}

export function ShelterPage({ dict }: { dict: Dictionary }) {
  const investment = getInvestment(dict);
  const [, , seqC] = investment.sequences;
  const [coordsLat, coordsLon] = splitDmsCoordinates(investment.coordinatesDms);

  return (
    <article className="shelter-page">
      <HeroSection
        label={investment.title}
        title={investment.title}
        subtitle={investment.subtitle}
      />

      <section className="m6-rich m6-rich--intro">
        <div className="shelter-grid m6-rich__intro-grid">
          <div className="m6-rich__intro-content">
            <p className="t-serif-30 m6-rich__lead">{investment.tagline}</p>
            <p className="t-serif-22 m6-rich__body">{investment.intro}</p>
          </div>
        </div>
      </section>

      <Spacer height="10vh" />

      <FeatureBlockSection
        priority
        paragraphs={investment.featureBlock.paragraphs}
        largeImage={{ src: investment.sequences[0].image, alt: investment.sequences[0].alt }}
        smallImage={{ src: investment.sequences[1].image, alt: investment.sequences[1].alt }}
      />

      <Spacer height="5vh" bg="#222325" />

      <StickyBookNow />

      <Spacer height="10vh" bg="#222325" />

      <section
        className="m6-rich m6-living-space__headline-band"
        aria-label={dict.ui.livingSpaceHeadline}
        style={{ "--m6-bg": "#222325", "--m6-color": "#ffffff" } as React.CSSProperties}
      >
        <div className="m6-rich__inner">
          <p className="m6-living-space__headline m6-rich__quote-line">
            <span className="m6-living-space__lead">{investment.livingSpace.lead}</span>
            {" "}
            <span className="m6-living-space__area">{investment.livingSpace.area}</span>
            {" "}
            <span className="m6-living-space__tagline">{investment.livingSpace.tagline}</span>
          </p>
        </div>
      </section>

      <section className="m4-large">
        <div className="m4-large__container">
          <div className="m4-large__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={investment.media.large}
              alt={dict.ui.driveViewAlt}
              width={1024}
              height={576}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section
        className="m6-rich m6-rich--coords m6-rich--living-space"
        aria-label={dict.ui.livingSpace}
        style={{ "--m6-bg": "#222325", "--m6-color": "#ffffff" } as React.CSSProperties}
      >
        <div className="m6-rich__inner m6-rich__inner--coords m6-rich__inner--living-space-band">
          <p className="m6-rich__quote-line m6-living-space__quote">
            {investment.quoteLines.map((line) => (
              <span key={line} className="m6-living-space__quote-line">
                {line}
              </span>
            ))}
          </p>
          <div className="m6-rich__content m6-rich__content--coords m6-living-space">
            <div className="m6-living-space__features">
              {investment.livingSpace.features.map((feature) => (
                <p key={feature} className="t-neue-14 m6-living-space__feature">
                  {feature}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="m5-two m5-two--reversed">
        <div className="m5-two__grid">
          <div className="m5-two__large">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={seqC.image} alt={seqC.alt} width={1200} height={1640} loading="lazy" />
          </div>
          <div className="m5-two__small-wrap">
            <div className="m5-two__small">
              <CoverVideo />
            </div>
          </div>
          <div className="m5-two__text m5-two__text--reversed">
            <p className="t-neue-14 m5-two__lake-copy">
              <span className="t-neue-14-bold">{seqC.copy.openingBold}</span>
              {" "}
              {seqC.copy.body}
              {" "}
              <span className="t-neue-14-bold">{seqC.copy.closingBold}</span>
            </p>
          </div>
        </div>
        <div className="m5-two__mobile-text">
          <p className="t-neue-14 m5-two__lake-copy">
            <span className="t-neue-14-bold">{seqC.copy.openingBold}</span>
            {" "}
            {seqC.copy.body}
            {" "}
            <span className="t-neue-14-bold">{seqC.copy.closingBold}</span>
          </p>
        </div>
      </section>

      <Spacer height="10vh" bg="#222325" />

      <section
        className="m6-rich m6-rich--coords"
        aria-label={dict.ui.coordinates}
        style={{ "--m6-bg": "#222325", "--m6-color": "#ffffff" } as React.CSSProperties}
      >
        <div className="m6-rich__inner m6-rich__inner--coords">
          <div className="m6-rich__content m6-rich__content--coords m6-coords">
            <p className="t-neue-50 m6-coords__dms">
              {coordsLat}
              <br />
              {coordsLon}
            </p>
          </div>
        </div>
      </section>

      <Spacer height="10vh" bg="#222325" />

      <DayNightCompare
        daySrc={investment.media.day}
        nightSrc={investment.media.night}
        dayAlt={dict.ui.dayAlt}
        nightAlt={dict.ui.nightAlt}
      />

      <Spacer height="10vh" bg="#222325" />

      <MapAndLotInfo slides={investment.slider} />

      <Spacer height="5vh" bg="#d6d0c5" />
    </article>
  );
}
