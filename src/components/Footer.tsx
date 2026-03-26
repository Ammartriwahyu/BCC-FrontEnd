export default function Footer() {
  return (
    <footer className="px-20 py-16 bg-[#FFFDF9]">

      {/* TOP */}
      <div className="flex justify-between items-center mb-10">

        {/* LOGO */}
        <h1 className="text-xl font-bold">
          ReadWrite
        </h1>

        {/* MENU */}
        <div className="flex gap-10 text-sm text-gray-700">
          <span>Experience</span>
          <span>News</span>
          <span>About us</span>
          <span>Jobs</span>
          <span>Contact</span>
        </div>

        {/* ICON */}
        <div className="flex items-center gap-6 text-gray-700">

          {/* ini buat icon instagram */}
          <div className="w-5 h-5 bg-gray-400 rounded-full" />

          {/* ini buat icon phone */}
          <div className="w-5 h-5 bg-gray-400 rounded-full" />

          {/* ini buat icon email */}
          <div className="w-5 h-5 bg-gray-400 rounded-full" />

        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-sm text-gray-400">
        © Copyright 2019 - Lift Media
      </div>

    </footer>
  );
}