import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ProgressBarProps {
  progress: number;
  level: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress, level }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.levelText}>Level {level}</Text>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  levelText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  progressBarContainer: {
    justifyContent: 'center',
  },
  progressBarBackground: {
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    width: '100%',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#00BABC',
    borderRadius: 10,
  },
  progressText: {
    position: 'absolute',
    alignSelf: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 12,
  },
});
