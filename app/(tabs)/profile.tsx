import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome, Feather, Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconBtn}>
          <FontAwesome name="bars" size={20} color="orange" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <View style={{ width: 32 }} />
      </View>

      {/* Gradient Box + Avatar */}
      <View style={styles.topBox}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=47" }}
          style={styles.avatar}
        />
      </View>

      {/* Name and Email */}
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Lina John</Text>
        <Text style={styles.email}>lina1563@gmail.com</Text>
      </View>

      {/* Stats */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>Joining Day</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>15</Text>
          <Text style={styles.statLabel}>Total Orders</Text>
        </View>
      </View>

      {/* Options */}
      <View style={styles.optionList}>
        <OptionItem
          icon={<Feather name="user" size={20} color="black" />}
          label="Profile Setting"
        />
        <OptionItem
          icon={<Ionicons name="gift-outline" size={20} color="black" />}
          label="Share & Earn"
        />
        <OptionItem
          icon={<Ionicons name="notifications-outline" size={20} color="black" />}
          label="Notification Setting"
        />
      </View>
    </ScrollView>
  );
}

const OptionItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <TouchableOpacity style={styles.optionItem}>
    <View style={styles.optionLeft}>
      <View style={styles.optionIcon}>{icon}</View>
      <Text style={styles.optionLabel}>{label}</Text>
    </View>
    <FontAwesome name="angle-right" size={22} color="gray" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 56,
  },
  header: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconBtn: {
    backgroundColor: "#f1f1f1",
    padding: 8,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  topBox: {
    backgroundColor: "orange",
    height: 100,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 30,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: "#fff",
    position: "absolute",
    bottom: -45,
  },
  profileInfo: {
    marginTop: 60,
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    color: "#666",
    marginTop: 4,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  statBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    width: "40%",
    alignItems: "center",
    borderColor: "#eee",
    borderWidth: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "orange",
  },
  statLabel: {
    marginTop: 4,
    fontSize: 13,
    color: "#555",
  },
  optionList: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  optionItem: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    elevation: 1,
  },
  optionLabel: {
    fontSize: 15,
    fontWeight: "500",
  },
});
