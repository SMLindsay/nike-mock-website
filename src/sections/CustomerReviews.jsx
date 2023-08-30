import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      {/* HEADING */}
      <h3 className="font-palanquin text-center text-4xl font-bold dark:text-white">
        What Our
        <span className="text-coral-red"> Customers </span>
        Are Saying...
      </h3>
      {/* TEXT */}
      <p className="info-text m-auto mt-4 max-w-lg text-center"> Read genuine stories from our satisfied customers about their exceptional experience with us.</p>
      {/* REVIEW CARDS */}
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 dark:text-white">
        {/* MAPPING OVER REVIEW ARRAY TO CREATE REVIEW CARD COMPONENTS */}
        {reviews.map((review) => (
          <ReviewCard 
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews