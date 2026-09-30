/* s4 — «الصادق الأمين»: ختم دائري يرتسم، والكلمتان تتمطّطان بالكشيدة داخله */
import { bg, caption, star8Path } from './_common.js';
MOTION.scene({
  id: 's4',
  draw(t, lt, ctx) {
    const { X, P, at } = ctx;
    bg(ctx, t, { seed: 13, glowAt: [540, 760], glowR: 650, glowColor: 'rgba(31,138,102,0.28)' });
    const cx = 540, cy = 760;
    // أشعة دوّارة خلف الختم
    X.save(); X.translate(cx, cy); X.rotate(lt * 0.15); X.globalAlpha = 0.12 * at(lt, 0, 0.8);
    X.fillStyle = P.acc;
    for (let i = 0; i < 24; i++) { X.rotate(Math.PI / 12); X.beginPath(); X.moveTo(0, 0); X.lineTo(-24, -620); X.lineTo(24, -620); X.closePath(); X.fill(); }
    X.restore();
    // حلقات الختم
    ctx.drawPath(X, star8Path(cx, cy, 390, lt * 0.1), at(lt, 0.05, 1.1, 'cubicInOut'), { width: 4, color: P.acc, glow: 14, glowColor: P.acc });
    X.save(); X.strokeStyle = P.acc; X.lineWidth = 6; X.globalAlpha = at(lt, 0.2, 0.9);
    X.beginPath(); X.arc(cx, cy, 300, -Math.PI / 2, -Math.PI / 2 + 6.2832 * at(lt, 0.2, 1.0, 'cubicOut')); X.stroke();
    X.lineWidth = 2; X.beginPath(); X.arc(cx, cy, 280, 0, 6.2832 * at(lt, 0.3, 1.1, 'cubicOut')); X.stroke();
    X.restore();
    // الكلمتان وقت نطقهما
    const w3 = ctx.wordTime('l6', 3), w4 = ctx.wordTime('l6', 4);
    const k3 = at(t, w3.s - 0.1, w3.s + 0.4, 'expoOut'), k4 = at(t, w4.s - 0.1, w4.s + 0.4, 'expoOut');
    X.save(); X.globalAlpha = k3; X.shadowColor = 'rgba(0,0,0,0.6)'; X.shadowBlur = 20;
    ctx.text.drawKashida(X, 'الصادق', cx, cy - 30 + (1 - k3) * 40, 420, { family: 'display', size: 150, color: P.ink }, at(t, w3.s, w3.e + 0.4, 'expoInOut'));
    X.restore();
    X.save(); X.globalAlpha = k4; X.shadowColor = P.acc; X.shadowBlur = 30 * k4;
    ctx.text.drawKashida(X, 'الأمين', cx, cy + 140 + (1 - k4) * 40, 400, { family: 'display', size: 150, color: P.hi }, at(t, w4.s, w4.e + 0.4, 'expoInOut'));
    X.restore();
    ctx.text(X, 'لقبه بين قومه', cx, 310, { family: 'body', weight: 700, size: 52, color: P.mut, alpha: at(lt, 0.3, 0.8) });
    caption(ctx, t, 'l6');
  },
});
