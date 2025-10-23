import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { palette } from '../styles/colors';

export default function SettingsScreen() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [mailEnabled, setMailEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Setări</Text>
      <Text style={styles.subtitle}>Controlează notificările și modul în care aplicația arată.</Text>
      <View style={styles.settingRow}>
        <View>
          <Text style={styles.settingName}>Notificări push</Text>
          <Text style={styles.settingDescription}>
            Primește update-uri despre lecții noi sau feedback de la mentori.
          </Text>
        </View>
        <Switch
          value={pushEnabled}
          onValueChange={setPushEnabled}
          thumbColor={pushEnabled ? palette.accent : '#F4F3F4'}
          trackColor={{ true: 'rgba(255,139,106,0.5)', false: '#767577' }}
        />
      </View>
      <View style={styles.settingRow}>
        <View>
          <Text style={styles.settingName}>Newsletter pe email</Text>
          <Text style={styles.settingDescription}>
            Vei primi inspirație săptămânală și sfaturi de la community.
          </Text>
        </View>
        <Switch
          value={mailEnabled}
          onValueChange={setMailEnabled}
          thumbColor={mailEnabled ? palette.accent : '#F4F3F4'}
          trackColor={{ true: 'rgba(255,139,106,0.5)', false: '#767577' }}
        />
      </View>
      <View style={styles.settingRow}>
        <View>
          <Text style={styles.settingName}>Mod întunecat</Text>
          <Text style={styles.settingDescription}>Ai deja modul preferat activat.</Text>
        </View>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          thumbColor={darkMode ? palette.accent : '#F4F3F4'}
          trackColor={{ true: 'rgba(255,139,106,0.5)', false: '#767577' }}
        />
      </View>
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
    marginBottom: 32,
    lineHeight: 20,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: palette.card,
    padding: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: palette.border,
    marginBottom: 18,
  },
  settingName: {
    color: palette.textPrimary,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  settingDescription: {
    color: palette.textSecondary,
    fontSize: 13,
    maxWidth: 220,
  },
});
