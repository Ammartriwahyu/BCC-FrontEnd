import Image from "next/image";

type Props = {
  name: string;
  title: string;
  review: string;
};

export default function ReviewCard({ name, title, review }: Props) {
  return (
    <div className="flex gap-4 border-b pb-6">

      {/* LEFT */}
      <div className="flex-1">
        <p className="text-sm font-semibold">{name}</p>

        <h3 className="font-bold">{title}</h3>

        <p className="text-sm text-gray-600 mt-2">
          {review}
        </p>

        <p className="text-xs text-gray-400 mt-2">
          818 suka • 31 komentar
        </p>
      </div>

      {/* RIGHT */}
      <div className="w-[100px] h-[140px] bg-gray-300 rounded-lg">
        <Image src="/assets/images/Books/murder.png" alt={title} width={100} height={140} />
      </div>

    </div>
  );
}