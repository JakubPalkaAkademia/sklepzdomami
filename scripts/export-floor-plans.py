"""Export PDF OCG floor plan layers with identical crop bounding box."""

import io
import os

import fitz
import numpy as np
import pikepdf
from PIL import Image

PDF = r"C:\Users\JakubPalka\Downloads\SZMARAGDOWA_7A111.pdf"
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "loty", "7A")
DPI = 200
PADDING = 16
# Compass sits near the right edge — give it extra breathing room.
RIGHT_PADDING = 56


def render_layer(layer_name: str, layer_names: list[str]) -> fitz.Pixmap:
    pdf = pikepdf.open(PDF)
    ocprops = pdf.Root.OCProperties
    name_map = {str(ocg.get("/Name")): ocg for ocg in ocprops.OCGs}
    on = [name_map[layer_name]]
    off = [name_map[name] for name in layer_names if name != layer_name]
    ocprops.D = pikepdf.Dictionary(
        {
            "/Order": pikepdf.Array(list(name_map.values())),
            "/ON": pikepdf.Array(on),
            "/OFF": pikepdf.Array(off),
        }
    )
    buffer = io.BytesIO()
    pdf.save(buffer)
    pdf.close()

    doc = fitz.open(stream=buffer.getvalue(), filetype="pdf")
    page = doc[0]
    pix = page.get_pixmap(dpi=DPI, alpha=True)
    doc.close()
    return pix


def pixmap_to_rgba(pix: fitz.Pixmap) -> np.ndarray:
    return np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, 4)


def content_bbox(arr: np.ndarray, alpha_threshold: int = 1) -> tuple[int, int, int, int]:
    mask = arr[:, :, 3] >= alpha_threshold
    ys, xs = np.where(mask)
    if len(xs) == 0:
        raise ValueError("Layer has no visible content")
    return int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1


def output_filename(layer_name: str) -> str:
    normalized = layer_name.lower().replace("ę", "e").replace("é", "e")
    if "parter" in normalized:
        return "parter.png"
    return "pietro.png"


def main() -> None:
    probe = pikepdf.open(PDF)
    layer_names = [str(ocg.get("/Name")) for ocg in probe.Root.OCProperties.OCGs]
    probe.close()
    print("Layers:", layer_names)

    pixmaps: dict[str, fitz.Pixmap] = {}
    bboxes: dict[str, tuple[int, int, int, int]] = {}

    for layer_name in layer_names:
        pix = render_layer(layer_name, layer_names)
        pixmaps[layer_name] = pix
        bboxes[layer_name] = content_bbox(pixmap_to_rgba(pix))
        print(f"Layer '{layer_name}': bbox={bboxes[layer_name]}")

    union = (
        min(b[0] for b in bboxes.values()),
        min(b[1] for b in bboxes.values()),
        max(b[2] for b in bboxes.values()),
        max(b[3] for b in bboxes.values()),
    )

    sample_pix = next(iter(pixmaps.values()))
    x0 = max(0, union[0] - PADDING)
    y0 = max(0, union[1] - PADDING)
    x1 = min(sample_pix.width, union[2] + RIGHT_PADDING)
    y1 = min(sample_pix.height, union[3] + PADDING)
    crop_w, crop_h = x1 - x0, y1 - y0
    print(f"Union crop box: ({x0}, {y0}, {x1}, {y1}) -> {crop_w}x{crop_h}")

    os.makedirs(OUT_DIR, exist_ok=True)

    for layer_name in layer_names:
        rgba = pixmap_to_rgba(pixmaps[layer_name])[y0:y1, x0:x1]
        img = Image.fromarray(rgba)
        out_path = os.path.join(OUT_DIR, output_filename(layer_name))
        img.save(out_path, optimize=True)
        print(f"Saved {out_path}: {img.size}")


if __name__ == "__main__":
    main()
