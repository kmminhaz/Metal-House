import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://limitless-scrubland-96637.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h1 className='text-5xl font-bold mb-10'>Reviews</h1>
      <p className='mb-2 lg:block '>
        {" "}
        Swipe left and to see more reviews{" "}
      </p>
      <div className='lg:w-10/12 mx-auto'>
        <div className='lg:mx-5'>
          <div class='lg:carousel lg:carousel-center lg:w-full h-lg p-4 space-x-4 rounded-box'>
            {reviews.map((review) => (
              <div class='carousel-item'>
                <div className='bg-base-300 lg:w-1/2 text-white mx-auto my-2 lg:my-0 lg:py-16 lg:px-5 lg:rounded-full rounded-xl'>
                  <div className='py-4 lg:w-1/2 px-3 mx-auto'>
                    <h5>
                      <strong>
                        {review.reviewerName},<br />{" "}
                      </strong>{" "}
                      <span disabled>{review.reviewerEmail}</span>
                    </h5>
                    <p className='w-50 mx-auto py-3'>
                      {review.reviewerOpinion}
                    </p>
                    <p className='w-50 mx-auto py-3'>
                      Rating : {review.rating}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
