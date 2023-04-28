import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    const review = {
      reviewerName: user.displayName,
      reviewerEmail: user.email,
      reviewerOpinion: data.opinion,
      rating: data.rating,
    };
    await fetch("https://metal-house-server.vercel.app/myReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success("Your review has been added Successfully!");
        }
      });
  };

  return (
    <div className='w-10/12 mx-auto lg:mx-0'>
      <div>
        <h1 className='font-bold text-3xl pt-10'>GIVE A REVIEW</h1>
        {/* <p className='text-xl mt-2 text-success'> Hello Minhaz! </p>
          <p className='text-xl mt-2 text-error'> Hello Minhaz! </p> */}
      </div>
      <div className='card lg:w-1/2 mt-5 my-10 mx-auto shadow-2xl bg-base-200'>
        <div className='card-body'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Your Name</span>
              </label>
              <input
                type='text'
                className='input w-full text-lg text-white'
                value={user.displayName}
                readOnly
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='text'
                className='input w-full text-lg text-white'
                value={user.email}
                readOnly
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Opinion</span>
              </label>
              <textarea
                {...register("opinion", {
                  required: true,
                })}
                class='textarea textarea-bordered'
                placeholder='Write Your Opinion Here'
              ></textarea>
              <label className='text-error pt-1'>
                {errors.opinion && "Opinion is Required"}
              </label>
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Rating</span>
              </label>
              <input
                {...register("rating", {
                  required: true,
                })}
                type='text'
                placeholder='rating'
                className='input input-bordered'
              ></input>
              <label className='text-error pt-1'>
                {errors.rating && "Rating is Required"}
              </label>
            </div>
            <div className='form-control mt-6'>
              <button type='submit' className='btn btn-primary text-xl'>
                Add Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
