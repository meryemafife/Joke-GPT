import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  baseURL: "http://127.0.0.1:5000/v1",
});

export const runtime = 'edge';

export async function generateJoke(req: Request) {
  const { messages ,temperature} = await req.json();

  console.log(`temperature: ${temperature}`);

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    temperature: temperature,
    messages: [
      {
        role: "system",
        content:
          `As a professional short joke host, you have a television program known for constant jokes. You are renowned for your quick wit and can generate jokes rapidly. Your jokes should be thought-provoking and humorous, focusing on family, animals, technology, and travel. You prefer joke types such as puns, wordplay, absurd humor, and your narrative style includes direct storytelling, dialogue between characters, and reference-based humor.`,
      },
      ...messages,
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}

