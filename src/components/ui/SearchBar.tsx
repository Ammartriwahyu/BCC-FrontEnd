export default function SearchBar() {
  return (
    <div className="flex w-[371px] items-center gap-20 pl-8 pr-[18px] py-3 rounded-[20px] bg-[#F3F3F6]">

      <input
        type="text"
        placeholder="Cari buku Favoritmu"
        className="text-black text-xl not-italic font-normal leading-[normal] font-poppins"
      />

    </div>
  );
}