/* s7 — الهجرة: مسار منقّط يرتسم من مكة شمالاً إلى المدينة ونقطة نور تسافر عليه، ثم بطاقة التقويم تنقلب من 622م إلى 1هـ */
import { bg, caption, chip, kaabaLines } from './_common.js';
const PATH = [[600, 1160], [650, 1040], [560, 920], [620, 800], [520, 680], [560, 560], [480, 450]];
MOTION.scene({
  id: 's7',
  draw(t, lt, ctx) {
    const { X, P, at, E } = ctx;
    bg(ctx, t, { seed: 23, glowAt: [540, 800], starAlpha: 0.6 });
    const l12 = ctx.lineSpan('l12'), flip = at(t, l12.s - 0.2, l12.s + 0.2);
    const mapA = 1 - flip;
    X.save(); X.globalAlpha = mapA;
    // الأرض
    X.strokeStyle = 'rgba(127,140,163,0.25)'; X.lineWidth = 1;
    for (let y = 300; y < 1300; y += 60) { X.beginPath(); X.moveTo(120, y); X.lineTo(960, y); X.stroke(); }
    // المسار
    const wm = ctx.wordTime('l11', 1), kp = at(t, wm.s - 0.3, ctx.lineSpan('l11').e + 0.3, 'sineInOut');
    X.setLineDash([2, 22]); ctx.drawPath(X, PATH, 1, { width: 8, color: 'rgba(127,140,163,0.5)', cap: 'round', smooth: true }); X.setLineDash([]);
    const tip = ctx.drawPath(X, PATH, kp, { width: 7, color: P.acc, cap: 'round', smooth: true, glow: 20, glowColor: P.acc, tip: { r: 14, color: '#FFF6DA', glow: 30 } });
    // مكة
    kaabaLines(ctx, 600, 1215, 70, 1, { color: P.acc, width: 3 });
    ctx.text(X, 'مكة', 760, 1200, { family: 'display', size: 72, color: P.ink });
    // المدينة
    const km = at(t, ctx.wordTime('l11', 3).s - 0.1, ctx.wordTime('l11', 3).s + 0.4, 'backOut');
    X.save(); X.translate(480, 450); X.scale(km, km); X.fillStyle = P.clay; X.shadowColor = P.clay; X.shadowBlur = 30;
    X.beginPath(); X.arc(0, 0, 22, 0, 7); X.fill(); X.restore();
    ctx.text(X, 'المدينة', 300, 470, { family: 'display', size: 72, color: P.hi, alpha: km });
    chip(ctx, 'الهجرة', 540, 300, at(lt, 0.1, 0.6));
    X.restore();
    // بطاقة التقويم
    if (flip > 0) {
      const f = at(t, ctx.wordTime('l12', 1).s, ctx.wordTime('l12', 1).s + 0.5, 'cubicInOut');
      const sy = Math.abs(Math.cos(f * Math.PI)), front = f < 0.5;
      X.save(); X.globalAlpha = flip; X.translate(540, 800); X.scale(0.8 + 0.2 * E.backOut(flip), sy * (0.8 + 0.2 * E.backOut(flip)));
      X.fillStyle = '#0E1C2E'; X.strokeStyle = front ? P.mut : P.acc; X.lineWidth = 6; X.shadowColor = front ? 'transparent' : P.acc; X.shadowBlur = 40;
      X.beginPath(); X.roundRect(-300, -220, 600, 440, 36); X.fill(); X.stroke(); X.shadowBlur = 0;
      X.fillStyle = front ? P.mut : P.acc; X.beginPath(); X.roundRect(-300, -220, 600, 80, [36, 36, 0, 0]); X.fill();
      ctx.text(X, front ? '622' : '1', 0, 110, { family: 'num', weight: 900, size: 200, color: front ? P.ink : P.hi, dir: 'ltr' });
      ctx.text(X, front ? 'ميلادية' : 'هجرية', 0, -165, { family: 'body', weight: 700, size: 46, color: '#0B1626' });
      X.restore();
      const kt = at(t, ctx.wordTime('l12', 3).s, ctx.wordTime('l12', 3).s + 0.4);
      ctx.text(X, 'بداية التقويم الهجري', 540, 1150, { family: 'display', size: 84, color: P.hi, alpha: kt });
    }
    caption(ctx, t, 'l11'); caption(ctx, t, 'l12');
  },
});
