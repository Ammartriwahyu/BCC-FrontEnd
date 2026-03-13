export default function FriendCard() {
  return (
    <div className="flex h-[648px] items-center gap-[233px] pt-[66px] pr-[245px] pb-[67px]">

      <div className="flex w-[520px] flex-col items-start gap-[36px]">
        <h3 className="self-stretch text-black font-poppins text-[40px] font-bold">
          Add Friends
        </h3>

        <p className="self-stretch text-black font-poppins text-[30px] font-medium">
          Tambahkan teman untuk melihat aktivitas membaca mereka,
          berbagi rekomendasi buku, dan menemukan bacaan baru dari
          orang lain.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md h-[260px]" />

    </div>
  );
}