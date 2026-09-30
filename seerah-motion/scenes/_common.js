/* أدوات مشتركة لكل مشاهد «السيرة النبوية» — خلفية ليلية، كابشن متزامن، زخارف */

// نص الكابشن المعروض (بلا تشكيل) — نفس عدد كلمات السطر المنطوق تماماً
export const CAP = {
  l1: 'في مكة، في عام الفيل،',
  l2: 'وُلد محمد صلى الله عليه وسلم.',
  l3: 'وُلد يتيمًا؛ تُوفي أبوه قبل أن يولد،',
  l4: 'وتُوفيت أمه وهو ابن ست سنين.',
  l5: 'فكفله جده، ثم عمه أبو طالب.',
  l6: 'وعُرف بين قومه بالصادق الأمين.',
  l7: 'وفي الأربعين، في غار حراء،',
  l8: 'نزل الوحي بأول كلمة: اقرأ.',
  l9: 'دعا إلى الله سرًّا ثلاث سنوات، ثم جهرًا،',
  l10: 'وصبر على الأذى في مكة ثلاثة عشر عامًا.',
  l11: 'ثم هاجر إلى المدينة،',
  l12: 'فصارت الهجرة بداية التقويم الهجري.',
  l13: 'بنى المسجد، وآخى بين المهاجرين والأنصار.',
  l14: 'وفي السنة الثامنة فتح مكة، وعفا عن أهلها.',
  l15: 'وفي العاشرة حج حجة الوداع.',
  l16: 'وتُوفي في المدينة، وعمره ثلاث وستون سنة.',
  l17: 'أرسله الله رحمة للعالمين.',
  l18: 'فصلى الله عليه وسلم.',
};

const STAR_CACHE = {};
function stars(ctx, seed) {
  if (STAR_CACHE[seed]) return STAR_CACHE[seed];
  const r = ctx.seeded(seed), a = [];
  for (let i = 0; i < 140; i++) a.push({ x: r() * 1080, y: r() * 1500, s: 0.6 + r() * 2.2, ph: r() * 6.28, sp: 0.6 + r() * 2 });
  return (STAR_CACHE[seed] = a);
}

// خلفية: تدرّج ليلي + نجوم تتلألأ + نقشة نجمة ثمانية خافتة تنزلق ببطء
export function bg(ctx, t, o = {}) {
  const { X, W, H, P } = ctx;
  const g = X.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, o.top || '#07101D'); g.addColorStop(0.55, o.mid || P.bg); g.addColorStop(1, o.bot || '#122338');
  X.fillStyle = g; X.fillRect(0, 0, W, H);
  if (o.glow !== false) {
    const [gx, gy] = o.glowAt || [540, 820];
    const rg = X.createRadialGradient(gx, gy, 40, gx, gy, o.glowR || 820);
    rg.addColorStop(0, o.glowColor || 'rgba(224,176,79,0.20)'); rg.addColorStop(1, 'rgba(224,176,79,0)');
    X.fillStyle = rg; X.fillRect(0, 0, W, H);
  }
  if (o.stars !== false) {
    X.fillStyle = '#FFF4DA';
    for (const s of stars(ctx, o.seed || 7)) {
      X.globalAlpha = (o.starAlpha ?? 0.8) * (0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * s.sp + s.ph)));
      X.fillRect(s.x, s.y, s.s, s.s);
    }
    X.globalAlpha = 1;
  }
  if (o.pattern !== false) pattern(ctx, t, o.patternAlpha ?? 0.05);
}

// شبكة نجوم ثمانية (زخرفة إسلامية) — خطوط رفيعة جداً
export function pattern(ctx, t, alpha) {
  const { X } = ctx, step = 180, off = (t * 6) % step;
  X.save(); X.globalAlpha = alpha; X.strokeStyle = ctx.P.acc; X.lineWidth = 1.5;
  for (let y = -step; y < 1920 + step; y += step)
    for (let x = -step; x < 1080 + step; x += step) star8(X, x + off, y + ((x / step) % 2 ? step / 2 : 0), 52, false);
  X.restore();
}

// نجمة ثمانية (مربعان متداخلان) — stroke أو fill
export function star8(X, cx, cy, r, fill, rot = 0) {
  X.beginPath();
  for (let q = 0; q < 2; q++) {
    for (let i = 0; i < 4; i++) {
      const a = rot + q * Math.PI / 4 + i * Math.PI / 2 + Math.PI / 4;
      const px = cx + Math.cos(a) * r, py = cy + Math.sin(a) * r;
      i ? X.lineTo(px, py) : X.moveTo(px, py);
    }
    X.closePath();
  }
  fill ? X.fill() : X.stroke();
}

// نقاط نجمة ثمانية كمسار (لـ drawPath)
export function star8Path(cx, cy, r, rot = 0) {
  const pts = [];
  for (let i = 0; i <= 16; i++) {
    const a = rot + i * Math.PI / 8 - Math.PI / 2, rr = i % 2 ? r * 0.72 : r;
    pts.push([cx + Math.cos(a) * rr, cy + Math.sin(a) * rr]);
  }
  return pts;
}

// كابشن متزامن: كل كلمة تطلع وقت نطقها، والكلمة المنطوقة بلون التمييز
const LAY = {};
export function caption(ctx, t, id, o = {}) {
  const { X, P } = ctx, sp = ctx.lineSpan(id);
  if (!sp) return;
  const fadeIn = ctx.at(t, sp.s - 0.15, sp.s + 0.1), fadeOut = 1 - ctx.at(t, sp.e + (o.hold ?? 0.35), sp.e + (o.hold ?? 0.35) + 0.25);
  const a = Math.min(fadeIn, fadeOut);
  if (a <= 0) return;
  const key = id + (o.size || 58);
  const L = LAY[key] || (LAY[key] = ctx.text.layout(X, CAP[id], { family: 'body', weight: 700, size: o.size || 58, maxWidth: o.maxWidth || 820, lineHeight: 1.45 }));
  const y = o.y || 1390;
  X.save(); X.globalAlpha = a;
  ctx.text.drawLayout(X, L, 540, y - (L.lines.length - 1) * (o.size || 58) * 0.72, {
    align: 'center', color: P.ink,
    perWord: (i) => {
      const w = ctx.wordTime(id, i); if (!w) return {};
      const k = ctx.at(t, w.s - 0.08, w.s + 0.22, 'expoOut');
      const on = t >= w.s - 0.05 && t <= w.e + 0.05;
      return { clipUp: 1, dy: (1 - k) * 40, alpha: k > 0 ? 1 : 0, color: on ? P.acc : P.ink, shadow: { blur: 14, y: 3, color: 'rgba(0,0,0,0.65)' } };
    },
  });
  X.restore();
}

// شريحة صغيرة (تاريخ/وسم)
export function chip(ctx, str, x, y, k, o = {}) {
  if (k <= 0) return;
  const { X, P } = ctx, size = o.size || 46;
  X.save(); X.globalAlpha *= Math.min(1, k * 1.4);
  X.font = ctx.font(o.family || 'body', 700, size);
  const w = X.measureText(str).width + size * 1.3, h = size * 1.7, s = 0.7 + 0.3 * ctx.E.backOut(Math.min(1, k));
  X.translate(x, y); X.scale(s, s);
  X.fillStyle = o.fill || 'rgba(224,176,79,0.14)'; X.strokeStyle = o.stroke || P.acc; X.lineWidth = 3;
  X.beginPath(); X.roundRect(-w / 2, -h / 2, w, h, h / 2); X.fill(); X.stroke();
  X.restore();
  X.save(); X.globalAlpha *= Math.min(1, k * 1.4);
  const s2 = 0.7 + 0.3 * ctx.E.backOut(Math.min(1, k));
  X.translate(x, y); X.scale(s2, s2);
  ctx.text(X, str, 0, size * 0.36, { family: o.family || 'body', weight: 700, size, color: o.color || P.hi });
  X.restore();
}

// كعبة مرسومة بالخط (منظور متساوي القياس) — k: تقدّم الرسم 0..1
export function kaabaLines(ctx, cx, cy, s, k, o = {}) {
  const { P } = ctx, w = 1.0 * s, d = 0.55 * s, h = 1.05 * s;
  const A = [cx - w / 2, cy], B = [cx + w / 2 - d * 0.1, cy + d * 0.28], C = [cx + w / 2 + d * 0.6, cy - d * 0.12];
  const top = p => [p[0], p[1] - h];
  const col = o.color || P.ink, lw = o.width || 6;
  const seg = (pts, a, b) => ctx.drawPath(ctx.X, pts, ctx.clamp((k - a) / (b - a), 0, 1), { width: lw, color: col, cap: 'round' });
  // جسم مصمت خفيف
  if (o.fill !== false && k > 0.55) {
    const X = ctx.X; X.save(); X.globalAlpha *= ctx.clamp((k - 0.55) / 0.3, 0, 1) * (o.fillAlpha ?? 0.9);
    X.fillStyle = '#05080D';
    X.beginPath(); X.moveTo(...A); X.lineTo(...B); X.lineTo(...C); X.lineTo(...top(C)); X.lineTo(...top(B)); X.lineTo(...top(A)); X.closePath(); X.fill();
    // حزام ذهبي
    const bh = h * 0.72, bw = h * 0.07;
    X.fillStyle = P.acc;
    X.beginPath(); X.moveTo(A[0], A[1] - bh); X.lineTo(B[0], B[1] - bh); X.lineTo(B[0], B[1] - bh - bw); X.lineTo(A[0], A[1] - bh - bw); X.closePath(); X.fill();
    X.beginPath(); X.moveTo(B[0], B[1] - bh); X.lineTo(C[0], C[1] - bh); X.lineTo(C[0], C[1] - bh - bw); X.lineTo(B[0], B[1] - bh - bw); X.closePath(); X.fill();
    X.restore();
  }
  seg([A, B, C], 0, 0.3);
  seg([A, top(A)], 0.2, 0.4); seg([B, top(B)], 0.25, 0.45); seg([C, top(C)], 0.3, 0.5);
  seg([top(A), top(B), top(C)], 0.4, 0.6);
  seg([top(A), [top(A)[0] + d * 0.7, top(A)[1] - d * 0.4], top(C)], 0.5, 0.7);
}

// خط جبال (ظل) على الأفق
export function mountains(ctx, y, amp, seed, color, alpha = 1) {
  const { X } = ctx; X.save(); X.globalAlpha = alpha; X.fillStyle = color;
  X.beginPath(); X.moveTo(0, 1920); X.lineTo(0, y);
  for (let x = 0; x <= 1080; x += 20) X.lineTo(x, y - amp * (0.5 + 0.5 * ctx.fbm(x * 0.004, seed, 3, seed)));
  X.lineTo(1080, 1920); X.closePath(); X.fill(); X.restore();
}
