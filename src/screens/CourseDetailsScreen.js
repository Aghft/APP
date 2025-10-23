import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/native';
import { useDatabase } from '../db/DatabaseContext';
import { palette } from '../styles/colors';
import useFadeIn from '../hooks/useFadeIn';

export default function CourseDetailsScreen() {
  const route = useRoute();
  const { course } = route.params;
  const { getLessons } = useDatabase();
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    getLessons(course.id).then(setLessons);
  }, [course.id, getLessons]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <LinearGradient colors={[course.color, palette.background]} style={styles.hero}>
        <Text style={styles.category}>{course.category}</Text>
        <Text style={styles.title}>{course.title}</Text>
        <View style={styles.progressWrapper}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${course.progress}%` }]} />
          </View>
          <Text style={styles.progressLabel}>{course.progress}% complet</Text>
        </View>
        <Text style={styles.description}>{course.description}</Text>
      </LinearGradient>
      <View style={styles.lessonList}>
        <Text style={styles.lessonTitle}>Lecțiile incluse</Text>
        {lessons.map((lesson, index) => (
          <AnimatedLesson key={lesson.id || index} index={index} lesson={lesson} accent={course.color} />
        ))}
      </View>
    </ScrollView>
  );
}

function AnimatedLesson({ lesson, index, accent }) {
  const animatedStyle = useFadeIn(500, index * 90);
  return (
    <View style={styles.lessonCardWrapper}>
      <TouchableOpacity activeOpacity={0.85}>
        <Animated.View style={[styles.lessonCard, animatedStyle]}>
          <View style={[styles.lessonIndicator, { backgroundColor: accent }]} />
          <View style={styles.lessonContent}>
            <Text style={styles.lessonName}>{lesson.title}</Text>
            <Text style={styles.lessonDuration}>{lesson.duration}</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </View>
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
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 26,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  category: {
    color: 'rgba(255,255,255,0.66)',
    fontSize: 14,
    letterSpacing: 0.4,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: palette.textPrimary,
    marginVertical: 12,
  },
  progressWrapper: {
    marginVertical: 12,
  },
  progressTrack: {
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 999,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: palette.textPrimary,
  },
  progressLabel: {
    color: palette.textPrimary,
    fontSize: 14,
  },
  description: {
    color: palette.textPrimary,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 12,
  },
  lessonList: {
    paddingHorizontal: 24,
    marginTop: 32,
  },
  lessonTitle: {
    color: palette.textPrimary,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
  },
  lessonCardWrapper: {
    marginBottom: 12,
  },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.card,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: palette.border,
  },
  lessonIndicator: {
    width: 8,
    height: 48,
    borderRadius: 999,
    marginRight: 16,
  },
  lessonContent: {
    flex: 1,
  },
  lessonName: {
    color: palette.textPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
  lessonDuration: {
    color: palette.textSecondary,
    fontSize: 13,
    marginTop: 6,
  },
});
