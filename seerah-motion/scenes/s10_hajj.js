/* s10 — حجة الوداع: كعبة مجسّمة وحولها حلقات نور تطوف عكس عقارب الساعة */
import { bg, caption, chip } from './_common.js';
MOTION.scene({
  id: 's10',
  setup(ctx) {
    const { THREE } = ctx;
    const st = this.st = ctx.stage3D({ fov: 34, camera: [0, 6, 12], lookAt: [0, 0.6, 0], env: 'room', bloom: { strength: 0.8, radius: 0.5, threshold: 1.25 }, tone: 'neutral', exposure: 1.0 });
    const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(4, 8, 6); st.scene.add(key);
    const g = new THREE.Group();
    const body = new THREE.Mesh(new ctx.RoundedBoxGeometry(2.2, 2.4, 2.0, 3, 0.04), new THREE.MeshStandardMaterial({ color: 0x0a0a0c, roughness: 0.55, metalness: 0.1, envMapIntensity: 0.4 }));
    body.position.y = 1.2; g.add(body);
    const band = new THREE.Mesh(new THREE.BoxGeometry(2.23, 0.22, 2.03), new THREE.MeshStandardMaterial({ color: new THREE.Color(ctx.P.acc).multiplyScalar(1.6), emissive: new THREE.Color(ctx.P.acc), emissiveIntensity: 0.6, roughness: 0.3, metalness: 0.8 }));
    band.position.y = 1.75; g.add(band);
    st.add(g); this.kaaba = g;
    const floor = new THREE.Mesh(new THREE.RingGeometry(1.8, 6.5, 96), new THREE.MeshStandardMaterial({ color: 0xE9E4D8, roughness: 0.9, transparent: true, opacity: 0.12, side: THREE.DoubleSide }));
    floor.rotation.x = -Math.PI / 2; st.add(floor);
    this.rings = [];
    for (let k = 0; k < 4; k++) {
      const n = 110 + k * 40, rad = 2.3 + k * 0.9;
      const p = ctx.particles3D({ count: n, seed: 40 + k, geometry: 'sphere', glow: 2.4 - k * 0.3,
        spawn: (i, r) => { const a = i / n * Math.PI * 2 + r() * 0.04; return { p: [Math.cos(a) * rad, 0.12 + r() * 0.08, Math.sin(a) * rad], s: r.range(0.035, 0.06), color: r.pick([ctx.P.hi, '#FFFFFF']) }; } });
      const grp = new THREE.Group(); grp.add(p.mesh); st.add(grp); this.rings.push({ grp, p, sp: 0.35 - k * 0.05 });
    }
  },
  draw(t, lt, ctx) {
    const { X, P, at } = ctx, st = this.st;
    bg(ctx, t, { seed: 37, glowAt: [540, 900], glowR: 700, pattern: false });
    const intro = at(lt, 0, 1.0, 'expoOut');
    // عكس عقارب الساعة من الأعلى = دوران موجب حول y
    this.rings.forEach(r => { r.grp.rotation.y = lt * r.sp; r.p.update(lt); r.grp.scale.setScalar(0.6 + 0.4 * intro); });
    st.orbit(0.5 + lt * 0.08, 0.62 - 0.08 * intro, 21 - 2.5 * intro);
    st.draw(X);
    const sh = X.createLinearGradient(0, 1180, 0, 1560); sh.addColorStop(0, 'rgba(7,16,29,0)'); sh.addColorStop(0.45, 'rgba(7,16,29,0.85)'); sh.addColorStop(1, 'rgba(7,16,29,0.95)');
    X.fillStyle = sh; X.fillRect(0, 1180, ctx.W, 740);
    const w = ctx.wordTime('l15', 3), k = at(t, w.s - 0.1, w.s + 0.5, 'expoOut');
    ctx.text(X, 'حجة الوداع', 540, 390 + (1 - k) * 40, { family: 'display', size: 140, color: P.ink, alpha: k, shadow: { blur: 30, y: 0, color: 'rgba(0,0,0,0.7)' } });
    const w1 = ctx.wordTime('l15', 1);
    chip(ctx, 'السنة 10 هـ', 540, 520, at(t, w1.s - 0.1, w1.s + 0.4));
    caption(ctx, t, 'l15');
  },
});
