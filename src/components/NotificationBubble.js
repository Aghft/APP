import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { palette } from '../styles/colors';

export default function NotificationBubble({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(125, 114, 248, 0.25)',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginVertical: 6,
  },
  message: {
    color: palette.textPrimary,
    fontSize: 14,
    lineHeight: 20,
  },
});
