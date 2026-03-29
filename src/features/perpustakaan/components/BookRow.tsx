export default function BookRow({ book }: any) {
    return (
        <div className="flex flex-col md:flex-row gap-6 border-b pb-6">

            {/* IMAGE */}
            <img
                src={book.image}
                className="w-[100px] md:w-[120px] h-[150px] md:h-[180px] object-cover rounded-xl shadow-card"
            />

            {/* CONTENT */}
            <div className="flex-1 space-y-3">

                <h2 className="subheading">{book.title}</h2>

                <p className="text-neutral-80 max-w-[700px]">
                    {book.description}
                </p>

                <div>
                    <p className="font-semibold">Tentang</p>
                    <p className="text-sm">{book.author}</p>
                    <p className="text-sm text-neutral-60">
                        400 Halaman, Paperback
                    </p>
                </div>

            </div>

        </div>
    );
}