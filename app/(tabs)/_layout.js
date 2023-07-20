import React from 'react';
import { Tabs } from 'expo-router/tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Image } from 'react-native';

export default function AppLayout() {
  const renderProfileIcon = () => {
    // Replace 'user_profile_pic.png' with the correct path to the user's profile picture.
    return (
      <View style={{ marginRight: 10 }}>
        <Image
          source={require('../../assets/users/uxdlozi.jpg')}
          style={{ width: 30, height: 30, borderRadius: 15 }}
        />
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // Hide tab labels
        activeTintColor: '#d2ff58',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home | Wine Shmine',
          headerTitle:'',
          headerRight: renderProfileIcon,
          headerStyle: {backgroundColor: 'rgba(255, 255, 255, 0.0)'},
          headerShadowVisible:false,
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons name="home" style={{ color: focused ? '#08341d' : color }} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Cart | Wine Shmine',
          headerTitle:'',
          headerRight: renderProfileIcon,
          headerStyle: {backgroundColor: 'rgba(255, 255, 255, 0.0)'},
          headerShadowVisible:false,
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name="shopping-cart"
              style={{ color: focused ? '#08341d' : color }}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact us |  Wine Shmine',
          headerTitle:'',
          headerRight: renderProfileIcon,
          headerStyle: {backgroundColor: 'rgba(255, 255, 255, 0.0)'},
          headerShadowVisible:false,
          headerShadowVisible:false,
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name="contact-support"
              style={{ color: focused ? '#08341d' : color }}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
