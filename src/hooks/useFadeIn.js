import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

export default function useFadeIn(duration = 600, delay = 0) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(16)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      delay,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();

    Animated.timing(translateY, {
      toValue: 0,
      duration,
      delay,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [delay, duration, opacity, translateY]);

  return { opacity, transform: [{ translateY }] };
}
