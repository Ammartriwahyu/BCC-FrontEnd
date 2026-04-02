"use client";

import { create } from "zustand";

type User = {
  name: string;
  username: string;
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

export const useUserStore = create<Store>((set) => ({
  user: {
    name: "Sany",
    username: "@tsanyr",
    bio: "",
    image: "",
    streak: 12,
    booksRead: 23,
    reviews: 12,
    friends: 6,
    showActivity: true,
  },
  updateUser: (data: Partial<User>) =>
    set((state: Store) => ({
      user: { ...state.user, ...data },
    })),
}));
