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

// Response interceptor: unwrap envelope { code, message, data } -> return data
apiClient.interceptors.response.use(
  (response) => {
    const body = response?.data;
    if (body && typeof body === "object") {
      if (Object.prototype.hasOwnProperty.call(body, "data")) {
        return body.data;
      }
      return body;
    }
    return body;
  },
  (error) => {
    const resp = error?.response?.data;
    let message = error?.message ?? "Request failed";
    if (resp && typeof resp === "object") {
      if (resp.message) message = resp.message;
      if (resp.data && resp.data.message) message = resp.data.message;
    }
    error.message = message;
    return Promise.reject(error);
  }
);
