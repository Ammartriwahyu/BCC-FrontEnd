"use client";

import { useState, useRef, useEffect } from "react";
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/Footer";
import SearchBar from "@/components/ui/SearchBar";

import FriendCard from "@/features/friends/components/FriendCard";
import SearchFriendCard from "@/features/friends/components/SearchFriendCard";

import { friendsData, searchUser } from "@/features/friends/data/friends";

export default function TemanPage() {
    const [friends, setFriends] = useState(friendsData);
    const [showSearch, setShowSearch] = useState(false);

    const wrapperRef = useRef<HTMLDivElement>(null);

    // klik luar → close search
    useEffect(() => {
        function handleClickOutside(e: any) {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setShowSearch(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleAddFriend = () => {
        const newFriend = {
            ...searchUser,
            books: 0,
            friends: 0,
        };

        setFriends((prev) => [...prev, newFriend]);
        setShowSearch(false);
    };

    return (
        <div className="bg-brown-50 min-h-screen">

            <Navbar2 />

            <div className="pt-[100px] max-w-[1200px] mx-auto px-6">

                {/* TITLE */}
                <h1 className="heading mb-4">Teman</h1>
                <hr className="mb-6" />

                {/* SEARCH */}
                <div ref={wrapperRef} className="relative mb-10">

                    <div onClick={() => setShowSearch(true)}>
                        <div className="w-full max-w-[900px] mx-auto">
                            <SearchBar placeholder="Cari teman" />
                        </div>
                    </div>

                    {showSearch && (
                        <div className="mt-4">
                            <SearchFriendCard
                                user={searchUser}
                                onAdd={handleAddFriend}
                            />
                        </div>
                    )}

                </div>

                {/* FRIEND LIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {friends.map((user) => (
                        <FriendCard key={user.id} user={user} />
                    ))}

                </div>

            </div>

            <Footer />

        </div>
    );
}