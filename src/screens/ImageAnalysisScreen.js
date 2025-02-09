import React, { useState } from 'react';
import { View, Image, Button, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImageAnalysisScreen = () => {
  const [image, setImage] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
      analyzeImage(result.uri);
    }
  };

  const analyzeImage = async (imageUri) => {
    setLoading(true);
    try {
      // Mock analysis response
      setTimeout(() => {
        setAnalysis({
          labels: ['Nature', 'Landscape', 'Mountain'],
          confidence: 0.95,
          objects: ['tree', 'sky', 'cloud']
        });
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error analyzing image:', error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={styles.image} />
      )}
      {loading && (
        <Text style={styles.loading}>Analyzing image...</Text>
      )}
      {analysis && (
        <View style={styles.analysisContainer}>
          <Text style={styles.analysisTitle}>Analysis Results:</Text>
          <Text>Labels: {analysis.labels.join(', ')}</Text>
          <Text>Confidence: {analysis.confidence * 100}%</Text>
          <Text>Objects: {analysis.objects.join(', ')}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
    borderRadius: 10,
  },
  loading: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
  },
  analysisContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    width: '100%',
  },
  analysisTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ImageAnalysisScreen;