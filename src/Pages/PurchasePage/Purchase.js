import React from "react";
import { Link } from "react-router-dom";
import nutebolts from "../../Assets/Images/bolts-nuts.jpg";

const Purchase = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <div className='lg:w-1/2 mx-auto my-10'>
        {/* <div className='text-center lg:w-1/2 mx-auto py-2 bg-base-300 rounded-2xl'>
          <h4 className='text-xl font-bold pb-2 text-white'>
            {" "}
            Your Cradentials{" "}
          </h4>
          <p>kmminhaj.khan@gmail.com</p>
          <p>K. M. Minhaz Uddin</p>
        </div> */}
        <div class='divider font-bold text-xl'>ITEM DETAILS</div>
        <div className='p-10 text-left bg-base-300 rounded-lg'>
          <img src={nutebolts} alt='' className='lg:w-1/2 mx-auto rounded-lg' />
          <h3 className='text-2xl text-center py-2'>Nutes & Bolts</h3>
          <p className='text-xl pb-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            natus quisquam doloribus, voluptatum possimus cum tenetur fuga
            voluptates, quam non, itaque a maxime reiciendis nihil fugit unde
            quidem inventore ducimus?
          </p>
          <h5 className='text-xl font-bold'>
            Price : <div class='badge badge-outline'>0.50 $</div>
          </h5>
          <h5 className='text-xl font-bold'>
            Available Quantity : <div class='badge badge-outline text-xl p-2'>60000</div>
          </h5>
          <h5 className='text-xl font-bold'>
            Order Minimum : <div class='badge badge-outline'>1 Ton</div>
          </h5>
        </div>
        <div class='divider font-bold'>ORDER HERE</div>
        <div className='p-10 text-left bg-base-300 rounded-lg'>
          <h3 className='text-center font-bold lg:text-4xl text-3xl'>ORDER</h3>
          {/* <p className='text-xl mt-2 text-success'> Hello Minhaz! </p> */}
          {/* <p className='text-xl mt-2 text-error'> Hello Minhaz! </p> */}
          <div className='card mt-5 my-10 mx-auto shadow-2xl bg-base-200'>
            <div className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Your Phone Number</span>
                </label>
                <input
                  type='text'
                  placeholder='phone'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Shipment Address</span>
                </label>
                <input
                  type='text'
                  placeholder='address'
                  className='input input-bordered'
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Order Quantity</span>
                </label>
                <input
                  type='text'
                  placeholder='Order Quantity'
                  className='input input-bordered'
                  value='1000'
                />
              </div>
              <div className='form-control mt-6'>
                {/* disabled='disabled' */}
                <button className='btn btn-primary text-xl'>Purchase</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
