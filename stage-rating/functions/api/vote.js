const json = (o, s = 200) =>
  new Response(JSON.stringify(o), {
    status: s,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

export async function onRequestPost({ request, env }) {
  let b;
  try { b = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
  const s = String(b.s || 'main');
  const d = String(b.id || '');
  const n = Number(b.stars);
  if (!/^[a-z0-9_-]{1,32}$/.test(s) || d.length < 8 || d.length > 64 || !Number.isInteger(n) || n < 1 || n > 5) {
    return json({ error: 'invalid' }, 400);
  }
  await env.DB.prepare(
    `INSERT INTO votes (session, device, stars, updated_at) VALUES (?1, ?2, ?3, ?4)
     ON CONFLICT (session, device) DO UPDATE SET stars = excluded.stars, updated_at = excluded.updated_at`
  ).bind(s, d, n, Date.now()).run();
  return json({ ok: true });
}
