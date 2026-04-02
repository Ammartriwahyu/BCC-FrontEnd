import { fetcher } from "@/lib/fetcher";
import { Book, Tracker } from "./types";

export const searchBooks = (q: string) =>
    fetcher<{ data: Book[] }>(`/books/search?q=${q}`);

export const getTrackers = () =>
    fetcher<{ data: Tracker[] }>("/readings");

export const getTrackerDetail = (id: string) =>
    fetcher(`/readings/${id}`);

export const getSessions = (id: string) =>
    fetcher(`/readings/${id}/sessions`);