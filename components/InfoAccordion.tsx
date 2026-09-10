"use client";

import { useEffect, useState } from "react";
import { useDictionary } from "@/components/LocaleProvider";
import { getInvestment } from "@/lib/content";
import { getBuildingTotalM2, type FloorPlan } from "@/lib/lots";

type PanelKey = "ground" | "upper" | string;

type InfoAccordionProps = {
  groundFloor?: FloorPlan;
  upperFloor?: FloorPlan;
  onExpandedChange?: (expanded: boolean) => void;
};

function panelsExcept(closedKey: PanelKey, allKeys: PanelKey[]): Partial<Record<PanelKey, boolean>> {
  return Object.fromEntries(
    allKeys.filter((key) => key !== closedKey).map((key) => [key, true]),
  );
}

export function InfoAccordion({ groundFloor, upperFloor, onExpandedChange }: InfoAccordionProps) {
  const dict = useDictionary();
  const investment = getInvestment(dict);
  const [openAll, setOpenAll] = useState(false);
  const [openPanels, setOpenPanels] = useState<Partial<Record<PanelKey, boolean>>>({});

  const allPanelKeys: PanelKey[] = ["ground", "upper", ...investment.lotSpecs.map((spec) => spec.id)];
  const isExpanded = openAll || allPanelKeys.some((key) => Boolean(openPanels[key]));

  useEffect(() => {
    onExpandedChange?.(isExpanded);
  }, [isExpanded, onExpandedChange]);
  const ground = groundFloor ?? investment.groundFloor;
  const upper = upperFloor ?? investment.upperFloor;
  const buildingTotal =
    groundFloor && upperFloor ? getBuildingTotalM2([groundFloor, upperFloor]) : undefined;

  const isPanelOpen = (key: PanelKey) => openAll || Boolean(openPanels[key]);

  const handleOpenAll = (checked: boolean) => {
    setOpenAll(checked);
    if (!checked) {
      setOpenPanels({});
    }
  };

  const handleSummaryClick = (key: PanelKey) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const nextOpen = !isPanelOpen(key);

    if (openAll && !nextOpen) {
      setOpenAll(false);
      setOpenPanels(panelsExcept(key, allPanelKeys));
      return;
    }

    if (openAll) {
      return;
    }

    setOpenPanels((prev) => ({ ...prev, [key]: nextOpen }));
  };

  return (
    <>
      <div className="m14-info__toggle">
        <label className="m14-info__toggle-label">
          {dict.ui.expandAll}
          <input
            type="checkbox"
            className="m14-info__toggle-input"
            checked={openAll}
            onChange={(event) => handleOpenAll(event.target.checked)}
          />
        </label>
      </div>
      <div className="m14-info__accordion">
        <details open={isPanelOpen("ground")}>
          <summary className="t-neue-14-bold" onClick={handleSummaryClick("ground")}>
            {ground.label}
          </summary>
          <div className="m14-info__content">
            {ground.rooms.map((room) => (
              <div key={room.name} className="m14-info__row">
                <span>{room.name}</span>
                <span>{room.area}</span>
              </div>
            ))}
            <p className="m14-info__total">{dict.ui.total}: {ground.total}</p>
          </div>
        </details>
        <details open={isPanelOpen("upper")}>
          <summary className="t-neue-14-bold" onClick={handleSummaryClick("upper")}>
            {upper.label}
          </summary>
          <div className="m14-info__content">
            {upper.rooms.map((room) => (
              <div key={room.name} className="m14-info__row">
                <span>{room.name}</span>
                <span>{room.area}</span>
              </div>
            ))}
            <p className="m14-info__total">{dict.ui.total}: {upper.total}</p>
            {buildingTotal && (
              <p className="m14-info__total">{dict.ui.buildingTotal}: {buildingTotal}</p>
            )}
          </div>
        </details>
        {investment.lotSpecs.map((spec) => (
          <details key={spec.id} open={isPanelOpen(spec.id)}>
            <summary className="t-neue-14-bold" onClick={handleSummaryClick(spec.id)}>
              {spec.label}
            </summary>
            <div className="m14-info__content">{spec.value}</div>
          </details>
        ))}
      </div>
    </>
  );
}
