import React from 'react';
import { Link } from 'react-router-dom';
import bolts from "../../../Assets/Images/bolts-nuts.jpg";

const Tools = () => {
    return (
      <div>
        <h1 className='text-5xl font-bold mb-16'> Tools </h1>
        <div className='container mx-auto flex justify-center'>
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-16'>
            <div class='card lg:w-96 w-80 bg-base-300 shadow-xl'>
              <figure>
                <img src={bolts} alt='Shoes' />
              </figure>
              <div class='card-body border-white text-left'>
                <h2 class='card-title'>NUTS & BOLTS</h2>
                <p className='text-left'>
                  Bolts can come in a wide range of different sizes and shapes,
                  but the basic production process generally remains the same.
                  It starts with cold forging steel wire into ...
                </p>
                <h5 className='text-xl font-bold'>
                  Price : <div class='badge badge-outline'>0.50 $</div>
                </h5>
                <h5 className='text-xl font-bold'>
                  Available Quantity: {" "}
                  <div class='badge badge-outline'>60 Ton</div>
                </h5>
                <h5 className='text-xl font-bold'>
                  Order minimum of :{" "}
                  <div class='badge badge-outline'>1 Ton</div>
                </h5>
                <div class='card-actions justify-end my-3'>
                  <Link to='/purchase' class='btn btn-primary'>Purchase</Link>
                </div>
              </div>
            </div>
            <div class='card lg:w-96 w-80 bg-base-300 shadow-xl'>
              <figure>
                <img src={bolts} alt='Shoes' />
              </figure>
              <div class='card-body border-white text-left'>
                <h2 class='card-title'>NUTS & BOLTS</h2>
                <p className='text-left'>
                  Bolts can come in a wide range of different sizes and shapes,
                  but the basic production process generally remains the same.
                  It starts with cold forging steel wire into ...
                </p>
                <h5 className='text-xl font-bold'>
                  Price : <div class='badge badge-outline'>0.50 $</div>
                </h5>
                <h5 className='text-xl font-bold'>
                  Available Quantity: {" "}
                  <div class='badge badge-outline'>60 Ton</div>
                </h5>
                <h5 className='text-xl font-bold'>
                  Order minimum of :{" "}
                  <div class='badge badge-outline'>1 Ton</div>
                </h5>
                <div class='card-actions justify-end my-3'>
                  <Link to='/purchase' class='btn btn-primary'>Purchase</Link>
                </div>
              </div>
            </div>
            <div class='card lg:w-96 w-80 bg-base-300 shadow-xl'>
              <figure>
                <img src={bolts} alt='Shoes' />
              </figure>
              <div class='card-body border-white text-left'>
                <h2 class='card-title'>NUTS & BOLTS</h2>
                <p className='text-left'>
                  Bolts can come in a wide range of different sizes and shapes,
                  but the basic production process generally remains the same.
                  It starts with cold forging steel wire into ...
                </p>
                <h5 className='text-xl font-bold'>
                  Price : <div class='badge badge-outline'>0.50 $</div>
                </h5>
                <h5 className='text-xl font-bold'>
                  Available Quantity: {" "}
                  <div class='badge badge-outline'>60 Ton</div>
                </h5>
                <h5 className='text-xl font-bold'>
                  Order minimum of :{" "}
                  <div class='badge badge-outline'>1 Ton</div>
                </h5>
                <div class='card-actions justify-end my-3'>
                  <Link to='/purchase' class='btn btn-primary'>Purchase</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Tools;