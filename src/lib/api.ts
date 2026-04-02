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
