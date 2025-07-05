import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { stateStyles } from '../styles';

interface LoadingStateProps {
  message: string;
  color?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ message, color = '#3498db' }) => {
  return (
    <View style={stateStyles.loadingContainer}>
      <ActivityIndicator size="large" color={color} />
      <Text style={stateStyles.loadingText}>{message}</Text>
    </View>
  );
};
