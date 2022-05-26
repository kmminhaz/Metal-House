import React from 'react';
import { Link } from 'react-router-dom';

const AddReview = () => {
    return (
      <div className='w-10/12 mx-auto lg:mx-0'>
        <div>
          <h1 className='font-bold text-3xl pt-10'>GIVE A REVIEW</h1>
          {/* <p className='text-xl mt-2 text-success'> Hello Minhaz! </p> */}
          {/* <p className='text-xl mt-2 text-error'> Hello Minhaz! </p> */}
        </div>
        <div className='card lg:w-1/2 mt-5 my-10 mx-auto shadow-2xl bg-base-200'>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                placeholder='name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Opinion</span>
              </label>
              <textarea
                class='textarea textarea-bordered'
                placeholder='Write Your Opinion Here'
              ></textarea>
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Rating</span>
              </label>
              <input
                type='text'
                placeholder='rating'
                className='input input-bordered'
              ></input>
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary text-xl'>Add Review</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddReview;