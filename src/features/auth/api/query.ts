import { fetcher } from "@/lib/fetcher";

export const refreshAuth = () =>
    fetcher<{ accessToken: string }>("/auth/refresh", {
        method: "POST",
    });