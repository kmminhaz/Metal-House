import React from "react";

const MyProfile = () => {
  return (
    <div className='w-10/12 mx-auto lg:mx-0'>
      <div className='lg:w-1/2 mx-auto my-10'>
        <div className='text-center lg:w-1/2 py-2 bg-base-300 rounded-2xl'>
          <h4 className='text-xl font-bold pb-2 text-white'>
            {" "}
            Your Cradentials{" "}
          </h4>
          <p>kmminhaj.khan@gmail.com</p>
          <p>K. M. Minhaz Uddin</p>
        </div>
        <div class='divider font-bold'>OTHER DETAILS</div>
        <div className='card p-10 text-left bg-base-300 rounded-2xl'>
          <div className='py-1'>
            <label className='label'>
              <span className='label-text text-sm'>Education</span>
            </label>
            <input
              type='text'
              class='input w-full font-bold'
              value='Gradute Computer Science Engineering Student'
            ></input>
          </div>
          <div className='py-1'>
            <label className='label'>
              <span className='label-text text-sm'>Location</span>
            </label>
            <input
              type='text'
              class='input w-full font-bold'
              value='Level-4, 54, Rose Vila, Dhanmondi, Dhaka'
            ></input>
          </div>
          <div className='py-1'>
            <label className='label'>
              <span className='label-text text-sm'>Phone Number</span>
            </label>
            <input
              type='text'
              class='input w-full font-bold'
              value='01710427591'
            ></input>
          </div>
          <div className='py-1'>
            <label className='label'>
              <span className='label-text text-sm'>Linked-In Profile</span>
            </label>
            <input
              type='text'
              class='input w-full font-bold'
              value='http://localhost:3000/dashboard'
            ></input>
          </div>
        </div>
        <div>
          <button className='btn btn-success text-bold my-4 btn-wide text-xl'>
            {" "}
            Update{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
