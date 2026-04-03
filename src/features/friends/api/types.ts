export type RelationshipStatus =
  | "none"
  | "friends"
  | "request_sent"
  | "request_received";

export interface User {
  id: string;
  username: string;
  name: string;
  avatarUrl: string | null;
  relationshipStatus: RelationshipStatus;
}

export interface FriendRequest {
  id: string;
  senderId: string;
  receiverId: string;
  status: "PENDING" | "ACCEPTED" | "REJECTED" | "CANCELLED";
  createdAt: string;
}

export interface Paginated<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    limit: number;
  };
}