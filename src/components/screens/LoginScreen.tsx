import React, { useEffect } from "react";
import LoginTemplate from "../templates/LoginTemplate";
import { useLogin } from "@/viewmodels/useLogin";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useAuth } from "@/viewmodels/useAuth";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  const { login } = useLogin();
  const { handleGoogleLogin } = useAuth();
  const navigation = useNavigation<any>();

  const [request, response, promptAsync] = Google.useAuthRequest({
    // TODO: Replace these client IDs with your actual OAuth client IDs.
    expoClientId: "<YOUR_EXPO_CLIENT_ID>",
    androidClientId: "<YOUR_ANDROID_CLIENT_ID>",
    iosClientId: "<YOUR_IOS_CLIENT_ID>",
    webClientId: "<YOUR_WEB_CLIENT_ID>",
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      if (authentication) {
        (async () => {
          try {
            const res = await fetch(
              "https://www.googleapis.com/userinfo/v2/me",
              {
                headers: {
                  Authorization: `Bearer ${authentication.accessToken}`,
                },
              }
            );
            const user = await res.json();
            await handleGoogleLogin({
              id_token: authentication.idToken,
              token: authentication.accessToken,
              email: user?.email,
              full_name: user?.name,
              user_id: user?.id,
              id: user?.id,
            });
            navigation.replace("Main");
          } catch (err) {
            console.warn("Google sign-in error", err);
          }
        })();
      }
    }
  }, [response]);

  return (
    <LoginTemplate
      onLogin={async (account: string, password: string) => {
        const res = await login(account, password);
        if (res.success) navigation.replace("Main");
        return res;
      }}
      onGoSignUp={() => navigation.navigate("SignUp")}
      onGoogleSignIn={() => promptAsync()}
    />
  );
}
