"use client";

import { useState } from "react";
import { investment } from "@/lib/site";

type PanelKey = "ground" | "upper" | (typeof investment.specs)[number]["label"];

const ALL_PANEL_KEYS: PanelKey[] = [
  "ground",
  "upper",
  ...investment.specs.map((spec) => spec.label),
];

function panelsExcept(closedKey: PanelKey): Partial<Record<PanelKey, boolean>> {
  return Object.fromEntries(
    ALL_PANEL_KEYS.filter((key) => key !== closedKey).map((key) => [key, true]),
  ) as Partial<Record<PanelKey, boolean>>;
}

export function InfoAccordion() {
  const [openAll, setOpenAll] = useState(false);
  const [openPanels, setOpenPanels] = useState<Partial<Record<PanelKey, boolean>>>({});

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
      setOpenPanels(panelsExcept(key));
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
          otwórz wszystko
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
            {investment.groundFloor.label}
          </summary>
          <div className="m14-info__content">
            {investment.groundFloor.rooms.map((room) => (
              <div key={room.name} className="m14-info__row">
                <span>{room.name}</span>
                <span>{room.area}</span>
              </div>
            ))}
            <p className="m14-info__total">razem: {investment.groundFloor.total}</p>
          </div>
        </details>
        <details open={isPanelOpen("upper")}>
          <summary className="t-neue-14-bold" onClick={handleSummaryClick("upper")}>
            {investment.upperFloor.label}
          </summary>
          <div className="m14-info__content">
            {investment.upperFloor.rooms.map((room) => (
              <div key={room.name} className="m14-info__row">
                <span>{room.name}</span>
                <span>{room.area}</span>
              </div>
            ))}
            <p className="m14-info__total">razem: {investment.upperFloor.total}</p>
          </div>
        </details>
        {investment.specs.map((spec) => (
          <details key={spec.label} open={isPanelOpen(spec.label)}>
            <summary className="t-neue-14-bold" onClick={handleSummaryClick(spec.label)}>
              {spec.label}
            </summary>
            <div className="m14-info__content">{spec.value}</div>
          </details>
        ))}
      </div>
    </>
  );
}
