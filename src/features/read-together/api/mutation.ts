import { fetcher } from "@/lib/fetcher";

// create room
export const createRoom = (data: {
    bookId: string;
    title: string;
    description?: string;
    startDate: string;
    endDate: string;
}) =>
    fetcher("/rooms", {
        method: "POST",
        body: JSON.stringify(data),
    });

// invite
export const inviteToRoom = (roomId: string, inviteeId: string) =>
    fetcher(`/rooms/${roomId}/invites`, {
        method: "POST",
        body: JSON.stringify({ inviteeId }),
    });

// respond invite
export const respondInvite = (
    id: string,
    action: "accept" | "reject"
) =>
    fetcher(`/room-invites/${id}/respond`, {
        method: "PATCH",
        body: JSON.stringify({ action }),
    });

// progress
export const updateRoomProgress = (roomId: string, data: any) =>
    fetcher(`/rooms/${roomId}/progress`, {
        method: "POST",
        body: JSON.stringify(data),
    });

// comment
export const createComment = (roomId: string, content: string) =>
    fetcher(`/rooms/${roomId}/comments`, {
        method: "POST",
        body: JSON.stringify({ content }),
    });

// like
export const likeComment = (id: string) =>
    fetcher(`/rooms/comments/${id}/likes`, {
        method: "POST",
    });

export const unlikeComment = (id: string) =>
    fetcher(`/rooms/comments/${id}/likes`, {
        method: "DELETE",
    });