import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { palette } from '../styles/colors';

export default function SupportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suport & feedback</Text>
      <Text style={styles.subtitle}>
        Trimite-ne o întrebare sau spune-ne ce ai vrea să îmbunătățim. Răspundem în mai puțin de 24h.
      </Text>
      <TouchableOpacity style={styles.button} activeOpacity={0.88}>
        <Text style={styles.buttonText}>Deschide chat live</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.secondaryButton]} activeOpacity={0.88}>
        <Text style={[styles.buttonText, styles.secondaryText]}>Trimite email</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background,
    paddingTop: 72,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: palette.textPrimary,
    marginBottom: 10,
  },
  subtitle: {
    color: palette.textSecondary,
    marginBottom: 40,
    lineHeight: 20,
  },
  button: {
    backgroundColor: palette.accent,
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: palette.accent,
  },
  buttonText: {
    color: palette.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryText: {
    color: palette.accent,
  },
});
