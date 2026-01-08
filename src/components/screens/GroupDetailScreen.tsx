import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function GroupDetailScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📊 Group Detail Screen</Text>

      <Button
        title="Add Expense"
        onPress={() => navigation.navigate("AddExpense")}
      />

      <Button title="Back to Group List" onPress={() => navigation.goBack()} />
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
