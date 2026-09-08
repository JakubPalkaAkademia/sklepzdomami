"""Convert mapa-base.png black background to transparent alpha."""

import os

import numpy as np
from PIL import Image

MAP_PATH = os.path.join(
    os.path.dirname(__file__), "..", "public", "mapa", "mapa-base.png"
)
BLACK_THRESHOLD = 30


def main() -> None:
    img = Image.open(MAP_PATH).convert("RGBA")
    arr = np.array(img)
    rgb = arr[:, :, :3]
    alpha = arr[:, :, 3]

    dark = np.all(rgb <= BLACK_THRESHOLD, axis=2)
    alpha = np.where(dark, 0, np.maximum(alpha, 255)).astype(np.uint8)

    out = np.dstack([rgb, alpha])
    Image.fromarray(out, mode="RGBA").save(MAP_PATH, optimize=True)
    print(f"Updated {MAP_PATH}: {img.size}, transparent pixels={int(dark.sum())}")


if __name__ == "__main__":
    main()
