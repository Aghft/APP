import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ActionTile from '../components/ActionTile';
import { palette } from '../styles/colors';

const headerBackground = { uri: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=60' };

export default function AccountScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <ImageBackground source={headerBackground} style={styles.hero} imageStyle={styles.heroImage}>
        <View style={styles.overlay}>
          <Text style={styles.heroGreeting}>Profilul meu</Text>
          <Text style={styles.heroSubtitle}>Adună în același loc progresul și certificatele tale.</Text>
        </View>
      </ImageBackground>
      <View style={styles.tiles}>
        <ActionTile
          title="Date personale"
          subtitle="Actualizează numărul de telefon, adresa și rolul profesional"
          icon="👩🏻‍💻"
          onPress={() => navigation.navigate('Profile')}
        />
        <ActionTile
          title="Certificate & badge-uri"
          subtitle="Urmărește acreditările obținute pe platformă"
          icon="🏅"
          onPress={() => navigation.navigate('Certificates')}
        />
        <ActionTile
          title="Setări"
          subtitle="Gestionează notificările, limba și siguranța contului"
          icon="⚙️"
          onPress={() => navigation.navigate('Settings')}
        />
        <ActionTile
          title="Suport & feedback"
          subtitle="Ai întrebări? Suntem aici pentru tine"
          icon="💬"
          onPress={() => navigation.navigate('Support')}
        />
        <ActionTile
          title="Log out"
          subtitle="Te poți reconecta oricând"
          icon="🚪"
          onPress={() => {}}
        />
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
    paddingBottom: 120,
  },
  hero: {
    height: 220,
    justifyContent: 'flex-end',
  },
  heroImage: {
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  overlay: {
    backgroundColor: 'rgba(10,11,20,0.55)',
    paddingHorizontal: 28,
    paddingVertical: 36,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  heroGreeting: {
    color: palette.textPrimary,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  heroSubtitle: {
    color: palette.textSecondary,
    fontSize: 14,
    lineHeight: 20,
  },
  tiles: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
});
