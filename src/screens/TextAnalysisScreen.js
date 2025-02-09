import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ScrollView } from 'react-native';

const TextAnalysisScreen = () => {
  const [text, setText] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeText = async () => {
    if (!text.trim()) return;

    setLoading(true);
    try {
      // Mock analysis response
      setTimeout(() => {
        setAnalysis({
          sentiment: {
            score: 0.8,
            label: 'Positive'
          },
          entities: ['Technology', 'AI', 'Innovation'],
          language: 'English',
          topics: ['Technology', 'Science']
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error analyzing text:', error);
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        placeholder="Enter text to analyze..."
        value={text}
        onChangeText={setText}
      />
      <Button 
        title="Analyze Text" 
        onPress={analyzeText}
        disabled={!text.trim() || loading}
      />
      
      {loading && (
        <Text style={styles.loading}>Analyzing text...</Text>
      )}
      
      {analysis && (
        <View style={styles.analysisContainer}>
          <Text style={styles.analysisTitle}>Analysis Results:</Text>
          <Text style={styles.analysisItem}>
            Sentiment: {analysis.sentiment.label} ({(analysis.sentiment.score * 100).toFixed(1)}%)
          </Text>
          <Text style={styles.analysisItem}>
            Entities: {analysis.entities.join(', ')}
          </Text>
          <Text style={styles.analysisItem}>
            Language: {analysis.language}
          </Text>
          <Text style={styles.analysisItem}>
            Topics: {analysis.topics.join(', ')}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 120,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  loading: {
    marginTop: 20,
    textAlign: 'center',
    color: '#666',
  },
  analysisContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  analysisTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  analysisItem: {
    marginBottom: 8,
    fontSize: 16,
  },
});

export default TextAnalysisScreen;