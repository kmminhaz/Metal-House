import React from 'react';

const AddProduct = () => {
    return (
      <div>
        <div className='w-10/12 mx-auto lg:mx-0'>
          <div className='lg:w-1/2 mx-auto my-10'>
            <div class='divider font-bold text-2xl pt-5 pb-10'>Add A New Product</div>
            <div className='card p-10 text-left bg-base-300 rounded-2xl'>
              <div className='py-1'>
                <label className='label'>
                  <span className='label-text text-sm'>Name</span>
                </label>
                <input
                  type='text'
                  class='input w-full font-bold'
                ></input>
              </div>
              <div className='py-1'>
                <label className='label'>
                  <span className='label-text text-sm'>Description</span>
                </label>
                <textarea
                  type='text'
                  class='input w-full font-bold h-28'
                ></textarea>
              </div>
              <div className='py-1'>
                <label className='label'>
                  <span className='label-text text-sm'>Available Quantity</span>
                </label>
                <input
                  type='text'
                  class='input w-full font-bold'
                ></input>
              </div>
              <div className='py-1'>
                <label className='label'>
                  <span className='label-text text-sm'>Minimum Order Quantity</span>
                </label>
                <input
                  type='text'
                  class='input w-full font-bold'
                ></input>
              </div>
            </div>
            <div>
              <button className='btn btn-primary text-bold my-4 btn-wide text-xl'>
                {" "}
                Add{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddProduct;