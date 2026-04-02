import Image from "next/image";

type Props = {
  name: string;
  title: string;
  review: string;
};

export default function ReviewCard({ name, title, review }: Props) {
  return (
    <div className="flex gap-3 md:gap-4 border-b pb-4 md:pb-6">
      {/* LEFT */}
      <div className="flex-1">
        <p className="text-sm font-semibold">{name}</p>

        <h3 className="font-bold text-sm md:text-base">{title}</h3>

        <p className="text-xs md:text-sm text-gray-600 mt-2">{review}</p>

        <p className="text-[10px] md:text-xs text-gray-400 mt-2">
          818 suka • 31 komentar
        </p>
      </div>

      {/* RIGHT */}
      <div className="w-[80px] h-[110px] md:w-[100px] md:h-[140px] bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src="/assets/images/Books/murder.png"
          alt={title}
          width={100}
          height={140}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
