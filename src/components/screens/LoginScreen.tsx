import React from "react";
import LoginTemplate from "../templates/LoginTemplate";
import { useLogin } from "@/viewmodels/useLogin";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const { login } = useLogin();
  const navigation = useNavigation<any>();

  return (
    <LoginTemplate
      onLogin={async () => {
        await login("test@gmail.com", "123456");
        navigation.replace("Main");
      }}
      onGoSignUp={() => navigation.navigate("SignUp")}
    />
  );
}
