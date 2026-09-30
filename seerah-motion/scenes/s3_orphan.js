/* s3 — اليُتم والكفالة: شجرة عائلة تنرسم؛ الأب ثم الأم ينطفئان، والجد ثم العم يضيئان حوله */
import { bg, caption, chip } from './_common.js';
const C = [540, 860];
const NODES = [
  { key: 'father', label: 'أبوه', name: 'عبد الله', at: [285, 560], line: 'l3', word: 3, dim: ['l3', 6] },
  { key: 'mother', label: 'أمه', name: 'آمنة', at: [795, 560], line: 'l4', word: 1, dim: ['l4', 5] },
  { key: 'grand', label: 'جده', name: 'عبد المطلب', at: [285, 1140], line: 'l5', word: 1 },
  { key: 'uncle', label: 'عمه', name: 'أبو طالب', at: [795, 1140], line: 'l5', word: 3 },
];
MOTION.scene({
  id: 's3',
  draw(t, lt, ctx) {
    const { X, P, at, E } = ctx;
    bg(ctx, t, { seed: 11, glowAt: C, glowR: 600, starAlpha: 0.5 });
    // «يتيمًا»
    const wy = ctx.wordTime('l3', 1), ky = at(t, wy.s - 0.1, wy.s + 0.5, 'expoOut');
    const fadeY = 1 - at(t, ctx.wordTime('l4', 0).s, ctx.wordTime('l4', 0).s + 0.5);
    ctx.text(X, 'يتيمًا', 540, 330 + (1 - ky) * 50, { family: 'display', size: 170, color: P.ink, alpha: ky * (0.25 + 0.75 * fadeY) });
    // العقد
    for (const n of NODES) {
      const w = ctx.wordTime(n.line, n.word); const k = at(t, w.s - 0.15, w.s + 0.45, 'expoOut');
      if (k <= 0) continue;
      let dim = 0;
      if (n.dim) { const wd = ctx.wordTime(n.dim[0], n.dim[1]); dim = at(t, wd.s, wd.e + 0.3, 'cubicInOut'); }
      const lit = !n.dim;
      // خط الوصل
      ctx.drawPath(X, [n.at, C], at(t, w.s, w.s + 0.5, 'cubicOut'), { width: lit ? 6 : 4, color: lit ? P.acc : P.mut, cap: 'round', glow: lit ? 18 : 0, glowColor: P.acc });
      X.save(); X.globalAlpha = k * (1 - 0.6 * dim);
      const s = 0.6 + 0.4 * E.backOut(k); X.translate(n.at[0], n.at[1]); X.scale(s, s);
      X.fillStyle = lit ? 'rgba(224,176,79,0.16)' : 'rgba(127,140,163,0.14)'; X.strokeStyle = lit ? P.acc : (dim > 0.5 ? P.mut : P.ink); X.lineWidth = 4;
      X.beginPath(); X.roundRect(-165, -85, 330, 170, 28); X.fill(); X.stroke();
      ctx.text(X, n.label, 0, -18, { family: 'body', weight: 400, size: 40, color: P.mut });
      ctx.text(X, n.name, 0, 50, { family: 'body', weight: 700, size: 56, color: lit ? P.hi : P.ink });
      X.restore();
    }
    // الأم: «ست سنين»
    const w6 = ctx.wordTime('l4', 4);
    ctx.MK.odometer(t, { s: w6.s - 0.5, dur: 0.6, val: 6, cx: 795, cy: 780, size: 90, color: P.hi, suffix: '', e: ctx.wordTime('l5', 0).s, burst: false });
    chip(ctx, 'سنوات', 795, 830, at(t, w6.s, w6.s + 0.4) * (1 - at(t, ctx.wordTime('l5', 0).s - 0.2, ctx.wordTime('l5', 0).s)), { size: 32 });
    chip(ctx, 'قبل ولادته', 285, 780, at(t, ctx.wordTime('l3', 4).s, ctx.wordTime('l3', 4).s + 0.4) * (1 - at(t, ctx.wordTime('l4', 0).s, ctx.wordTime('l4', 0).s + 0.3)), { size: 32 });
    // المركز
    const kc = at(lt, 0.2, 0.9, 'backOut'), glow = at(t, ctx.wordTime('l5', 1).s, ctx.wordTime('l5', 1).s + 0.6);
    X.save(); X.translate(C[0], C[1]); X.scale(kc, kc);
    X.shadowColor = P.acc; X.shadowBlur = 20 + 40 * glow;
    X.fillStyle = '#0E1C2E'; X.strokeStyle = P.acc; X.lineWidth = 6;
    X.beginPath(); X.arc(0, 0, 120, 0, 7); X.fill(); X.stroke(); X.shadowBlur = 0;
    ctx.text(X, 'محمد', 0, 22, { family: 'display', size: 88, color: P.hi });
    ctx.text(X, 'ﷺ', 0, 82, { family: 'Amiri Quran', size: 46, color: P.acc });
    X.restore();
    for (const id of ['l3', 'l4', 'l5']) caption(ctx, t, id);
  },
});
