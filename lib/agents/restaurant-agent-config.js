// Restaurant Agent Configuration
// Use with: lib/vapi.js createVapiAgent() function

export const restaurantAgentConfig = {
  // Basic Info
  name: "Sofia - Restaurant AI Receptionist",
  industry: "restaurant",
  
  // Business Details (CUSTOMIZABLE by customer)
  businessDetails: {
    name: "[Restaurant Name]", // e.g., "Kusina ni Tito"
    location: "[City, Province]", // e.g., "Makati, Metro Manila"
    cuisine: "[Filipino, International, etc.]", // e.g., "Filipino & Asian Fusion"
    operatingHours: "[e.g., 11 AM - 10 PM daily]",
    specialties: "[e.g., Grilled seafood, Traditional Filipino dishes]"
  },

  // Voice Settings
  voice: {
    provider: "11labs", // or "deepgram" or "openai"
    voiceId: "sophia", // Female, warm, professional Filipino-English voice
    stability: 0.75, // 0-1, higher = more consistent
    similarityBoost: 0.75 // 0-1, higher = more similar to original
  },

  // Language Support
  languages: ["English", "Tagalog", "Bisaya"],
  defaultLanguage: "Tagalog",

  // First Message
  firstMessage: "Magandang araw! Thank you for calling [Restaurant Name]. Kumusta po kayo? Kung Bisaya ka, mahimo ra ta mag-Bisaya ha? How can I help you po today?",

  // System Prompt (shortened for brevity - full version in documentation)
  systemPrompt: `You are Sofia, the friendly AI receptionist for Philippine restaurants.

CORE RULES:
1. Language Locking: Once detected, stay in that language (English/Tagalog/Bisaya)
2. Ignore numbers/times for language detection
3. Short responses (2-3 sentences max)
4. One question at a time
5. Natural code-switching allowed

LANGUAGE DETECTION:
- Tagalog: po/opo, ng, bukas, kailan
- Bisaya: ugma, kanus-a, palihug, sa hapon
- Default: Tagalog if unclear

RESERVATION FLOW:
1. Collect: Name → Phone → Date → Time → Guests → Special Requests
2. Confirm all details
3. Get confirmation
4. Call log_reservation function
5. Thank customer

Be warm, welcoming, and make every caller excited to dine! 🍽️`,

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
  webhookUrl: "http://localhost:5678/webhook/restaurant-reservation"
};

export default restaurantAgentConfig;
