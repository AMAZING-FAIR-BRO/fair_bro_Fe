// src/components/screens/LoginScreen.tsx
import React from "react";
import LoginTemplate from "../templates/LoginTemplate";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<any>;

export default function LoginScreen({ navigation }: Props) {
  return (
    <LoginTemplate
      onLogin={() => navigation.replace("Main")}
      onGoSignUp={() => navigation.navigate("SignUp")}
    />
  );
}
