import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Alert, Text, StyleSheet, Switch, ScrollView, View, Pressable, SafeAreaView } from 'react-native';
import { Feather, Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState('Fetching location...');

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        'Location Services not enabled',
        'Please enable your location services to continue',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(true);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permission not granted',
        'Allow the app to use the location service',
        [{ text: 'OK' }],
        { cancelable: false }
      );
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    // console.log('Location:', location);

    const { latitude, longitude } = location.coords;

    let response = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });

    if (response.length > 0) {
      let address = `${response[0]?.name},${response[0]?.city}, ${response[0]?.postalCode},`;
      setDisplayCurrentAddress(address);
    }
  };


  const [isOnline, setIsOnline] = useState(true);
  return (
    <SafeAreaView style={{ paddingTop: 56 }}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Feather style={{ padding: 6, borderRadius: 50 }} name="menu" size={20} color="#f97316" />
            <Text style={styles.locationText}>{displayCurrentAddress.substring(0,30)}</Text>
            <Ionicons name="chevron-down" size={20} color="black" />
          </View>
          <Ionicons style={{ padding: 6, borderRadius: 50 }} name="notifications-outline" size={24} color="#f97316" />
        </View>

        {/* Available Status */}
        <View style={styles.statusContainer}>
          <View>
            <Text style={styles.statusText}>Available Status</Text>
            <Text style={styles.onlineText}>You are online</Text>
          </View>
          <Switch value={isOnline} trackColor={{ false: "#dcdcdc", true: "#a3e635" }}
            thumbColor={isOnline ? "#4ade80" : "#f4f3f4"} onValueChange={setIsOnline} />
        </View>

        {/* Earnings Card */}
        <View style={styles.earningsContainer}>
          <View>
            <Text style={styles.earningsTitle}>Today Earnings</Text>
            <Text style={styles.earningsAmount}>$800</Text>
          </View>
          <Pressable style={styles.earningsButton}>
            <Ionicons name="arrow-forward" size={20} color="white" />
          </Pressable>
        </View>

        {/* Today's Orders */}
        <Text style={styles.sectionTitle}>Today's Order</Text>
        <View style={styles.orderStatsContainer}>
          {[
            { count: 15, label: "Order" },
            { count: 3, label: "Pending" },
            { count: 15, label: "Completed" },
          ].map((item, index) => (
            <View key={index} style={styles.orderBox}>
              <Ionicons name="cube" size={24} color="#f97316" />
              <Text style={styles.orderCount}>{item.count}</Text>
              <Text style={styles.orderLabel}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/* Order List */}
        <View style={styles.orderListHeader}>
          <Text style={styles.sectionTitle}>Order List</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        {/* Sample Order */}
        <View style={{ flexDirection: "column", gap: "14" }}>
          <View style={styles.orderItem}>
            <View>
              <Text style={styles.orderIdText}>Order Id</Text>
              <Text style={styles.orderIdValue}>#ACR148856</Text>
            </View>
            <Text style={styles.orderTime}>1 min ago</Text>
          </View>
          <View style={styles.orderItem}>
            <View>
              <Text style={styles.orderIdText}>Order Id</Text>
              <Text style={styles.orderIdValue}>#ACR148856</Text>
            </View>
            <Text style={styles.orderTime}>1 min ago</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 8,
    marginRight: 4,
  },
  statusContainer: {
    backgroundColor: "#eafce3",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  statusText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  onlineText: {
    color: "#228B22",
    fontSize: 14,
  },
  earningsContainer: {
    backgroundColor: "#fef3e3",
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  earningsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f97316",
  },
  earningsAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#e76f00",
  },
  earningsButton: {
    backgroundColor: "#f97316",
    padding: 10,
    borderRadius: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop:10
  },
  orderStatsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  orderBox: {
    flex: 1,
    backgroundColor: "#fef9f3",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginHorizontal: 5,
  },
  orderCount: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#f97316",
    marginTop: 4,
  },
  orderLabel: {
    fontSize: 14,
    color: "gray",
  },
  orderListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  seeAll: {
    color: "#f97316",
    fontSize: 14,
  },
  orderItem: {
    backgroundColor: "#f6f6f6",
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderIdText: {
    color: "gray",
    fontSize: 14,
  },
  orderIdValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  orderTime: {
    color: "gray",
    fontSize: 14,
  },
});
