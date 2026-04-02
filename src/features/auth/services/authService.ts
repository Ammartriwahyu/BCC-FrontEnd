import { apiClient, clearAccessToken, setAccessToken } from "@/lib/api";
import type {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from "../types/auth.types";

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const data = await apiClient<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  setAccessToken(data.accessToken);
  return data;
}

export async function register(
  payload: RegisterPayload,
): Promise<RegisterResponse> {
  return apiClient<RegisterResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function logout(): Promise<void> {
  await apiClient("/auth/logout", { method: "POST" });
  clearAccessToken();
}
