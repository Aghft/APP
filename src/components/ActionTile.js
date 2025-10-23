import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { palette } from '../styles/colors';

export default function ActionTile({ title, subtitle, icon, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.86} style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.card,
    borderRadius: 22,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: palette.border,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.06)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 24,
    color: palette.textPrimary,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: palette.textPrimary,
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 4,
  },
  subtitle: {
    color: palette.textSecondary,
    fontSize: 13,
  },
});
