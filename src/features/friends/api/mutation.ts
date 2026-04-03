import { fetcher } from "@/lib/fetcher";
import { FriendRequest } from "./types";

// send request
export const sendFriendRequest = (receiverId: string) =>
    fetcher<FriendRequest>("/friend-requests", {
        method: "POST",
        body: JSON.stringify({ receiverId }),
    });

// respond request
export const respondFriendRequest = (
    id: string,
    action: "accept" | "reject" | "cancel"
) =>
    fetcher<FriendRequest>(`/friend-requests/${id}/respond`, {
        method: "PATCH",
        body: JSON.stringify({ action }),
    });

// unfriend
export const unfriend = (friendId: string) =>
    fetcher<void>(`/friends/${friendId}`, {
        method: "DELETE",
    });