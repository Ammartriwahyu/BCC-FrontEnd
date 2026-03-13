type BookCardProps = {
  image: string;
};

export default function BookCard({ image }: BookCardProps) {
  return (
    <div
      className="w-[373px] h-[565px] rounded-[20px] shadow-[0_4px_28px_rgba(0,0,0,0.2)] bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
}