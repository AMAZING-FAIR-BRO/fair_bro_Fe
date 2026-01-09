import { useAuthStore } from "@/services/store/auth.store";
import { authApi } from "@/services/api/auth.api";

export function useAuth() {
  const { setAuth, logout, isAuthenticated } = useAuthStore();

  const handleLogin = async (email: string, password: string) => {
    try {
      const res = await authApi.login({ email, password });
      // res: { access_token, user }
      setAuth(res.access_token, res.user);
    } catch (err: any) {
      throw new Error(err?.message || "Login failed");
    }
  };

  const handleGoogleLogin = async (googlePayload?: any) => {
    try {
      // If caller provides a google profile object with a client-side token only (quick demo), map it directly
      if (googlePayload && googlePayload.token && !googlePayload.id_token) {
        const token = googlePayload.token;
        const user = {
          id: googlePayload.user_id || googlePayload.id || "",
          email: googlePayload.email,
          name: googlePayload.full_name || googlePayload.name,
        };
        setAuth(token, user);
        return;
      }

      // If an `id_token` is present (recommended), send it to backend to exchange/verify
      if (googlePayload && googlePayload.id_token) {
        const res = await authApi.googleLogin({
          id_token: googlePayload.id_token,
        });
        setAuth(res.access_token, res.user);
        return;
      }

      // Fallback: call backend without payload
      const res = await authApi.googleLogin(googlePayload || {});
      setAuth(res.access_token, res.user);
    } catch (err: any) {
      throw new Error(err?.message || "Google login failed");
    }
  };

  return {
    isAuthenticated,
    handleLogin,
    handleGoogleLogin,
    logout,
  };
}
