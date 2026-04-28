import OpenAI from 'openai';

export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  const assistantId = process.env.OPENAI_ASSISTANT_ID;
  if (!apiKey || !assistantId) {
    return new Response(
      JSON.stringify({ error: 'Missing OPENAI_API_KEY or OPENAI_ASSISTANT_ID' }),
      { status: 500 }
    );
  }

  let payload: { message?: string; threadId?: string };
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  const { message, threadId } = payload;
  if (!message || typeof message !== 'string') {
    return new Response(JSON.stringify({ error: 'message (string) required' }), { status: 400 });
  }

  const openai = new OpenAI({ apiKey });
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const send = (event: string, data: unknown) => {
        controller.enqueue(encoder.encode(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`));
      };

      try {
        const tid = threadId ?? (await openai.beta.threads.create()).id;
        send('thread', { threadId: tid });

        await openai.beta.threads.messages.create(tid, {
          role: 'user',
          content: message,
        });

        const runStream = openai.beta.threads.runs.stream(tid, {
          assistant_id: assistantId,
        });

        for await (const event of runStream) {
          if (event.event === 'thread.message.delta') {
            const delta = event.data.delta.content?.[0];
            if (delta?.type === 'text' && delta.text?.value) {
              send('token', { token: delta.text.value });
            }
          } else if (event.event === 'thread.run.failed') {
            send('error', { error: event.data.last_error?.message ?? 'Run failed' });
          }
        }

        send('done', {});
      } catch (err) {
        send('error', {
          error: 'Server error',
          details: err instanceof Error ? err.message : String(err),
        });
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
};

export const config = { path: '/.netlify/functions/chat' };
