import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, Alert, Platform } from "react-native";
import { useAuth } from "@/viewmodels/useAuth";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

export default function GroupListScreen({ navigation }: any) {
  const { handleGoogleLogin } = useAuth();

  // Configure Google auth request. Replace client IDs with your own in app.json or environment.
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.EXPO_GOOGLE_CLIENT_ID,
    iosClientId: process.env.IOS_GOOGLE_CLIENT_ID,
    androidClientId: process.env.ANDROID_GOOGLE_CLIENT_ID,
    webClientId: process.env.WEB_GOOGLE_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      // authentication.idToken is recommended to verify on backend
      handleGoogleLogin({
        id_token: authentication?.idToken,
        token: authentication?.accessToken,
      });
      Alert.alert("Signed in", `Welcome`);
    } else if (response?.type === "error") {
      Alert.alert("Sign-in failed", "Google login cancelled or failed");
    }
  }, [response]);

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

      <Button
        title={
          request ? "Sign in with Google" : "Sign in with Google (unavailable)"
        }
        onPress={() => {
          if (!request) {
            // Fallback to quick demo if auth request is not configured
            const googleUser = {
              user_id: "u001-1111-2222-3333",
              email: "nam.nguyen@example.com",
              full_name: "Nam Nguyen",
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.PayloadString.SignatureString",
              expires_at: "2024-02-01T10:00:00Z",
            };
            handleGoogleLogin({
              token: googleUser.token,
              user_id: googleUser.user_id,
              email: googleUser.email,
              full_name: googleUser.full_name,
              expires_at: googleUser.expires_at,
            })
              .then(() =>
                Alert.alert("Signed in", `Welcome ${googleUser.full_name}`)
              )
              .catch((e) =>
                Alert.alert("Sign-in failed", e?.message || "Unknown error")
              );
            return;
          }

          promptAsync({ useProxy: Platform.OS !== "web" });
        }}
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
