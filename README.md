# React Native AI App

A mobile application built with React Native that demonstrates various AI capabilities including image analysis, text analysis, and chatbot functionality.

## 🚀 Features

- 📸 **Image Analysis**
  - Upload images from camera or gallery
  - Object detection and classification
  - Scene analysis
  - Safe content detection
  - Real-time processing

- 📝 **Text Analysis**
  - Sentiment analysis
  - Entity recognition
  - Language detection
  - Topic classification
  - Keyword extraction

- 💬 **Chatbot**
  - Interactive conversational interface
  - Context-aware responses
  - Natural language processing
  - Multi-turn conversations
  - Quick responses

## 🛠 Prerequisites

- Node.js >= 14
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for iOS) or Android Emulator (for Android)
- Git

## ⚙️ Installation

1. Clone the repository
```bash
git clone https://github.com/chandratejatiriveedhi/reactnative-app.git
cd reactnative-app
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Run on iOS or Android
```bash
# For iOS
npm run ios
# or
yarn ios

# For Android
npm run android
# or
yarn android
```

## 📁 Project Structure

```
reactnative-app/
├── App.js                 # Main application component
├── app.json              # Expo configuration
├── babel.config.js       # Babel configuration
├── src/
│   ├── screens/          # Screen components
│   │   ├── HomeScreen.js
│   │   ├── ImageAnalysisScreen.js
│   │   ├── TextAnalysisScreen.js
│   │   └── ChatbotScreen.js
│   ├── components/       # Reusable components
│   │   ├── ErrorDisplay.js
│   │   ├── LoadingSpinner.js
│   │   └── MessageInput.js
│   ├── utils/           # Utility functions
│   │   └── mockData.js
│   ├── services/        # API services
│   │   └── api.js
│   └── config/          # Configuration files
│       └── config.js
├── assets/              # Images and assets
├── .gitignore
└── README.md
```

## 🔧 Configuration

### Environment Setup

Create a `.env` file in the root directory with your AI service API keys:
```env
API_KEY=your_api_key_here
API_ENDPOINT=your_api_endpoint
```

### API Configuration

Update the `src/config/config.js` file with your specific settings:
```javascript
export const config = {
  apiEndpoints: {
    imageAnalysis: 'your_endpoint',
    textAnalysis: 'your_endpoint',
    chatbot: 'your_endpoint',
  }
};
```

## 📱 Features in Detail

### Image Analysis
- Upload images from camera or gallery
- Get detailed analysis including:
  - Object detection
  - Scene classification
  - Text recognition (OCR)
  - Face detection
  - Safe search detection

### Text Analysis
- Process text input for:
  - Sentiment analysis (positive/negative/neutral)
  - Entity extraction (names, places, organizations)
  - Language detection
  - Topic classification
  - Key phrase extraction

### Chatbot
- Interactive chat interface with:
  - Natural language processing
  - Context-aware responses
  - Multi-turn conversations
  - Quick response suggestions
  - Message history

## 🛡️ Security

- API keys are stored securely using environment variables
- Input validation for all user inputs
- Secure file handling for image uploads
- Rate limiting for API calls
- Error handling and logging

## 🧪 Testing

Run the test suite:
```bash
npm test
# or
yarn test
```

## 📦 Build & Deploy

### Build for iOS
```bash
expo build:ios
```

### Build for Android
```bash
expo build:android
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)

## 📞 Support

For support, email your-email@example.com or create an issue in the repository.