import { reviews } from "../data/reviews";

function Reviews() {
  return (
    <section className="p-5 md:p-10">

      {/* Reviews heading */}
      <h2 className="text-3xl md:text-4xl font-light mb-10">
        Reviews
      </h2>

      {/* Customer reviews */}
      {reviews.map((review) => (
        <article
          key={review.id}
          className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8"
        >

          {/* Customer information */}
          <div>
            <h3 className="font-light">
              {review.name}
            </h3>

            <p className="text-sm text-gray-400">
              {review.date}
            </p>

            <p className="mt-2">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </p>
          </div>

          {/* Review message */}
          <p className="md:col-span-3 text-gray-400 leading-6">
            {review.message}
          </p>

        </article>
      ))}
    </section>
  );
}

export default Reviews;