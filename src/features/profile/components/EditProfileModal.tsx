"use client";

import { useUserStore } from "@/lib/userStore";
import { useState } from "react";

export default function EditProfileModal({ onClose }: any) {
    const { user, updateUser } = useUserStore();

    const [name, setName] = useState(user.name);
    const [username, setUsername] = useState(user.username);
    const [bio, setBio] = useState(user.bio);
    const [showActivity, setShowActivity] = useState(user.showActivity);

    const handleSave = () => {
        updateUser({ name, username, bio, showActivity });
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

            {/* CARD */}
            <div className="bg-[#F6F1ED] w-[650px] max-h-[90vh] overflow-y-auto rounded-2xl p-8 space-y-6">

                {/* TITLE */}
                <h2 className="text-2xl font-bold">Edit Profile</h2>

                {/* FOTO */}
                <div className="space-y-2">
                    <p className="font-semibold">Foto profile</p>

                    <div className="flex items-center gap-4">

                        <div className="relative w-20 h-20 rounded-full bg-gray-300">
                            {/* isi foto profil */}

                            <div className="absolute bottom-0 right-0 w-7 h-7 bg-[#6B4F4F] rounded-full flex items-center justify-center text-white">
                                {/* isi icon kamera */}
                            </div>
                        </div>

                        <div className="text-sm text-gray-600">
                            <p>Ukuran gambar maksimal 2MB. Format yang didukung: JPG, PNG</p>
                            <button className="text-[#6B4F4F] font-medium mt-1">
                                Hapus foto
                            </button>
                        </div>

                    </div>
                </div>

                {/* NAMA */}
                <div className="space-y-2">
                    <label className="font-medium">Nama</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border outline-none"
                    />
                </div>

                {/* USERNAME */}
                <div className="space-y-2">
                    <label className="font-medium">Username</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border outline-none"
                    />
                    <p className="text-xs text-gray-400">
                        Username hanya boleh mengandung huruf, angka, dan underscore
                    </p>
                </div>

                {/* BIO */}
                <div className="space-y-2">
                    <label className="font-medium">Bio</label>

                    <textarea
                        value={bio}
                        maxLength={200}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border outline-none h-[120px]"
                    />

                    <div className="text-right text-xs text-gray-400">
                        {bio.length}/200 karakter
                    </div>
                </div>

                {/* PRIVACY */}
                <div className="space-y-2">
                    <h3 className="font-semibold">Pengaturan Privasi</h3>

                    <div className="flex justify-between items-center">

                        <div>
                            <p className="font-medium">Tampilkan Reading Activity</p>
                            <p className="text-sm text-gray-400">
                                Teman bisa melihat buku yang sedang Anda baca
                            </p>
                        </div>

                        {/* SWITCH */}
                        <button
                            onClick={() => setShowActivity(!showActivity)}
                            className={`w-12 h-6 rounded-full flex items-center px-1 transition ${showActivity ? "bg-[#6B4F4F]" : "bg-gray-300"
                                }`}
                        >
                            <div
                                className={`w-4 h-4 bg-white rounded-full transition ${showActivity ? "translate-x-6" : ""
                                    }`}
                            />
                        </button>

                    </div>
                </div>

                {/* BUTTON */}
                <div className="flex justify-end gap-4 pt-4">

                    <button
                        onClick={onClose}
                        className="px-6 py-2 rounded-full border border-[#6B4F4F] text-[#6B4F4F]"
                    >
                        Batal
                    </button>

                    <button
                        onClick={handleSave}
                        className="px-6 py-2 rounded-full bg-[#4B1E1E] text-white"
                    >
                        Simpan Perubahan
                    </button>

                </div>

            </div>
        </div>
    );
}