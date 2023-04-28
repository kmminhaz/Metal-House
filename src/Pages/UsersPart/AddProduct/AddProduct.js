import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    await fetch("https://metal-house-server.vercel.app/tools", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.success(" The Product Successfully Added! ");
        }
      });
  };
  return (
    <div>
      <div className='w-10/12 mx-auto lg:mx-0'>
        <div className='lg:w-1/2 mx-auto pb-3'>
          <div class='divider font-bold text-2xl pt-5 pb-2'>
            Add A New Product
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='card p-8 text-left bg-base-300 rounded-2xl'>
              <div className=''>
                <label className='label'>
                  <span className='label-text text-sm'>Name</span>
                </label>
                <input
                  {...register("name", {
                    required: true,
                  })}
                  type='text'
                  class='input w-full font-bold'
                ></input>
                <label className='text-error pt-1'>
                  {errors.name && "Name is Required"}
                </label>
              </div>
              <div className=''>
                <label className='label'>
                  <span className='label-text text-sm'>Photo URL</span>
                </label>
                <input
                  {...register("img", {
                    required: true,
                  })}
                  type='text'
                  class='input w-full font-bold'
                ></input>
                <label className='text-error pt-1'>
                  {errors.img && "Photo URL is Required"}
                </label>
              </div>
              <div className=''>
                <label className='label'>
                  <span className='label-text text-sm'>Description</span>
                </label>
                <textarea
                  {...register("description", {
                    required: true,
                  })}
                  type='text'
                  class='input w-full font-bold h-28'
                ></textarea>
                <label className='text-error pt-1'>
                  {errors.description && "Description is Required"}
                </label>
              </div>
              <div className=''>
                <label className='label'>
                  <span className='label-text text-sm'>Price</span>
                </label>
                <input
                  {...register("price", {
                    required: true,
                  })}
                  type='number'
                  class='input w-full font-bold'
                ></input>
                <label className='text-error pt-1'>
                  {errors.price && "Price is Required"}
                </label>
              </div>
              <div className=''>
                <label className='label'>
                  <span className='label-text text-sm'>Available Quantity</span>
                </label>
                <input
                  {...register("available_quantity", {
                    required: true,
                  })}
                  type='number'
                  class='input w-full font-bold'
                ></input>
                <label className='text-error pt-1'>
                  {errors.available_quantity &&
                    "Available Quantity is Required"}
                </label>
              </div>
              <div className=''>
                <label className='label'>
                  <span className='label-text text-sm'>
                    Minimum Order Quantity
                  </span>
                </label>
                <input
                  {...register("minimum_order_quantity", {
                    required: true,
                  })}
                  type='number'
                  class='input w-full font-bold'
                ></input>
                <label className='text-error pt-1'>
                  {errors.minimum_order_quantity &&
                    "Minimum Order Quantity is Required"}
                </label>
              </div>
              <div>
                <button className='btn btn-primary text-bold mt-10 w-full text-xl'>
                  {" "}
                  Add Product{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
