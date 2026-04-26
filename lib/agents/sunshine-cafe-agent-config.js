// Sunshine Cafe Agent Configuration
// The original working agent - proven successful!

export const sunshineCafeAgentConfig = {
  // Basic Info
  name: "Maya - Sunshine Cafe AI Receptionist",
  industry: "cafe",
  
  // Business Details
  businessDetails: {
    name: "Sunshine Cafe",
    location: "Pasay City, Metro Manila",
    cuisine: "Cafe - Filipino breakfast, coffee, pastries",
    operatingHours: "7 AM - 9 PM daily",
    specialties: "Filipino breakfast (tapsilog, longsilog, bangsilog), specialty coffee"
  },

  // Voice Settings
  voice: {
    provider: "11labs",
    voiceId: "maya", // Warm, friendly, approachable
    stability: 0.75,
    similarityBoost: 0.75
  },

  // Language Support
  languages: ["English", "Tagalog", "Bisaya"],
  defaultLanguage: "Tagalog",

  // First Message
  firstMessage: "Magandang araw! Thank you for calling Sunshine Cafe. Kumusta po kayo? Kung Bisaya ka, mahimo ra ta mag-Bisaya ha? So, how can I help you po today?",

  // System Prompt (shortened - full version in Sunshine_System_Prompt_CLEAN_v1.md)
  systemPrompt: `You are Maya, the friendly AI receptionist for Sunshine Cafe in Pasay City, Metro Manila.

CORE RULES:
1. Language Locking: Once detected, stay in that language (English/Tagalog/Bisaya)
2. Ignore numbers/times/dates for language detection
3. Short responses (2-3 sentences max)
4. One question at a time
5. Natural code-switching allowed

LANGUAGE DETECTION:
- Tagalog: po/opo, ng, bukas, kailan, saan
- Bisaya: ugma, kanus-a, asa, palihug
- Default: Tagalog if unclear

BUSINESS INFO:
- Open: 7 AM - 9 PM daily
- Location: Pasay City, Metro Manila
- Specialties: Filipino breakfast (tapsilog, longsilog, bangsilog), specialty coffee
- Vegan options: Vegetable lumpia, fresh spring rolls, fruit bowls

RESERVATION FLOW:
1. Collect: Name → Phone → Date → Time → Guests → Special Requests
2. Confirm all details
3. Get confirmation
4. Call log_reservation function
5. Thank customer

Be warm, positive, and make every caller feel like sunshine! ☀️`,

  // Model Configuration
  model: {
    provider: "openai",
    model: "gpt-4o",
    temperature: 0.7,
    maxTokens: 500
  },

  // Function Configuration
  functions: [
    {
      name: "log_reservation",
      description: "Logs reservation details to Google Sheets",
      parameters: {
        type: "object",
        properties: {
          customer_name: { type: "string" },
          phone_number: { type: "string" },
          reservation_date: { type: "string" },
          reservation_time: { type: "string" },
          number_of_guests: { type: "integer" },
          special_requests: { type: "string" },
          language: { type: "string", enum: ["English", "Tagalog", "Bisaya"] }
        },
        required: ["customer_name", "phone_number", "reservation_date", "reservation_time", "number_of_guests", "special_requests", "language"]
      }
    }
  ],

  // Webhook URL
  webhookUrl: "http://localhost:5678/webhook-test/voice-agent-cta"
};

export default sunshineCafeAgentConfig;
