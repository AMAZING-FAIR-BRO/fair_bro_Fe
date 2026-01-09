import { useState } from "react";
import { authApi } from "@/services/api/auth.api";
import { useAuthStore } from "@/services/store/auth.store";

export function useSignUp() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const [loading, setLoading] = useState(false);

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    try {
      const res = await authApi.register({ email, password });
      setAuth(res.access_token, res.user);
    } finally {
      setLoading(false);
    }
  };

  return { signUp, loading };
}
