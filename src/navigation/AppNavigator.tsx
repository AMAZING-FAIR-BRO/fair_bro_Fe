// src/navigation/AppNavigator.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import GroupNavigator from "./GroupNavigator";

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <GroupNavigator />
    </NavigationContainer>
  );
}
