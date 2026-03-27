export default function ReviewCard({ review }: any) {
    return (
        <div className="border-b pb-4">

            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-neutral-40 rounded-full" />
                <p className="font-semibold">{review.user}</p>
            </div>

            <div className="mt-2">{"⭐".repeat(review.rating)}</div>

            <p className="text-sm mt-2">{review.text}</p>

        </div>
    );
}