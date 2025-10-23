import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { palette } from '../styles/colors';

export default function CertificatesScreen() {
  const certificates = [
    { id: 1, title: 'UI/UX Design Fundamentals', issued: 'Ianuarie 2024', credential: '#UX-8821' },
    { id: 2, title: 'Productivity for Creators', issued: 'Octombrie 2023', credential: '#PR-4482' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Certificatele tale</Text>
      <Text style={styles.subtitle}>
        Păstrează evidența celor mai importante realizări. Poți descărca oricând certificatele în format PDF din platformă.
      </Text>
      {certificates.map((certificate) => (
        <View key={certificate.id} style={styles.card}>
          <Text style={styles.cardTitle}>{certificate.title}</Text>
          <Text style={styles.cardDetail}>Emis: {certificate.issued}</Text>
          <Text style={styles.cardDetail}>Cod acreditare: {certificate.credential}</Text>
        </View>
      ))}
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
    marginBottom: 28,
    lineHeight: 20,
  },
  card: {
    backgroundColor: palette.card,
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: palette.border,
    marginBottom: 16,
  },
  cardTitle: {
    color: palette.textPrimary,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  cardDetail: {
    color: palette.textSecondary,
    fontSize: 13,
    marginBottom: 4,
  },
});
