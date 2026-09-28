// Vercel Serverless Function: Proxy seguro e direto para Google Gemini Gratuito
// Permite que a Ágora funcione sem expor chaves sensíveis e com fallback de modelos

export default async function handler(req, res) {
  // Configuração de CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Utilize POST.' });
  }

  const { prompt, systemInstruction, apiKey: clientKey, mode } = req.body || {};
  const apiKey = clientKey || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(400).json({
      error: 'Nenhuma chave Gemini configurada. Insira sua chave gratuita do Google AI Studio.'
    });
  }

  const models = ['gemini-2.0-flash', 'gemini-1.5-flash', 'gemini-1.5-flash-latest'];
  let lastError = null;

  for (const model of models) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const payload = {
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }]
          }
        ],
        generationConfig: {
          maxOutputTokens: 2048,
          temperature: 0.65
        }
      };

      if (systemInstruction) {
        payload.systemInstruction = {
          parts: [{ text: systemInstruction }]
        };
      }

      const resp = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (resp.ok) {
        const data = await resp.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) {
          return res.status(200).json({ reply: text, model: model });
        }
      }

      const errText = await resp.text();
      lastError = new Error(`${model} retornou ${resp.status}: ${errText}`);
    } catch (err) {
      lastError = err;
    }
  }

  return res.status(500).json({
    error: lastError ? lastError.message : 'Falha na comunicação com a API do Gemini.'
  });
}
