import React from "react";
import review1 from "../../../Assets/Images/reviews/customer-1.png";
import review2 from "../../../Assets/Images/reviews/customer-2.png";
import review3 from "../../../Assets/Images/reviews/customer-3.png"

const Reviews = () => {
  return (
    <div>
      <h1 className='text-5xl font-bold mb-16'>Reviews</h1>
      <div className='lg:w-10/12 mx-auto'>
        <div className="lg:mx-5">
          <div className='carousel w-full mx-auto'>
            <div id='slide1' className='carousel-item relative w-full'>
              <div className='bg-base-300 text-white mx-auto py-16 px-5 rounded-full'>
                <div className='lg:w-1/4 mx-auto'>
                  <img
                    className='block w-1/4 mx-auto py-2'
                    src={review1}
                    alt='First slide'
                  />
                </div>
                <div className='pt-4 lg:w-1/2 w-3/4 mx-auto'>
                  <h5>
                    <strong>Mr. Fokre Korim,</strong>{" "}
                    <span disabled>Director of Honda.</span>
                  </h5>
                  <p className='w-50 mx-auto py-3'>
                    Nice place to store necessery items and supply. It has been
                    3 years that i was supplying into this warehouse. It has
                    never happend that the payment will be due. I am happy to be
                    a part of business chain of grage bikey moto.
                  </p>
                </div>
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a href='#slide3' className='btn btn-circle'>
                    ❮
                  </a>
                  <a href='#slide2' className='btn btn-circle'>
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <div id='slide2' className='carousel-item relative w-full'>
              <div className='bg-base-300 text-white mx-auto py-16 px-5 rounded-full'>
                <div className='lg:w-1/4 mx-auto'>
                  <img
                    className='block w-1/4 mx-auto py-2'
                    src={review2}
                    alt='First slide'
                  />
                </div>
                <div className='pt-4 lg:w-1/2 w-3/4 mx-auto'>
                  <h5>
                    <strong>Mr. Fokre Korim,</strong>{" "}
                    <span disabled>Director of Ramsey & Co.</span>
                  </h5>
                  <p className='w-50 mx-auto py-3'>
                    This is a well known and well decorated warehouse. Here
                    every product's are organized and kept up to date. items
                    that are shortage around the world can easily be found here.
                  </p>
                </div>
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a href='#slide1' className='btn btn-circle ml-2'>
                    ❮
                  </a>
                  <a href='#slide3' className='btn btn-circle mr-2'>
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <div id='slide3' className='carousel-item relative w-full'>
              <div className='bg-base-300 text-white mx-auto py-16 px-5 rounded-full'>
                <div className='lg:w-1/4 mx-auto'>
                  <img
                    className='block w-1/4 mx-auto py-2'
                    src={review3}
                    alt='First slide'
                  />
                </div>
                <div className='pt-4 lg:w-1/2 w-3/4 mx-auto'>
                  <h5>
                    <strong>K. M. Minhaz Uddin</strong>{" "}
                    <span disabled>Chairman, Garage Bikey Moto</span>
                  </h5>
                  <p className='w-50 mx-auto py-3'>
                    The items are kept so organized and simple manner that i
                    feel proud that i work here and it gives me a great pleasur.
                    We can assure you that or to any commpany that keeping
                    inventories in this ware house and getting any product from
                    this is going to be the total fresh and new.
                  </p>
                </div>
                <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                  <a href='#slide2' className='btn btn-circle'>
                    ❮
                  </a>
                  <a href='#slide1' className='btn btn-circle'>
                    ❯
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
