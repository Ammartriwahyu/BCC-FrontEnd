export default function SearchBar() {
  return (
    <div className="flex justify-between items-center self-stretch rounded-[20px] bg-[#F3F3F6] py-[8px] pr-[12px] pl-[40px]">

      <input
        type="text"
        placeholder="Cari buku Favoritmu"
        className="text-[#3C3C3C] font-poppins text-[20px] font-normal"
      />

      <button className="text-sm">
        🔍
      </button>

    </div>
  );
}