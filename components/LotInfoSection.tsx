"use client";

import { useEffect, useState } from "react";
import { BookNow } from "@/components/BookNow";
import { InfoAccordion } from "@/components/InfoAccordion";
import { useDictionary } from "@/components/LocaleProvider";
import { fillTemplate } from "@/lib/content";
import { getLotDetails, type FloorKey } from "@/lib/lots";
import type { LotId } from "@/lib/mapa";

type LotInfoSectionProps = {
  displayLot: LotId;
};

export function LotInfoSection({ displayLot }: LotInfoSectionProps) {
  const dict = useDictionary();
  const [activeFloor, setActiveFloor] = useState<FloorKey>("parter");
  const [infoExpanded, setInfoExpanded] = useState(false);
  const lot = getLotDetails(displayLot, dict);
  const floor = lot?.floors[activeFloor];

  useEffect(() => {
    setActiveFloor("parter");
  }, [displayLot]);

  return (
    <section className="m14-info" id="lot-info" aria-labelledby="info-title">
      <h2 id="info-title" className="m14-info__title m14-info__title--mobile">
        {`${dict.investment.specsTitle} — ${displayLot}`}
      </h2>
      <div className="m14-info__grid">
        <div className="m14-info__media m14-info__media--plan">
          {floor && lot ? (
            <>
              <div className="m14-info__floor-toggle" role="tablist" aria-label={dict.ui.floorAriaLabel}>
                {(Object.keys(lot.floors) as FloorKey[]).map((key) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={activeFloor === key}
                    className={`m14-info__floor-btn${activeFloor === key ? " m14-info__floor-btn--active" : ""}`}
                    onClick={() => setActiveFloor(key)}
                  >
                    {lot.floors[key].label}
                  </button>
                ))}
              </div>
              <div
                className="m14-info__plan-frame"
                role="tabpanel"
                aria-label={floor.label}
                style={{
                  aspectRatio: `${floor.imageWidth} / ${floor.imageHeight}`,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  key={`${displayLot}-${activeFloor}`}
                  src={floor.image}
                  alt={floor.imageAlt}
                  width={floor.imageWidth}
                  height={floor.imageHeight}
                  loading="eager"
                  decoding="async"
                  className="m14-info__plan"
                />
              </div>
            </>
          ) : (
            <p className="m14-info__hint m14-info__hint--empty t-neue-14">
              {fillTemplate(dict.ui.plansComingSoon, { lot: displayLot })}
            </p>
          )}
        </div>
        <div
          className={`m14-info__panel${infoExpanded ? " m14-info__panel--expanded" : ""}`}
        >
          <h2 className="m14-info__title">
            {`${dict.investment.specsTitle} — ${displayLot}`}
          </h2>
          <InfoAccordion
            key={displayLot}
            groundFloor={lot?.floors.parter}
            upperFloor={lot?.floors.pietro}
            onExpandedChange={setInfoExpanded}
          />
          <div className="m14-info__book-now">
            <BookNow />
          </div>
        </div>
      </div>
    </section>
  );
}
