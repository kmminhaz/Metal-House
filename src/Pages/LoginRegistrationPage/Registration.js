import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { async } from "@firebase/util";
import useToken from "../../Hooks/useToken";
import Loading from "../Shared/Loading/Loading";

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);
  const [token] = useToken(user);

  let redirectFrom = location?.state?.from?.pathname || "/";

  if(user){
    navigate(redirectFrom);
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const {name, email, password} = data;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  if (loading || updating) {
    return <Loading></Loading>;
  }

  return (
    <div className='w-10/12 mx-auto'>
      <div>
        <h1 className='font-bold text-4xl pt-5 pb-5'>REGISTER</h1>
        {user && (
          <p className='text-xl mt-2 text-success'> Hello {user.email}! </p>
        )}
        {(error || errorProfile) && (
          <p className='text-xl mt-2 text-error'>
            {" "}
            {error?.message || errorProfile?.message}
          </p>
        )}
      </div>
      <div className='card lg:w-2/6 mt-5 my-10 mx-auto shadow-2xl bg-base-200'>
        <div className='card-body'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                {...register("name", {
                  required: true,
                })}
                type='text'
                placeholder='Name'
                className='input input-bordered w-full'
              />
              <label className='text-error'>
                {errors.name && "Name is Required"}
              </label>
            </div>
            <div className=''>
              <label class='label'>
                <span class='label-text pt-3'>Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email Address is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Email Address Pattern is Wrong",
                  },
                })}
                type='email'
                placeholder='Email'
                className='input input-bordered w-full'
              />
              <label className='text-error'>
                {errors.email?.type === "required" && (
                  <span>{errors.email.message}</span>
                )}
                {errors.email?.type === "pattern" && errors.email.message}
              </label>
            </div>

            <div className=''>
              <label class='label'>
                <span class='label-text pt-3'>Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/,
                    message:
                      "Password Should Contain at least one digit, one lower case, one upper case And 8 characters",
                  },
                })}
                type='password'
                placeholder='Password'
                class='input input-bordered w-full'
              />
              <label className='text-error'>
                {errors.password?.type === "required" && (
                  <span>{errors.password.message}</span>
                )}
                {errors.password?.type === "pattern" && errors.password.message}
              </label>
            </div>
            <div className='form-control mt-6'>
              <button type='submit' className='btn btn-primary text-xl'>
                Register
              </button>
            </div>
          </form>
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
  );
};

export default Registration;
