// app/api/agents/create/route.js
import { createVapiAgent, createPhoneNumber } from '@/lib/vapi';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY // Server-side key
);

export async function POST(request) {
  try {
    const body = await request.json();
    const { userId, industry, businessName, config } = body;

    // 1. Create Vapi Assistant
    const vapiAgent = await createVapiAgent({
      name: `${businessName} - ${industry}`,
      systemPrompt: generatePromptForIndustry(industry, config),
      firstMessage: `Hello! Thank you for calling ${businessName}. How can I help you today?`,
      voiceId: config.voiceId || "default"
    });

    // 2. Create Phone Number for Agent
    const phoneNumber = await createPhoneNumber(vapiAgent.id);

    // 3. Save to Supabase
    const { data: dbAgent, error: dbError } = await supabase
      .from('agents')
      .insert({
        user_id: userId,
        vapi_agent_id: vapiAgent.id,
        phone_number: phoneNumber.number,
        industry: industry,
        business_name: businessName,
        config: config,
        status: 'active'
      })
      .select()
      .single();

    if (dbError) throw dbError;

    // 4. Trigger n8n Webhook
    await fetch(process.env.N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'agent_created',
        agent: dbAgent,
        vapi_data: vapiAgent
      })
    });

    // 5. Return success
    return Response.json({
      success: true,
      agent: dbAgent,
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

// Helper function for industry-specific prompts
function generatePromptForIndustry(industry, config) {
  const prompts = {
    restaurant: `You are a friendly AI receptionist for ${config.businessName}, a restaurant in the Philippines. 
    
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
    
    clinic: `You are a professional AI receptionist for ${config.businessName}, a medical clinic.
    
Your responsibilities:
- Schedule appointments (collect: name, phone, concern, preferred date/time)
- Answer questions about services, doctors, hours
- Handle emergency calls (transfer immediately)
- Verify insurance coverage

Always maintain HIPAA-compliant language and professional tone.`,
    
    // Add other industries...
  };

  return prompts[industry] || prompts.restaurant;
}
