export default function Footer() {
  return (
    <footer className="w-full bg-[#E4D9D4] flex justify-between items-center px-[76px] py-[104px]">

      <div>
        <h1 className="text-white font-bold text-[36px] font-Poppins">
          ReadWrite
        </h1>
      </div>

      <div className="flex flex-col gap-4 w-[415px]">

        <div className="flex items-center gap-3 text-white">
         
          <span>@lorem ipsum</span>
        </div>

        <div className="flex items-center gap-3 text-white">
   
          <span>0812-6767-9987</span>
        </div>

        <div className="flex items-center gap-3 text-white">
     
          <span>ReadWrite@gmail.com</span>
        </div>

      </div>

    </footer>
  );
}