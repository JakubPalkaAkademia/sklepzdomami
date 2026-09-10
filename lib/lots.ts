import type { LotId } from "@/lib/mapa";
import type { RoomKey } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";
import { fillTemplate } from "@/lib/content";

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

type RawFloor = {
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  total: string;
  rooms: { key: RoomKey; area: string }[];
};

const lot7B7DFloors: { parter: Omit<RawFloor, "image" | "imageWidth" | "imageHeight">; pietro: Omit<RawFloor, "image" | "imageWidth" | "imageHeight"> } = {
  parter: {
    total: "84,50 m²",
    rooms: [
      { key: "vestibule", area: "4,00 m²" },
      { key: "livingKitchen", area: "53,50 m²" },
      { key: "office", area: "13,80 m²" },
      { key: "bathroom", area: "4,20 m²" },
      { key: "technical", area: "4,00 m²" },
      { key: "pantry", area: "5,00 m²" },
    ],
  },
  pietro: {
    total: "71,05 m²",
    rooms: [
      { key: "bedroom1", area: "11,70 m²" },
      { key: "bedroom2", area: "18,65 m²" },
      { key: "bedroom3", area: "18,30 m²" },
      { key: "bathroom", area: "9,30 m²" },
      { key: "laundry", area: "4,40 m²" },
      { key: "hall", area: "8,70 m²" },
    ],
  },
};

const planImageSize = {
  width: 4208,
  height: 3204,
} as const;

const lotAssets: Partial<Record<LotId, { parter: RawFloor; pietro: RawFloor }>> = {
  "7A": {
    parter: {
      image: "/loty/7A/parter.png",
      imageWidth: planImageSize.width,
      imageHeight: planImageSize.height,
      total: "93,00 m²",
      rooms: [
        { key: "vestibule", area: "4,00 m²" },
        { key: "livingKitchen", area: "62,00 m²" },
        { key: "office", area: "13,80 m²" },
        { key: "bathroom", area: "4,20 m²" },
        { key: "technical", area: "4,00 m²" },
        { key: "pantry", area: "5,00 m²" },
      ],
    },
    pietro: {
      image: "/loty/7A/pietro.png",
      imageWidth: planImageSize.width,
      imageHeight: planImageSize.height,
      total: "77,25 m²",
      rooms: [
        { key: "bedroom1", area: "11,70 m²" },
        { key: "bedroom2", area: "20,70 m²" },
        { key: "bedroom3", area: "22,45 m²" },
        { key: "bathroom", area: "9,30 m²" },
        { key: "laundry", area: "4,40 m²" },
        { key: "hall", area: "8,70 m²" },
      ],
    },
  },
  "7C": {
    parter: {
      image: "/loty/7C/parter.png",
      imageWidth: planImageSize.width,
      imageHeight: planImageSize.height,
      total: "113,00 m²",
      rooms: [
        { key: "terrace", area: "20,00 m²" },
        { key: "pantry", area: "5,00 m²" },
        { key: "vestibule", area: "4,00 m²" },
        { key: "technical", area: "4,00 m²" },
        { key: "bathroom", area: "4,20 m²" },
        { key: "livingKitchen", area: "62,00 m²" },
        { key: "office", area: "13,80 m²" },
      ],
    },
    pietro: {
      image: "/loty/7C/pietro.png",
      imageWidth: planImageSize.width,
      imageHeight: planImageSize.height,
      total: "77,25 m²",
      rooms: [
        { key: "bedroom1", area: "11,70 m²" },
        { key: "bedroom2", area: "20,70 m²" },
        { key: "bathroom", area: "9,30 m²" },
        { key: "laundry", area: "4,40 m²" },
        { key: "hall", area: "8,70 m²" },
        { key: "bedroom3", area: "22,45 m²" },
      ],
    },
  },
  "7B": {
    parter: {
      ...lot7B7DFloors.parter,
      image: "/loty/7B/parter.png",
      imageWidth: planImageSize.width,
      imageHeight: planImageSize.height,
    },
    pietro: {
      ...lot7B7DFloors.pietro,
      image: "/loty/7B/pietro.png",
      imageWidth: planImageSize.width,
      imageHeight: planImageSize.height,
    },
  },
  "7D": {
    parter: {
      ...lot7B7DFloors.parter,
      image: "/loty/7D/parter.png",
      imageWidth: planImageSize.width,
      imageHeight: planImageSize.height,
    },
    pietro: {
      ...lot7B7DFloors.pietro,
      image: "/loty/7D/pietro.png",
      imageWidth: planImageSize.width,
      imageHeight: planImageSize.height,
    },
  },
};

export function getLotDetails(id: LotId, dict: Dictionary): LotDetails | undefined {
  const assets = lotAssets[id];
  if (!assets) {
    return undefined;
  }

  const localizeFloor = (floor: RawFloor, kind: "ground" | "upper"): FloorPlan => ({
    label: kind === "ground" ? dict.floors.ground : dict.floors.upper,
    image: floor.image ?? "",
    imageWidth: floor.imageWidth ?? 1,
    imageHeight: floor.imageHeight ?? 1,
    imageAlt: fillTemplate(kind === "ground" ? dict.floors.groundPlanAlt : dict.floors.upperPlanAlt, {
      lot: id,
    }),
    total: floor.total,
    rooms: floor.rooms.map((room) => ({
      name: dict.rooms[room.key],
      area: room.area,
    })),
  });

  return {
    id,
    title: id,
    floors: {
      parter: localizeFloor(assets.parter, "ground"),
      pietro: localizeFloor(assets.pietro, "upper"),
    },
  };
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
