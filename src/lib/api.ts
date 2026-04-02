const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// Access token stored in memory — short-lived (15 min), never in localStorage.
// Refresh token is an httpOnly cookie managed automatically by the browser.
let accessToken: string | null = null;

export function setAccessToken(token: string) {
  accessToken = token;
}

export function getAccessToken() {
  return accessToken;
}

export function clearAccessToken() {
  accessToken = null;
}

async function refreshAccessToken(): Promise<string> {
  const res = await fetch(`${BASE_URL}/auth/refresh`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    clearAccessToken();
    throw new Error("Session expired. Please log in again.");
  }

  const data = await res.json();
  setAccessToken(data.accessToken);
  return data.accessToken;
}

export async function apiClient<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
    credentials: "include",
  });

  if (res.status === 401) {
    const newToken = await refreshAccessToken();
    headers.Authorization = `Bearer ${newToken}`;

    const retryRes = await fetch(`${BASE_URL}${path}`, {
      ...options,
      headers,
      credentials: "include",
    });

    if (!retryRes.ok) {
      const error = await retryRes.json().catch(() => ({}));
      throw new Error(error.message ?? "Request failed");
    }

    return retryRes.json() as Promise<T>;
  }

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message ?? "Request failed");
  }

  return res.json() as Promise<T>;
}
