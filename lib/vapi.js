export async function createVapiAgent(config) {
  return Promise.resolve({
    id: `mock-agent-${Date.now()}`,
    name: config.name,
    status: 'active',
    created_at: new Date().toISOString()
  });
}

export async function createPhoneNumber(assistantId) {
  return Promise.resolve({
    id: `mock-phone-${Date.now()}`,
    number: '+63-2-8888-' + Math.floor(1000 + Math.random() * 9000),
    assistantId: assistantId
  });
}
