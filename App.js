import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ImageAnalysisScreen from './src/screens/ImageAnalysisScreen';
import TextAnalysisScreen from './src/screens/TextAnalysisScreen';
import ChatbotScreen from './src/screens/ChatbotScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Image Analysis" component={ImageAnalysisScreen} />
        <Tab.Screen name="Text Analysis" component={TextAnalysisScreen} />
        <Tab.Screen name="Chatbot" component={ChatbotScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;