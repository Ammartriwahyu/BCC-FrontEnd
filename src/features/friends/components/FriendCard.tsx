export default function FriendCard({ user }: any) {
  return (
    <div className="bg-white rounded-2xl p-6 text-center w-full shadow-lg hover:shadow-xl transition">

      <img
        src={user.image}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />

      <h3 className="font-semibold">{user.name}</h3>
      <p className="text-sm text-neutral-60">{user.username}</p>

      <div className="flex justify-center gap-6 mt-4 text-sm">
        <div>
          <p className="font-semibold">{user.books}</p>
          <p className="text-neutral-60">Buku</p>
        </div>
        <div>
          <p className="font-semibold">{user.friends}</p>
          <p className="text-neutral-60">Teman</p>
        </div>
      </div>

      <button className="mt-4 border border-brown-100 text-brown-100 px-4 py-2 rounded-full">
        Lihat Profile
      </button>

    </div>
  );
}