// Configuration variables for the app
export const config = {
  // API endpoints
  apiEndpoints: {
    imageAnalysis: 'https://api.example.com/vision',
    textAnalysis: 'https://api.example.com/text',
    chatbot: 'https://api.example.com/chat',
  },

  // Feature flags
  features: {
    enableImageAnalysis: true,
    enableTextAnalysis: true,
    enableChatbot: true,
  },

  // UI Configuration
  ui: {
    // Theme colors
    colors: {
      primary: '#007AFF',
      secondary: '#5856D6',
      success: '#34C759',
      danger: '#FF3B30',
      warning: '#FF9500',
      info: '#5AC8FA',
      light: '#F2F2F7',
      dark: '#1C1C1E',
    },
    // Font sizes
    fontSize: {
      small: 12,
      regular: 16,
      large: 20,
      extraLarge: 24,
    },
  },

  // Timeouts
  timeouts: {
    apiRequest: 10000, // 10 seconds
    imageUpload: 30000, // 30 seconds
  },

  // Cache configuration
  cache: {
    imageCache: {
      maxSize: 50, // Maximum number of images to cache
      expirationTime: 3600000, // Cache expiration time (1 hour)
    },
  },

  // Debug mode
  debug: __DEV__, // Enable debug mode in development
};

// Environment-specific configuration
export const getEnvironmentConfig = () => {
  if (__DEV__) {
    return {
      ...config,
      apiEndpoints: {
        imageAnalysis: 'http://localhost:3000/vision',
        textAnalysis: 'http://localhost:3000/text',
        chatbot: 'http://localhost:3000/chat',
      },
    };
  }
  return config;
};