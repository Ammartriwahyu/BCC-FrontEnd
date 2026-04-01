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
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

            <div className="bg-[#F6F1ED] w-full max-w-[650px] max-h-[90vh] overflow-y-auto rounded-2xl p-4 md:p-8 space-y-6">

                <h2 className="text-xl md:text-2xl font-bold">Edit Profile</h2>

                <div className="space-y-2">
                    <p className="font-semibold">Foto profile</p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-300">
                            <div className="absolute bottom-0 right-0 w-6 h-6 md:w-7 md:h-7 bg-[#6B4F4F] rounded-full" />
                        </div>

                        <div className="text-xs md:text-sm text-gray-600">
                            <p>Ukuran gambar maksimal 2MB. Format JPG, PNG</p>
                            <button className="text-[#6B4F4F] font-medium mt-1">
                                Hapus foto
                            </button>
                        </div>

                    </div>
                </div>

                <InputField label="Nama" value={name} onChange={setName} />
                <InputField label="Username" value={username} onChange={setUsername} />

                <div className="space-y-2">
                    <label className="font-medium">Bio</label>
                    <textarea
                        value={bio}
                        maxLength={200}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border outline-none h-[100px] md:h-[120px]"
                    />
                    <div className="text-right text-xs text-gray-400">
                        {bio.length}/200 karakter
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-sm">Tampilkan Reading Activity</p>
                    <button
                        onClick={() => setShowActivity(!showActivity)}
                        className={`w-10 md:w-12 h-5 md:h-6 rounded-full flex items-center px-1 ${showActivity ? "bg-[#6B4F4F]" : "bg-gray-300"}`}
                    >
                        <div className={`w-3 h-3 md:w-4 md:h-4 bg-white rounded-full ${showActivity ? "translate-x-5 md:translate-x-6" : ""}`} />
                    </button>
                </div>

                <div className="flex justify-end gap-3 md:gap-4">
                    <button onClick={onClose} className="px-4 md:px-6 py-2 border rounded-full">
                        Batal
                    </button>
                    <button onClick={handleSave} className="px-4 md:px-6 py-2 bg-[#4B1E1E] text-white rounded-full">
                        Simpan
                    </button>
                </div>

            </div>
        </div>
    );
}

function InputField({ label, value, onChange }: any) {
    return (
        <div className="space-y-2">
            <label className="font-medium">{label}</label>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white border outline-none"
            />
        </div>
    );
}