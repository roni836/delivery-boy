import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const orders = [
  {
    id: "1",
    orderId: "#ACR148856",
    status: "Completed",
    method: "Cash on delivery",
    amount: "$32.00",
  },
  {
    id: "2",
    orderId: "#ACR148157",
    status: "Rejected",
    method: "Cash on delivery",
    amount: "$32.00",
  },
  {
    id: "3",
    orderId: "#ACR148856",
    status: "Completed",
    method: "Cash on delivery",
    amount: "$32.00",
  },
];

export default function OrderHistoryScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="bars" size={20} color="orange" />
        </TouchableOpacity>
        <Text style={styles.headerText}>History</Text>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="calendar" size={20} color="orange" />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Today</Text>

      {/* Order Cards */}
      {orders.map((order) => (
        <View key={order.id} style={styles.card}>
          {/* Top Row */}
          <View style={styles.rowBetween}>
            <View style={styles.row}>
              <FontAwesome name="bookmark" size={20} color="orange" />
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.label}>Order Id</Text>
                <Text style={styles.value}>{order.orderId}</Text>
              </View>
            </View>

            <Text style={[styles.status, order.status === "Completed"
              ? styles.completed
              : styles.rejected,
            ]}>
              ● {order.status}
            </Text>
          </View>

          {/* Payment Row */}
          <View style={styles.paymentRow}>
            <View>
              <Text style={styles.label}>Payment method</Text>
              <Text style={styles.value}>{order.method}</Text>
            </View>
            <View>
              <Text style={styles.label}>Total payment</Text>
              <Text style={styles.amount}>{order.amount}</Text>
            </View>
          </View>
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
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  iconButton: {
    backgroundColor: "#f1f1f1",
    padding: 8,
    borderRadius: 12,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 1,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: "#888",
    fontSize: 13,
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 2,
  },
  status: {
    fontSize: 14,
    fontWeight: "600",
  },
  completed: {
    color: "green",
  },
  rejected: {
    color: "red",
  },
  paymentRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e67300",
    marginTop: 2,
    textAlign: "right",
  },
});
