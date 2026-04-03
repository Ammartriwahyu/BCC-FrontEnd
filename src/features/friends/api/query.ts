import { fetcher } from "@/lib/fetcher";
import { User, FriendRequest, Paginated } from "./types";

// search user
export const searchUsers = (q: string, page = 1, limit = 10) =>
    fetcher<Paginated<User>>(
        `/users/search?q=${q}&page=${page}&limit=${limit}`
    );

// get friend requests
export const getFriendRequests = (type = "received") =>
    fetcher<Paginated<FriendRequest>>(
        `/friend-requests?type=${type}`
    );

// get friends list
export const getFriends = () =>
    fetcher<Paginated<User>>(`/friends`);