"""يرسم توقيع الحساب: شعار انستقرام (بتدرّجه) + @Abdelrahman_alali1 → PNG شفاف."""
import sys
from PIL import Image, ImageDraw, ImageFont
import numpy as np

HANDLE = '@Abdelrahman_alali1'

def ig_logo(s):
    ss = s * 4
    # تدرّج انستقرام من أسفل اليسار (أصفر) لأعلى اليمين (بنفسجي)
    y, x = np.mgrid[0:ss, 0:ss] / ss
    k = np.clip((x + (1 - y)) / 2, 0, 1)[..., None]
    stops = np.array([[254, 218, 117], [250, 126, 30], [214, 41, 118], [150, 47, 191], [79, 91, 213]], float)
    pos = np.linspace(0, 1, len(stops))
    grad = np.stack([np.interp(k[..., 0], pos, stops[:, c]) for c in range(3)], -1)
    g = Image.fromarray(grad.astype('uint8'), 'RGB')
    m = Image.new('L', (ss, ss), 0); d = ImageDraw.Draw(m)
    w = int(ss * 0.085)
    d.rounded_rectangle([w // 2, w // 2, ss - w // 2, ss - w // 2], radius=int(ss * 0.28), outline=255, width=w)
    r = ss * 0.22; c = ss / 2
    d.ellipse([c - r, c - r, c + r, c + r], outline=255, width=w)
    dr = ss * 0.06; dx, dy = ss * 0.75, ss * 0.25
    d.ellipse([dx - dr, dy - dr, dx + dr, dy + dr], fill=255)
    out = Image.new('RGBA', (ss, ss)); out.paste(g, (0, 0), m)
    return out.resize((s, s), Image.LANCZOS)

def badge(font_path, size, color, out):
    f = ImageFont.truetype(font_path, size)
    try: f.set_variation_by_axes([700])
    except Exception: pass
    bb = f.getbbox(HANDLE); tw, th = bb[2] - bb[0], bb[3] - bb[1]
    ls = int(size * 1.15); gap = int(size * 0.4); pad = int(size * 0.3)
    W, H = ls + gap + tw + 2 * pad, max(ls, th) + 2 * pad
    im = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    # ظل خفيف للنص
    sh = Image.new('RGBA', (W, H), (0, 0, 0, 0)); ImageDraw.Draw(sh).text((pad + ls + gap + 2, (H - th) // 2 - bb[1] + 2), HANDLE, font=f, fill=(0, 0, 0, 150))
    im.alpha_composite(sh)
    im.alpha_composite(ig_logo(ls), (pad, (H - ls) // 2))
    ImageDraw.Draw(im).text((pad + ls + gap, (H - th) // 2 - bb[1]), HANDLE, font=f, fill=color)
    im.save(out)

if __name__ == '__main__':
    font = sys.argv[1]
    badge(font, 34, (246, 217, 142, 200), 'assets/signature_small.png')
    badge(font, 58, (246, 217, 142, 255), 'assets/signature_big.png')
