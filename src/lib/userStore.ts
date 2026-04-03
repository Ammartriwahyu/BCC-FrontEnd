"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
    name: string;
    username: string;
    email?: string;
    password?: string;
    bio: string;
    image: string;
    streak: number;
    booksRead: number;
    reviews: number;
    friends: number;
    showActivity: boolean;
};

type Store = {
    user: User;
    updateUser: (data: Partial<User>) => void;
};

export const useUserStore = create<Store>()(
    persist(
        (set) => ({
            user: {
                name: "Sany",
                username: "@tsanyr",
                email: "sany@example.com",
                password: "Sany1234",
                bio: "",
                image: "/assets/images/user/ProfilePict.png",
                streak: 49,
                booksRead: 23,
                reviews: 12,
                friends: 6,
                showActivity: true,
            },
            updateUser: (data) =>
                set((state) => ({
                    user: { ...state.user, ...data },
                })),
        }),
        {
            name: "user-storage",
        }
    )
);