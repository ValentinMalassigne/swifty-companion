import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { homeStyles } from '../styles';

interface SearchSectionProps {
  searchLogin: string;
  setSearchLogin: (login: string) => void;
  handleSearchUser: () => void;
}

export const SearchSection: React.FC<SearchSectionProps> = ({
  searchLogin,
  setSearchLogin,
  handleSearchUser,
}) => (
  <View style={homeStyles.section}>
    <Text style={homeStyles.sectionTitle}>🔍 Search Public Profiles</Text>
    <Text style={homeStyles.sectionDescription}>
      Find and view any 42 student's public profile information
    </Text>
    
    <View style={homeStyles.searchContainer}>
      <TextInput
        style={homeStyles.searchInput}
        placeholder="Enter a login"
        value={searchLogin}
        onChangeText={setSearchLogin}
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="search"
        onSubmitEditing={handleSearchUser}
      />
      <TouchableOpacity 
        style={[homeStyles.searchButton, !searchLogin.trim() && homeStyles.buttonDisabled]}
        onPress={handleSearchUser}
        disabled={!searchLogin.trim()}
      >
        <Text style={homeStyles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  </View>
);
