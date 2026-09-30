/* s12 — الختام: نجمة ثمانية ترتسم وتدور، الآية (الأنبياء 107) تظهر بالرسم الإملائي، ثم «صلى الله عليه وسلم» */
import { bg, star8Path } from './_common.js';
const AYAH = ['وَمَا أَرْسَلْنَاكَ', 'إِلَّا رَحْمَةً لِّلْعَالَمِينَ'];   // api.quran.com text_imlaei 21:107 — الحروف مطابقة لـ api.alquran.cloud
MOTION.scene({
  id: 's12',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx;
    const end = ctx.timeline ? ctx.timeline.duration : ctx.scene.end, fadeOut = 1 - at(t, end - 0.9, end - 0.05);
    bg(ctx, t, { seed: 43, glowAt: [540, 780], glowR: 750, glowColor: 'rgba(246,217,142,0.22)' });
    X.save(); X.globalAlpha = fadeOut;
    const cx = 540, cy = 780;
    for (let i = 0; i < 3; i++)
      ctx.drawPath(X, star8Path(cx, cy, 420 - i * 60, lt * (i % 2 ? -0.08 : 0.08) + i * 0.2), at(lt, 0.1 + i * 0.2, 1.6 + i * 0.2, 'cubicInOut'), { width: 3 - i * 0.6, color: P.acc, glow: 12, glowColor: P.acc });
    const l17 = ctx.lineSpan('l17'), ka = at(t, l17.s - 0.2, l17.s + 0.6);
    ctx.text(X, AYAH[0], cx, cy - 40, { family: 'Amiri Quran', size: 84, color: P.ink, alpha: ka, shadow: { blur: 24, y: 0, color: 'rgba(0,0,0,0.7)' } });
    const kb = at(t, l17.s + 0.3, l17.s + 1.0);
    ctx.text(X, AYAH[1], cx, cy + 90, { family: 'Amiri Quran', size: 84, color: P.hi, alpha: kb, shadow: { blur: 30, y: 0, color: P.acc } });
    ctx.text(X, '[الأنبياء: 107]', cx, cy + 190, { family: 'body', weight: 400, size: 38, color: P.mut, alpha: kb });
    const l18 = ctx.lineSpan('l18'), ks = at(t, l18.s - 0.1, l18.s + 0.7, 'expoOut');
    ctx.text(X, 'صلى الله عليه وسلم', cx, 1330 + (1 - ks) * 40, { family: 'display', size: 110, color: P.hi, alpha: ks, shadow: { blur: 40, y: 0, color: P.acc } });
    X.restore();
  },
});
