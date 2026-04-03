import { fetcher } from "@/lib/fetcher";
import { Room, RoomDetail, RoomInvite } from "./types";

export const getRooms = () =>
    fetcher<{ data: Room[] }>("/rooms");

export const getRoomDetail = (id: string) =>
    fetcher<RoomDetail>(`/rooms/${id}`);

export const getRoomInvites = () =>
    fetcher<{ data: RoomInvite[] }>("/room-invites");