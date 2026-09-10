"use client";

import { useState } from "react";
import { useDictionary } from "@/components/LocaleProvider";
import { studio } from "@/lib/site";

type PanelKey = string;

function panelsExcept(closedKey: PanelKey, allKeys: PanelKey[]): Partial<Record<PanelKey, boolean>> {
  return Object.fromEntries(
    allKeys.filter((key) => key !== closedKey).map((key) => [key, true]),
  );
}

export function SiteBasicsSection() {
  const dict = useDictionary();
  const items = dict.investment.siteBasics;
  const [openAll, setOpenAll] = useState(false);
  const [openPanels, setOpenPanels] = useState<Partial<Record<PanelKey, boolean>>>({});

  const allPanelKeys = items.map((item) => item.id);
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
      <h2 id="basics-title" className="m17-basics__title">{dict.investment.siteBasicsTitle}</h2>
      <div className="m17-basics__toggle">
        <label className="m17-basics__toggle-label">
          {dict.ui.expandAll}
          <input
            type="checkbox"
            className="m17-basics__toggle-input"
            checked={openAll}
            onChange={(event) => handleOpenAll(event.target.checked)}
          />
        </label>
      </div>
      <div className="m17-basics__accordion">
        {items.map((item) => (
          <details key={item.id} open={isPanelOpen(item.id)}>
            <summary className="t-neue-14-bold" onClick={handleSummaryClick(item.id)}>
              {item.label}
            </summary>
            <div className="m17-basics__content">
              {item.id === "contact" ? (
                <div className="m17-basics__contact">
                  <p>
                    <a href={studio.phoneHref}>{studio.phone}</a>
                  </p>
                  <p>
                    <a href={studio.emailHref}>{studio.email}</a>
                  </p>
                </div>
              ) : (
                "value" in item ? item.value : null
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
