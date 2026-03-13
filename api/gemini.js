module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'GEMINI_API_KEY not configured on server' });
  }

  let body = '';
  try {
    body = await new Promise((resolve, reject) => {
      let data = '';
      req.on('data', chunk => { data += chunk; });
      req.on('end', () => resolve(data));
      req.on('error', reject);
    });
  } catch (err) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  let parsed = null;
  try {
    parsed = JSON.parse(body || '{}');
  } catch (err) {
    return res.status(400).json({ error: 'Invalid JSON' });
  }

  const prompt = (parsed && parsed.prompt ? String(parsed.prompt) : '').trim();
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
  const payload = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024
    }
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: text || 'Upstream error' });
    }

    const result = await response.json();
    const text =
      result &&
      result.candidates &&
      result.candidates[0] &&
      result.candidates[0].content &&
      result.candidates[0].content.parts &&
      result.candidates[0].content.parts[0] &&
      result.candidates[0].content.parts[0].text
        ? result.candidates[0].content.parts[0].text
        : '';

    if (!text) {
      return res.status(502).json({ error: 'Unexpected response format from Gemini' });
    }

    return res.status(200).json({ text });
  } catch (err) {
    return res.status(502).json({ error: 'Failed to reach Gemini API' });
  }
};
