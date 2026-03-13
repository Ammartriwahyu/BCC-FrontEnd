type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2.5 px-24 py-4 rounded-[20px] bg-[#A98574] text-white text-[28px] not-italic font-medium leading-[normal]"
    >
      {children}
    </button>
  );
}