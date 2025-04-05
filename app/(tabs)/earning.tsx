import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

export default function TabTwoScreen() {
  const navigation = useNavigation();

  const earnings = [
    { id: 1, orderId: "#ACR148856", date: "02/03/2023", amount: "$32.00" },
    { id: 2, orderId: "#ACR148857", date: "02/03/2023", amount: "$32.00" },
    { id: 3, orderId: "#ACR148858", date: "02/03/2023", amount: "$32.00" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="bars" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Earning</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Total Earnings Card */}
      <View style={styles.totalCard}>
        <View>
          <Text style={styles.totalLabel}>Total Earnings</Text>
          <Text style={styles.totalAmount}>$1,800</Text>
        </View>
        <FontAwesome name="money" size={32} color="orange" />
      </View>

      {/* Daily Earnings Header */}
      <View style={styles.dailyHeader}>
        <Text style={styles.dailyHeaderText}>Daily Earnings</Text>
        <TouchableOpacity>
          <FontAwesome name="calendar" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Orders List */}
      {earnings.map((item) => (
        <View key={item.id} style={styles.orderCard}>
          <View style={styles.orderTopRow}>
            <View style={styles.orderInfo}>
              <FontAwesome name="bookmark" size={20} color="orange" />
              <View style={styles.orderTextContainer}>
                <Text style={styles.orderIdLabel}>Order Id</Text>
                <Text style={styles.orderId}>{item.orderId}</Text>
              </View>
            </View>
            <Text style={styles.orderDate}>{item.date}</Text>
          </View>
          <Text style={styles.orderAmount}>{item.amount}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
    paddingTop: 56,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalCard: {
    backgroundColor: "#000000",
    borderRadius: 10,
    padding: 16,
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  totalLabel: {
    color: "#cccccc",
    fontSize: 14,
  },
  totalAmount: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 4,
  },
  dailyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24,
  },
  dailyHeaderText: {
    fontSize: 16,
    fontWeight: "600",
  },
  orderCard: {
    backgroundColor: "#f3f3f3",
    padding: 16,
    borderRadius: 10,
    marginTop: 12,
  },
  orderTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  orderInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  orderTextContainer: {
    marginLeft: 12,
  },
  orderIdLabel: {
    color: "#777",
    fontSize: 12,
  },
  orderId: {
    fontWeight: "600",
    fontSize: 14,
  },
  orderDate: {
    color: "#777",
    fontSize: 12,
  },
  orderAmount: {
    textAlign: "right",
    color: "#e67300",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 8,
  },
});
