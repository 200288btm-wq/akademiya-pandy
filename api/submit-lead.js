// Целевой путь: akademiya-pandy/api/submit-lead.js
// Академия Панды — приём заявки (Vercel).
// Проксирует в edge-функцию booking: она пишет заявку со studio_id и шлёт
// уведомления (TG/VK) по студии. Токенов и прямой вставки в Supabase здесь больше нет.

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const BOOKING_URL = 'https://dmvqiuminxrtcaylfcwg.supabase.co/functions/v1/booking';
  const SLUG = 'akademiya-pandy';

  const b = req.body || {};

  const payload = {
    action: 'submit',
    slug: SLUG,
    source: 'studio',
    parent_name: b.name ?? null,
    parent_phone: b.phone ?? null,
    child_name: b.childName ?? null,       // подхватится, когда добавишь поле в форму
    child_age: b.childAge ?? null,
    program: b.programName ?? null,
    preferred_time: b.time ?? null,
    contact_way: b.contactWay ?? null,     // на будущее
    contact_value: b.contactValue ?? null, // на будущее
    comment: b.comment ?? null,
  };

  try {
    const r = await fetch(BOOKING_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await r.json().catch(() => ({ ok: true }));
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
