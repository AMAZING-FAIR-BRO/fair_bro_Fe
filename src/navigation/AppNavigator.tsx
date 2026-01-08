// src/navigation/AppNavigator.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "@/components/screens/LoginScreen";
import SignUpScreen from "@/components/screens/SignUpScreen";
import GroupNavigator from "./GroupNavigator";

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {/* AUTH */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        {/* MAIN APP */}
        <Stack.Screen name="Main" component={GroupNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
