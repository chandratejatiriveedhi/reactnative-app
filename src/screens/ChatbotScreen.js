import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Button, 
  FlatList, 
  Text, 
  StyleSheet, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';

const ChatbotScreen = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
    };

    setChat(prevChat => [...prevChat, userMessage]);
    setMessage('');
    setLoading(true);

    try {
      // Mock chatbot response
      setTimeout(() => {
        const botMessage = {
          id: Date.now() + 1,
          text: `This is a mock response to: "${message}". I'm a simulated AI assistant helping you test the application.`,
          sender: 'bot',
        };
        setChat(prevChat => [...prevChat, botMessage]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      setLoading(false);
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.sender === 'user' ? styles.userMessage : styles.botMessage,
      ]}
    >
      <Text style={[
        styles.messageText,
        item.sender === 'user' ? styles.userMessageText : styles.botMessageText,
      ]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90}
    >
      <FlatList
        data={chat}
        renderItem={renderMessage}
        keyExtractor={item => item.id.toString()}
        style={styles.chatContainer}
        contentContainerStyle={styles.chatContent}
        inverted={false}
      />
      
      {loading && (
        <Text style={styles.typingIndicator}>AI is typing...</Text>
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          multiline
          maxLength={500}
        />
        <Button 
          title="Send" 
          onPress={sendMessage}
          disabled={!message.trim() || loading}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  chatContent: {
    paddingBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    maxHeight: 100,
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
    borderRadius: 15,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#007AFF',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  messageText: {
    fontSize: 16,
  },
  userMessageText: {
    color: '#fff',
  },
  botMessageText: {
    color: '#000',
  },
  typingIndicator: {
    padding: 10,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default ChatbotScreen;