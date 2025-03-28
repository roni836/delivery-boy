import { Tabs } from 'expo-router';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import '../global.css';
import { View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#f97316", // Orange color when active
        tabBarInactiveTintColor: "gray", // Inactive color
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: { height: 60, backgroundColor: "white", borderTopWidth: 0 },
        tabBarItemStyle: { justifyContent: "center", alignItems: "center", paddingBottom: 10, marginBottom: 5 },
        tabBarLabelStyle: { fontSize: 14, fontWeight: "500", textAlign: "center" },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: ' Home',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              {focused && <View style={{ width: 30, height: 4, backgroundColor: "#f97316", borderRadius: 2, marginBottom: 4 }} />}
              <Entypo size={30} name="home" color={focused ? "#f97316" : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="earning"
        options={{
          title: "Earning",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "flex-end" }}>
              {focused && <View style={{ width: 30, height: 4, backgroundColor: "#f97316", borderRadius: 2, marginBottom: 4 }} />}
              <Entypo name="wallet" size={28} color={focused ? "#f97316" : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              {focused && <View style={{ width: 30, height: 4, backgroundColor: "#f97316", borderRadius: 2, marginBottom: 4 }} />}
              <FontAwesome5 name="history" size={28} color={focused ? "#f97316" : color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: "center" }}>
              {focused && <View style={{ width: 30, height: 4, backgroundColor: "#f97316", borderRadius: 2, marginBottom: 4 }} />}
              <AntDesign name="user" size={28} color={focused ? "#f97316" : color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
