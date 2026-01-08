import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function AddExpenseScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>➕ Add Expense Screen</Text>

      <Button title="Save (Mock)" onPress={() => navigation.goBack()} />
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
