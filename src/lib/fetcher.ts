let accessToken: string | null = null;

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export const getAccessToken = () => accessToken;

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function refreshToken() {
  const res = await fetch(`${BASE_URL}/auth/refresh`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    accessToken = null;
    throw new Error("Session expired");
  }

  const data = await res.json();
  accessToken = data.accessToken;
  return accessToken;
}

export async function fetcher<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const doFetch = async () => {
    return fetch(`${BASE_URL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(accessToken && {
          Authorization: `Bearer ${accessToken}`,
        }),
        ...(options.headers || {}),
      },
      credentials: "include",
    });
  };

  let res = await doFetch();

  // kalau token expired → refresh
  if (res.status === 401) {
    try {
      await refreshToken();
      res = await doFetch();
    } catch (err) {
      throw new Error("Unauthorized");
    }
  }

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Something went wrong");
  }

  if (res.status === 204) return null as T;

  return res.json();
}