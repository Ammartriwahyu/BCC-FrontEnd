import React from "react";

export default function AuthLayout({
    children,
    illustration,
}: {
    children: React.ReactNode;
    illustration?: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex">

            {/* LEFT */}
            <div className="w-1/2 bg-[#F6F1ED] flex items-center justify-center px-20">
                <div className="w-full max-w-[400px]">
                    {children}
                </div>
            </div>

            {/* RIGHT */}
            <div className="w-1/2 bg-gradient-to-br from-[#F28C4B] to-[#C66A3D] flex items-center justify-center">

                {/* ini tempat ilustrasi */}
                {illustration || (
                    <div className="w-[300px] h-[300px] bg-white/20 rounded-xl" />
                )}

            </div>

        </div>
    );
}