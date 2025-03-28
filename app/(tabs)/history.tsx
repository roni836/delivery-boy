import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { Octicons } from '@expo/vector-icons'

const history = () => {
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
    )
}

export default history

const styles = StyleSheet.create({})