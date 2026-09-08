"use client";

import { useEffect, useState } from "react";
import { InfoAccordion } from "@/components/InfoAccordion";
import { investment } from "@/lib/site";
import { getLotDetails, type FloorKey } from "@/lib/lots";
import type { LotId } from "@/lib/mapa";

type LotInfoSectionProps = {
  displayLot: LotId;
};

export function LotInfoSection({ displayLot }: LotInfoSectionProps) {
  const [activeFloor, setActiveFloor] = useState<FloorKey>("parter");
  const lot = getLotDetails(displayLot);
  const floor = lot?.floors[activeFloor];

  useEffect(() => {
    setActiveFloor("parter");
  }, [displayLot]);

  return (
    <section className="m14-info" id="lot-info" aria-labelledby="info-title">
      <h2 id="info-title" className="m14-info__title m14-info__title--mobile">
        {`${investment.specsTitle} — ${displayLot}`}
      </h2>
      <div className="m14-info__grid">
        <div className="m14-info__media m14-info__media--plan">
          {floor && lot ? (
            <>
              <div className="m14-info__floor-toggle" role="tablist" aria-label="kondygnacja">
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
                  aspectRatio: `${lot.floors.parter.imageWidth} / ${lot.floors.parter.imageHeight}`,
                }}
              >
                {(Object.keys(lot.floors) as FloorKey[]).map((key) => {
                  const floorPlan = lot.floors[key];
                  const isActive = activeFloor === key;

                  return (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={key}
                      src={floorPlan.image}
                      alt={floorPlan.imageAlt}
                      width={floorPlan.imageWidth}
                      height={floorPlan.imageHeight}
                      loading="eager"
                      decoding="async"
                      hidden={!isActive}
                      aria-hidden={!isActive}
                      className={`m14-info__plan${isActive ? " m14-info__plan--active" : ""}`}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <p className="m14-info__hint m14-info__hint--empty t-neue-14">
              Rzuty dla lokalu {displayLot} — wkrótce.
            </p>
          )}
        </div>
        <div className="m14-info__panel">
          <h2 className="m14-info__title">
            {`${investment.specsTitle} — ${displayLot}`}
          </h2>
          <InfoAccordion
            groundFloor={lot?.floors.parter}
            upperFloor={lot?.floors.pietro}
          />
        </div>
      </div>
    </section>
  );
}
