/* s6 — الدعوة: نقطة نور تنبض خافتة (سرًّا) ثم موجات تغمر الشاشة (جهرًا)، ثم 13 عامًا من الصبر تمتلئ خانةً خانة */
import { bg, caption, chip } from './_common.js';
MOTION.scene({
  id: 's6',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx;
    const wj = ctx.wordTime('l9', 7), loud = at(t, wj.s - 0.1, wj.s + 0.6, 'expoOut');
    const l10 = ctx.lineSpan('l10'), part2 = at(t, l10.s - 0.3, l10.s + 0.3);
    bg(ctx, t, { seed: 19, glowAt: [540, 700], glowR: 300 + 700 * loud, glowColor: `rgba(31,138,102,${0.18 + 0.2 * loud})` });
    const cx = 540, cy = 700 - 120 * part2;
    // موجات
    X.save(); X.lineWidth = 3;
    for (let i = 0; i < 8; i++) {
      const ph = ctx.fract(lt * 0.55 + i / 8), maxR = 120 + 900 * loud;
      X.globalAlpha = (1 - ph) * (0.25 + 0.5 * loud) * (1 - 0.7 * part2);
      X.strokeStyle = i % 2 ? P.acc : P.clay;
      X.beginPath(); X.arc(cx, cy, 20 + ph * maxR, 0, 7); X.stroke();
    }
    X.restore();
    X.save(); X.fillStyle = P.hi; X.shadowColor = P.hi; X.shadowBlur = 30 + 50 * loud;
    X.beginPath(); X.arc(cx, cy, 16 + 14 * loud + 3 * Math.sin(lt * 6), 0, 7); X.fill(); X.restore();
    // «سرًّا · 3 سنوات»
    const ws = ctx.wordTime('l9', 3), k1 = at(t, ws.s - 0.1, ws.s + 0.4) * (1 - at(t, wj.s - 0.2, wj.s + 0.1));
    ctx.text(X, 'سرًّا', 540, 400, { family: 'display', size: 130, color: P.mut, alpha: k1 });
    chip(ctx, '3 سنوات', 540, 1010, k1, { size: 44 });
    // «جهرًا»
    const kj = loud * (1 - part2);
    X.save(); X.translate(540, 420); const sj = 0.7 + 0.3 * ctx.E.backOut(loud); X.scale(sj, sj);
    ctx.text(X, 'جهرًا', 0, 40, { family: 'display', size: 220, color: P.hi, alpha: kj, shadow: { blur: 40, y: 0, color: P.acc } });
    X.restore();
    // 13 عامًا — خانات
    if (part2 > 0) {
      const w13 = ctx.wordTime('l10', 5);
      ctx.MK.odometer(t, { s: w13.s - 0.7, dur: 0.9, val: 13, cx: 540, cy: 560, size: 220, color: P.hi });
      ctx.text(X, 'عامًا في مكة', 540, 670, { family: 'body', weight: 700, size: 54, color: P.ink, alpha: at(t, w13.s, w13.s + 0.4) });
      const wa = ctx.wordTime('l10', 2);
      ctx.text(X, 'صبرٌ على الأذى', 540, 330, { family: 'display', size: 96, color: P.ink, alpha: at(t, wa.s - 0.1, wa.s + 0.4) });
      const x0 = 150, gw = 780 / 13;
      for (let i = 0; i < 13; i++) {
        const ki = at(t, l10.s + 0.2 + i * 0.2, l10.s + 0.45 + i * 0.2, 'backOut');
        X.save(); X.globalAlpha = part2; X.strokeStyle = P.mut; X.lineWidth = 2;
        X.beginPath(); X.roundRect(x0 + i * gw + 5, 800, gw - 10, 90, 10); X.stroke();
        if (ki > 0) { X.fillStyle = i === 12 ? P.acc : P.clay; X.globalAlpha = part2 * Math.min(1, ki); X.beginPath(); X.roundRect(x0 + i * gw + 5, 800 + 90 * (1 - Math.min(1, ki)), gw - 10, 90 * Math.min(1, ki), 10); X.fill(); }
        X.restore();
      }
    }
    caption(ctx, t, 'l9'); caption(ctx, t, 'l10');
  },
});
