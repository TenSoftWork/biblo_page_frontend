import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { messages } = await req.json();

    // Format messages for OpenAI
    const formattedMessages = [
      {
        role: "system",
        content: "You are Biblo, a helpful and knowledgeable AI assistant. You provide clear, accurate, and engaging responses while maintaining a professional and friendly tone."
      },
      ...messages.map(msg => ({
        role: msg.isUser ? "user" : "assistant",
        content: msg.text
      }))
    ];

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 500,
        presence_penalty: 0.3,
        frequency_penalty: 0.3
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('OpenAI API Error:', error);
      throw new Error('Failed to get response from OpenAI');
    }

    const data = await response.json();
    console.log('OpenAI Response:', data);

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response format from OpenAI');
    }

    return NextResponse.json({
      message: data.choices[0].message.content,
      usage: data.usage
    });

  } catch (error) {
    console.error('Error in chat route:', error);
    return NextResponse.json(
      { 
        message: "I apologize, but I'm having trouble processing your request. Please try again.",
        error: error.message 
      },
      { status: 500 }
    );
  }
} 