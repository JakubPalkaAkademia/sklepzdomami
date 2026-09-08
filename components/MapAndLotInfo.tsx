"use client";

import { useState } from "react";
import { InteractiveMap } from "@/components/InteractiveMap";
import { LotInfoSection } from "@/components/LotInfoSection";
import { SiteBasicsSection } from "@/components/SiteBasicsSection";
import { defaultLotId, type LotId } from "@/lib/mapa";

export function MapAndLotInfo() {
  const [selectedLot, setSelectedLot] = useState<LotId>(defaultLotId);
  const [hoveredLot, setHoveredLot] = useState<LotId | null>(null);

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
        previewLot={displayLot}
        selectedLot={selectedLot}
        onHoverLot={setHoveredLot}
        onSelectLot={handleSelectLot}
      />
      <div className="m16-map-spacer" aria-hidden="true" />
      <LotInfoSection displayLot={displayLot} />
      <SiteBasicsSection />
    </>
  );
}
