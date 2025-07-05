import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { homeStyles } from '../styles';

interface ProfileSectionProps {
  isLoading: boolean;
  handleOAuthLogin: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ isLoading, handleOAuthLogin }) => (
  <View style={homeStyles.section}>
    <Text style={homeStyles.sectionTitle}>🔐 Your Profile</Text>
    <Text style={homeStyles.sectionDescription}>
      Sign in with your 42 account to view your complete profile and data
    </Text>
    
    <TouchableOpacity 
      style={[homeStyles.oauthButton, isLoading && homeStyles.buttonDisabled]}
      onPress={handleOAuthLogin}
      disabled={isLoading}
    >
      <Text style={homeStyles.oauthButtonText}>
        {isLoading ? 'Signing in...' : 'Sign in with 42'}
      </Text>
    </TouchableOpacity>
  </View>
);
