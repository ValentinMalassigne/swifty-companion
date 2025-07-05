import React from 'react';
import { Text, View } from 'react-native';
import { profileStyles } from '../styles';
import { ProgressBar } from './ProgressBar';

interface SkillRowProps {
  name: string;
  level: number;
}

export const SkillRow: React.FC<SkillRowProps> = ({ name, level }) => {
  const integerPart = Math.floor(level);
  const decimalPart = Math.round((level - integerPart) * 100);

  return (
    <View style={{ marginBottom: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <Text style={profileStyles.detailLabel}>{name}</Text>
      </View>
      <ProgressBar progress={decimalPart} level={integerPart} />
    </View>
  );
};
