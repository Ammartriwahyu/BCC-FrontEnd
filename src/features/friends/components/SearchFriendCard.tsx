import { Button } from "@/components/ui/Button";

export default function SearchFriendCard({ user, onAdd }: any) {
    return (
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-card">

            <div className="flex items-center gap-4">
                <img src={user.image} className="w-12 h-12 rounded-full" />
                <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-neutral-60">{user.username}</p>
                </div>
            </div>

            <Button
                onClick={onAdd}
                className="bg-[#341616] text-white px-6 py-2 rounded-full flex items-center gap-2"
            >
                Tambah +
            </Button>

        </div>
    );
}