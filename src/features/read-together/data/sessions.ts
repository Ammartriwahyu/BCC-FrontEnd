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

export let sessions: Session[] = [];

export const addSession = (newSession: Session) => {
    sessions.push(newSession);
};

export const updateSession = (id: string, updatedData: Partial<Session>) => {
    sessions = sessions.map((s) =>
        s.id === id ? { ...s, ...updatedData } : s
    );
};

export const deleteSession = (id: string) => {
    sessions = sessions.filter((s) => s.id !== id);
};