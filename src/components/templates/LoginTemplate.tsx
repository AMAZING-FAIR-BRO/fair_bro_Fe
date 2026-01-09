// src/components/templates/LoginTemplate.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // ✅ ĐÚNG

type LoginResult = { success: boolean; message?: string };

type Props = {
  onLogin: (account: string, password: string) => Promise<LoginResult>;
  onGoSignUp: () => void;
  onGoogleSignIn?: () => void | Promise<void>;
};

export default function LoginTemplate({
  onLogin,
  onGoSignUp,
  onGoogleSignIn,
}: Props) {
  const [passwordSecure, setPasswordSecure] = useState(true);
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuATrrYqtoH13xJuFqfhjS33_Po37A8ysmtxsSNP98U4uAJR1fiNxLcZzY59vmUjI_byqCb7vG-48LDinVjApNlXqPb1ld5-eMQf2oUCbvNBQTSgUiGqjbW-pPzRFdlYxxsEk3Ir9xzS5nLeOLpqY_lZrgU0PLVPjb5-92uiLRplBegq0A8IURdi2cgX4Vn1dt8E_-VfVd01qH8litzdf5A6R9ev8gQlp6NOUpajVE28gezwt1SYhi8v5fpMWMm4LyX2cdb7Tnbd8Ps",
        }}
        style={styles.header}
      >
        <View style={styles.brand}>
          <View style={styles.logo}>
            <Ionicons name="wallet" size={22} color="#fff" />
          </View>
          <Text style={styles.brandText}>FairBro</Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.title}>Chào mừng trở lại!</Text>
        <Text style={styles.subtitle}>
          Đăng nhập để bắt đầu chia sẻ chi phí.
        </Text>

        <Text style={styles.label}>Email hoặc tên người dùng</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            value={account}
            onChangeText={setAccount}
            placeholder="user@example.com"
            placeholderTextColor="#93adc8"
            style={styles.input}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <Ionicons name="person-outline" size={20} color="#93adc8" />
        </View>

        <Text style={styles.label}>Mật khẩu</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            placeholderTextColor="#93adc8"
            secureTextEntry={passwordSecure}
            style={styles.input}
          />
          <TouchableOpacity onPress={() => setPasswordSecure((s) => !s)}>
            <Ionicons
              name={passwordSecure ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#93adc8"
            />
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.forgot}>
          <Text style={styles.link}>Quên mật khẩu?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.loginBtn, loading && styles.loginBtnDisabled]}
          onPress={async () => {
            setError(undefined);
            // require account field
            if (!account || account.trim() === "") {
              setError("Vui lòng nhập tài khoản");
              return;
            }
            setLoading(true);
            try {
              const res = await onLogin(account, password);
              if (!res.success) setError(res.message || "Đăng nhập thất bại");
            } finally {
              setLoading(false);
            }
          }}
          disabled={loading}
        >
          <Text style={styles.loginText}>
            {loading ? "Đang xử lý..." : "Đăng nhập"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.googleBtn}
          onPress={async () => {
            try {
              setError(undefined);
              setLoading(true);
              if (typeof onGoogleSignIn === "function") {
                await onGoogleSignIn();
              }
            } catch (err: any) {
              setError(err?.message || "Đăng nhập Google thất bại");
            } finally {
              setLoading(false);
            }
          }}
          disabled={loading}
        >
          <View style={styles.googleInner}>
            <Ionicons name="logo-google" size={18} color="#de5246" />
            <Text style={styles.googleText}>Đăng nhập bằng Google</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Bạn chưa có tài khoản?
          <Text style={styles.link} onPress={onGoSignUp}>
            {" "}
            Đăng ký ngay
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f9ff",
    justifyContent: "space-between",
  },
  header: {
    height: 140,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: "#4a90e2",
  },
  brand: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  brandText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "700",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 6,
    color: "#1b365f",
  },
  subtitle: {
    color: "#6e859b",
    marginBottom: 16,
  },
  label: {
    color: "#567a9a",
    marginTop: 12,
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eaf1fb",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    color: "#123",
    padding: 0,
  },
  forgot: {
    alignSelf: "flex-end",
    marginTop: 8,
  },
  link: {
    color: "#2b7bd3",
    fontWeight: "600",
  },
  loginBtn: {
    marginTop: 16,
    backgroundColor: "#2b7bd3",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  loginBtnDisabled: {
    opacity: 0.6,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  googleBtn: {
    marginTop: 12,
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e6eef8",
  },
  googleInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  googleText: {
    marginLeft: 8,
    color: "#2b2b2b",
    fontWeight: "600",
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e6eef8",
    alignItems: "center",
  },
  footerText: {
    color: "#6e859b",
  },
  errorText: {
    color: "#d9534f",
    marginTop: 8,
    marginBottom: 4,
  },
});
