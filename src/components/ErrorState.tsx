import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { buttonStyles, stateStyles } from '../styles';

interface ErrorStateProps {
  title: string;
  message: string;
  onRetry?: () => void;
  onBack?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({ title, message, onRetry, onBack }) => {
  return (
    <View style={stateStyles.errorContainer}>
      <Text style={stateStyles.errorTitle}>{title}</Text>
      <Text style={stateStyles.errorText}>{message}</Text>
      <View style={stateStyles.errorButtons}>
        {onRetry && (
          <TouchableOpacity style={[buttonStyles.base, buttonStyles.primary]} onPress={onRetry}>
            <Text style={buttonStyles.text}>Retry</Text>
          </TouchableOpacity>
        )}
        {onBack && (
          <TouchableOpacity style={[buttonStyles.base, buttonStyles.muted]} onPress={onBack}>
            <Text style={buttonStyles.text}>{onRetry ? 'Go Back' : 'Go Home'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
