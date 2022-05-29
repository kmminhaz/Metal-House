import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle, useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, user, loading, errorGmail] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, userPassword, loadingPassword, errorPassword] =
    useSignInWithEmailAndPassword(auth);

  let redirectFrom = location?.state?.from?.pathname || "/";

  if (user || userPassword) {
    navigate(redirectFrom);
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data;
    signInWithEmailAndPassword(email, password);
  }; 

  return (
    <div className='w-10/12 mx-auto'>
      <div>
        <h1 className='font-bold text-4xl pt-5'>LOGIN</h1>
        {(errorPassword || errorGmail) && (
          <p className='text-xl mt-2 text-error'>
            {errorPassword?.message} || {errorGmail?.message}
          </p>
        )}
      </div>
      <div className='card lg:w-2/6 mt-5 my-10 mx-auto shadow-2xl bg-base-200'>
        <div className='card-body'>
          <form onSubmit={handleSubmit(onSubmit)}>
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

            <input
              type='submit'
              className='btn btn-primary text-xl w-full mt-10'
              value='Login'
            />
          </form>
          <label className='label'>
            <Link
              to='#'
              className='font-bold label-text-alt link link-hover mt-1 text-white'
            >
              Forgot password?
            </Link>
          </label>
          <div className='form-control'>
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
          <h2>Login with</h2>
          <div className='form-control mt-6'>
            <button
              className='btn text-error font-bold text-2xl'
              onClick={() => signInWithGoogle()}
            >
              {" "}
              Google{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
