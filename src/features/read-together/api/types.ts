export interface Room {
    id: string;
    title: string;
    status: "ACTIVE" | "COMPLETED" | "CANCELLED";
    startDate: string;
    endDate: string;
}

export interface RoomDetail extends Room {
    book: {
        id: string;
        title: string;
        author: string;
        totalPages: number;
    };
    host: {
        id: string;
        username: string;
        name: string;
    };
    members: {
        userId: string;
        username: string;
        currentPage: number;
        totalPages: number;
    }[];
}

export interface RoomInvite {
    id: string;
    status: "PENDING" | "ACCEPTED" | "REJECTED";
}