export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, phone, time, programName } = req.body || {};

  const SUPABASE_URL = 'https://dmvqiuminxrtcaylfcwg.supabase.co';
  const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtdnFpdW1pbnhydGNheWxmY3dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY4MDc4NTAsImV4cCI6MjA5MjM4Mzg1MH0.oosI4r-Hdtea_pEy-yIRPYZG37fAOPLNdk1Y_yG93k0';

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
        squad: programName || null,
        notes: time ? `Удобное время: ${time}` : null,
        status: 'new'
      })
    });

    return res.status(200).json({ ok: true, status: sbRes.status });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
