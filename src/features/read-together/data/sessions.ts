// 🔥 sessions.ts

export type Session = {
    id: string;
    groupName: string;
    bookId: string;
    description: string;
    startDate: string;
    endDate: string;
    currentPage: number;
    totalPage: number;
    members: number;
    status: "active" | "finished";
};

export let sessions: any[] = [];

export const addSession = (newSession: any) => {
    sessions.push(newSession);
};

export const updateSession = (id: string, updated: any) => {
    sessions = sessions.map((s) =>
        s.id === id ? { ...s, ...updated } : s
    );
};

export const deleteSession = (id: string) => {
    sessions = sessions.filter((s) => s.id !== id);
};