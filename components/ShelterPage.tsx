import { MapAndLotInfo } from "@/components/MapAndLotInfo";
import { ProductStorySlider } from "@/components/ProductStorySlider";
import { StickyBookNow } from "@/components/StickyBookNow";
import { HeroVideo } from "@/components/HeroVideo";
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
  const [coordsLat, coordsLon] = splitDmsCoordinates(investment.coordinatesDms);

  return (
    <article className="shelter-page">
      <section className="m8-hero" aria-label={investment.title}>
        <HeroVideo />
        <div className="m8-hero__content shelter-grid">
          <div className="m8-hero__title-wrap">
            <p className="t-neue-50">{investment.title}</p>
            <p className="t-neue-14 m8-hero__tagline">{investment.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="m6-rich">
        <div className="m6-rich__inner">
          <div className="m6-rich__content m6-rich__content--narrow">
            <p className="t-serif-16">{investment.introLeadPl}</p>
          </div>
        </div>
        <div className="m6-rich__inner m6-rich__inner--flush">
          <div className="m6-rich__content">
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
          <div className="m5-two__text">
            <p className="t-neue-14">
              <span className="t-neue-14-bold">{seqA.kickerBold}</span>
              {" — "}
              {seqA.body}
            </p>
            <p className="t-neue-14-bold m5-two__status">{investment.statusLine}</p>
          </div>
        </div>
        <div className="m5-two__mobile-text">
          <p className="t-neue-14">
            <span className="t-neue-14-bold">{seqA.kickerBold}</span>
            {" — "}
            {seqA.body}
          </p>
          <p className="t-neue-14-bold m5-two__status">{investment.statusLine}</p>
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
              src={investment.media.deck}
              alt="widok na inwestycję — Morzyczyn"
              width={1920}
              height={1080}
              loading="lazy"
            />
          </div>
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
            <p className="m6-coords__decimal">{investment.coordinatesDecimal}</p>
            <p className="m6-coords__label">{investment.locationLabel}</p>
          </div>
        </div>
      </section>

      <Spacer height="10vh" bg="#222325" />

      <section
        className="m6-rich m6-rich--quote"
        style={{ "--m6-bg": "#222325", "--m6-color": "#ffffff" } as React.CSSProperties}
      >
        <div className="m6-rich__inner m6-rich__inner--quote">
          <div className="m6-rich__content m6-rich__content--quote-a">
            <p className="t-serif-50">{investment.quote.line1}</p>
          </div>
        </div>
      </section>

      <Spacer height="10vh" bg="#222325" />

      <section
        className="m6-rich m6-rich--quote"
        style={{ "--m6-bg": "#222325", "--m6-color": "#ffffff" } as React.CSSProperties}
      >
        <div className="m6-rich__inner m6-rich__inner--quote">
          <div className="m6-rich__content m6-rich__content--quote-b">
            <p className="t-serif-30">{investment.quote.line2}</p>
            <p className="t-neue-14 m6-rich__attribution">{investment.quote.attribution}</p>
          </div>
        </div>
      </section>

      <Spacer height="10vh" bg="#222325" />

      <section className="m5-two m5-two--reversed">
        <div className="m5-two__grid">
          <div className="m5-two__large">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={seqC.image} alt={seqC.alt} width={1200} height={1640} loading="lazy" />
          </div>
          <div className="m5-two__small-wrap">
            <div className="m5-two__small">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={seqB.image} alt={seqB.alt} width={800} height={1000} loading="lazy" />
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

      {investment.captions.map((cap, index) => (
        <section
          key={`${cap.image}-${index}`}
          className={`m2-split${index % 2 === 1 ? " m2-split--reversed" : ""}`}
        >
          <div className="m2-split__inner">
            <div className="m2-split__text">
              <p className="t-neue-14">
                <span className="t-neue-14-bold">{cap.kickerBold}</span>
                {" — "}
                {cap.body}
              </p>
            </div>
            <div className="m2-split__image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={cap.image} alt={cap.alt} width={1200} height={1640} loading="lazy" />
            </div>
          </div>
          <div className="m2-split__mobile-text">
            <p className="t-neue-14">
              <span className="t-neue-14-bold">{cap.kickerBold}</span>
              {" — "}
              {cap.body}
            </p>
          </div>
        </section>
      ))}

      <Spacer height="10vh" bg="#222325" />

      <ProductStorySlider title={investment.postcardTitle} slides={investment.slider} />

      <Spacer height="5vh" bg="#222325" />

      <StickyBookNow />

      <Spacer height="5vh" bg="#222325" />

      <MapAndLotInfo />

      <Spacer height="5vh" bg="#d6d0c5" />
    </article>
  );
}
