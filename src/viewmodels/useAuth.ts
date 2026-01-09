import { useAuthStore } from "@/services/store/auth.store";

export function useAuth() {
  const { setAuth, logout, isAuthenticated } = useAuthStore();

  const handleLogin = async (email: string, password: string) => {
    // TODO: gọi API auth
    setAuth("dev-token", { id: "1", email });
  };

  return {
    isAuthenticated,
    handleLogin,
    logout,
  };
}
