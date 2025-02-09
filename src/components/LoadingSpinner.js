import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export const LoadingSpinner = ({ size = 'large', color = '#007AFF' }) => (
  <View style={styles.loadingContainer}>
    <ActivityIndicator size={size} color={color} />
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});