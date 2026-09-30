/* s9 — فتح مكة: ختم «8 هـ» يخبط، الكعبة تسطع، ثم كلمة «العفو» تتوهج ونور يصعد هادئًا */
import { bg, caption, kaabaLines } from './_common.js';
MOTION.scene({
  id: 's9',
  setup(ctx) {
    this.rise = ctx.particles2D({ count: 60, seed: 12, spawn: (i, r) => ({ x: r.range(160, 920), y: r.range(1050, 1250), vx: r.gauss() * 20, vy: -r.range(80, 200), r: r.range(2, 5), color: r.pick([ctx.P.hi, '#FFFFFF']), delay: r.range(0, 1.2), life: 2.4 }) });
  },
  draw(t, lt, ctx) {
    const { X, P, at } = ctx;
    const wf = ctx.wordTime('l14', 3), kf = at(t, wf.s - 0.1, wf.s + 0.5, 'expoOut');
    const wa = ctx.wordTime('l14', 5), ka = at(t, wa.s - 0.1, wa.s + 0.6);
    bg(ctx, t, { seed: 31, glowAt: [540, 900], glowR: 400 + 500 * kf, glowColor: `rgba(246,217,142,${0.15 + 0.25 * kf})` });
    // الكعبة
    X.save(); const s = 1 + 0.05 * kf; X.translate(540, 900); X.scale(s, s); X.translate(-540, -900);
    kaabaLines(ctx, 520, 1000, 260, at(lt, 0, 1.2, 'cubicInOut'), { color: P.acc, width: 5 });
    X.restore();
    // ختم السنة
    const w8 = ctx.wordTime('l14', 2);
    ctx.MK.stamp(t, { s: w8.s - 0.1, cx: 540, cy: 400, text: 'السنة 8 هـ', size: 64, color: P.acc, rot: -6 });
    ctx.text(X, 'فتح مكة', 540, 620 + (1 - kf) * 40, { family: 'display', size: 150, color: P.ink, alpha: kf * (1 - ka), shadow: { blur: 30, y: 0, color: 'rgba(0,0,0,0.6)' } });
    // العفو
    if (ka > 0) {
      this.rise.draw(X, t - wa.s, ka);
      ctx.text(X, 'العفو', 540, 640, { family: 'display', size: 200, color: P.hi, alpha: ka, shadow: { blur: 50, y: 0, color: P.acc } });
      ctx.text(X, 'عفا عن أهلها', 540, 1150, { family: 'body', weight: 700, size: 54, color: P.ink, alpha: at(t, wa.s + 0.3, wa.s + 0.8) });
    }
    caption(ctx, t, 'l14');
  },
});
