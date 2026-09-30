/* s8 — المسجد والمؤاخاة: قبة ومئذنة ترتسمان بالخط، ثم نقاط المهاجرين والأنصار تتقابل وتتصل أزواجًا */
import { bg, caption } from './_common.js';
const N = 6;
MOTION.scene({
  id: 's8',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx;
    bg(ctx, t, { seed: 29, glowAt: [540, 560], glowR: 600 });
    const k = at(lt, 0.05, 1.6, 'cubicInOut');
    const col = P.acc, o = { width: 5, color: col, cap: 'round', glow: 12, glowColor: col };
    // القبة
    const dome = []; for (let i = 0; i <= 24; i++) { const a = Math.PI + i / 24 * Math.PI; dome.push([540 + Math.cos(a) * 170, 600 + Math.sin(a) * 190]); }
    ctx.drawPath(X, [[330, 860], [330, 600], [750, 600], [750, 860]], k, o);
    ctx.drawPath(X, dome, at(lt, 0.4, 1.4, 'cubicOut'), o);
    ctx.drawPath(X, [[540, 410], [540, 350]], at(lt, 1.2, 1.5), o);
    X.save(); X.fillStyle = col; X.globalAlpha = at(lt, 1.3, 1.6); X.beginPath(); X.arc(540, 335, 12, 0, 7); X.fill(); X.restore();
    // المئذنة
    ctx.drawPath(X, [[800, 860], [800, 420], [850, 380], [900, 420], [900, 860]], at(lt, 0.3, 1.5, 'cubicInOut'), o);
    // أقواس الأبواب
    for (let i = 0; i < 3; i++) { const x = 400 + i * 140, arc = []; for (let j = 0; j <= 12; j++) { const a = Math.PI + j / 12 * Math.PI; arc.push([x + Math.cos(a) * 45, 780 + Math.sin(a) * 60]); } ctx.drawPath(X, [[x - 45, 860], ...arc, [x + 45, 860]], at(lt, 0.8 + i * 0.12, 1.5 + i * 0.12), { ...o, width: 3 }); }
    ctx.drawPath(X, [[200, 862], [940, 862]], at(lt, 0, 0.8), { width: 3, color: P.mut });
    const wm = ctx.wordTime('l13', 1);
    ctx.text(X, 'المسجد النبوي', 540, 290, { family: 'display', size: 84, color: P.ink, alpha: at(t, wm.s - 0.1, wm.s + 0.4) });
    // المؤاخاة
    const wa = ctx.wordTime('l13', 2), wm2 = ctx.wordTime('l13', 4), wn = ctx.wordTime('l13', 5);
    const kL = at(t, wm2.s - 0.2, wm2.s + 0.4, 'backOut'), kR = at(t, wn.s - 0.2, wn.s + 0.4, 'backOut');
    const join = at(t, wn.s + 0.2, wn.s + 0.9, 'cubicInOut');
    for (let i = 0; i < N; i++) {
      const y = 990 + i * 40, xl = 200 + 160 * join, xr = 880 - 160 * join;
      if (join > 0) ctx.drawPath(X, [[xl, y], [540, y - 14], [xr, y]], join, { width: 3, color: P.hi, smooth: true, glow: 10, glowColor: P.hi });
      X.save(); X.fillStyle = P.acc; X.globalAlpha = Math.min(1, kL); X.beginPath(); X.arc(xl, y, 14 * Math.min(1.2, kL), 0, 7); X.fill(); X.restore();
      X.save(); X.fillStyle = P.clay; X.globalAlpha = Math.min(1, kR); X.beginPath(); X.arc(xr, y, 14 * Math.min(1.2, kR), 0, 7); X.fill(); X.restore();
    }
    ctx.text(X, 'المهاجرون', 200, 960, { family: 'body', weight: 700, size: 42, color: P.acc, alpha: Math.min(1, kL) });
    ctx.text(X, 'الأنصار', 880, 960, { family: 'body', weight: 700, size: 42, color: '#3FC495', alpha: Math.min(1, kR) });
    ctx.text(X, 'المؤاخاة', 540, 1250, { family: 'display', size: 64, color: P.hi, alpha: join });
    caption(ctx, t, 'l13', { y: 1420 });
  },
});
