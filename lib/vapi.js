// lib/vapi.js
const VAPI_API_KEY = process.env.VAPI_API_KEY;
const VAPI_BASE_URL = process.env.VAPI_BASE_URL || 'https://api.vapi.ai';

export async function createVapiAgent(config) {
  const response = await fetch(`${VAPI_BASE_URL}/assistant`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${VAPI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: config.name,
      model: {
        provider: "openai",
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: config.systemPrompt
          }
        ]
      },
      voice: {
        provider: "11labs", // or "openai"
        voiceId: config.voiceId || "default"
      },
      firstMessage: config.firstMessage || "Hello! How can I help you today?",
      // Add more Vapi-specific config based on your class learnings
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Vapi API Error: ${error}`);
  }

  return await response.json();
}

export async function createPhoneNumber(assistantId) {
  const response = await fetch(`${VAPI_BASE_URL}/phone-number`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${VAPI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      assistantId: assistantId,
      // Vapi will assign a number or you can import Twilio number
    })
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Vapi Phone Number Error: ${error}`);
  }

  return await response.json();
}
