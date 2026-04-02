import { fetcher, setAccessToken } from "@/lib/fetcher";
import { AuthResponse } from "./types";

// register
export const register = async (data: {
    email: string;
    username: string;
    password: string;
    name: string;
}) => {
    return fetcher("/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

// login
export const login = async (data: {
    email: string;
    password: string;
}) => {
    const res = await fetcher<AuthResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
    });

    // simpan access token ke memory
    setAccessToken(res.accessToken);

    return res;
};

// logout
export const logout = async () => {
    const res = await fetcher("/auth/logout", {
        method: "POST",
    });

    setAccessToken("");
    return res;
};