import type { Handler } from '@netlify/functions';

const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing DEEPSEEK_API_KEY' }) };
  }

  try {
    const { messages } = JSON.parse(event.body || '{}');
    if (!Array.isArray(messages)) {
      return { statusCode: 400, body: JSON.stringify({ error: 'messages must be an array' }) };
    }

    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    const text = await response.text();
    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Deepseek API error', status: response.status, details: text }),
      };
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: text,
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server error', details: err instanceof Error ? err.message : String(err) }),
    };
  }
};
