const json = (o, s = 200) =>
  new Response(JSON.stringify(o), {
    status: s,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });

export async function onRequestGet({ request, env }) {
  const s = new URL(request.url).searchParams.get('s') || 'main';
  if (!/^[a-z0-9_-]{1,32}$/.test(s)) return json({ error: 'invalid' }, 400);
  const { results } = await env.DB.prepare(
    'SELECT stars, COUNT(*) AS c FROM votes WHERE session = ?1 GROUP BY stars'
  ).bind(s).all();
  const counts = [0, 0, 0, 0, 0];
  for (const r of results) counts[r.stars - 1] = r.c;
  const total = counts.reduce((a, b) => a + b, 0);
  const sum = counts.reduce((a, c, i) => a + c * (i + 1), 0);
  return json({ counts, total, avg: total ? Math.round((sum / total) * 100) / 100 : 0 });
}
