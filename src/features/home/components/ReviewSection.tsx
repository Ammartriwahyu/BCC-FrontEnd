import ReviewCard from "./ReviewCard";

export default function ReviewSection() {
  const reviews = [1,2,3,4]; // dummy

  return (
    <section>
      <h2 className="text-xl font-bold mb-6">
        Popular reviews this week
      </h2>

      <div className="grid grid-cols-2 gap-8">
        {reviews.map((_, i) => (
          <ReviewCard
            key={i}
            name="SunnySun"
            title="A Good Girl’s Guide to Murder"
            review="Move aside, Nancy Drew! There's a new teen detective in town..."
          />
        ))}
      </div>
    </section>
  );
}