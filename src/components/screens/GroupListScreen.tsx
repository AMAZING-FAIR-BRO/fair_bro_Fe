import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function GroupListScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Group List Screen</Text>

      <Button
        title="Go to Group Detail"
        onPress={() => navigation.navigate("GroupDetail")}
      />

      <Button
        title="Add Expense"
        onPress={() => navigation.navigate("AddExpense")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
