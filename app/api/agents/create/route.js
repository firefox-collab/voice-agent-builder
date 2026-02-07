import { createVapiAgent, createPhoneNumber } from '@/lib/vapi';
import { supabase } from '@/lib/supabase';

export async function POST(request) {
  try {
    const body = await request.json();
    const { userId, industry, businessName, config } = body;

    const vapiAgent = await createVapiAgent({
      name: `${businessName} - ${industry}`,
      systemPrompt: generatePromptForIndustry(industry, config || {}),
      firstMessage: `Hello! Thank you for calling ${businessName}. How can I help you today?`,
      voiceId: (config && config.voiceId) || "default"
    });

    const phoneNumber = await createPhoneNumber(vapiAgent.id);

    const mockAgent = {
      id: `agent-${Date.now()}`,
      user_id: userId,
      vapi_agent_id: vapiAgent.id,
      phone_number: phoneNumber.number,
      industry: industry,
      business_name: businessName,
      config: config,
      status: 'active',
      created_at: new Date().toISOString()
    };

    console.log('Agent created (mock):', mockAgent);

    return Response.json({
      success: true,
      agent: mockAgent,
      phoneNumber: phoneNumber.number
    });

  } catch (error) {
    console.error('Agent creation error:', error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

function generatePromptForIndustry(industry, config) {
  const prompts = {
    restaurant: `You are a friendly AI receptionist for ${config.businessName || 'a restaurant'}, a restaurant in the Philippines.

Your responsibilities:
- Take reservations (ask: name, phone, date, time, number of guests)
- Answer questions about menu, hours, location
- Handle dietary restrictions politely
- Transfer complex requests to manager

Business Details:
- Hours: ${config.hours || '10 AM - 10 PM daily'}
- Location: ${config.address || 'Metro Manila'}
- Cuisine: ${config.cuisine || 'Filipino'}

Always be warm, helpful, and use "po" and "opo" for respect when appropriate.`,

    clinic: `You are a professional AI receptionist for ${config.businessName || 'a clinic'}, a medical clinic.

Your responsibilities:
- Schedule appointments (collect: name, phone, concern, preferred date/time)
- Answer questions about services, doctors, hours
- Handle emergency calls (transfer immediately)
- Verify insurance coverage

Always maintain HIPAA-compliant language and professional tone.`,
  };

  return prompts[industry] || prompts.restaurant;
}

