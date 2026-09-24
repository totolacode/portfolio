#!/usr/bin/env python3
"""Build a tiny Japanese web font containing only the characters used in src/.

@fontsource ships Zen Kaku Gothic New as ~120 unicode-range slices per weight, which
means a 240KB stylesheet and dozens of font requests per page. This merges the slices
that hold the characters we actually use into one woff2 per weight.

Re-run after adding new text to the site (characters missing from the subset fall back
to the next font in the stack):

    python3 -m pip install fonttools brotli
    npm run fonts
"""
import glob
import os
import sys
import tempfile

from fontTools import subset
from fontTools.merge import Merger
from fontTools.ttLib import TTFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "node_modules/@fontsource/zen-kaku-gothic-new/files")
OUT = os.path.join(ROOT, "public/fonts")
WEIGHTS = [500, 700]


def used_codepoints() -> set[int]:
    chars: set[str] = set()
    for path in glob.glob(os.path.join(ROOT, "src/**/*"), recursive=True):
        if path.endswith((".astro", ".ts", ".css")):
            with open(path, encoding="utf8") as f:
                chars |= set(f.read())
    chars |= {chr(c) for c in range(0x20, 0x7F)}  # keep all of ASCII
    return {ord(c) for c in chars if ord(c) > 0x20}


def subset_font(font: TTFont, codepoints: set[int], out_path: str) -> None:
    opts = subset.Options()
    opts.layout_features = ["*"]
    opts.notdef_outline = True
    opts.name_IDs = ["*"]
    sub = subset.Subsetter(opts)
    sub.populate(unicodes=codepoints)
    sub.subset(font)
    font.save(out_path)


def build(weight: int, need: set[int]) -> None:
    remaining = set(need)
    with tempfile.TemporaryDirectory() as tmp:
        parts: list[str] = []
        for path in sorted(glob.glob(os.path.join(SRC, f"*-{weight}-normal.woff"))):
            font = TTFont(path)
            take = remaining & set(font.getBestCmap())
            if not take:
                continue
            remaining -= take
            font.flavor = None
            part = os.path.join(tmp, f"{len(parts)}.ttf")
            subset_font(font, take, part)
            parts.append(part)
        merged = Merger().merge(parts)
    merged.flavor = "woff2"
    out = os.path.join(OUT, f"zen-kaku-gothic-new-{weight}.woff2")
    merged.save(out)
    print(f"{weight}: {len(parts)} slices -> {os.path.getsize(out) / 1024:.0f}KB", end="")
    if remaining:
        print(f" (not in font: {''.join(chr(c) for c in sorted(remaining))})", end="")
    print()


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)
    cps = used_codepoints()
    for w in WEIGHTS:
        build(w, cps)
    sys.exit(0)
