export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, phone, childName, time, programName } = req.body || {};

  const TG_TOKEN = process.env.TG_TOKEN;
  const VK_TOKEN = process.env.VK_TOKEN;
  const SUPABASE_URL = 'https://dmvqiuminxrtcaylfcwg.supabase.co';
  const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtdnFpdW1pbnhydGNheWxmY3dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4MDc4NTAsImV4cCI6MjA5MjM4Mzg1MH0.oosI4r-Hdtea_pEy-yIRPYZG37fAOPLNdk1Y_yG93k0';

  const TG_CHATS = ['523543780', '264918807'];
  const VK_USERS = ['37446520', '25275034'];

  // Формируем сообщение
  let msg = '🐼 Новая заявка — Академия Панды!\n\n';
  if (name)        msg += `👤 Имя: ${name}\n`;
  if (phone)       msg += `📱 Телефон: ${phone}\n`;
  if (childName)   msg += `👦 Ребёнок: ${childName}\n`;
  if (programName) msg += `🎯 Направление: ${programName}\n`;
  if (time)        msg += `⏰ Удобное время: ${time}\n`;
  msg += `\n📍 Академия Панды`;
  msg += `\n🕐 ${new Date().toLocaleString('ru-RU', {timeZone: 'Asia/Yekaterinburg'})}`;

  // 1. Telegram
  if (TG_TOKEN) {
    await Promise.allSettled(
      TG_CHATS.map(chatId =>
        fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: msg })
        })
      )
    );
  }

  // 2. VK
  if (VK_TOKEN) {
    await Promise.allSettled(
      VK_USERS.map((userId, i) => {
        const params = new URLSearchParams({
          user_id: userId,
          message: msg,
          random_id: Date.now() + i,
          access_token: VK_TOKEN,
          v: '5.131'
        });
        return fetch(`https://api.vk.com/method/messages.send?${params}`);
      })
    );
  }

  // 3. Supabase — пишем заявку в leads
  let supabaseStatus = null;
  try {
    const sbRes = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        source: 'studio',
        parent_name: name || null,
        parent_phone: phone || null,
        child_name: childName || null,
        squad: programName || null,
        notes: time ? `Удобное время: ${time}` : null,
        status: 'new'
      })
    });
    supabaseStatus = sbRes.status;
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }

  return res.status(200).json({ ok: true, supabase: supabaseStatus });
}
