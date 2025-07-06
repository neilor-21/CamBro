export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method not allowed' });
  }

  const { question } = request.body;
  const apiKey = process.env.VITE_OPENAI_API_KEY; // Your key in Vercel

  if (!question) {
    return response.status(400).json({ message: 'Question is required.' });
  }
  if (!apiKey) {
    return response.status(500).json({ message: 'API key not configured.' });
  }

  const systemPrompt = "You are Campbro, a friendly and helpful AI assistant for a college. Answer student questions concisely. If you don't know the answer, say so. Your knowledge includes: Library is open 9am-8pm. Canteen serves lunch 12pm-2pm. The head of the CS department is Dr. Alan Varghese.";

  try {
    const aiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: question }
        ],
        max_tokens: 100
      })
    });

    const data = await aiResponse.json();
    const botReply = data.choices[0].message.content;
    response.status(200).json({ reply: botReply });

  } catch (error) {
    response.status(500).json({ message: 'Error communicating with AI service.' });
  }
}