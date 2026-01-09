import { useState } from "react";
import { authApi } from "@/services/api/auth.api";
import { useAuthStore } from "@/services/store/auth.store";

export function useLogin() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await authApi.login({ email, password });
      setAuth(res.access_token, res.user);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
}
