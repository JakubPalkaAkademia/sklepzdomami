/** PDF page crop — bez marginesów drukarskich i pasków kalibracji. */
export const mapCrop = {
  x: 220,
  y: 120,
  width: 1200,
  height: 1090,
} as const;

export const mapImageSize = {
  width: 2400,
  height: 2180,
} as const;

export const mapViewBox = {
  width: mapCrop.width,
  height: mapCrop.height,
} as const;

export type LotId = "7A" | "7B" | "7C" | "7D";

export const defaultLotId: LotId = "7A";

/** PDF rect: [x0, y0, x1, y1] in cropped coordinates. */
export type PdfRect = [number, number, number, number];

export type MapLot = {
  id: LotId;
  label: string;
  layerImage: string;
  /** Obszar najechania — wyliczony z eksportu warstwy PDF. */
  hit: PdfRect;
};

function toCrop(x: number, y: number): [number, number] {
  return [x - mapCrop.x, y - mapCrop.y];
}

function pdfBBoxToCrop(x0: number, y0: number, x1: number, y1: number): PdfRect {
  const [cx0, cy0] = toCrop(x0, y0);
  const [cx1, cy1] = toCrop(x1, y1);
  return [cx0, cy0, cx1, cy1];
}

/** Centroidy i bboxy z eksportu warstw PDF (pikepdf OCG). */
export const mapLots: MapLot[] = [
  {
    id: "7A",
    label: "7A",
    layerImage: "/mapa/layer-7A.png",
    hit: pdfBBoxToCrop(634.0, 930.5, 835.5, 1112.5),
  },
  {
    id: "7B",
    label: "7B",
    layerImage: "/mapa/layer-7B.png",
    hit: pdfBBoxToCrop(541.5, 824.0, 736.5, 1013.0),
  },
  {
    id: "7C",
    label: "7C",
    layerImage: "/mapa/layer-7C.png",
    hit: pdfBBoxToCrop(815.0, 775.0, 998.0, 978.5),
  },
  {
    id: "7D",
    label: "7D",
    layerImage: "/mapa/layer-7D.png",
    hit: pdfBBoxToCrop(719.5, 673.0, 908.5, 868.5),
  },
];

export const mapSection = {
  title: "Mapa inwestycji",
  subtitle: "wybierz jeden z czterech domów.",
  image: "/mapa/mapa-base.png",
  imageAlt: "mapa działki Szmaragdowa 7 — najechanie na lokal odsłania jego warstwę",
  imageWidth: mapImageSize.width,
  imageHeight: mapImageSize.height,
} as const;
