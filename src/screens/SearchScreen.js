import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../components/SearchBar';
import CourseCard from '../components/CourseCard';
import { useDatabase } from '../db/DatabaseContext';
import { palette } from '../styles/colors';

export default function SearchScreen() {
  const navigation = useNavigation();
  const { courses } = useDatabase();
  const [term, setTerm] = useState('');

  const filtered = useMemo(() => {
    const formatted = term.trim().toLowerCase();
    if (!formatted) return courses;
    return courses.filter((course) =>
      `${course.title} ${course.category}`.toLowerCase().includes(formatted),
    );
  }, [courses, term]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Căutare inteligentă</Text>
      <Text style={styles.subtitle}>
        Găsește rapid cursuri, mentorii preferați sau modulele după cuvinte cheie.
      </Text>
      <SearchBar value={term} onChangeText={setTerm} />
      <Text style={styles.resultsLabel}>
        {filtered.length === 0
          ? 'Niciun curs găsit. Încearcă alt termen.'
          : `${filtered.length} rezultate`}
      </Text>
      <View>
        {filtered.map((course, index) => (
          <CourseCard
            key={course.id}
            course={course}
            delay={index * 100}
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
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: palette.textPrimary,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: palette.textSecondary,
    lineHeight: 20,
    marginBottom: 24,
  },
  resultsLabel: {
    color: palette.textSecondary,
    marginBottom: 18,
  },
});
