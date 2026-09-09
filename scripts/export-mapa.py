"""Export interactive map assets from mapaINT.pdf."""

from __future__ import annotations

import json
import shutil
from pathlib import Path

import numpy as np
import pikepdf
import pymupdf as fitz
from PIL import Image

PDF_PATH = Path(r"C:\Users\JakubPalka\Downloads\mapaINT.pdf")
OUT_DIR = Path(__file__).resolve().parent.parent / "public" / "mapa"
ZOOM = 2.0
MAT = fitz.Matrix(ZOOM, ZOOM)

# Trim printer marks; wider than the first tight crop, narrower than full page.
MAP_CROP_PDF = (80, 70, 1520, 1210)  # x0, y0, x1, y1 in PDF units
LOT_NAMES = ["7D", "7C", "7B", "7A"]
DIFF_THRESHOLD = 25


def make_pdf(on_names: list[str], off_names: list[str]) -> Path:
    pdf = pikepdf.open(PDF_PATH)
    ocprops = pdf.Root.OCProperties
    name_map = {str(o.get("/Name")): o for o in ocprops.OCGs}
    ocprops.D = pikepdf.Dictionary(
        {
            "/Order": pikepdf.Array([name_map[n] for n in ["MAPA", *LOT_NAMES]]),
            "/ON": pikepdf.Array([name_map[n] for n in on_names]),
            "/OFF": pikepdf.Array([name_map[n] for n in off_names]),
            "/BaseState": pikepdf.Name("/OFF"),
            "/ListMode": pikepdf.Name("/VisiblePages"),
        }
    )
    tmp = OUT_DIR / "_tmp-export.pdf"
    pdf.save(tmp)
    pdf.close()
    return tmp


def render_page(on_names: list[str], off_names: list[str]) -> Image.Image:
    tmp = make_pdf(on_names, off_names)
    doc = fitz.open(tmp)
    page = doc[0]
    pix = page.get_pixmap(matrix=MAT, alpha=True, clip=fitz.Rect(*MAP_CROP_PDF))
    img = Image.frombytes("RGBA", (pix.width, pix.height), pix.samples)
    doc.close()
    tmp.unlink(missing_ok=True)
    return img


def white_to_alpha(img: Image.Image) -> Image.Image:
    arr = np.array(img)
    rgb = arr[:, :, :3]
    white = (rgb[:, :, 0] > 248) & (rgb[:, :, 1] > 248) & (rgb[:, :, 2] > 248)
    arr[white, 3] = 0
    return Image.fromarray(arr)


def build_overlay(combo: np.ndarray, mapa_only: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    diff = np.abs(combo[:, :, :3].astype(int) - mapa_only[:, :, :3].astype(int)).sum(axis=2) > DIFF_THRESHOLD

    overlay = np.zeros_like(combo)
    overlay[diff] = combo[diff]

    white = (
        (overlay[:, :, 0] > 248)
        & (overlay[:, :, 1] > 248)
        & (overlay[:, :, 2] > 248)
    )
    overlay[white, 3] = 0
    overlay[~diff, 3] = 0
    return overlay, diff


def bbox_crop(mask: np.ndarray) -> tuple[float, float, float, float]:
    ys, xs = np.where(mask)
    return xs.min() / ZOOM, ys.min() / ZOOM, xs.max() / ZOOM, ys.max() / ZOOM


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    crop_w = MAP_CROP_PDF[2] - MAP_CROP_PDF[0]
    crop_h = MAP_CROP_PDF[3] - MAP_CROP_PDF[1]

    mapa_only = np.array(render_page(["MAPA"], LOT_NAMES))
    base = white_to_alpha(Image.fromarray(mapa_only))
    base.save(OUT_DIR / "mapa-base.png", optimize=True)

    lots: dict[str, dict[str, object]] = {}

    for lot in LOT_NAMES:
        off = [name for name in LOT_NAMES if name != lot]
        combo = np.array(render_page(["MAPA", lot], off))
        overlay, diff = build_overlay(combo, mapa_only)

        Image.fromarray(overlay).save(OUT_DIR / f"layer-{lot}.png", optimize=True)
        x0, y0, x1, y1 = bbox_crop(diff)
        lots[lot] = {
            "hit": [round(x0, 1), round(y0, 1), round(x1, 1), round(y1, 1)],
            "pixels": int(diff.sum()),
        }

    meta = {
        "crop": {"x": MAP_CROP_PDF[0], "y": MAP_CROP_PDF[1], "width": crop_w, "height": crop_h},
        "imageWidth": base.width,
        "imageHeight": base.height,
        "zoom": ZOOM,
        "lots": lots,
    }
    (OUT_DIR / "meta.json").write_text(json.dumps(meta, indent=2), encoding="utf-8")
    shutil.rmtree(OUT_DIR / "_test", ignore_errors=True)
    print(json.dumps(meta, indent=2))


if __name__ == "__main__":
    main()
