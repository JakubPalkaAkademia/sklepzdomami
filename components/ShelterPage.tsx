import { MapAndLotInfo } from "@/components/MapAndLotInfo";
import { StickyBookNow } from "@/components/StickyBookNow";
import { CoverVideo } from "@/components/CoverVideo";
import { DayNightCompare } from "@/components/DayNightCompare";
import { HeroSection } from "@/components/HeroSection";
import { investment } from "@/lib/site";

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

export function ShelterPage() {
  const [seqA, seqB, seqC] = investment.sequences;
  const [capTaras, capWejscie] = investment.captions;
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

      <section className="m5-two">
        <div className="m5-two__grid">
          <div className="m5-two__large">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={seqA.image} alt={seqA.alt} width={1200} height={1640} loading="eager" />
          </div>
          <div className="m5-two__small-wrap">
            <div className="m5-two__small">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={seqB.image} alt={seqB.alt} width={800} height={1000} loading="lazy" />
            </div>
          </div>
          <div className="m5-two__text m5-two__copy">
            {investment.featureBlock.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="m5-two__mobile-text m5-two__copy">
          {investment.featureBlock.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <Spacer height="5vh" bg="#222325" />

      <StickyBookNow />

      <Spacer height="10vh" bg="#222325" />

      <section className="m4-large">
        <div className="m4-large__container">
          <div className="m4-large__media">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={investment.media.large}
              alt="widok na inwestycję od podjazdu — Szmaragdowa 7"
              width={1024}
              height={576}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Spacer height="10vh" bg="#222325" />

      <section className="m5-two m5-two--reversed">
        <div className="m5-two__quote">
          <p className="m6-rich__quote-line">{investment.quote}</p>
        </div>
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
            <p className="t-neue-14">
              <span className="t-neue-14-bold">{seqC.kickerBold}</span>
              {" — "}
              {seqC.body}
            </p>
          </div>
        </div>
        <div className="m5-two__mobile-text">
          <p className="t-neue-14">
            <span className="t-neue-14-bold">{seqC.kickerBold}</span>
            {" — "}
            {seqC.body}
          </p>
        </div>
      </section>

      <Spacer height="10vh" bg="#222325" />

      <section
        className="m6-rich m6-rich--coords"
        aria-label="współrzędne inwestycji"
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
        dayAlt="wizualizacja dzienna — Szmaragdowa 7"
        nightAlt="wizualizacja nocna — Szmaragdowa 7"
      />

      <Spacer height="10vh" bg="#222325" />

      <section className="m5-two m5-two--reversed">
        <div className="m5-two__grid">
          <div className="m5-two__large">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={capWejscie.image} alt={capWejscie.alt} width={1200} height={1640} loading="lazy" />
          </div>
          <div className="m5-two__small-wrap">
            <div className="m5-two__small">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={capTaras.image} alt={capTaras.alt} width={800} height={1000} loading="lazy" />
            </div>
          </div>
          <div className="m5-two__text">
            <p className="t-neue-14">
              <span className="t-neue-14-bold">{capWejscie.kickerBold}</span>
              {" — "}
              {capWejscie.body}
            </p>
          </div>
        </div>
        <div className="m5-two__mobile-text">
          <p className="t-neue-14">
            <span className="t-neue-14-bold">{capWejscie.kickerBold}</span>
            {" — "}
            {capWejscie.body}
          </p>
        </div>
      </section>

      <Spacer height="10vh" bg="#222325" />

      <StickyBookNow />

      <Spacer height="5vh" bg="#222325" />

      <MapAndLotInfo slides={investment.slider} />

      <Spacer height="5vh" bg="#d6d0c5" />
    </article>
  );
}
