import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full w-[400px]">
      
      <Input
        placeholder="Cari buku favoritmu"
        className="border-none shadow-none focus-visible:ring-0"
      />

      <Search className="w-5 h-5 text-muted-foreground" />

    </div>
  );
}