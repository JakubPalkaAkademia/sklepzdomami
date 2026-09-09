"use client";

import { useState } from "react";
import { investment, studio } from "@/lib/site";

type PanelKey = (typeof investment.siteBasics)[number]["label"];

function panelsExcept(closedKey: PanelKey, allKeys: PanelKey[]): Partial<Record<PanelKey, boolean>> {
  return Object.fromEntries(
    allKeys.filter((key) => key !== closedKey).map((key) => [key, true]),
  ) as Partial<Record<PanelKey, boolean>>;
}

export function SiteBasicsSection() {
  const [openAll, setOpenAll] = useState(false);
  const [openPanels, setOpenPanels] = useState<Partial<Record<PanelKey, boolean>>>({});

  const allPanelKeys = investment.siteBasics.map((item) => item.label);
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
    <section className="m17-basics" aria-labelledby="basics-title">
      <h2 id="basics-title" className="m17-basics__title">{investment.siteBasicsTitle}</h2>
      <div className="m17-basics__toggle">
        <label className="m17-basics__toggle-label">
          rozwiń wszystko
          <input
            type="checkbox"
            className="m17-basics__toggle-input"
            checked={openAll}
            onChange={(event) => handleOpenAll(event.target.checked)}
          />
        </label>
      </div>
      <div className="m17-basics__accordion">
        {investment.siteBasics.map((item) => (
          <details key={item.label} open={isPanelOpen(item.label)}>
            <summary className="t-neue-14-bold" onClick={handleSummaryClick(item.label)}>
              {item.label}
            </summary>
            <div className="m17-basics__content">
              {item.label === "kontakt" ? (
                <div className="m17-basics__contact">
                  <p>
                    <a href={studio.phoneHref}>{studio.phone}</a>
                  </p>
                  <p>
                    <a href={studio.emailHref}>{studio.email}</a>
                  </p>
                </div>
              ) : (
                item.value
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
