import React from 'react';
import { Text, View } from 'react-native';
import { headerStyles, homeStyles } from '../styles';

export const HomeHeader = () => (
  <View style={headerStyles.header}>
    <Text style={homeStyles.title}>Swifty Companion</Text>
  </View>
);
