// Mock data utilities for testing without actual API calls
export const mockImageAnalysis = (imageUri) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        labels: [
          { description: 'Nature', confidence: 0.98 },
          { description: 'Landscape', confidence: 0.95 },
          { description: 'Mountain', confidence: 0.87 }
        ],
        safeSearch: {
          adult: 'VERY_UNLIKELY',
          violence: 'VERY_UNLIKELY'
        },
        text: [],
        faces: []
      });
    }, 1500);
  });
};

export const mockTextAnalysis = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        sentiment: {
          score: 0.8,
          magnitude: 0.9,
          label: 'Positive'
        },
        entities: [
          { name: 'Technology', type: 'TOPIC', salience: 0.8 },
          { name: 'AI', type: 'TECHNOLOGY', salience: 0.6 }
        ],
        language: 'en',
        categories: ['Technology', 'Science']
      });
    }, 1000);
  });
};

export const mockChatbotResponse = (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        response: `This is a mock response to: "${message}". I'm a simulated AI assistant helping you test the application.`,
        confidence: 0.95
      });
    }, 800);
  });
};