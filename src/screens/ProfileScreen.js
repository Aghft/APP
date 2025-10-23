import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { palette } from '../styles/colors';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Date personale</Text>
      <Text style={styles.subtitle}>
        Actualizează informațiile tale pentru o experiență personalizată și recomandări cât mai bune.
      </Text>
      <View style={styles.section}>
        <Text style={styles.label}>Nume complet</Text>
        <Text style={styles.value}>Mara Ionescu</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>mara.ionescu@example.com</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Rol profesional</Text>
        <Text style={styles.value}>Product Designer</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Obiectiv curent</Text>
        <Text style={styles.value}>Finalizarea cursului de React Native avansat</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.background,
  },
  content: {
    paddingTop: 72,
    paddingHorizontal: 24,
    paddingBottom: 120,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: palette.textPrimary,
    marginBottom: 10,
  },
  subtitle: {
    color: palette.textSecondary,
    marginBottom: 28,
    lineHeight: 20,
  },
  section: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: palette.border,
    paddingBottom: 16,
  },
  label: {
    color: palette.textSecondary,
    fontSize: 13,
    marginBottom: 8,
  },
  value: {
    color: palette.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
});
