import { fetcher } from "@/lib/fetcher";

// create book
export const createBook = (data: {
    title: string;
    author: string;
    totalPages: number;
    coverUrl?: string;
}) =>
    fetcher("/books", {
        method: "POST",
        body: JSON.stringify(data),
    });

// create tracker
export const createTracker = (bookId: string) =>
    fetcher("/readings", {
        method: "POST",
        body: JSON.stringify({ bookId }),
    });

// update tracker
export const updateTracker = (id: string, data: any) =>
    fetcher(`/readings/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
    });

// add session
export const createSession = (id: string, data: any) =>
    fetcher(`/readings/${id}/sessions`, {
        method: "POST",
        body: JSON.stringify(data),
    });