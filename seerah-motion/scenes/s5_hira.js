/* s5 — «في الأربعين، في غار حراء — اقرأ»: جبل النور يرتسم، الغار يتوهج، ثم نور ينفجر بكلمة «اقرأ» والآية */
import { bg, caption, chip } from './_common.js';
const AYAH = 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ';   // api.quran.com text_imlaei 96:1 — مطابق لحروف api.alquran.cloud
MOTION.scene({
  id: 's5',
  setup(ctx) {
    this.motes = ctx.particles2D({ count: 70, seed: 8, spawn: (i, r) => ({ x: 540 + r.gauss() * 60, y: 1000 + r.gauss() * 20, vx: r.gauss() * 220, vy: -r.range(120, 420), r: r.range(2, 6), color: r.pick([ctx.P.hi, '#FFFFFF', ctx.P.acc]), delay: 0, life: 2.2 }) });
    const r = ctx.seeded(4); this.ridge = [];
    for (let x = -40; x <= 1120; x += 40) { const d = Math.abs(x - 540) / 540; this.ridge.push([x, 1000 - 380 * Math.pow(1 - Math.min(1, d), 1.6) + r() * 30 - 15]); }
  },
  draw(t, lt, ctx) {
    const { X, P, at, E } = ctx;
    const wq = ctx.wordTime('l8', 4), burst = at(t, wq.s - 0.1, wq.s + 0.5, 'expoOut');
    bg(ctx, t, { seed: 17, glowAt: [540, 1000], glowR: 500 + 900 * burst, glowColor: `rgba(246,217,142,${0.15 + 0.35 * burst})`, starAlpha: 0.7 * (1 - burst) });
    // الجبل
    const dk = at(lt, 0, 1.4, 'cubicInOut');
    X.save(); X.globalAlpha = 0.9; X.fillStyle = '#060D18';
    X.beginPath(); X.moveTo(-40, 1920); this.ridge.forEach(p => X.lineTo(p[0], p[1] + (1 - dk) * 300)); X.lineTo(1120, 1920); X.closePath(); X.fill(); X.restore();
    ctx.drawPath(X, this.ridge.map(p => [p[0], p[1] + (1 - dk) * 300]), dk, { width: 4, color: P.acc, glow: 10, glowColor: P.acc });
    // فتحة الغار
    const wh = ctx.wordTime('l7', 3), kh = at(t, wh.s - 0.2, wh.s + 0.6);
    const pulse = 0.5 + 0.5 * Math.sin(lt * 5);
    X.save(); X.globalAlpha = kh; X.shadowColor = P.hi; X.shadowBlur = 40 + 30 * pulse + 200 * burst;
    X.fillStyle = burst > 0 ? '#FFF6DA' : P.hi; X.beginPath(); X.ellipse(540, 1000 - 20, 46 + 20 * burst, 30 + 12 * burst, 0, 0, 7); X.fill(); X.restore();
    chip(ctx, 'غار حراء', 540, 1110, kh * (1 - burst));
    // «40»
    const w1 = ctx.wordTime('l7', 1);
    ctx.MK.odometer(t, { s: w1.s - 0.6, dur: 0.8, val: 40, cx: 540, cy: 470, size: 230, color: P.hi, e: ctx.wordTime('l8', 0).s + 0.2 });
    chip(ctx, 'سنة', 540, 560, at(t, w1.s, w1.s + 0.4) * (1 - at(t, ctx.wordTime('l8', 0).s, ctx.wordTime('l8', 0).s + 0.3)), { size: 38 });
    // «نزل الوحي» — أشعة
    const wv = ctx.wordTime('l8', 1), kv = at(t, wv.s - 0.2, wv.s + 0.8);
    if (kv > 0) {
      X.save(); X.translate(540, 980); X.globalAlpha = 0.18 * kv + 0.12 * burst; X.fillStyle = P.hi;
      for (let i = 0; i < 16; i++) { const a = -Math.PI / 2 + (i - 7.5) * 0.14 + Math.sin(lt + i) * 0.02; X.save(); X.rotate(a + Math.PI / 2); X.beginPath(); X.moveTo(-6, 0); X.lineTo(-40, -1100 * kv); X.lineTo(40, -1100 * kv); X.lineTo(6, 0); X.closePath(); X.fill(); X.restore(); }
      X.restore();
    }
    // «اقرأ»
    if (burst > 0) {
      this.motes.draw(X, t - wq.s + 0.1, 1);
      const s = 0.6 + 0.4 * E.backOut(burst);
      X.save(); X.translate(540, 400); X.scale(s, s);
      ctx.text(X, 'اقرأ', 0, 60, { family: 'display', size: 300, color: '#FFFFFF', alpha: burst, shadow: { blur: 60, y: 0, color: P.acc } });
      X.restore();
      const ka = at(t, wq.s + 0.4, wq.s + 1.0);
      X.save(); X.globalAlpha = at(t, wq.s + 0.4, wq.s + 1.0) * 0.82; X.fillStyle = '#07101D'; X.beginPath(); X.roundRect(110, 560, 860, 190, 30); X.fill(); X.restore();
      ctx.text(X, AYAH, 540, 650, { family: 'Amiri Quran', size: 62, color: P.hi, alpha: ka, maxWidth: 860, shadow: { blur: 20, y: 0, color: 'rgba(0,0,0,0.6)' } });
      ctx.text(X, '[العلق: 1]', 540, 720, { family: 'body', weight: 400, size: 36, color: P.mut, alpha: ka });
    }
    caption(ctx, t, 'l7'); caption(ctx, t, 'l8');
  },
});
