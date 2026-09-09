"use client";

import { mapLots, mapSection, mapViewBox, type LotId, type PdfRect } from "@/lib/mapa";

type InteractiveMapProps = {
  hoveredLot: LotId | null;
  selectedLot: LotId;
  onHoverLot: (lot: LotId | null) => void;
  onSelectLot: (lot: LotId) => void;
};

function rectToSvg(rect: PdfRect) {
  const [x0, y0, x1, y1] = rect;
  return {
    x: x0,
    y: y0,
    width: x1 - x0,
    height: y1 - y0,
  };
}

export function InteractiveMap({
  hoveredLot,
  selectedLot,
  onHoverLot,
  onSelectLot,
}: InteractiveMapProps) {
  const previewLayer = hoveredLot
    ? mapLots.find((lot) => lot.id === hoveredLot)?.layerImage
    : null;

  return (
    <section className="m16-map" aria-labelledby="map-title" aria-describedby="map-subtitle">
      <div className="m16-map__header">
        <h2 id="map-title" className="m16-map__title">{mapSection.title}</h2>
        <p id="map-subtitle" className="m16-map__subtitle">{mapSection.subtitle}</p>
      </div>

      <div className="m16-map__stage">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="m16-map__image"
          src={mapSection.image}
          alt={mapSection.imageAlt}
          width={mapSection.imageWidth}
          height={mapSection.imageHeight}
          loading="lazy"
        />

        {previewLayer && hoveredLot && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={hoveredLot}
            className="m16-map__layer m16-map__layer--active"
            src={previewLayer}
            alt=""
            width={mapSection.imageWidth}
            height={mapSection.imageHeight}
            aria-hidden="true"
          />
        )}

        <svg
          className="m16-map__overlay"
          viewBox={`0 0 ${mapViewBox.width} ${mapViewBox.height}`}
          aria-hidden="true"
        >
          {mapLots.map((lot) => {
            const { x, y, width, height } = rectToSvg(lot.hit);

            return (
              <rect
                key={`${lot.id}-hit`}
                className="m16-map__hit"
                x={x}
                y={y}
                width={width}
                height={height}
                onMouseEnter={() => onHoverLot(lot.id)}
                onMouseLeave={() => onHoverLot(null)}
                onClick={() => onSelectLot(lot.id)}
              />
            );
          })}
        </svg>
      </div>

      <div className="m16-map__buttons" role="group" aria-label="lokale na mapie">
        {mapLots.map((lot) => {
          const isSelected = selectedLot === lot.id;
          const isPreview = hoveredLot === lot.id;

          return (
            <button
              key={lot.id}
              type="button"
              className={`m16-map__btn${isPreview ? " m16-map__btn--active" : ""}`}
              aria-pressed={isSelected}
              onMouseEnter={() => onHoverLot(lot.id)}
              onMouseLeave={() => onHoverLot(null)}
              onFocus={() => onHoverLot(lot.id)}
              onBlur={() => onHoverLot(null)}
              onClick={() => onSelectLot(lot.id)}
            >
              {lot.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
