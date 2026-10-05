const json = (o, s = 200) =>
  new Response(JSON.stringify(o), {
    status: s,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

function same(a, b) {
  if (a.length !== b.length) return false;
  let x = 0;
  for (let i = 0; i < a.length; i++) x |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return x === 0;
}

export async function onRequestPost({ request, env }) {
  let b;
  try { b = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
  const s = String(b.s || 'main');
  const pin = String(b.pin || '');
  if (!/^[a-z0-9_-]{1,32}$/.test(s)) return json({ error: 'invalid' }, 400);
  if (!env.ADMIN_PIN || !same(pin, String(env.ADMIN_PIN))) return json({ error: 'forbidden' }, 403);
  await env.DB.prepare('DELETE FROM votes WHERE session = ?1').bind(s).run();
  return json({ ok: true });
}
