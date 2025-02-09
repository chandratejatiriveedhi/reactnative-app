import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const ErrorDisplay = ({ error, onRetry }) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>
        {error.message || 'An error occurred'}
      </Text>
      {onRetry && (
        <TouchableOpacity 
          style={styles.retryButton} 
          onPress={onRetry}
        >
          <Text style={styles.retryText}>Try Again</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    padding: 16,
    backgroundColor: '#ffebee',
    borderRadius: 8,
    margin: 16,
  },
  errorText: {
    color: '#c62828',
    fontSize: 14,
    textAlign: 'center',
  },
  retryButton: {
    marginTop: 12,
    padding: 8,
    backgroundColor: '#c62828',
    borderRadius: 4,
  },
  retryText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
});