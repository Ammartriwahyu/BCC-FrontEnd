import { Card, CardContent } from "@/components/ui/card";

type Props = {
  title: string;
  description: string;
  fullWidth?: boolean;
};

export default function TrackingCard({ title, description, fullWidth }: Props) {
  return (
    <Card
      className={`
        relative overflow-hidden text-white
        bg-gradient-to-br from-[#4B1E1E] to-[#2B0F0F]
        rounded-2xl
        ${fullWidth ? "w-full h-[200px]" : "h-[180px]"}
      `}
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute right-0 bottom-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
      {/* ini efek lingkaran glow di desain */}

      <CardContent className="relative z-10 p-6 space-y-3">
        <h3 className="text-xl font-bold">{title}</h3>

        <p className="text-sm text-gray-200 max-w-[90%]">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}