"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { login, register } from "../services/authService";
import type { LoginPayload, RegisterPayload } from "../types/auth.types";

export function useLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleLogin(payload: LoginPayload) {
    setLoading(true);
    setError(null);
    try {
      await login(payload);
      router.push("/home");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Login gagal");
    } finally {
      setLoading(false);
    }
  }

  return { handleLogin, loading, error };
}

export function useRegister() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleRegister(payload: RegisterPayload) {
    setLoading(true);
    setError(null);
    try {
      await register(payload);
      router.push("/login");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Register gagal");
    } finally {
      setLoading(false);
    }
  }

  return { handleRegister, loading, error };
}
