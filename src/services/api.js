import { OPENAI_API_KEY, GOOGLE_CLOUD_VISION_KEY, HUGGINGFACE_API_KEY } from '@env';

// Image Analysis API (Google Cloud Vision)
export const analyzeImage = async (imageUri) => {
  const formData = new FormData();
  formData.append('image', {
    uri: imageUri,
    type: 'image/jpeg',
    name: 'image.jpg',
  });

  const response = await fetch('https://vision.googleapis.com/v1/images:annotate', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GOOGLE_CLOUD_VISION_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      requests: [{
        image: {
          content: formData
        },
        features: [
          { type: 'LABEL_DETECTION' },
          { type: 'OBJECT_LOCALIZATION' },
          { type: 'FACE_DETECTION' },
          { type: 'TEXT_DETECTION' }
        ]
      }]
    })
  });

  if (!response.ok) {
    throw new Error('Image analysis failed');
  }

  return response.json();
};

// Text Analysis API (HuggingFace)
export const analyzeText = async (text) => {
  const response = await fetch('https://api-inference.huggingface.co/models/facebook/bart-large-mnli', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${HUGGINGFACE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inputs: text })
  });

  if (!response.ok) {
    throw new Error('Text analysis failed');
  }

  return response.json();
};

// Chatbot API (OpenAI)
export const sendMessage = async (message) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
      temperature: 0.7
    })
  });

  if (!response.ok) {
    throw new Error('Chat request failed');
  }

  const data = await response.json();
  return {
    response: data.choices[0].message.content,
    confidence: 1
  };
};