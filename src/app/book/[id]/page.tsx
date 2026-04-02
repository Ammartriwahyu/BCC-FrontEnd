import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import BookDetail from "@/features/books/components/BookDetail";
import BookSidebar from "@/features/books/components/BookSidebar";

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="bg-brown-50 min-h-screen">
      <Navbar2 />

      <div className="pt-[100px] max-w-[1200px] mx-auto flex flex-col md:flex-row gap-6 md:gap-10 px-4 md:px-6">
        {/* LEFT */}
        <div className="w-full md:w-[280px] shrink-0">
          <BookSidebar bookId={id} />
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <BookDetail bookId={id} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
