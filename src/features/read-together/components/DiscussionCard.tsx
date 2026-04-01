"use client";

import { useState } from "react";

export default function DiscussionCard({
    session,
    onClose,
}: any) {
    const [messages, setMessages] = useState(
        session.messages || [
            {
                id: 1,
                name: "Lala Move",
                text: "Aku baru kelar chapter 5! PLOT TWISTNYA GONG BANGET 😭",
            },
            {
                id: 2,
                name: "Udang Kedu",
                text: "OIHH IYAA SETUJU BANGET BANGETTT",
            },
        ]
    );

    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessage = {
            id: Date.now(),
            name: "You",
            text: input,
        };

        setMessages((prev: any) => [...prev, newMessage]);
        setInput("");
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            <div className="bg-white w-[90%] max-w-md rounded-2xl flex flex-col">

                {/* HEADER */}
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="font-bold text-lg">Ruang Diskusi</h2>
                    <button onClick={onClose}>✕</button>
                </div>

                {/* CHAT */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[400px]">

                    {messages.map((msg: any) => (
                        <div key={msg.id} className="flex gap-3">

                            <div className="w-8 h-8 bg-neutral-40 rounded-full" />

                            <div>
                                <p className="font-semibold text-sm">{msg.name}</p>
                                <p className="text-sm">{msg.text}</p>
                            </div>

                        </div>
                    ))}

                </div>

                {/* INPUT */}
                <div className="p-3 border-t flex gap-2 items-center">

                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Bagikan opinimu"
                        className="flex-1 bg-neutral-30 rounded-xl px-4 py-2 text-sm"
                    />

                    <button
                        onClick={handleSend}
                        className="bg-brown-100 text-white px-3 py-2 rounded-lg"
                    >
                        ➤
                    </button>

                </div>

            </div>
        </div>
    );
}