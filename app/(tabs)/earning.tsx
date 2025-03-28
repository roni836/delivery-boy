import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons'

export default function TabTwoScreen() {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12, padding: 10 }}>
        <Octicons name="location" size={24} color="#e52850" />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Deliver To</Text>
          <Text style={{ color: "gray", fontSize: 16, marginTop: 3 }}>Abcd</Text>
        </View>
        <Pressable style={{ backgroundColor: "#e6cber", width: 40, height: 40, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
          <Text>S</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
