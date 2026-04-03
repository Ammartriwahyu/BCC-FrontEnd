export interface Book {
    id: string;
    title: string;
    author: string;
    totalPages: number;
    coverUrl?: string;
}

export interface Tracker {
    id: string;
    currentPage: number;
    status: "ACTIVE" | "COMPLETED" | "PAUSED";
}