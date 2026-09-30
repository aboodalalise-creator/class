/* s1 — «في مكة، في عام الفيل»: ليل مكة، هلال يرتسم، الكعبة تنرسم بالخط، واسم مكة بخط الرقعة */
import { bg, caption, kaabaLines, mountains, chip } from './_common.js';
MOTION.scene({
  id: 's1',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx;
    bg(ctx, t, { glowAt: [540, 1000], seed: 3 });
    // هلال
    const mk = at(lt, 0.0, 1.2, 'cubicOut');
    X.save(); X.globalAlpha = mk; X.fillStyle = P.hi; X.shadowColor = P.hi; X.shadowBlur = 40;
    X.beginPath(); X.arc(800, 330, 70, 0, 7); X.fill(); X.globalCompositeOperation = 'destination-out'; X.shadowBlur = 0;
    X.beginPath(); X.arc(830 - 12 * mk, 305, 62, 0, 7); X.fill(); X.restore();
    // جبال مكة
    const rise = at(lt, 0, 1.0, 'expoOut');
    mountains(ctx, 1200 + (1 - rise) * 200, 190, 4, '#0E1C2E', 1);
    mountains(ctx, 1260 + (1 - rise) * 260, 120, 9, '#081320', 1);
    // الكعبة
    const zoom = 1 + 0.04 * lt;
    X.save(); X.translate(540, 1150); X.scale(zoom, zoom); X.translate(-540, -1150);
    kaabaLines(ctx, 520, 1180, 300, at(lt, 0.15, 1.7, 'cubicInOut'), { color: P.acc, width: 5 });
    X.restore();
    // «مكة» — تطلع وقت نطقها
    const w1 = ctx.wordTime('l1', 1), km = at(t, w1.s - 0.1, w1.s + 0.5, 'expoOut');
    ctx.text(X, 'مكة', 540, 560 + (1 - km) * 60, { family: 'display', size: 230, color: P.ink, alpha: km, shadow: { blur: 40, y: 0, color: 'rgba(224,176,79,0.55)' } });
    const w3 = ctx.wordTime('l1', 3);
    chip(ctx, 'عام الفيل', 540, 700, at(t, w3.s - 0.05, w3.s + 0.45));
    caption(ctx, t, 'l1');
  },
});
