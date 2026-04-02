"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import { Button } from "@/components/ui/Button";
import { books } from "@/features/books/data/books";
import { friendsData } from "@/features/friends/data/friends";
import { addSession } from "@/features/read-together/data/sessions";

export default function ReadTogetherPage() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState<any>(null);

  const [groupName, setGroupName] = useState("");
  const [desc, setDesc] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [selectedFriends, setSelectedFriends] = useState<any[]>([]);

  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase()),
  );

  const handleAddFriend = (f: any) => {
    if (!selectedFriends.find((x) => x.id === f.id)) {
      setSelectedFriends([...selectedFriends, f]);
    }
  };

  const handleRemoveFriend = (id: string) => {
    setSelectedFriends(selectedFriends.filter((f) => f.id !== id));
  };

  const handleCreate = () => {
    if (!selectedBook || !groupName) return;

    addSession({
      id: Date.now().toString(),
      groupName,
      bookId: selectedBook.id,
      description: desc,
      startDate,
      endDate,
      currentPage: 1,
      totalPage: 20,
      members: selectedFriends.length + 1,
      status: "active",
    });

    router.push("/read-with-friends");
  };

  return (
    <div className="bg-[#FFFDF9] min-h-screen">
      <Navbar2 />

      <div className="pt-[120px] px-6 md:px-20 space-y-10">
        {/* BOOK SEARCH */}
        <div>
          <h2 className="font-semibold mb-2">Buku yang dipilih</h2>

          {!selectedBook && (
            <div>
              <input
                placeholder="Cari pilihan buku"
                className="w-full bg-gray-100 p-4 rounded-xl"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <div className="mt-4 space-y-2">
                  {filteredBooks.map((b) => (
                    <button
                      type="button"
                      key={b.id}
                      onClick={() => setSelectedBook(b)}
                      className="flex w-full gap-4 rounded-xl bg-white p-3 text-left shadow"
                    >
                      <img src={b.image} alt={b.title} className="w-12 h-16" />
                      <div>
                        <p className="font-semibold">{b.title}</p>
                        <p className="text-sm">{b.author}</p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* SELECTED BOOK */}
          {selectedBook && (
            <div className="flex gap-6 mt-4">
              <img
                src={selectedBook.image}
                alt={selectedBook.title}
                className="w-[120px] h-[180px] rounded-xl"
              />

              <div className="space-y-2">
                <h2 className="text-xl font-bold">{selectedBook.title}</h2>
                <p>{selectedBook.description}</p>

                <Button
                  className="bg-brown-100 text-white"
                  onClick={() => setSelectedBook(null)}
                >
                  Batalkan buku
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* DETAIL GROUP */}
        <div className="space-y-4">
          <h2 className="font-semibold">Detail grup</h2>

          <input
            placeholder="Masukkan nama grup"
            className="w-full bg-gray-100 p-4 rounded-xl"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />

          <textarea
            placeholder="Deskripsi grup"
            className="w-full bg-gray-100 p-4 rounded-xl"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        {/* DATE */}
        <div className="flex gap-4 flex-wrap">
          <input
            type="date"
            className="bg-gray-100 p-3 rounded-xl"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="date"
            className="bg-gray-100 p-3 rounded-xl"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        {/* FRIENDS */}
        <div>
          <h2 className="font-semibold mb-3">Tambahkan teman</h2>

          <div className="space-y-2">
            {selectedFriends.map((f) => (
              <div
                key={f.id}
                className="flex justify-between items-center bg-white p-3 rounded-xl"
              >
                <p>{f.name}</p>

                <button type="button" onClick={() => handleRemoveFriend(f.id)}>
                  ❌
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
            {friendsData.map((f) => (
              <button
                type="button"
                key={f.id}
                onClick={() => handleAddFriend(f)}
                className="border rounded-lg p-2"
              >
                {f.name}
              </button>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-end">
          <Button className="bg-brown-100 text-white" onClick={handleCreate}>
            Buat Room
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
