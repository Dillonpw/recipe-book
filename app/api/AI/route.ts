{/*import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });

    return new NextResponse(JSON.stringify(chatCompletion), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error generating completion:", error);
    return new NextResponse(JSON.stringify({ error: "Failed to generate completion" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
*/}