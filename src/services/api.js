import { getEnvironmentConfig } from '../config/config';

const config = getEnvironmentConfig();

// Helper function to handle API responses
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'API request failed');
  }
  return response.json();
};

// Helper function to make API requests
const makeRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(endpoint, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    return handleResponse(response);
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Image Analysis API
export const analyzeImage = async (imageUri) => {
  const formData = new FormData();
  formData.append('image', {
    uri: imageUri,
    type: 'image/jpeg',
    name: 'image.jpg',
  });

  return makeRequest(config.apiEndpoints.imageAnalysis, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
    timeout: config.timeouts.imageUpload,
  });
};

// Text Analysis API
export const analyzeText = async (text) => {
  return makeRequest(config.apiEndpoints.textAnalysis, {
    method: 'POST',
    body: JSON.stringify({ text }),
    timeout: config.timeouts.apiRequest,
  });
};

// Chatbot API
export const sendMessage = async (message) => {
  return makeRequest(config.apiEndpoints.chatbot, {
    method: 'POST',
    body: JSON.stringify({ message }),
    timeout: config.timeouts.apiRequest,
  });
};