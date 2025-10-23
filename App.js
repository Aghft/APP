import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/navigation/BottomTabs';
import CourseDetailsScreen from './src/screens/CourseDetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SupportScreen from './src/screens/SupportScreen';
import CertificatesScreen from './src/screens/CertificatesScreen';
import { DatabaseProvider } from './src/db/DatabaseContext';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#0A0B14',
  },
};

export default function App() {
  return (
    <DatabaseProvider>
      <NavigationContainer theme={theme}>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tabs" component={BottomTabs} />
          <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Support" component={SupportScreen} />
          <Stack.Screen name="Certificates" component={CertificatesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DatabaseProvider>
  );
}
