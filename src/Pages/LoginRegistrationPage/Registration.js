import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
      <div className='w-10/12 mx-auto'>
        <div>
          <h1 className='font-bold text-5xl pt-5 pb-5'>REGISTER</h1>
          {/* <p className='text-xl mt-2 text-success'> Hello Minhaz! </p>
          <p className='text-xl mt-2 text-error'> Hello Minhaz! </p> */}
        </div>
        <div className='card lg:w-2/6 mt-5 my-10 mx-auto shadow-2xl bg-base-200'>
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
                <span className='label-text'>Phone</span>
              </label>
              <input
                type='text'
                placeholder='phone'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                placeholder='email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='text'
                placeholder='password'
                className='input input-bordered'
              />
            </div>
            <div className='form-control mt-6'>
              <button className='btn btn-primary text-xl'>Register</button>
              <div className='modal-footer mx-5 pt-3 mb-1'>
                <p className='font-small flex justify-end items-center label'>
                  <span className='pr-2'>Already have an account? </span>
                  <Link
                    to='/login'
                    className='font-bold label-text-alt link link-hover text-sm text-white'
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;