import type { Handler } from '@netlify/functions';
import OpenAI from 'openai';

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.OPENAI_API_KEY;
  const assistantId = process.env.OPENAI_ASSISTANT_ID;
  if (!apiKey || !assistantId) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Missing OPENAI_API_KEY or OPENAI_ASSISTANT_ID' }),
    };
  }

  const openai = new OpenAI({ apiKey });

  try {
    const { message, threadId } = JSON.parse(event.body || '{}');
    if (!message || typeof message !== 'string') {
      return { statusCode: 400, body: JSON.stringify({ error: 'message (string) required' }) };
    }

    const tid = threadId ?? (await openai.beta.threads.create()).id;

    await openai.beta.threads.messages.create(tid, {
      role: 'user',
      content: message,
    });

    const run = await openai.beta.threads.runs.createAndPoll(tid, {
      assistant_id: assistantId,
    });

    if (run.status !== 'completed') {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: `Run failed with status: ${run.status}`,
          threadId: tid,
          lastError: run.last_error,
        }),
      };
    }

    const list = await openai.beta.threads.messages.list(tid, { order: 'desc', limit: 1 });
    const last = list.data[0];
    const reply =
      last?.content[0]?.type === 'text' ? last.content[0].text.value : 'Pas de réponse.';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply, threadId: tid }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Server error',
        details: err instanceof Error ? err.message : String(err),
      }),
    };
  }
};
