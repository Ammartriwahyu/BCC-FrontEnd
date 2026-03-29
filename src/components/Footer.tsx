import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-6 md:px-20 py-12 md:py-16 bg-[#FFFDF9]">

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0 mb-10 text-center md:text-left">

        <h1 className="text-xl font-bold">
          ReadWrite
        </h1>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm text-gray-700">
          <span>Experience</span>
          <span>News</span>
          <span>About us</span>
          <span>Jobs</span>
          <span>Contact</span>
        </div>

        <div>
          <Image
            src="/assets/icons/component/Social.png"
            alt="Social Media Icons"
            width={120}
            height={30}
          />
        </div>

      </div>

      <div className="text-sm text-gray-400 text-center md:text-left">
        © Copyright 2019 - Lift Media
      </div>

    </footer>
  );
}