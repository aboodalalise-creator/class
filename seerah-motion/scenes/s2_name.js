/* s2 — «وُلد محمد ﷺ»: الاسم مجسّم ذهبي يتوهج وسط حلقة نور — بلا أي تصوير لشخص */
import { bg, caption } from './_common.js';
MOTION.scene({
  id: 's2',
  setup(ctx) {
    const { THREE } = ctx;
    const st = this.st = ctx.stage3D({ fov: 30, camera: [0, 0, 14], env: 'room', bloom: { strength: 0.9, radius: 0.55, threshold: 1.3 }, tone: 'neutral', exposure: 1.0 });
    const key = new THREE.DirectionalLight(0xffffff, 1.2); key.position.set(3, 5, 9); st.scene.add(key);
    this.title = ctx.extrudedText('مُحَمَّد', { family: 'display', weight: 700, size: 300, height: 2.6, depth: 0.45, layers: 30, color: '#F6D98E', sideColor: '#9A6B1C', sideColor2: '#2A1A05' });
    st.add(this.title);
    const cols = [ctx.P.acc, ctx.P.hi, '#FFFFFF'];
    this.sparks = ctx.particles3D({ count: 220, seed: 21, geometry: 'octa', glow: 2.2,
      spawn: (i, r) => { const a = r() * Math.PI * 2, d = r.range(2.8, 3.8); return { p: [Math.cos(a) * d, r.gauss() * 0.2, Math.sin(a) * d * 0.6], s: r.range(0.025, 0.07), delay: r.range(0, 0.6), color: r.pick(cols) }; } });
    this.ring = new THREE.Group(); this.ring.add(this.sparks.mesh); this.ring.rotation.x = 0.35; st.add(this.ring);
  },
  draw(t, lt, ctx) {
    const { X, P, at, E } = ctx, st = this.st;
    bg(ctx, t, { glowAt: [540, 800], glowR: 700, glowColor: 'rgba(246,217,142,0.28)', seed: 5 });
    const w1 = ctx.wordTime('l2', 1), k = ctx.prog(t, w1.s - 0.35, w1.s + 0.6);
    this.title.visible = k > 0;
    this.title.scale.setScalar(0.35 + 0.65 * E.springK(k));
    this.title.rotation.y = (1 - at(t, w1.s - 0.35, w1.s + 0.8, 'expoOut')) * -1.2 + Math.sin(lt * 1.3) * 0.12;
    this.title.position.y = 0.6;
    this.ring.rotation.y = lt * 0.6; this.ring.position.y = 0.4; this.sparks.update(lt);
    st.orbit(Math.sin(lt * 0.5) * 0.12, 0.05, 14 - 1.5 * at(lt, 0, 2.5, 'sineInOut'));
    st.draw(X);
    // «صلى الله عليه وسلم»
    const w2 = ctx.wordTime('l2', 2), ks = at(t, w2.s - 0.05, w2.s + 0.5, 'expoOut');
    ctx.text(X, 'صلى الله عليه وسلم', 540, 1130 + (1 - ks) * 40, { family: 'display', size: 96, color: P.hi, alpha: ks, shadow: { blur: 30, y: 0, color: 'rgba(224,176,79,0.6)' } });
    caption(ctx, t, 'l2');
  },
});
