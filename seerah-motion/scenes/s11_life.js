/* s11 — «وعمره ثلاث وستون سنة»: خط زمني للعمر يمتلئ من عام الفيل إلى الوفاة، والعدّاد يخبط على 63 */
import { bg, caption } from './_common.js';
const MS = [
  { f: 0, top: 'عام الفيل', bot: 'المولد' },
  { f: 40 / 63, top: '610م', bot: 'البعثة' },
  { f: 53 / 63, top: '622م', bot: 'الهجرة' },
  { f: 1, top: '632م', bot: 'الوفاة' },
];
MOTION.scene({
  id: 's11',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx;
    bg(ctx, t, { seed: 41, glowAt: [540, 560], glowR: 600 });
    const x0 = 900, x1 = 180, y = 920;   // من اليمين لليسار
    const l16 = ctx.lineSpan('l16'), kb = at(t, l16.s + 0.2, l16.e - 0.2, 'cubicInOut');
    X.save(); X.strokeStyle = 'rgba(127,140,163,0.35)'; X.lineWidth = 10; X.lineCap = 'round';
    X.beginPath(); X.moveTo(x0, y); X.lineTo(x1, y); X.stroke(); X.restore();
    ctx.drawPath(X, [[x0, y], [x1, y]], kb, { width: 10, color: P.acc, cap: 'round', glow: 18, glowColor: P.acc, tip: { r: 14, color: '#FFF6DA', glow: 24 } });
    MS.forEach((m, i) => {
      const x = x0 + (x1 - x0) * m.f, k = at(kb, m.f - 0.02, m.f + 0.12);
      X.save(); X.fillStyle = k > 0.5 ? P.hi : '#1B2A40'; X.strokeStyle = P.acc; X.lineWidth = 4;
      X.beginPath(); X.arc(x, y, 18, 0, 7); X.fill(); X.stroke(); X.restore();
      const up = i % 2 === 0;
      ctx.text(X, m.top, x, up ? y - 55 : y - 115, { family: m.top.match(/\d/) ? 'num' : 'body', weight: 700, size: 40, color: P.ink, alpha: Math.max(0.35, k) });
      ctx.text(X, m.bot, x, up ? y + 80 : y + 140, { family: 'body', weight: 700, size: 42, color: k > 0.5 ? P.hi : P.mut, alpha: Math.max(0.35, k) });
    });
    const w = ctx.wordTime('l16', 4);
    ctx.MK.odometer(t, { s: w.s - 1.0, dur: 1.2, val: 63, cx: 540, cy: 580, size: 260, color: P.hi });
    ctx.text(X, 'سنة', 540, 690, { family: 'display', size: 90, color: P.ink, alpha: at(t, w.s + 0.2, w.s + 0.6) });
    const wm = ctx.wordTime('l16', 2);
    ctx.text(X, 'في المدينة المنورة', 540, 1160, { family: 'body', weight: 700, size: 50, color: P.mut, alpha: at(t, wm.s - 0.1, wm.s + 0.4) });
    caption(ctx, t, 'l16');
  },
});
