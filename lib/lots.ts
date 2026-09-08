import type { LotId } from "@/lib/mapa";

export type FloorRoom = {
  name: string;
  area: string;
};

export type FloorPlan = {
  label: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  total: string;
  rooms: FloorRoom[];
};

export type LotDetails = {
  id: LotId;
  title: string;
  floors: {
    parter: FloorPlan;
    pietro: FloorPlan;
  };
};

export type FloorKey = keyof LotDetails["floors"];

export const lotDetails: Partial<Record<LotId, LotDetails>> = {
  "7A": {
    id: "7A",
    title: "7A",
    floors: {
      parter: {
        label: "parter",
        image: "/loty/7A/parter.png",
        imageWidth: 4045,
        imageHeight: 3255,
        imageAlt: "rzut parteru — lokal 7A, Szmaragdowa 7",
        total: "93,00 m²",
        rooms: [
          { name: "przedsionek", area: "4,00 m²" },
          { name: "strefa dzienna z kuchnią", area: "62,00 m²" },
          { name: "pom. biurowe", area: "13,80 m²" },
          { name: "łazienka", area: "4,20 m²" },
          { name: "pom. techniczne", area: "4,00 m²" },
          { name: "spiżarnia", area: "5,00 m²" },
        ],
      },
      pietro: {
        label: "piętro",
        image: "/loty/7A/pietro.png",
        imageWidth: 4045,
        imageHeight: 3255,
        imageAlt: "rzut piętra — lokal 7A, Szmaragdowa 7",
        total: "77,25 m²",
        rooms: [
          { name: "sypialnia 1", area: "11,70 m²" },
          { name: "sypialnia 2", area: "20,70 m²" },
          { name: "sypialnia 3", area: "22,45 m²" },
          { name: "łazienka", area: "9,30 m²" },
          { name: "pralnia", area: "4,40 m²" },
          { name: "hol", area: "8,70 m²" },
        ],
      },
    },
  },
};

export function getLotDetails(id: LotId): LotDetails | undefined {
  return lotDetails[id];
}

export function parseAreaM2(area: string): number | null {
  const match = area.match(/([\d,]+)/);
  if (!match) {
    return null;
  }

  const value = Number.parseFloat(match[1].replace(",", "."));
  return Number.isFinite(value) ? value : null;
}

export function formatAreaM2(value: number): string {
  return `${value.toFixed(2).replace(".", ",")} m²`;
}

export function getBuildingTotalM2(floors: FloorPlan[]): string | undefined {
  let sum = 0;

  for (const floor of floors) {
    const area = parseAreaM2(floor.total);
    if (area === null) {
      return undefined;
    }
    sum += area;
  }

  return formatAreaM2(sum);
}
