import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { palette } from '../styles/colors';

export default function SearchBar({ value, onChangeText, placeholder = 'Caută cursuri, mentori sau tag-uri' }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={palette.textSecondary}
        selectionColor={palette.accent}
        autoCorrect={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginBottom: 24,
  },
  input: {
    color: palette.textPrimary,
    fontSize: 16,
  },
});
