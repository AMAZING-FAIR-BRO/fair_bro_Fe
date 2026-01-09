import axios, { AxiosRequestConfig } from "axios";
import { useAuthStore } from "../store/auth.store";

export const apiClient = axios.create({
  baseURL: "http://10.0.2.2:8000", // Android emulator
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config: any) => {
  if (!config) return config;
  const token = useAuthStore.getState().token;
  config.headers = config.headers || {};
  if (token) {
    (config.headers as any).Authorization = `Bearer ${token}`;
  }
  return config;
});
