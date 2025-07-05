import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { headerStyles } from '../styles';

interface ScreenHeaderProps {
  title: string;
  onBack?: () => void;
  backButtonText?: string;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title, onBack, backButtonText = '← Back' }) => {
  return (
    <View style={headerStyles.header}>
      {onBack ? (
        <TouchableOpacity style={headerStyles.backButton} onPress={onBack}>
          <Text style={headerStyles.backButtonText}>{backButtonText}</Text>
        </TouchableOpacity>
      ) : (
        <View style={headerStyles.placeholder} />
      )}
      <Text style={headerStyles.headerTitle}>{title}</Text>
      <View style={headerStyles.placeholder} />
    </View>
  );
};
