"use client";

import { useState } from "react";
import { FeatureBlockSection } from "@/components/FeatureBlockSection";
import { InteractiveMap } from "@/components/InteractiveMap";
import { LotInfoSection } from "@/components/LotInfoSection";
import { ProductStorySlider, type ProductStorySlide } from "@/components/ProductStorySlider";
import { SiteBasicsSection } from "@/components/SiteBasicsSection";
import { useDictionary } from "@/components/LocaleProvider";
import { getInvestment } from "@/lib/content";
import { defaultLotId, type LotId } from "@/lib/mapa";

type MapAndLotInfoProps = {
  slides: readonly ProductStorySlide[];
};

export function MapAndLotInfo({ slides }: MapAndLotInfoProps) {
  const dict = useDictionary();
  const investment = getInvestment(dict);
  const [selectedLot, setSelectedLot] = useState<LotId>(defaultLotId);
  const [hoveredLot, setHoveredLot] = useState<LotId | null>(null);
  const [capTaras, capWejscie] = investment.captions;

  const displayLot = hoveredLot ?? selectedLot;

  const handleSelectLot = (lot: LotId) => {
    setSelectedLot(lot);
    requestAnimationFrame(() => {
      document.getElementById("lot-info")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <>
      <InteractiveMap
        hoveredLot={hoveredLot}
        selectedLot={selectedLot}
        onHoverLot={setHoveredLot}
        onSelectLot={handleSelectLot}
      />
      <div className="m16-map-spacer" aria-hidden="true" />
      <LotInfoSection displayLot={displayLot} />
      <FeatureBlockSection
        heading={investment.facadeBlock.heading}
        paragraphs={investment.facadeBlock.paragraphs}
        detailImages={investment.facadeBlock.detailImages}
        largeImage={{ src: investment.sequences[0].image, alt: investment.sequences[0].alt }}
        smallImage={{ src: investment.sequences[1].image, alt: investment.sequences[1].alt }}
      />
      <div
        className="m3-spacer"
        style={{ "--spacer-height": "10vh", "--spacer-bg": "#222325" } as React.CSSProperties}
        aria-hidden="true"
      />
      <ProductStorySlider slides={slides} />
      <section className="m5-two m5-two--reversed m5-two--after-slider">
        <div className="m5-two__quote m5-two__quote--lead">
          <p className="m6-rich__quote-line">{investment.turnkeyHeading}</p>
        </div>
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
              {capWejscie.leadBeforeKey}
              <span className="t-neue-14-bold">{capWejscie.keyBold}</span>
              {capWejscie.leadAfterKey}
            </p>
            <p className="t-neue-14-bold">{capWejscie.closingBold}</p>
          </div>
        </div>
        <div className="m5-two__mobile-text">
          <p className="t-neue-14 m5-two__lake-copy">
            {capWejscie.leadBeforeKey}
            <span className="t-neue-14-bold">{capWejscie.keyBold}</span>
            {capWejscie.leadAfterKey}{" "}
            <span className="t-neue-14-bold">{capWejscie.closingBold}</span>
          </p>
        </div>
      </section>
      <SiteBasicsSection />
    </>
  );
}
