import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CourseCard from '../components/CourseCard';
import NotificationBubble from '../components/NotificationBubble';
import { useDatabase } from '../db/DatabaseContext';
import { palette } from '../styles/colors';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { courses, notifications, loading } = useDatabase();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Salut, Mara 👋</Text>
          <Text style={styles.subtitle}>Continuă ce ai început sau explorează ceva nou.</Text>
        </View>
      </View>
      <View style={styles.notifications}>
        {!loading && notifications.length === 0 ? (
          <NotificationBubble message="Nu ai notificări noi. Revino mai târziu!" />
        ) : (
          notifications.map((item) => <NotificationBubble key={item.id} message={item.message} />)
        )}
      </View>
      <Text style={styles.sectionTitle}>Cursurile tale</Text>
      <View>
        {courses.map((course, index) => (
          <CourseCard
            key={course.id}
            course={course}
            delay={index * 120}
            onPress={() => navigation.navigate('CourseDetails', { course })}
          />
        ))}
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
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 120,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  greeting: {
    fontSize: 26,
    fontWeight: '700',
    color: palette.textPrimary,
  },
  subtitle: {
    color: palette.textSecondary,
    marginTop: 6,
    fontSize: 14,
  },
  notifications: {
    marginBottom: 26,
  },
  sectionTitle: {
    color: palette.textPrimary,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
});
