import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import GroupListScreen from "@/components/screens/GroupListScreen";
import GroupDetailScreen from "@/components/screens/GroupDetailScreen";
import AddExpenseScreen from "@/components/screens/AddExpenseScreen";

const Tab = createBottomTabNavigator();

const PRIMARY = "#3B82F6";
const INACTIVE = "#94A3B8";

type FabButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
};

function FabButton({ children, onPress }: FabButtonProps) {
  return (
    <TouchableOpacity
      style={styles.fabWrapper}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.fab}>{children}</View>
    </TouchableOpacity>
  );
}

export default function GroupNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.label,
      }}
    >
      {/* Nhóm */}
      <Tab.Screen
        name="Groups"
        component={GroupListScreen}
        options={{
          tabBarLabel: "Nhóm",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="people-outline"
              size={size}
              color={focused ? PRIMARY : INACTIVE}
            />
          ),
        }}
      />

      {/* Số dư */}
      <Tab.Screen
        name="Balance"
        component={GroupDetailScreen}
        options={{
          tabBarLabel: "Số dư",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="wallet-outline"
              size={size}
              color={focused ? PRIMARY : INACTIVE}
            />
          ),
        }}
      />

      {/* FAB - Thêm */}
      <Tab.Screen
        name="AddExpense"
        component={AddExpenseScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <Ionicons name="add" size={32} color="#fff" />,
          tabBarButton: (props) => <FabButton {...props} />,
        }}
      />

      {/* Hóa đơn */}
      <Tab.Screen
        name="Expenses"
        component={GroupDetailScreen}
        options={{
          tabBarLabel: "Hóa đơn",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="receipt-outline"
              size={size}
              color={focused ? PRIMARY : INACTIVE}
            />
          ),
        }}
      />

      {/* Cài đặt */}
      <Tab.Screen
        name="Settings"
        component={GroupDetailScreen}
        options={{
          tabBarLabel: "Cài đặt",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="settings-outline"
              size={size}
              color={focused ? PRIMARY : INACTIVE}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    paddingTop: 6,
    paddingBottom: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#E5E7EB",
  },
  label: {
    fontSize: 10,
    fontWeight: "500",
  },
  fabWrapper: {
    top: -26,
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: PRIMARY,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: PRIMARY,
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
});
