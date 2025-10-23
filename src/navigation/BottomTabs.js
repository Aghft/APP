import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import SearchScreen from '../screens/SearchScreen';
import { palette } from '../styles/colors';

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const isAccount = route.name === 'Account';

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabButton, isAccount && styles.accountButton, isFocused && styles.focusedTab]}
            activeOpacity={0.9}
          >
            {options.tabBarIcon ? (
              options.tabBarIcon({ focused: isFocused, color: isFocused ? palette.textPrimary : palette.navIcon })
            ) : (
              <Text style={{ color: isFocused ? palette.textPrimary : palette.navIcon }}>{label}</Text>
            )}
            {isAccount && <Text style={styles.accountLabel}>Profil</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { position: 'absolute' },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="home" size={26} color={focused ? palette.textPrimary : color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.accountIconContainer}>
              <Icon name="user" size={28} color={focused ? palette.textPrimary : palette.accent} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icon name="search" size={26} color={focused ? palette.textPrimary : color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: palette.navBar,
    marginHorizontal: 24,
    marginBottom: Platform.OS === 'ios' ? 24 : 16,
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 22,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  accountButton: {
    flex: 1.2,
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 24,
    paddingVertical: 8,
  },
  focusedTab: {},
  accountIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountLabel: {
    marginTop: 4,
    fontSize: 11,
    color: 'rgba(255,255,255,0.72)',
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
