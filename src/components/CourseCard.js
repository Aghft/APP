import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { palette } from '../styles/colors';
import useFadeIn from '../hooks/useFadeIn';

export default function CourseCard({ course, onPress, delay = 0 }) {
  const animatedStyle = useFadeIn(600, delay);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
        <LinearGradient colors={[course.color, palette.card]} style={styles.gradient}>
          <View style={styles.header}>
            <Text style={styles.category}>{course.category}</Text>
            <View style={styles.progressBadge}>
              <Text style={styles.progressText}>{course.progress}%</Text>
            </View>
          </View>
          <Text style={styles.title}>{course.title}</Text>
          <View style={styles.footer}>
            <View style={styles.progressBarTrack}>
              <View style={[styles.progressBarFill, { width: `${course.progress}%` }]} />
            </View>
            <Text style={styles.cta}>Continuă</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  gradient: {
    borderRadius: 26,
    padding: 24,
    minHeight: 176,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  category: {
    color: 'rgba(255,255,255,0.76)',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.4,
  },
  progressBadge: {
    backgroundColor: 'rgba(10,11,20,0.2)',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  progressText: {
    color: palette.textPrimary,
    fontWeight: '700',
    fontSize: 14,
  },
  title: {
    color: palette.textPrimary,
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressBarTrack: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.24)',
    borderRadius: 999,
    flex: 1,
    marginRight: 16,
  },
  progressBarFill: {
    backgroundColor: palette.textPrimary,
    borderRadius: 999,
    height: '100%',
  },
  cta: {
    color: palette.textPrimary,
    fontWeight: '600',
    fontSize: 14,
  },
});
