import { useState } from "react";
import { authApi } from "@/services/api/auth.api";
import { useAuthStore } from "@/services/store/auth.store";

type LoginResult = {
  success: boolean;
  message?: string;
};

export function useLogin() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const [loading, setLoading] = useState(false);

  const validateAccount = (account: string) => {
    if (!account || account.trim().length === 0) return false;
    // require gmail only
    const trimmed = account.trim().toLowerCase();
    const re = /^[^\s@]+@gmail\.com$/;
    return re.test(trimmed);
  };

  const login = async (
    account: string,
    password: string
  ): Promise<LoginResult> => {
    // Development shortcut: allow test account without calling API
    // Only active in dev mode to avoid leaking credentials in production
    // Use: test@gmail.com / 123456
    if (typeof __DEV__ !== "undefined" && __DEV__) {
      if (account === "test@gmail.com" && password === "123456") {
        setAuth("dev-token", { id: "dev", email: account });
        return { success: true };
      }
    }
    if (!validateAccount(account)) {
      return { success: false, message: "Sai tài khoản" };
    }
    if (!password) {
      return { success: false, message: "Sai mật khẩu" };
    }

    setLoading(true);
    try {
      const res = await authApi.login({ email: account, password });
      setAuth(res.access_token, res.user);
      return { success: true };
    } catch (err: any) {
      // map common errors
      const status = err?.response?.status;
      if (status === 401) {
        // show only wrong password message on auth failure
        return { success: false, message: "Sai mật khẩu" };
      }
      return { success: false, message: err?.message || "Lỗi khi đăng nhập" };
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
}
