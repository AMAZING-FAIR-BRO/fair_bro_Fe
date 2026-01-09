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
    return res.data;
  },

  register: async (payload: LoginPayload): Promise<AuthResponse> => {
    const res = await apiClient.post("/auth/register", payload);
    return res.data;
  },
};
