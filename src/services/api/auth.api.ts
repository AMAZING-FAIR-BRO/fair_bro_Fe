import { apiClient } from "./client";
import { User } from "@/domain/models/User";

export type LoginPayload = {
  email: string;
  password: string;
};

export type AuthResponse = {
  access_token: string;
  user: User;
};

export const authApi = {
  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    const res = await apiClient.post("/auth/login", payload);
    return res as AuthResponse;
  },

  register: async (payload: LoginPayload): Promise<AuthResponse> => {
    const res = await apiClient.post("/auth/register", payload);
    return res as AuthResponse;
  },

  // Google login: backend may accept an id_token or full profile
  googleLogin: async (payload: any): Promise<AuthResponse> => {
    const res = await apiClient.post("/auth/google", payload);
    return res as AuthResponse;
  },
};
