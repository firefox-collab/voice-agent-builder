// Industry Agent Configurations Index
// All available voice agent templates

import sunshineCafeAgentConfig from './sunshine-cafe-agent-config.js';
import restaurantAgentConfig from './restaurant-agent-config.js';

// Export all agent configs
export const agents = {
  cafe: sunshineCafeAgentConfig,
  restaurant: restaurantAgentConfig,
  // Coming soon:
  // clinic: clinicAgentConfig,
  // retail: retailAgentConfig,
  // salon: salonAgentConfig,
  // hotel: hotelAgentConfig
};

// Helper function to get agent by industry
export function getAgentByIndustry(industry) {
  const agent = agents[industry.toLowerCase()];
  if (!agent) {
    throw new Error(`Agent configuration not found for industry: ${industry}`);
  }
  return agent;
}

// Helper function to customize agent with business details
export function customizeAgent(industry, businessDetails) {
  const baseAgent = getAgentByIndustry(industry);
  
  return {
    ...baseAgent,
    businessDetails: {
      ...baseAgent.businessDetails,
      ...businessDetails
    },
    // Update placeholders in first message and system prompt
    firstMessage: baseAgent.firstMessage.replace('[Restaurant Name]', businessDetails.name || '[Restaurant Name]'),
    systemPrompt: baseAgent.systemPrompt
      .replace(/\[Restaurant Name\]/g, businessDetails.name || '[Restaurant Name]')
      .replace(/\[hours\]/g, businessDetails.operatingHours || '[hours]')
      .replace(/\[cuisine\]/g, businessDetails.cuisine || '[cuisine]')
      .replace(/\[list\]/g, businessDetails.specialties || '[popular dishes]')
  };
}

// Helper function to list all available industries
export function listAvailableIndustries() {
  return Object.keys(agents);
}

export default agents;
