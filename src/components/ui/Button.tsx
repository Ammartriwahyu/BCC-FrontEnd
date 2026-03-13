type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 rounded-md bg-black text-white hover:opacity-80 transition"
    >
      {children}
    </button>
  );
}