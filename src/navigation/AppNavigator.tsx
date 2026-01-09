import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuthStore } from "@/services/store/auth.store";
import LoginScreen from "@/components/screens/LoginScreen";
import SignUpScreen from "@/components/screens/SignUpScreen";
import GroupNavigator from "./GroupNavigator";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const isAuth = useAuthStore((s) => s.isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuth ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        ) : (
          <Stack.Screen name="Main" component={GroupNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
