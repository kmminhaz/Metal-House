import React from 'react';
import nutebolts from "../../../Assets/Images/bolts-nuts.jpg"

const Payment = () => {
    return (
      <div className='w-10/12 mx-auto'>
        <div className='lg:w-1/2 mx-auto my-10'>
          <div className='p-10 text-left bg-base-300 rounded-lg'>
            <img
              src={nutebolts}
              alt=''
              className='lg:w-1/2 mx-auto rounded-lg'
            />
            <h3 className='text-2xl text-center py-2'>Nutes & Bolts</h3>
            <p className='text-xl pb-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              natus quisquam doloribus, voluptatum possimus cum tenetur fuga
              voluptates, quam non, itaque a maxime reiciendis nihil fugit unde
              quidem inventore ducimus?
            </p>
            <h5 className='text-xl font-bold'>
              Price : <span className='text-white'> 0.50 $</span>
            </h5>
            <h5 className='text-xl font-bold'>
              Ordered Quantity : <span className='text-white'>6000</span>
            </h5>
            <h5 className='text-xl font-bold py-5'>
              Total Payable Amount : <span className='text-white'>1000 $</span>
            </h5>
          </div>
        </div>
      </div>
    );
};

export default Payment;