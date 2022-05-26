import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='w-10/12 mx-auto'>
      <div>
        <h1 className='font-bold text-5xl pt-10'>LOG IN</h1>
        {/* <p className='text-xl mt-2 text-success'> Hello Minhaz! </p> */}
        {/* <p className='text-xl mt-2 text-error'> Hello Minhaz! </p> */}
      </div>
      <div className='card lg:w-2/6 mt-5 my-10 mx-auto shadow-2xl bg-base-200'>
        <div className='card-body'>
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
              <span className='label-text'>Password</span>
            </label>
            <input
              type='text'
              placeholder='password'
              className='input input-bordered'
            />
            <label className='label'>
              <Link
                to='#'
                className='font-bold label-text-alt link link-hover mt-1 text-white'
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className='form-control mt-6'>
            <button className='btn btn-primary text-xl'>Login</button>
            <div className='modal-footer mx-5 pt-3 mb-1'>
              <p className='font-small flex justify-end items-center label'>
                <span className='pr-2'>Don't have an account? </span>
                <Link
                  to='/register'
                  className='font-bold label-text-alt link link-hover text-sm text-white'
                >
                  Register
                </Link>
              </p>
            </div>
          </div>
          <div class='divider'>OR</div>
          <h2>Login with Google</h2>
          <div className='form-control mt-6'>
            <button className='btn text-error font-bold text-2xl'>Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
